'use client';
import { useState, useEffect } from 'react';
import { getCategories, createCategory, updateCategory, deleteCategory } from '@/lib/firestore';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    eyebrow: '',
    group: 'doi-song',
    order: 0
  });

  const loadCategories = async () => {
    try {
      const cats = await getCategories('doi-song');
      setCategories(cats.sort((a, b) => (a.order || 0) - (b.order || 0)));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const openNewModal = () => {
    setFormData({ id: null, title: '', eyebrow: '', group: 'doi-song', order: categories.length + 1 });
    setIsEditing(false);
    setModalOpen(true);
  };

  const openEditModal = (cat) => {
    setFormData({ ...cat });
    setIsEditing(true);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, ...dataToSave } = formData;
      dataToSave.order = Number(dataToSave.order);
      
      if (isEditing) {
        await updateCategory(id, dataToSave);
      } else {
        await createCategory(dataToSave);
      }
      
      closeModal();
      loadCategories();
    } catch (error) {
      console.error(error);
      alert("Lỗi khi lưu danh mục");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa danh mục này?")) {
      try {
        await deleteCategory(id);
        loadCategories();
      } catch (error) {
        console.error(error);
        alert("Lỗi khi xóa");
      }
    }
  };

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>Quản lý danh mục</h1>
        <button onClick={openNewModal} className="admin-btn admin-btn-primary">
          + Thêm danh mục
        </button>
      </div>

      <div className="admin-card" style={{ padding: 0 }}>
        {loading ? (
          <p style={{ padding: '24px' }}>Đang tải...</p>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Thứ tự</th>
                  <th>Tiêu đề</th>
                  <th>Nhãn phụ (Eyebrow)</th>
                  <th>Nhóm</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {categories.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>Chưa có danh mục nào.</td>
                  </tr>
                ) : (
                  categories.map(cat => (
                    <tr key={cat.id}>
                      <td>{cat.order || 0}</td>
                      <td style={{ fontWeight: 500 }}>{cat.title}</td>
                      <td>{cat.eyebrow || '-'}</td>
                      <td>{cat.group}</td>
                      <td>
                        <div className="admin-gap-2">
                          <button 
                            onClick={() => openEditModal(cat)} 
                            className="admin-btn admin-btn-secondary"
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                          >
                            Sửa
                          </button>
                          <button 
                            onClick={() => handleDelete(cat.id)} 
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

      {modalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h2 className="admin-h2">{isEditing ? 'Sửa danh mục' : 'Thêm danh mục mới'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="admin-form-group">
                <label className="admin-label">Tiêu đề</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})} 
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Nhãn phụ (Eyebrow)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={formData.eyebrow} 
                  onChange={e => setFormData({...formData, eyebrow: e.target.value})} 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Nhóm (Group)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  value={formData.group} 
                  onChange={e => setFormData({...formData, group: e.target.value})} 
                  required 
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Thứ tự hiển thị (Order)</label>
                <input 
                  type="number" 
                  className="admin-input" 
                  value={formData.order} 
                  onChange={e => setFormData({...formData, order: e.target.value})} 
                />
              </div>
              <div className="admin-flex-between" style={{ marginTop: '24px' }}>
                <button type="button" onClick={closeModal} className="admin-btn admin-btn-secondary">
                  Hủy
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  {isEditing ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
