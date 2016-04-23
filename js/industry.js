$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true
    });

    $(".info-button").click(function () {
        $(this).parent().siblings(".industry-info-box").show();
        swiper.disableMousewheelControl();
        swiper.detachEvents();
    })

    $(".industry-info-close").click(function () {
        $(this).parent().parent().hide();
        swiper.enableMousewheelControl();
        swiper.attachEvents();
    })
})
