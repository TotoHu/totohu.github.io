var collectionOk = '收藏成功！';
var unCollectionOk = '取消收藏成功！';
var collectionError = '操作失败！';

(function($, Swipe){

var slider = $('#slider'),			//焦点图容器
  	menuList = $('#sliderMenu li'),	 //焦点图的小圆点
  	userInfo = $('#userInfo'),		//左边的内容
	menuCon = $('#menuCon'),        //右边的内容
	animateCon = $('#animateCon'),   //滑动的内容
	isSwipe = false,     //判断页面有没滑动  default时为false
	sharePop = $("#sharePop"),
	marsker = $('.marsker'),
	cancelFavor = $("#cancelFavor"),
	$body = $('body'),
	logo = $("#cecLogo"),
	logoHref = logo.attr("href");

/*  焦点图启用     */
slider = Swipe(slider[0], {
   				callback: function(pos) {
   					var i = menuList.length;
      				while (i--) {
        				menuList[i].className = '';
      				}
      				menuList[pos].className = 'on';
   				}
			});

//页面左右滑功能
/*
$('#userIcon').on('touchstart', function(e){
	if(parseInt(document.body.scrollTop)>0) document.body.scrollTop = '0px';
	cancelFavor.hide();
	if(isSwipe === true){
		setTimeout(function(){logo.attr("href",logoHref)},1000);
		return true;
	}	
		logo.attr("href","javascript:void(0)");
		userInfo.show().css('z-index', '2');
		menuCon.css('z-index', '1');
		marsker.show();
		animateCon.css('-webkit-transform', 'translateX(256px)');
		e.stopPropagation();
		isSwipe = true;		
})
$('#menuIcon').on('touchstart', function(e){
	if(parseInt(document.body.scrollTop)>0) document.body.scrollTop = '0px';
	cancelFavor.hide();
	if(isSwipe === true){
		setTimeout(function(){logo.attr("href",logoHref)},1000);
		return true;
	}	
	logo.attr("href","javascript:void(0)");
	userInfo.css('z-index', '1');
	menuCon.show().css('z-index', '2');
		marsker.show();
		animateCon.css('-webkit-transform' ,'translateX(-256px)');
		e.stopPropagation();
		isSwipe = true;
	
})
userInfo.on('touchstart', function(e){
	e.stopPropagation();
})

menuCon.on('touchstart', function(e){
	e.stopPropagation();
})
*/
$("#shareBtn").on("touchstart", function(e){
	e.stopPropagation();
	if(!$(this).attr("isShow")){
		$(this).attr("isShow", false);
	}
	if($(this).attr("isShow") == "false"){
		sharePop.show();
		$(this).attr("isShow", true);
	}else if($(this).attr("isShow") == "true"){
		sharePop.hide();
		$(this).attr("isShow", false);
	}
})
sharePop.on("touchstart", function(e){
	e.stopPropagation();
})

/*
$(".favorIcon").on("touchstart", function(){
	if($(this).hasClass("removeFavor")){
		return false;
	}
	var top = $(this).offset().top + 30;
	cancelFavor.css("top", top).show();
	$(".favorIcon").attr("cancel", "false");
	$(this).attr("cancel", "true");
})

$("#cancelFavor .confirmBtn").on("touchstart", function(){
	e.preventDefault();
	$(".favorIcon[cancel='true']").addClass("removeFavor");
	cancelFavor.hide();
})

$("#cancelFavor .cancelBtn").on("touchstart", function(){
	cancelFavor.hide();
})

$("#addFavor").on("touchstart", function(){
	if($(this).hasClass("collected")){
		$(this).removeClass("collected");
		return false;
	}
	$(this).addClass("collected");
})

$(document).on('touchstart', function(e){
	if(e.target.className == 'marsker') return;
	sharePop.hide();
	$("#shareBtn").attr("isShow", false);
	if(isSwipe === false){return true;};
	marsker.hide();
	$('input').blur(); 
	animateCon.css('-webkit-transform', 'translateX(0)');
	setTimeout(function(){isSwipe = false;$('#sliderMenu').children().hide().show();},500);
})
*/
$(document).ready(function(){  
	var hasAddFavor = document.getElementById("addFavor");
	if(hasAddFavor != null){
		var contentId = $("#articleId").val();
		var action = "check";
		$.ajax({
			type:"post",
			url:"/mobile/addFavorite.do",
			data:{"contentId":contentId,"action":action},
			dataType:"xml",
			success:function(data){
				var $result = $("content",data);
				var hasError = $result.children("hasError").text();
				var description = $result.children("description").text();
				if(hasError == "false" && description == "Y"){
					$("#addFavor").addClass("collected");
				}
			}
		});
	}
	
$("#addFavor").on("click", function(){
	var loginDomain = $("#loginDomain").val();
	if(loginDomain != null && loginDomain != ""){
		window.location.href = loginDomain + "/mobileLogin.do?fromWhere="+window.location.href;
	}else{
		var articleId = $("#articleId").val();
		var linkURL = window.location.pathname;
		var itemTitle = $("#itemTitle").val();
		var action = "add";
		if($(this).hasClass("collected")){
			action = "delete";
		}
		itemTitle = encodeURIComponent(itemTitle);
		$.ajax({
			type:"post",
			url:"/mobile/addFavorite.do",
			data:{"favorId":articleId,"linkURL":linkURL,"itemTitle":itemTitle,"action":action},
			dataType:"xml",
			success:function(data){
				var $result = $("content",data);
				var hasError = $result.children("hasError").text();
				if(hasError == "true"){
					alert(collectionError);
				}else{
					if($("#addFavor").hasClass("collected")){
						$("#addFavor").removeClass("collected");
						alert(unCollectionOk);
					}else{
						$("#addFavor").addClass("collected");
						alert(collectionOk);
					}
				}
			},
			error:function(){
				alert(collectionError);
			}
		});
	}
});
});
$(document).on('touchmove', function(e){
	if(isSwipe === true){
		e.preventDefault(); 
	}

})

function checkHiddenHistory(element) {
    if ($(element).prev(".historyList").children("[style*='display:none']").size() == 0) {
        $(element).hide();
    }
}

$(function(){
    $(".viewMore").each(function(){
        checkHiddenHistory($(this));
    });
    $(".viewMore").on("click", function(){
        var currHidChildren = $(this).prev(".historyList").children("[style*='display:none']");
        currHidChildren.slice(0,5).show();
        checkHiddenHistory($(this));
    });
});

$("#menuIcon").on('click', function(e){
    window.location.href='/history/';
});

$(".icon-desktop").on('click', function(e){
    window.location.href='http://www.ceconline.com/';
});

$(".icon-back").on('click', function(e){
    window.history.back();
});

$(".sinaWeibo").on("click", function(){
	dcsMultiTrack('DCS.dcsuri','/Shareto.htm','WT.cg_n','weibo','WT.dl','22');
	share('sina');
})

$(".qqWeibo").on("click", function(){
	dcsMultiTrack('DCS.dcsuri','/Shareto.htm','WT.cg_n','Tencentweibo','WT.dl','22');
	share('qqt');
})

$("#userIcon").on("tap", function(e){
	e.stopPropagation();
})

$("#ReviewBtn").on("tap", function(e){
	e.stopPropagation();
})

$(".deleteBtn").on("tap", function(e){
	e.stopPropagation();
	var $item = $(this).parents('li');


	var favoriteId = $item.find("a").attr("id");
	var action = "remove";
	$.ajax({
			type:"post",
			url:"/mobile/addFavorite.do",
			data:{"favorId":favoriteId,"action":action},
			dataType:"xml",
			success:function(data){
				var $result = $("content",data);
				var hasError = $result.children("hasError").text();
				if(hasError == "true"){
					alert(collectionError);
				}else{
					alert(unCollectionOk);
				}

				$item.animate({opacity:0.25},500,'ease',function(){$item.remove();
				
				if($("#myFavList li").length==0){
					$("#collect").html('<div class="UserProfile_NoRecord">还没有任何内容，点击右上角查看更多</div>');
				}

				});
				

			},
			error:function(){
				alert(collectionError);
			}
		});
})

/*start MR8934- infinite scroll*/
if($('#scrollLoad').length > 0){
	$("body,html,.wrap,.animateCon").css({"height":"auto !important","overflow":"auto !important"});
	var counter = 0, numPerPage=10, limitPage = 10, scrollData =[];

	var keywordValue = $('#keywordSpan').attr("value");
	
	var appendData = function(scrollObj){
		var str="";
		var startIndex = (counter-1) * numPerPage,endIndex = startIndex+numPerPage;
		
		for(var i =startIndex; i < endIndex; i++){
			str +=   '<article class="article"><h3><span class="Label_time">'+scrollData[i].date+'</span><a class="Label_title" href="'+scrollData[i].link+'" id="'+ scrollData[i].id+'">'+scrollData[i].title+'</a></h3><p>'+scrollData[i].desc+'</p></article>';
			if( i+1 >= scrollData.length || counter >= limitPage-1 ){
				scrollObj.lock();
				scrollObj.noData();
				break;
			}
		}
		//数据已缓存，加载会完全连续，没有loading状态，延迟一秒加载，如不需要可删除
		setTimeout(function(){
			$('.scrollArtList').append(str);
			scrollObj.resetload();
		},1000);	
	};
	
	$('#scrollLoad').dropload({
		scrollArea: window,
		domDown : {
                domClass   : 'dropload-load',/* the load div class */
                domRefresh : '下滑加载更多', /* hint text before loading */
                domLoad    : '<span class="loading"></span>Loading...', /* hint text when loading */
                domNoData  : '手机版仅显示50条相关内容。'/* hint text when meet the max limit */
        },
		loadDownFn : function(me){
			var ajaxUrl = "/load_data/" + keywordValue + "_more.json";
			console.info("ajaxUrl = "+ ajaxUrl);
			counter++;
			if(counter == 1){
				$.ajax({
					type: 'GET',
					url: ajaxUrl,
					dataType: 'json',
					success: function(data){
						scrollData = data;
						appendData(me);
					},
					error: function(xhr, type){
						alert('Ajax error!');
					}
				});
			}else{
				appendData(me);
			}
		}
	});
}
/*end MR8934- infinite scroll*/

})(Zepto, Swipe);

(function($){
$(function(){
   /*for #8578*/
	$(".ui_input_tip").each(function(){
		var $input = $(this);
		var tip = $input.attr("tip"),tipCls = $input.attr("tipCls");
		$input.bind("focus",function(){
			if($input.val() == tip)$input.val("").removeClass(tipCls);
		}).bind("blur",function(){
			if($input.val()=="")$input.val(tip).addClass(tipCls);
		}).blur();
	});
	$("#cancleCommBtn").click(function(){
		$("#commentArea").val("").blur();
		$('input:radio:checked').attr('checked',false);
	});
	/*end #8578*/

	/*=S 2017.1 redesign cec homepage, channel, article */
	$.fn.freeScroll = function(opts){
      var el = this;
      if( ! el.length)return;
      var startPosition, endPosition;
      var SUPPORTS_TOUCH = 'ontouchstart' in window,
          SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
          SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH;
      var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER),
          START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
          MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
          END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
          LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //manually detect leave on touch devices, so null event here
          CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');
      console.log(START_EV, MOVE_EV, END_EV, LEAVE_EV);
      el[0].addEventListener(START_EV, function (e) {
          var touch = e.touches[0];
          startPosition = {
              x: touch.pageX,
              y: touch.pageY
          }
      });
      el[0].addEventListener(MOVE_EV, function (e) {
        var evt = e.originalEvent ? e.originalEvent : e;
        var touch = evt.touches ? evt.touches[0] : evt;
        endPosition = {x: touch.pageX,y: touch.pageY};
        if(opts.move){
          opts.move.call(el, event, endPosition.x - startPosition.x ,endPosition.y - startPosition.y);
        }
        e.preventDefault();
      });
      el[0].addEventListener(END_EV, function (e) {
          if(opts.end){
            opts.end.call(el, event, endPosition.x - startPosition.x ,endPosition.y - startPosition.y);
          }
      });
      
      return el;
    }
    /* blue navigation horizontal scroll  */
    if($('#cecNav_list').length){
	    $('#cecNav_list').on('init',function(){
	      var el = $(this), totalW = 0;;
	      el.children().each(function(no, child){
	        totalW += $(child).outerWidth(true);
	      });
	      el.data('startL', parseFloat(el.css('left'))).data('maxW', totalW - $('#cecNav_win').width() );
	      $('#cecNav_win').css('overflow','hidden');
	    }).freeScroll({
	      move:function(e, x, y){
	        var el = this, win = $('#cecNav_win'),
	            l = el.data('startL'), maxW = el.data('maxW'), moveL;
	        if( l+x > 0){
	          moveL = 0;
	          win.removeClass('scroll');
	        }else if( l+x < -maxW ){
	          moveL = -maxW;
	        }else{
	          moveL = l+x;
	          win.addClass('scroll');
	        }
	        el.css('left', moveL);
	      },
	      end:function(e, x, y){
	        var el = this;
	        el.data('startL', parseFloat(el.css('left')) );
	      }
	    }).trigger('init');

	    $(window).on('resize', function(){
	    	$('#cecNav_list').trigger('init');
	    })
    }

    /* show menu pop */
    if($('#cecFixMenu').length){
	    $('#show_cecFixMenu').on('click', function(){
	      var top = $('.cecHeaderWrap').height()
	      $('#cecFixMenu').css('top', top +'px').toggleClass('on');
	      $(this).toggleClass('cur');
	    });
	    /* disable touch on menu pop */
	    $('body').on('touchmove','.cecFixMenu',  function(e){
	      e.preventDefault();
	    })
	}


    /* common fix effect */
    $('.cec_fixItem').each(function(no, obj){
      var el = $(obj), win = $(window), cls = el.attr('fixClass'), setT = el.attr('fixTop');
      if(setT){
      	setT = setT.toLowerCase();
      	if(setT.lastIndexOf('w')!=-1){
      	  setT = win.height() * parseInt(setT.substr(0,setT.lastIndexOf('w')));
      	}else if(setT.lastIndexOf('px')!=-1){
      	  setT = parseInt(setT.substr(0,setT.lastIndexOf('px')))
      	}
      }
      var objH = setT? setT : el.offset().top;
      win.on('scroll',function(){
        if( win.scrollTop() > objH){
          el.addClass(cls)
        }else{
          el.removeClass(cls)
        }
      })
    })
	/*=E 2017.1 redesign cec homepage, channel, article  */

})
})(jQuery);

function share(type) {
	 var link = '';
	 var pics = new Array();
	 switch (type) {
	 case 'sina':
		 link = "http://v.t.sina.com.cn/share/share.php?appkey=1646002919&url={url}&title=" + _shareTitle + "&content=gb2312";
		 break;
	 case 'qqt':
		 link = "http://v.t.qq.com/share/share.php?appkey={appkey}&url={url}&title=" + _shareTitle + "&pic={pic:|}&site={site}";
		 break;
	 }
	 
	 $('img').each(function(i, n) {
		 pics.push(n.src);
	 });
	 
	 link = link.replace('{appkey}', encodeURI("ecab6964a8745e2b6132bef1e4f5b1a5"));
	 link = link.replace('{site}', encodeURI("http://m.ceconlinebbs.com/"));
	 if("sina" == type){
		link = link.replace('{url}', encodeURIComponent(window.location.href+"?siteshareto&site=weibo"));
	 }else if("qqt" == type){
		link = link.replace('{url}', encodeURIComponent(window.location.href+"?siteshareto&site=Tencentweibo"));
	 }	
	 link = link.replace('{pic:|}', pics.join('|'));
	 window.open(link);
}

// check email address
function isValidEmail(emailAddress){
	var reg = /^[_a-zA-Z0-9.\-]+@([_a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,3}$/;
	if(emailAddress.length > 0 && reg.test(emailAddress)){
		return true;
	}else{
		return false; 
	}
}
(function($){
		window.onload=function(){
		var bannerShow = $("[id^='bannerPos']");
	      	for(var n in bannerShow){
	      	if(bannerShow.eq(n).is(':hidden')){
			bannerShow.eq(n).prev('.bannerAdvert').hide();
	      	}
		}
	      }
})(jQuery);

(function($){
	$("body,html,.wrap,.animateCon").css({"height":"auto !important","overflow":"auto !important"});
	if(typeof(_allScrollCounter) == "undefined"){
		_allScrollCounter = 0;
		_positiveScrollCounter=0;
		 _neutralScrollCounter=0;
		 _negativeScrollCounter=0;
		fromPKPage="false";
	}
	var dropScrollObj =[], scrollCounter =[{times: _allScrollCounter},{times: _positiveScrollCounter},{times: _neutralScrollCounter},{ times: _negativeScrollCounter}];
	if(fromPKPage=="true"){
		n=4;
	}else{
		n=1;
	}
	for(var b=0; b<n ; b++){
		(function(a){
			if($('#comment_text_'+(a+1)).length > 0){ //&& $('#comment_text_'+(a+1)+">ul").children().length>=15
				scrollCounter[a].counter = 0;
				dropScrollObj[a]=$('#comment_text_'+(a+1)).dropload({
					scrollArea: window,
					domDown : {
		                domClass   : 'dropload-load',/* the load div class */
		                domRefresh : 'refresh...', /* hint text before loading */
		                domLoad    : '<span class="loading"></span>Loading...', /* hint text when loading */
		                domNoData  : '暂无更多'/* hint text when meet the max limit */
		            },
					loadDownFn : function(me){
						if(scrollCounter[a].counter >= scrollCounter[a].times){
							me.lock();
							me.noData();
				            me.resetload();
						}else{
							scrollCounter[a].counter++;
							$.ajax({
								type: 'GET',
								url: '/mobile/viewCommentList.do',
								data: {'objectID':_objectID,'objectType':_objectType,'activeDate':_activeDate,'standPoint':_standPoint,'requestCount':scrollCounter[a].counter,'fromPKCommentList':fromPKCommentList},
								dataType: 'json',
								success: function(data){
									var result = '';
									for(var i = 0; i < data.dataArray.length; i++){
				                        result +=  '<li>'+'<div class="user"><div class="name">'+data.dataArray[i].name+'</div><div class="date">'+data.dataArray[i].date+'</div></div>'
				                                        +'<div class="content">'+data.dataArray[i].content+'</div></li>';
				                    }
				                    setTimeout(function(){
				                        $('.lists'+(a+1)).append(result);
				                        me.resetload();
				                    },0);
								},
								error: function(xhr, type){
									alert('Ajax error!');
								}
							});
						}
					}
				});
			}
			if(a!=0){
				dropScrollObj[a].lock();
			}
			if(scrollCounter[a].counter >= scrollCounter[a].times){
				dropScrollObj[a].direction = 'up';
				dropScrollObj[a].noData();
	            dropScrollObj[a].resetload();
			}
		})(b);
	}

	$('#comment_summary ul').on('click','li',function(){
		var index = $(this).index();
		var standPointArry = new Array("all","positive","neutral","negative");
		$(this).addClass('focus').siblings().removeClass('focus');
		$('div[id^="comment_text_"]').eq(index).show().siblings().hide();
		for(var i = 0; i<dropScrollObj.length; i++){
			if(i == index && dropScrollObj[i].isData ==true){
				_standPoint = standPointArry[i];
				dropScrollObj[i].unlock();
				dropScrollObj[i].direction = 'up';
				dropScrollObj[i].resetload();
			}else if(i != index && dropScrollObj[i].isData ==false){
				dropScrollObj[i].lock();
			}
		}
	});
})(Zepto);

/*start MR9222*/
 //load more
 var _content = []; 
        var mobile_article = {
          _default:20, //default number
          _loading:20,  //update number when click
          init:function(){
            var lis = $(".mobile_list article");
            $(".mobile_article ul.list").html("");
            for(var n=0;n<mobile_article._default;n++){
              lis.eq(n).appendTo(".mobile_article .list");
            }
            for(var i=mobile_article._default;i<lis.length;i++){
              _content.push(lis.eq(i));
            }
            $(".mobile_list").html("");
          },
          loadMore:function(){
            var mLis = $(".mobile_article .list article").length;
            for(var i =0;i<mobile_article._loading;i++){
              var target = _content.shift();
              $(".mobile_article .list").append(target);
              if(_content.length<=0){
                $('.more').html("<p>首页只展示60条最新内容</p>");
                $('.more').hide();
                break;
              }
            }
          }
        }
        mobile_article.init();

 //轮播
// pure JS
// var elem = document.getElementById('mySwipe');
if(document.getElementById('mySwipe')){
var mySwipe = Swipe(document.getElementById('mySwipe'), {
  // startSlide: 4,
  auto: 3000,
  // continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  callback: function(index, element) {
    slideTab(index);
  }
  // transitionEnd: function(index, element) {}
});
// function addEvent(obj,type,fn){
//     if(obj.attachEvent){
//         obj.attachEvent('on'+type,function(){
//             fn.call(this);
//         });
//     }else{
//         obj.addEventListener(type,fn,false);
//     }
// }
//点击数字导航跳转
var bullets = document.getElementById('pager').getElementsByTagName('em');
for (var i=0; i < bullets.length; i++) {
    // (function(i, bullets){
    //   addEvent(bullets[i],'click',function(){
    //     mySwipe.slide(i, 500);
    //   })
    // })(i, bullets);
  var elem = bullets[i];
  elem.setAttribute('data-tab', i);
  elem.onclick = function(){
    mySwipe.slide(parseInt(this.getAttribute('data-tab'), 10), 500);
  }
}
//高亮当前数字导航
function slideTab(index){
  var i = bullets.length;
  while (i--) {
    bullets[i].className = bullets[i].className.replace('on',' ');
  }
  bullets[index].className = 'on';
};
// with jQuery
// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');
}

// url bar hiding
(function() {
    
  var win = window,
      doc = win.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if ( !location.hash || !win.addEventListener ) {

    //scroll to 1
    window.scrollTo( 0, 1 );
    var scrollTop = 1,

    //reset to 0 on bodyready, if needed
    bodycheck = setInterval(function(){
      if( doc.body ){
        clearInterval( bodycheck );
        scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
        win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
      } 
    }, 15 );

    if (win.addEventListener) {
      win.addEventListener("load", function(){
        setTimeout(function(){
          //reset to hide addr bar at onload
          win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
        }, 0);
      }, false );
    }
  }

})();
/*end MR9222*/
