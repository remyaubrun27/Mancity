var config = {
    apiKey: "AIzaSyAbx0OXAVhGn01Tp8OGww5YSosbSLMKxmg",
    authDomain: "manchestercity-7b95a.firebaseapp.com",
    databaseURL: "https://manchestercity-7b95a.firebaseio.com",
    projectId: "manchestercity-7b95a",
    storageBucket: "manchestercity-7b95a.appspot.com",
    messagingSenderId: "592524579818"
  };

  var app = firebase.initializeApp(config);
  var db = firebase.firestore(app);

   //settings
    const settings = { /* your settings... */
	    timestampsInSnapshots: true
    };
    db.settings(settings);

  db.collection("players").where("starting", "==", true)
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          var listItem = document.createElement("li");
          var player = document.createTextNode(doc.id);
          listItem.appendChild(player);
          document.getElementById("starters").appendChild(listItem);
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });

db.collection("players").where("starting", "==", false)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var listItem = document.createElement("li");
            var player = document.createTextNode(doc.id);
            listItem.appendChild(player);
            document.getElementById("reserves").appendChild(listItem);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

