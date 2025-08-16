const CACHE_NAME = "espe-app-v1";
const DYNAMIC_CACHE = 'dynamic-cache-v1';
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./src/index.js",
];

self.addEventListener("install", (event) => {
  console.log("Instalando Service Worker y cacheando Application Shell...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => {
      console.log("Archivos cacheados correctamente.");
      return self.skipWaiting(); // Activación inmediata
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activado");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Borrando caché antigua:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cachedResp => {
      if (cachedResp) return cachedResp;

      return fetch(event.request).then(networkResp => {
        return caches.open(DYNAMIC_CACHE).then(cache => {
          cache.put(event.request, networkResp.clone());
          return networkResp;
        });
      }).catch(() => {
        // Solo devolver index.html para documentos (HTML)
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
        // Para JS, CSS, imágenes, devolver algo vacío o fallo
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});

self.addEventListener("sync", (event) => {
  console.log("Evento sync recibido:", event);
});

self.addEventListener("push", (event) => {
  console.log("Notificación push recibida:", event);
});
