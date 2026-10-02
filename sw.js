const CACHE_NAME = 'salgados-cache-v2';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Instala e guarda os arquivos essenciais para uso offline.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Remove versões antigas do cache e assume o controle imediatamente.
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  // Não interfere com POST/PUT/etc. nem com recursos de outros domínios.
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;

  // Para abrir/recarregar a página: tenta a versão atual da rede primeiro.
  // Se estiver offline, usa a cópia salva.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          }
          return response;
        })
        .catch(async () =>
          (await caches.match('./index.html')) ||
          (await caches.match('./'))
        )
    );
    return;
  }

  // Para os demais arquivos do próprio app: cache primeiro, rede como fallback.
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
