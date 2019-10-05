self.addEventListener('push', e => {
  self.registration.showNotification('Hello world!', {});
});
