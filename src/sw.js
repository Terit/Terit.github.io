importScripts('./sw-toolbox.js');

toolbox.router.default = toolbox.fastest;

self.addEventListener('install', function(event) {
  event.waitUntil(skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});
