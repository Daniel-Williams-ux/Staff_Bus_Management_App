// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI3EAJXwHM4d80IfBLhjOayqfTZyHKQlM",
  authDomain: "staff-bus-management-app.firebaseapp.com",
  projectId: "staff-bus-management-app",
  storageBucket: "staff-bus-management-app.appspot.com",
  messagingSenderId: "1042248712459",
  appId: "1:1042248712459:web:8f771e063c05e32ddb620e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }