


(function(window){
	/**
	 *  数据  通过传过来的参数名获取
	 */
	var data = {
		imgSrc: "./src/img/xm01.jpg", //图片资源地址
		name: "摩天轮1",
		intro:"这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍这个是项目介绍"
	}
	
	var height = $(window).height();
	var footerH = $('.footer').height();
	var ch = height - footerH - 11;
	$('.content').height(ch);
	$('#allmap').height(ch);
	
	var sContent =
		"<div class='mmodal'>"+
		"<p class='mtitle text-left'>"+data.name+"</p>" + 
		"<div class='mcon'><img class='imgdemo' id='imgDemo' src='"+data.imgSrc+"' />" + 
		"<p class='mintro'>"+data.intro+"</p></div>" + 
		"</div>";
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(116.883552,36.714037);
		var marker = new BMap.Marker(point);
		var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
		map.centerAndZoom(point, 15);
		map.addOverlay(marker);
		marker.addEventListener("click", function(){          
		   this.openInfoWindow(infoWindow);
		   //图片加载完毕重绘infowindow
		   document.getElementById('imgDemo').onload = function (){
			   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
			}
		});
	
	
		//接受参数
	$(document).ready(function(){
		proname = getUrlParamValue("proname");
		// 进行ajax请求操作 获取当前
		data = {}
		console.log(proname)
	 }); 
	
	 //获取浏览器上的内容并且进行处理
	function getUrlParamValue(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURIComponent(r[2]);
		return null;
	}
}(window))