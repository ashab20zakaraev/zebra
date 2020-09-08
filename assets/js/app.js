$(function(){

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed header */
    checkScroll(scrollOffset)

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Menu nav toggle */

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
           scrollTop: blockOffset
        }, 800)

    });

});