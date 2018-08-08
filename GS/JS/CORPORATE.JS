$(function(){

	/*=S Tool function */
	$.fn.extend({
		/*
			detect screen change event
			parameter [obj] contains: 
			[screenSize]: number - setting a size to detect screen change, default is 768
			[small]: function - executed when screen change to the size less than [screenSize]
			[big]: function - executed when screen change to the size bigger than [screenSize]
		 */
		screenChange: function(obj){
			var el = $(this), curScreen, initScreen=0, screenSize = obj.screenSize? obj.screenSize:768;
			$(window).on('resize.screenChange', function(){
				var win = $(this), curScreen = win.outerWidth() <= screenSize? 1 : 2;
				if(curScreen != initScreen){
					initScreen = curScreen;
					if(curScreen == 1){
						if(obj.small)obj.small.call(el);
					}else{
						if(obj.big)obj.big.call(el);
					}
				}
			}).trigger('resize.screenChange');
			return this;
		}
	})
	var Tool = {
		isMobileDevice: function() {
			if (/(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(navigator.userAgent)) {
				return true;
			}
			return false;
			},
			formatMoney: function(s, type) {
		  if (/[^0-9\.]/.test(s))
			return "0";
		  if (s == null || s == "")
			return "0";
		  s = s.toString().replace(/^(\d*)$/, "$1.");
		  s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
		  s = s.replace(".", ",");
		  var re = /(\d)(\d{3},)/;
		  while (re.test(s))
			s = s.replace(re, "$1,$2");
		  s = s.replace(/,(\d\d)$/, ".$1");
		  if (type == 0) {
			var a = s.split(".");
			if (a[1] == "00") {
			  s = a[0];
			}
		  }
		  return s;
		},
		supportFlexbox: (function () {
			var div = document.createElement('div').style;
			var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
			for (var i = 0; i < styles.length; i++) {
				if (styles[i] in div) return true;
			}
		})(),
	}
	/*=E Tool function */
	
	/* Lazy image */
	$('img.lazy').lazyload({skip_invisible : true});
	$('.bg_lazy').lazyload();

	/* define all the timer under this domain */
	var CorpTimers = {};

	$(window).off('.custom').on('resize.custom', function(){
		$('#corp_videoPop').triggerHandler('updatePos');
		$('#corp_sideMenu').triggerHandler('updatePos');
	}).on('scroll.custom', function(){
		$('#corp_sideMenu').triggerHandler('scrollFunc');
		$('.corp_secData').triggerHandler('scrollFunc');
	})


	var _autoHideBullets = function(swiper){
		if(swiper.bullets.length <=1 ){
			swiper.paginationContainer.addClass('hidden');
		}else{
			swiper.paginationContainer.removeClass('hidden');
		}
	};

	$('.corp_nav').on('click', '.itemTit', function(){
		$(this).closest('.item').addClass('cur').siblings('.item').removeClass('cur');
	})

	$('.corp_languageMenu').on('click', function(){
		$('.corp_navWrap').removeClass('m-cur');
		$('.corp_languageWrap').toggleClass('m-cur');
	})

	$('.corp_navMenu').on('click', function(){
		$('.corp_languageWrap').removeClass('m-cur');
		$('.corp_navWrap').toggleClass('m-cur');
	})

	var corp_bannerSlide = new Swiper('#corp_bannerSlide', {
		pagination: '.corp_bannerPage',
		bulletClass : 'item',
		bulletActiveClass: 'cur',
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		loop: true,
		paginationClickable: true,
		onInit: function(swiper){
			_autoHideBullets(swiper);
		},
	});

	corp_bannerSlide.container.on('mouseover', '.bannerstop', function(){
		corp_bannerSlide.stopAutoplay();
	}).on('mouseout', '.bannerstop', function(){
		corp_bannerSlide.startAutoplay();
	});	

	$('.corp_secIntro').screenChange({
		screenSize: 760,
		small: function(){
			var el = $(this);
			if(el.find('.content').height()>parseInt(el.find('.content').css('lineHeight'))*10){
				el.addClass('m-close');
				el.find('.more').one('click', function(){
					el.removeClass('m-close');
				})
			}
		}
	})

	var corp_secDataSlide = new Swiper('#corp_secDataSlide', {
			pagination: '.corp_secDots',
			bulletClass : 'ditem',
			bulletActiveClass: 'cur',
			paginationClickable: true,
			slidesPerView: 3,
			breakpoints: {
					760: {
							slidesPerView: 1,
					},
			},
			onInit: function(swiper){
				_autoHideBullets(swiper);
			},
			onAfterResize: function(swiper){
				_autoHideBullets(swiper);
			}
	});
	
	$('.corp_secData').on('scrollFunc', function(){
		var sec = $(this);
		if(($(window).scrollTop()+$(window).outerHeight()/3*1) > sec.offset().top){
			sec.trigger('animateEffect');
		}
	}).one('animateEffect', function(){
		$(this).find('.animate_num').each(function(){
		  $(this).prop('Counter',0).animate({
			Counter: parseInt($(this).text().split(',').join('')),
		  },{
			duration: 2000,
			easing: 'swing',
			stepNum: 0,
			times: 0,
			step: function (now, fx){
			  if(fx.options.stepNum%5==0 || now==fx.end){
				$(this).text(Tool.formatMoney(Math.ceil(now), 0));
			  }
			  fx.options.stepNum++;
			}
		  });
		});
	});
	
	$('.corp_secProductList ').on('mouseover', '.item', function(){
		var item = $(this);
		item.addClass('cur');
	}).on('mouseout', '.item', function(){
		var item = $(this);
		item.removeClass('cur');
	})

	$('.corp_secProductTab').on('click', '.item', function(){
		var num = $(this).index();
		$(this).addClass('m-cur').siblings('.item').removeClass('m-cur');
		$('.corp_secProductList').find('.item').eq(num).addClass('m-cur').siblings('.item').removeClass('m-cur');
	})

	var corp_secHighlightSlide = new Swiper('#corp_secHighlightSlide', {
		pagination: '.corp_secDots',
		bulletClass : 'ditem',
		bulletActiveClass: 'cur',
		paginationClickable: true,
		slidesPerView: 3,
		breakpoints: {
			760: {
					slidesPerView: 1,
			},
		},
		onInit: function(swiper){
			_autoHideBullets(swiper);
		},
		onAfterResize: function(swiper){
			_autoHideBullets(swiper);
		}
	});
	
	$('.corp_secHighlight').screenChange({
		screenSize: 760,
		small: function(){
			$(this).off('.HIGHLIGHT');
		},
		big: function(){
			$(this).on('mouseover.HIGHLIGHT', '.item', function(){
				$(this).addClass('cur');
			}).on('mouseout', '.item', function(){
				$(this).removeClass('cur');
			});
		}
	})
	
	
	var _isVideoNotSupportFlexBox = Tool.supportFlexbox;
	var _VideoNotSupportFlexBox = function(){
		var items = $('#corp_secVideoSlide').find('.item');
		items.css('cssText', 'width: '+(parseFloat(1/items.length)*100-1.12)+'% !important')
	};
	var _autoAppendVideoSlide = function(swiper){
		swiper.wrapper.find('.swiper-slide-duplicate,.swiper-slide-custom').remove();
		if(swiper.slides.not('.swiper-slide-duplicate,.swiper-slide-custom').length%swiper.params.slidesPerGroup!=0){
			var str='', news = swiper.params.slidesPerGroup - swiper.slides.not('.swiper-slide-duplicate,.swiper-slide-custom').length%swiper.params.slidesPerGroup;
			for(var i=0;i<news;i++){
				str += '<li class="item swiper-slide swiper-slide-custom"></li>';
			}
			swiper.wrapper.append(str);
		}else if(swiper.slides.filter('.swiper-slide-custom').length>0){
			swiper.wrapper.find('.swiper-slide-custom').remove();
		}
		swiper.reLoop();
		swiper.container.find('.lazy').lazyload();
	};
	var corp_secVideoSlide = new Swiper('#corp_secVideoSlide', {
		pagination: '.corp_secDots',
		bulletClass : 'ditem',
		bulletActiveClass: 'cur',
		paginationClickable: true,
		slidesPerView: 3,
		slidesPerGroup: 3,
		customBreakPoint: 0,
		breakpoints: {
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			425: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		},
		autoplay: 4000,
		autoplayDisableOnInteraction: false,
		loop: true, 
		onInit: function(swiper){
			_autoAppendVideoSlide(swiper);
			_autoHideBullets(swiper);
			if(! _isVideoNotSupportFlexBox){_VideoNotSupportFlexBox()}
		},
		onAfterResize: function(swiper){
			if(! _isVideoNotSupportFlexBox){_VideoNotSupportFlexBox()}
			if(swiper.params.customBreakPoint != swiper.currentBreakpoint){
				_autoAppendVideoSlide(swiper);
				swiper.params.customBreakPoint = swiper.currentBreakpoint;
			}
			
		}
	});
	

	if(! Tool.isMobileDevice()){
		corp_secVideoSlide.container.on('mouseover', '.item', function(){
			corp_secVideoSlide.stopAutoplay();
		}).on('mouseout', '.item', function(){
			corp_secVideoSlide.startAutoplay();
		});
	}
	corp_secVideoSlide.container.on('click', '.prev', function(){
		corp_secVideoSlide.slidePrev();
	}).on('click', '.next', function(){
		corp_secVideoSlide.slideNext();
	})
	
	
	$('#corp_videoPop').on('updatePos', function(){
		var pop =$(this), box= pop.find('.box');
		var t = ($(window).outerHeight() -box.outerHeight() )/2;
		box.css('marginTop', t+'px');
	}).on('showPop', function(e, param){
		var pop =$(this);
		if(typeof param == 'object' && typeof param.videoSrc!='undefined' && param.videoSrc!=''){
			var video = pop.find('video');
			video.find('source').attr('src', param.videoSrc);
			video.get(0).load();
			video.get(0).play();
			// video.get(0).addEventListener('loadeddata', function () {
			//   $(window).triggerHandler('resize.custom')
			// });
		}
		pop.addClass('show');
		pop.triggerHandler('updatePos');
	}).on('click', function(){
		$(this).removeClass('show');
		$(this).find('video').get(0).pause();
	}).on('click', '.box', function(e){
		e.stopPropagation();
	})
	
	$('#corp_secVideo').on('click', '.click', function(){
		var videoSrc = $(this).attr('data-video');
		if(videoSrc&&videoSrc!=''){
			$('#corp_videoPop').triggerHandler('showPop', [{videoSrc: videoSrc}]);
		}
	})

	

  var corp_sideMenu = $('#corp_sideMenu');
  
  corp_sideMenu.on('init', function(){
		var getLeft = function(max, num){
			var _pointBezier = function(arr, t){
				var len = arr.length, x = 0;
				var erxiangshi = function (start, end) {
					var cs = 1, bcs = 1;
					while (end > 0) {cs *= start; bcs *= end;start--;end--;}
					return (cs / bcs);
				};
				for (var i = 0; i < len; i++) {
					var j = arr[i];
					x += j * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
				}
				return Math.ceil(x);
			};
			
			var arrs = [0, max, 0];
			var newarr = [];
			for (var i = 0; i < (num-1); i++) {
				var point = _pointBezier(arrs, i / (num-1));
				newarr.push(point);
			}
			newarr.push(0)
			return newarr;
		};
			
		var items = corp_sideMenu.find('.item:not(.hidden)');
		var len = items.length;
		var lefts = getLeft(90, len);
		items.each(function(num, obj){
			/*var l = w/len*(Math.floor(len/2)-Math.abs(num-Math.floor(len/2)) );*/
			var item = $(obj);
			item.css({'right': lefts[num]+'px'});
		})
  }).on('scrollFunc', function(){
		var win = $(window);
		var top = win.scrollTop() + win.outerHeight()/2;
		var sections = $('.corp_secWrap, .corp_footWrap, .corp_copyrightWrap'), len=sections.length;
		var cur = -1, flag = '';
		for(var i=0; i<len; i++){
			var section = sections.eq(i);
			var secTop = section.offset().top, secBottom = secTop+section.outerHeight();
			if(top >= secTop && top<secBottom){
				cur = i;
				flag ='';
				break
			}
		}
		corp_sideMenu.triggerHandler('highlight',[cur, section.attr('flag')]);
  }).on('updatePos', function(e){
		var t = ($(window).outerHeight()-corp_sideMenu.outerHeight())/2;
		corp_sideMenu.css({'top': t+'px'});
  }).on('highlight', function(e, index, bg){
		var items = corp_sideMenu.find('.item');
		if(typeof index=='undefined' || index<0){
			corp_sideMenu.removeClass('show');
		}else if(index>=0){
			if(index<items.length-1){
				items.eq(index).addClass('cur').siblings('.item:not(.top)').removeClass('cur');
			}else{
				items.removeClass('cur')
			}
			if(!corp_sideMenu.hasClass('show')){
				corp_sideMenu.addClass('show').triggerHandler('updatePos');
			}
			if(typeof bg!='undefined' && bg=='bg'){
				corp_sideMenu.addClass('skin-light');
			}else{
				corp_sideMenu.removeClass('skin-light');
			}
		}
  }).on('click goIndex', '.item', function(){
		if($(this).hasClass('top')){
			$('html,body').animate({ scrollTop: 0}, 500)
		}else{
			var index = $(this).index();
			var sec = $('.corp_secWrap, .corp_footWrap').eq(index);
			var extraT = ($(window).outerHeight() - sec.outerHeight())/2;
			var t = sec.offset().top- (extraT>0? extraT : 0);
			$('html,body').animate({ 'scrollTop': t}, 500)
		}
  })
  corp_sideMenu.triggerHandler('init');
  
  
  $('.corp_nav').on('click', '.itemTit', function(e){
		var index = parseInt($(this).attr('data-sec'));
		$('#corp_sideMenu').find('.item').eq(index).trigger('goIndex');
  })



});