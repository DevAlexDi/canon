$(document).ready(function(){
   
    $("#to_top").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('#to_top').addClass('showed');
        }
        else{
            $('#to_top').removeClass('showed');
        }
    });
    

});