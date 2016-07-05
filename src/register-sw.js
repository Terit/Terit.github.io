var reg;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function() {
    return serviceWorker.ready;
  }).then(function(swRegistration) {
    console.log('sw registered')
    reg = swRegistration;
  }).catch(function(err) {
    console.log('Oops: ', err)
  })
}
