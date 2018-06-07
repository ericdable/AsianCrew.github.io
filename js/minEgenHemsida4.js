// Tabs funktion
$(document).ready(function(){
	// Hamburgare
	$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
  
  $('.tabs-menu a').click(function(event) {
    event.preventDefault();
    
    // Togglar mellan aktiva knappar
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    
    // Visa bara den aktiva taben
    var activeTab = $(this).attr("href");
    $('.tab-content').not(activeTab).css("display","none");
    $(activeTab).fadeIn(950);
    
  });
 
 
 // Magnificpopup till karusellen
   $('.parent-container-carousel').magnificPopup({
  delegate: 'a', // Länken öppnar magnificPopup
  type: 'image',
   // Fördröjning av öppnandet på 300 millisekunder
  removalDelay: 300,

  // Klassen som läggs i magnificPopup
  mainClass: 'mfp-fade',
  gallery:{enabled:true},
  image:{
		titleSrc: function(item) {
		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';  }
  }
});

 // Magnificpopup till portofolio
   $('.parent-container-portofolio').magnificPopup({
  delegate: 'a', // Länken öppnar magnificPopup
  type: 'image',
   // Fördröjning av öppnandet på 300 millisekunder
  removalDelay: 300,

  // Klassen som läggs i magnificPopup
  mainClass: 'mfp-fade',
  gallery:{enabled:true},
  image:{
		titleSrc: function(item) {
		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';  }
  }
});
   
// Räkna upp funktion
 	var a = 0;
$(window).scroll(function() {
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

          duration: 2500,
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
});

