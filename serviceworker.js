/*jshint esversion: 6 */

const cacheName = 'v1';
const cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
  './img/1.png',
  './data/restaurants.json',
  './css/styles.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetching', e.request.url);
});
