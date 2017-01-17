$(document).ready(function(){

   $("#firstquestion").click(function() {
   	$("#firstanswer").toggle(2000);
   });

   $(".moreContent").addClass("hide");

   $(".readMore").click(function() {

  		$('.moreContent').toggleClass('hide');
	});


});