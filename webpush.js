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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fXrqm-ALihc:APA91bEvaxzttGD8aKpDpmnui0l3NSMK2qzFny14uOqyv41vYdLcihDUz8QBF3HFDk8oXWPyvm9CFU-D5kVYqoeFNcKMqalUODOItD7zP7MwV-iIqmwiBkxyNOv8GIc0Wzs-5Nvx_eNk","expirationTime":null,"keys":{"p256dh":"BIavhi6tkVHGH0ghLY6cXE6xrYh46XeBUIAFiwHSTjxeC3RFElLKlfUFB4DaoqjsI20A1bQv4tmYiJsd0aKg9RU","auth":"UpnDok8_eQsfRmvs51eD9A"}}

webpush.sendNotification(pushSubscription, "Hello from a shot of code!!");
