import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAz095TOR1liTgySPzCer_GxxhhPZDmeoI",
    authDomain: "clone-74db5.firebaseapp.com",
    projectId: "clone-74db5",
    storageBucket: "clone-74db5.appspot.com",
    messagingSenderId: "1082646309282",
    appId: "1:1082646309282:web:fb5f069ef12eb5083aeafb",
    measurementId: "${config.measurementId}"
};

// Connect the front-end to the back-end
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Access the database.
const db = firebase.firestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };