```javascript
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
 * TỰ ĐỘNG HIỂN THỊ NÚT BẤM "🧩 GIẢI MÃ HÁN TỰ" & TỰ ĐỘNG CHUYỂN TRANG KHI CLICK CHỮ HÁN
 * Kỹ thuật nhúng an toàn: Giữ nguyên vẹn 100% file index.html gốc, không sợ xung đột mã nguồn.
 */
(function() {
  // 1. Tạo nút nổi Giải mã Hán tự (vị trí nổi cao hơn thanh menu đáy)
  function renderHanziEntryPoint() {
    if (document.getElementById('floating-hanzi-btn')) return;

    const btn = document.createElement('a');
    btn.id = 'floating-hanzi-btn';
    btn.href = './hanzi/index.html';
    btn.setAttribute('aria-label', 'Giải mã Hán tự');
    btn.innerHTML = `
      <span style="font-size: 16px; line-height: 1;">🧩</span>
      <span>Giải mã Hán tự</span>
    `;

    Object.assign(btn.style, {
      position: 'fixed',
      bottom: 'calc(env(safe-area-inset-bottom, 0px) + 85px)',
      right: '16px',
      zIndex: '99999',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '9px 15px',
      backgroundColor: '#BE123C',
      color: '#FFFFFF',
      fontSize: '13px',
      fontWeight: '700',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      textDecoration: 'none',
      borderRadius: '999px',
      boxShadow: '0 4px 16px rgba(190, 18, 60, 0.45), 0 2px 6px rgba(0, 0, 0, 0.25)',
      border: '1.5px solid rgba(255, 255, 255, 0.35)',
      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
      cursor: 'pointer',
      webkitTapHighlightColor: 'transparent'
    });

    btn.addEventListener('touchstart', function() {
      btn.style.transform = 'scale(0.93)';
    }, { passive: true });

    btn.addEventListener('touchend', function() {
      btn.style.transform = 'scale(1)';
    }, { passive: true });

    btn.addEventListener('mousedown', function() {
      btn.style.transform = 'scale(0.93)';
    });

    btn.addEventListener('mouseup', function() {
      btn.style.transform = 'scale(1)';
    });

    document.body.appendChild(btn);
  }

  // 2. Tự động nhận diện cú chạm/click vào bất kỳ chữ Hán nào trên web gốc
  function setupHanziClickListener() {
    document.addEventListener('click', function(e) {
      // Bỏ qua nếu bấm vào nút nổi hoặc các nút điều hướng trên/dưới
      if (e.target.closest('#floating-hanzi-btn, nav, .bottom-nav, footer, button, .audio-btn')) return;

      let detectedChar = null;

      // Cách 1: Xác định chính xác ký tự cụ thể dưới đầu ngón tay chạm vào
      if (document.caretRangeFromPoint) {
        const range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range && range.startContainer && range.startContainer.nodeType === Node.TEXT_NODE) {
          const text = range.startContainer.textContent;
          const charAtPoint = text.charAt(range.startOffset);
          if (/[\u4e00-\u9fff]/.test(charAtPoint)) {
            detectedChar = charAtPoint;
          }
        }
      }

      // Cách 2: Nếu chưa bắt được qua caret, kiểm tra nội dung text của thẻ được bấm
      if (!detectedChar) {
        const textContent = (e.target.innerText || e.target.textContent || '').trim();
        // Chỉ nhận diện các phần tử chứa cụm chữ ngắn (thẻ từ vựng, ví dụ câu ngắn)
        if (textContent.length <= 15) {
          const match = textContent.match(/[\u4e00-\u9fff]/);
          if (match) {
            detectedChar = match[0];
          }
        }
      }

      // Nếu phát hiện đúng là chữ Hán, lập tức chuyển hướng sang khu giải mã
      if (detectedChar) {
        window.location.href = './hanzi/index.html?char=' + encodeURIComponent(detectedChar);
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      renderHanziEntryPoint();
      setupHanziClickListener();
    });
  } else {
    renderHanziEntryPoint();
    setupHanziClickListener();
  }
})();
```
