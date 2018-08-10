var config = {
    apiKey: "<EMPTY>",
    authDomain: "<EMPTY>",
    databaseURL: "<EMPTY>",
    projectId: "<EMPTY>",
    storageBucket: "<EMPTY>",
    messagingSenderId: "<EMPTY>"
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
          listItem.style.fontSize = "25px";
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
            listItem.style.fontSize = "25px";
            listItem.appendChild(player);
            document.getElementById("reserves").appendChild(listItem);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

