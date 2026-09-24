// Service worker dell'app TecnoSmart:
// - rende l'app "installabile" (Chrome/Edge/Android/iPhone)
// - riceve le notifiche (codice di OneSignal importato qui sotto)
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // Nessuna gestione: lascia passare tutte le richieste alla rete normale.
});
