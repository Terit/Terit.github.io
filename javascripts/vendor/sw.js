importScripts('/node_modules/sw-toolbox/sw-toolbox.js')

toolbox.router.default = toolbox.fastest;
toolbox.precache([
  '/resume.html',
  '/css/resume.css',
  '/javascripts/vendor/jquery.js',
  '/javascripts/vendor/typed.js',
  '/javascripts/resume.js'
])

self.addEventListener('install', function(event) {
  event.waitUntil(skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});
