(function (window) {

    /**
     *  初始化数据 ajax获取
     */

    var linedata = [
        ]



    var height = $(window).height();
    var footerH = $('.footer').height();
    var ch = height - footerH - 11;
    $('.content').height(ch);

    //判断当前有无在排队的项目
    var cansort = true;
    for (var i = 0; i < linedata.length; i++) {
        if (linedata[i].isFirst == 1) {
            cansort = false;
            return;
        } else {
            cansort = true;
        }
    }
    if (cansort) {
        sortTime()
    }
    //根据时间长短长短排序
    function sortTime() {
        linedata.sort(function (x, y) {
            if (x.isFirst == 1 || y.isFirst == 1) {
                return 0;
            } else {
                return x.startTime - y.startTime;
            }
        })
        linedata[0].isFirst = 1;
    }
    //加载项目
    function initData(data) {
        var btnfstr = '<button class="cancel btn btn-default">取消排队</button>'
        var btnupstr = '<button style="margin-left: 40px;" class="up btn btn-success"><span class="glyphicon glyphicon-arrow-up"></span></button>'
        var str = '<div class="line col-xs-12">\
        <div class="leftimg col-xs-4">\
            <img src="'+ data.imgsrc + '">\
            <span>'+ data.proname + '</span>\
        </div>\
        <div class="l1 col-xs-2">\
            <p>序列号:</p>\
            <p class="l1_con1">'+ data.numbers + '</p>\
        </div>\
        <div class="l2 col-xs-2">\
            <p>游玩时间</p>\
            <p class="l2_con1">'+ data.startTime + ' 分钟</p>\
        </div>\
        <div class="right col-xs-4">\
            '+ (data.isFirst == 1 ? btnfstr : btnupstr) + '\
        </div>\
        </div>'
        $('.content').append(str);
    }
    //执行添加项目
    function appendItems() {
        for (var i = 0; i < linedata.length; i++) {
            initData(linedata[i]);
        }
        upCanclick();
    }

    appendItems(); //首次执行添加项目

    //点击up按钮和取消按钮的时候进行排队操作
    function upCanclick() {
        $('.line').find('.up').click(function (e) {
            e.stopPropagation();
            var index = $(this).parent().parent().index()
            linedata[0].isFirst = 0;
            linedata[index].isFirst = 1;
            var temp = linedata[index];
            for (var j = index; j > 0; j--) {
                linedata[j] = linedata[j - 1];
            }
            linedata[0] = temp;
            $('.content').html('')
            sortTime()
            appendItems();
        });
        $('.line').find('.cancel').click(function (e) {
            e.stopPropagation();
            linedata[0].isFirst = 0;
            linedata[1].isFirst = 1;
            var temp = linedata[0];
            linedata[0] = linedata[1];
            linedata[1] = temp;
            $('.content').html('')
            sortTime()
            appendItems();
        });
        $('.line').click(function (e) {
            e.stopPropagation();
            window.location.href = "../../../parkapp/promessage.html?proname=" + linedata[$(this).index()].proname;
        })
    }

    
    
    $(document).ready(function () {
        var selname = getUrlParamValue("proname");
        if(selname){
            //通过ajax获取改名字的数据
            var selData = null
            linedata.push(null)
        }
    });
    //处理浏览器url参数
    function getUrlParamValue(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
})(window)













