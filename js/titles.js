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
 
 
 
 //fa variables
 var year1, year2, year3, year4, year5, arrayFa = [];
 //euro variables
 var year, arrayEuro = [];
 //primer league variables
 var year1pl, year2pl, year3pl, year4pl, plArray = [];
 
 
 document.addEventListener("DOMContentLoaded", function() {
	//buttons
	var faBtn = document.getElementById("fa");
	var plBtn = document.getElementById("pl");
	var uefaBtn = document.getElementById("uefa");
 
	faBtn.addEventListener("click", function() {
	   db.collection("titles").doc("fa")
		  .get().then(function(doc) {
			 year1 = doc.data().year1;
			 year2 = doc.data().year2;
			 year3 = doc.data().year3;
			 year4 = doc.data().year4;
			 year5 = doc.data().year5;
 
			 arrayFa.push(year1, year2, year3, year4, year5);
 
			 createList(arrayFa, "faUL");
		  });
 
	});
	plBtn.addEventListener("click", function() {
	   db.collection("titles").doc("primerleague")
		  .get()
		  .then(function(doc) {
			 year1pl = doc.data().year1;
			 year2pl = doc.data().year2;
			 year3pl = doc.data().year3;
			 year4pl = doc.data().year4;
 
			 plArray.push(year1pl, year2pl, year3pl, year4pl);
 
			 createList(plArray, "plUL");
		  });
	});
	uefaBtn.addEventListener("click", function() {
	   db.collection("titles").doc("uefa")
		  .get()
		  .then(function(doc) {
			 year = doc.data().year;
			 arrayEuro.push(year);
			 createList(arrayEuro, "uefaUL");
		  });
	})
 });


 
 function createList(array, dest) {
	for (var i = 0; i < array.length; i++) {
	   var listItem = document.createElement("li");
	   var textNode = document.createTextNode(array[i]);
	   listItem.appendChild(textNode);
	   document.getElementById(dest).appendChild(listItem);
	}
	array.length = 0;
 }