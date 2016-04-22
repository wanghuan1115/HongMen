var indexT = [
    "企业文化",
    "公司简介",
    "黉门理念",
    "黉门之歌",
    "合作伙伴"
]
var aboutIndex;

$(function () {
    if ($(".second-nav").is(":visible")) {
        $(".second-nav-item").click(function () {
            var allItem = $(".second-nav-item");
            for (var i = 0; i < allItem.length; i++) {
                allItem.eq(i).removeClass("active");
                $("#about-content-" + i).hide();
            }
            $(this).addClass("active");
            aboutIndex = $(".second-nav-item.active").parent().index() - 1;
            $("#about-content-" + aboutIndex).show();
            getContent();
        })
        aboutIndex = $(".second-nav-item.active").parent().index() - 1;
        $("#about-content-" + aboutIndex).show();
    } else {
        aboutIndex = getParameter("index");
        var allItem = $(".second-nav-item");
        for (var i = 0; i < allItem.length; i++) {
            $("#about-content-" + i).hide();
        }
        $("#about-content-" + aboutIndex).show();

        $("#about-menu").addClass("unfold");
        $("#about-menu").siblings("ul").show();
        $("#about-menu").siblings("ul").children("li").eq(aboutIndex).children("a").addClass("active");
        if (validate(aboutIndex)) {
            $("#about-title").text(indexT[aboutIndex])
        }
    }

    getContent();
})

// 获取内容
function getContent() {}
