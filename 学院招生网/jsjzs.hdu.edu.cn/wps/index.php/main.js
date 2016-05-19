$(function(){
    var selectionsPos = $('.selections').offset().top;
    var selectionsMar = parseInt($('.selections').css('margin-top'));
    var bodyToSelections;
    var milus;
    var activeP = $('.active-button').eq(0).attr('class').slice(-2);
    var target = $('#'+activeP).offset().top;
    $(window).scroll(function(){
        bodyToSelections = $('body').scrollTop() - selectionsPos;
        if(bodyToSelections > 0){
            $('.selections').css({'margin-top': selectionsMar+bodyToSelections});
        }
    });
    $('.selections button').hover(function(){
        if(!$(this).hasClass('active-button')){
            $(this).addClass('hover-button').siblings().removeClass('hover-button');
        }
    }).click(function(){
        console.log($('body').scrollTop());
        $(this).addClass('active-button').siblings().removeClass('active-button');
        activeP = $(this).attr('class').slice(0,2);
        target = $('#'+activeP).offset().top;
        if(parseInt($(window).scrollTop()) !== parseInt(target)){

            if(activeP === 'p1'){
                $('html,body').stop().animate({
                    scrollTop: selectionsPos
                }, 800, "easeOutBack");
                milus = target-selectionsPos;
                $('.selections').css({'margin-top':selectionsMar+milus});
            } else {
                $('html,body').stop().animate({
                    scrollTop: target
                }, 800, "easeOutBack");
                if(activeP === 'p6'){
                    milus = target-selectionsPos-100;
                } else {
                    milus = target-selectionsPos;
                }
                $('.selections').css({'margin-top':selectionsMar+milus});
            }
        }
    });

});
