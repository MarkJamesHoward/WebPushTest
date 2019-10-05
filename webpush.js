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
  endpoint: ".....",
  keys: {
    auth: ".....",
    p256dh: "....."
  }
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
