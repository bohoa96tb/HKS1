/* Mỗi bài một mục. Giữ mục bài cũ khi thêm bài; tăng v sau khi sửa. */
window.HSK_MANIFEST = [
  {
    "id": "hsk1-bai-16",
    "level": "HSK1",
    "number": 16,
    "title": "Bài 16: Từ vựng trong đời sống và giao tiếp",
    "words": 24,
    "dialogues": 4,
    "file": "data/hsk1/bai-16.js",
    "v": 3
  }
];

/**
 * TỰ ĐỘNG HIỂN THỊ NÚT BẤM "🧩 GIẢI MÃ HÁN TỰ" TRÊN TRANG CHỦ
 * Kỹ thuật nhúng an toàn: Giữ nguyên vẹn 100% file index.html gốc, không sợ xung đột mã nguồn.
 */
(function() {
  function renderHanziEntryPoint() {
    // Tránh tạo trùng lặp nếu hàm bị gọi nhiều lần
    if (document.getElementById('floating-hanzi-btn')) return;

    // 1. Tạo thẻ nút bấm nổi
    const btn = document.createElement('a');
    btn.id = 'floating-hanzi-btn';
    btn.href = './hanzi/index.html';
    btn.setAttribute('aria-label', 'Giải mã Hán tự');
    btn.innerHTML = `
      <span style="font-size: 18px; line-height: 1;">🧩</span>
      <span>Giải mã Hán tự</span>
    `;

    // 2. Thiết lập kiểu dáng (CSS inline) tối ưu tuyệt đối cho màn hình điện thoại
    Object.assign(btn.style, {
      position: 'fixed',
      bottom: 'calc(env(safe-area-inset-bottom, 0px) + 20px)',
      right: '16px',
      zIndex: '99999',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '11px 18px',
      backgroundColor: '#BE123C',
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: '700',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textDecoration: 'none',
      borderRadius: '999px',
      boxShadow: '0 4px 16px rgba(190, 18, 60, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1.5px solid rgba(255, 255, 255, 0.3)',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      cursor: 'pointer',
      webkitTapHighlightColor: 'transparent'
    });

    // 3. Hiệu ứng nhún khi chạm ngón tay trên điện thoại
    btn.addEventListener('touchstart', function() {
      btn.style.transform = 'scale(0.94)';
    }, { passive: true });

    btn.addEventListener('touchend', function() {
      btn.style.transform = 'scale(1)';
    }, { passive: true });

    btn.addEventListener('mousedown', function() {
      btn.style.transform = 'scale(0.94)';
    });

    btn.addEventListener('mouseup', function() {
      btn.style.transform = 'scale(1)';
    });

    document.body.appendChild(btn);
  }

  // Chờ trang web nạp xong cấu trúc là gắn nút ngay
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHanziEntryPoint);
  } else {
    renderHanziEntryPoint();
  }
})();
