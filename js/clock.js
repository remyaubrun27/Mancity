$(document).ready(function(){
var date= new Date();
var currTime = date.toLocaleTimeString();
	$("div#clock").text(currTime);
		setInterval(function(){
		var date= new Date();
		var currTime = date.toLocaleTimeString();
	
	$("div#clock").text(currTime);
	}, currTime, 1000);
});


	