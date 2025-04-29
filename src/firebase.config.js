// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS8scV1RPUOp_yszDMdPIce2o51V4f2SQ",
  authDomain: "exclusive-27fea.firebaseapp.com",
  projectId: "exclusive-27fea",
  storageBucket: "exclusive-27fea.firebasestorage.app",
  messagingSenderId: "144717876241",
  appId: "1:144717876241:web:7508663290581ea4c635b0",
  measurementId: "G-K0MGBR9BBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
// Initialize Firebase Analytics