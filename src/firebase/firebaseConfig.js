// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2bJj_9Lc3JzVsThK5H4fQZ4WBoHeEiU",
  authDomain: "galician-man-in-seville.firebaseapp.com",
  projectId: "galician-man-in-seville",
  storageBucket: "galician-man-in-seville.firebasestorage.app",
  messagingSenderId: "528593693645",
  appId: "1:528593693645:web:4ee4294726a0de33253284",
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGIN_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
