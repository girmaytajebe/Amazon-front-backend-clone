// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBSLtfTZcV-xD5QsBHGLjS4cBQfbgtsGNU",
	authDomain: "project-frontend-71821.firebaseapp.com",
	projectId: "project-frontend-71821",
	storageBucket: "project-frontend-71821.appspot.com",
	messagingSenderId: "1047198923613",
	appId: "1:1047198923613:web:68bde55b6a87a4bedf06b4",
	measurementId: "G-9KLWYBVYKV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };







// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDIwNrozPvKZGqL8nJwfITVyfcuEIeWSKA",
//   authDomain: "project-9ed1d.firebaseapp.com",
//   projectId: "project-9ed1d",
//   storageBucket: "project-9ed1d.appspot.com",
//   messagingSenderId: "977053197497",
//   appId: "1:977053197497:web:63ea770429b5bc8a9d6768",
//   measurementId: "G-VC46GV365D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth= getAuth(app);

// export { auth };







