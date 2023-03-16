// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/app"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGLGUMRjMUL-GoMfRsjoOpOj6dCeFd0Bo",
  authDomain: "my-life-app-eef13.firebaseapp.com",
  databaseURL: "https://my-life-app-eef13-default-rtdb.firebaseio.com",
  projectId: "my-life-app-eef13",
  storageBucket: "my-life-app-eef13.appspot.com",
  messagingSenderId: "841757590453",
  appId: "1:841757590453:web:eb4c9fd749bc5fdafb4ffc",
  measurementId: "G-SYTSPYMR4J"
};

// Initialize Firebase
if (!firebase.apps.length) {
  const app = initializeApp(firebaseConfig);
}

export default firebase