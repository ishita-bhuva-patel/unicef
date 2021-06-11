
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 50) {
        $('body').removeClass('uni-header-hide');
    }  
    else {
        $('body').addClass('uni-header-hide');
    }
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
        $('body').removeClass('uni-headere-show').addClass('uni-scroll-up-show');
    }
    else{
        $('body').addClass('uni-headere-show').removeClass('uni-scroll-up-show');  
    }
  
});

$(window).on('load', function() {     
    setTimeout(function(){  
        $(".uni-loader").addClass('uni-loader-hide'); 
        setTimeout(function(){  
            AOS.init({
                duration: 1500,
                once: true,
            });  
        }, 200);
    }, 500);
     
    $(window).scrollTop(0);
});
jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('body').addClass('uni-scroll-up-show');
        } else {
            $('body').removeClass('uni-scroll-up-show');  
        }
    });
    $('.uni-scroll-up').click(function(){
        $("html, body").animate({ 
            scrollTop: 0,           
        }, 200);
        $('body').removeClass('uni-header-hide')
        return false;
    });
});
