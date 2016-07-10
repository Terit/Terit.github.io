importScripts('/javascripts/vendor/sw-toolbox.js');

toolbox.router.default = toolbox.fastest;
toolbox.precache([
  '/projects.html',
  '/resume.html',
  '/css/resume.css',
  '/javascripts/vendor/jquery.min.js',
  '/javascripts/vendor/typed.js',
  '/javascripts/resume.js'
]);

self.addEventListener('install', function(event) {
  event.waitUntil(skipWaiting());
});
self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});
