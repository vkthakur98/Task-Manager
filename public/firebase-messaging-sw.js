// New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {apiKey: "AIzaSyDEFgeK6_kypf45N5eYcRIocX9zpYO7UTo",
  authDomain: "task-manager-dbfe5.firebaseapp.com",
  projectId: "task-manager-dbfe5",
  storageBucket: "task-manager-dbfe5.appspot.com",
  messagingSenderId: "226620810350",
  appId: "1:226620810350:web:d4eb3b9641d13b380ff27f",
  measurementId: "G-V2C76BGEG4"};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});