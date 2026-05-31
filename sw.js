const CACHE_NAME = 'ib-portal-v1';
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('fetch', (event) => {
  // Let network requests pass through normally to Supabase
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
