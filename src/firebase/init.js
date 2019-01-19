import firebase from 'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDu-xj29b_8KE38wuGDsgxSIqB1tRwW-YA",
    authDomain: "ninja-e6d3a.firebaseapp.com",
    databaseURL: "https://ninja-e6d3a.firebaseio.com",
    projectId: "ninja-e6d3a",
    storageBucket: "ninja-e6d3a.appspot.com",
    messagingSenderId: "594328995567"
  };

  const firebaseApp = firebase.initializeApp(config);

  firebaseApp.firestore().settings({timestampsInSnapshots:true})
//export firestore database
export default firebaseApp.firestore()
