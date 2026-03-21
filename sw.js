
const CACHE = 'iriscalib-v1';
const SHELL = [
  './iris_calibrate.html',
  './manifest.json',
];


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network first, fall back to cache
self.addEventListener('fetch', e => {
  // Only handle same-origin GET requests
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache fresh copy of shell files
        if(SHELL.some(s => e.request.url.endsWith(s.replace('./', '/')))){
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
