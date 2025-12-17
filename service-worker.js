const CACHE_NAME = 'levup-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './habilidades.html',
  './progreso.html',
  './temarios.html',
  './actividad.html',
  './iniciar-sesion.html',
  './registro.html',
  './css/styles.css',
  './js/app.js',
  './js/data.js',
  './js/habilidades.js',
  './js/progreso.js',
  './js/actividad.js',
  './js/temarios.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// 1. Instalación: Guardamos los archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. Activación: Limpiamos cachés antiguas si actualizas la versión
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// 3. Interceptamos peticiones: "Cache First" (Si está guardado, úsalo; si no, ve a internet)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});