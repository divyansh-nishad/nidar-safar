// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXIivd-wdiw83snKVfxXnzW_xgQ_3Zk1s",
    authDomain: "nidar-safar.firebaseapp.com",
    projectId: "nidar-safar",
    storageBucket: "nidar-safar.appspot.com",
    messagingSenderId: "943091784149",
    appId: "1:943091784149:web:3ec26ca3309cd56a9b855c",
    measurementId: "G-Q450EDTZPY"
};

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth }
