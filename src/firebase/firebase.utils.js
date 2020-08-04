import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBFZdsdMPSo-_GWCyzblftZ7AD-k8j1yzg",
    authDomain: "crwn-db-3c1b7.firebaseapp.com",
    databaseURL: "https://crwn-db-3c1b7.firebaseio.com",
    projectId: "crwn-db-3c1b7",
    storageBucket: "crwn-db-3c1b7.appspot.com",
    messagingSenderId: "784067957179",
    appId: "1:784067957179:web:0d3241b3891baadc64b49e",
    measurementId: "G-2154X4QJ98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 