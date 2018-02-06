(function ($){
	//begin onload
	$(function(){
		var setMenuHeightFunc = function($trigger,$target){
			$target.find(".ui_tab_con").css({height:($(window).height()-$target.find(".ui_tab_tit").outerHeight())+"px"});
			$target.find('.cateMenuList').css({height: ($target.find('.cateMenuList').closest('.ui_tab_con').outerHeight()-$('.catSearch').outerHeight()-parseInt($('.catSearch').css("marginTop"))-parseInt($('.catSearch').css("marginBottom")) )+'px'});
			$target.find('.catSearchList').css({height: ($target.find('.catSearchList').closest('.ui_tab_con').outerHeight()-$('.catSearch').outerHeight()-parseInt($('.catSearch').css("marginTop")) )+'px' })
		};
		egsolUI.showOverlay({
			trigger:$("#menuIcon"),
			target:$("#menuContent"),
			effect:"leftSlide",
			afterShow:setMenuHeightFunc,
			onResize:setMenuHeightFunc,
		});
		
		egsolUI.clickShow({
			triggerId:"userIcon",
			targetId:"userContent",
			posType:"bottom_right",
			left:9
		});
		
		egsolUI.switchSite({triggerId:"desktopSwitcher"});
		
		$(".menuList").on("click", '.arrow', function(){
	        var self = $(this), par = self.closest('li'), list=par.closest(".menuList");
	        list.data('top', list.scrollTop()).scrollTop(0);
	        console.log(list.data('top'));
	        par.addClass('z_open').siblings('li').addClass('z_close');
	        par.parents('.z_open').addClass('z_cur');


	        //animation effect
	        par.addClass('ani_slideRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend',function(){
	            $(this).removeClass('ani_slideRight');
	        });
	    }).on('click', '.back', function(){
	        var self = $(this), par = self.closest('li'), list=par.closest(".menuList");
	        list.scrollTop(list.data('top'));
	        par.removeClass('z_open').siblings('li').removeClass('z_close');
	        par.parents('.z_open').removeClass('z_cur')

	        //animation effect
	        par.closest('.con,.menuList').addClass('ani_slideLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend',function(){
	            $(this).removeClass('ani_slideLeft');
	        });
	    });


	    var catSearch = {
	        search: $('.catSearch'), 
	        list: $('.catSearchList'),
	        inp: $('.catSearch_input'),
	        minChar: 3,
	        showList: function(){
	            var search = catSearch.search, list = catSearch.list;
	            list.css({height: list.closest('.ui_tab_con').outerHeight()-search.outerHeight()-parseInt(search.css("marginTop")) }).show();
	        },
	        hideList: function(){
	            catSearch.list.hide();
	        },
	        fillList: function(key){
	            var search = catSearch.search, list = catSearch.list;
	            
	            var MATCH={NO:1, BEGIN:2, CONTAIN:3};
	            var catCheck = function(str, key) {
	                var matchBegin = new RegExp('^'+key+'.*$', 'i');
	                var matchContain = new RegExp('^.+'+key+'.*$', 'i');
	                if(matchBegin.test(str)){
	                    return MATCH.BEGIN;
	                }else if(matchContain.test(str)){
	                    return MATCH.CONTAIN;
	                }else{
	                    return MATCH.NO;
	                }
	            }
	            
	            var cateFormat = function(str, key) {
	                key =  key.replace(/(\\|\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\})/g, '\\$1');
	                return str.replace(new RegExp('(' +key + ')', 'i'), '<strong class="match">$1<\/strong>');
	            }

	            var cateSort = function(obj1, obj2){
	                return obj1.title > obj2.title;
	            };

	            var $cates = $('.menuList').find('.cate');
	            var cateArr=[], cateBeginArr=[], cateContainArr=[];

	            for(var i=0; i<$cates.length; i++){
	                var cate = {
	                    title: $cates.eq(i).text(),
	                    url: $cates.eq(i).attr('href'),
	                };
	                var match = catCheck(cate.title, key);
	                if(match == MATCH.BEGIN){
	                    cateBeginArr.push(cate);
	                }else if(match == MATCH.CONTAIN){
	                    cateContainArr.push(cate);
	                }
	            }

	            cateArr = cateBeginArr.sort(cateSort).concat(cateContainArr.sort(cateSort));

	            var tempStr='', i, cate;
	            for(var i=0; i<cateArr.length; i++){
	                var cate = cateArr[i];
	                tempStr= tempStr + '<li><a href="'+cate.url+'">'+cateFormat(cate.title, key)+'</a></li>';
	            }

	            list.html(tempStr);
	        },
	        initFunc: function(){
	            var search = catSearch.search, inp = catSearch.inp;
	            search.on('click', function(){
	                search.addClass('cur');
	                inp.focus();
	            });

	            inp.on('keyup', function(){
	            	var val = inp.val();
	                if( val!='' && $.trim(val).length>=catSearch.minChar ){
	                    catSearch.fillList(inp.val());
	                    catSearch.showList();
	                }else{
	                    catSearch.hideList();
	                }
	            }).on('blur', function(){
	                if(inp.val() == ''){
	                    search.removeClass('cur');
	                }
	            })
	        },
	    }
	    catSearch.initFunc();
		
		function getFormater(qType) {
			if(qType=='PRODUCT') return defaultResultFormater;
			if(qType=='SUPPLIER') return defaultResultFormater;
			return defaultResultFormater;
		}
		var inputTips = {
				'PRODUCT': JSMsg.productTip,
				'SUPPLIER': JSMsg.supplierTip,
		};
		
		function dealGsolquery() {
			var $gsolquery = $("#gsolquery");
			if ($gsolquery.data("hasInitAC")) {
				return;
			}
			var opt = {
				serviceUrl:'/suggest/GeneralManager',
				params: { design:'mobile',page:'commons/autopopkwd',limit:'10',qType:defaultQType, featuredpp:'Y', language:langValue},
				fnFormatResult: getFormater(defaultQType),
				onSelect: function(value){
					/* don't change below method order */ 
					sendAjaxToServer(jQuery('#gsolquery').val(),true,$('#qType').val());
					setApclick("1","T");
					$("#keywordBtnSearch").click();
				}
			}
			var ac = $gsolquery.autocomplete(opt);

			$gsolquery.data('curInputTip', inputTips[defaultQType]);
			egsolUI.customSelect({
				triggerId: 'qTypeSelTrigger',
				targetId: 'qTypeSelTarget',
				optTextShowId: 'qTypeSelTrigger',
				valueInputId: 'qType',
				initValue: defaultQType,
				onchange: function (qType) {
					if(ac) {
						ac.clearCache();
						ac.options.params.qType = qType;
						ac.options.fnFormatResult = getFormater(qType);
					}
					if($gsolquery.val() == $gsolquery.data('curInputTip')) {
						$gsolquery.val(inputTips[qType]);
					}
					$gsolquery.data('curInputTip', inputTips[qType]);
				}
			});
			$gsolquery.data("hasInitAC",true).trigger('blur');
		}
		
		egsolUI.clickShow({
			triggerId:"navSearch",
			targetId:"search",
			afterShow:dealGsolquery,
			disBodyClick:true
		});
		
		if(window.AutocompleteHelper && ($("#gsolquery").length>0 || $("#gsolquery2").length>0)) {
			var defaultResultFormater = window.AutocompleteHelper.defaultResultFormater;
			
			var defaultQType = 'PRODUCT';
			var $pageType = $("#KWSearchType");
			if($pageType && $pageType.val() == 'SuppSearch'){
				defaultQType = 'SUPPLIER';
			}
		
			var langValue = $("#language").val();
			if (langValue == null || '' == langValue){
				langValue = 'en';
			}
	
			if($("#gsolquery").length>0 && !$("#gsolquery").is(":hidden")) {
				dealGsolquery();
			}		
			
			if($("#gsolquery2").length>0) {
				var $gsolquery2 = $("#gsolquery2");
				var opt2 = {
					serviceUrl:'/suggest/GeneralManager',
					params: { design:'mobile',page:'commons/autopopkwd',limit:'10',qType:defaultQType, featuredpp:'Y', language:langValue},
					fnFormatResult: getFormater(defaultQType),
					onSelect: function(value){
						/* don't change below method order */ 
						sendAjaxToServer(jQuery('#gsolquery2').val(),true,$('#qType2').val());
						setApclick("2","T");
						$("#keywordBtnSearch2").click();
					}
				}
				var ac2 = $gsolquery2.autocomplete(opt2);
				

				$gsolquery2.data('curInputTip', inputTips[defaultQType]);
				egsolUI.customSelect({
					triggerId: 'qTypeSelTrigger2',
					targetId: 'qTypeSelTarget2',
					optTextShowId: 'qTypeSelTrigger2',
					valueInputId: 'qType2',
					initValue: defaultQType,
					onchange: function (qType) {
						if(ac2) {
							ac2.clearCache();
							ac2.options.params.qType = qType;
							ac2.options.fnFormatResult = getFormater(qType);
						}
						if($gsolquery2.val() == $gsolquery2.data('curInputTip')) {
							$gsolquery2.val(inputTips[qType]);
						}
						$gsolquery2.data('curInputTip', inputTips[qType]);
					}
				});
			}
			
			$("#gsolquery,#gsolquery2").bind('focus',function(){
				var $this = $(this);
				if($this.val() == $this.data('curInputTip')) {
					$this.val('');
				}
				$this.removeClass('inputTip');
			}).bind('blur',function(){
				var $this = $(this);
				if($this.val() == '') {
					$this.addClass('inputTip');
					$this.val($this.data('curInputTip'));
				}
			}).trigger('blur');
		}
	});
	//end onload
})(jQuery);

function setUpHeaderSearch() {
	var myVal = "";//document.searchbox.search_what[document.searchbox.search_what.selectedIndex].value;
	//add below for project v201
    if(jQuery('#qType').val()){
    	var qType = jQuery('#qType').val();
		myVal = (qType == 'PRODUCT') ? "1" : (qType == 'SUPPLIER' ? "2" : "3");
	} else if(jQuery('#ME_qType').val()){
    	var qType = jQuery('#ME_qType').val();
		myVal = (qType == 'PRODUCT') ? "1" : (qType == 'SUPPLIER' ? "2" : "3");
	}
	//end project v201
	if(document.searchbox.KWSearchType){
		document.searchbox.removeChild(document.searchbox.KWSearchType);
	}
	var KWSearchType = document.createElement("input");
	KWSearchType.setAttribute("type", "hidden");
	KWSearchType.setAttribute("name", "KWSearchType");
	//add below for project v22
	var isFromKiosk = matchCookie("TS_ID","INQ_PATH_VALUE","TS_Kiosk");
	if(isFromKiosk){
	  if (typeof document.searchbox.exh == "undefined")
		  makeInputElement(document.searchbox,'hidden','exh','true');
	  if(typeof document.searchbox.isKiosk == "undefined")
			 makeInputElement(document.searchbox,'hidden','isKiosk','Y');
	}
	//end project v22
	if(myVal == "1"){//for product search display supplier list as default tab
		if (typeof document.searchbox.view == "undefined")
    		makeInputElement(document.searchbox,'hidden','view','grid');
		
    	if(document.getElementById("apclick") && "T"==document.getElementById("apclick").value)
    		KWSearchType.setAttribute("value", "Prod_Autocomplete_Search");
    	else         
    		KWSearchType.setAttribute("value", "ProdSearch");   
        
	} else { //clear values if not a product search
		if(myVal == "2"){
	    	if(document.getElementById("apclick") && "T"==document.getElementById("apclick").value)
	    		KWSearchType.setAttribute("value", "Supp_Autocomplete_Search");
	    	else{
	    		KWSearchType.setAttribute("value", "SuppSearch");
	    		if (typeof document.searchbox.view == "undefined")
	    		makeInputElement(document.searchbox,'hidden','view','suppList');
	    	}
		}else if(myVal == "3"){
	    	if(document.getElementById("apclick") && "T"==document.getElementById("apclick").value)
	    		KWSearchType.setAttribute("value", "Article_Autocomplete_Search");
	    	else 			
	    		KWSearchType.setAttribute("value", "ArticleSearch");
		}
		if (document.searchbox.supp_list!=null)
			document.searchbox.supp_list.value = "";
		if (document.searchbox.compare_table!=null)
			document.searchbox.compare_table.value = "";
	}
	document.searchbox.appendChild(KWSearchType);
	if(document.getElementById("apclick")) document.getElementById("apclick").value = '';
	matchKW();
	submitHeaderSearch();
}
	
function makeInputElement(formObj,elemType,elemName,elemVal) {
	aNode = document.createElement('Input');
	aNode.setAttribute('type', elemType);
	aNode.setAttribute('name', elemName);
	aNode.setAttribute('value', elemVal);
	formObj.appendChild(aNode);
}

function matchKW(){
	var query=document.searchbox.query.value;
	var appKw=jQuery("#apkw").val();
	if(query!=''){
		if(appKw==query){
			jQuery("#apmatch").val("T");
			}else{
				jQuery("#apmatch").val("F");
				}
	}
}

var gsol_root_id = "3000000149681";
var gsol_cat_id = "2000000003844";
var selected_prod_id = "";
var selected_catalog_id = "2000000003844";
var currentCatalogId = "2000000003844";

function submitHeaderSearch() {
	if (document.searchbox.query.value == "" || document.searchbox.query.value == JSMsg.productTip || document.searchbox.query.value == JSMsg.supplierTip || document.searchbox.query.value.length ==1) { 
		alert('Please enter minimum 2 characters to start your search');
	} else {
		makeSearchActionFields(document.searchbox);
		var myVal = "";//document.searchbox.search_what.value;
		//add below for project v201
	    if(jQuery('#qType').val()){
	    	var qType = jQuery('#qType').val();
			myVal = (qType == 'PRODUCT') ? "1" : (qType == 'SUPPLIER' ? "2" : "3");
		} else if(jQuery('#ME_qType').val()){
	    	var qType = jQuery('#ME_qType').val();
			myVal = (qType == 'PRODUCT') ? "1" : (qType == 'SUPPLIER' ? "2" : "3");
		}
		//end project v201
		if (myVal == "1") {
			setSearchValues("PRODUCT",document.searchbox);
		} else if (myVal == "2") {
			setSearchValues("SUPPLIER",document.searchbox);
		}
		if((selected_prod_id != "") && (selected_prod_id != "-1")) {
			makeInputElement(document.searchbox,'hidden','prod_id',selected_prod_id);
		}
		document.searchbox.query.value = ($.trim(document.searchbox.query.value));
		document.searchbox.query.value = document.searchbox.query.value.replace(/\s+/g, ' ');
		document.searchbox.submit();
	}
}

function makeSearchActionFields(formObj) {
	if (typeof formObj.action == "string") {
		makeInputElement(formObj,'hidden','action','GetPoint');
		makeInputElement(formObj,'hidden','action','DoFreeTextSearch');
	}
}

function matchCookie(tsid,cookieName,cookieValue)
{ 
 var arr1,reg1 = new RegExp("(^| )"+tsid+"=([^;]*)(;|$)");
 var arr2,reg2 = new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)");
 if(arr1 = document.cookie.match(reg1)){
	if(arr1[2].length>0){
		if(arr2 = document.cookie.match(reg2)){
			if($.trim(arr2[2]) == cookieValue){
				return true;
			}else{
				return false;
			}
		}
	}else{
		return false;
	}
 }else{
  return false;
 }
}

function setSearchValues(srchType,formObj) {
	//add below for project v22
	var isFromKiosk = matchCookie("TS_ID","INQ_PATH_VALUE","TS_Kiosk");
	if(isFromKiosk){
	  if (typeof formObj.exh == "undefined")
		  makeInputElement(formObj,'hidden','exh','true');
	  if(typeof formObj.isKiosk == "undefined")
			 makeInputElement(formObj,'hidden','isKiosk','Y');
	}
	// end project v22
	
	if (srchType == "PRODUCT") {
		if ((formObj.AGG != null) && formObj.AGG.value == "Y")
			formObj.point_search.value='off';
		else
			formObj.point_search.value='on';

		formObj.page.value = 'search/ProductSearchResults';
		formObj.product_search.value="on";
		formObj.supplier_search.value="off";

		if (typeof formObj.view == "undefined")
		makeInputElement(formObj,'hidden','view','grid');
		
	} else if (srchType == "SUPPLIER") {
		if ((formObj.AGG != null) && formObj.AGG.value == "Y")
			formObj.point_search.value='off';
		else
			formObj.point_search.value='on';

		formObj.page.value = 'search/SupplierSearchResults';
		formObj.supplier_search.value="on";
		formObj.product_search.value="off";

		if (formObj.supp_list!=null)
			formObj.supp_list.value = "";
		if (formObj.compare_table!=null)
			formObj.compare_table.value = "";

	} 
}

function setApclick(whichForm,val){
	//add for PA homepage--project v201
	var formObj =  document.searchbox;
	if(formObj && document.searchbox.length == 2)
		formObj = document.searchbox[0];
	//end add
	
	if(formObj && formObj.apclick){
		formObj.removeChild(formObj.apclick);
	}
	
	if(document.searchboxInAll && document.searchboxInAll.apclick){
		document.searchboxInAll.removeChild(document.searchboxInAll.apclick);
	}
	
	if("2"==whichForm)//bottom search box
		formObj = document.searchboxInAll;
	if("3"==whichForm)//bottom search box
		formObj = document.pasearchbox
	var apclick = document.createElement("input");
	apclick.setAttribute("type", "hidden");
	apclick.setAttribute("name", "apclick");
	apclick.setAttribute("id", "apclick");
	apclick.setAttribute("value", val);        

	formObj.appendChild(apclick);
}

function submitSearchInAll2(){
	if (document.searchboxInAll.query.value == "" || document.searchboxInAll.query.value ==JSMsg.productTip || document.searchboxInAll.query.value == JSMsg.supplierTip || document.searchboxInAll.query.value.length ==1) { 
		alert('Please enter minimum 2 characters to start your search');
	} else {
		if(document.searchboxInAll.KWSearchType){
			document.searchboxInAll.removeChild(document.searchboxInAll.KWSearchType);
		}
		var KWSearchType = document.createElement("input");
		KWSearchType.setAttribute("type", "hidden");
		KWSearchType.setAttribute("name", "KWSearchType");
		
		var myVal = "1";//document.searchbox.search_what.value;
		//add below for project v201
	    if(jQuery('#qType2').val()){
	    	var qType = jQuery('#qType2').val();
			myVal = (qType == 'PRODUCT') ? "1" : (qType == 'SUPPLIER' ? "2" : "3");
		}
		//end project v201			
		
		if (myVal == "1") {
			setSearchValues("PRODUCT",document.searchboxInAll);
	    	if(document.getElementById("apclick") && "T"==document.getElementById("apclick").value)
	    		KWSearchType.setAttribute("value", "Prod_Autocomplete_Search");
	    	else 
				KWSearchType.setAttribute("value", "ProdSearch");
		} else if (myVal == "2") {
			setSearchValues("SUPPLIER",document.searchboxInAll);
	    	if(document.getElementById("apclick") && "T"==document.getElementById("apclick").value)
	    		KWSearchType.setAttribute("value", "Supp_Autocomplete_Search");
	    	else
				KWSearchType.setAttribute("value", "SuppSearch");
		} 
		document.searchboxInAll.appendChild(KWSearchType);
		if(document.getElementById("apclick")) document.getElementById("apclick").value = '';
		var query=document.searchboxInAll.query.value;
		var appKw=jQuery("#apkw2").val();
		if(query!=''){
			if(appKw==query){
				jQuery("#apmatch2").val("T");
			}else{
				jQuery("#apmatch2").val("F");
			}
		}
		document.searchboxInAll.query.value = ($.trim(document.searchboxInAll.query.value));
		document.searchboxInAll.query.value = document.searchboxInAll.query.value.replace(/\s+/g, ' ');
		document.searchboxInAll.submit();
	}
}
