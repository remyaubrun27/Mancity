$(document).ready(function(){
	$(".title").children('ul').hide();
	
		$('.clickable1').hover(function(){
			$(this).next().stop(true, true);
			$(this).next().slideDown('fast'); 
		},
		function(){
			$(this).next().stop(true, true);
			$(this).next().slideUp('slow');
		}
	
	);
	
	
});
