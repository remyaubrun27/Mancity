$(document).ready(function(){
  $('#gmap-canvas-above').hide();
  $('#gmap-canvas-field').hide();

  $('#mapPara').hover(function(){
    $("#gmap-canvas-above").show();
  });
  $('#fieldPara').hover(function(){
    $("#gmap-canvas-field").show();

  })
  $("#closeMap").click(function(){
    $('#gmap-canvas-above').hide();
});
$("#closeField").click(function(){
  $('#gmap-canvas-field').hide();
});
});
