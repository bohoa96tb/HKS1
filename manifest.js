javascript
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

// Biến dự phòng đảm bảo web gốc luôn tìm thấy dữ liệu dù gọi theo cách nào
var HSK_MANIFEST = window.HSK_MANIFEST;

/**
 * CÁC TÍNH NĂNG MỞ RỘNG (ĐƯỢC BỌC TRONG KHUNG AN TOÀN TRY...CATCH)
 * Dù có bất kỳ vấn đề gì xảy ra, danh mục bài học ở trên vẫn chạy mượt mà 100%
 */
try {
  (function() {
    // 1. Tạo nút nổi "🧩 Giải mã Hán tự" (cách đáy 85px, không che menu đáy)
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

      document.body.appendChild(btn);
    }

    // 2. Tự động nhận diện chạm vào chữ Hán trên web gốc để chuyển sang giải mã
    function setupHanziClickListener() {
      document.addEventListener('click', function(e) {
        // Bỏ qua nếu bấm vào nút nổi, menu dưới đáy, nút âm thanh, nút làm bài
        if (e.target.closest('#floating-hanzi-btn, nav, .bottom-nav, footer, button, .audio-btn, a, input')) return;

        let detectedChar = null;

        // Cách 1: Xác định chính xác ký tự dưới đầu ngón tay
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

        // Cách 2: Nếu chưa bắt được qua caret, kiểm tra nội dung thẻ vừa bấm
        if (!detectedChar) {
          const textContent = (e.target.innerText || e.target.textContent || '').trim();
          if (textContent.length <= 12) {
            const match = textContent.match(/[\u4e00-\u9fff]/);
            if (match) {
              detectedChar = match[0];
            }
          }
        }

        // Nếu đúng là chữ Hán, chuyển ngay sang khu giải mã
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
} catch (error) {
  console.warn("Lỗi tính năng mở rộng trong manifest:", error);
}
