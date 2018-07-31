
var a = Math.floor(Math.random() * 101);
var y = Math.floor(Math.random() * 101);
var n = Math.floor(Math.random() * 101);
var agueroPer, yayaPer, nasriPer, sum;


var playerPoll = function(){

while((a+y+n)!=100){
    a = Math.floor(Math.random() * 101);
    y = Math.floor(Math.random() * 101);
    n = Math.floor(Math.random() * 101);
}	
	if((a+y+n)==100){
	    a=a;
	    y=y;
	    n=n;
	}
	
	
    agueroPer = a + "%";
    yayaPer = y + "%";
    nasriPer = n + "%";
	sum = agueroPer + " choose aguero. \n"
	    + yayaPer + " choose yaya toure. \n"
	    + nasriPer + " choose samir nasri.";
	  

	console.log(agueroPer);
	console.log(yayaPer);
	console.log(nasriPer);
	console.log(sum);
};
playerPoll();