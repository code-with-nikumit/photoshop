$(document).ready(function() {
    $('.multiple-items').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });

    $('.product-items').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $(".plus").click(function() {
        if ($($(this).next()).hasClass('show')) {
            $('.plus').removeClass('active');
            $(".question__details").removeClass('show');
            $(".question__details").slideUp();
        } else {
            $(".plus").removeClass('active');
            $(".question__details").removeClass('show');
            $(".question__details").slideUp();
            $(this).addClass('active');
            $(this).next().addClass("show");
            $(this).next().slideDown();
        }
    });;
});