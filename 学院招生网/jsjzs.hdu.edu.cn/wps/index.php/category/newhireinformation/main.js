$(function(){
    function solveData(data){
        console.log(data);
        var pages = [];
        var page = [];
        for(var i=0; i<data.length; i++){
            page.push(data[i]);
            if((i+1)%5 === 0){
                pages.push(page);
                page = [];
            }
        }
        var obj = {
            pages:pages
        };
        console.log(obj.pages[0][0].belong);
        var html = template(obj);
        $('.content-wrap').append(html);
        $('div.page').eq(0).addClass('show');
        $('.page:last .next').css({"display":"none"});
        //$('#newest-title').text($('#newsList li:first a').text());
        //$('#newest-right').append($('#newsList li:first a').text()+$('#newsList li:first .newsDate').eq(0).text());
        $('.next').click(function(){
            $(this).parent().parent().removeClass('show').next().addClass('show');
            $('.content-wrap table').hide();
        });
        $('.pre').click(function(){
            $(this).parent().parent().removeClass('show').prev().addClass('show');
            $('.content-wrap table').hide();
        });
        $('.first-page').click(function(){
            $('div.page').eq(0).addClass('show').siblings().removeClass('show');
            $('.content-wrap table').hide();
        });
        $('.last-page').click(function(){
            $('div.page:last').addClass('show').siblings().removeClass('show');
            $('.content-wrap table').hide();
        });
        $('.go').click(function(){
            var pageNumber = parseInt($(this).prev().val());
            if(1<=pageNumber&&pageNumber<=$('div.page').length){
                $('div.page').eq(pageNumber-1).addClass('show').siblings().removeClass('show');
                $('.content-wrap table').hide();
            }
        });
        $('.item-more').click(function(){
            $('.content-wrap table').show();
            $('.jobs').eq(0).html(' ');
            var index = $(this).parent().attr('id');
            var msg = data[index];
            var msgArr = [msg.name,msg.email,msg.type,msg.belong,msg.place,msg.holdTime];
            var wrapTds = $('.content-wrap table:first tr:odd td');
            for(var i=0; i<wrapTds.length; i++){
                wrapTds.eq(i).text(msgArr[i]);
            }
            var jobs = msg.jobs;
            for(var j=0; j<jobs.length; j++){
                $('.jobs').eq(0).append('<tr><td>职位名称</td><td>职位类型</td><td>工作地点</td><td>招聘人数</td></tr>'+'<tr><td>'+jobs[j].name+'</td>'+'<td>'+jobs[j].type+'</td><td>'+jobs[j].place+'</td>'+'<td>'+jobs[j].count+'</td></tr>'+'<tr class="intro"><td colspan="4">职位描述</td></tr><tr class="intro"><td colspan="4">'+jobs[j].require+'</td></tr>');
            }
        });
    }
    $.ajax({
        url: 'http://115.28.135.142/getJobs.php',
        type: 'get',
        success: function(data){
            solveData(data);
        }
    });
});
