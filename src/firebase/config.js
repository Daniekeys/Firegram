  // import * as firebase from 'firebase/app'
  import firebase from 'firebase'
  import 'firebase/storage';
  import 'firebase/firestore';


  var firebaseConfig = {
    apiKey: "AIzaSyBDj3cVPVWv1rlagGQRS6vijvbBo2EV91E",
    authDomain: "firegram-f1532.firebaseapp.com",
    projectId: "firegram-f1532",
    storageBucket: "firegram-f1532.appspot.com",
    messagingSenderId: "832728672090",
    appId: "1:832728672090:web:060d33c3c066a50d103563"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // we then later initalize our services

  const projectStorage = firebase.storage();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  const projectFirestore = firebase.firestore();


  // Then we export it
  export {projectFirestore,projectStorage,timestamp};