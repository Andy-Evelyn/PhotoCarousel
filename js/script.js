$(function(){
	var i = 0;
	var timer = null;
	//创建圆点
	for(var i=0,le = $('.img li').length;i<le;i++){
		$('.num').append('<li></li>');
	}
	$('.num li').first().addClass('active');
	//复制第一张图片
	var firstimg = $('.img li').first().clone();
	//ul宽度设置为图片的张数乘以图片的宽度
	$('.img').append(firstimg).width($('.img li').length * ($('.img img').width()));

	//自动轮播
	timer = setInterval(function(){
		i++;
		if(i == $('.img li').length){
			i = 1;
			$('.img').css({
				left:0
			});
		};
		$('.img').stop().animate({
			left:-i*600
		},500);
		if(i == $('.img li').length -1){
			$('.num li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		}
	},3000)

	//鼠标移入停止播放
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
		i++;
		if(i == $('.img li').length){
			i = 1;
			$('.img').css({
				left:0
			});
		};
		$('.img').stop().animate({
			left:-i*600
		},500);
		if(i == $('.img li').length -1){
			$('.num li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		}
	},3000)
	});

	//点击圆点
	$('.num li').click(function(){
		var _i = $(this).index();
		$('.img').stop().animate({
			left:-_i * 600
		},250);
		$('.num li').eq(_i).addClass('active').siblings().removeClass('active');
	});

	//设置上下按钮的显示与隐藏
	$('.banner').hover(function(){
		$('.btn').show();
	},function(){
		$('.btn').hide();
	});

	//上一张
	$('.prev').click(function(){
		i--;
		//如果当前是第一张
		if(i == -1){
			i = $('.img li').length - 2;
			$('.img').css({
				left: -($('.img li').length -1) * 600
			});
		}
		$('.img').stop().animate({
			left:-i * 600
		},500);
		$('.num li').eq(i).addClass('active').siblings().removeClass('active');
	});

	//下一张
	$('.next').click(function(){
		i++;
		//如果当前是最后一张
		if(i ==  $('.img li').length){
			i = 1;
			$('.img').css({
				left: 0
			});
		}
		$('.img').stop().animate({
			left:-i * 600
		},500);
		if (i == $('.img li').length - 1) { 
                $('.num li').eq(0).addClass('active').siblings().removeClass('active');
            } else {
                $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            }
	});
})