$(document).ready(function () {
    $('#button-left').click(function () {
        $('.content-left').fadeOut('slow');
    });
    $('#button-left-2').click(function () {
        $('.content-left').fadeIn('slow');
    });


    $('#button-middle').click(function () {
        $('.content-middle').fadeOut('slow');
    });
    $('#button-middle-2').click(function () {
        $('.content-middle').fadeIn('slow');
    });


    $('#button-right').click(function () {
        $('.content-right').fadeOut('slow');
    });
    $('#button-right-2').click(function () {
        $('.content-right').fadeIn('slow');
    });
    $('#submit').click(function () {
        $('ul').prepend('<li class="table-row"></li>');
        $('ul').prepend($('#comment').val());
        $('ul').prepend('<li class="table-row"></li>');
        $('ul').prepend($('#usr').val());
        $('ul').prepend('<hr class="my-4">');
    });
    // $('.album-img1').hover(function () {
    //     console.log('hovered');

    // });

    $('.album-img1').mouseenter(function () {
        $(this).animate({ width: "100%" }, 'slow');
    });

    $('.album-img1').mouseleave(function () {
        $(this).animate({ width: "70%" }, 'slow');
    });
    $('.album-img2').mouseenter(function () {
        $(this).animate({ width: "100%" }, 'slow');
    });

    $('.album-img2').mouseleave(function () {
        $(this).animate({ width: "70%" }, 'slow');
    });
    $('.album-img3').mouseenter(function () {
        $(this).animate({ width: "100%" }, 'slow');
    });

    $('.album-img3').mouseleave(function () {
        $(this).animate({ width: "70%" }, 'slow');
    });

});


// console.log('haha');