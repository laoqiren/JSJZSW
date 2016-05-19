$(document).ready(function(){
    var buttons = $('.year');
    buttons.on('mouseover',function(e){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var id = $(this).attr('id');
        var className = '.' + id;
        $(className).addClass('show').siblings().removeClass('show');
    });
});
