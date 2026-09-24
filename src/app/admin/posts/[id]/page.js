/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useRef, use } from 'react';
import { useRouter } from 'next/navigation';
import { getPostById, updatePost, getCategories, uploadImage } from '@/lib/firestore';
import TipTapEditor from '@/components/admin/TipTapEditor';
import ArticlePreviewModal from '@/components/admin/ArticlePreviewModal';
import { Eye } from 'lucide-react';

function generateSlug(text) {
  if (!text) return '';
  const truncatedText = text.trim().split(/\\s+/).slice(0, 12).join(' ');
  return truncatedText
    .toString()
    .toLowerCase()
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
  const [previewOpen, setPreviewOpen] = useState(false);
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
    group: 'doi-song',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, postData] = await Promise.all([
          getCategories('doi-song'),
          getPostById(id),
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
            group: postData.group || 'doi-song',
          });
        }
      } catch (error) {
        console.error(error);
        alert('Lỗi tải dữ liệu bài viết');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setSaving(true);
      const url = await uploadImage(file);
      setFormData((prev) => ({ ...prev, image: url }));
    } catch (error) {
      console.error('Upload error', error);
      alert('Lỗi tải ảnh lên');
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async (isPublished = formData.published) => {
    try {
      setSaving(true);
      const postData = {
        ...formData,
        published: isPublished,
      };

      await updatePost(id, postData);
      router.push('/admin/posts');
    } catch (error) {
      console.error('Error updating post', error);
      alert('Lỗi khi lưu bài viết');
      setSaving(false);
    }
  };

  if (loading) return <div style={{ padding: '24px' }}>Đang tải...</div>;

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>
          Sửa bài viết
        </h1>
        <div className="admin-gap-4">
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="admin-btn admin-btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <Eye size={16} /> Xem trước (Live Preview)
          </button>
          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={saving}
            className="admin-btn admin-btn-secondary"
          >
            Lưu bản nháp
          </button>
          <button
            type="button"
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
                type="text"
                name="title"
                className="admin-input"
                value={formData.title}
                onChange={handleChange}
                placeholder="Nhập tiêu đề bài viết..."
                required
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Mô tả ngắn (Excerpt)</label>
              <textarea
                name="excerpt"
                className="admin-textarea"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Đoạn mô tả ngắn gọn nội dung bài viết hiển thị ở thẻ card..."
              />
            </div>

            <div className="admin-form-group" style={{ marginBottom: 0 }}>
              <div className="admin-flex-between" style={{ marginBottom: '8px' }}>
                <label className="admin-label" style={{ marginBottom: 0 }}>
                  Nội dung bài viết (Chuẩn WordPress Gutenberg)
                </label>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  className="admin-btn admin-btn-secondary"
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Eye size={13} /> Xem trước giao diện Đời Sống
                </button>
              </div>

              <TipTapEditor
                value={formData.contentHtml}
                onChange={(html) => setFormData((prev) => ({ ...prev, contentHtml: html }))}
                placeholder="Soạn thảo nội dung bài viết tại đây. Hỗ trợ đầy đủ Heading H2-H4, in đậm, nghiêng, trích dẫn, danh sách số, dấu chấm, chèn ảnh có chú thích, bôi đen văn bản để mở thanh công cụ nổi..."
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="admin-card">
            <div className="admin-form-group">
              <label className="admin-label">Trạng thái</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                />
                <label htmlFor="published">Xuất bản công khai</label>
              </div>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Đường dẫn (Slug)</label>
              <input
                type="text"
                name="slug"
                className="admin-input"
                value={formData.slug}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, slug: generateSlug(prev.title) }))}
                className="admin-btn admin-btn-secondary"
                style={{ marginTop: '8px', fontSize: '12px', padding: '4px 8px' }}
              >
                Tạo lại slug từ tiêu đề
              </button>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Danh mục</label>
              <select
                name="categoryId"
                className="admin-select"
                value={formData.categoryId}
                onChange={handleChange}
              >
                <option value="">Chọn danh mục</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Ngày đăng (DD-MM-YYYY)</label>
              <input
                type="text"
                name="date"
                className="admin-input"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="admin-card">
            <h3 className="admin-h2" style={{ fontSize: '16px' }}>
              Ảnh đại diện bài viết
            </h3>
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  marginBottom: '12px',
                  border: '1px solid #e2e8f0',
                }}
              />
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
              {saving ? 'Đang tải...' : formData.image ? 'Thay đổi ảnh' : 'Tải ảnh lên'}
            </button>
            <input
              type="text"
              placeholder="Hoặc dán URL ảnh..."
              value={formData.image}
              onChange={(e) => {
                let val = e.target.value;
                const driveMatch = val.match(/\\/file\\/d\\/([a-zA-Z0-9_-]+)/);
                if (driveMatch && driveMatch[1]) {
                  val = \`https://drive.google.com/uc?export=view&id=\${driveMatch[1]}\`;
                }
                setFormData((prev) => ({ ...prev, image: val }));
              }}
              className="admin-input"
              style={{ marginTop: '8px' }}
            />
          </div>

          <div className="admin-card">
            <h3 className="admin-h2" style={{ fontSize: '16px' }}>
              Thông tin thêm
            </h3>
            <div className="admin-form-group">
              <label className="admin-label">Tác giả</label>
              <input
                type="text"
                name="author"
                className="admin-input"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Thời gian đọc (phút)</label>
              <input
                type="text"
                name="readTime"
                className="admin-input"
                value={formData.readTime}
                onChange={handleChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Link nguồn (nếu có)</label>
              <input
                type="text"
                name="sourceUrl"
                className="admin-input"
                value={formData.sourceUrl}
                onChange={handleChange}
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Thứ tự hiển thị (Order)</label>
              <input
                type="number"
                name="order"
                className="admin-input"
                value={formData.order}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview Modal */}
      <ArticlePreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        post={formData}
        categories={categories}
      />
    </div>
  );
}
