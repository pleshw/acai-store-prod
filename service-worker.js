
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('nome-do-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/js/script.js',
        '/path/to/outras/dependencias.js'
        // adicione aqui todos os arquivos que deseja cachejar
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});