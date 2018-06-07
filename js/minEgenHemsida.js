
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

	// Flashin funktion
	function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    };

	// Om bilden redan är där visa den
    $(document).ready(function(){
            showImages('.flashIn');
    });

    // När man scrollar till bilden "flashar" den in
    $(window).scroll(function() {
            showImages('.flashIn');
    });
	
	
	// Navbar färg funktion
	$(document).ready(function(){  
	
   var scroll_start = 0;
   var startchange = $('#our-work-progress');
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
			// Göm header vid en viss position 
			$(window).scroll(function(event){
			var st = $(this).scrollTop();
       
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			if ((st > lastScrollTop) && (lastScrollTop>0 && $(window).innerWidth() > 991)) {
				// Den döljs genom position
				$(".header").css("top","-100px");
				$(".navbar-brand").hide(200);	
			} 
			else {
				// Visas vid upp scrolling
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
		  $(".nav-element").css('color', '#d3d3d3')
		  $(".nav-element").hover(
			function () {
				$(this).addClass("before");
				},
			function () {
				$(this).removeClass("before");
			}
			);
       }
   });
    }
});

// Räkna upp funktion
$(window).scroll(function() {
	var a = 0;
	var oTop = $('#counter').offset().top - window.innerHeight;
	
	if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1700,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }
});

// 3D knapp med animering
$(window).ready(function(){
$(".button").wrapInner('<div class=buttontext></div>');
    
    $(".buttontext").clone().appendTo( $(".button") );
    
    $(".button").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
    
    $(".twist").css("width", "25%").css("width", "+=3px");
});

// Överdrag funktion
$(document).ready(function(){  
	$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	});
	});