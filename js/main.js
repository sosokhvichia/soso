
// burger menu code

$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active');
	});

	$('ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	})
});



$(document).ready(function(){
	$('.our-doctor-group').slick({
		prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
		nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
		arrows:true,
		dots:true,
		slidesToShow:4,
		autoplay:true,
		speed:1200,
		autoplaySpeed: 3000,
		
		responsive: [
			{
			  breakpoint: 1047,
			  settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 800,
			  settings: {  
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2
				
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
})



/////////////////    insurance-logo

$(document).ready(function(){
	$('.insurance-logo-items').slick({
		prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
		nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
		slidesToShow:5,
		autoplaySpeed: 2000,
		arrows:true,

		responsive: [
			{
			  breakpoint: 1077,
			  settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {  
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
})



$(document).ready(function(){
	$('.sl').slick({
		prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
		nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
		speed:1200,
		autoplaySpeed: 3000,
		arrows:true,
		autoplay:true,
		dots:true
		  
	  });
})

/////////////
$(document).ready(function(){
	$('.news-group').slick({
		prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-left"></i></span>',
		nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
		slidesToShow:3,
		
		responsive: [
			{
			  breakpoint: 1047,
			  settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 800,
			  settings: {  
				arrows: false,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 2
				
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	  });
})







// გალერეა

$(document).ready(function(){
	$(".list").click(function(){
		let value = $(this).attr("data-filter");

		if (value == "all"){
			$(".gallery-filter-items").show(1000);
		}
		else{
			$(".gallery-filter-items").not("." + value).hide(1000);
			$(".gallery-filter-items").filter("." + value).show(1000);
		}

		$(".gallery-filter-list").removeClass("active");
		$(this).addClass("active");
	});	

	$('.gallery-filter-items').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		// other options

		

		gallery: {
			enabled: true, // set to true to enable gallery
		  
			preload: [0,2], // read about this option in next Lazy-loading section
		  
			navigateByImgClick: true,
		  
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
		  
			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
		  },

		  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		  zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
		
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
		
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
			  // openerElement is the element on which popup was initialized, in this case its <a> tag
			  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
			  return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		  }

	  });

});

