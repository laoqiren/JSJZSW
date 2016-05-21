$(document).ready(function(){
    $('.cbp_tmicon').click(function(){
        var iconClass = $(this).attr('class').slice(-2);
        switch(iconClass){
            case 'p1':
                $('#p1').toggle();
                break;
            case 'p2':
                $('#p2,#p3,#p4,#p5').toggle();
                break;
            case 'p3':
                $('#p6').toggle();
                break;
            case 'p4':
                $('#p7').toggle();
                break;
            case 'p5':
                $('#p8,#p9,#p10,#p11,#p12,#p13,#p14').toggle();
                break;
        }
    });
});
