import firebase from "firebase/compat/app"; // old version is import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAOExQRfKg92tqkytS7Dzikoo6S0ls4lKE",
  authDomain: "fb-recipes-1ba87.firebaseapp.com",
  projectId: "fb-recipes-1ba87",
  storageBucket: "fb-recipes-1ba87.appspot.com",
  messagingSenderId: "12306676342",
  appId: "1:12306676342:web:2ac0ff3c3f580e4760bd57",
  measurementId: "G-9SYZWXTCXK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
