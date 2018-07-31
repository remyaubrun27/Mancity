$(document).ready(function() {
    $('.player_info').hide();
var color;
    $(".player_catagories").hover(function() {
        $(this).next().stop(true, true);
        $(this).next().show();
        $(".player_info").css("background-color",function(color){
          $(".player_catagories").css("height","40px")
          return color="gold";
        });
    }, function() {
        $(this).next().stop(true, true);
        $(this).next().hide();
        $(".player_catagories").css("height", "20px")
    });
});
