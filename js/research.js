var indexT = [
    "投资理念",
    "宏观研究",
    "政策研究",
    "行业研究"
]
var researchIndex;

$(function () {
    if ($(".second-nav").is(":visible")) {
        $(".second-nav-item").click(function () {
            var allItem = $(".second-nav-item");
            for (var i = 0; i < allItem.length; i++) {
                allItem.eq(i).removeClass("active");
            }
            $(this).addClass("active");
            researchIndex = $(".second-nav-item.active").parent().index() - 1;
            getContent();
        })
        researchIndex = $(".second-nav-item.active").parent().index() - 1;
    } else {
        researchIndex = getParameter("index");

        $("#research-menu").addClass("unfold");
        $("#research-menu").siblings("ul").show();
        $("#research-menu").siblings("ul").children("li").eq(researchIndex).children("a").addClass("active");
        if (validate(researchIndex)) {
            $("#research-title").text(indexT[researchIndex])
        }
    }

    getContent();
})

// 获取内容
function getContent() {
    $("#research-content").empty();
    $("#research-content").append("<p>" + indexT[researchIndex] + "</p>");
}
