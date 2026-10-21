/**
 * Service Worker hỗ trợ chạy Offline và lưu bộ nhớ đệm (Cache) cho Giải Mã Hán Tự
 */
const CACHE_NAME = 'hanzi-pwa-v1';

// Danh sách các tài nguyên tĩnh cốt lõi cần lưu đệm ngay
const CORE_ASSETS = [
  './',
  './index.html',
  './app.webmanifest',
  './icon.svg',
  './data/bundles/hsk1-core.json',
  './js/lesson-adapter.js',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js'
];

// 1. Cài đặt Service Worker và tải trước tài nguyên vào cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Kích hoạt và dọn dẹp các phiên bản cache cũ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Đón bắt yêu cầu mạng: Ưu tiên nạp từ cache trước, nếu chưa có thì tải từ mạng
self.addEventListener('fetch', (event) => {
  // Chỉ xử lý các yêu cầu HTTP/HTTPS thông thường (GET)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Có sẵn trong cache -> trả về ngay lập tức (siêu nhanh)
        return cachedResponse;
      }

      // Chưa có trong cache -> tải từ mạng và tự động lưu vào cache cho lần sau
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // Khi mất mạng hoàn toàn và yêu cầu trang HTML, trả về index.html lưu sẵn
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
