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
  var goals,gpm,ontarget,shots;//attacking stats
  var cs,bs,conceded,saves;//defenseive stats
  var rc,yc,off,fouls;//discipline stats
  var notableGoals,notableAssists, notablePasses;
  var array=[];

   //settings
    const settings = { /* your settings... */
	    timestampsInSnapshots: true
    };
    db.settings(settings);

  db.collection("stats").doc("attacking").get()
  .then(function(doc){
    goals ="Goals: "+doc.data().goals;
    gpm ="Goals Per Minute: "+doc.data().gpm;
    ontarget = "Shots On Target: "+doc.data().ontarget;
    shots = "Shots: "+doc.data().shots;

    array.push(goals,gpm,ontarget,shots);
    

    populateList(array,"attack");
 });

  db.collection("stats").doc("defense").get()
  .then(function(doc){
    cs ="Clean Sheets: "+doc.data().cleansheets;
    bs ="Blocked Shots: "+doc.data().blockedshots;
    conceded = "Goals Conceded: "+doc.data().conceded;
    saves = "Saves: "+doc.data().saves;

    array.push(cs,bs,conceded,saves);

    populateList(array,"defense");
  });

  db.collection("stats").doc("disciplines").get()
  .then(function(doc){
    yc ="Yellow Cards: "+doc.data().yellow;
    rc ="Red Cards: "+doc.data().red;
    fouls = "Goals Conceded: "+doc.data().fouls;
    off = "Offsides: "+doc.data().offsides;

    array.push(yc,rc,fouls,off);
  
    populateList(array,"discipline");
  });
  
  function populateList(array, reference){
    for(var i = 0;i<array.length;i++){
      var listItem = document.createElement("li");
      var stat = document.createTextNode(array[i]);
      listItem.appendChild(stat);
      document.getElementById(reference).appendChild(listItem);
    }
    array.length = 0;
  }

  db.collection("stats").doc("notable")
  .get()
  .then(function(doc){
    var array = [];
    notableGoals = "Sergio Aguero: "+doc.data().goals;
    notableAssists = "Kevin DeBruyne: "+doc.data().assists;
    notablePasses = "Nicolás Otamendi: "+doc.data().passes;

    array.push(notableGoals,notableAssists,notablePasses);

    populateNotableStats(array);
  })
  
  function populateNotableStats(array){
    var refArray = ["notableGoals","notableAssists","notablePasses"];
    for(var i = 0; i<array.length;i++){
      var listItem = document.createElement("span");
      var stat = document.createTextNode(array[i]);
      listItem.appendChild(stat);
      document.getElementById(refArray[i].toString()).appendChild(listItem);
    }

    
  }