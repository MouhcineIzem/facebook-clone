import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnnjQZNSLnDpe1tzn58cGMeTdnWNLFngI",
    authDomain: "fb-clone-6f6c5.firebaseapp.com",
    databaseURL: "https://fb-clone-6f6c5.firebaseio.com",
    projectId: "fb-clone-6f6c5",
    storageBucket: "fb-clone-6f6c5.appspot.com",
    messagingSenderId: "211349042928",
    appId: "1:211349042928:web:241252054c42859cdc7435",
    measurementId: "G-HQ3QYET81D"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
