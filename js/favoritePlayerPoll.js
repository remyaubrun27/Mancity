
var a = Math.floor(Math.random() * 101);
var v = Math.floor(Math.random() * 101);
var n = Math.floor(Math.random() * 101);
var agueroPer, vincePer, nasriPer, sum;


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
	sum = agueroPer + " choose aguero. \n"
	    + vincePer + " choose yaya toure. \n"
	    + nasriPer + " choose samir nasri.";
	  

	console.log(agueroPer);
	console.log(vincePer);
	console.log(nasriPer);
	console.log(sum);
};
playerPoll();

$(document).ready(function(){
	
});