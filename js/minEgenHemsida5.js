// Överdrag funktion
$(document).ready(function(){
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
});

// Kartan
$(document).ready(function(){

	$(function(){
      $("#show-info-link").hide() // try to hide google navigation bar
	});	
   
    $("#show-info-link").click(function(){
        $("#map-box").show(350);
    });
	
	 $("#show-info-link").click(function(){
        $("#show-info-link").hide();
    });
	
    $("#show-map").click(function(){
        $("#map-box").hide(350);
    });
	  $("#show-map").click(function(){
        $("#show-info-link").show();
    });
	
	});
	
	// Göm header funktion
$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
		if ((st > lastScrollTop) && (lastScrollTop>0 && $(window).innerWidth() > 991)) {
       // downscroll code
      $(".header").css("top","-450px");
	  $(".navbar-brand").hide(200);
		
   } 
   else {
      // upscroll code
      $(".header").css("top","0px");
	  	  $(".navbar-brand").show(200);
   }
       lastScrollTop = st;
    });
});

