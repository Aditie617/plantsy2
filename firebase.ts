import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL6PyZnlFrjgXoyC-DE5ayJUEIHLcVfOI",
  authDomain: "plantsy-af146.firebaseapp.com",
  projectId: "plantsy-af146",
  storageBucket: "plantsy-af146.firebasestorage.app",
  messagingSenderId: "467543707816",
  appId: "1:467543707816:web:0775c878864db45798f29d",
  measurementId: "G-XGBJDGHE25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, provider };
