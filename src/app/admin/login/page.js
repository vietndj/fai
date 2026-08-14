'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/admin');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/admin');
    } catch (error) {
      console.error("Login failed", error);
      alert("Đăng nhập thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <h1 className="admin-h1" style={{ color: 'var(--admin-accent)', marginBottom: '8px' }}>FAI CMS</h1>
        <p style={{ color: 'var(--admin-text-muted)', marginBottom: '32px' }}>Hệ thống quản trị nội dung</p>
        
        <button 
          onClick={handleLogin} 
          className="admin-btn admin-btn-primary" 
          style={{ width: '100%', padding: '12px', fontSize: '16px' }}
        >
          Đăng nhập bằng Google
        </button>
      </div>
    </div>
  );
}
