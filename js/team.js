$(function () {
    $(".team-item").hover(function () {
        $(this).find(".hover-box").show();
    }, function () {
        $(this).find(".hover-box").hide();
    })
})
