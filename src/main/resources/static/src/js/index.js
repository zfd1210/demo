
(function (window) {
    /**
     * 初始化数据 通过ajax获取
     * stars 0-11  0级最高，每升一级 减半个星
     */
    var projectData = [{
        imgSrc: "./src/img/xm01.jpg",
        name: "摩天轮1",
        person: 12,
        waitTime: 45, //时间排序
        stars: 4,
        hot: 59,    //热度排序
        synthesize: 13 //综合排序
    },
    {
        imgSrc: "./src/img/xm02.jpg",
        name: "摩天轮2",
        person: 12,
        waitTime: 66, //时间排序
        stars: 4,
        hot: 13,    //热度排序
        synthesize: 5 //综合排序
    },
    {
        imgSrc: "./src/img/xm01.jpg",
        name: "摩天轮3",
        person: 12,
        waitTime: 22, //时间排序
        stars: 4,
        hot: 39,    //热度排序
        synthesize: 16 //综合排序
    },
    {
        imgSrc: "./src/img/xm01.jpg",
        name: "摩天轮4",
        person: 12,
        waitTime: 34, //时间排序
        stars: 4,
        hot: 22,    //热度排序
        synthesize: 4 //综合排序
    }]

    //初始化部分样式 设置中间区域高度
    var width = $(window).width();
    if (width < 350) {
        $('.footer span').css("font-size", "12px");
    }
    var height = $(window).height();
    var headerH = $('.header').height();
    var footerH = $('.footer').height();
    var ch = height - headerH - footerH - 14;
    $('.content').height(ch);
    //获取当前坐标 设置区域
    function setMap() {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var point = new BMap.Point(r.point.lng, r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
                var gc = new BMap.Geocoder();
                gc.getLocation(point, function (rs) {
                    var addmap = rs.address;
                    addmap = addmap.split("市");
                    $('.map .addmap').html(addmap[1] + '<span class="glyphicon glyphicon-menu-down"></span>')
                });
            } else {
                alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true })
    }
    setMap()

    //初始化游乐项目
    function initProject(data) {
        if (data.waitTime > 60) {
            var hour = parseInt(data.waitTime / 60);
            var minutes = data.waitTime % 60;
        } else {
            var minutes = data.waitTime;
        }
        var str = '<div class="project col-xs-12">\
            <div class="leftimg col-xs-4">\
                <img src='+ data.imgSrc + '>\
                <span>'+ data.name + '</span>\
            </div>\
            <div class="l1 col-xs-2">\
                <div class="starsImg "></div>\
                <p>当前人数:</p>\
                <p class="l1_con1">'+ data.person + ' 人</p>\
            </div>\
            <div class="l2 col-xs-2">\
                <p>热度：<span>'+ data.hot + '</span> </p>\
                <p>预计等待</p>\
                <p class="l2_con1">'+ (hour == undefined ? minutes : (hour + " 小时 " + minutes)) + ' 分钟</p>\
            </div>\
            <div class="right col-xs-4">\
                <button class="btn btn-success">确认排队</button>\
            </div>\
        </div>'
        $('.content .projects').append(str);
        $('.projects .project .starsImg').css("background-position", "0 -" + data.stars * 11 + "px")
    }

    //添加元素
    function addItems() {
        for (var i = 0; i < projectData.length; i++) {
            initProject(projectData[i]);
        }
    }

    /**
 * 三个排序事件
 */

    function sortClick() {
        //综合排序
        $('.sort p:eq(0)').click(function () {
            $('.content .projects').html('');
            projectData.sort(function (x, y) {
                return x.synthesize - y.synthesize;
            })
            addItems();
        });
        // 热度排序
        $('.sort p:eq(1)').click(function () {
            $('.content .projects').html('');
            projectData.sort(function (x, y) {
                return x.hot - y.hot;
            })
            addItems();
        });
        //时间排序
        $('.sort p:eq(2)').click(function () {
            $('.content .projects').html('');
            projectData.sort(function (x, y) {
                return x.waitTime - y.waitTime;
            })
            addItems();
        });
    }

    sortClick(); //排序的点击事件
    addItems(); //初次加载数据


    //当点击project组件时 跳转到详细信息页面
    $('.content .projects .project').click(function () {
        window.location.href = "../../../parkapp/promessage.html?proname=" + projectData[$(this).index()].name;
    })

    //当点击 确认排队 跳转到online
    $('.content .projects .project .right button').click(function (e) {
        e.stopPropagation();
        var name = projectData[$(this).parent().parent().index()].name
        window.location.href = "../../../parkapp/online.html?proname=" + name;

    })
})(window)


// 将js对象转成url
// var parseParam = function (paramObj, key) {
//     var paramStr = "";
//     if (paramObj instanceof String || paramObj instanceof Number || paramObj instanceof Boolean) {
//         paramStr += "&" + key + "=" + encodeURIComponent(paramObj);
//     } else {
//         $.each(paramObj, function (i) {
//             var k = key == null ? i : key + (paramObj instanceof Array ? "[" + i + "]" : "." + i);
//             paramStr += '&' + parseParam(this, k);
//         });
//     }
//     return paramStr.substr(1);
// };