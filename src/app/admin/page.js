'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPosts, getCategories } from '@/lib/firestore';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    categories: 0
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const posts = await getPosts({ limit: 100 });
        const categories = await getCategories('doi-song'); // Fetching from some group
        
        const total = posts.length;
        const published = posts.filter(p => p.published).length;
        const drafts = total - published;
        
        setStats({
          total,
          published,
          drafts,
          categories: categories.length
        });
        
        // Sort by date (assuming they have createdAt or date field) and take latest 5
        const sorted = [...posts].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
        setRecentPosts(sorted.slice(0, 5));
      } catch (error) {
        console.error("Error loading dashboard data", error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  return (
    <div>
      <div className="admin-flex-between" style={{ marginBottom: '24px' }}>
        <h1 className="admin-h1" style={{ marginBottom: 0 }}>Dashboard</h1>
        <Link href="/admin/posts/new" className="admin-btn admin-btn-primary">
          + Tạo bài viết mới
        </Link>
      </div>
      
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <>
          <div className="admin-grid" style={{ marginBottom: '32px' }}>
            <div className="admin-card admin-stat-card">
              <div className="admin-stat-value">{stats.total}</div>
              <div className="admin-stat-label">Tổng bài viết</div>
            </div>
            <div className="admin-card admin-stat-card">
              <div className="admin-stat-value">{stats.published}</div>
              <div className="admin-stat-label">Đã xuất bản</div>
            </div>
            <div className="admin-card admin-stat-card">
              <div className="admin-stat-value">{stats.drafts}</div>
              <div className="admin-stat-label">Bản nháp</div>
            </div>
            <div className="admin-card admin-stat-card">
              <div className="admin-stat-value">{stats.categories}</div>
              <div className="admin-stat-label">Danh mục</div>
            </div>
          </div>
          
          <h2 className="admin-h2">Bài viết gần đây</h2>
          <div className="admin-card" style={{ padding: 0 }}>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Tiêu đề</th>
                    <th>Danh mục</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPosts.length === 0 ? (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>Chưa có bài viết nào</td>
                    </tr>
                  ) : (
                    recentPosts.map(post => (
                      <tr key={post.id}>
                        <td style={{ fontWeight: 500 }}>{post.title}</td>
                        <td>{post.categoryId || 'N/A'}</td>
                        <td>
                          <span className={`admin-badge ${post.published ? 'admin-badge-success' : 'admin-badge-draft'}`}>
                            {post.published ? 'Đã xuất bản' : 'Bản nháp'}
                          </span>
                        </td>
                        <td>
                          <Link href={`/admin/posts/${post.id}`} className="admin-btn admin-btn-secondary" style={{ padding: '4px 8px', fontSize: '12px' }}>
                            Chỉnh sửa
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
