

(function (window) {
    //订单信息
    var orders = [
        {
            imgsrc: "./src/img/xm05.jpg",
            item: "激流涌动",
            user: "王夫之",
            money: 20,
            tel: 13566877545
        }, {
            imgsrc: "./src/img/xm05.jpg",
            item: "激流涌动",
            user: "ccc",
            money: 20,
            tel: 13566877545
        }, {
            imgsrc: "./src/img/xm05.jpg",
            item: "激流涌动",
            user: "aaa",
            money: 20,
            tel: 13566877545
        }, {
            imgsrc: "./src/img/xm05.jpg",
            item: "激流涌动",
            user: "bbb",
            money: 20,
            tel: 13566877545
        }]


    /**
     * 关注项目
     */
    var attentionData = [
        {
            imgSrc: "./src/img/xm01.jpg",
            name: "摩天轮",
            person: 12,
            waitTime: 45, //时间排序
            stars: 3,
            hot: 59,    //热度排序
            synthesize: 13, //综合排序
            price: 20
        },
        {
            imgSrc: "./src/img/xm02.jpg",
            name: "摩天轮",
            person: 12,
            waitTime: 66, //时间排序
            stars: 6,
            hot: 13,    //热度排序
            synthesize: 5, //综合排序
            price: 21
        },
        {
            imgSrc: "./src/img/xm01.jpg",
            name: "摩天轮",
            person: 12,
            waitTime: 22, //时间排序
            stars: 2,
            hot: 39,    //热度排序
            synthesize: 16, //综合排序
            price: 20
        },
        {
            imgSrc: "./src/img/xm01.jpg",
            name: "摩天轮",
            person: 12,
            waitTime: 34, //时间排序
            stars: 4,
            hot: 22,    //热度排序
            synthesize: 4, //综合排序
            price: 25
        }]
    /**
     * 乘客人信息
     */
    var user = [{
        name: "大祥哥1",
        tel: 12312332244
    },
    {
        name: "大祥哥2",
        tel: 12312332244
    },
    {
        name: "大祥哥3",
        tel: 12312332244
    },
    {
        name: "大祥哥4",
        tel: 12312332244
    },
    {
        name: "大祥哥5",
        tel: 12312332244
    }]

    // 初始化样式
    initCss();
    function initCss() {
        var height = $(window).height();
        var headerH = $('.content .head').height();
        var footerH = $('.footer').height();
        var ch = height - headerH - footerH - 11;
        var width = $(window).width();
        if (width < 350) {
            $('.footer span').css("font-size", "12px");
        }
        $('.pro:eq(0)').css("border-bottom", "10px solid #ccc")
        $('.pro:eq(3)').css("border-bottom", "10px solid #ccc")

        $('.pro').css("height", ch / 6 + "px");
        $('.pro').css("line-height", ch / 6 + "px");
        $('.pro:eq(0)').click(function () {
            $('.content').hide();
            buyTicket();
        });
        $('.pro:eq(2)').click(function () {
            $('.content').hide();
            userMessage();
        });
        $('.pro:eq(1)').click(function () {
            $('.content').hide();
            orderForm();
        });
        $('.pro:eq(3)').click(function () {
            $('.content').hide();
            attention();
        });
        $('.pro:eq(4)').click(function () {
            $('.content').hide();
            service();
        });
        $('.pro:eq(5)').click(function () {
            $('.content').hide();
            system();
        });
    }




    /*
    购票操作
    */
    function buyTicket() {
        $('.buyTicket .buy01').show()
        $('.buyTicket').css("height", $(window).height() - $('.footer').height() - 10 + "px").show();
        $('.buyTicket .closeBtn .close').click(function () {
            $('.buyTicket .buy01').html('')
            $('.buyTicket .buy02').html('')
            $('.buyTicket').hide();
            $('.content').show();
        })
        function addUsers(data) {
            var str = '<button type="button" class="userbtn col-xs-12 list-group-item text-left" >\
                            <span>'+ data.name + '</span>\
                            <span>'+ data.tel + '</span>\
                            <input class="buyinput" type="checkbox">\
                        </button>'
            $('.buyTicket .buy01').append(str);
        }

        // for (var i = 0; i < user.length; i++) {
        //     addUsers(user[i])
        // }
        // $('.buyTicket .buy01').append('<button type="button" class ="nextbtn btn btn-success col-xs-offset-3 col-xs-6" style="height:40px;margin-top:20px;">下一步</button>')
        $('.buyTicket .buy01 .userbtn').click(function () {
            if ($(this).find('input').prop("checked")) {
                $(this).find('input').prop("checked", false);
            } else {
                $(this).find('input').prop("checked", true);
            }
        })
        $('.buyTicket .nextbtn').click(function () {
            var $inputs = $(".buyinput").filter(item => {
                return $(".buyinput").eq(item).prop("checked")
            })
            var userindex = [];
            for (var i = 0; i < $inputs.length; i++) {
                userindex.push($($inputs[i]).parent().index())
            }
            if (userindex.length != 0) {
                $('.buyTicket .buy01').hide()
                for (var i = 0; i < attentionData.length; i++) {
                    initAttention(attentionData[i], false, "购票")
                }
                $('.buyTicket .buy02').show()
                $('.buyTicket .buy02 .project .right button').click(function () {
                    var index = $(this).parent().parent().index();
                    var allmoney = 0;
                    allmoney += userindex.length * attentionData[index].price
                    $('.buyTicket .buy02').hide();
                    $('.buyTicket .buysuccess').show();
                    $('.buyTicket .buysuccess p:eq(0)').html("总金额： "+allmoney)
                    //购买成功后ajax保存 并在订单中添加数据
                    /**
                     * 
                     */
                    console.log(allmoney)
                    setTimeout(() => {
                        $('.buyTicket .buysuccess').hide();
                        $('.buyTicket .buy01').html('');
                        $('.buyTicket .buy02').html('');
                        $('.buyTicket').hide();
                        $('.content').show();
                    }, 3000);
                })
            }
        })



    }


    /**
     * 乘客人信息
     */

    function userMessage() {
        $('.userMessage').css("height", $(window).height() - $('.footer').height() - 10 + "px").show();
        $('.userMessage .closeBtn .close').click(function () {
            $('.userMessage .user .list-group').html('')
            $('.userMessage').hide();
            $('.content').show();
        })
        //添加bom元素
        function setValue(user) {
            var str = '<button type="button" class="col-xs-12 list-group-item text-left" data-toggle="modal" data-target="#myModal">\
                <span>'+ user.name + '</span>\
                <span>'+ user.tel + '</span>\
                </button>'
            $('.user .list-group').append(str)
        }
        for (var i = 0; i < user.length; i++) {
            setValue(user[i]);
        }

        //修改乘客信息
        $('.userMessage .user .list-group button').click(function () {
            var name = $('.userMessage .user .list-group button span:eq(0)').html();
            var tel = $('.userMessage .user .list-group button span:eq(1)').html()
            $('.userMessage .addUserModel #name').val(name);
            $('.userMessage .addUserModel #tel').val(tel);
        })
        //添加乘客信息
        $('.userMessage .user .add').click(function () {
            $('.userMessage .user').hide();
            $('.userMessage .updata').show();
        })
        //添加乘客按钮后的取消按钮
        $('.userMessage .updata .cancel').click(function () {
            $('.userMessage .updata').hide();
            $('.userMessage .user').show();
        })
        //添加乘客
        $('.userMessage .updata .submit').click(function () {
            var name = $('.userMessage .updata #name').val();
            var tel = $('.userMessage .updata #tel').val();
            setValue(name, tel);
            $('.userMessage .updata #name').val('');
            $('.userMessage .updata #tel').val('');
            $('.userMessage .updata').hide();
            $('.userMessage .user').show();
        })
    }


    function userMessage() {
        $('.userMessage').css("height", $(window).height() - $('.footer').height() - 10 + "px").show();
        $('.userMessage .closeBtn .close').click(function () {
            $('.userMessage .user .list-group').html('')
            $('.userMessage').hide();
            $('.content').show();
        })
        //添加bom元素
        function setValue(user) {
            var str = '<button type="button" class="col-xs-12 list-group-item text-left" data-toggle="modal" data-target="#myModal">\
                <span>'+ user.name + '</span>\
                <span>'+ user.tel + '</span>\
                </button>'
            $('.user .list-group').append(str)
        }
        for (var i = 0; i < user.length; i++) {
            setValue(user[i]);
        }

        //修改乘客信息
        $('.userMessage .user .list-group button').click(function () {
            var name = $('.userMessage .user .list-group button span:eq(0)').html();
            var tel = $('.userMessage .user .list-group button span:eq(1)').html()
            $('.userMessage .addUserModel #name').val(name);
            $('.userMessage .addUserModel #tel').val(tel);
        })
        //添加乘客信息
        $('.userMessage .user .add').click(function () {
            $('.userMessage .user').hide();
            $('.userMessage .updata').show();
        })
        //添加乘客按钮后的取消按钮
        $('.userMessage .updata .cancel').click(function () {
            $('.userMessage .updata').hide();
            $('.userMessage .user').show();
        })
        //添加乘客
        // $('.userMessage .updata .submit').click(function () {
        //     var name = $('.userMessage .updata #name').val();
        //     var tel = $('.userMessage .updata #tel').val();
        //     setValue(name, tel);
        //     $('.userMessage .updata #name').val('');
        //     $('.userMessage .updata #tel').val('');
        //     $('.userMessage .updata').hide();
        //     $('.userMessage .user').show();
        // })
    }


    /**
     * 我的订单
     */

    function orderForm() {
        $('.orderForm').css("height", $(window).height() - $('.footer').height() - 10 + "px").show();
        //关闭按钮
        $('.orderForm .closeBtn .close').click(function () {
            $('.orderForm .order').html('')
            $('.orderForm').hide();
            $('.content').show();
        })

        function addButton(order) {
            var str = '<button type="button" class="col-xs-12 list-group-item">\
            <img src="'+ order.imgsrc + '" class="img-thumbnail">\
            <span>'+ order.item + '</span>\
            <span>'+ order.user + '</span>\
            <span>'+ order.tel + '</span>\
             </button>'
            $('.orderForm .order').append(str);
        }
        for (var i = 0; i < orders.length; i++) {
            addButton(orders[i]);
        }
        //点击按钮出现详细信息
        $('.orderForm .order button').click(function () {
            var h = $(window).height() - $('.footer').height() - $('.orderForm .closeBtn').height() - 10 + "px"
            $('.orderForm .order').hide();
            $('.orderForm .orderContent').css("height", h).show();
            orderCon(orders[$(this).index()])
        })
        //当点击查看详细信息的时候信息设置
        function orderCon(order) {
            $('.orderForm .orderContent').find('.proname').html(order.item);
            $('.orderForm .orderContent').find('.username').html(order.user);
            $('.orderForm .orderContent').find('.money').html(order.money);
            $('.orderForm .orderContent img').attr("src", order.imgsrc);
        }
        $('.orderForm .orderContent .return').click(function () {
            $('.orderForm .order').show();
            $('.orderForm .orderContent').hide();
        })
    }



    function attention() {
        $('.attention').css("height", $(window).height() - $('.footer').height() - 11).show();
        //关闭按钮
        $('.attention .closeBtn .close').click(function () {
            $('.attention .projects').html('')
            $('.attention').hide();
            $('.content').show();
        })
        // for (var i = 0; i < attentionData.length; i++) {
        //     initAttention(attentionData[i], true, "查看详情")
        // }
        $('.attention .projects .project .see').click(function () {
            window.location.href = "../../../parkapp/promessage.html?proname=" + attentionData[$(this).index()].name;
        })
    }

    //初始化关注项目
    function initAttention(data, flag, btnName) {
        var pricestr;
        if (flag) {
            pricestr = '<p>预计等待</p><p class="l2_con1">' + (hour == undefined ? minutes : (hour + " 小时 " + minutes)) + ' 分钟</p>'
        } else {
            pricestr = '<p>价格：</p><p class="l2_con1">' + data.price + ' 元</p>'
        }
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
                <p>热度：<span>'+ data.hot + '</span> </p>' + pricestr + '\
            </div>\
            <div class="right col-xs-4">\
                <button class="see btn btn-success">'+ btnName + '</button>\
            </div>\
        </div>'
        if (flag) {
            $('.attention .projects').append(str);
            $('.attention .projects .project .starsImg').css("background-position", "0 -" + data.stars * 11 + "px")
        } else {
            $('.buyTicket .buy02').append(str);
            $('.buyTicket .buy02 .project .starsImg').css("background-position", "0 -" + data.stars * 11 + "px")
        }

    }


    // 在线服务
    function service() {
        var ans = ["答案1", "答案2", "答案3", "答案4", "答案5", "答案6"]
        $('.service').css("height", $(window).height() - $('.footer').height() - 11).show();
        //关闭按钮
        $('.service .closeBtn .close').click(function () {
            $('.service').hide();
            $('.content').show();
        })
        var pcolor = document.getElementsByClassName('sercolorp')
        for (var i = 0; i < pcolor.length; i++) {
            var a = parseInt(Math.random() * 255),
                b = parseInt(Math.random() * 255),
                c = parseInt(Math.random() * 255);
            $(pcolor[i]).css('color', "rgb(" + a + "," + b + "," + c + ")")
        }
        $('.service .ser_con .que p').click(function () {
            $(this).parent().hide()
            var value = $(this).html();
            var color = $(this).css("color");
            $('.service .ser_con .answer').show().find('p:eq(0)').css("color", color).html(value).end().find('p:eq(1)').html(ans[$(this).index()])
        })
        $('.service .ser_con .answer a').click(function () {
            $(this).parent().hide().parent().find('.que').show();
        })
    }

    // 关于我们
    // system()
    function system() {
        $('.setSystem').css("height", $(window).height() - $('.footer').height() - 11).show();
        //关闭按钮
        $('.setSystem .closeBtn .close').click(function () {
            $('.setSystem').hide();
            $('.content').show();
        })
        $('.setSystem .sys_fun p').click(function () {
            $(this).parent().hide().parent().find('.sys_con').show().find('p').html("暂无服务");
        })
        $('.setSystem .sys_con a').click(function () {
            $(this).parent().hide().parent().find('.sys_fun').show()
        })
    }
})(window)