'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { getPostBySlug, getPostById } from '@/lib/firestore';
import Footer from '@/components/Footer';

export default function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        // Try slug first
        let fetchedPost = await getPostBySlug(slug);
        // Fallback to id if not found
        if (!fetchedPost) {
          fetchedPost = await getPostById(slug);
        }
        
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Không tìm thấy bài viết');
        }
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Có lỗi xảy ra khi tải bài viết');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Đang tải bài viết...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
        <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '16px' }}>{error || 'Không tìm thấy bài viết'}</h1>
        <Link href="/doi-song" style={{ padding: '10px 20px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
          Quay lại Đời sống FAI
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '850px', margin: '0 auto', width: '100%' }}>
        <Link href="/doi-song" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', textDecoration: 'none', marginBottom: '32px', fontWeight: 500 }}>
          <ArrowLeft size={18} />
          Quay lại
        </Link>
        
        <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)' }}>
          {post.image && (
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
            </div>
          )}
          
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {post.date && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>
                  <Calendar size={16} />
                  {post.date}
                </span>
              )}
              {post.readTime && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>
                  <Clock size={16} />
                  {post.readTime}
                </span>
              )}
            </div>
            
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#0f172a', lineHeight: '1.3', marginBottom: '32px', fontFamily: 'var(--font-heading-medium)' }}>
              {post.title}
            </h1>
            
            <div 
              className="article-body-html"
              style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}
              dangerouslySetInnerHTML={{ __html: post.contentHtml || `<p>${post.excerpt}</p>` }}
            />
            
            {post.sourceUrl && (
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #e2e8f0' }}>
                <a 
                  href={post.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'var(--primary, #0f172a)', 
                    color: '#ffffff', 
                    padding: '12px 24px', 
                    borderRadius: '30px', 
                    fontWeight: 600, 
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Xem bài viết gốc trên trang báo
                  <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
