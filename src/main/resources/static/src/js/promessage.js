


(function(window){
    /**
     *  数据 此数据通过浏览器参数获得名称后 向后台请求的数据
     */
    var data = {
        imgSrc: "./src/img/xm01.jpg",
        name: "摩天轮",
        person: 12,
        waitTime: 45, //时间排序
        stars: 4,
        hot: 59,    //热度排序
        synthesize: 13, //综合排序
        information:["1.适合年龄：儿童、青年人、承认","2.惊险程度：刺激一级，急速滑落","3.开放时间：9：00-17：00"],
        ps:["1.适合年龄：儿童、青年人、承认","2.惊险程度：刺激一级，急速滑落","3.开放时间：9：00-17：00"],
        isSelect:true,

    }

    // 点击收藏按钮
    $('.shoucang').click(function (e) { 
        e.preventDefault();
        //收藏按钮进行操作
        //进行ajax存储工作
        if($(this).css('color')=="rgb(204, 204, 204)"){ 
            $(this).css('color','#f40');
            isSelect = true;
        }else{
            $(this).css('color','#ccc');
            isSelect = false;
        }
    });
    
    $('.return').click(function(){
        window.history.back(-1);
    })
    
    //获取浏览器上的内容并且进行处理
    function getUrlParamValue(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
    
    
  
    
    function initData(data){
        if(data.isSelect){
            $('.shoucang').css('color','#f40');
        }
        $('.proname p').html(data.name);
        $('.waitperson p:eq(1)').html(data.person+"人");
        $('.waittime p:eq(1)').html(data.waitTime+"分钟");
        for(var i=0;i<data.information.length;i++){
            $('.tour p:eq(0)').append('<p class="text-left">'+data.information[i]+'</p>')
        }
        for(var i=0;i<data.ps.length;i++){
            $('.things p:eq(0)').append('<p class="text-left">'+data.ps[i]+'</p>')
        }
    }
    //接受参数
    $(document).ready(function(){
        proname = getUrlParamValue("proname");
        // 进行ajax请求操作 获取当前名称的数据
        
        initData(data)
     }); 
    
    //  页面跳转 携带数据
    $('.startline').click(function(){
        window.location.href = "../../../parkapp/online.html?proname="+data.name;
    })
    //开始排队
    $('.findmap').click(function(){
        window.location.href = "../../../parkapp/map.html?proname="+data.name;
    })
})(window)