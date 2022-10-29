import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

const config = {
  apiKey: "AIzaSyBGd1nDs6NJR9R3Oo87Ir1uTbqKCH5RttU",
  authDomain: "vats-13d6e.firebaseapp.com",
  projectId: "vats-13d6e",
  storageBucket: "vats-13d6e.appspot.com",
  messagingSenderId: "1037989897486",
  appId: "1:1037989897486:web:68b92104783c189b9ba35f",
  measurementId: "G-ZG6FWQBGM9",
};

const app = initializeApp(config);

const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const messaging = getMessaging(app);

export { auth, firestore, storage, messaging };
