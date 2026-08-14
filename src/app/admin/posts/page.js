'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPosts, getCategories, deletePost, updatePost } from '@/lib/firestore';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null });

  const loadData = async () => {
    setLoading(true);
    try {
      const [fetchedPosts, fetchedCats] = await Promise.all([
        getPosts({ group: 'doi-song' }),
        getCategories('doi-song')
      ]);
      setPosts(fetchedPosts);
      setCategories(fetchedCats);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeleteClick = (id) => {
    setDeleteModal({ show: true, id });
  };

  const confirmDelete = async () => {
    if (deleteModal.id) {
      try {
        await deletePost(deleteModal.id);
        setPosts(posts.filter(p => p.id !== deleteModal.id));
        setDeleteModal({ show: false, id: null });
      } catch (error) {
        console.error("Error deleting post", error);
        alert("Có lỗi xảy ra khi xóa bài viết");
      }
    }
  };

  const togglePublished = async (post) => {
    try {
      const newStatus = !post.published;
      await updatePost(post.id, { published: newStatus });
      setPosts(posts.map(p => p.id === post.id ? { ...p, published: newStatus } : p));
    } catch (error) {
      console.error("Error updating status", error);
      alert("Có lỗi xảy ra khi cập nhật trạng thái");
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.categoryId === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>Quản lý bài viết</h1>
        <Link href="/admin/posts/new" className="admin-btn admin-btn-primary">
          + Tạo bài viết mới
        </Link>
      </div>

      <div className="admin-card">
        <div className="admin-flex-between" style={{ marginBottom: '20px', gap: '16px', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            className="admin-input" 
            placeholder="Tìm kiếm theo tiêu đề..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <select 
            className="admin-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ maxWidth: '200px' }}
          >
            <option value="">Tất cả danh mục</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.title}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Tiêu đề</th>
                  <th>Danh mục</th>
                  <th>Ngày</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>Không tìm thấy bài viết nào.</td>
                  </tr>
                ) : (
                  filteredPosts.map(post => (
                    <tr key={post.id}>
                      <td style={{ fontWeight: 500 }}>{post.title}</td>
                      <td>
                        {categories.find(c => c.id === post.categoryId)?.title || post.categoryId || 'N/A'}
                      </td>
                      <td>{post.date || 'N/A'}</td>
                      <td>
                        <button 
                          onClick={() => togglePublished(post)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          <span className={`admin-badge ${post.published ? 'admin-badge-success' : 'admin-badge-draft'}`}>
                            {post.published ? 'Đã xuất bản' : 'Bản nháp'}
                          </span>
                        </button>
                      </td>
                      <td>
                        <div className="admin-gap-2">
                          <Link href={`/admin/posts/${post.id}`} className="admin-btn admin-btn-secondary" style={{ padding: '4px 8px', fontSize: '12px' }}>
                            Sửa
                          </Link>
                          <button 
                            onClick={() => handleDeleteClick(post.id)}
                            className="admin-btn admin-btn-danger" 
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteModal.show && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h2 className="admin-h2">Xác nhận xóa</h2>
            <p style={{ marginBottom: '24px' }}>Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.</p>
            <div className="admin-flex-between">
              <button 
                onClick={() => setDeleteModal({ show: false, id: null })} 
                className="admin-btn admin-btn-secondary"
              >
                Hủy
              </button>
              <button 
                onClick={confirmDelete} 
                className="admin-btn admin-btn-danger"
              >
                Xóa bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
