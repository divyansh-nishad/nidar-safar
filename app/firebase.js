import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"
const firebaseConfig = {
    apiKey: "AIzaSyAXIivd-wdiw83snKVfxXnzW_xgQ_3Zk1s",
    authDomain: "nidar-safar.firebaseapp.com",
    projectId: "nidar-safar",
    storageBucket: "nidar-safar.appspot.com",
    messagingSenderId: "943091784149",
    appId: "1:943091784149:web:3ec26ca3309cd56a9b855c",
    measurementId: "G-Q450EDTZPY"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const rt = getDatabase(app)
const auth = getAuth(app)
const analytics = getAnalytics(app)

export {
    db,
    rt,
    auth,
    analytics
}
