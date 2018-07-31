//import firebase from "firebase";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbx0OXAVhGn01Tp8OGww5YSosbSLMKxmg",
    authDomain: "manchestercity-7b95a.firebaseapp.com",
    databaseURL: "https://manchestercity-7b95a.firebaseio.com",
    projectId: "manchestercity-7b95a",
    storageBucket: "manchestercity-7b95a.appspot.com",
    messagingSenderId: "592524579818"
  };
  var app = firebase.initializeApp(config);
  export const db = firebase.firestore(app);
  //const playerRef = db.collection("players").doc("Aguero");


