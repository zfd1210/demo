

//立即执行函数 防止污染变量 
(function (window) {
/*
    *  type类型 0 普通信息   glyphicon glyphicon-envelope
                1 定时信息  glyphicon glyphicon-time
                2 关注信息 glyphicon glyphicon-heart
                3 广播信息  glyphicon glyphicon-volume-up
    */

   var messagedata = [
    {
        type: 0,
        head: "标题",
        msg: "这个项目非常好嗯你绝对会玩的好啊",
        time: "19:13",
    },
    {
        type: 2,
        head: "标题",
        msg: "这个项目非常好嗯你绝对会玩的好啊",
        time: "12:54",
    },
    {
        type: 3,
        head: "标题",
        msg: "这个项目非常好嗯你绝对会玩的好啊",
        time: "19:13",
    }, {
        type: 1,
        head: "标题",
        msg: "这个项目非常好嗯你绝对会玩的好啊",
        time: "8:12",
    },
    {
        type: 0,
        head: "标题",
        msg: "这个项目非常好嗯你绝对会玩的好啊",
        time: "7:13",
    }
];
    /*
     *  初始化点击事件 
     */
    function initClick() {
        //当点击到某个a标签时改变样式
        $('.footer div a').click(function () {
            $('.footer div a').css("color", "#424242")
            $(this).css("color", "#f40")
        })
        $('.msg').click(function () {
            var data = messagedata[$(this).index()]
            $('#myModal .mo_title').html(data.head)
            $('#myModal .mo_con p:eq(0)').html(data.msg)
            $('#myModal .mo_con p:eq(1)').html(data.time)
            $("#myModal").modal({
                backdrop: false, // 相当于data-backdrop
                keyboard: false, // 相当于data-keyboard
                show: true, // 相当于data-show
                remote: "" // 相当于a标签作为触发器的href
            });

        })
    }
    // 初始化样式
    function initCss() {
        var width = $(window).width();
        if (width < 350) {
            $('.footer span').css("font-size", "12px");
        }
        var height = $(window).height();
        var headerH = $('.content img:eq(0)').height();
        var footerH = $('.footer').height();
        var ch = height - headerH - footerH - 11;
        $('.content_msg').height(ch);
    }
    

    // 图标的样式
    var icon = ["glyphicon glyphicon-envelope", "glyphicon glyphicon-time", "glyphicon glyphicon-heart", "glyphicon glyphicon-volume-up"]

    //初始化项目
    function initMessage(data) {
        var str = '<div class="msg">\
    <div class="msg_image col-xs-3">\
    <span class="'+ icon[data.type] + '"></span>\
    </div>\
    <div class="msg_con col-xs-7">\
        <p class="">'+ data.msg + '</p>\
    </div>\
    <div class="msg_time col-xs-2">'+ data.time + '</div>\
    </div>'
        $('.content_msg').append(str);
    }
    //添加项目
    function appenItems() {
        for (var i = 0; i < messagedata.length; i++) {
            initMessage(messagedata[i])
        }
    }

    // 进行时间排序
    function timeSort() {
        messagedata.sort(function (a, b) {
            var arrsa = a.time.split(":");
            var arrsb = b.time.split(":");
            if (parseInt(arrsa[0]) - parseInt(arrsb[0]) != 0) {
                return parseInt(arrsa[0]) - parseInt(arrsb[0]);
            } else {
                return parseInt(arrsa[1]) - parseInt(arrsb[1]);
            }
        })
    }

    timeSort();
    appenItems();
    initClick();
    initCss();
})(window)