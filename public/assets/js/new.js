"use strict";
$('.header_v2 #banner').superslides({
  animation: 'fade',
  play: 5000
});


"use strict";
//<![CDATA[
var map;

function load() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map"));
    map.setCenter(new GLatLng(-37.817682, 144.957595), 13);
    document.getElementById("map").checked = true;
    toggleZoom(false);
  }
}

function toggleZoom(isChecked) {
  if (isChecked) {
    map.enableScrollWheelZoom();
  } else {
    map.disableScrollWheelZoom();
  }
}

//]]>



jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp({
            parts: {
              0: 'banner',
              1: 'features',
              2: 'courses',
              3: 'teachers',
              4: 'pricing',
              5: 'testimonial',
              6: 'blog',
              7: 'contact'
            },
            itemClass: 'menuItem',
            itemHover: 'active',
            topMargin: 'auto'
            });
        
            // Video responsive
            if ($(window).width()<400){
                $('.lb_mixed').rlightbox({
                    videoWidth:320,
                    videoHeight:280		
                });	
            } if ($(window).width()<640){
                $('.lb_mixed').rlightbox({
                    videoWidth:600,
                    videoHeight:360		
                });	
            } else {
                $('.lb_mixed').rlightbox({
                    videoWidth:640,
                    videoHeight:360		
                });	
            }
        
            // run rlightbox
            $( ".lb" ).rlightbox();
            $( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
            
            $('.flexslider').flexslider({
                animation: "fade",
                animationLoop: true,
                slideshow: true,
                pauseOnAction: false,
                slideshowSpeed: 7000,
                controlNav: true,
                start: function(slider){
                $('body').removeClass('loading');
                }
            });		
        
        var activeImage;
    
        var getmaxHeight = 0;
        $(".testimonialText li").each(function(index, element) {
            if($(this).height()>getmaxHeight){
                getmaxHeight = $(this).height();
                $(".footerTopContent").height(getmaxHeight);
                }
        });
        
        $(".testimonialText li").fadeTo("fast",0);
        $(".testimonialText li:first").fadeTo("fast",1);
        $(".imageSlide .imageBox").removeClass("activeImage");
        $(".imageSlide .imageBox:first").addClass("activeImage");
        $(".imageSlide .imageBox").mouseenter(function(){
            if(!$(this).hasClass("activeImage")){
                var gi = $(this).index();
                //console.log(gi);
                $(".imageSlide .imageBox").removeClass("activeImage");
                $(this).addClass("activeImage");
                $(".testimonialText li").fadeTo("fast",0);
                $(".testimonialText li:eq("+gi+")").fadeTo("fast",1);
                }
        })
            
        // Video lightbox
        $("a[data-rel^='prettyPhoto']").prettyPhoto();	
        
        // for client work jquary
        var windowBottom = $(window).height()+0;
        var index=0;
        $(document).scroll(function(){
            divposition = parseInt($('.factabout').offset().top),10;
            divsrollpos = parseInt($(window).scrollTop()),10;
            ctop = parseInt(divposition-divsrollpos),10;
            if(ctop<Math.round(windowBottom/2)){
                if(index==0){	
                    
                    $('.timer').each(count);
                    
                }
                index++;
            }
        });
    
    
    
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
        
        
        });
    
    });