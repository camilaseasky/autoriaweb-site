$(function(){
    
    $('.main_header_menu_mobile_obj').on('click', function(){
       $('.main_header_menu_mobile_sub').toggleClass('ds_none');
    });
    
     var speed = 5000;
     
      
     $('.main_cta').slideUp(speed, function(){
         $.each($('.main_empresa_content article'), function(i,e){
             $(e).fadeOut(1000, function(){
                console.log();
                $(this).fadeIn(3000, function(){
                    $('.main_cta').slideDown(speed);
                });
            });
         });        
     });
     
     
    
    
});


