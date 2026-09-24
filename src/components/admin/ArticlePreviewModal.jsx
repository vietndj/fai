/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import { X, ArrowRight, Calendar, Clock, User, Eye } from 'lucide-react';
import '@/app/doi-song/article.css';

export default function ArticlePreviewModal({ isOpen, onClose, post = {}, categories = [] }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const category = categories.find((c) => c.id === post.categoryId);
  const categoryName = post.categoryTitle || (category ? category.title : '');
  const displayDate = post.date || new Date().toISOString().split('T')[0].split('-').reverse().join('-');
  const bodyHtml = post.contentHtml || (post.excerpt ? `<p>${post.excerpt}</p>` : '<p><em>(Chưa có nội dung bài viết)</em></p>');

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 12, 26, 0.85)',
        backdropFilter: 'blur(8px)',
        animation: 'fadeInUp 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          color: '#1a2332',
          borderRadius: '24px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Preview Banner Ribbon */}
        <div
          style={{
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '8px 24px',
            fontSize: '0.8rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Eye size={15} style={{ color: 'var(--primary, #E8741E)' }} />
            <span>CHẾ ĐỘ XEM TRƯỚC (LIVE PREVIEW CHUẨN MODAL ĐỜI SỐNG)</span>
          </div>
          <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>Nhấn ESC hoặc bấm nút Đóng để thoát</span>
        </div>

        {/* Modal Header Bar */}
        <div
          style={{
            padding: '16px 30px',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: '#ffffff',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: 'var(--primary, #E8741E)',
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Calendar size={13} />
              {displayDate}
            </span>

            {categoryName && (
              <span
                style={{
                  background: 'rgba(232, 116, 30, 0.1)',
                  color: 'var(--primary, #E8741E)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                {categoryName}
              </span>
            )}

            {post.readTime && (
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Clock size={13} />
                {post.readTime} phút đọc
              </span>
            )}

            {post.author && (
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <User size={13} />
                {post.author}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng xem trước"
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--secondary, #0D2137)',
              transition: 'all 0.2s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: '30px 40px 40px 40px' }}>
          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: 'var(--secondary, #0D2137)',
              lineHeight: '1.3',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading-medium), var(--font-sans), sans-serif',
            }}
          >
            {post.title || 'Tiêu đề bài viết'}
          </h2>

          {/* Featured Image */}
          {post.image && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '30px',
                backgroundColor: '#f1f5f9',
              }}
            >
              <img
                src={post.image}
                alt={post.title || 'Ảnh đại diện'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Article Excerpt if available */}
          {post.excerpt && (
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.7',
                color: '#475569',
                fontStyle: 'italic',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              {post.excerpt}
            </p>
          )}

          {/* Article Body HTML with Scoped article.css */}
          <div
            className="article-body-html"
            style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#334155' }}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          {/* External Source Link */}
          {post.sourceUrl && (
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--primary, #E8741E)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Xem bài viết gốc trên trang báo
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
