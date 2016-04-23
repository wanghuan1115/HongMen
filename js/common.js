$(function () {
    var screenW;
    screenW = $(window).width() / 640;

    if (screenW > 1) {
        screenW = 1;
    }
    $("html").css({
        "font-size": (100 * screenW) + "px"
    });

    $(window).resize(function () {
        screenW = $(window).width() / 640;

        if (screenW > 1) {
            screenW = 1;
        }
        $("html").css({
            "font-size": (100 * screenW) + "px"
        });
    });

    //    var editUrl = $("a");
    //    for (var i = 0; i < editUrl.length; i++) {
    //        var baseUrl = $(editUrl.eq(i)).attr("href");
    //        if (baseUrl) {
    //            $(editUrl.eq(i)).attr("href", baseUrl + addURLRandTime());
    //        }
    //    }

    $(".switch-tab li").click(function () {
        $(document).scrollTop(0);
        var bor = $(this).siblings();
        for (var i = 0; i < bor.length; i++) {
            $("#pages" + bor.eq(i).index()).hide();
            bor.eq(i).removeClass("choose-tab");
        }
        $(this).addClass("choose-tab");
        $("#pages" + $(this).index() + " > ul").empty();
        $("#pages" + $(this).index()).show();
    })

    bindEvent();
})

//验证字段是否存在，并且内容是否合法
function validate(fields) {
    if (!fields || fields == "" || fields == "null" || fields == "undefined") {
        return false;
    } else {
        return true;
    }
}

function bindEvent() {
    $("#more-button").click(function () {
        $(".more-menu-box").show();
    })

    $(".search-button").click(function () {
        $(".search-box").show();
    })

    $("#fold-button").click(function () {
        $(".pop-menu-box").show();
    })

    $("#search-close").click(function () {
        $(".search-box").hide();
    })

    $("#more-menu-close").click(function () {
        $(".more-menu-box").hide();

        var allItem = $(".more-item");
        for (var i = 0; i < allItem.length; i++) {
            allItem.eq(i).removeClass("unfold");
            allItem.eq(i).siblings("div").hide();
        }
    })

    $("#pop-menu-close").click(function () {
        $(".pop-menu-box").hide();

        var allItem = $(".pop-item");
        for (var i = 0; i < allItem.length; i++) {
            allItem.eq(i).removeClass("unfold");
            allItem.eq(i).siblings("ul").hide();
        }
    })

    $(".feedback-button").click(function () {
        $(".feedback-box").toggle();
    })

    $(".pop-item").click(function () {
        var allItem = $(".pop-item");
        for (var i = 0; i < allItem.length; i++) {
            if (allItem.eq(i).parent().index() != $(this).parent().index()) {
                allItem.eq(i).removeClass("unfold");
                allItem.eq(i).siblings("ul").hide();
            }
        }
        $(this).siblings("ul").toggle();
        if ($(this).siblings("ul").is(":visible")) {
            $(this).addClass("unfold");
        } else {
            $(this).removeClass("unfold");
        }
    })

    $(".more-item").click(function () {
        var allItem = $(".more-item");
        for (var i = 0; i < allItem.length; i++) {
            if (allItem.eq(i).parent().index() != $(this).parent().index()) {
                allItem.eq(i).removeClass("unfold");
                allItem.eq(i).siblings("div").hide();
            }
        }
        $(this).siblings("div").toggle();
        if ($(this).siblings("div").is(":visible")) {
            $(this).addClass("unfold");
        } else {
            $(this).removeClass("unfold");
        }
    })
}

// 从当前链接截取需要的参数
function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 替换换行符
function replaceStringLine(str) {
    return str.replace(/[\r\n]/g, "<br />");
}

// 判断元素是否为空
function isEmpty(obj) {
    if (obj.html().trim() == "") {
        return true;
    } else {
        return false;
    }
}

// 处理异步获取图片,type为1时头像，0普通图片
function checkImg(obj, type) {
    obj.error(function () {
        if (type === 1) {
            obj.attr("src", "img/icon_default_avatar.png");
        } else {
            obj.attr("src", "img/notImg.png");
        }
    })
}

// 选择图片文件后，本地预览图
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

// 计算时间戳到当前的差值
function getTimeDistance(str) {
    var now = Date.parse(new Date());
    var dis = parseInt(now) / 1000 - parseInt(str);

    if (dis < 300) {
        return "刚刚";
    } else if (dis < 3600) {
        return parseInt(dis / 60) + "分钟前";
    } else if (dis < 86400) {
        return parseInt(dis / 60 / 60) + "小时前";
    } else if (dis < 31536000) {
        return parseInt(dis / 60 / 60 / 24) + "天前";
    } else {
        return parseInt(dis / 60 / 60 / 24 / 365) + "年前";
    }
}

// 给链接添加时间戳，用于忽略缓存
function addURLRandTime() {
    return '&randTime=' + new Date().getTime()
}

// 格式化时间戳，full传入返回日期+时间，未传入仅返回日期
function formatDate(str, full) {
    var dateTime = new Date(parseInt(str) * 1000);
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();

    if (full) {
        var hour = dateTime.getHours().toString();
        var minute = dateTime.getMinutes().toString();
        var second = dateTime.getSeconds().toString();
        if (minute.length < 2) {
            minute = "0" + minute;
        }

        if (second.length < 2) {
            second = "0" + second;
        }

        return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    } else {
        return year + "/" + month + "/" + day;
    }
}

// 截取字符串
function subCompanyName(str, len) {
    if (str.length < len) {
        return str;
    } else {
        return str.substring(0, len - 1) + "...";
    }
}

function showWait() {
    layer.open({
        type: 2,
        shadeClose: false,
        end: function (elem) {}
    });
}

function hideWait() {
    layer.closeAll();
}

// 处理手机号码显示，微信专用
function convertPhoneNumber(phone) {
    var numberNew = phone.toString();
    numberNew = numberNew.substring(0, 3) + "." + numberNew.substring(3, 7) + "." + numberNew.substring(7, phone.length);
    return numberNew;
}

// 通用提示，用于服务端判断参数错误或其他错误时
function resultRemind(str) {
    layer.open({
        content: str,
        style: 'background-color:#FF6100; font-size:0.26rem;color:#fff; border:none;',
        time: 2,
        shadeClose: true,
        end: function (elem) {}
    });
}

// 网络错误
function networkError() {
    layer.open({
        content: '网络错误，请检查网络连接',
        style: 'background-color:#FF6100; font-size:0.26rem;color:#fff; border:none;',
        time: 2,
        shadeClose: true,
        end: function (elem) {}
    });
}

// 请求出错
function requestError() {
    layer.open({
        content: '请求出错 ，请重试',
        style: 'background-color:#FF6100; font-size:0.26rem;color:#fff; border:none;',
        time: 2,
        shadeClose: true,
        end: function (elem) {}
    });
}

// 列表没有更多内容了
function noMoreCentent() {
    layer.closeAll();
    $(document.body).css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
    });
    layer.open({
        content: '没有更多内容了',
        style: 'background-color:#FF6100; border:none;',
        time: 2,
        shadeClose: true,
        end: function (elem) {
            $(document.body).css({
                "overflow-x": "auto",
                "overflow-y": "auto"
            });
        }
    });
}

// 瀑布流，返回高度较小的，当高度相等时，返回第一个。
function compareWaterfall() {
    if ($(".search-list-1").height() >= $(".search-list-0").height()) {
        return 0;
    } else {
        return 1;
    }
}
