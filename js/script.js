
// staart navbar
$(document).ready(function(){
	
	$(window).scroll(function(){
		
	  var scroll = $(this).scrollTop();
		if( scroll > 170){
			$('.scroll-top').slideDown();
		}

		else{
			$('.scroll-top').slideUp();
   	     }

   	     if (scroll > 800) {
   	 	  $('.timer').countTo();
   	  }

});	
	
	
		$('.navbar-nav li a').click(function(){
		$('body, html').animate({

		scrollTop : $($(this).attr('href')).offset().top -100

		});

	});


$('.navbar-nav li').click(function(){
   $(this).addClass('active').siblings().removeClass("active");
  });



    
 // start mixItUp
$(function(){
	
	$("#cont").mixItUp();
});
// End mixItUp


// start contact
	$("textarea").focusin(function(){
		$("textarea").css('border', '1px solid #080')
	});

	$("textarea").focusout(function(){
		$("textarea").css('border', '1px solid #f00')
	});


	$("input").focusin(function(){
		$("input").css('border', '1px solid #080')         
	});

	$("input").focusout(function(){
		$("input").css('border', '1px solid #f00')
	});	

 //End contact

});











