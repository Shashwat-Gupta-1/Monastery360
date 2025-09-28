// Monastery360 Map Cache Service Worker
// Provides offline map tile caching for remote areas

const CACHE_NAME = 'monastery360-map-tiles-v1';
const TILE_CACHE_NAME = 'monastery360-tiles-v1';
const OFFLINE_CACHE_NAME = 'monastery360-offline-v1';

// Sikkim bounding box for pre-caching critical tiles
const SIKKIM_BOUNDS = {
  north: 28.1,
  south: 27.0,
  east: 88.9,
  west: 88.0
};

// Critical zoom levels for Sikkim monasteries
const CACHE_ZOOM_LEVELS = [8, 9, 10, 11, 12, 13];

// List of critical monastery locations to pre-cache
const MONASTERY_LOCATIONS = [
  { lat: 27.3022, lng: 88.5580, name: 'Rumtek' },
  { lat: 27.3039, lng: 88.2139, name: 'Pemayangtse' },
  { lat: 27.3389, lng: 88.6065, name: 'Enchey' },
  { lat: 27.3300, lng: 88.2700, name: 'Tashiding' },
  { lat: 27.1656, lng: 88.3623, name: 'Namchi' },
  { lat: 27.6789, lng: 88.5456, name: 'Lachen' },
  { lat: 27.3683, lng: 88.2100, name: 'Dubdi' },
  { lat: 27.2789, lng: 88.3156, name: 'Ralang' }
];

// Install event - cache essential resources
self.addEventListener('install', event => {
  console.log('🚀 Monastery360 Map Cache SW: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 Monastery360 Map Cache SW: Caching essential resources');
      
      // Cache essential files for offline functionality
      return cache.addAll([
        '/',
        '/styles/globals.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      ]).catch(error => {
        console.log('⚠️ Some essential resources failed to cache:', error);
        // Don't fail installation if some resources can't be cached
      });
    }).then(() => {
      console.log('✅ Monastery360 Map Cache SW: Installation complete');
      self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🔄 Monastery360 Map Cache SW: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.startsWith('monastery360-') && 
              cacheName !== CACHE_NAME && 
              cacheName !== TILE_CACHE_NAME && 
              cacheName !== OFFLINE_CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Monastery360 Map Cache SW: Activation complete');
      return self.clients.claim();
    })
  );
});

// Fetch event - handle tile caching and offline fallbacks
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Handle OpenStreetMap tile requests
  if (url.hostname.includes('tile.openstreetmap.org')) {
    event.respondWith(handleTileRequest(request));
    return;
  }
  
  // Handle other requests with cache-first strategy for static resources
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image') {
    event.respondWith(handleStaticResource(request));
    return;
  }
  
  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }
  
  // Default: try network first, fallback to cache
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});

// Handle map tile requests with caching
async function handleTileRequest(request) {
  const cache = await caches.open(TILE_CACHE_NAME);
  
  try {
    // Try cache first for tiles
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      console.log('🗺️ Serving cached tile:', request.url);
      return cachedResponse;
    }
    
    // If not in cache, fetch from network
    const response = await fetch(request);
    
    if (response.ok) {
      // Clone response before caching
      const responseClone = response.clone();
      
      // Cache the tile for future use
      await cache.put(request, responseClone);
      console.log('💾 Cached new tile:', request.url);
    }
    
    return response;
  } catch (error) {
    console.log('❌ Tile request failed:', error);
    
    // Try to return a cached tile or a generic offline tile
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return a simple offline indicator tile
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">' +
      '<rect width="256" height="256" fill="#f5f3ee"/>' +
      '<text x="128" y="128" text-anchor="middle" font-family="Arial" font-size="16" fill="#8b7355">Offline</text>' +
      '</svg>',
      {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}

// Handle static resources (CSS, JS, images)
async function handleStaticResource(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try cache first
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Fetch from network and cache
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    // Return cached version if available
    return await cache.match(request);
  }
}

// Handle navigation requests
async function handleNavigationRequest(request) {
  try {
    // Try network first for navigation
    const response = await fetch(request);
    return response;
  } catch (error) {
    // Fallback to cached index page
    const cache = await caches.open(CACHE_NAME);
    const cachedIndex = await cache.match('/');
    
    if (cachedIndex) {
      return cachedIndex;
    }
    
    // Ultimate fallback - basic offline page
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Monastery360 - Offline</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { 
              font-family: Arial, sans-serif; 
              text-align: center; 
              padding: 50px; 
              background: #f5f3ee;
              color: #2d2019;
            }
            .monastery-icon { 
              font-size: 64px; 
              margin-bottom: 20px; 
            }
            .title { 
              color: #c4622d; 
              margin-bottom: 10px; 
            }
          </style>
        </head>
        <body>
          <div class="monastery-icon">🏛️</div>
          <h1 class="title">Monastery360</h1>
          <h2>You're currently offline</h2>
          <p>Some features may be limited without an internet connection.</p>
          <p>Cached map tiles will still be available for areas you've visited before.</p>
          <button onclick="window.location.reload()">Try Again</button>
        </body>
      </html>`,
      {
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
}

// Message handling for cache management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_MONASTERY_AREA') {
    const { lat, lng, zoom = 12, radius = 0.01 } = event.data;
    cacheMonasteryArea(lat, lng, zoom, radius);
  }
  
  if (event.data && event.data.type === 'CACHE_ALL_MONASTERIES') {
    cacheAllMonasteryAreas();
  }
  
  if (event.data && event.data.type === 'CLEAR_TILE_CACHE') {
    clearTileCache();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    getCacheStatus().then(status => {
      event.ports[0].postMessage(status);
    });
  }
});

// Cache tiles around a specific monastery location
async function cacheMonasteryArea(lat, lng, zoom, radius) {
  console.log(`📍 Caching tiles around monastery at ${lat}, ${lng}`);
  
  const cache = await caches.open(TILE_CACHE_NAME);
  const tilesToCache = [];
  
  // Calculate tile boundaries
  const minTile = latLngToTile(lat - radius, lng - radius, zoom);
  const maxTile = latLngToTile(lat + radius, lng + radius, zoom);
  
  // Generate tile URLs to cache
  for (let x = minTile.x; x <= maxTile.x; x++) {
    for (let y = minTile.y; y <= maxTile.y; y++) {
      const tileUrl = `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;
      tilesToCache.push(tileUrl);
    }
  }
  
  console.log(`📦 Caching ${tilesToCache.length} tiles for monastery area`);
  
  // Cache tiles in batches to avoid overwhelming the server
  const batchSize = 10;
  for (let i = 0; i < tilesToCache.length; i += batchSize) {
    const batch = tilesToCache.slice(i, i + batchSize);
    
    await Promise.allSettled(
      batch.map(async (tileUrl) => {
        try {
          const response = await fetch(tileUrl);
          if (response.ok) {
            await cache.put(tileUrl, response);
          }
        } catch (error) {
          console.log(`⚠️ Failed to cache tile: ${tileUrl}`);
        }
      })
    );
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`✅ Completed caching monastery area at ${lat}, ${lng}`);
}

// Cache all monastery areas
async function cacheAllMonasteryAreas() {
  console.log('🏛️ Starting to cache all monastery areas...');
  
  for (const monastery of MONASTERY_LOCATIONS) {
    await cacheMonasteryArea(monastery.lat, monastery.lng, 12, 0.01);
    
    // Cache additional zoom levels for better detail
    await cacheMonasteryArea(monastery.lat, monastery.lng, 13, 0.005);
    await cacheMonasteryArea(monastery.lat, monastery.lng, 14, 0.002);
  }
  
  console.log('✅ Completed caching all monastery areas');
}

// Clear tile cache
async function clearTileCache() {
  console.log('🗑️ Clearing tile cache...');
  await caches.delete(TILE_CACHE_NAME);
  console.log('✅ Tile cache cleared');
}

// Get cache status information
async function getCacheStatus() {
  const tileCache = await caches.open(TILE_CACHE_NAME);
  const tileKeys = await tileCache.keys();
  
  const mainCache = await caches.open(CACHE_NAME);
  const mainKeys = await mainCache.keys();
  
  return {
    tilesCached: tileKeys.length,
    resourcesCached: mainKeys.length,
    cacheSize: await calculateCacheSize([tileCache, mainCache])
  };
}

// Calculate approximate cache size
async function calculateCacheSize(caches) {
  let totalSize = 0;
  
  for (const cache of caches) {
    const keys = await cache.keys();
    for (const key of keys) {
      try {
        const response = await cache.match(key);
        if (response) {
          const blob = await response.blob();
          totalSize += blob.size;
        }
      } catch (error) {
        // Skip entries that can't be read
      }
    }
  }
  
  return Math.round(totalSize / 1024 / 1024 * 100) / 100; // MB
}

// Convert lat/lng to tile coordinates
function latLngToTile(lat, lng, zoom) {
  const x = Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
  const y = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
  return { x, y };
}

console.log('🏛️ Monastery360 Map Cache Service Worker loaded');