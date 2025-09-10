// ===== SERVICE WORKER FOR PORTFOLIO =====

const CACHE_NAME = 'portfolio-v1.0.0';
const STATIC_CACHE = 'portfolio-static-v1.0.0';
const DYNAMIC_CACHE = 'portfolio-dynamic-v1.0.0';

// Archivos estáticos para cache
const STATIC_FILES = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/project-loader.js',
    '/projects.json',
    '/config.js',
    '/favicon.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Installation complete');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Installation failed', error);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activation complete');
                return self.clients.claim();
            })
    );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Estrategia Cache First para archivos estáticos
    if (isStaticFile(request)) {
        event.respondWith(cacheFirst(request));
    }
    // Estrategia Network First para datos dinámicos
    else if (isDynamicFile(request)) {
        event.respondWith(networkFirst(request));
    }
    // Estrategia Stale While Revalidate para otros recursos
    else {
        event.respondWith(staleWhileRevalidate(request));
    }
});

// Estrategia Cache First
async function cacheFirst(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Cache First strategy failed:', error);
        return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Estrategia Network First
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return new Response('Network error and no cached content', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Estrategia Stale While Revalidate
async function staleWhileRevalidate(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    const fetchPromise = fetch(request).then((networkResponse) => {
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }).catch(() => {
        return cachedResponse || new Response('Content not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    });
    
    return cachedResponse || fetchPromise;
}

// Verificar si es archivo estático
function isStaticFile(request) {
    const url = new URL(request.url);
    return (
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.json') ||
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.ico') ||
        url.hostname === 'fonts.googleapis.com' ||
        url.hostname === 'cdnjs.cloudflare.com'
    );
}

// Verificar si es archivo dinámico
function isDynamicFile(request) {
    const url = new URL(request.url);
    return (
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.jpeg') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.gif')
    );
}

// Limpiar cache dinámico periódicamente
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLEAN_CACHE') {
        cleanDynamicCache();
    }
});

async function cleanDynamicCache() {
    const cache = await caches.open(DYNAMIC_CACHE);
    const requests = await cache.keys();
    
    // Mantener solo los últimos 50 elementos
    if (requests.length > 50) {
        const requestsToDelete = requests.slice(0, requests.length - 50);
        await Promise.all(
            requestsToDelete.map(request => cache.delete(request))
        );
        console.log('Service Worker: Cleaned old dynamic cache entries');
    }
}

// Manejar notificaciones push (opcional)
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/favicon.svg',
            badge: '/favicon.svg',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {
                    action: 'explore',
                    title: 'Ver Portfolio',
                    icon: '/favicon.svg'
                },
                {
                    action: 'close',
                    title: 'Cerrar',
                    icon: '/favicon.svg'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Sincronización en segundo plano (opcional)
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    // Implementar lógica de sincronización
    console.log('Service Worker: Background sync triggered');
}

// Manejar errores
self.addEventListener('error', (event) => {
    console.error('Service Worker: Error occurred', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
    console.error('Service Worker: Unhandled promise rejection', event.reason);
});

console.log('Service Worker: Script loaded');
