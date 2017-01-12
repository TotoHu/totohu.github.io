var collectionOk = '�ղسɹ���';
var unCollectionOk = 'ȡ���ղسɹ���';
var collectionError = '����ʧ�ܣ�';

(function($, Swipe){

var slider = $('#slider'),			//����ͼ����
  	menuList = $('#sliderMenu li'),	 //����ͼ��СԲ��
  	userInfo = $('#userInfo'),		//��ߵ�����
	menuCon = $('#menuCon'),        //�ұߵ�����
	animateCon = $('#animateCon'),   //����������
	isSwipe = false,     //�ж�ҳ����û����  defaultʱΪfalse
	sharePop = $("#sharePop"),
	marsker = $('.marsker'),
	cancelFavor = $("#cancelFavor"),
	$body = $('body'),
	logo = $("#cecLogo"),
	logoHref = logo.attr("href");

/*  ����ͼ����     */
slider = Swipe(slider[0], {
   				callback: function(pos) {
   					var i = menuList.length;
      				while (i--) {
        				menuList[i].className = '';
      				}
      				menuList[pos].className = 'on';
   				}
			});

//ҳ�����һ�����
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
					$("#collect").html('<div class="UserProfile_NoRecord">��û���κ����ݣ�������Ͻǲ鿴����</div>');
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
		//�����ѻ��棬���ػ���ȫ������û��loading״̬���ӳ�һ����أ��粻��Ҫ��ɾ��
		setTimeout(function(){
			$('.scrollArtList').append(str);
			scrollObj.resetload();
		},1000);	
	};
	
	$('#scrollLoad').dropload({
		scrollArea: window,
		domDown : {
                domClass   : 'dropload-load',/* the load div class */
                domRefresh : '�»����ظ���', /* hint text before loading */
                domLoad    : '<span class="loading"></span>Loading...', /* hint text when loading */
                domNoData  : '�ֻ������ʾ50��������ݡ�'/* hint text when meet the max limit */
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
    /* blue navigation horizontal scroll  */
    if($('#cecNav_list').length){
		$.fn.freeScroll = function(opts){
	      var el = this;
	      if( ! el.length)return;
	      var startPosition, endPosition, isMove = false;
	      var SUPPORTS_TOUCH = 'ontouchstart' in window,
	          SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
	          SUPPORTS_POINTER = false;//(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH
	      var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER),
	          START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
	          MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
	          END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
	          LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //manually detect leave on touch devices, so null event here
	          CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');
	      console.log(START_EV, MOVE_EV, END_EV, LEAVE_EV);
	      var startFunc = function(evt){
	      	isMove = false;
	      	var touch = evt.touches ? evt.touches[0] : evt;
	        startPosition = {
	            x: touch.pageX || touch.clientX,
	            y: touch.pageY || touch.clientY
	        }
	      }, moveFunc = function(evt){
	      	isMove = true;
	      	var evt = evt.originalEvent ? evt.originalEvent : evt;
	        var touch = evt.touches ? evt.touches[0] : evt;
	        endPosition = {x: touch.pageX || touch.clientX, y : touch.pageY || touch.clientY};
	        if(opts.move){
	          opts.move.call(el, evt, endPosition.x - startPosition.x ,endPosition.y - startPosition.y);
	        }
	        evt.preventDefault();
	      }, endFunc = function(evt){
	      	if(isMove){
	      		 evt.preventDefault();evt.stopPropagation();
		      	if(opts.end){
	             opts.end.call(el, evt, endPosition.x - startPosition.x ,endPosition.y - startPosition.y);
	            }
	            return false;
	        }
	      };
	      if(useTouchEvents){
		      el[0].addEventListener(START_EV, function (e){startFunc(e);});
		      el[0].addEventListener(MOVE_EV, function (e){moveFunc(e);});
		      el[0].addEventListener(END_EV, function (e){endFunc(e)});
	      }/*else{
	      	  el[0].addEventListener(START_EV, function (e) {
		          e.preventDefault();e.stopPropagation();
		          startFunc(e);
			      el[0].addEventListener(MOVE_EV, moveFunc);
			      el[0].addEventListener(END_EV, function (e) {
			      	el[0].removeEventListener(MOVE_EV,moveFunc);
			        endFunc(e)
			      });
			      el[0].addEventListener(LEAVE_EV, function (e) {
			      	el[0].removeEventListener(MOVE_EV,moveFunc);
			        return endFunc(e);
			      });
			      return false;
		      });
	      }*/
	      return el;
	    }
	    $('#cecNav_list').on('init',function(){
	      var el = $(this), totalW = 0, win=$('#cecNav_win'), cur = el.find('.cur'), startL;
	      el.children().each(function(no, child){
	        totalW += $(child).outerWidth(true);
	      });
	      if(cur.length){
		      startL = cur.position().left;
		      if(startL > win.width()-cur.outerWidth(true)){
		      	el.css('left', (-startL+win.width()/2-cur.outerWidth(true)/2)+'px');
		      	win.addClass('scroll');
		      }
		  }
	      el.data('startL', parseFloat(el.css('left'))).data('maxW', totalW - win.width() );
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
		                domNoData  : '���޸���'/* hint text when meet the max limit */
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
                $('.more').html("<p>��ҳֻչʾ60����������</p>");
                $('.more').hide();
                break;
              }
            }
          }
        }
        mobile_article.init();

 //�ֲ�
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
//������ֵ�����ת
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
//������ǰ���ֵ���
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
