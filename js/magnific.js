$(document).ready(function() {
 $('.parent-container1').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
   // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',
  gallery:{enabled:true},
  image:{
		titleSrc: function(item) {
		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';  }
  }
  
});

 $('.parent-container2').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
   // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',
  gallery:{enabled:true},
  image:{
		titleSrc: function(item) {
		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';  }
  }
  
});
 
$('.popup-link').magnificPopup({
	type:'image',
	 // Delay in milliseconds before popup is removed
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade'
});

});


