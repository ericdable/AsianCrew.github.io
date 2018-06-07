// Överdrag funktion
$(document).ready(function(){  
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
});

// Byt färg på headern vid en viss position
$(document).ready(function(){  
   var scroll_start = 0;
   var startchange = $('#about-our-history');
   var offset = startchange.offset();
   var windowsize = $(window).width();
   var lastScrollTop = 0, delta = 15;

    if (startchange.length){
	$(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top && $(window).width() > 991 )  {
          $(".navbar").css('background-color', 'white');
		  $(".nav-element").css('color', 'black');
		  $(".nav-element").hover(
			function () {
				$(this).addClass("after");
				},
			function () {
				$(this).removeClass("after");
			}
			);
			// Göm header funktion
			$(window).scroll(function(event){
			var st = $(this).scrollTop();
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				if ((st > lastScrollTop) && (lastScrollTop>0 && $(window).innerWidth() > 991)) {
					// Vid ner scrolling
					$(".header").css("top","-100px");
					$(".navbar-brand").hide(200);	
				} 
				else {
					// Vid upp scrolling
					$(".header").css("top","0px");
					$(".navbar-brand").show(200);
				}
				lastScrollTop = st;
				});	
			} 
				else if(scroll_start > offset.top && $(window).width() < 991 )  {
					$('#nav-button-background').addClass( "nav-button-background-after");
				}
				else {
					$('.navbar').css('background-color', 'transparent');
					$(".nav-element").css('color', 'black');
				}
			});
		}
});


$(document).ready(function(){
  // Lägg till smooth scrolling till alla länkar
  $(".smooth-scrolling").on('click', function(event) {

    // Förhindra defaultvärden
    if (this.hash !== "") {
      event.preventDefault();

      // Lagrar variabeln hash
      var hash = this.hash;

   	  // Använder JQuery´s animeringsfunktion för att lägga till smooth scroll
	  // 750 är i millisekunder och det är tiden som det tar för att scrolla ner
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 750, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
