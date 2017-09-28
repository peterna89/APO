$(document).ready(function() {

    // on submit update comment list
    $('.comment-form').submit(function(e) {
        var text = $('.comment-input').val();
        var name = $('.commenter-name').val();
                
        var now = new Date().toDateString();

        // hide no comments text on first submission
        if( $('.comment-empty').length ) {
            $('.comment-empty').css({'display': 'none'});
        } 
    
        $('#comments').append(
            '<li class="row"><div class="col-xs-6"><p>By: ' + name + '</p></div><div class="col-xs-6"><p class="time">Posted: ' + now + '</p></div><div class="col-xs-12"><p class="comment">' + text + '</p><div></li>'
        );
        $('.comment-input').val('');
        return false;
    });
    
    // on hover image border changes color and grows
    $('.artist').hover(function() {
        $('.artist').addClass('flash');
    },function() {
        $('.artist').removeClass('flash');
    });



});

