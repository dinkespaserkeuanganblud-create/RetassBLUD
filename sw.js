const CACHE_NAME = 'retass-blud-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Jika nanti Anda memisahkan CSS/JS ke file eksternal, tambahkan di sini
  // './style.css',
  // './script.js'
];

// Install Service Worker dan simpan cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Gunakan cache jika ada, jika tidak ambil dari internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
