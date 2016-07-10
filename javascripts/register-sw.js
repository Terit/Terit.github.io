var reg;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function() {
    return navigator.serviceWorker.ready;
  }).then(function(swRegistration) {
    reg = swRegistration;
  }).catch(function(err) {
    console.log('Oops: ', err);
  });
}
