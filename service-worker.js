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
    e.responWith(
        // check if the cache has the file
        caches.match(e.request).then(function (r){
            console.log('[Service Worker] Fetching resource:'
            + e.request.url);
            // 'r' is the matching file if it exists in the cache
            return r
        })
    );
});