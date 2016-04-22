var areaIndex;

$(function () {
    $(".area-list > li > a").click(function () {
        var allItem = $(".area-list > li > a");
        for (var i = 0; i < allItem.length; i++) {
            allItem.eq(i).removeClass("active");
            $(".area-box-" + i).hide();
        }
        $(this).addClass("active");
        areaIndex = $(this).parent().index();
        $(".area-box-" + areaIndex).show();
        //        getContent();
    })
    areaIndex = $(".area-list > li > a.active").parent().index();
    console.log(areaIndex)
    $(".area-box-" + areaIndex).show();

    getContent();
})

// 获取内容
function getContent() {}
