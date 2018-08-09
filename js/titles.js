var config = {
    apiKey: "<API KEY>",
    authDomain: "<AUTH DOMAIN>",
    databaseURL: "<DATABASE URL>",
    projectId: "<PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<MESSAGING SENDER ID>"
  };
 var app = firebase.initializeApp(config);
 var db = firebase.firestore(app);
 
 //settings
 const settings = { /* your settings... */
	timestampsInSnapshots: true
 };
 db.settings(settings);
 
 //buttons
 var faBtn = document.getElementById("fa");
 var plBtn = document.getElementById("pl");
 var euroBtn = document.getElementById("euro");

 
 function getFA() {
	db.collection("titles").get().then(function(querySnapshot) {
	   querySnapshot.forEach(function(doc) {
		  // doc.data() is never undefined for query doc snapshots
		if (doc.id === "fa") {
			console.log(doc.id, " => ", doc.data());
		}
	   });
	});

 }
 
 function getPL() {
	db.collection("titles").get().then(function(querySnapshot) {
	   querySnapshot.forEach(function(doc) {
		  // doc.data() is never undefined for query doc snapshots
		  if (doc.id === "primerleague") {
			 console.log(doc.id, " => ", doc.data());
			 return doc.data();
		  }
	   });
	});
 }
 
 function getEuro() {
	db.collection("titles").get().then(function(querySnapshot) {
	   querySnapshot.forEach(function(doc) {
		  // doc.data() is never undefined for query doc snapshots
		  if (doc.id === "euro") {
			console.log(doc.id, " => ", doc.data()); 
			 createList(doc.data().year, "euroUL");
			 return doc.data();
		  }
	   });
	});
 }
 
 function createList(text, dest) {
	var listItem = document.createElement("li");
	var textNode = document.createTextNode(text);
	listItem.appendChild(textNode);
	document.getElementById(dest).appendChild(listItem);
 }