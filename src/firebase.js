import firebase from 'firebase';


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
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };