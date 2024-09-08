import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


export const firebaseConfig = {
    apiKey: "AIzaSyDEFgeK6_kypf45N5eYcRIocX9zpYO7UTo",
    authDomain: "task-manager-dbfe5.firebaseapp.com",
    projectId: "task-manager-dbfe5",
    storageBucket: "task-manager-dbfe5.appspot.com",
    messagingSenderId: "226620810350",
    appId: "1:226620810350:web:d4eb3b9641d13b380ff27f",
    measurementId: "G-V2C76BGEG4"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app)
