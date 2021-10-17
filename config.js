import firebase from 'firebase';
require ( '@firebase/firestore' );

var firebaseConfig = {
    apiKey: "AIzaSyCjbsuxxTuxLluUz_5M9Tmhm7C-QvJGEzc",
    authDomain: "catersyou.firebaseapp.com",
    projectId: "catersyou",
    storageBucket: "catersyou.appspot.com",
    messagingSenderId: "3222184455",
    appId: "1:3222184455:web:b703045d1d2394b86500a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();