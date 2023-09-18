import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6xmG67VzpDPFTpK8hEaFQuS0vnV2twc8",
  authDomain: "practica-final-a99d3.firebaseapp.com",
  projectId: "practica-final-a99d3",
  storageBucket: "practica-final-a99d3.appspot.com",
  messagingSenderId: "110742383987",
  appId: "1:110742383987:web:d274fd61a49a6c2725a906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);