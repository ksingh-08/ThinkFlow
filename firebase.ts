
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKerWNOvE3-KdtfOmWYvsxbNqTHlwhSzM",
  authDomain: "thinkflow-organizedworkflow.firebaseapp.com",
  projectId: "thinkflow-organizedworkflow",
  storageBucket: "thinkflow-organizedworkflow.firebasestorage.app",
  messagingSenderId: "496514548441",
  appId: "1:496514548441:web:5f58c81482d9cb02b574c8",
  measurementId: "G-CJM7M0WX8N"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

