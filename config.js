import * as firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyBrjC6Cg97Ly_amzI4caz_mD6TWEspZZ4Y",
    authDomain: "parking-founder-app.firebaseapp.com",
    databaseURL: "https://parking-founder-app.firebaseio.com",
    projectId: "parking-founder-app",
    storageBucket: "parking-founder-app.appspot.com",
    messagingSenderId: "642843656802",
    appId: "1:642843656802:web:4c050a17559a9afe4ac73b"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
