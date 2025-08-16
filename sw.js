const CACHE_NAME = "espe-app-v2";
const DYNAMIC_CACHE = 'dynamic-cache-v2';
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./src/index.js",
  "./components/layout/espe-layout.js",
  "./components/moleculars/product-card.js",
  "./components/atomic/alerts/espe-alerts.js",
  "./img/icons/icon-144x144.png",
  "./img/icons/icon-192x192.png",
  "./img/icons/icon-256x256.png",
  "./img/icons/icon-384x384.png",
  "./img/icons/icon-512x512.png"
];

// Fallback para imágenes offline
const FALLBACK_IMAGE = "./img/icons/icon-192x192.png";

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
          if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
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

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ignorar peticiones que no sean http(s)
  if (!url.protocol.startsWith("http")) return;

  // Excluir el propio service worker y Vite dev client
  if (url.pathname.endsWith("sw.js") || url.pathname.includes("@vite")) return;

  // Estrategia: Cache First para APP_SHELL, Network First para otros recursos
  if (APP_SHELL.includes(url.pathname) || url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cachedResp) => {
        return (
          cachedResp ||
          fetch(event.request)
            .then((networkResp) => {
              // Clonamos para poder usarlo en cache y devolverlo
              const responseClone = networkResp.clone();

              // Guarda en caché dinámica si es GET
              if (event.request.method === "GET") {
                caches.open(DYNAMIC_CACHE).then((cache) => {
                  cache.put(event.request, responseClone);
                });
              }

              return networkResp;
            })
            .catch(() => {
              // Fallback para documentos (HTML)
              if (event.request.destination === "document") {
                return caches.match("./index.html");
              }
              // Fallback para imágenes
              if (event.request.destination === "image") {
                return caches.match(FALLBACK_IMAGE);
              }
              // Para JS, CSS, etc., devolver respuesta vacía
              return new Response("", { status: 503, statusText: "Offline" });
            })
        );
      })
    );
  }
});

self.addEventListener("sync", (event) => {
  console.log("Evento sync recibido:", event);
});

self.addEventListener("push", (event) => {
  // Notificaciones push personalizadas
  self.registration.showNotification("¡Nueva oferta disponible!", {
    body: "Visita E-commerce Galarza para ver las últimas promociones.",
    icon: "./img/icons/icon-192x192.png",
  });
});
