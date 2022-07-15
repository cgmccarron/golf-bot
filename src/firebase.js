import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyAyR4oI7oSj59V39QFaVeRFihg7FfJEz1A",
  authDomain: "golf-bot-94a30.firebaseapp.com",
  projectId: "golf-bot-94a30",
  storageBucket: "golf-bot-94a30.appspot.com",
  messagingSenderId: "942691146340",
  appId: "1:942691146340:web:046db0605ee3f5cddb1d71",
  measurementId: "G-SG7TTR6NGL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});
