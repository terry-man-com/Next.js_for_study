import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz-47yiFcxEQ_aHb1RVRqCNxecq-zqYWA",
  authDomain: "daily-report-9012c.firebaseapp.com",
  projectId: "daily-report-9012c",
  storageBucket: "daily-report-9012c.firebasestorage.app",
  messagingSenderId: "987728786596",
  appId: "1:987728786596:web:870b1272d73f69f6f2e231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);