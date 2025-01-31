// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDv0s4LCfoT8i9OIxf04owy_2vHSmUT0FY",
    authDomain: "ancientcrackerweb.firebaseapp.com",
    projectId: "ancientcrackerweb",
    storageBucket: "ancientcrackerweb.firebasestorage.app",
    messagingSenderId: "260367815828",
    appId: "1:260367815828:web:5b7f74969aeb45a34a9081",
    measurementId: "G-LCCK6B134S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
