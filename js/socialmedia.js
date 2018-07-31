$(document).ready(function(){

  function myFunction(){
    $("#message3").hide();
    $("#submit").click(function(){
      if($("#text3").val()){
        alert("Thank you for participating in this survey");
      }else{
        $("#message3").show();
      }
    });
}
myFunction();
  
});
