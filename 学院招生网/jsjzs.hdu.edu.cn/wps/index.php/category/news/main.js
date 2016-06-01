$(document).ready(function(){
    function solveData(data){
        var uls = [];
        var pages = [];
        var five = [];
        for(var i=0; i<data.length;i++){
            five.push(data[i]);
            if((i+1)%5 === 0) {
                uls.push(five);
                five = [];
                continue;
            }
        }
        var everyPage = [];
        for(var j=0; j<uls.length;j++){
            everyPage.push(uls[j]);
            if((j+1)%2 === 0){
                pages.push(everyPage);
                everyPage = [];
                continue;
            }
        }
        var obj = {
            news:pages
        };
        var html = template(obj);
        $('#newsList').append(html);
        $('.content-wrap ul li a').click(function(e){
            e.preventDefault();
            var clickUrl = $(this).attr('href').slice(45);
            $.ajax({
                url:'http://jsjzs.hdu.edu.cn/getNewsDetail.php?id='+clickUrl,
                type:'get',
                success:function(data){
                    $('#news-content').html(data.data.article);
                }
            });
        });
        $('#newsList div.page').eq(0).addClass('show');
        $('#newsList div:last .next').css({"display":"none"});
        //$('#newest-title').text($('#newsList li:first a').text());
        //$('#newest-right').append($('#newsList li:first a').text()+$('#newsList li:first .newsDate').eq(0).text());
        $('.next').click(function(){
            $(this).parent().parent().removeClass('show').next().addClass('show');
        });
        $('.pre').click(function(){
            $(this).parent().parent().removeClass('show').prev().addClass('show');
        });
        $('.first-page').click(function(){
            $('#newsList div.page').eq(0).addClass('show').siblings().removeClass('show');
        });
        $('.last-page').click(function(){
            $('#newsList > div.page:last').addClass('show').siblings().removeClass('show');
        });
        $('.go').click(function(){
            var pageNumber = parseInt($(this).prev().val());
            if(1<=pageNumber&&pageNumber<=$('#newsList > div').length){
                $('#newsList > div.page').eq(pageNumber-1).addClass('show').siblings().removeClass('show');
            }
        });
    }
    $.ajax({
        url: 'http://jsjzs.hdu.edu.cn/catch.php',
        type: 'get',
        success: function(data){
            solveData(JSON.parse(data));
            //console.log(data);
        }
    });

});
