

// dom结构加载完成 $（）是在dom加载完成之后执行函数
$(function(){
	
	
	/*
		bannner 切换
		1.结构布局
		2.初始显示第一张海报，选中第一个icon图标
		3.悬停小图标切换海报，同时悬停的小图标有选中效果
		4.点击左右切换海报 
		5.每3s切换到下一张
		6.鼠标悬停海报时停止自动切换，移走恢复
		7.运行检查
		
	*/
	// �定义一个数组保存一下banner的图片
	var imgarr = ['image/banner1.jpg','image/banner2.jpg','image/banner3.jpg','image/banner4.jpg','image/banner5.jpg'];
	// 定义一个变量保存当前时第几张
	var current = 0;  // 默认下标为0，第一张
	
	// 选中小图标 #选中id   eq等于函数    
	$("#bannerbox .icon a").eq(0).css("background","#000");

	//找到所有的a标签给其绑定一个鼠标悬停事件
	$("#bannerbox .icon a").mouseover(function(){
		// 获取悬停图标序号
		console.log("当前悬停的是第"+$(this).index()+"个icon图标");
		// 得到当前索引
		var i = $(this).index();
		// 调用公共方法
		changeimg(i);
	})

	// 点击向左切换图片  click为动作
	$("#bannerbox.left").click(function(){
		// 点击时当前图标减一
		var nowi = current-1; 
		//判断图标下标是否越界
		if(nowi<=-1) {
			nowi = 4; //越界则到最后一张  
		}
		// 调用公共方法
		changeimg(nowi);
	})
	// ���ұ߰󶨵���¼�
	$("#bannerbox .right").click(function(){

		var nowi = current+1; 
		if(nowi>=5) {
			nowi = 0; 
		}

		changeimg(nowi);
	})
	// 自动切换
	// 给函数（定时器）设置编号 timerid 相当于变量
	var timerid = setInterval(function(){
		$("#bannerbox .right").click();
	},1000);
	// 鼠标悬停停止变换
	$("#bannerbox").mouseover(function(){
		// 清除计时器
		clearInterval(timerid);
	})
	// 鼠标离开后 恢复变换
	$("#bannerbox").mouseout(function(){
		timerid = setInterval(function(){
			$("#bannerbox .right").click();
		},1000);
	})
	
	// 公共方法
	function changeimg(i){
		// 改变文件路径属性，变换图片，做效果在这一句
		$("#bannerimg").attr("src",imgarr[i]);  
		// 改变悬停小图标效果
		$("#bannerbox .icon a").eq(i)   // 找到当前悬停icon
		.css("background","#000")  // 设置当前这个背景黑色
		.siblings()  // 找到兄弟元素
		.css("background","#fff");  // 兄弟元素变白
		// 改变当前元素
		current = i;
	}
	
	
	
	/* 广告隐藏 */
	$("#top_ad").hide();
	// setTimeout ִֻ计时器，只执行一次
	setTimeout(function(){
		// 页面回到顶部  window是窗口 （）是坐标 
		window.scroll(0,0);
		// 3s之后广告从上向下滑动出来
		$("#top_ad").slideDown();
	},3000)
	// 广告关闭 给clos一个点击事件
	$("#top_ad .close").click(function(){
		$("#top_ad").slideUp(); // 向上划
	})
	
})	
