Meteor.startup(function(){
	$(function(){ 
	 $('#slider1') 
	  .anythingSlider({ 
	   toggleControls : true, 
	   theme          : 'metallic',
	   navigationFormatter : function(i, panel){ // add thumbnails as navigation links 
	    return '<img src="../../images/white_' + ['circle', 'circle', 'circle'][i - 1] + '.png">'; 
	   } 
	  }) 
	  // target all images inside the current slider 
	  // replace with 'img.someclass' to target specific images 
	  .find('.panel:not(.cloned) img') // ignore the cloned panels 
	   .attr('rel','group')            // add all slider images to a colorbox group 
	   .colorbox({ 
	     width: '90%', 
	     height: '90%', 
	     href: function(){ return $(this).attr('src'); }, 
	     // use $(this).attr('title') for specific image captions 
	     title: 'Press escape to close', 
	     rel: 'group' 
	   }); 
	});
});