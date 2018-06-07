// Räkna upp funktion
$(document).ready(function(){
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

          duration: 1700,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
	});
});

// Överdrag funktion
$(document).ready(function(){
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
	});
  
// Göm header funktion
$(document).ready(function(){
  $(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
		if ((st > lastScrollTop) && (lastScrollTop> 0 && $(window).innerWidth() > 991)) {
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
});
  });
	
	
	



	