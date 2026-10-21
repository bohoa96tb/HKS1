/**
 * LESSON ADAPTER (Bộ chuyển đổi dữ liệu bài học cũ sang khu Giải mã Hán tự)
 * Đảm bảo tính tương thích ngược, không làm hỏng cấu trúc các file data/hsk1/bai-*.js cũ.
 */

/**
 * Bóc tách một từ hoặc một câu tiếng Trung thành danh sách các chữ Hán đơn lẻ độc lập
 * Bỏ qua dấu câu, khoảng trắng và số.
 * Ví dụ: "明天" -> ["明", "天"]
 */
export function extractHanziChars(text) {
  if (!text || typeof text !== 'string') return [];
  // Biểu thức chính quy phát hiện ký tự chữ Hán (CJK Unified Ideographs: U+4E00 - U+9FFF)
  const hanziRegex = /[\u4e00-\u9fff]/g;
  const matches = text.match(hanziRegex);
  if (!matches) return [];
  // Loại bỏ các chữ trùng lặp trong cùng một từ
  return [...new Set(matches)];
}

/**
 * Tạo đường dẫn liên kết sâu (Deep Link) trỏ thẳng vào chữ Hán trong khu vực hanzi/
 * @param {string} char - Ký tự chữ Hán cần giải mã (ví dụ: "天")
 * @param {string} basePath - Đường dẫn tương đối trỏ tới thư mục hanzi/ (mặc định: "./hanzi/")
 * @returns {string} Đường dẫn hoàn chỉnh (ví dụ: "./hanzi/index.html?char=天")
 */
export function createDeepLink(char, basePath = './hanzi/') {
  const cleanBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return `${cleanBase}index.html?char=${encodeURIComponent(char)}`;
}

/**
 * Tạo một thẻ nút bấm HTML nhỏ (biểu tượng 🧩) dẫn thẳng sang trang giải mã của chữ Hán
 * Rất tiện để chèn bên cạnh từ vựng trong danh sách bài học cũ mà không phá vỡ bố cục cũ.
 * @param {string} char - Chữ Hán
 * @param {string} basePath - Đường dẫn tương đối tới hanzi/
 */
export function createDecoderBadgeHtml(char, basePath = './hanzi/') {
  const link = createDeepLink(char, basePath);
  return `
    <a href="${link}" 
       class="hanzi-decode-badge" 
       title="Giải mã chữ ${char}" 
       target="_blank"
       style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; margin-left: 4px; font-size: 13px; text-decoration: none; border-radius: 6px; background: #FFE4E6; color: #BE123C; vertical-align: middle; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
       🧩
    </a>
  `;
}

/**
 * Xử lý một mục từ vựng trong bài học cũ (ví dụ: { hanzi: "你好", pinyin: "nǐ hǎo", mean: "xin chào" })
 * Sinh ra danh sách các liên kết giải mã cho từng chữ cái cấu thành từ vựng đó.
 */
export function parseWordForDecoding(wordObj, basePath = './hanzi/') {
  const wordText = wordObj.word || wordObj.hanzi || wordObj.chinese || '';
  const chars = extractHanziChars(wordText);

  return chars.map(char => ({
    character: char,
    url: createDeepLink(char, basePath),
    badgeHtml: createDecoderBadgeHtml(char, basePath)
  }));
}
