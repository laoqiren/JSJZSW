$(document).ready(function(){
    var buttons = $('.major-intro button');
    buttons.click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var id = $(this).attr('id');
        console.log(id);
        $('.'+id).addClass('show').siblings().removeClass('show');
    }).hover(function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('hover').siblings().removeClass('hover');
        }
    });
});
