// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '12345'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {

  // Customize notification here
  var dataBody = JSON.parse(payload.data.notification);
  console.log("dataBody", dataBody)
  const notificationTitle = dataBody.title
  const notificationOptions = {
    body: dataBody.body,
    icon: dataBody.icon,
   // click_action: "https://career-portal.ams.cloudswitches.com/notification",
    data: {
   //   click_action: "https://career-portal.ams.cloudswitches.com/notification"
    }
  };
  self.addEventListener('notificationclick', function (event) {

    //console.log(event, 'event');
    //if (!event.action) {
    // self.clients.openWindow("https://career-portal.ams.cloudswitches.com/notification", '_self')
    event.notification.close();
    return;
    // } else {
    //   event.notification.close();
    // }
  });
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
