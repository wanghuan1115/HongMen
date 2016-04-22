var indexT = [
    "黉门活动",
    "黉门新闻",
    "行业新闻"
]
var dynamicIndex;

$(function () {
    if ($(".second-nav").is(":visible")) {
        $(".second-nav-item").click(function () {
            var allItem = $(".second-nav-item");
            for (var i = 0; i < allItem.length; i++) {
                allItem.eq(i).removeClass("active");
                $("#dynamic-content-" + i).hide();
                $("#dynamic-content-" + i + " .dynamic-date-list > li > a").off("click");
            }
            $(this).addClass("active");
            dynamicIndex = $(".second-nav-item.active").parent().index() - 1;
            $("#dynamic-content-" + dynamicIndex + " .dynamic-date-list > li > a").on("click", function () {
                $(this).siblings("table").toggle();
            })
            $("#dynamic-content-" + dynamicIndex).show();
            $("#dynamic-title").text(indexT[dynamicIndex]);
            getContent();
        })
        dynamicIndex = $(".second-nav-item.active").parent().index() - 1;
        $("#dynamic-content-" + dynamicIndex + " .dynamic-date-list > li > a").on("click", function () {
            $(this).siblings("table").toggle();
        })
        $("#dynamic-title").text(indexT[dynamicIndex]);
        $("#dynamic-content-" + dynamicIndex).show();
    } else {
        dynamicIndex = getParameter("index");
        var allItem = $(".second-nav-item");
        for (var i = 0; i < allItem.length; i++) {
            $("#dynamic-content-" + i).hide();
            $("#dynamic-content-" + i + " .dynamic-date-list > li > a").off("click");
        }
        $("#dynamic-content-" + dynamicIndex).show();

        $("#dynamic-menu").addClass("unfold");
        $("#dynamic-menu").siblings("ul").show();
        $("#dynamic-menu").siblings("ul").children("li").eq(dynamicIndex).children("a").addClass("active");
        $(".dynamic-date-box-mobile > div > a").on("click", function () {
            $(this).siblings("ul").toggle();
        })
        if (validate(dynamicIndex)) {
            $("#dynamic-title").text(indexT[dynamicIndex])
        }
    }

    getContent();
})

// 获取内容
function getContent() {}
