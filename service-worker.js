var cacheName = 'webstore-v1';
var cacheFiles = [
    'index.html',
    'https://cst3145express.herokuapp.com/collection/lesson',
    'afterschool.webmnifest',
    'images/arts.jpg',
    'images/classroom.png',
    'images/englishicon.jpeg',
    'images/frenchicon.png',
    'images/geographyicon.png',
    'images/guitaricon.jpeg',
    'images/history.jpg',
    'images/mathsicon.png',
    'images/pianoicon.png',
    'images/scienceicon.jpeg',
    'images/spanishicon.png',

];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles); 
        })
    );
});

self.addEventListener('fetch', function (e){
    e.respondWith(
        caches.match(e.request).then(function (r){
            // Download the file if it is not in the cache,
            return r || fetch(e.request).then(function (response){
                // add the new file to cache
                return caches.open(cacheName).then(function (cache) {
                cache.put(e.request, response.clone());
                return response;
            });
        });
      })
    );
});