/*jshint esversion: 6 */

const cacheName = 'v2';
const cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './img/1.jpg',
  './data/restaurants.json',
  './css/styles.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');

// install will have to wait until promise is resolved and cache all files
  e.waitUntil(caches.open(cacheName).then(function(cache){
    console.log('[ServiceWorker] Caching cacheFiles');
    return cache.addAll(cacheFiles);
  }));
});

// activate the cash
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');

// loop through the caches and remove old cached files
  e.waitUntil(caches.keys().then(function(cacheNames) {
    return Promise.all(cacheNames.map(function(thisCache) {
      if(thisCache !== cacheName) {
        console.log('[ServiceWorker] Removing old cached files');
      }
    }));
  }));
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetching', e.request.url);

// if cache
  e.respondWith(caches.match(e.request).then(function(response){
    if(response) {
      console.log('ServiceWorker Found in Cache', e.request.url);
      return response;
    }

    return fetch(e.request);
  }));


});
