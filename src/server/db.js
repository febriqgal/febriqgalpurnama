// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPzdXHykJlJRlmaYhlcn92O9ps1BCQrQ",
  authDomain: "febriqgalpurnama-45051.firebaseapp.com",
  projectId: "febriqgalpurnama-45051",
  storageBucket: "febriqgalpurnama-45051.appspot.com",
  messagingSenderId: "567241133818",
  appId: "1:567241133818:web:8245be1f8a4129c3124343",
  measurementId: "G-ZSLSF74H0C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const FirebaseStorage = getStorage(app);

export { db, FirebaseStorage };
export default app;
