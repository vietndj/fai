'use client';
import { useState, useEffect, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import { getPostById, updatePost, getCategories, uploadImage } from '@/lib/firestore';

function generateSlug(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export default function EditPostPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    categoryId: '',
    date: '',
    image: '',
    excerpt: '',
    contentHtml: '',
    sourceUrl: '',
    author: '',
    readTime: '',
    order: 0,
    published: false,
    group: 'doi-song'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, postData] = await Promise.all([
          getCategories('doi-song'),
          getPostById(id)
        ]);
        
        setCategories(cats);
        
        if (postData) {
          setFormData({
            title: postData.title || '',
            slug: postData.slug || '',
            categoryId: postData.categoryId || '',
            date: postData.date || '',
            image: postData.image || '',
            excerpt: postData.excerpt || '',
            contentHtml: postData.contentHtml || '',
            sourceUrl: postData.sourceUrl || '',
            author: postData.author || '',
            readTime: postData.readTime || '',
            order: postData.order || 0,
            published: postData.published || false,
            group: postData.group || 'doi-song'
          });
          
          if (editorRef.current) {
            editorRef.current.innerHTML = postData.contentHtml || '';
          }
        }
      } catch (error) {
        console.error(error);
        alert("Lỗi tải dữ liệu bài viết");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setSaving(true);
      const url = await uploadImage(file);
      setFormData(prev => ({ ...prev, image: url }));
    } catch (error) {
      console.error("Upload error", error);
      alert("Lỗi tải ảnh lên");
    } finally {
      setSaving(false);
    }
  };

  const execCmd = (cmd, arg = null) => {
    document.execCommand(cmd, false, arg);
    editorRef.current.focus();
  };

  const handleSave = async (isPublished = formData.published) => {
    try {
      setSaving(true);
      const contentHtml = editorRef.current.innerHTML;
      const postData = {
        ...formData,
        contentHtml,
        published: isPublished
      };
      
      await updatePost(id, postData);
      router.push('/admin/posts');
    } catch (error) {
      console.error("Error updating post", error);
      alert("Lỗi khi lưu bài viết");
      setSaving(false);
    }
  };

  if (loading) return <div style={{ padding: '24px' }}>Đang tải...</div>;

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>Sửa bài viết</h1>
        <div className="admin-gap-4">
          <button 
            onClick={() => handleSave(false)} 
            disabled={saving}
            className="admin-btn admin-btn-secondary"
          >
            Lưu bản nháp
          </button>
          <button 
            onClick={() => handleSave(true)} 
            disabled={saving}
            className="admin-btn admin-btn-primary"
          >
            Cập nhật
          </button>
        </div>
      </div>

      <div className="admin-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="admin-card">
            <div className="admin-form-group">
              <label className="admin-label">Tiêu đề bài viết</label>
              <input 
                type="text" name="title" className="admin-input" 
                value={formData.title} onChange={handleChange} required 
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Mô tả ngắn (Excerpt)</label>
              <textarea 
                name="excerpt" className="admin-textarea" 
                value={formData.excerpt} onChange={handleChange} 
              />
            </div>
            
            <div className="admin-form-group" style={{ marginBottom: 0 }}>
              <label className="admin-label">Nội dung bài viết</label>
              <div className="admin-rte">
                <div className="admin-rte-toolbar">
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('bold')}><b>B</b></button>
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('italic')}><i>I</i></button>
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('formatBlock', 'H3')}>H3</button>
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('insertUnorderedList')}>• List</button>
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('insertOrderedList')}>1. List</button>
                  <button type="button" className="admin-rte-btn" onClick={() => execCmd('formatBlock', 'BLOCKQUOTE')}>"Quote"</button>
                  <button type="button" className="admin-rte-btn" onClick={() => {
                    const url = prompt('Nhập URL liên kết:');
                    if (url) execCmd('createLink', url);
                  }}>Link</button>
                </div>
                <div 
                  ref={editorRef}
                  className="admin-rte-content" 
                  contentEditable 
                  suppressContentEditableWarning
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="admin-card">
            <div className="admin-form-group">
              <label className="admin-label">Trạng thái</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input 
                  type="checkbox" id="published" name="published" 
                  checked={formData.published} onChange={handleChange} 
                />
                <label htmlFor="published">Xuất bản</label>
              </div>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Đường dẫn (Slug)</label>
              <input 
                type="text" name="slug" className="admin-input" 
                value={formData.slug} onChange={handleChange} 
              />
              <button 
                type="button" 
                onClick={() => setFormData(prev => ({...prev, slug: generateSlug(prev.title)}))}
                className="admin-btn admin-btn-secondary"
                style={{ marginTop: '8px', fontSize: '12px', padding: '4px 8px' }}
              >
                Tạo lại slug từ tiêu đề
              </button>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Danh mục</label>
              <select 
                name="categoryId" className="admin-select" 
                value={formData.categoryId} onChange={handleChange}
              >
                <option value="">Chọn danh mục</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Ngày đăng (DD-MM-YYYY)</label>
              <input 
                type="text" name="date" className="admin-input" 
                value={formData.date} onChange={handleChange} 
              />
            </div>
          </div>

          <div className="admin-card">
            <h3 className="admin-h2" style={{ fontSize: '16px' }}>Ảnh đại diện</h3>
            {formData.image && (
              <img src={formData.image} alt="Preview" style={{ width: '100%', height: 'auto', borderRadius: '6px', marginBottom: '12px' }} />
            )}
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
            <button 
              type="button" 
              onClick={() => fileInputRef.current?.click()} 
              className="admin-btn admin-btn-secondary"
              style={{ width: '100%' }}
              disabled={saving}
            >
              {saving ? 'Đang tải...' : (formData.image ? 'Thay đổi ảnh' : 'Tải ảnh lên')}
            </button>
            <input 
              type="text" 
              placeholder="Hoặc dán URL ảnh..." 
              value={formData.image} 
              onChange={e => setFormData(prev => ({...prev, image: e.target.value}))} 
              className="admin-input" 
              style={{marginTop: '8px'}} 
            />
          </div>

          <div className="admin-card">
            <h3 className="admin-h2" style={{ fontSize: '16px' }}>Thông tin thêm</h3>
            <div className="admin-form-group">
              <label className="admin-label">Tác giả</label>
              <input type="text" name="author" className="admin-input" value={formData.author} onChange={handleChange} />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Thời gian đọc (phút)</label>
              <input type="text" name="readTime" className="admin-input" value={formData.readTime} onChange={handleChange} />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Link nguồn (nếu có)</label>
              <input type="text" name="sourceUrl" className="admin-input" value={formData.sourceUrl} onChange={handleChange} />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Thứ tự hiển thị (Order)</label>
              <input type="number" name="order" className="admin-input" value={formData.order} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
