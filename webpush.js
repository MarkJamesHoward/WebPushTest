const webpush = require("web-push");

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BEUGmTb48S2PqKalj-3-jt3HAtqOhFa1DZjqjRY4kHSFlKiupptexxiWmlRDjaHEv-uQJxWv0GYqkZj2AcrtUIY",
  privateKey: "ipCiblZ3evF8aJBr93Q_YcINvkbXwA6IFVBKqFJeV5k"
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/doLB8C2M-Vo:APA91bEQX01MPCAzOPWdKDN_lNDyOeT9hxLU4zsiGBN--sYoZghaheENZq2QRza8J_XkKGqnWvxbvrJk0SfEnEgIHVSBQEsIPN7s0gH6tprhIeqnmflcBqVi1YiCZ9UGJKyDfDO6_KIx",
  expirationTime: null,
  keys: {
    p256dh:
      "BPKDEv-XfzoIGIpA0vJIKVDJGosR2ajkwOYwPzc5UqLX-sdvQuQxu9muZtnbP5FuRm56Wtl4PcF9x6RUB3ixpTo",

    auth: "tedhPSjocNC2B6UJqcfb2g"
  }
};

webpush.sendNotification(pushSubscription, "Hello from a shot of code!!");
