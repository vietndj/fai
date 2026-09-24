'use client';
import { useState, useEffect } from 'react';
import { getAdminEmails, addAdminEmail, deleteAdminEmail } from '@/lib/firestore';

export default function AdminUsersPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadEmails();
  }, []);

  const loadEmails = async () => {
    setLoading(true);
    try {
      const data = await getAdminEmails();
      setEmails(data);
    } catch (error) {
      console.error("Error loading admin emails", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmail = async (e) => {
    e.preventDefault();
    if (!newEmail.trim()) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    // Check if exists in state
    if (emails.some(item => item.email.toLowerCase() === newEmail.trim().toLowerCase())) {
      alert('Email này đã tồn tại trong danh sách.');
      return;
    }

    setSubmitting(true);
    try {
      const added = await addAdminEmail(newEmail.trim().toLowerCase());
      setEmails([...emails, added]);
      setNewEmail('');
    } catch (error) {
      console.error("Error adding email", error);
      alert('Có lỗi xảy ra khi thêm email.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, email) => {
    if (!window.confirm(`Bạn có chắc muốn xóa quyền quản trị của ${email}?`)) {
      return;
    }
    
    try {
      await deleteAdminEmail(id);
      setEmails(emails.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting email", error);
      alert('Có lỗi xảy ra khi xóa email.');
    }
  };

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>Quản trị viên</h1>
      </div>

      <div className="admin-card" style={{ marginBottom: '24px' }}>
        <h2 className="admin-h2">Thêm người quản trị mới</h2>
        <form onSubmit={handleAddEmail} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Nhập địa chỉ email..."
            className="admin-input"
            style={{ maxWidth: '400px' }}
            disabled={submitting}
            required
          />
          <button 
            type="submit" 
            className="admin-btn admin-btn-primary" 
            disabled={submitting || !newEmail}
          >
            {submitting ? 'Đang thêm...' : '+ Thêm email'}
          </button>
        </form>
        <p style={{ marginTop: '8px', fontSize: '13px', color: '#64748b' }}>
          Những email trong danh sách này mới có thể đăng nhập bằng tài khoản Google để truy cập trang quản trị.
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-h2">Danh sách email được cấp quyền</h2>
        
        {loading ? (
          <p>Đang tải danh sách...</p>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th style={{ width: '100px' }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {emails.length === 0 ? (
                  <tr>
                    <td colSpan="2" style={{ textAlign: 'center', padding: '20px' }}>Chưa có email nào trong danh sách.</td>
                  </tr>
                ) : (
                  emails.map(item => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: 500 }}>{item.email}</td>
                      <td>
                        <button 
                          onClick={() => handleDelete(item.id, item.email)}
                          className="admin-btn admin-btn-danger" 
                          style={{ padding: '4px 8px', fontSize: '12px' }}
                        >
                          Xóa quyền
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
