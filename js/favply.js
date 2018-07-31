var a = Math.floor(Math.random() * 101);
var v = Math.floor(Math.random() * 101);
var n = Math.floor(Math.random() * 101);
var agueroPer, vincePer, nasriPer,aguero,vince,nasri;

var playerPoll = function(){

while((a+v+n)!=100){
    a = Math.floor(Math.random() * 101);
    v = Math.floor(Math.random() * 101);
    n = Math.floor(Math.random() * 101);
}
	if((a+v+n)==100){
	    a=a;
	    v=v;
	    n=n;
	}
    agueroPer = a + "%";
    vincePer = v + "%";
    nasriPer = n + "%";
};
$(document).ready(function(){

	$("div#aguero p").hide();

	$("#abox").click(function(){
		var checked = true;
	if($("#abox").is(':checked')==checked){
		alert("Your favourite player is Sergio Aguero");
	}
	playerPoll();
	$("div#agueroPoll.poll").replaceWith(agueroPer + " of participants choose Aguero");
	$("div#nasriPoll.poll").replaceWith(nasriPer + " choose Nasri");
	$("div#vincePoll.poll").replaceWith(vincePer + " choose Kompany");
	$("div#aguero p").show();

});

});
$(document).ready(function(){

	$("div#nasri p").hide();

	$("#nbox").click(function(){
		var checked = true;
	if($("#nbox").is(':checked')==checked){
		alert("Your favourite player is Samir Nasri");

	}
	playerPoll();
		$("div#agueroPoll.poll").replaceWith(agueroPer+ " choose Aguero");
		$("div#nasriPoll.poll").replaceWith(nasriPer + " of participants choose Nasri");
		$("div#vincePoll.poll").replaceWith(vincePer + " choose Kompany");
	$("div#nasri p").show();

});

});
$(document).ready(function(){

	$("div#vince p").hide();

	$("#vbox").click(function(){
		var checked = true;
	if($("#vbox").is(':checked')==checked){
		alert("Your favourite player is Vincent Kompany");

	}
	playerPoll();
		$("div#agueroPoll.poll").replaceWith(agueroPer + " choose Aguero");
		$("div#nasriPoll.poll").replaceWith(nasriPer+ " choose Nasri");
		$("div#vincePoll.poll").replaceWith(vincePer +" of participants choose Kompany");
	$("div#vince p").show();

});
newPlayer();
});

var newPlayer = function(){
  $("#addPly").hide();

  $("#addPlyButton").click(function(){
    var player = prompt("Please enter your favorite player", " ");
    var plyLength = player.length;
    console.log(plyLength + ": player length");
    if(player===null||player===" "){
      player = prompt("Please enter a player, cannot be empty");
      document.getElementById("newPly").innerHTML="Your favorite player is "+player+"!";
      cssChange(plyLength);
    }else{
      document.getElementById("newPly").innerHTML="Your favorite player is "+player+"!";
      cssChange(plyLength);
    }
  })
}

var cssChange=function(length){
  if(length<12){
  $("#newPly").css({
    "position":"relative",
    "left":"275px",
    "font-size":"28px"
  })
}else if(length>12&&length<20){
  $("#newPly").css({
    "position":"relative",
    "left":"220px",
    "font-size":"28px"
  })
}else if(length>20){
  $("#newPly").css({
    "position":"relative",
    "left":"150px",
    "font-size":"28px"
  })
}else{
  return;
}
}
