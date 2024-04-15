
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBdkT1mNXrAmpoI-NE2pKFkTLTz74zTbgA",
    authDomain: "gelder-group-surveyors.firebaseapp.com",
    projectId: "gelder-group-surveyors",
    storageBucket: "gelder-group-surveyors.appspot.com",
    messagingSenderId: "69813128014",
    appId: "1:69813128014:web:4a3af7983d5d63c855ac1f",
    measurementId: "G-309KCC1RWW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
