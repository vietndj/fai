'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import './admin.css';

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else if (!pathname.startsWith('/admin/login')) {
        router.push('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  // Login page: render without sidebar
  if (pathname.startsWith('/admin/login')) {
    return <>{children}</>;
  }

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f172a', color: 'white' }}>Đang tải...</div>;
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          FAI Admin
        </div>
        <nav className="admin-sidebar-nav">
          <Link href="/admin" className={`admin-nav-item ${pathname === '/admin' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link href="/admin/posts" className={`admin-nav-item ${pathname.startsWith('/admin/posts') ? 'active' : ''}`}>
            Bài viết
          </Link>
          <Link href="/admin/categories" className={`admin-nav-item ${pathname.startsWith('/admin/categories') ? 'active' : ''}`}>
            Danh mục
          </Link>
        </nav>
        <div className="admin-sidebar-footer">
          <div style={{ marginBottom: '12px', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {user.email}
          </div>
          <button onClick={handleLogout} className="admin-btn admin-btn-secondary" style={{ width: '100%' }}>
            Đăng xuất
          </button>
        </div>
      </aside>
      <main className="admin-main-content">
        {children}
      </main>
    </div>
  );
}
