const CACHE_ID = "v1";
const urlToCache = ['index.html', 'offline.html'];

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_ID).then((cache) => {
            return cache.addAll(urlToCache);
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return fetch(event.request).catch(() => caches.match('offline.html'))
        } )
    )
})

this.addEventListener('activate', (event) => {
    const cacheList = [];
    cacheList.push(CACHE_ID);
    event.waitUntil(caches.keys().then((cacheNames) => {
        Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        )
    }))
})