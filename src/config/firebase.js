import firebase from "firebase"


    // iniciando firebase
    
  var firebaseConfig = {
    apiKey: "AIzaSyBeJXKSxiL5prPztiX80YthsuhjWKO1LOA",
    authDomain: "react-js-utn.firebaseapp.com",
    projectId: "react-js-utn",
    storageBucket: "react-js-utn.appspot.com",
    messagingSenderId: "344396352012",
    appId: "1:344396352012:web:403f1ee7ba86fb0e8dfc29",
    measurementId: "G-V8GM959DZ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.firestore = firebase.firestore();
  firebase.analytics();

export default firebase;