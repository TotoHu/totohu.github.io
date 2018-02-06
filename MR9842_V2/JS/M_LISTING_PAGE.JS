(function ($){
	//begin onload
	$(function(){
		/* filter page show more item */
		var showMoreFilterIds = ["filter_location","filter_business"];
		for (var i=0;i<showMoreFilterIds.length;i++) {
			var trigger=$("#"+showMoreFilterIds[i] + " > a.filter_more:eq(0)"), listContainer=$("#"+showMoreFilterIds[i]);
			if(trigger.length && listContainer.length){
				egsolUI.showAll({
					trigger:trigger,
					listContainer:listContainer,
					displayStyle:listContainer.children(":eq(0)").css("display"),
					triggerHtml:trigger.attr('triggerHTML')
				});
			}
		}
		
		$("#filterWrap").on("click",".filter_item",function(event){
			$(this).toggleClass("filter_itemCur");
		});
		
		if($("#tpProd").find(".swiper-slide").length > 3){
			var tpProdSwiper = new Swiper('#tpProd', {
				slidesPerView: 'auto',
				slidesPerGroup: 3,
				roundLengths: true,
				pagination: '.swiper-pagination',
				paginationClickable: true
			});
		} else{
			var tpProdSwiper = new Swiper('#tpProd', {
				slidesPerView: 'auto'
			});
		}
		
		/* product search result list page - moq filter - swiping range bar */
		if($("#filter_moq").length && $("#filter_moq").jRange){
			$("#filter_moq").jRange({
		        width: '92%' ,
		        showLabels: false,
		        showScale: false,
		        theme: "rangebar",
		        onstatechange: function(val){
		        	//val= val==0? 1:val;
		            $('#filter_moqVal').html(val);
		        },
		        snap: true
		    });
		}
		
		$("#selectedFilter").on("click", ".deleteIcon", function(event){
			$(this).parent(".selectFilter").hide();
		});

		//=S related categories
		var relateCateSwiper = new Swiper('#relateCate', {//horizontal scrollable related categories
	        slidesPerView: 'auto',
	        freeMode: true,
	        onTransitionEnd: function(swiper){
	        	swiper.isEnd ? swiper.container.addClass('end') : swiper.container.removeClass('end');
	        },
	    });

		var relateCatePopSwiper = new Swiper('#relateCate_popList', {//vertical scrollable content in related categories pop
	        scrollbar: '.swiper-scrollbar',
	        direction: 'vertical',
	        slidesPerView: 'auto',
	        mousewheelControl: true,
	        freeMode: true,
	        roundLengths : true,
	        onInit:function(swiper){
	        	swiper.container.addClass('inited');//disabled browser default scrollbar when ready
	        }
	    });

		$('#relateCate_pop').on('click','.popCls', function(){//close related categories pop
	        var pop = $('#relateCate_pop'), mask=$('.relateCate_mask'), toggleCls = 'show';
	        pop.removeClass(toggleCls).one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionEnd animationend',function(){pop.hide()});
	        mask.fadeOut(500);
	        return false;
	    });
	    
	    $('#relateCate_more').on('click',function(){//open all categories pop
	        var pop = $('#relateCate_pop'), mask=$('.relateCate_mask'), toggleCls = 'show';
	        pop.show(0).addClass(toggleCls).one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionEnd transitionend',function(){relateCatePopSwiper.onResize();});
	        mask.fadeIn(500);
	        return false;
	    })
	    //=E related categories
		
	});
	//end onload
})(jQuery);
/*function for MOQ Filter */
function MoqClickAction(pageType,filterType,baseFilterURL){	
	$(".mButton").attr("href",baseFilterURL+"&moqVal="+$(".pointer-label.high").text());
	dcsMultiTrack('DCS.dcsuri','/gsol/'+pageType+'/GSOL/Navigators/.jsp', 'WT.ti', 'Navigators', 'WT.FilterType', filterType, 'WT.FilterVal',$('.pointer-label.high').text(), 'WT.groups', 'Guided Nav');
}
