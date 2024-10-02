// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsU36BeRxqglwicM8pv4cei1d-GZ1L4EU",
  authDomain: "cricketmanagement-6c0fb.firebaseapp.com",
  projectId: "cricketmanagement-6c0fb",
  storageBucket: "cricketmanagement-6c0fb.appspot.com",
  messagingSenderId: "64631667277",
  appId: "1:64631667277:web:7eedd9a6754788b2f9fa04",
  measurementId: "G-3DPN0ZF7B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);  // Initialize Firebase Storage

export { app, analytics, storage };
