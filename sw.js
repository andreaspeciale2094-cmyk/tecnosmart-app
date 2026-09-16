// Service worker minimo: serve solo a far risultare l'app "installabile"
// dai browser (Chrome/Edge/Android). Non fa caching di nulla.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Nessuna gestione: lascia passare tutte le richieste alla rete normale.
});
