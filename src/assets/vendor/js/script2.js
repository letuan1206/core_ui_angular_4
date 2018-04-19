$(document).ready(function () {
    if ($('.list-setting #section-1').length) {
        $(document).on("scroll", onScroll);
    }

    $('.section-anchor ul li a').on('click', function () {
        var href_link = $(this).attr('href');
        var pos1 = $(href_link).offset().top;
        $('.section-anchor ul li a').removeClass("active-menu");
        $(this).addClass('active-menu');

        $('html, body').stop().animate({
            'scrollTop': pos1 - 101
        });
    });
    // $('.sheet-right-edit .btn-edit').on("click", function () {
    //         $(this).parents('.card').toggleClass('edit-card');
    // });
    $(".box-logo-company i").on("click", function () {
        $(this).parent().remove();
    });
    $(".btn-cancel-logo").on("click", function () {
        //$(this).parent().removeClass('active');
        $(this).parents('.organisation-content').find('.edit-box').removeClass('active');
        $(this).parent().parent().find('.wrap-logo .box-logo-company').css('border', 'none');

    });
    $('.sheet-right-edit .edit-box').on("click", function () {
        $(this).parents('.card').toggleClass('edit-card');
    })
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('.section-anchor ul li').each(function () {

        var currLink = $(this).find('a');
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && (refElement.position().top + refElement.height()) > scrollPos) {
            $('.section-anchor ul li a').removeClass("active-menu");
            currLink.addClass("active-menu");
        }
        else {
            currLink.removeClass("active-menu");
        }
    });
}