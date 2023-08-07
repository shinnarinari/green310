$(document).ready(function(){


    // 아티클의 갯수를 구하기
    let numAc= $('article').size()
    console.log(numAc)

    // 아티클의 가로값 구하기
    let winAc= $('article').width()
    console.log(winAc);

    // 아티클의 세로값 구하기
    let htAc= $('article').height()
    console.log(htAc);

    let winht= $(window).height()
    console.log(winht);

    let secTop= (winht/2)-(htAc/2)
    console.log(secTop)

    $('section').width(600+(widAc+20)*numAc)
    $('body').height((widAc+20)*numAc)
    $('section').css({'top':secTop})
    $('nav').css({'top':secTop-50})

    $(window).scroll(function(){
        let sc=$(this).scrollTop()
        $('h1').text(sc)
        $('section').css({'left':-sc})
    });

    $('article h2').click(function(){
        $('article').stop().animate({width:180},500)
        $(this).parent('article').stop().animate({width:600},800)
    })

})
