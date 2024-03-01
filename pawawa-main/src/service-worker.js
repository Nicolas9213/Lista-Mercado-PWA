
const version = 'v1';


self.addEventListener('install', function(event) {
  console.log('Service Worker ' + version + ' instalado');
});


self.addEventListener('activate', function(event) {
  console.log('Service Worker ' + version + ' ativado');
});


self.addEventListener('fetch', function(event) {
  console.log('Requisição fetch interceptada:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
