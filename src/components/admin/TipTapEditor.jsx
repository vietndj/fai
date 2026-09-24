/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Heading2,
  Heading3,
  Heading4,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Upload,
  Loader2,
  X,
  Check,
} from 'lucide-react';
import '@/app/doi-song/article.css';

// Custom TipTap Image extension with Figure & Figcaption support
const CustomImage = Image.extend({
  name: 'image',
  addAttributes() {
    return {
      ...this.parent?.(),
      caption: {
        default: '',
        parseHTML: (element) => {
          const figcaption = element.querySelector('figcaption');
          return figcaption
            ? figcaption.textContent
            : element.getAttribute('data-caption') || element.getAttribute('title') || '';
        },
        renderHTML: (attributes) => {
          if (!attributes.caption) return {};
          return {
            'data-caption': attributes.caption,
            title: attributes.caption,
          };
        },
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const { caption, ...imgAttrs } = HTMLAttributes;
    if (caption) {
      return [
        'figure',
        { class: 'article-figure' },
        ['img', imgAttrs],
        ['figcaption', { class: 'article-caption' }, caption],
      ];
    }
    return ['img', imgAttrs];
  },
  parseHTML() {
    return [
      {
        tag: 'figure',
        getAttrs: (element) => {
          const img = element.querySelector('img');
          const figcaption = element.querySelector('figcaption');
          if (!img) return false;
          return {
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt') || '',
            caption: figcaption ? figcaption.textContent : '',
          };
        },
      },
      {
        tag: 'img[src]',
        getAttrs: (element) => ({
          src: element.getAttribute('src'),
          alt: element.getAttribute('alt') || '',
          caption: element.getAttribute('data-caption') || element.getAttribute('title') || '',
        }),
      },
    ];
  },
});

export default function TipTapEditor({ value, content, onChange, placeholder }) {
  const initialContent = value !== undefined ? value : content || '';
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageTab, setImageTab] = useState('upload'); // 'upload' | 'url'
  const [imageUrl, setImageUrl] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false, // Replaced with Heading extension configured for 2, 3, 4
      }),
      Heading.configure({
        levels: [2, 3, 4],
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Nhập nội dung bài viết...',
      }),
      CustomImage,
    ],
    content: initialContent,
    onUpdate: ({ editor: currentEditor }) => {
      onChange?.(currentEditor.getHTML());
    },
  });

  // Sync external value changes when not focused
  useEffect(() => {
    if (!editor) return;
    const targetValue = value !== undefined ? value : content || '';
    if (targetValue !== editor.getHTML() && !editor.isFocused) {
      editor.commands.setContent(targetValue, false);
    }
  }, [editor, value, content]);

  const setLinkPrompt = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Nhập địa chỉ liên kết (URL):', previousUrl || 'https://');

    if (url === null) return;
    if (url === '' || url === 'https://') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      setUploadError('');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('watermark', 'true');

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Tải ảnh lên thất bại.');
      }

      setImageUrl(data.url);
      if (!imageAlt) {
        setImageAlt(file.name.replace(/\.[^/.]+$/, ''));
      }
    } catch (err) {
      console.error('Lỗi upload ảnh:', err);
      setUploadError(err.message || 'Không thể tải ảnh lên.');
    } finally {
      setIsUploading(false);
    }
  };

  const insertImage = () => {
    if (!editor || !imageUrl.trim()) return;

    editor
      .chain()
      .focus()
      .setImage({
        src: imageUrl.trim(),
        alt: imageAlt.trim() || imageCaption.trim() || '',
        caption: imageCaption.trim(),
      })
      .run();

    // Reset and close
    setImageUrl('');
    setImageCaption('');
    setImageAlt('');
    setUploadError('');
    setImageModalOpen(false);
  };

  if (!editor) {
    return (
      <div className="tiptap-editor-container" style={{ padding: '24px', color: '#94a3b8' }}>
        Đang khởi tạo trình soạn thảo...
      </div>
    );
  }

  return (
    <div className="tiptap-editor-container">
      {/* Top Gutenberg-Style Toolbar */}
      <div className="tiptap-toolbar">
        {/* Undo / Redo */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className="tiptap-toolbar-btn"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Hoàn tác (Ctrl+Z)"
          >
            <Undo size={15} />
          </button>
          <button
            type="button"
            className="tiptap-toolbar-btn"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Làm lại (Ctrl+Y)"
          >
            <Redo size={15} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Headings & Paragraph */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('paragraph') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setParagraph().run()}
            title="Đoạn văn bản"
          >
            P
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Tiêu đề H2"
          >
            <Heading2 size={16} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            title="Tiêu đề H3"
          >
            <Heading3 size={16} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            title="Tiêu đề H4"
          >
            <Heading4 size={16} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Inline Formatting */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="In đậm (Ctrl+B)"
          >
            <Bold size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="In nghiêng (Ctrl+I)"
          >
            <Italic size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('underline') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Gạch chân (Ctrl+U)"
          >
            <UnderlineIcon size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Gạch ngang chữ"
          >
            <Strikethrough size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('code') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleCode().run()}
            title="Mã nội dòng"
          >
            <Code size={15} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Alignment */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            title="Căn trái"
          >
            <AlignLeft size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            title="Căn giữa"
          >
            <AlignCenter size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            title="Căn phải"
          >
            <AlignRight size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            title="Căn đều hai bên"
          >
            <AlignJustify size={15} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Lists */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('bulletList') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Danh sách dấu chấm"
          >
            <List size={15} />
          </button>
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('orderedList') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Danh sách số thứ tự"
          >
            <ListOrdered size={15} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Quote & Horizontal Rule */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('blockquote') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            title="Khối trích dẫn nổi bật"
          >
            <Quote size={15} />
          </button>
          <button
            type="button"
            className="tiptap-toolbar-btn"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Đường kẻ phân cách ngang"
          >
            <Minus size={15} />
          </button>
        </div>

        <div className="tiptap-toolbar-divider" />

        {/* Link & Media */}
        <div className="tiptap-toolbar-group">
          <button
            type="button"
            className={`tiptap-toolbar-btn ${editor.isActive('link') ? 'is-active' : ''}`}
            onClick={setLinkPrompt}
            title="Chèn liên kết URL"
          >
            <LinkIcon size={15} />
          </button>
          <button
            type="button"
            className="tiptap-toolbar-btn"
            onClick={() => setImageModalOpen(true)}
            title="Chèn ảnh minh họa kèm chú thích"
          >
            <ImageIcon size={15} />
          </button>
        </div>
      </div>

      {/* Floating Bubble Menu on Selection */}
      <BubbleMenu editor={editor} options={{ placement: 'top' }}>
        <div className="tiptap-bubble-menu">
          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('bold') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Đậm"
          >
            <Bold size={13} />
          </button>
          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('italic') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Nghiêng"
          >
            <Italic size={13} />
          </button>
          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('underline') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Gạch chân"
          >
            <UnderlineIcon size={13} />
          </button>
          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('strike') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            title="Gạch ngang"
          >
            <Strikethrough size={13} />
          </button>

          <div className="tiptap-bubble-divider" />

          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('code') ? 'is-active' : ''}`}
            onClick={() => editor.chain().focus().toggleCode().run()}
            title="Code"
          >
            <Code size={13} />
          </button>
          <button
            type="button"
            className={`tiptap-bubble-btn ${editor.isActive('link') ? 'is-active' : ''}`}
            onClick={setLinkPrompt}
            title="Link"
          >
            <LinkIcon size={13} />
          </button>
        </div>
      </BubbleMenu>

      {/* Content Editable Area Scoped under article-body-html */}
      <div className="tiptap-content-area article-body-html">
        <EditorContent editor={editor} />
      </div>

      {/* Insert Image Modal Dialog */}
      {imageModalOpen && (
        <div className="admin-modal-overlay" onClick={() => setImageModalOpen(false)}>
          <div
            className="admin-modal"
            style={{ maxWidth: '520px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-flex-between" style={{ marginBottom: '16px' }}>
              <h3 className="admin-h2" style={{ margin: 0, fontSize: '18px' }}>
                Chèn hình ảnh vào bài viết
              </h3>
              <button
                type="button"
                onClick={() => setImageModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Tab switchers */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button
                type="button"
                className={`admin-btn ${imageTab === 'upload' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
                style={{ flex: 1, padding: '8px 12px', fontSize: '13px' }}
                onClick={() => setImageTab('upload')}
              >
                Tải ảnh lên (Cloudflare R2)
              </button>
              <button
                type="button"
                className={`admin-btn ${imageTab === 'url' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
                style={{ flex: 1, padding: '8px 12px', fontSize: '13px' }}
                onClick={() => setImageTab('url')}
              >
                Đường dẫn ảnh (URL)
              </button>
            </div>

            {imageTab === 'upload' ? (
              <div className="admin-form-group">
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="admin-btn admin-btn-secondary"
                  style={{
                    width: '100%',
                    padding: '24px',
                    border: '2px dashed #cbd5e1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#f8fafc',
                    cursor: isUploading ? 'not-allowed' : 'pointer',
                  }}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 size={24} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Đang nén và gắn watermark FAI lên Cloudflare R2...</span>
                    </>
                  ) : (
                    <>
                      <Upload size={24} style={{ color: 'var(--admin-accent)' }} />
                      <span style={{ fontWeight: 600 }}>Bấm để chọn ảnh từ máy tính</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>
                        Tự động tối ưu WebP &lt; 350KB và gắn logo FAI góc phải
                      </span>
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="admin-form-group">
                <label className="admin-label">Đường dẫn hình ảnh (URL)</label>
                <input
                  type="text"
                  placeholder="https://example.com/image.webp"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="admin-input"
                />
              </div>
            )}

            {uploadError && (
              <div style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>
                {uploadError}
              </div>
            )}

            {/* Preview loaded image */}
            {imageUrl && (
              <div style={{ marginBottom: '16px', position: 'relative' }}>
                <img
                  src={imageUrl}
                  alt="Ảnh chuẩn bị chèn"
                  style={{
                    width: '100%',
                    maxHeight: '180px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#10b981',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Check size={12} /> Đã sẵn sàng
                </span>
              </div>
            )}

            {/* Caption & Alt Inputs */}
            <div className="admin-form-group">
              <label className="admin-label">Chú thích ảnh (Caption hiển thị dưới ảnh)</label>
              <input
                type="text"
                placeholder="Ví dụ: Sinh viên FAI trong giờ thực hành đồ họa..."
                value={imageCaption}
                onChange={(e) => setImageCaption(e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Mô tả trợ năng (Alt text)</label>
              <input
                type="text"
                placeholder="Mô tả ngắn gọn nội dung ảnh cho SEO..."
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-flex-between" style={{ marginTop: '20px' }}>
              <button
                type="button"
                onClick={() => setImageModalOpen(false)}
                className="admin-btn admin-btn-secondary"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={insertImage}
                className="admin-btn admin-btn-primary"
                disabled={!imageUrl.trim() || isUploading}
              >
                Chèn vào bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
