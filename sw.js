// Service worker dell'app TecnoSmart:
// - rende l'app "installabile" (Chrome/Edge/Android/iPhone)
// - riceve le notifiche (codice di OneSignal importato qui sotto)
// - tiene in memoria la "cornice" dell'app (pagina, icone) per partire piu' in fretta
//   e mostrare la schermata di apertura anche senza connessione.
// I DATI dell'app (Google Apps Script) e le altre pagine NON vengono mai messi in memoria:
// si leggono sempre dalla rete, cosi' i numeri sono sempre aggiornati.
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

var CACHE = 'tecnosmart-shell-v1';
var SHELL = ['./', './index.html', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function(c) {
      // un file mancante non deve bloccare l'installazione
      return Promise.all(SHELL.map(function(u) { return c.add(u).catch(function() {}); }));
    }).catch(function() {})
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k.indexOf('tecnosmart-shell-') === 0 && k !== CACHE; })
        .map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

function isShellRequest(url) {
  if (url.origin !== self.location.origin) return false;
  var p = url.pathname;
  if (p.indexOf(new URL(self.registration.scope).pathname) !== 0) return false; // solo dentro l'app TecnoSmart
  return /\/(index\.html)?$/.test(p) && p.indexOf('preventivatore') === -1
    || /\/manifest\.json$/.test(p)
    || /\/icons\/[^/]+\.png$/.test(p);
}

self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (!isShellRequest(url)) return; // tutto il resto (dati, OneSignal, altre pagine): rete normale

  var isPage = req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname);
  if (isPage) {
    // Pagina: prima la rete (sempre aggiornata); se e' lenta (3 s) o assente, la copia salvata.
    event.respondWith(new Promise(function(resolve) {
      var done = false;
      var timer = setTimeout(function() {
        caches.match(req, { ignoreSearch: true }).then(function(hit) { if (hit && !done) { done = true; resolve(hit); } });
      }, 3000);
      fetch(req).then(function(res) {
        clearTimeout(timer);
        if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function(c) { c.put(req, copy); }); }
        if (!done) { done = true; resolve(res); }
      }).catch(function() {
        clearTimeout(timer);
        caches.match(req, { ignoreSearch: true }).then(function(hit) {
          if (!done) { done = true; resolve(hit || Response.error()); }
        });
      });
    }));
    return;
  }
  // Icone e manifest: subito dalla memoria, e si aggiornano in sottofondo.
  event.respondWith(
    caches.match(req).then(function(hit) {
      var net = fetch(req).then(function(res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function(c) { c.put(req, copy); }); }
        return res;
      }).catch(function() { return hit; });
      return hit || net;
    })
  );
});
