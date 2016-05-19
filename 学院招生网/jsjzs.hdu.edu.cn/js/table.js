$(document).ready(function(){
    var buttons = $('.year');
    function linkTo(confirm,addr){
        if(confirm(confirm)){
            window.location = addr;
        }
    }
    buttons.on('mouseover',function(e){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var id = $(this).attr('id');
        var className = '.' + id;
        $(className).addClass('show').siblings().removeClass('show');
    });
    $('.icon').hover(function(){
        $(this).children().eq(0).toggle();
    });
    var $maxWidth = $('#train .widest').width();
    $('.icon').mouseover(function(){
        if(!$(this).parent().hasClass('widest')){
            $(this).parent().siblings().stop().animate({width:$maxWidth/2},500);
            $(this).parent().stop().animate({width:$maxWidth},500);
            $(this).parent().addClass('widest').siblings().removeClass('widest');
        }

    });
    $('.right-image .icon').mouseover(function(){
        $(this).animate({"background-position-x":"80%"},1500);
    }).mouseleave(function(){
        $(this).stop().css({'background-position':'18% 50%'});
    }).click(function(){
        linkTo('亲，你想去 Linux？','https://fedorahosted.org/k12linux/');
    });

    $('#c1').click(function(){
        linkTo('亲，你想去codevs？','http://www.codevs.cn/');
    });

    $('#c2').click(function(){
        linkTo('亲，你想去 玩课网？','http://www.wanke001.com/Partner/PartnerInfo.aspx?PartnerID=1');
    });

    $('#c3').click(function(){
        linkTo('亲，你想去 acm？','http://acm.hdu.edu.cn/');
    });

    $('#c4').click(function(){
        linkTo('亲，你想去 codecombat？','http://codecombat.com/');
    });

});
