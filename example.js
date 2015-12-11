
    jQuery("#hamburger").click(function() {
        ...
    });

    jQuery("#contentLayer").click(function() {
        ...
    });

var contentWidth = jQuery('#content').width();

jQuery('#content').css('width', contentWidth);

jQuery('#container').bind('touchmove', function(e){e.preventDefault()});

jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
    duration: 700
});

jQuery("#contentLayer").click(function() {

    jQuery('#container').unbind('touchmove');

    jQuery("#container").animate({"marginLeft": ["0", 'easeOutExpo']}, {
        duration: 700,
        complete: function() {
              jQuery('#content').css('width', 'auto');
            jQuery('#contentLayer').css('display', 'none');

        }
    });
});


