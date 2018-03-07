/**
 * Created by rowshan on 18/October/14.
 */
$(function () {
    $("img.reflect").reflect();

    var showcase = $("#showcase"), title = $('#item-title')

    showcase.Cloud9Carousel({
        yOrigin: 42,
        yRadius: 48,
        itemClass: "card",
        mirror: {
            gap: 12,
            height: 0.2
        },
        buttonLeft: $("#nav > .left"),
        buttonRight: $("#nav > .right"),
        autoPlay: 1,
        bringToFront: true,
        onRendered: rendered,
        onLoaded: function () {
            showcase.css('visibility', 'visible')
            showcase.css('display', 'none')
            showcase.fadeIn(1500)
        }
    })

    function rendered(carousel) {
        var $link = carousel.nearestItem().element.getElementsByTagName( "img" )[0].alt;
        title.text($link);
        title.attr("href",$link);

        // Fade in based on proximity of the item
        var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
    }

    //
    // Simulate physical button click effect
    //
    $('#nav > button').click(function (e) {
        var b = $(e.target).addClass('down')
        setTimeout(function () {
            b.removeClass('down')
        }, 80)
    })

    $(document).keydown(function (e) {
        //
        // More codes: http://www.javascripter.net/faq/keycodes.htm
        //
        switch (e.keyCode) {
            /* left arrow */
            case 37:
                $('#nav > .left').click()
                break

            /* right arrow */
            case 39:
                $('#nav > .right').click()
        }
    })
})