// Change color when reached a certain position
	$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#section-body-main');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
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
		} 
	  else {
          $('.navbar').css('background-color', 'transparent');
		  $(".nav-element").css('color', '#d4d4d4');
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