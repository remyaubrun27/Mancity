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

//    db.collection("titles").doc("fa").get().then(function(doc){
// 	if(doc.exists){
// 		console.log(doc.data());
// 	}
//   })

db.collection("titles").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
		// doc.data() is never undefined for query doc snapshots
		if(doc.id === "euro"){
			console.log(doc.id, " => ", doc.data());
		}
    });
});
  //console.log(title);


//   db.collection("titles").where("capital", "==", true)
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });