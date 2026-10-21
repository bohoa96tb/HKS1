/**
 * Service Worker hỗ trợ chạy Offline và lưu bộ nhớ đệm (Cache) cho Giải Mã Hán Tự
 * Nâng cấp phiên bản v2 để tự động làm mới gói 25 chữ Hán
 */
const CACHE_NAME = 'hanzi-pwa-v2';

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

// 2. Kích hoạt và dọn dẹp các phiên bản cache cũ (tự động xóa hanzi-pwa-v1)
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
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

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
        if (event.request.headers.get('accept')?.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
