import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj0ZjDAG0_Y5k5_aLdr6ULHqS9aooa06k",
  authDomain: "kairos-app-464d3.firebaseapp.com",
  projectId: "kairos-app-464d3",
  storageBucket: "kairos-app-464d3.firebasestorage.app",
  messagingSenderId: "901924191591",
  appId: "1:901924191591:web:e6111a74f3acd43cfa43c2",
  measurementId: "G-M7CFWL25L7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
