import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgAMo9ViyroAn_f5rCkloG7wR-cYPT6Pc",
    authDomain: "clone-f45cc.firebaseapp.com",
    projectId: "clone-f45cc",
    storageBucket: "clone-f45cc.appspot.com",
    messagingSenderId: "1004722039812",
    appId: "1:1004722039812:web:6ed8966d1fbd138eff1951",
    measurementId: "G-67C8C7C2TQ"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
