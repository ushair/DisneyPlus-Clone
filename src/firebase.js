import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB6lPtGjy1BFgLTSnmiQz4oK5AenNrvuYw",
    authDomain: "disneyplus-clone-84081.firebaseapp.com",
    projectId: "disneyplus-clone-84081",
    storageBucket: "disneyplus-clone-84081.appspot.com",
    messagingSenderId: "677823848835",
    appId: "1:677823848835:web:e64ff2aa8dfcf23bb856b6",
    measurementId: "G-DVDDH6R0E9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;