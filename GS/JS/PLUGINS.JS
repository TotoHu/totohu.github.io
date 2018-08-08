/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")}return c(b)}:c(d)}("undefined"!=typeof window?window:this,function(bP,bO){var bN=[],bM=bP.document,bL=Object.getPrototypeOf,bJ=bN.slice,bH=bN.concat,bG=bN.push,bF=bN.indexOf,bE={},bD=bE.toString,bC=bE.hasOwnProperty,bB=bC.toString,bA=bB.call(Object),bz={};function by(e,d){d=d||bM;var f=d.createElement("script");f.text=e,d.head.appendChild(f).parentNode.removeChild(f)}var bw="3.0.0",bv=function(d,c){return new bv.fn.init(d,c)},bu=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bt=/^-ms-/,bs=/-([a-z])/g,br=function(d,c){return c.toUpperCase()};bv.fn=bv.prototype={jquery:bw,constructor:bv,length:0,toArray:function(){return bJ.call(this)},get:function(b){return null!=b?0>b?this[b+this.length]:this[b]:bJ.call(this)},pushStack:function(d){var c=bv.merge(this.constructor(),d);return c.prevObject=this,c},each:function(b){return bv.each(this,b)},map:function(b){return this.pushStack(bv.map(this,function(a,d){return b.call(a,d,a)}))},slice:function(){return this.pushStack(bJ.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var d=this.length,f=+e+(0>e?d:0);return this.pushStack(f>=0&&d>f?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:bG,sort:bN.sort,splice:bN.splice},bv.extend=bv.fn.extend=function(){var t,s,r,q,p,o,n=arguments[0]||{},m=1,l=arguments.length,k=!1;for("boolean"==typeof n&&(k=n,n=arguments[m]||{},m++),"object"==typeof n||bv.isFunction(n)||(n={}),m===l&&(n=this,m--);l>m;m++){if(null!=(t=arguments[m])){for(s in t){r=n[s],q=t[s],n!==q&&(k&&q&&(bv.isPlainObject(q)||(p=bv.isArray(q)))?(p?(p=!1,o=r&&bv.isArray(r)?r:[]):o=r&&bv.isPlainObject(r)?r:{},n[s]=bv.extend(k,o,q)):void 0!==q&&(n[s]=q))}}}return n},bv.extend({expando:"jQuery"+(bw+Math.random()).replace(/\D/g,""),isReady:!0,error:function(b){throw new Error(b)},noop:function(){},isFunction:function(b){return"function"===bv.type(b)},isArray:Array.isArray,isWindow:function(b){return null!=b&&b===b.window},isNumeric:function(d){var c=bv.type(d);return("number"===c||"string"===c)&&!isNaN(d-parseFloat(d))},isPlainObject:function(e){var d,f;return e&&"[object Object]"===bD.call(e)?(d=bL(e))?(f=bC.call(d,"constructor")&&d.constructor,"function"==typeof f&&bB.call(f)===bA):!0:!1},isEmptyObject:function(d){var c;for(c in d){return !1}return !0},type:function(b){return null==b?b+"":"object"==typeof b||"function"==typeof b?bE[bD.call(b)]||"object":typeof b},globalEval:function(b){by(b)},camelCase:function(b){return b.replace(bt,"ms-").replace(bs,br)},nodeName:function(d,c){return d.nodeName&&d.nodeName.toLowerCase()===c.toLowerCase()},each:function(f,e){var h,g=0;if(bq(f)){for(h=f.length;h>g;g++){if(e.call(f[g],g,f[g])===!1){break}}}else{for(g in f){if(e.call(f[g],g,f[g])===!1){break}}}return f},trim:function(b){return null==b?"":(b+"").replace(bu,"")},makeArray:function(e,d){var f=d||[];return null!=e&&(bq(Object(e))?bv.merge(f,"string"==typeof e?[e]:e):bG.call(f,e)),f},inArray:function(e,d,f){return null==d?-1:bF.call(d,e,f)},merge:function(g,f){for(var j=+f.length,i=0,h=g.length;j>i;i++){g[h++]=f[i]}return g.length=h,g},grep:function(j,i,p){for(var o,n=[],m=0,l=j.length,k=!p;l>m;m++){o=!i(j[m],m),o!==k&&n.push(j[m])}return n},map:function(i,g,n){var m,l,k=0,j=[];if(bq(i)){for(m=i.length;m>k;k++){l=g(i[k],k,n),null!=l&&j.push(l)}}else{for(k in i){l=g(i[k],k,n),null!=l&&j.push(l)}}return bH.apply([],j)},guid:1,proxy:function(g,f){var j,i,h;return"string"==typeof f&&(j=g[f],f=g,g=j),bv.isFunction(g)?(i=bJ.call(arguments,2),h=function(){return g.apply(f||this,i.concat(bJ.call(arguments)))},h.guid=g.guid=g.guid||bv.guid++,h):void 0},now:Date.now,support:bz}),"function"==typeof Symbol&&(bv.fn[Symbol.iterator]=bN[Symbol.iterator]),bv.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(d,c){bE["[object "+c+"]"]=c.toLowerCase()});function bq(e){var d=!!e&&"length" in e&&e.length,f=bv.type(e);return"function"===f||bv.isWindow(e)?!1:"array"===f||0===d||"number"==typeof d&&d>0&&d-1 in e}var bp=function(dl){var dk,dj,dh,dg,df,de,dd,db,c9,c8,c7,c6,c4,c3,c2,c1,c0,cZ,cY,cX="sizzle"+1*new Date,cW=dl.document,cV=0,cU=0,cT=dH(),cS=dH(),dR=dH(),dQ=function(d,c){return d===c&&(c7=!0),0},dP={}.hasOwnProperty,dO=[],dM=dO.pop,dL=dO.push,dK=dO.push,dJ=dO.slice,dI=function(f,e){for(var h=0,g=f.length;g>h;h++){if(f[h]===e){return h}}return -1},dG="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dF="[\\x20\\t\\r\\n\\f]",dE="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",dD="\\["+dF+"*("+dE+")(?:"+dF+"*([*^$|!~]?=)"+dF+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+dE+"))|)"+dF+"*\\]",dC=":("+dE+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dD+")*)|.*)\\)|)",dB=new RegExp(dF+"+","g"),dz=new RegExp("^"+dF+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dF+"+$","g"),dy=new RegExp("^"+dF+"*,"+dF+"*"),dx=new RegExp("^"+dF+"*([>+~]|"+dF+")"+dF+"*"),dw=new RegExp("="+dF+"*([^\\]'\"]*?)"+dF+"*\\]","g"),dv=new RegExp(dC),du=new RegExp("^"+dE+"$"),dt={ID:new RegExp("^#("+dE+")"),CLASS:new RegExp("^\\.("+dE+")"),TAG:new RegExp("^("+dE+"|[*])"),ATTR:new RegExp("^"+dD),PSEUDO:new RegExp("^"+dC),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dF+"*(even|odd|(([+-]|)(\\d*)n|)"+dF+"*(?:([+-]|)"+dF+"*(\\d+)|))"+dF+"*\\)|)","i"),bool:new RegExp("^(?:"+dG+")$","i"),needsContext:new RegExp("^"+dF+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dF+"*((?:-\\d)?\\d*)"+dF+"*\\)|)(?=[^-]|$)","i")},ds=/^(?:input|select|textarea|button)$/i,dr=/^h\d$/i,dq=/^[^{]+\{\s*\[native \w/,dp=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,dX=/[+~]/,dn=new RegExp("\\\\([\\da-f]{1,6}"+dF+"?|("+dF+")|.)","ig"),dU=function(f,e,h){var g="0x"+e-65536;return g!==g||h?e:0>g?String.fromCharCode(g+65536):String.fromCharCode(g>>10|55296,1023&g|56320)},dA=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,c5=function(d,c){return c?"\x00"===d?"\ufffd":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d},cO=function(){c6()},bb=dS(function(b){return b.disabled===!0},{dir:"parentNode",next:"legend"});try{dK.apply(dO=dJ.call(cW.childNodes),cW.childNodes),dO[cW.childNodes.length].nodeType}catch(d0){dK={apply:dO.length?function(d,c){dL.apply(d,dJ.call(c))}:function(f,e){var h=f.length,g=0;while(f[h++]=e[g++]){}f.length=h-1}}}function dV(z,v,u,t){var q,p,n,m,i,g,c,B=v&&v.ownerDocument,A=v?v.nodeType:9;if(u=u||[],"string"!=typeof z||!z||1!==A&&9!==A&&11!==A){return u}if(!t&&((v?v.ownerDocument||v:cW)!==c4&&c6(v),v=v||c4,c2)){if(11!==A&&(i=dp.exec(z))){if(q=i[1]){if(9===A){if(!(n=v.getElementById(q))){return u}if(n.id===q){return u.push(n),u}}else{if(B&&(n=B.getElementById(q))&&cY(v,n)&&n.id===q){return u.push(n),u}}}else{if(i[2]){return dK.apply(u,v.getElementsByTagName(z)),u}if((q=i[3])&&dj.getElementsByClassName&&v.getElementsByClassName){return dK.apply(u,v.getElementsByClassName(q)),u}}}if(dj.qsa&&!dR[z+" "]&&(!c1||!c1.test(z))){if(1!==A){B=v,c=z}else{if("object"!==v.nodeName.toLowerCase()){(m=v.getAttribute("id"))?m=m.replace(dA,c5):v.setAttribute("id",m=cX),g=de(z),p=g.length;while(p--){g[p]="#"+m+" "+dY(g[p])}c=g.join(","),B=dX.test(z)&&cM(v.parentNode)||v}}if(c){try{return dK.apply(u,B.querySelectorAll(c)),u}catch(y){}finally{m===cX&&v.removeAttribute("id")}}}}return db(z.replace(dz,"$1"),v,u,t)}function dH(){var d=[];function c(b,a){return d.push(b+" ")>dh.cacheLength&&delete c[d.shift()],c[b+" "]=a}return c}function dc(b){return b[cX]=!0,b}function cP(e){var d=c4.createElement("fieldset");try{return !!e(d)}catch(f){return !1}finally{d.parentNode&&d.parentNode.removeChild(d),d=null}}function cb(f,d){var h=f.split("|"),g=h.length;while(g--){dh.attrHandle[h[g]]=d}}function d1(f,e){var h=e&&f,g=h&&1===f.nodeType&&1===e.nodeType&&f.sourceIndex-e.sourceIndex;if(g){return g}if(h){while(h=h.nextSibling){if(h===e){return -1}}}return f?1:-1}function dW(b){return function(a){var d=a.nodeName.toLowerCase();return"input"===d&&a.type===b}}function dN(b){return function(a){var d=a.nodeName.toLowerCase();return("input"===d||"button"===d)&&a.type===b}}function di(b){return function(a){return"label" in a&&a.disabled===b||"form" in a&&a.disabled===b||"form" in a&&a.disabled===!1&&(a.isDisabled===b||a.isDisabled!==!b&&("label" in a||!bb(a))!==b)}}function cQ(b){return dc(function(a){return a=+a,dc(function(l,k){var j,i=b([],l.length,a),h=i.length;while(h--){l[j=i[h]]&&(l[j]=!(k[j]=l[j]))}})})}function cM(b){return b&&"undefined"!=typeof b.getElementsByTagName&&b}dj=dV.support={},df=dV.isXML=function(d){var c=d&&(d.ownerDocument||d).documentElement;return c?"HTML"!==c.nodeName:!1},c6=dV.setDocument=function(d){var c,h,f=d?d.ownerDocument||d:cW;return f!==c4&&9===f.nodeType&&f.documentElement?(c4=f,c3=c4.documentElement,c2=!df(c4),cW!==c4&&(h=c4.defaultView)&&h.top!==h&&(h.addEventListener?h.addEventListener("unload",cO,!1):h.attachEvent&&h.attachEvent("onunload",cO)),dj.attributes=cP(function(b){return b.className="i",!b.getAttribute("className")}),dj.getElementsByTagName=cP(function(b){return b.appendChild(c4.createComment("")),!b.getElementsByTagName("*").length}),dj.getElementsByClassName=dq.test(c4.getElementsByClassName),dj.getById=cP(function(b){return c3.appendChild(b).id=cX,!c4.getElementsByName||!c4.getElementsByName(cX).length}),dj.getById?(dh.find.ID=function(g,e){if("undefined"!=typeof e.getElementById&&c2){var i=e.getElementById(g);return i?[i]:[]}},dh.filter.ID=function(g){var e=g.replace(dn,dU);return function(b){return b.getAttribute("id")===e}}):(delete dh.find.ID,dh.filter.ID=function(g){var e=g.replace(dn,dU);return function(b){var i="undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id");return i&&i.value===e}}),dh.find.TAG=dj.getElementsByTagName?function(g,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(g):dj.qsa?e.querySelectorAll(g):void 0}:function(i,g){var m,l=[],k=0,j=g.getElementsByTagName(i);if("*"===i){while(m=j[k++]){1===m.nodeType&&l.push(m)}return l}return j},dh.find.CLASS=dj.getElementsByClassName&&function(g,e){return"undefined"!=typeof e.getElementsByClassName&&c2?e.getElementsByClassName(g):void 0},c0=[],c1=[],(dj.qsa=dq.test(c4.querySelectorAll))&&(cP(function(b){c3.appendChild(b).innerHTML="<a id='"+cX+"'></a><select id='"+cX+"-\r\\' msallowcapture=''><option selected=''></option></select>",b.querySelectorAll("[msallowcapture^='']").length&&c1.push("[*^$]="+dF+"*(?:''|\"\")"),b.querySelectorAll("[selected]").length||c1.push("\\["+dF+"*(?:value|"+dG+")"),b.querySelectorAll("[id~="+cX+"-]").length||c1.push("~="),b.querySelectorAll(":checked").length||c1.push(":checked"),b.querySelectorAll("a#"+cX+"+*").length||c1.push(".#.+[+~]")}),cP(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=c4.createElement("input");e.setAttribute("type","hidden"),g.appendChild(e).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&c1.push("name"+dF+"*[*^$|!~]?="),2!==g.querySelectorAll(":enabled").length&&c1.push(":enabled",":disabled"),c3.appendChild(g).disabled=!0,2!==g.querySelectorAll(":disabled").length&&c1.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),c1.push(",.*:")})),(dj.matchesSelector=dq.test(cZ=c3.matches||c3.webkitMatchesSelector||c3.mozMatchesSelector||c3.oMatchesSelector||c3.msMatchesSelector))&&cP(function(b){dj.disconnectedMatch=cZ.call(b,"*"),cZ.call(b,"[s!='']:x"),c0.push("!=",dC)}),c1=c1.length&&new RegExp(c1.join("|")),c0=c0.length&&new RegExp(c0.join("|")),c=dq.test(c3.compareDocumentPosition),cY=c||dq.test(c3.contains)?function(g,e){var j=9===g.nodeType?g.documentElement:g,i=e&&e.parentNode;return g===i||!(!i||1!==i.nodeType||!(j.contains?j.contains(i):g.compareDocumentPosition&&16&g.compareDocumentPosition(i)))}:function(g,e){if(e){while(e=e.parentNode){if(e===g){return !0}}}return !1},dQ=c?function(g,e){if(g===e){return c7=!0,0}var i=!g.compareDocumentPosition-!e.compareDocumentPosition;return i?i:(i=(g.ownerDocument||g)===(e.ownerDocument||e)?g.compareDocumentPosition(e):1,1&i||!dj.sortDetached&&e.compareDocumentPosition(g)===i?g===c4||g.ownerDocument===cW&&cY(cW,g)?-1:e===c4||e.ownerDocument===cW&&cY(cW,e)?1:c8?dI(c8,g)-dI(c8,e):0:4&i?-1:1)}:function(j,i){if(j===i){return c7=!0,0}var p,o=0,n=j.parentNode,m=i.parentNode,l=[j],k=[i];if(!n||!m){return j===c4?-1:i===c4?1:n?-1:m?1:c8?dI(c8,j)-dI(c8,i):0}if(n===m){return d1(j,i)}p=j;while(p=p.parentNode){l.unshift(p)}p=i;while(p=p.parentNode){k.unshift(p)}while(l[o]===k[o]){o++}return o?d1(l[o],k[o]):l[o]===cW?-1:k[o]===cW?1:0},c4):c4},dV.matches=function(d,c){return dV(d,null,null,c)},dV.matchesSelector=function(f,c){if((f.ownerDocument||f)!==c4&&c6(f),c=c.replace(dw,"='$1']"),dj.matchesSelector&&c2&&!dR[c+" "]&&(!c0||!c0.test(c))&&(!c1||!c1.test(c))){try{var h=cZ.call(f,c);if(h||dj.disconnectedMatch||f.document&&11!==f.document.nodeType){return h}}catch(g){}}return dV(c,c4,null,[f]).length>0},dV.contains=function(d,c){return(d.ownerDocument||d)!==c4&&c6(d),cY(d,c)},dV.attr=function(d,c){(d.ownerDocument||d)!==c4&&c6(d);var h=dh.attrHandle[c.toLowerCase()],g=h&&dP.call(dh.attrHandle,c.toLowerCase())?h(d,c,!c2):void 0;return void 0!==g?g:dj.attributes||!c2?d.getAttribute(c):(g=d.getAttributeNode(c))&&g.specified?g.value:null},dV.escape=function(b){return(b+"").replace(dA,c5)},dV.error=function(b){throw new Error("Syntax error, unrecognized expression: "+b)},dV.uniqueSort=function(g){var c,j=[],i=0,h=0;if(c7=!dj.detectDuplicates,c8=!dj.sortStable&&g.slice(0),g.sort(dQ),c7){while(c=g[h++]){c===g[h]&&(i=j.push(h))}while(i--){g.splice(j[i],1)}}return c8=null,g},dg=dV.getText=function(g){var e,j="",i=0,h=g.nodeType;if(h){if(1===h||9===h||11===h){if("string"==typeof g.textContent){return g.textContent}for(g=g.firstChild;g;g=g.nextSibling){j+=dg(g)}}else{if(3===h||4===h){return g.nodeValue}}}else{while(e=g[i++]){j+=dg(e)}}return j},dh=dV.selectors={cacheLength:50,createPseudo:dc,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){return b[1]=b[1].replace(dn,dU),b[3]=(b[3]||b[4]||b[5]||"").replace(dn,dU),"~="===b[2]&&(b[3]=" "+b[3]+" "),b.slice(0,4)},CHILD:function(b){return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||dV.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&dV.error(b[0]),b},PSEUDO:function(e){var d,f=!e[6]&&e[2];return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":f&&dv.test(f)&&(d=de(f,!0))&&(d=f.indexOf(")",f.length-d)-f.length)&&(e[0]=e[0].slice(0,d),e[2]=f.slice(0,d)),e.slice(0,3))}},filter:{TAG:function(d){var c=d.replace(dn,dU).toLowerCase();return"*"===d?function(){return !0}:function(b){return b.nodeName&&b.nodeName.toLowerCase()===c}},CLASS:function(d){var c=cT[d+" "];return c||(c=new RegExp("(^|"+dF+")"+d+"("+dF+"|$)"))&&cT(d,function(b){return c.test("string"==typeof b.className&&b.className||"undefined"!=typeof b.getAttribute&&b.getAttribute("class")||"")})},ATTR:function(e,d,f){return function(b){var a=dV.attr(b,e);return null==a?"!="===d:d?(a+="","="===d?a===f:"!="===d?a!==f:"^="===d?f&&0===a.indexOf(f):"*="===d?f&&a.indexOf(f)>-1:"$="===d?f&&a.slice(-f.length)===f:"~="===d?(" "+a.replace(dB," ")+" ").indexOf(f)>-1:"|="===d?a===f||a.slice(0,f.length+1)===f+"-":!1):!0}},CHILD:function(j,i,p,o,n){var m="nth"!==j.slice(0,3),l="last"!==j.slice(-4),k="of-type"===i;return 1===o&&0===n?function(b){return !!b.parentNode}:function(z,y,x){var w,v,u,h,g,f,e=m!==l?"nextSibling":"previousSibling",d=z.parentNode,a=k&&z.nodeName.toLowerCase(),B=!x&&!k,A=!1;if(d){if(m){while(e){h=z;while(h=h[e]){if(k?h.nodeName.toLowerCase()===a:1===h.nodeType){return !1}}f=e="only"===j&&!f&&"nextSibling"}return !0}if(f=[l?d.firstChild:d.lastChild],l&&B){h=d,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[j]||[],g=w[0]===cV&&w[1],A=g&&w[2],h=g&&d.childNodes[g];while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if(1===h.nodeType&&++A&&h===z){v[j]=[cV,g,A];break}}}else{if(B&&(h=z,u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),w=v[j]||[],g=w[0]===cV&&w[1],A=g),A===!1){while(h=++g&&h&&h[e]||(A=g=0)||f.pop()){if((k?h.nodeName.toLowerCase()===a:1===h.nodeType)&&++A&&(B&&(u=h[cX]||(h[cX]={}),v=u[h.uniqueID]||(u[h.uniqueID]={}),v[j]=[cV,A]),h===z)){break}}}}return A-=n,A===o||A%o===0&&A/o>=0}}},PSEUDO:function(f,d){var h,g=dh.pseudos[f]||dh.setFilters[f.toLowerCase()]||dV.error("unsupported pseudo: "+f);return g[cX]?g(d):g.length>1?(h=[f,f,"",d],dh.setFilters.hasOwnProperty(f.toLowerCase())?dc(function(b,k){var j,i=g(b,d),e=i.length;while(e--){j=dI(b,i[e]),b[j]=!(k[j]=i[e])}}):function(b){return g(b,0,h)}):g}},pseudos:{not:dc(function(f){var e=[],h=[],g=dd(f.replace(dz,"$1"));return g[cX]?dc(function(i,d,n,m){var l,k=g(i,null,m,[]),j=i.length;while(j--){(l=k[j])&&(i[j]=!(d[j]=l))}}):function(b,d,c){return e[0]=b,g(e,null,c,h),e[0]=null,!h.pop()}}),has:dc(function(b){return function(a){return dV(b,a).length>0}}),contains:dc(function(b){return b=b.replace(dn,dU),function(a){return(a.textContent||a.innerText||dg(a)).indexOf(b)>-1}}),lang:dc(function(b){return du.test(b||"")||dV.error("unsupported lang: "+b),b=b.replace(dn,dU).toLowerCase(),function(a){var d;do{if(d=c2?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang")){return d=d.toLowerCase(),d===b||0===d.indexOf(b+"-")}}while((a=a.parentNode)&&1===a.nodeType);return !1}}),target:function(a){var d=dl.location&&dl.location.hash;return d&&d.slice(1)===a.id},root:function(b){return b===c3},focus:function(b){return b===c4.activeElement&&(!c4.hasFocus||c4.hasFocus())&&!!(b.type||b.href||~b.tabIndex)},enabled:di(!1),disabled:di(!0),checked:function(d){var c=d.nodeName.toLowerCase();return"input"===c&&!!d.checked||"option"===c&&!!d.selected},selected:function(b){return b.parentNode&&b.parentNode.selectedIndex,b.selected===!0},empty:function(b){for(b=b.firstChild;b;b=b.nextSibling){if(b.nodeType<6){return !1}}return !0},parent:function(b){return !dh.pseudos.empty(b)},header:function(b){return dr.test(b.nodeName)},input:function(b){return ds.test(b.nodeName)},button:function(d){var c=d.nodeName.toLowerCase();return"input"===c&&"button"===d.type||"button"===c},text:function(d){var c;return"input"===d.nodeName.toLowerCase()&&"text"===d.type&&(null==(c=d.getAttribute("type"))||"text"===c.toLowerCase())},first:cQ(function(){return[0]}),last:cQ(function(d,c){return[c-1]}),eq:cQ(function(e,d,f){return[0>f?f+d:f]}),even:cQ(function(e,d){for(var f=0;d>f;f+=2){e.push(f)}return e}),odd:cQ(function(e,d){for(var f=1;d>f;f+=2){e.push(f)}return e}),lt:cQ(function(f,e,h){for(var g=0>h?h+e:h;--g>=0;){f.push(g)}return f}),gt:cQ(function(f,e,h){for(var g=0>h?h+e:h;++g<e;){f.push(g)}return f})}},dh.pseudos.nth=dh.pseudos.eq;for(dk in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){dh.pseudos[dk]=dW(dk)}for(dk in {submit:!0,reset:!0}){dh.pseudos[dk]=dN(dk)}function d2(){}d2.prototype=dh.filters=dh.pseudos,dh.setFilters=new d2,de=dV.tokenize=function(t,s){var r,q,p,o,n,m,l,d=cS[t+" "];if(d){return s?0:d.slice(0)}n=t,m=[],l=dh.preFilter;while(n){r&&!(q=dy.exec(n))||(q&&(n=n.slice(q[0].length)||n),m.push(p=[])),r=!1,(q=dx.exec(n))&&(r=q.shift(),p.push({value:r,type:q[0].replace(dz," ")}),n=n.slice(r.length));for(o in dh.filter){!(q=dt[o].exec(n))||l[o]&&!(q=l[o](q))||(r=q.shift(),p.push({value:r,type:o,matches:q}),n=n.slice(r.length))}if(!r){break}}return s?n.length:n?dV.error(t):cS(t,m).slice(0)};function dY(f){for(var e=0,h=f.length,g="";h>e;e++){g+=f[e].value}return g}function dS(j,i,p){var o=i.dir,n=i.next,m=n||o,l=p&&"parentNode"===m,k=cU++;return i.first?function(a,f,d){while(a=a[o]){if(1===a.nodeType||l){return j(a,f,d)}}}:function(d,q,h){var g,f,e,a=[cV,k];if(h){while(d=d[o]){if((1===d.nodeType||l)&&j(d,q,h)){return !0}}}else{while(d=d[o]){if(1===d.nodeType||l){if(e=d[cX]||(d[cX]={}),f=e[d.uniqueID]||(e[d.uniqueID]={}),n&&n===d.nodeName.toLowerCase()){d=d[o]||d}else{if((g=f[m])&&g[0]===cV&&g[1]===k){return a[2]=g[2]}if(f[m]=a,a[2]=j(d,q,h)){return !0}}}}}}}function dm(b){return b.length>1?function(a,h,g){var f=b.length;while(f--){if(!b[f](a,h,g)){return !1}}return !0}:b[0]}function cR(g,f,j){for(var i=0,h=f.length;h>i;i++){dV(g,f[i],j)}return j}function cN(t,s,r,q,p){for(var o,n=[],m=0,l=t.length,k=null!=s;l>m;m++){(o=t[m])&&(r&&!r(o,q,p)||(n.push(o),k&&s.push(m)))}return n}function ab(h,g,l,k,j,i){return k&&!k[cX]&&(k=ab(k)),j&&!j[cX]&&(j=ab(j,i)),dc(function(z,y,x,w){var v,u,t,s=[],e=[],d=y.length,c=z||cR(g||"*",x.nodeType?[x]:x,[]),b=!h||!z&&g?c:cN(c,s,h,x,w),a=l?j||(z?h:d||k)?[]:y:b;if(l&&l(b,a,x,w),k){v=cN(a,e),k(v,[],x,w),u=v.length;while(u--){(t=v[u])&&(a[e[u]]=!(b[e[u]]=t))}}if(z){if(j||h){if(j){v=[],u=a.length;while(u--){(t=a[u])&&v.push(b[u]=t)}j(null,a=[],v,w)}u=a.length;while(u--){(t=a[u])&&(v=j?dI(z,t):s[u])>-1&&(z[v]=!(y[v]=t))}}}else{a=cN(a===y?a.splice(d,a.length):a),j?j(null,y,a,w):dK.apply(y,a)}})}function dZ(v){for(var u,t,s,r=v.length,q=dh.relative[v[0].type],p=q||dh.relative[" "],o=q?1:0,n=dS(function(b){return b===u},p,!0),j=dS(function(b){return dI(u,b)>-1},p,!0),d=[function(b,h,g){var f=!q&&(g||h!==c9)||((u=h).nodeType?n(b,h,g):j(b,h,g));return u=null,f}];r>o;o++){if(t=dh.relative[v[o].type]){d=[dS(dm(d),t)]}else{if(t=dh.filter[v[o].type].apply(null,v[o].matches),t[cX]){for(s=++o;r>s;s++){if(dh.relative[v[s].type]){break}}return ab(o>1&&dm(d),o>1&&dY(v.slice(0,o-1).concat({value:" "===v[o-2].type?"*":""})).replace(dz,"$1"),t,s>o&&dZ(v.slice(o,s)),r>s&&dZ(v=v.slice(s)),r>s&&dY(v))}d.push(t)}}return dm(d)}function dT(g,d){var j=d.length>0,i=g.length>0,h=function(A,w,p,n,m){var e,c,b,a=0,H="0",G=A&&[],F=[],E=c9,D=A||i&&dh.find.TAG("*",m),C=cV+=null==E?1:Math.random()||0.1,B=D.length;for(m&&(c9=w===c4||w||m);H!==B&&null!=(e=D[H]);H++){if(i&&e){c=0,w||e.ownerDocument===c4||(c6(e),p=!c2);while(b=g[c++]){if(b(e,w||c4,p)){n.push(e);break}}m&&(cV=C)}j&&((e=!b&&e)&&a--,A&&G.push(e))}if(a+=H,j&&H!==a){c=0;while(b=d[c++]){b(G,F,w,p)}if(A){if(a>0){while(H--){G[H]||F[H]||(F[H]=dM.call(n))}}F=cN(F)}dK.apply(n,F),m&&!A&&F.length>0&&a+d.length>1&&dV.uniqueSort(n)}return m&&(cV=C,c9=E),G};return j?dc(h):h}return dd=dV.compile=function(h,g){var l,k=[],j=[],i=dR[h+" "];if(!i){g||(g=de(h)),l=g.length;while(l--){i=dZ(g[l]),i[cX]?k.push(i):j.push(i)}i=dR(h,dT(j,k)),i.selector=h}return i},db=dV.select=function(v,u,t,s){var r,q,p,h,g,d="function"==typeof v&&v,c=!s&&de(v=d.selector||v);if(t=t||[],1===c.length){if(q=c[0]=c[0].slice(0),q.length>2&&"ID"===(p=q[0]).type&&dj.getById&&9===u.nodeType&&c2&&dh.relative[q[1].type]){if(u=(dh.find.ID(p.matches[0].replace(dn,dU),u)||[])[0],!u){return t}d&&(u=u.parentNode),v=v.slice(q.shift().value.length)}r=dt.needsContext.test(v)?0:q.length;while(r--){if(p=q[r],dh.relative[h=p.type]){break}if((g=dh.find[h])&&(s=g(p.matches[0].replace(dn,dU),dX.test(q[0].type)&&cM(u.parentNode)||u))){if(q.splice(r,1),v=s.length&&dY(q),!v){return dK.apply(t,s),t}break}}}return(d||dd(v,c))(s,u,!c2,t,!u||dX.test(v)&&cM(u.parentNode)||u),t},dj.sortStable=cX.split("").sort(dQ).join("")===cX,dj.detectDuplicates=!!c7,c6(),dj.sortDetached=cP(function(b){return 1&b.compareDocumentPosition(c4.createElement("fieldset"))}),cP(function(b){return b.innerHTML="<a href='#'></a>","#"===b.firstChild.getAttribute("href")})||cb("type|href|height|width",function(e,d,f){return f?void 0:e.getAttribute(d,"type"===d.toLowerCase()?1:2)}),dj.attributes&&cP(function(b){return b.innerHTML="<input/>",b.firstChild.setAttribute("value",""),""===b.firstChild.getAttribute("value")})||cb("value",function(e,d,f){return f||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),cP(function(b){return null==b.getAttribute("disabled")})||cb(dG,function(f,e,h){var g;return h?void 0:f[e]===!0?e.toLowerCase():(g=f.getAttributeNode(e))&&g.specified?g.value:null}),dV}(bP);bv.find=bp,bv.expr=bp.selectors,bv.expr[":"]=bv.expr.pseudos,bv.uniqueSort=bv.unique=bp.uniqueSort,bv.text=bp.getText,bv.isXMLDoc=bp.isXML,bv.contains=bp.contains,bv.escapeSelector=bp.escape;var bo=function(g,f,j){var i=[],h=void 0!==j;while((g=g[f])&&9!==g.nodeType){if(1===g.nodeType){if(h&&bv(g).is(j)){break}i.push(g)}}return i},bm=function(e,d){for(var f=[];e;e=e.nextSibling){1===e.nodeType&&e!==d&&f.push(e)}return f},cp=bv.expr.match.needsContext,co=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,cn=/^.[^:#\[\.,]*$/;function cm(e,d,f){if(bv.isFunction(d)){return bv.grep(e,function(b,c){return !!d.call(b,c,b)!==f})}if(d.nodeType){return bv.grep(e,function(b){return b===d!==f})}if("string"==typeof d){if(cn.test(d)){return bv.filter(d,e,f)}d=bv.filter(d,e)}return bv.grep(e,function(b){return bF.call(d,b)>-1!==f&&1===b.nodeType})}bv.filter=function(f,e,h){var g=e[0];return h&&(f=":not("+f+")"),1===e.length&&1===g.nodeType?bv.find.matchesSelector(g,f)?[g]:[]:bv.find.matches(f,bv.grep(e,function(b){return 1===b.nodeType}))},bv.fn.extend({find:function(g){var f,j,i=this.length,h=this;if("string"!=typeof g){return this.pushStack(bv(g).filter(function(){for(f=0;i>f;f++){if(bv.contains(h[f],this)){return !0}}}))}for(j=this.pushStack([]),f=0;i>f;f++){bv.find(g,h[f],j)}return i>1?bv.uniqueSort(j):j},filter:function(b){return this.pushStack(cm(this,b||[],!1))},not:function(b){return this.pushStack(cm(this,b||[],!0))},is:function(b){return !!cm(this,"string"==typeof b&&cp.test(b)?bv(b):b||[],!1).length}});var cl,ck=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ci=bv.fn.init=function(g,d,j){var i,h;if(!g){return this}if(j=j||cl,"string"==typeof g){if(i="<"===g[0]&&">"===g[g.length-1]&&g.length>=3?[null,g,null]:ck.exec(g),!i||!i[1]&&d){return !d||d.jquery?(d||j).find(g):this.constructor(d).find(g)}if(i[1]){if(d=d instanceof bv?d[0]:d,bv.merge(this,bv.parseHTML(i[1],d&&d.nodeType?d.ownerDocument||d:bM,!0)),co.test(i[1])&&bv.isPlainObject(d)){for(i in d){bv.isFunction(this[i])?this[i](d[i]):this.attr(i,d[i])}}return this}return h=bM.getElementById(i[2]),h&&(this[0]=h,this.length=1),this}return g.nodeType?(this[0]=g,this.length=1,this):bv.isFunction(g)?void 0!==j.ready?j.ready(g):g(bv):bv.makeArray(g,this)};ci.prototype=bv.fn,cl=bv(bM);var cg=/^(?:parents|prev(?:Until|All))/,cf={children:!0,contents:!0,next:!0,prev:!0};bv.fn.extend({has:function(e){var d=bv(e,this),f=d.length;return this.filter(function(){for(var b=0;f>b;b++){if(bv.contains(this,d[b])){return !0}}})},closest:function(i,h){var n,m=0,l=this.length,k=[],j="string"!=typeof i&&bv(i);if(!cp.test(i)){for(;l>m;m++){for(n=this[m];n&&n!==h;n=n.parentNode){if(n.nodeType<11&&(j?j.index(n)>-1:1===n.nodeType&&bv.find.matchesSelector(n,i))){k.push(n);break}}}}return this.pushStack(k.length>1?bv.uniqueSort(k):k)},index:function(b){return b?"string"==typeof b?bF.call(bv(b),this[0]):bF.call(this,b.jquery?b[0]:b):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(d,c){return this.pushStack(bv.uniqueSort(bv.merge(this.get(),bv(d,c))))},addBack:function(b){return this.add(null==b?this.prevObject:this.prevObject.filter(b))}});function ce(d,c){while((d=d[c])&&1!==d.nodeType){}return d}bv.each({parent:function(d){var c=d.parentNode;return c&&11!==c.nodeType?c:null},parents:function(b){return bo(b,"parentNode")},parentsUntil:function(e,d,f){return bo(e,"parentNode",f)},next:function(b){return ce(b,"nextSibling")},prev:function(b){return ce(b,"previousSibling")},nextAll:function(b){return bo(b,"nextSibling")},prevAll:function(b){return bo(b,"previousSibling")},nextUntil:function(e,d,f){return bo(e,"nextSibling",f)},prevUntil:function(e,d,f){return bo(e,"previousSibling",f)},siblings:function(b){return bm((b.parentNode||{}).firstChild,b)},children:function(b){return bm(b.firstChild)},contents:function(b){return b.contentDocument||bv.merge([],b.childNodes)}},function(d,c){bv.fn[d]=function(f,b){var a=bv.map(this,c,f);return"Until"!==d.slice(-5)&&(b=f),b&&"string"==typeof b&&(a=bv.filter(b,a)),this.length>1&&(cf[d]||bv.uniqueSort(a),cg.test(d)&&a.reverse()),this.pushStack(a)}});var cd=/\S+/g;function cc(d){var c={};return bv.each(d.match(cd)||[],function(b,e){c[e]=!0}),c}bv.Callbacks=function(t){t="string"==typeof t?cc(t):bv.extend({},t);var s,r,q,p,o=[],n=[],m=-1,l=function(){for(p=t.once,q=s=!0;n.length;m=-1){r=n.shift();while(++m<o.length){o[m].apply(r[0],r[1])===!1&&t.stopOnFalse&&(m=o.length,r=!1)}}t.memory||(r=!1),s=!1,p&&(o=r?[]:"")},k={add:function(){return o&&(r&&!s&&(m=o.length-1,n.push(r)),function a(c){bv.each(c,function(d,e){bv.isFunction(e)?t.unique&&k.has(e)||o.push(e):e&&e.length&&"string"!==bv.type(e)&&a(e)})}(arguments),r&&!s&&l()),this},remove:function(){return bv.each(arguments,function(e,d){var f;while((f=bv.inArray(d,o,f))>-1){o.splice(f,1),m>=f&&m--}}),this},has:function(b){return b?bv.inArray(b,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return p=n=[],o=r="",this},disabled:function(){return !o},lock:function(){return p=n=[],r||s||(o=r=""),this},locked:function(){return !!p},fireWith:function(b,d){return p||(d=d||[],d=[b,d.slice?d.slice():d],n.push(d),s||l()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return !!q}};return k};function b9(b){return b}function b8(b){throw b}function b7(f,e,h){var g;try{f&&bv.isFunction(g=f.promise)?g.call(f).done(e).fail(h):f&&bv.isFunction(g=f.then)?g.call(f,e,h):e.call(void 0,f)}catch(f){h.call(void 0,f)}}bv.extend({Deferred:function(a){var j=[["notify","progress",bv.Callbacks("memory"),bv.Callbacks("memory"),2],["resolve","done",bv.Callbacks("once memory"),bv.Callbacks("once memory"),0,"resolved"],["reject","fail",bv.Callbacks("once memory"),bv.Callbacks("once memory"),1,"rejected"]],i="pending",h={state:function(){return i},always:function(){return g.done(arguments).fail(arguments),this},"catch":function(b){return h.then(null,b)},pipe:function(){var b=arguments;return bv.Deferred(function(c){bv.each(j,function(l,k){var f=bv.isFunction(b[k[4]])&&b[k[4]];g[k[1]](function(){var d=f&&f.apply(this,arguments);d&&bv.isFunction(d.promise)?d.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[k[0]+"With"](this,f?[d]:arguments)})}),b=null}).promise()},then:function(c,n,m){var l=0;function k(f,q,p,o){return function(){var r=this,e=arguments,d=function(){var s,t;if(!(l>f)){if(s=p.apply(r,e),s===q.promise()){throw new TypeError("Thenable self-resolution")}t=s&&("object"==typeof s||"function"==typeof s)&&s.then,bv.isFunction(t)?o?t.call(s,k(l,q,b9,o),k(l,q,b8,o)):(l++,t.call(s,k(l,q,b9,o),k(l,q,b8,o),k(l,q,b9,q.notifyWith))):(p!==b9&&(r=void 0,e=[s]),(o||q.resolveWith)(r,e))}},b=o?d:function(){try{d()}catch(s){bv.Deferred.exceptionHook&&bv.Deferred.exceptionHook(s,b.stackTrace),f+1>=l&&(p!==b8&&(r=void 0,e=[s]),q.rejectWith(r,e))}};f?b():(bv.Deferred.getStackHook&&(b.stackTrace=bv.Deferred.getStackHook()),bP.setTimeout(b))}}return bv.Deferred(function(b){j[0][3].add(k(0,b,bv.isFunction(m)?m:b9,b.notifyWith)),j[1][3].add(k(0,b,bv.isFunction(c)?c:b9)),j[2][3].add(k(0,b,bv.isFunction(n)?n:b8))}).promise()},promise:function(b){return null!=b?bv.extend(b,h):h}},g={};return bv.each(j,function(d,c){var f=c[2],e=c[5];h[c[1]]=f.add,e&&f.add(function(){i=e},j[3-d][2].disable,j[0][2].lock),f.add(c[3].fire),g[c[0]]=function(){return g[c[0]+"With"](this===g?void 0:this,arguments),this},g[c[0]+"With"]=f.fireWith}),h.promise(g),a&&a.call(g,g),g},when:function(i){var f=arguments.length,n=f,m=Array(n),l=bJ.call(arguments),k=bv.Deferred(),j=function(b){return function(a){m[b]=this,l[b]=arguments.length>1?bJ.call(arguments):a,--f||k.resolveWith(m,l)}};if(1>=f&&(b7(i,k.done(j(n)).resolve,k.reject),"pending"===k.state()||bv.isFunction(l[n]&&l[n].then))){return k.then()}while(n--){b7(l[n],j(n),k.reject)}return k.promise()}});var b6=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;bv.Deferred.exceptionHook=function(a,d){bP.console&&bP.console.warn&&a&&b6.test(a.name)&&bP.console.warn("jQuery.Deferred exception: "+a.message,a.stack,d)};var b5=bv.Deferred();bv.fn.ready=function(b){return b5.then(b),this},bv.extend({isReady:!1,readyWait:1,holdReady:function(b){b?bv.readyWait++:bv.ready(!0)},ready:function(b){(b===!0?--bv.readyWait:bv.isReady)||(bv.isReady=!0,b!==!0&&--bv.readyWait>0||b5.resolveWith(bM,[bv]))}}),bv.ready.then=b5.then;function b3(){bM.removeEventListener("DOMContentLoaded",b3),bP.removeEventListener("load",b3),bv.ready()}"complete"===bM.readyState||"loading"!==bM.readyState&&!bM.documentElement.doScroll?bP.setTimeout(bv.ready):(bM.addEventListener("DOMContentLoaded",b3),bP.addEventListener("load",b3));var b2=function(t,s,r,q,p,o,n){var m=0,l=t.length,k=null==r;if("object"===bv.type(r)){p=!0;for(m in r){b2(t,s,m,r[m],!0,o,n)}}else{if(void 0!==q&&(p=!0,bv.isFunction(q)||(n=!0),k&&(n?(s.call(t,q),s=null):(k=s,s=function(e,d,f){return k.call(bv(e),f)})),s)){for(;l>m;m++){s(t[m],r,n?q:q.call(t[m],m,s(t[m],r)))}}}return p?t:k?s.call(t):l?s(t[0],r):o},b1=function(b){return 1===b.nodeType||9===b.nodeType||!+b.nodeType};function b0(){this.expando=bv.expando+b0.uid++}b0.uid=1,b0.prototype={cache:function(d){var c=d[this.expando];return c||(c={},b1(d)&&(d.nodeType?d[this.expando]=c:Object.defineProperty(d,this.expando,{value:c,configurable:!0}))),c},set:function(g,f,j){var i,h=this.cache(g);if("string"==typeof f){h[bv.camelCase(f)]=j}else{for(i in f){h[bv.camelCase(i)]=f[i]}}return h},get:function(d,c){return void 0===c?this.cache(d):d[this.expando]&&d[this.expando][bv.camelCase(c)]},access:function(e,d,f){return void 0===d||d&&"string"==typeof d&&void 0===f?this.get(e,d):(this.set(e,d,f),void 0!==f?f:d)},remove:function(f,e){var h,g=f[this.expando];if(void 0!==g){if(void 0!==e){bv.isArray(e)?e=e.map(bv.camelCase):(e=bv.camelCase(e),e=e in g?[e]:e.match(cd)||[]),h=e.length;while(h--){delete g[e[h]]}}(void 0===e||bv.isEmptyObject(g))&&(f.nodeType?f[this.expando]=void 0:delete f[this.expando])}},hasData:function(d){var c=d[this.expando];return void 0!==c&&!bv.isEmptyObject(c)}};var bZ=new b0,bY=new b0,bX=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bW=/[A-Z]/g;function bV(g,f,j){var i;if(void 0===j&&1===g.nodeType){if(i="data-"+f.replace(bW,"-$&").toLowerCase(),j=g.getAttribute(i),"string"==typeof j){try{j="true"===j?!0:"false"===j?!1:"null"===j?null:+j+""===j?+j:bX.test(j)?JSON.parse(j):j}catch(h){}bY.set(g,f,j)}else{j=void 0}}return j}bv.extend({hasData:function(b){return bY.hasData(b)||bZ.hasData(b)},data:function(e,d,f){return bY.access(e,d,f)},removeData:function(d,c){bY.remove(d,c)},_data:function(e,d,f){return bZ.access(e,d,f)},_removeData:function(d,c){bZ.remove(d,c)}}),bv.fn.extend({data:function(i,h){var n,m,l,k=this[0],j=k&&k.attributes;if(void 0===i){if(this.length&&(l=bY.get(k),1===k.nodeType&&!bZ.get(k,"hasDataAttrs"))){n=j.length;while(n--){j[n]&&(m=j[n].name,0===m.indexOf("data-")&&(m=bv.camelCase(m.slice(5)),bV(k,m,l[m])))}bZ.set(k,"hasDataAttrs",!0)}return l}return"object"==typeof i?this.each(function(){bY.set(this,i)}):b2(this,function(a){var d;if(k&&void 0===a){if(d=bY.get(k,i),void 0!==d){return d}if(d=bV(k,i),void 0!==d){return d}}else{this.each(function(){bY.set(this,i,a)})}},null,h,arguments.length>1,null,!0)},removeData:function(b){return this.each(function(){bY.remove(this,b)})}}),bv.extend({queue:function(f,e,h){var g;return f?(e=(e||"fx")+"queue",g=bZ.get(f,e),h&&(!g||bv.isArray(h)?g=bZ.access(f,e,bv.makeArray(h)):g.push(h)),g||[]):void 0},dequeue:function(i,h){h=h||"fx";var n=bv.queue(i,h),m=n.length,l=n.shift(),k=bv._queueHooks(i,h),j=function(){bv.dequeue(i,h)};"inprogress"===l&&(l=n.shift(),m--),l&&("fx"===h&&n.unshift("inprogress"),delete k.stop,l.call(i,j,k)),!m&&k&&k.empty.fire()},_queueHooks:function(e,d){var f=d+"queueHooks";return bZ.get(e,f)||bZ.access(e,f,{empty:bv.Callbacks("once memory").add(function(){bZ.remove(e,[d+"queue",f])})})}}),bv.fn.extend({queue:function(e,d){var f=2;return"string"!=typeof e&&(d=e,e="fx",f--),arguments.length<f?bv.queue(this[0],e):void 0===d?this:this.each(function(){var a=bv.queue(this,e,d);bv._queueHooks(this,e),"fx"===e&&"inprogress"!==a[0]&&bv.dequeue(this,e)})},dequeue:function(b){return this.each(function(){bv.dequeue(this,b)})},clearQueue:function(b){return this.queue(b||"fx",[])},promise:function(j,i){var p,o=1,n=bv.Deferred(),m=this,l=this.length,k=function(){--o||n.resolveWith(m,[m])};"string"!=typeof j&&(i=j,j=void 0),j=j||"fx";while(l--){p=bZ.get(m[l],j+"queueHooks"),p&&p.empty&&(o++,p.empty.add(k))}return k(),n.promise(i)}});var cB=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,bQ=new RegExp("^(?:([+-])=|)("+cB+")([a-z%]*)$","i"),cA=["Top","Right","Bottom","Left"],cj=function(d,c){return d=c||d,"none"===d.style.display||""===d.style.display&&bv.contains(d.ownerDocument,d)&&"none"===bv.css(d,"display")},bK=function(i,h,n,m){var l,k,j={};for(k in h){j[k]=i.style[k],i.style[k]=h[k]}l=n.apply(i,m||[]);for(k in h){i.style[k]=j[k]}return l};function bi(v,u,t,s){var r,q=1,p=20,o=s?function(){return s.cur()}:function(){return bv.css(v,u,"")},n=o(),m=t&&t[3]||(bv.cssNumber[u]?"":"px"),l=(bv.cssNumber[u]||"px"!==m&&+n)&&bQ.exec(bv.css(v,u));if(l&&l[3]!==m){m=m||l[3],t=t||[],l=+n||1;do{q=q||".5",l/=q,bv.style(v,u,l+m)}while(q!==(q=o()/n)&&1!==q&&--p)}return t&&(l=+l||+n||0,r=t[1]?l+(t[1]+1)*t[2]:+t[2],s&&(s.unit=m,s.start=l,s.end=r)),r}var a9={};function a2(g){var f,j=g.ownerDocument,i=g.nodeName,h=a9[i];return h?h:(f=j.body.appendChild(j.createElement(i)),h=bv.css(f,"display"),f.parentNode.removeChild(f),"none"===h&&(h="block"),a9[i]=h,h)}function aT(i,h){for(var n,m,l=[],k=0,j=i.length;j>k;k++){m=i[k],m.style&&(n=m.style.display,h?("none"===n&&(l[k]=bZ.get(m,"display")||null,l[k]||(m.style.display="")),""===m.style.display&&cj(m)&&(l[k]=a2(m))):"none"!==n&&(l[k]="none",bZ.set(m,"display",n)))}for(k=0;j>k;k++){null!=l[k]&&(i[k].style.display=l[k])}return i}bv.fn.extend({show:function(){return aT(this,!0)},hide:function(){return aT(this)},toggle:function(b){return"boolean"==typeof b?b?this.show():this.hide():this.each(function(){cj(this)?bv(this).show():bv(this).hide()})}});var aL=/^(?:checkbox|radio)$/i,aD=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,av=/^$|\/(?:java|ecma)script/i,am={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};am.optgroup=am.option,am.tbody=am.tfoot=am.colgroup=am.caption=am.thead,am.th=am.td;function ad(e,d){var f="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(d||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(d||"*"):[];return void 0===d||d&&bv.nodeName(e,d)?bv.merge([e],f):f}function cF(f,e){for(var h=0,g=f.length;g>h;h++){bZ.set(f[h],"globalEval",!e||bZ.get(e[h],"globalEval"))}}var cu=/<|&#?\w+;/;function bU(D,C,B,A,z){for(var y,x,w,v,u,t,s=C.createDocumentFragment(),r=[],q=0,p=D.length;p>q;q++){if(y=D[q],y||0===y){if("object"===bv.type(y)){bv.merge(r,y.nodeType?[y]:y)}else{if(cu.test(y)){x=x||s.appendChild(C.createElement("div")),w=(aD.exec(y)||["",""])[1].toLowerCase(),v=am[w]||am._default,x.innerHTML=v[1]+bv.htmlPrefilter(y)+v[2],t=v[0];while(t--){x=x.lastChild}bv.merge(r,x.childNodes),x=s.firstChild,x.textContent=""}else{r.push(C.createTextNode(y))}}}}s.textContent="",q=0;while(y=r[q++]){if(A&&bv.inArray(y,A)>-1){z&&z.push(y)}else{if(u=bv.contains(y.ownerDocument,y),x=ad(s.appendChild(y),"script"),u&&cF(x),B){t=0;while(y=x[t++]){av.test(y.type||"")&&B.push(y)}}}}return s}!function(){var e=bM.createDocumentFragment(),d=e.appendChild(bM.createElement("div")),f=bM.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),d.appendChild(f),bz.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,d.innerHTML="<textarea>x</textarea>",bz.noCloneChecked=!!d.cloneNode(!0).lastChild.defaultValue}();var bn=bM.documentElement,bf=/^key/,a6=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,aX=/^([^.]*)(?:\.(.+)|)/;function aP(){return !0}function aH(){return !1}function az(){try{return bM.activeElement}catch(b){}}function aq(j,i,p,o,n,m){var l,k;if("object"==typeof i){"string"!=typeof p&&(o=o||p,p=void 0);for(k in i){aq(j,k,p,o,i[k],m)}return j}if(null==o&&null==n?(n=p,o=p=void 0):null==n&&("string"==typeof p?(n=o,o=void 0):(n=o,o=p,p=void 0)),n===!1){n=aH}else{if(!n){return j}}return 1===m&&(l=n,n=function(b){return bv().off(b),l.apply(this,arguments)},n.guid=l.guid||(l.guid=bv.guid++)),j.each(function(){bv.event.add(this,i,n,o,p)})}bv.event={global:{},add:function(H,G,F,E,D){var C,B,A,z,y,x,w,v,u,t,s,r=bZ.get(H);if(r){F.handler&&(C=F,F=C.handler,D=C.selector),D&&bv.find.matchesSelector(bn,D),F.guid||(F.guid=bv.guid++),(z=r.events)||(z=r.events={}),(B=r.handle)||(B=r.handle=function(a){return"undefined"!=typeof bv&&bv.event.triggered!==a.type?bv.event.dispatch.apply(H,arguments):void 0}),G=(G||"").match(cd)||[""],y=G.length;while(y--){A=aX.exec(G[y])||[],u=s=A[1],t=(A[2]||"").split(".").sort(),u&&(w=bv.event.special[u]||{},u=(D?w.delegateType:w.bindType)||u,w=bv.event.special[u]||{},x=bv.extend({type:u,origType:s,data:E,handler:F,guid:F.guid,selector:D,needsContext:D&&bv.expr.match.needsContext.test(D),namespace:t.join(".")},C),(v=z[u])||(v=z[u]=[],v.delegateCount=0,w.setup&&w.setup.call(H,E,t,B)!==!1||H.addEventListener&&H.addEventListener(u,B)),w.add&&(w.add.call(H,x),x.handler.guid||(x.handler.guid=F.guid)),D?v.splice(v.delegateCount++,0,x):v.push(x),bv.event.global[u]=!0)}}},remove:function(H,G,F,E,D){var C,B,A,z,y,x,w,v,u,t,s,r=bZ.hasData(H)&&bZ.get(H);if(r&&(z=r.events)){G=(G||"").match(cd)||[""],y=G.length;while(y--){if(A=aX.exec(G[y])||[],u=s=A[1],t=(A[2]||"").split(".").sort(),u){w=bv.event.special[u]||{},u=(E?w.delegateType:w.bindType)||u,v=z[u]||[],A=A[2]&&new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"),B=C=v.length;while(C--){x=v[C],!D&&s!==x.origType||F&&F.guid!==x.guid||A&&!A.test(x.namespace)||E&&E!==x.selector&&("**"!==E||!x.selector)||(v.splice(C,1),x.selector&&v.delegateCount--,w.remove&&w.remove.call(H,x))}B&&!v.length&&(w.teardown&&w.teardown.call(H,t,r.handle)!==!1||bv.removeEvent(H,u,r.handle),delete z[u])}else{for(u in z){bv.event.remove(H,u+G[y],F,E,!0)}}}bv.isEmptyObject(z)&&bZ.remove(H,"handle events")}},dispatch:function(v){var u=bv.event.fix(v),t,s,r,q,p,o,n=new Array(arguments.length),m=(bZ.get(this,"events")||{})[u.type]||[],l=bv.event.special[u.type]||{};for(n[0]=u,t=1;t<arguments.length;t++){n[t]=arguments[t]}if(u.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,u)!==!1){o=bv.event.handlers.call(this,u,m),t=0;while((q=o[t++])&&!u.isPropagationStopped()){u.currentTarget=q.elem,s=0;while((p=q.handlers[s++])&&!u.isImmediatePropagationStopped()){u.rnamespace&&!u.rnamespace.test(p.namespace)||(u.handleObj=p,u.data=p.data,r=((bv.event.special[p.origType]||{}).handle||p.handler).apply(q.elem,n),void 0!==r&&(u.result=r)===!1&&(u.preventDefault(),u.stopPropagation()))}}return l.postDispatch&&l.postDispatch.call(this,u),u.result}},handlers:function(r,q){var p,o,n,m,l=[],k=q.delegateCount,j=r.target;if(k&&j.nodeType&&("click"!==r.type||isNaN(r.button)||r.button<1)){for(;j!==this;j=j.parentNode||this){if(1===j.nodeType&&(j.disabled!==!0||"click"!==r.type)){for(o=[],p=0;k>p;p++){m=q[p],n=m.selector+" ",void 0===o[n]&&(o[n]=m.needsContext?bv(n,this).index(j)>-1:bv.find(n,this,null,[j]).length),o[n]&&o.push(m)}o.length&&l.push({elem:j,handlers:o})}}}return k<q.length&&l.push({elem:this,handlers:q.slice(k)}),l},addProp:function(d,c){Object.defineProperty(bv.Event.prototype,d,{enumerable:!0,configurable:!0,get:bv.isFunction(c)?function(){return this.originalEvent?c(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[d]:void 0},set:function(a){Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(b){return b[bv.expando]?b:new bv.Event(b)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==az()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===az()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&bv.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(b){return bv.nodeName(b.target,"a")}},beforeunload:{postDispatch:function(b){void 0!==b.result&&b.originalEvent&&(b.originalEvent.returnValue=b.result)}}}},bv.removeEvent=function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f)},bv.Event=function(d,c){return this instanceof bv.Event?(d&&d.type?(this.originalEvent=d,this.type=d.type,this.isDefaultPrevented=d.defaultPrevented||void 0===d.defaultPrevented&&d.returnValue===!1?aP:aH,this.target=d.target&&3===d.target.nodeType?d.target.parentNode:d.target,this.currentTarget=d.currentTarget,this.relatedTarget=d.relatedTarget):this.type=d,c&&bv.extend(this,c),this.timeStamp=d&&d.timeStamp||bv.now(),void (this[bv.expando]=!0)):new bv.Event(d,c)},bv.Event.prototype={constructor:bv.Event,isDefaultPrevented:aH,isPropagationStopped:aH,isImmediatePropagationStopped:aH,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;this.isDefaultPrevented=aP,b&&!this.isSimulated&&b.preventDefault()},stopPropagation:function(){var b=this.originalEvent;this.isPropagationStopped=aP,b&&!this.isSimulated&&b.stopPropagation()},stopImmediatePropagation:function(){var b=this.originalEvent;this.isImmediatePropagationStopped=aP,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()}},bv.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(d){var c=d.button;return null==d.which&&bf.test(d.type)?null!=d.charCode?d.charCode:d.keyCode:!d.which&&void 0!==c&&a6.test(d.type)?1&c?1:2&c?3:4&c?2:0:d.which}},bv.event.addProp),bv.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(d,c){bv.event.special[d]={delegateType:c,bindType:c,handle:function(b){var j,i=this,h=b.relatedTarget,g=b.handleObj;return h&&(h===i||bv.contains(i,h))||(b.type=g.origType,j=g.handler.apply(this,arguments),b.type=c),j}}}),bv.fn.extend({on:function(f,e,h,g){return aq(this,f,e,h,g)},one:function(f,e,h,g){return aq(this,f,e,h,g,1)},off:function(g,f,j){var i,h;if(g&&g.preventDefault&&g.handleObj){return i=g.handleObj,bv(g.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if("object"==typeof g){for(h in g){this.off(h,f,g[h])}return this}return f!==!1&&"function"!=typeof f||(j=f,f=void 0),j===!1&&(j=aH),this.each(function(){bv.event.remove(this,g,j,f)})}});var ah=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,cJ=/<script|<style|<link/i,cy=/checked\s*(?:[^=]|=\s*.checked.)/i,a0=/^true\/(.*)/,aR=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function aJ(d,c){return bv.nodeName(d,"table")&&bv.nodeName(11!==c.nodeType?c:c.firstChild,"tr")?d.getElementsByTagName("tbody")[0]||d:d}function aB(b){return b.type=(null!==b.getAttribute("type"))+"/"+b.type,b}function at(d){var c=a0.exec(d.type);return c?d.type=c[1]:d.removeAttribute("type"),d}function ak(t,s){var r,q,p,o,n,m,l,k;if(1===s.nodeType){if(bZ.hasData(t)&&(o=bZ.access(t),n=bZ.set(s,o),k=o.events)){delete n.handle,n.events={};for(p in k){for(r=0,q=k[p].length;q>r;r++){bv.event.add(s,p,k[p][r])}}}bY.hasData(t)&&(m=bY.access(t),l=bv.extend({},m),bY.set(s,l))}}function cL(e,d){var f=d.nodeName.toLowerCase();"input"===f&&aL.test(e.type)?d.checked=e.checked:"input"!==f&&"textarea"!==f||(d.defaultValue=e.defaultValue)}function cD(C,B,A,z){B=bH.apply([],B);var y,x,w,v,u,t,r=0,p=C.length,o=p-1,g=B[0],D=bv.isFunction(g);if(D||p>1&&"string"==typeof g&&!bz.checkClone&&cy.test(g)){return C.each(function(b){var a=C.eq(b);D&&(B[0]=g.call(this,b,a.html())),cD(a,B,A,z)})}if(p&&(y=bU(B,C[0].ownerDocument,!1,C,z),x=y.firstChild,1===y.childNodes.length&&(y=x),x||z)){for(w=bv.map(ad(y,"script"),aB),v=w.length;p>r;r++){u=y,r!==o&&(u=bv.clone(u,!0,!0),v&&bv.merge(w,ad(u,"script"))),A.call(C[r],u,r)}if(v){for(t=w[w.length-1].ownerDocument,bv.map(w,at),r=0;v>r;r++){u=w[r],av.test(u.type||"")&&!bZ.access(u,"globalEval")&&bv.contains(t,u)&&(u.src?bv._evalUrl&&bv._evalUrl(u.src):by(u.textContent.replace(aR,""),t))}}}return C}function cs(h,g,l){for(var k,j=g?bv.filter(g,h):h,i=0;null!=(k=j[i]);i++){l||1!==k.nodeType||bv.cleanData(ad(k)),k.parentNode&&(l&&bv.contains(k.ownerDocument,k)&&cF(ad(k,"script")),k.parentNode.removeChild(k))}return h}bv.extend({htmlPrefilter:function(b){return b.replace(ah,"<$1></$2>")},clone:function(r,q,p){var o,n,m,l,k=r.cloneNode(!0),j=bv.contains(r.ownerDocument,r);if(!(bz.noCloneChecked||1!==r.nodeType&&11!==r.nodeType||bv.isXMLDoc(r))){for(l=ad(k),m=ad(r),o=0,n=m.length;n>o;o++){cL(m[o],l[o])}}if(q){if(p){for(m=m||ad(r),l=l||ad(k),o=0,n=m.length;n>o;o++){ak(m[o],l[o])}}else{ak(r,k)}}return l=ad(k,"script"),l.length>0&&cF(l,!j&&ad(r,"script")),k},cleanData:function(h){for(var g,l,k,j=bv.event.special,i=0;void 0!==(l=h[i]);i++){if(b1(l)){if(g=l[bZ.expando]){if(g.events){for(k in g.events){j[k]?bv.event.remove(l,k):bv.removeEvent(l,k,g.handle)}}l[bZ.expando]=void 0}l[bY.expando]&&(l[bY.expando]=void 0)}}}}),bv.fn.extend({detach:function(b){return cs(this,b,!0)},remove:function(b){return cs(this,b)},text:function(b){return b2(this,function(c){return void 0===c?bv.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=c)})},null,b,arguments.length)},append:function(){return cD(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aJ(this,d);c.appendChild(d)}})},prepend:function(){return cD(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=aJ(this,d);c.insertBefore(d,c.firstChild)}})},before:function(){return cD(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this)})},after:function(){return cD(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this.nextSibling)})},empty:function(){for(var d,c=0;null!=(d=this[c]);c++){1===d.nodeType&&(bv.cleanData(ad(d,!1)),d.textContent="")}return this},clone:function(d,c){return d=null==d?!1:d,c=null==c?d:c,this.map(function(){return bv.clone(this,d,c)})},html:function(b){return b2(this,function(g){var f=this[0]||{},j=0,i=this.length;if(void 0===g&&1===f.nodeType){return f.innerHTML}if("string"==typeof g&&!cJ.test(g)&&!am[(aD.exec(g)||["",""])[1].toLowerCase()]){g=bv.htmlPrefilter(g);try{for(;i>j;j++){f=this[j]||{},1===f.nodeType&&(bv.cleanData(ad(f,!1)),f.innerHTML=g)}f=0}catch(h){}}f&&this.empty().append(g)},null,b,arguments.length)},replaceWith:function(){var b=[];return cD(this,arguments,function(a){var d=this.parentNode;bv.inArray(this,b)<0&&(bv.cleanData(ad(this)),d&&d.replaceChild(a,this))},b)}}),bv.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){bv.fn[d]=function(b){for(var l,k=[],j=bv(b),i=j.length-1,h=0;i>=h;h++){l=h===i?this:this.clone(!0),bv(j[h])[c](l),bG.apply(k,l.get())}return this.pushStack(k)}});var bS=/^margin/,bk=new RegExp("^("+cB+")(?!px)[a-z%]+$","i"),bd=function(a){var d=a.ownerDocument.defaultView;return d&&d.opener||(d=bP),d.getComputedStyle(a)};!function(){function a(){if(d){d.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",d.innerHTML="",bn.appendChild(j);var c=bP.getComputedStyle(d);n="1%"!==c.top,k="2px"===c.marginLeft,m="4px"===c.width,d.style.marginRight="50%",l="4px"===c.marginRight,bn.removeChild(j),d=null}}var n,m,l,k,j=bM.createElement("div"),d=bM.createElement("div");d.style&&(d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",bz.clearCloneStyle="content-box"===d.style.backgroundClip,j.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.appendChild(d),bv.extend(bz,{pixelPosition:function(){return a(),n},boxSizingReliable:function(){return a(),m},pixelMarginRight:function(){return a(),l},reliableMarginLeft:function(){return a(),k}}))}();function a4(j,i,p){var o,n,m,l,k=j.style;return p=p||bd(j),p&&(l=p.getPropertyValue(i)||p[i],""!==l||bv.contains(j.ownerDocument,j)||(l=bv.style(j,i)),!bz.pixelMarginRight()&&bk.test(l)&&bS.test(i)&&(o=k.width,n=k.minWidth,m=k.maxWidth,k.minWidth=k.maxWidth=k.width=l,l=p.width,k.width=o,k.minWidth=n,k.maxWidth=m)),void 0!==l?l+"":l}function aV(d,c){return{get:function(){return d()?void delete this.get:(this.get=c).apply(this,arguments)}}}var aN=/^(none|table(?!-c[ea]).+)/,aF={position:"absolute",visibility:"hidden",display:"block"},ax={letterSpacing:"0",fontWeight:"400"},ao=["Webkit","Moz","ms"],af=bM.createElement("div").style;function cH(e){if(e in af){return e}var d=e[0].toUpperCase()+e.slice(1),f=ao.length;while(f--){if(e=ao[f]+d,e in af){return e}}}function cw(f,e,h){var g=bQ.exec(e);return g?Math.max(0,g[2]-(h||0))+(g[3]||"px"):e}function b4(i,h,n,m,l){for(var k=n===(m?"border":"content")?4:"width"===h?1:0,j=0;4>k;k+=2){"margin"===n&&(j+=bv.css(i,n+cA[k],!0,l)),m?("content"===n&&(j-=bv.css(i,"padding"+cA[k],!0,l)),"margin"!==n&&(j-=bv.css(i,"border"+cA[k]+"Width",!0,l))):(j+=bv.css(i,"padding"+cA[k],!0,l),"padding"!==n&&(j+=bv.css(i,"border"+cA[k]+"Width",!0,l)))}return j}function bx(i,h,n){var m,l=!0,k=bd(i),j="border-box"===bv.css(i,"boxSizing",!1,k);if(i.getClientRects().length&&(m=i.getBoundingClientRect()[h]),0>=m||null==m){if(m=a4(i,h,k),(0>m||null==m)&&(m=i.style[h]),bk.test(m)){return m}l=j&&(bz.boxSizingReliable()||m===i.style[h]),m=parseFloat(m)||0}return m+b4(i,h,n||(j?"border":"content"),l,k)+"px"}bv.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=a4(e,"opacity");return""===f?"1":f}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(r,q,p,o){if(r&&3!==r.nodeType&&8!==r.nodeType&&r.style){var n,m,l,k=bv.camelCase(q),j=r.style;return q=bv.cssProps[k]||(bv.cssProps[k]=cH(k)||k),l=bv.cssHooks[q]||bv.cssHooks[k],void 0===p?l&&"get" in l&&void 0!==(n=l.get(r,!1,o))?n:j[q]:(m=typeof p,"string"===m&&(n=bQ.exec(p))&&n[1]&&(p=bi(r,q,n),m="number"),null!=p&&p===p&&("number"===m&&(p+=n&&n[3]||(bv.cssNumber[k]?"":"px")),bz.clearCloneStyle||""!==p||0!==q.indexOf("background")||(j[q]="inherit"),l&&"set" in l&&void 0===(p=l.set(r,p,o))||(j[q]=p)),void 0)}},css:function(j,i,p,o){var n,m,l,k=bv.camelCase(i);return i=bv.cssProps[k]||(bv.cssProps[k]=cH(k)||k),l=bv.cssHooks[i]||bv.cssHooks[k],l&&"get" in l&&(n=l.get(j,!0,p)),void 0===n&&(n=a4(j,i,o)),"normal"===n&&i in ax&&(n=ax[i]),""===p||p?(m=parseFloat(n),p===!0||isFinite(m)?m||0:n):n}}),bv.each(["height","width"],function(d,c){bv.cssHooks[c]={get:function(b,f,e){return f?!aN.test(bv.css(b,"display"))||b.getClientRects().length&&b.getBoundingClientRect().width?bx(b,c,e):bK(b,aF,function(){return bx(b,c,e)}):void 0},set:function(b,l,k){var j,i=k&&bd(b),h=k&&b4(b,c,k,"border-box"===bv.css(b,"boxSizing",!1,i),i);return h&&(j=bQ.exec(l))&&"px"!==(j[3]||"px")&&(b.style[c]=l,l=bv.css(b,c)),cw(b,l,h)}}}),bv.cssHooks.marginLeft=aV(bz.reliableMarginLeft,function(d,c){return c?(parseFloat(a4(d,"marginLeft"))||d.getBoundingClientRect().left-bK(d,{marginLeft:0},function(){return d.getBoundingClientRect().left}))+"px":void 0}),bv.each({margin:"",padding:"",border:"Width"},function(d,c){bv.cssHooks[d+c]={expand:function(h){for(var g=0,b={},a="string"==typeof h?h.split(" "):[h];4>g;g++){b[d+cA[g]+c]=a[g]||a[g-2]||a[0]}return b}},bS.test(d)||(bv.cssHooks[d+c].set=cw)}),bv.fn.extend({css:function(d,c){return b2(this,function(i,h,n){var m,l,k={},j=0;if(bv.isArray(h)){for(m=bd(i),l=h.length;l>j;j++){k[h[j]]=bv.css(i,h[j],!1,m)}return k}return void 0!==n?bv.style(i,h,n):bv.css(i,h)},d,c,arguments.length>1)}});function bg(g,f,j,i,h){return new bg.prototype.init(g,f,j,i,h)}bv.Tween=bg,bg.prototype={constructor:bg,init:function(h,g,l,k,j,i){this.elem=h,this.prop=l,this.easing=j||bv.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=k,this.unit=i||(bv.cssNumber[l]?"":"px")},cur:function(){var b=bg.propHooks[this.prop];return b&&b.get?b.get(this):bg.propHooks._default.get(this)},run:function(e){var d,f=bg.propHooks[this.prop];return this.options.duration?this.pos=d=bv.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=d=e,this.now=(this.end-this.start)*d+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):bg.propHooks._default.set(this),this}},bg.prototype.init.prototype=bg.prototype,bg.propHooks={_default:{get:function(d){var c;return 1!==d.elem.nodeType||null!=d.elem[d.prop]&&null==d.elem.style[d.prop]?d.elem[d.prop]:(c=bv.css(d.elem,d.prop,""),c&&"auto"!==c?c:0)},set:function(b){bv.fx.step[b.prop]?bv.fx.step[b.prop](b):1!==b.elem.nodeType||null==b.elem.style[bv.cssProps[b.prop]]&&!bv.cssHooks[b.prop]?b.elem[b.prop]=b.now:bv.style(b.elem,b.prop,b.now+b.unit)}}},bg.propHooks.scrollTop=bg.propHooks.scrollLeft={set:function(b){b.elem.nodeType&&b.elem.parentNode&&(b.elem[b.prop]=b.now)}},bv.easing={linear:function(b){return b},swing:function(b){return 0.5-Math.cos(b*Math.PI)/2},_default:"swing"},bv.fx=bg.prototype.init,bv.fx.step={};var a7,aY,cq=/^(?:toggle|show|hide)$/,ai=/queueHooks$/;function cz(){aY&&(bP.requestAnimationFrame(cz),bv.fx.tick())}function ch(){return bP.setTimeout(function(){a7=void 0}),a7=bv.now()}function bI(g,f){var j,i=0,h={height:g};for(f=f?1:0;4>i;i+=2-f){j=cA[i],h["margin"+j]=h["padding"+j]=g}return f&&(h.opacity=h.width=g),h}function bh(i,h,n){for(var m,l=(aS.tweeners[h]||[]).concat(aS.tweeners["*"]),k=0,j=l.length;j>k;k++){if(m=l[k].call(n,h,i)){return m}}}function a8(H,G,F){var E,D,C,B,A,z,y,x,w="width" in G||"height" in G,v=this,u={},t=H.style,s=H.nodeType&&cj(H),r=bZ.get(H,"fxshow");F.queue||(B=bv._queueHooks(H,"fx"),null==B.unqueued&&(B.unqueued=0,A=B.empty.fire,B.empty.fire=function(){B.unqueued||A()}),B.unqueued++,v.always(function(){v.always(function(){B.unqueued--,bv.queue(H,"fx").length||B.empty.fire()})}));for(E in G){if(D=G[E],cq.test(D)){if(delete G[E],C=C||"toggle"===D,D===(s?"hide":"show")){if("show"!==D||!r||void 0===r[E]){continue}s=!0}u[E]=r&&r[E]||bv.style(H,E)}}if(z=!bv.isEmptyObject(G),z||!bv.isEmptyObject(u)){w&&1===H.nodeType&&(F.overflow=[t.overflow,t.overflowX,t.overflowY],y=r&&r.display,null==y&&(y=bZ.get(H,"display")),x=bv.css(H,"display"),"none"===x&&(y?x=y:(aT([H],!0),y=H.style.display||y,x=bv.css(H,"display"),aT([H]))),("inline"===x||"inline-block"===x&&null!=y)&&"none"===bv.css(H,"float")&&(z||(v.done(function(){t.display=y}),null==y&&(x=t.display,y="none"===x?"":x)),t.display="inline-block")),F.overflow&&(t.overflow="hidden",v.always(function(){t.overflow=F.overflow[0],t.overflowX=F.overflow[1],t.overflowY=F.overflow[2]})),z=!1;for(E in u){z||(r?"hidden" in r&&(s=r.hidden):r=bZ.access(H,"fxshow",{display:y}),C&&(r.hidden=!s),s&&aT([H],!0),v.done(function(){s||aT([H]),bZ.remove(H,"fxshow");for(E in u){bv.style(H,E,u[E])}})),z=bh(s?r[E]:0,E,v),E in r||(r[E]=z.start,s&&(z.end=z.start,z.start=0))}}}function a1(i,h){var n,m,l,k,j;for(n in i){if(m=bv.camelCase(n),l=h[m],k=i[n],bv.isArray(k)&&(l=k[1],k=i[n]=k[0]),n!==m&&(i[m]=k,delete i[n]),j=bv.cssHooks[m],j&&"expand" in j){k=j.expand(k),delete i[m];for(n in k){n in i||(i[n]=k[n],h[n]=l)}}else{h[m]=l}}}function aS(v,u,t){var s,r,q=0,p=aS.prefilters.length,o=bv.Deferred().always(function(){delete n.elem}),n=function(){if(r){return !1}for(var a=a7||ch(),w=Math.max(0,m.startTime+m.duration-a),k=w/m.duration||0,j=1-k,h=0,e=m.tweens.length;e>h;h++){m.tweens[h].run(j)}return o.notifyWith(v,[m,j,w]),1>j&&e?w:(o.resolveWith(v,[m]),!1)},m=o.promise({elem:v,props:bv.extend({},u),opts:bv.extend(!0,{specialEasing:{},easing:bv.easing._default},t),originalProperties:u,originalOptions:t,startTime:a7||ch(),duration:t.duration,tweens:[],createTween:function(a,f){var e=bv.Tween(v,m.opts,a,f,m.opts.specialEasing[a]||m.opts.easing);return m.tweens.push(e),e},stop:function(a){var f=0,e=a?m.tweens.length:0;if(r){return this}for(r=!0;e>f;f++){m.tweens[f].run(1)}return a?(o.notifyWith(v,[m,1,0]),o.resolveWith(v,[m,a])):o.rejectWith(v,[m,a]),this}}),l=m.props;for(a1(l,m.opts.specialEasing);p>q;q++){if(s=aS.prefilters[q].call(m,v,l,m.opts)){return bv.isFunction(s.stop)&&(bv._queueHooks(m.elem,m.opts.queue).stop=bv.proxy(s.stop,s)),s}}return bv.map(l,bh,m),bv.isFunction(m.opts.start)&&m.opts.start.call(v,m),bv.fx.timer(bv.extend(n,{elem:v,anim:m,queue:m.opts.queue})),m.progress(m.opts.progress).done(m.opts.done,m.opts.complete).fail(m.opts.fail).always(m.opts.always)}bv.Animation=bv.extend(aS,{tweeners:{"*":[function(e,d){var f=this.createTween(e,d);return bi(f.elem,e,bQ.exec(d),f),f}]},tweener:function(g,f){bv.isFunction(g)?(f=g,g=["*"]):g=g.match(cd);for(var j,i=0,h=g.length;h>i;i++){j=g[i],aS.tweeners[j]=aS.tweeners[j]||[],aS.tweeners[j].unshift(f)}},prefilters:[a8],prefilter:function(d,c){c?aS.prefilters.unshift(d):aS.prefilters.push(d)}}),bv.speed=function(f,d,h){var g=f&&"object"==typeof f?bv.extend({},f):{complete:h||!h&&d||bv.isFunction(f)&&f,duration:f,easing:h&&d||d&&!bv.isFunction(d)&&d};return bv.fx.off||bM.hidden?g.duration=0:g.duration="number"==typeof g.duration?g.duration:g.duration in bv.fx.speeds?bv.fx.speeds[g.duration]:bv.fx.speeds._default,null!=g.queue&&g.queue!==!0||(g.queue="fx"),g.old=g.complete,g.complete=function(){bv.isFunction(g.old)&&g.old.call(this),g.queue&&bv.dequeue(this,g.queue)},g},bv.fn.extend({fadeTo:function(f,e,h,g){return this.filter(cj).css("opacity",0).show().end().animate({opacity:e},f,h,g)},animate:function(i,h,n,m){var l=bv.isEmptyObject(i),k=bv.speed(h,n,m),j=function(){var a=aS(this,bv.extend({},i),k);(l||bZ.get(this,"finish"))&&a.stop(!0)};return j.finish=j,l||k.queue===!1?this.each(j):this.queue(k.queue,j)},stop:function(f,e,h){var g=function(d){var c=d.stop;delete d.stop,c(h)};return"string"!=typeof f&&(h=e,e=f,f=void 0),e&&f!==!1&&this.queue(f||"fx",[]),this.each(function(){var a=!0,i=null!=f&&f+"queueHooks",d=bv.timers,c=bZ.get(this);if(i){c[i]&&c[i].stop&&g(c[i])}else{for(i in c){c[i]&&c[i].stop&&ai.test(i)&&g(c[i])}}for(i=d.length;i--;){d[i].elem!==this||null!=f&&d[i].queue!==f||(d[i].anim.stop(h),a=!1,d.splice(i,1))}!a&&h||bv.dequeue(this,f)})},finish:function(b){return b!==!1&&(b=b||"fx"),this.each(function(){var a,l=bZ.get(this),k=l[b+"queue"],j=l[b+"queueHooks"],i=bv.timers,h=k?k.length:0;for(l.finish=!0,bv.queue(this,b,[]),j&&j.stop&&j.stop.call(this,!0),a=i.length;a--;){i[a].elem===this&&i[a].queue===b&&(i[a].anim.stop(!0),i.splice(a,1))}for(a=0;h>a;a++){k[a]&&k[a].finish&&k[a].finish.call(this)}delete l.finish})}}),bv.each(["toggle","show","hide"],function(e,d){var f=bv.fn[d];bv.fn[d]=function(b,g,c){return null==b||"boolean"==typeof b?f.apply(this,arguments):this.animate(bI(d,!0),b,g,c)}}),bv.each({slideDown:bI("show"),slideUp:bI("hide"),slideToggle:bI("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){bv.fn[d]=function(b,f,e){return this.animate(c,b,f,e)}}),bv.timers=[],bv.fx.tick=function(){var e,d=0,f=bv.timers;for(a7=bv.now();d<f.length;d++){e=f[d],e()||f[d]!==e||f.splice(d--,1)}f.length||bv.fx.stop(),a7=void 0},bv.fx.timer=function(b){bv.timers.push(b),b()?bv.fx.start():bv.timers.pop()},bv.fx.interval=13,bv.fx.start=function(){aY||(aY=bP.requestAnimationFrame?bP.requestAnimationFrame(cz):bP.setInterval(bv.fx.tick,bv.fx.interval))},bv.fx.stop=function(){bP.cancelAnimationFrame?bP.cancelAnimationFrame(aY):bP.clearInterval(aY),aY=null},bv.fx.speeds={slow:600,fast:200,_default:400},bv.fn.delay=function(a,d){return a=bv.fx?bv.fx.speeds[a]||a:a,d=d||"fx",this.queue(d,function(g,f){var b=bP.setTimeout(g,a);f.stop=function(){bP.clearTimeout(b)}})},function(){var e=bM.createElement("input"),d=bM.createElement("select"),f=d.appendChild(bM.createElement("option"));e.type="checkbox",bz.checkOn=""!==e.value,bz.optSelected=f.selected,e=bM.createElement("input"),e.value="t",e.type="radio",bz.radioValue="t"===e.value}();var aK,aC=bv.expr.attrHandle;bv.fn.extend({attr:function(d,c){return b2(this,bv.attr,d,c,arguments.length>1)},removeAttr:function(b){return this.each(function(){bv.removeAttr(this,b)})}}),bv.extend({attr:function(h,g,l){var k,j,i=h.nodeType;if(3!==i&&8!==i&&2!==i){return"undefined"==typeof h.getAttribute?bv.prop(h,g,l):(1===i&&bv.isXMLDoc(h)||(j=bv.attrHooks[g.toLowerCase()]||(bv.expr.match.bool.test(g)?aK:void 0)),void 0!==l?null===l?void bv.removeAttr(h,g):j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:(h.setAttribute(g,l+""),l):j&&"get" in j&&null!==(k=j.get(h,g))?k:(k=bv.find.attr(h,g),null==k?void 0:k))}},attrHooks:{type:{set:function(e,d){if(!bz.radioValue&&"radio"===d&&bv.nodeName(e,"input")){var f=e.value;return e.setAttribute("type",d),f&&(e.value=f),d}}}},removeAttr:function(g,f){var j,i=0,h=f&&f.match(cd);if(h&&1===g.nodeType){while(j=h[i++]){g.removeAttribute(j)}}}}),aK={set:function(e,d,f){return d===!1?bv.removeAttr(e,f):e.setAttribute(f,f),f}},bv.each(bv.expr.match.bool.source.match(/\w+/g),function(e,d){var f=aC[d]||bv.find.attr;aC[d]=function(h,c,l){var k,j,i=c.toLowerCase();return l||(j=aC[i],aC[i]=k,k=null!=f(h,c,l)?i:null,aC[i]=j),k}});var au=/^(?:input|select|textarea|button)$/i,al=/^(?:a|area)$/i;bv.fn.extend({prop:function(d,c){return b2(this,bv.prop,d,c,arguments.length>1)},removeProp:function(b){return this.each(function(){delete this[bv.propFix[b]||b]})}}),bv.extend({prop:function(h,g,l){var k,j,i=h.nodeType;if(3!==i&&8!==i&&2!==i){return 1===i&&bv.isXMLDoc(h)||(g=bv.propFix[g]||g,j=bv.propHooks[g]),void 0!==l?j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:h[g]=l:j&&"get" in j&&null!==(k=j.get(h,g))?k:h[g]}},propHooks:{tabIndex:{get:function(d){var c=bv.find.attr(d,"tabindex");return c?parseInt(c,10):au.test(d.nodeName)||al.test(d.nodeName)&&d.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),bz.optSelected||(bv.propHooks.selected={get:function(d){var c=d.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(d){var c=d.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),bv.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bv.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;function cE(b){return b.getAttribute&&b.getAttribute("class")||""}bv.fn.extend({addClass:function(r){var q,p,o,n,m,l,k,j=0;if(bv.isFunction(r)){return this.each(function(a){bv(this).addClass(r.call(this,a,cE(this)))})}if("string"==typeof r&&r){q=r.match(cd)||[];while(p=this[j++]){if(n=cE(p),o=1===p.nodeType&&(" "+n+" ").replace(ac," ")){l=0;while(m=q[l++]){o.indexOf(" "+m+" ")<0&&(o+=m+" ")}k=bv.trim(o),n!==k&&p.setAttribute("class",k)}}}return this},removeClass:function(r){var q,p,o,n,m,l,k,j=0;if(bv.isFunction(r)){return this.each(function(a){bv(this).removeClass(r.call(this,a,cE(this)))})}if(!arguments.length){return this.attr("class","")}if("string"==typeof r&&r){q=r.match(cd)||[];while(p=this[j++]){if(n=cE(p),o=1===p.nodeType&&(" "+n+" ").replace(ac," ")){l=0;while(m=q[l++]){while(o.indexOf(" "+m+" ")>-1){o=o.replace(" "+m+" "," ")}}k=bv.trim(o),n!==k&&p.setAttribute("class",k)}}}return this},toggleClass:function(e,d){var f=typeof e;return"boolean"==typeof d&&"string"===f?d?this.addClass(e):this.removeClass(e):bv.isFunction(e)?this.each(function(a){bv(this).toggleClass(e.call(this,a,cE(this),d),d)}):this.each(function(){var a,h,g,c;if("string"===f){h=0,g=bv(this),c=e.match(cd)||[];while(a=c[h++]){g.hasClass(a)?g.removeClass(a):g.addClass(a)}}else{void 0!==e&&"boolean"!==f||(a=cE(this),a&&bZ.set(this,"__className__",a),this.setAttribute&&this.setAttribute("class",a||e===!1?"":bZ.get(this,"__className__")||""))}})},hasClass:function(f){var e,h,g=0;e=" "+f+" ";while(h=this[g++]){if(1===h.nodeType&&(" "+cE(h)+" ").replace(ac," ").indexOf(e)>-1){return !0}}return !1}});var ct=/\r/g,bT=/[\x20\t\r\n\f]+/g;bv.fn.extend({val:function(g){var f,j,i,h=this[0];if(arguments.length){return i=bv.isFunction(g),this.each(function(b){var a;1===this.nodeType&&(a=i?g.call(this,b,bv(this).val()):g,null==a?a="":"number"==typeof a?a+="":bv.isArray(a)&&(a=bv.map(a,function(c){return null==c?"":c+""})),f=bv.valHooks[this.type]||bv.valHooks[this.nodeName.toLowerCase()],f&&"set" in f&&void 0!==f.set(this,a,"value")||(this.value=a))})}if(h){return f=bv.valHooks[h.type]||bv.valHooks[h.nodeName.toLowerCase()],f&&"get" in f&&void 0!==(j=f.get(h,"value"))?j:(j=h.value,"string"==typeof j?j.replace(ct,""):null==j?"":j)}}}),bv.extend({valHooks:{option:{get:function(d){var c=bv.find.attr(d,"value");return null!=c?c:bv.trim(bv.text(d)).replace(bT," ")}},select:{get:function(r){for(var q,p,o=r.options,n=r.selectedIndex,m="select-one"===r.type,l=m?null:[],k=m?n+1:o.length,j=0>n?k:m?n:0;k>j;j++){if(p=o[j],(p.selected||j===n)&&!p.disabled&&(!p.parentNode.disabled||!bv.nodeName(p.parentNode,"optgroup"))){if(q=bv(p).val(),m){return q}l.push(q)}}return l},set:function(i,h){var n,m,l=i.options,k=bv.makeArray(h),j=l.length;while(j--){m=l[j],(m.selected=bv.inArray(bv.valHooks.option.get(m),k)>-1)&&(n=!0)}return n||(i.selectedIndex=-1),k}}}}),bv.each(["radio","checkbox"],function(){bv.valHooks[this]={set:function(d,c){return bv.isArray(c)?d.checked=bv.inArray(bv(d).val(),c)>-1:void 0}},bz.checkOn||(bv.valHooks[this].get=function(b){return null===b.getAttribute("value")?"on":b.value})});var bl=/^(?:focusinfocus|focusoutblur)$/;bv.extend(bv.event,{trigger:function(B,A,z,y){var x,w,v,u,t,s,r,l=[z||bM],d=bC.call(B,"type")?B.type:B,a=bC.call(B,"namespace")?B.namespace.split("."):[];if(w=v=z=z||bM,3!==z.nodeType&&8!==z.nodeType&&!bl.test(d+bv.event.triggered)&&(d.indexOf(".")>-1&&(a=d.split("."),d=a.shift(),a.sort()),t=d.indexOf(":")<0&&"on"+d,B=B[bv.expando]?B:new bv.Event(d,"object"==typeof B&&B),B.isTrigger=y?2:3,B.namespace=a.join("."),B.rnamespace=B.namespace?new RegExp("(^|\\.)"+a.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,B.result=void 0,B.target||(B.target=z),A=null==A?[B]:bv.makeArray(A,[B]),r=bv.event.special[d]||{},y||!r.trigger||r.trigger.apply(z,A)!==!1)){if(!y&&!r.noBubble&&!bv.isWindow(z)){for(u=r.delegateType||d,bl.test(u+d)||(w=w.parentNode);w;w=w.parentNode){l.push(w),v=w}v===(z.ownerDocument||bM)&&l.push(v.defaultView||v.parentWindow||bP)}x=0;while((w=l[x++])&&!B.isPropagationStopped()){B.type=x>1?u:r.bindType||d,s=(bZ.get(w,"events")||{})[B.type]&&bZ.get(w,"handle"),s&&s.apply(w,A),s=t&&w[t],s&&s.apply&&b1(w)&&(B.result=s.apply(w,A),B.result===!1&&B.preventDefault())}return B.type=d,y||B.isDefaultPrevented()||r._default&&r._default.apply(l.pop(),A)!==!1||!b1(z)||t&&bv.isFunction(z[d])&&!bv.isWindow(z)&&(v=z[t],v&&(z[t]=null),bv.event.triggered=d,z[d](),bv.event.triggered=void 0,v&&(z[t]=v)),B.result}},simulate:function(f,e,h){var g=bv.extend(new bv.Event,h,{type:f,isSimulated:!0});bv.event.trigger(g,null,e)}}),bv.fn.extend({trigger:function(d,c){return this.each(function(){bv.event.trigger(d,c,this)})},triggerHandler:function(e,d){var f=this[0];return f?bv.event.trigger(e,d,f,!0):void 0}}),bv.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,c){bv.fn[c]=function(b,e){return arguments.length>0?this.on(c,null,b,e):this.trigger(c)}}),bv.fn.extend({hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)}}),bz.focusin="onfocusin" in bP,bz.focusin||bv.each({focus:"focusin",blur:"focusout"},function(e,d){var f=function(b){bv.event.simulate(d,b.target,bv.event.fix(b))};bv.event.special[d]={setup:function(){var b=this.ownerDocument||this,a=bZ.access(b,d);a||b.addEventListener(e,f,!0),bZ.access(b,d,(a||0)+1)},teardown:function(){var b=this.ownerDocument||this,a=bZ.access(b,d)-1;a?bZ.access(b,d,a):(b.removeEventListener(e,f,!0),bZ.remove(b,d))}}});var be=bP.location,a5=bv.now(),aW=/\?/;bv.parseXML=function(a){var f;if(!a||"string"!=typeof a){return null}try{f=(new bP.DOMParser).parseFromString(a,"text/xml")}catch(e){f=void 0}return f&&!f.getElementsByTagName("parsererror").length||bv.error("Invalid XML: "+a),f};var aO=/\[\]$/,aG=/\r?\n/g,ay=/^(?:submit|button|image|reset|file)$/i,ap=/^(?:input|select|textarea|keygen)/i;function ag(g,f,j,i){var h;if(bv.isArray(f)){bv.each(f,function(a,c){j||aO.test(g)?i(g,c):ag(g+"["+("object"==typeof c&&null!=c?a:"")+"]",c,j,i)})}else{if(j||"object"!==bv.type(f)){i(g,f)}else{for(h in f){ag(g+"["+h+"]",f[h],j,i)}}}}bv.param=function(g,f){var j,i=[],h=function(e,d){var k=bv.isFunction(d)?d():d;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==k?"":k)};if(bv.isArray(g)||g.jquery&&!bv.isPlainObject(g)){bv.each(g,function(){h(this.name,this.value)})}else{for(j in g){ag(j,g[j],f,h)}}return i.join("&")},bv.fn.extend({serialize:function(){return bv.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var b=bv.prop(this,"elements");return b?bv.makeArray(b):this}).filter(function(){var b=this.type;return this.name&&!bv(this).is(":disabled")&&ap.test(this.nodeName)&&!ay.test(b)&&(this.checked||!aL.test(b))}).map(function(e,d){var f=bv(this).val();return null==f?null:bv.isArray(f)?bv.map(f,function(b){return{name:d.name,value:b.replace(aG,"\r\n")}}):{name:d.name,value:f.replace(aG,"\r\n")}}).get()}});var cI=/%20/g,cx=/#.*$/,aZ=/([?&])_=[^&]*/,aQ=/^(.*?):[ \t]*([^\r\n]*)$/gm,aI=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,aA=/^(?:GET|HEAD)$/,ar=/^\/\//,aj={},cK={},cC="*/".concat("*"),cr=bM.createElement("a");cr.href=be.href;function bR(b){return function(a,j){"string"!=typeof a&&(j=a,a="*");var i,h=0,g=a.toLowerCase().match(cd)||[];if(bv.isFunction(j)){while(i=g[h++]){"+"===i[0]?(i=i.slice(1)||"*",(b[i]=b[i]||[]).unshift(j)):(b[i]=b[i]||[]).push(j)}}}}function bj(i,h,n,m){var l={},k=i===cK;function j(b){var a;return l[b]=!0,bv.each(i[b]||[],function(c,e){var d=e(h,n,m);return"string"!=typeof d||k||l[d]?k?!(a=d):void 0:(h.dataTypes.unshift(d),j(d),!1)}),a}return j(h.dataTypes[0])||!l["*"]&&j("*")}function bc(g,f){var j,i,h=bv.ajaxSettings.flatOptions||{};for(j in f){void 0!==f[j]&&((h[j]?g:i||(i={}))[j]=f[j])}return i&&bv.extend(!0,g,i),g}function a3(r,q,p){var o,n,m,l,k=r.contents,j=r.dataTypes;while("*"===j[0]){j.shift(),void 0===o&&(o=r.mimeType||q.getResponseHeader("Content-Type"))}if(o){for(n in k){if(k[n]&&k[n].test(o)){j.unshift(n);break}}}if(j[0] in p){m=j[0]}else{for(n in p){if(!j[0]||r.converters[n+" "+j[0]]){m=n;break}l||(l=n)}m=m||l}return m?(m!==j[0]&&j.unshift(m),p[m]):void 0}function aU(x,w,v,u){var t,s,r,q,p,o={},n=x.dataTypes.slice();if(n[1]){for(r in x.converters){o[r.toLowerCase()]=x.converters[r]}}s=n.shift();while(s){if(x.responseFields[s]&&(v[x.responseFields[s]]=w),!p&&u&&x.dataFilter&&(w=x.dataFilter(w,x.dataType)),p=s,s=n.shift()){if("*"===s){s=p}else{if("*"!==p&&p!==s){if(r=o[p+" "+s]||o["* "+s],!r){for(t in o){if(q=t.split(" "),q[1]===s&&(r=o[p+" "+q[0]]||o["* "+q[0]])){r===!0?r=o[t]:o[t]!==!0&&(s=q[0],n.unshift(q[1]));break}}}if(r!==!0){if(r&&x["throws"]){w=r(w)}else{try{w=r(w)}catch(m){return{state:"parsererror",error:r?m:"No conversion from "+p+" to "+s}}}}}}}}return{state:"success",data:w}}bv.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:be.href,type:"GET",isLocal:aI.test(be.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":cC,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":bv.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(d,c){return c?bc(bc(d,bv.ajaxSettings),c):bc(bv.ajaxSettings,d)},ajaxPrefilter:bR(aj),ajaxTransport:bR(cK),ajax:function(V,U){"object"==typeof V&&(U=V,V=void 0),U=U||{};var T,S,R,Q,P,O,N,M,L,K,J=bv.ajaxSetup({},U),I=J.context||J,G=J.context&&(I.nodeType||I.jquery)?bv(I):bv.event,F=bv.Deferred(),E=bv.Callbacks("once memory"),D=J.statusCode||{},C={},B={},r="canceled",d={readyState:0,getResponseHeader:function(e){var c;if(N){if(!Q){Q={};while(c=aQ.exec(R)){Q[c[1].toLowerCase()]=c[2]}}c=Q[e.toLowerCase()]}return null==c?null:c},getAllResponseHeaders:function(){return N?R:null},setRequestHeader:function(e,c){return null==N&&(e=B[e.toLowerCase()]=B[e.toLowerCase()]||e,C[e]=c),this},overrideMimeType:function(b){return null==N&&(J.mimeType=b),this},statusCode:function(e){var c;if(e){if(N){d.always(e[d.status])}else{for(c in e){D[c]=[D[c],e[c]]}}}return this},abort:function(e){var c=e||r;return T&&T.abort(c),H(0,c),this}};if(F.promise(d),J.url=((V||J.url||be.href)+"").replace(ar,be.protocol+"//"),J.type=U.method||U.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(cd)||[""],null==J.crossDomain){O=bM.createElement("a");try{O.href=J.url,O.href=O.href,J.crossDomain=cr.protocol+"//"+cr.host!=O.protocol+"//"+O.host}catch(a){J.crossDomain=!0}}if(J.data&&J.processData&&"string"!=typeof J.data&&(J.data=bv.param(J.data,J.traditional)),bj(aj,J,U,d),N){return d}M=bv.event&&J.global,M&&0===bv.active++&&bv.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!aA.test(J.type),S=J.url.replace(cx,""),J.hasContent?J.data&&J.processData&&0===(J.contentType||"").indexOf("application/x-www-form-urlencoded")&&(J.data=J.data.replace(cI,"+")):(K=J.url.slice(S.length),J.data&&(S+=(aW.test(S)?"&":"?")+J.data,delete J.data),J.cache===!1&&(S=S.replace(aZ,""),K=(aW.test(S)?"&":"?")+"_="+a5+++K),J.url=S+K),J.ifModified&&(bv.lastModified[S]&&d.setRequestHeader("If-Modified-Since",bv.lastModified[S]),bv.etag[S]&&d.setRequestHeader("If-None-Match",bv.etag[S])),(J.data&&J.hasContent&&J.contentType!==!1||U.contentType)&&d.setRequestHeader("Content-Type",J.contentType),d.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+("*"!==J.dataTypes[0]?", "+cC+"; q=0.01":""):J.accepts["*"]);for(L in J.headers){d.setRequestHeader(L,J.headers[L])}if(J.beforeSend&&(J.beforeSend.call(I,d,J)===!1||N)){return d.abort()}if(r="abort",E.add(J.complete),d.done(J.success),d.fail(J.error),T=bj(cK,J,U,d)){if(d.readyState=1,M&&G.trigger("ajaxSend",[d,J]),N){return d}J.async&&J.timeout>0&&(P=bP.setTimeout(function(){d.abort("timeout")},J.timeout));try{N=!1,T.send(C,H)}catch(a){if(N){throw a}H(-1,a)}}else{H(-1,"No Transport")}function H(o,l,k,i){var g,f,e,s,q,p=l;N||(N=!0,P&&bP.clearTimeout(P),T=void 0,R=i||"",d.readyState=o>0?4:0,g=o>=200&&300>o||304===o,k&&(s=a3(J,d,k)),s=aU(J,s,d,g),g?(J.ifModified&&(q=d.getResponseHeader("Last-Modified"),q&&(bv.lastModified[S]=q),q=d.getResponseHeader("etag"),q&&(bv.etag[S]=q)),204===o||"HEAD"===J.type?p="nocontent":304===o?p="notmodified":(p=s.state,f=s.data,e=s.error,g=!e)):(e=p,!o&&p||(p="error",0>o&&(o=0))),d.status=o,d.statusText=(l||p)+"",g?F.resolveWith(I,[f,p,d]):F.rejectWith(I,[d,p,e]),d.statusCode(D),D=void 0,M&&G.trigger(g?"ajaxSuccess":"ajaxError",[d,J,g?f:e]),E.fireWith(I,[d,p]),M&&(G.trigger("ajaxComplete",[d,J]),--bv.active||bv.event.trigger("ajaxStop")))}return d},getJSON:function(e,d,f){return bv.get(e,d,f,"json")},getScript:function(d,c){return bv.get(d,void 0,c,"script")}}),bv.each(["get","post"],function(d,c){bv[c]=function(b,h,g,f){return bv.isFunction(h)&&(f=f||g,g=h,h=void 0),bv.ajax(bv.extend({url:b,type:c,dataType:f,data:h,success:g},bv.isPlainObject(b)&&b))}}),bv._evalUrl=function(b){return bv.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},bv.fn.extend({wrapAll:function(d){var c;return this[0]&&(bv.isFunction(d)&&(d=d.call(this[0])),c=bv(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;while(b.firstElementChild){b=b.firstElementChild}return b}).append(this)),this},wrapInner:function(b){return bv.isFunction(b)?this.each(function(a){bv(this).wrapInner(b.call(this,a))}):this.each(function(){var a=bv(this),d=a.contents();d.length?d.wrapAll(b):a.append(b)})},wrap:function(d){var c=bv.isFunction(d);return this.each(function(a){bv(this).wrapAll(c?d.call(this,a):d)})},unwrap:function(b){return this.parent(b).not("body").each(function(){bv(this).replaceWith(this.childNodes)}),this}}),bv.expr.pseudos.hidden=function(b){return !bv.expr.pseudos.visible(b)},bv.expr.pseudos.visible=function(b){return !!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)},bv.ajaxSettings.xhr=function(){try{return new bP.XMLHttpRequest}catch(a){}};var aM={0:200,1223:204},aE=bv.ajaxSettings.xhr();bz.cors=!!aE&&"withCredentials" in aE,bz.ajax=aE=!!aE,bv.ajaxTransport(function(a){var f,e;return bz.cors||aE&&!a.crossDomain?{send:function(k,j){var d,c=a.xhr();if(c.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(d in a.xhrFields){c[d]=a.xhrFields[d]}}a.mimeType&&c.overrideMimeType&&c.overrideMimeType(a.mimeType),a.crossDomain||k["X-Requested-With"]||(k["X-Requested-With"]="XMLHttpRequest");for(d in k){c.setRequestHeader(d,k[d])}f=function(g){return function(){f&&(f=e=c.onload=c.onerror=c.onabort=c.onreadystatechange=null,"abort"===g?c.abort():"error"===g?"number"!=typeof c.status?j(0,"error"):j(c.status,c.statusText):j(aM[c.status]||c.status,c.statusText,"text"!==(c.responseType||"text")||"string"!=typeof c.responseText?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))}},c.onload=f(),e=c.onerror=f("error"),void 0!==c.onabort?c.onabort=e:c.onreadystatechange=function(){4===c.readyState&&bP.setTimeout(function(){f&&e()})},f=f("abort");try{c.send(a.hasContent&&a.data||null)}catch(b){if(f){throw b}}},abort:function(){f&&f()}}:void 0}),bv.ajaxPrefilter(function(b){b.crossDomain&&(b.contents.script=!1)}),bv.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(b){return bv.globalEval(b),b}}}),bv.ajaxPrefilter("script",function(b){void 0===b.cache&&(b.cache=!1),b.crossDomain&&(b.type="GET")}),bv.ajaxTransport("script",function(e){if(e.crossDomain){var d,f;return{send:function(b,a){d=bv("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",f=function(c){d.remove(),f=null,c&&a("error"===c.type?404:200,c.type)}),bM.head.appendChild(d[0])},abort:function(){f&&f()}}}});var aw=[],an=/(=)\?(?=&|$)|\?\?/;bv.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var b=aw.pop()||bv.expando+"_"+a5++;return this[b]=!0,b}}),bv.ajaxPrefilter("json jsonp",function(a,n,m){var l,k,j,i=a.jsonp!==!1&&(an.test(a.url)?"url":"string"==typeof a.data&&0===(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&an.test(a.data)&&"data");return i||"jsonp"===a.dataTypes[0]?(l=a.jsonpCallback=bv.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,i?a[i]=a[i].replace(an,"$1"+l):a.jsonp!==!1&&(a.url+=(aW.test(a.url)?"&":"?")+a.jsonp+"="+l),a.converters["script json"]=function(){return j||bv.error(l+" was not called"),j[0]},a.dataTypes[0]="json",k=bP[l],bP[l]=function(){j=arguments},m.always(function(){void 0===k?bv(bP).removeProp(l):bP[l]=k,a[l]&&(a.jsonpCallback=n.jsonpCallback,aw.push(l)),j&&bv.isFunction(k)&&k(j[0]),j=k=void 0}),"script"):void 0}),bz.createHTMLDocument=function(){var b=bM.implementation.createHTMLDocument("").body;return b.innerHTML="<form></form><form></form>",2===b.childNodes.length}(),bv.parseHTML=function(h,d,l){if("string"!=typeof h){return[]}"boolean"==typeof d&&(l=d,d=!1);var k,j,i;return d||(bz.createHTMLDocument?(d=bM.implementation.createHTMLDocument(""),k=d.createElement("base"),k.href=bM.location.href,d.head.appendChild(k)):d=bM),j=co.exec(h),i=!l&&[],j?[d.createElement(j[1])]:(j=bU([h],d,i),i&&i.length&&bv(i).remove(),bv.merge([],j.childNodes))},bv.fn.load=function(j,i,p){var o,n,m,l=this,k=j.indexOf(" ");return k>-1&&(o=bv.trim(j.slice(k)),j=j.slice(0,k)),bv.isFunction(i)?(p=i,i=void 0):i&&"object"==typeof i&&(n="POST"),l.length>0&&bv.ajax({url:j,type:n||"GET",dataType:"html",data:i}).done(function(b){m=arguments,l.html(o?bv("<div>").append(bv.parseHTML(b)).find(o):b)}).always(p&&function(d,c){l.each(function(){p.apply(this,m||[d.responseText,c,d])})}),this},bv.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,c){bv.fn[c]=function(b){return this.on(c,b)}}),bv.expr.pseudos.animated=function(b){return bv.grep(bv.timers,function(a){return b===a.elem}).length};function ae(b){return bv.isWindow(b)?b:9===b.nodeType&&b.defaultView}bv.offset={setOffset:function(z,y,x){var w,v,u,t,s,r,q,p=bv.css(z,"position"),o=bv(z),n={};"static"===p&&(z.style.position="relative"),s=o.offset(),u=bv.css(z,"top"),r=bv.css(z,"left"),q=("absolute"===p||"fixed"===p)&&(u+r).indexOf("auto")>-1,q?(w=o.position(),t=w.top,v=w.left):(t=parseFloat(u)||0,v=parseFloat(r)||0),bv.isFunction(y)&&(y=y.call(z,x,bv.extend({},s))),null!=y.top&&(n.top=y.top-s.top+t),null!=y.left&&(n.left=y.left-s.left+v),"using" in y?y.using.call(z,n):o.css(n)}},bv.fn.extend({offset:function(h){if(arguments.length){return void 0===h?this:this.each(function(a){bv.offset.setOffset(this,h,a)})}var g,l,k,j,i=this[0];if(i){return i.getClientRects().length?(k=i.getBoundingClientRect(),k.width||k.height?(j=i.ownerDocument,l=ae(j),g=j.documentElement,{top:k.top+l.pageYOffset-g.clientTop,left:k.left+l.pageXOffset-g.clientLeft}):k):{top:0,left:0}}},position:function(){if(this[0]){var f,e,h=this[0],g={top:0,left:0};return"fixed"===bv.css(h,"position")?e=h.getBoundingClientRect():(f=this.offsetParent(),e=this.offset(),bv.nodeName(f[0],"html")||(g=f.offset()),g={top:g.top+bv.css(f[0],"borderTopWidth",!0),left:g.left+bv.css(f[0],"borderLeftWidth",!0)}),{top:e.top-g.top-bv.css(h,"marginTop",!0),left:e.left-g.left-bv.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var b=this.offsetParent;while(b&&"static"===bv.css(b,"position")){b=b.offsetParent}return b||bn})}}),bv.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,d){var f="pageYOffset"===d;bv.fn[e]=function(a){return b2(this,function(b,h,g){var c=ae(b);return void 0===g?c?c[d]:b[h]:void (c?c.scrollTo(f?c.pageXOffset:g,f?g:c.pageYOffset):b[h]=g)},e,a,arguments.length)}}),bv.each(["top","left"],function(d,c){bv.cssHooks[c]=aV(bz.pixelPosition,function(b,e){return e?(e=a4(b,c),bk.test(e)?bv(b).position()[c]+"px":e):void 0})}),bv.each({Height:"height",Width:"width"},function(d,c){bv.each({padding:"inner"+d,content:c,"":"outer"+d},function(b,a){bv.fn[a]=function(l,k){var j=arguments.length&&(b||"boolean"!=typeof l),i=b||(l===!0||k===!0?"margin":"border");return b2(this,function(g,n,m){var h;return bv.isWindow(g)?0===a.indexOf("outer")?g["inner"+d]:g.document.documentElement["client"+d]:9===g.nodeType?(h=g.documentElement,Math.max(g.body["scroll"+d],h["scroll"+d],g.body["offset"+d],h["offset"+d],h["client"+d])):void 0===m?bv.css(g,n,i):bv.style(g,n,m,i)},c,j?l:void 0,j)}})}),bv.fn.extend({bind:function(e,d,f){return this.on(e,null,d,f)},unbind:function(d,c){return this.off(d,null,c)},delegate:function(f,e,h,g){return this.on(e,f,h,g)},undelegate:function(e,d,f){return 1===arguments.length?this.off(e,"**"):this.off(d,e||"**",f)}}),bv.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return bv});var cG=bP.jQuery,cv=bP.$;return bv.noConflict=function(a){return bP.$===bv&&(bP.$=cv),a&&bP.jQuery===bv&&(bP.jQuery=cG),bv},bO||(bP.jQuery=bP.$=bv),bv});

/*=S UI_PLUGIN.JS */
//jquery.lazyload.js
/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

		function debounce(delay, callback) {
			var timeout = null;
			return function () {
				//
				// if a timeout has been registered before then
				// cancel it so that we can setup a fresh timeout
				//
				if (timeout) {
					clearTimeout(timeout);
				}
				var args = arguments;
				timeout = setTimeout(function () {
					callback.apply(null, args);
					timeout = null;
				}, delay);
			};
		}

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.on(settings.event, debounce(250,function() {
                return update();
            }));
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .one("load", function() {
                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.on(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.on("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.on("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        // add by TracyZhang begin
        if($(element).attr("relativeelem")) {
            element = $(element).attr("relativeelem");
        }
        // add by TracyZhang end
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        // add by TracyZhang begin
        if($(element).attr("relativeelem")) {
            element = $(element).attr("relativeelem");
        }
        // add by TracyZhang end
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        // add by TracyZhang begin
        if($(element).attr("relativeelem")) {
            element = $(element).attr("relativeelem");
        }
        // add by TracyZhang end
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        // add by TracyZhang begin
        if($(element).attr("relativeelem")) {
            element = $(element).attr("relativeelem");
        }
        // add by TracyZhang end
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
$("img.lazy").lazyload();


/**
* Swiper 3.4.2
* Most modern mobile touch slider and framework with hardware accelerated transitions
* 
* http://www.idangero.us/swiper/
* 
* Copyright 2017, Vladimir Kharlampidi
* The iDangero.us
* http://www.idangero.us/
* 
* Licensed under MIT
* 
* Released on: March 10, 2017
*/
(function () {
  'use strict';
  var $;

  /*===========================
  Swiper
  ===========================*/
  var Swiper = function (container, params) {
      if (!(this instanceof Swiper)) return new Swiper(container, params);
  

      var defaults = {
          direction: 'horizontal',
          touchEventsTarget: 'container',
          initialSlide: 0,
          speed: 300,
          // autoplay
          autoplay: false,
          autoplayDisableOnInteraction: true,
          autoplayStopOnLast: false,
          // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
          iOSEdgeSwipeDetection: false,
          iOSEdgeSwipeThreshold: 20,
          // Free mode
          freeMode: false,
          freeModeMomentum: true,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: true,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: false,
          freeModeMinimumVelocity: 0.02,
          // Autoheight
          autoHeight: false,
          // Set wrapper width
          setWrapperSize: false,
          // Virtual Translate
          virtualTranslate: false,
          // Effects
          effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
          coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
          },
          flip: {
              slideShadows : true,
              limitRotation: true
          },
          cube: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94
          },
          fade: {
              crossFade: false
          },
          // Parallax
          parallax: false,
          // Zoom
          zoom: false,
          zoomMax: 3,
          zoomMin: 1,
          zoomToggle: true,
          // Scrollbar
          scrollbar: null,
          scrollbarHide: true,
          scrollbarDraggable: false,
          scrollbarSnapOnRelease: false,
          // Keyboard Mousewheel
          keyboardControl: false,
          mousewheelControl: false,
          mousewheelReleaseOnEdges: false,
          mousewheelInvert: false,
          mousewheelForceToAxis: false,
          mousewheelSensitivity: 1,
          mousewheelEventsTarged: 'container',
          // Hash Navigation
          hashnav: false,
          hashnavWatchState: false,
          // History
          history: false,
          // Commong Nav State
          replaceState: false,
          // Breakpoints
          breakpoints: undefined,
          // Slides grid
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'column',
          slidesPerGroup: 1,
          centeredSlides: false,
          slidesOffsetBefore: 0, // in px
          slidesOffsetAfter: 0, // in px
          // Round length
          roundLengths: false,
          // Touches
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: true,
          onlyExternal: false,
          threshold: 0,
          touchMoveStopPropagation: true,
          touchReleaseOnEdges: false,
          // Unique Navigation Elements
          uniqueNavElements: true,
          // Pagination
          pagination: null,
          paginationElement: 'span',
          paginationClickable: false,
          paginationHide: false,
          paginationBulletRender: null,
          paginationProgressRender: null,
          paginationFractionRender: null,
          paginationCustomRender: null,
          paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
          // Resistance
          resistance: true,
          resistanceRatio: 0.85,
          // Next/prev buttons
          nextButton: null,
          prevButton: null,
          // Progress
          watchSlidesProgress: false,
          watchSlidesVisibility: false,
          // Cursor
          grabCursor: false,
          // Clicks
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,
          // Lazy Loading
          lazyLoading: false,
          lazyLoadingInPrevNext: false,
          lazyLoadingInPrevNextAmount: 1,
          lazyLoadingOnTransitionStart: false,
          // Images
          preloadImages: true,
          updateOnImagesReady: true,
          // loop
          loop: false,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          // Control
          control: undefined,
          controlInverse: false,
          controlBy: 'slide', //or 'container'
          normalizeSlideIndex: true,
          // Swiping/no swiping
          allowSwipeToPrev: true,
          allowSwipeToNext: true,
          swipeHandler: null, //'.swipe-handler',
          noSwiping: true,
          noSwipingClass: 'swiper-no-swiping',
          // Passive Listeners
          passiveListeners: true,
          // NS
          containerModifierClass: 'swiper-container-', // NEW
          slideClass: 'swiper-slide',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          buttonDisabledClass: 'swiper-button-disabled',
          paginationCurrentClass: 'swiper-pagination-current',
          paginationTotalClass: 'swiper-pagination-total',
          paginationHiddenClass: 'swiper-pagination-hidden',
          paginationProgressbarClass: 'swiper-pagination-progressbar',
          paginationClickableClass: 'swiper-pagination-clickable', // NEW
          paginationModifierClass: 'swiper-pagination-', // NEW
          lazyLoadingClass: 'swiper-lazy',
          lazyStatusLoadingClass: 'swiper-lazy-loading',
          lazyStatusLoadedClass: 'swiper-lazy-loaded',
          lazyPreloaderClass: 'swiper-lazy-preloader',
          notificationClass: 'swiper-notification',
          preloaderClass: 'preloader',
          zoomContainerClass: 'swiper-zoom-container',
      
          // Observer
          observer: false,
          observeParents: false,
          // Accessibility
          a11y: false,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          // Callbacks
          runCallbacksOnInit: true
          /*
          Callbacks:
          onInit: function (swiper)
          onDestroy: function (swiper)
          onBeforeResize: function (swiper)
          onAfterResize: function (swiper)
          onClick: function (swiper, e)
          onTap: function (swiper, e)
          onDoubleTap: function (swiper, e)
          onSliderMove: function (swiper, e)
          onSlideChangeStart: function (swiper)
          onSlideChangeEnd: function (swiper)
          onTransitionStart: function (swiper)
          onTransitionEnd: function (swiper)
          onImagesReady: function (swiper)
          onProgress: function (swiper, progress)
          onTouchStart: function (swiper, e)
          onTouchMove: function (swiper, e)
          onTouchMoveOpposite: function (swiper, e)
          onTouchEnd: function (swiper, e)
          onReachBeginning: function (swiper)
          onReachEnd: function (swiper)
          onSetTransition: function (swiper, duration)
          onSetTranslate: function (swiper, translate)
          onAutoplayStart: function (swiper)
          onAutoplayStop: function (swiper),
          onLazyImageLoad: function (swiper, slide, image)
          onLazyImageReady: function (swiper, slide, image)
          onKeyPress: function (swiper, keyCode)
          */
      
      };
      var initialVirtualTranslate = params && params.virtualTranslate;
      
      params = params || {};
      var originalParams = {};
      for (var param in params) {
          if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
              originalParams[param] = {};
              for (var deepParam in params[param]) {
                  originalParams[param][deepParam] = params[param][deepParam];
              }
          }
          else {
              originalParams[param] = params[param];
          }
      }
      for (var def in defaults) {
          if (typeof params[def] === 'undefined') {
              params[def] = defaults[def];
          }
          else if (typeof params[def] === 'object') {
              for (var deepDef in defaults[def]) {
                  if (typeof params[def][deepDef] === 'undefined') {
                      params[def][deepDef] = defaults[def][deepDef];
                  }
              }
          }
      }
      
      // Swiper
      var s = this;
      
      // Params
      s.params = params;
      s.originalParams = originalParams;
      
      // Classname
      s.classNames = [];
      /*=========================
        Dom Library and plugins
        ===========================*/
      if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
          $ = Dom7;
      }
      if (typeof $ === 'undefined') {
          if (typeof Dom7 === 'undefined') {
              $ = window.Dom7 || window.Zepto || window.jQuery;
          }
          else {
              $ = Dom7;
          }
          if (!$) return;
      }
      // Export it to Swiper instance
      s.$ = $;
      
      /*=========================
        Breakpoints
        ===========================*/
      s.currentBreakpoint = undefined;
      s.getActiveBreakpoint = function () {
          //Get breakpoint for window width
          if (!s.params.breakpoints) return false;
          var breakpoint = false;
          var points = [], point;
          for ( point in s.params.breakpoints ) {
              if (s.params.breakpoints.hasOwnProperty(point)) {
                  points.push(point);
              }
          }
          points.sort(function (a, b) {
              return parseInt(a, 10) > parseInt(b, 10);
          });
          for (var i = 0; i < points.length; i++) {
              point = points[i];
              if (point >= window.innerWidth && !breakpoint) {
                  breakpoint = point;
              }
          }
          return breakpoint || 'max';
      };
      s.setBreakpoint = function () {
          //Set breakpoint for window width and update parameters
          var breakpoint = s.getActiveBreakpoint();
          if (breakpoint && s.currentBreakpoint !== breakpoint) {
              var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
              var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
              for ( var param in breakPointsParams ) {
                  s.params[param] = breakPointsParams[param];
              }
              s.currentBreakpoint = breakpoint;
              if(needsReLoop && s.destroyLoop) {
                  s.reLoop(true);
              }
          }
      };
      // Set breakpoint on load
      if (s.params.breakpoints) {
          s.setBreakpoint();
      }
      
      /*=========================
        Preparation - Define Container, Wrapper and Pagination
        ===========================*/
      s.container = $(container);
      if (s.container.length === 0) return;
      if (s.container.length > 1) {
          var swipers = [];
          s.container.each(function () {
              var container = this;
              swipers.push(new Swiper(this, params));
          });
          return swipers;
      }
      
      // Save instance in container HTML Element and in data
      s.container[0].swiper = s;
      s.container.data('swiper', s);
      
      s.classNames.push(s.params.containerModifierClass + s.params.direction);
      
      if (s.params.freeMode) {
          s.classNames.push(s.params.containerModifierClass + 'free-mode');
      }
      if (!s.support.flexbox) {
          s.classNames.push(s.params.containerModifierClass + 'no-flexbox');
          s.params.slidesPerColumn = 1;
      }
      if (s.params.autoHeight) {
          s.classNames.push(s.params.containerModifierClass + 'autoheight');
      }
      // Enable slides progress when required
      if (s.params.parallax || s.params.watchSlidesVisibility) {
          s.params.watchSlidesProgress = true;
      }
      // Max resistance when touchReleaseOnEdges
      if (s.params.touchReleaseOnEdges) {
          s.params.resistanceRatio = 0;
      }
      // Coverflow / 3D
      if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
          if (s.support.transforms3d) {
              s.params.watchSlidesProgress = true;
              s.classNames.push(s.params.containerModifierClass + '3d');
          }
          else {
              s.params.effect = 'slide';
          }
      }
      if (s.params.effect !== 'slide') {
          s.classNames.push(s.params.containerModifierClass + s.params.effect);
      }
      if (s.params.effect === 'cube') {
          s.params.resistanceRatio = 0;
          s.params.slidesPerView = 1;
          s.params.slidesPerColumn = 1;
          s.params.slidesPerGroup = 1;
          s.params.centeredSlides = false;
          s.params.spaceBetween = 0;
          s.params.virtualTranslate = true;
      }
      if (s.params.effect === 'fade' || s.params.effect === 'flip') {
          s.params.slidesPerView = 1;
          s.params.slidesPerColumn = 1;
          s.params.slidesPerGroup = 1;
          s.params.watchSlidesProgress = true;
          s.params.spaceBetween = 0;
          if (typeof initialVirtualTranslate === 'undefined') {
              s.params.virtualTranslate = true;
          }
      }
      
      // Grab Cursor
      if (s.params.grabCursor && s.support.touch) {
          s.params.grabCursor = false;
      }
      
      // Wrapper
      s.wrapper = s.container.children('.' + s.params.wrapperClass);
      
      // Pagination
      if (s.params.pagination) {
          s.paginationContainer = $(s.params.pagination);
          if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
              s.paginationContainer = s.container.find(s.params.pagination);
          }
      
          if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
              s.paginationContainer.addClass(s.params.paginationModifierClass + 'clickable');
          }
          else {
              s.params.paginationClickable = false;
          }
          s.paginationContainer.addClass(s.params.paginationModifierClass + s.params.paginationType);
      }
      // Next/Prev Buttons
      if (s.params.nextButton || s.params.prevButton) {
          if (s.params.nextButton) {
              s.nextButton = $(s.params.nextButton);
              if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                  s.nextButton = s.container.find(s.params.nextButton);
              }
          }
          if (s.params.prevButton) {
              s.prevButton = $(s.params.prevButton);
              if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                  s.prevButton = s.container.find(s.params.prevButton);
              }
          }
      }
      
      // Is Horizontal
      s.isHorizontal = function () {
          return s.params.direction === 'horizontal';
      };
      // s.isH = isH;
      
      // RTL
      s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
      if (s.rtl) {
          s.classNames.push(s.params.containerModifierClass + 'rtl');
      }
      
      // Wrong RTL support
      if (s.rtl) {
          s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
      }
      
      // Columns
      if (s.params.slidesPerColumn > 1) {
          s.classNames.push(s.params.containerModifierClass + 'multirow');
      }
      
      // Check for Android
      if (s.device.android) {
          s.classNames.push(s.params.containerModifierClass + 'android');
      }
      
      // Add classes
      s.container.addClass(s.classNames.join(' '));
      
      // Translate
      s.translate = 0;
      
      // Progress
      s.progress = 0;
      
      // Velocity
      s.velocity = 0;
      
      /*=========================
        Locks, unlocks
        ===========================*/
      s.lockSwipeToNext = function () {
          s.params.allowSwipeToNext = false;
          if (s.params.allowSwipeToPrev === false && s.params.grabCursor) {
              s.unsetGrabCursor();
          }
      };
      s.lockSwipeToPrev = function () {
          s.params.allowSwipeToPrev = false;
          if (s.params.allowSwipeToNext === false && s.params.grabCursor) {
              s.unsetGrabCursor();
          }
      };
      s.lockSwipes = function () {
          s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
          if (s.params.grabCursor) s.unsetGrabCursor();
      };
      s.unlockSwipeToNext = function () {
          s.params.allowSwipeToNext = true;
          if (s.params.allowSwipeToPrev === true && s.params.grabCursor) {
              s.setGrabCursor();
          }
      };
      s.unlockSwipeToPrev = function () {
          s.params.allowSwipeToPrev = true;
          if (s.params.allowSwipeToNext === true && s.params.grabCursor) {
              s.setGrabCursor();
          }
      };
      s.unlockSwipes = function () {
          s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
          if (s.params.grabCursor) s.setGrabCursor();
      };
      
      /*=========================
        Round helper
        ===========================*/
      function round(a) {
          return Math.floor(a);
      }
      /*=========================
        Set grab cursor
        ===========================*/
      s.setGrabCursor = function(moving) {
          s.container[0].style.cursor = 'move';
          s.container[0].style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
          s.container[0].style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
          s.container[0].style.cursor = moving ? 'grabbing': 'grab';
      };
      s.unsetGrabCursor = function () {
          s.container[0].style.cursor = '';
      };
      if (s.params.grabCursor) {
          s.setGrabCursor();
      }
      /*=========================
        Update on Images Ready
        ===========================*/
      s.imagesToLoad = [];
      s.imagesLoaded = 0;
      
      s.loadImage = function (imgElement, src, srcset, sizes, checkForComplete, callback) {
          var image;
          function onReady () {
              if (callback) callback();
          }
          if (!imgElement.complete || !checkForComplete) {
              if (src) {
                  image = new window.Image();
                  image.onload = onReady;
                  image.onerror = onReady;
                  if (sizes) {
                      image.sizes = sizes;
                  }
                  if (srcset) {
                      image.srcset = srcset;
                  }
                  if (src) {
                      image.src = src;
                  }
              } else {
                  onReady();
              }
      
          } else {//image already loaded...
              onReady();
          }
      };
      s.preloadImages = function () {
          s.imagesToLoad = s.container.find('img');
          function _onReady() {
              if (typeof s === 'undefined' || s === null || !s) return;
              if (s.imagesLoaded !== undefined) s.imagesLoaded++;
              if (s.imagesLoaded === s.imagesToLoad.length) {
                  if (s.params.updateOnImagesReady) s.update();
                  s.emit('onImagesReady', s);
              }
          }
          for (var i = 0; i < s.imagesToLoad.length; i++) {
              s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), s.imagesToLoad[i].sizes || s.imagesToLoad[i].getAttribute('sizes'), true, _onReady);
          }
      };
      
      /*=========================
        Autoplay
        ===========================*/
      s.autoplayTimeoutId = undefined;
      s.autoplaying = false;
      s.autoplayPaused = false;
      function autoplay() {
          var autoplayDelay = s.params.autoplay;
          var activeSlide = s.slides.eq(s.activeIndex);
          if (activeSlide.attr('data-swiper-autoplay')) {
              autoplayDelay = activeSlide.attr('data-swiper-autoplay') || s.params.autoplay;
          }
          s.autoplayTimeoutId = setTimeout(function () {
              if (s.params.loop) {
                  s.fixLoop();
                  s._slideNext();
                  s.emit('onAutoplay', s);
              }
              else {
                  if (!s.isEnd) {
                      s._slideNext();
                      s.emit('onAutoplay', s);
                  }
                  else {
                      if (!params.autoplayStopOnLast) {
                          s._slideTo(0);
                          s.emit('onAutoplay', s);
                      }
                      else {
                          s.stopAutoplay();
                      }
                  }
              }
          }, autoplayDelay);
      }
      s.startAutoplay = function () {
          if (typeof s.autoplayTimeoutId !== 'undefined') return false;
          if (!s.params.autoplay) return false;
          if (s.autoplaying) return false;
          s.autoplaying = true;
          s.emit('onAutoplayStart', s);
          autoplay();
      };
      s.stopAutoplay = function (internal) {
          if (!s.autoplayTimeoutId) return;
          if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
          s.autoplaying = false;
          s.autoplayTimeoutId = undefined;
          s.emit('onAutoplayStop', s);
      };
      s.pauseAutoplay = function (speed) {
          if (s.autoplayPaused) return;
          if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
          s.autoplayPaused = true;
          if (speed === 0) {
              s.autoplayPaused = false;
              autoplay();
          }
          else {
              s.wrapper.transitionEnd(function () {
                  if (!s) return;
                  s.autoplayPaused = false;
                  if (!s.autoplaying) {
                      s.stopAutoplay();
                  }
                  else {
                      autoplay();
                  }
              });
          }
      };
      /*=========================
        Min/Max Translate
        ===========================*/
      s.minTranslate = function () {
          return (-s.snapGrid[0]);
      };
      s.maxTranslate = function () {
          return (-s.snapGrid[s.snapGrid.length - 1]);
      };
      /*=========================
        Slider/slides sizes
        ===========================*/
      s.updateAutoHeight = function () {
          var activeSlides = [];
          var newHeight = 0;
          var i;
      
          // Find slides currently in view
          if(s.params.slidesPerView !== 'auto' && s.params.slidesPerView > 1) {
              for (i = 0; i < Math.ceil(s.params.slidesPerView); i++) {
                  var index = s.activeIndex + i;
                  if(index > s.slides.length) break;
                  activeSlides.push(s.slides.eq(index)[0]);
              }
          } else {
              activeSlides.push(s.slides.eq(s.activeIndex)[0]);
          }
      
          // Find new height from heighest slide in view
          for (i = 0; i < activeSlides.length; i++) {
              if (typeof activeSlides[i] !== 'undefined') {
                  var height = activeSlides[i].offsetHeight;
                  newHeight = height > newHeight ? height : newHeight;
              }
          }
      
          // Update Height
          if (newHeight) s.wrapper.css('height', newHeight + 'px');
      };
      s.updateContainerSize = function () {
          var width, height;
          if (typeof s.params.width !== 'undefined') {
              width = s.params.width;
          }
          else {
              width = s.container[0].clientWidth;
          }
          if (typeof s.params.height !== 'undefined') {
              height = s.params.height;
          }
          else {
              height = s.container[0].clientHeight;
          }
          if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
              return;
          }
      
          //Subtract paddings
          width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
          height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
      
          // Store values
          s.width = width;
          s.height = height;
          s.size = s.isHorizontal() ? s.width : s.height;
      };
      
      s.updateSlidesSize = function () {
          s.slides = s.wrapper.children('.' + s.params.slideClass);
          s.snapGrid = [];
          s.slidesGrid = [];
          s.slidesSizesGrid = [];
      
          var spaceBetween = s.params.spaceBetween,
              slidePosition = -s.params.slidesOffsetBefore,
              i,
              prevSlideSize = 0,
              index = 0;
          if (typeof s.size === 'undefined') return;
          if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
              spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
          }
      
          s.virtualSize = -spaceBetween;
          // reset margins
          if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
          else s.slides.css({marginRight: '', marginBottom: ''});
      
          var slidesNumberEvenToRows;
          if (s.params.slidesPerColumn > 1) {
              if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                  slidesNumberEvenToRows = s.slides.length;
              }
              else {
                  slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
              }
              if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                  slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
              }
          }
      
          // Calc slides
          var slideSize;
          var slidesPerColumn = s.params.slidesPerColumn;
          var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
          var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
          for (i = 0; i < s.slides.length; i++) {
              slideSize = 0;
              var slide = s.slides.eq(i);
              if (s.params.slidesPerColumn > 1) {
                  // Set slides order
                  var newSlideOrderIndex;
                  var column, row;
                  if (s.params.slidesPerColumnFill === 'column') {
                      column = Math.floor(i / slidesPerColumn);
                      row = i - column * slidesPerColumn;
                      if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                          if (++row >= slidesPerColumn) {
                              row = 0;
                              column++;
                          }
                      }
                      newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                      slide
                          .css({
                              '-webkit-box-ordinal-group': newSlideOrderIndex,
                              '-moz-box-ordinal-group': newSlideOrderIndex,
                              '-ms-flex-order': newSlideOrderIndex,
                              '-webkit-order': newSlideOrderIndex,
                              'order': newSlideOrderIndex
                          });
                  }
                  else {
                      row = Math.floor(i / slidesPerRow);
                      column = i - row * slidesPerRow;
                  }
                  slide
                      .css(
                          'margin-' + (s.isHorizontal() ? 'top' : 'left'),
                          (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                      )
                      .attr('data-swiper-column', column)
                      .attr('data-swiper-row', row);
      
              }
              if (slide.css('display') === 'none') continue;
              if (s.params.slidesPerView === 'auto') {
                  slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                  if (s.params.roundLengths) slideSize = round(slideSize);
              }
              else {
                  slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                  if (s.params.roundLengths) slideSize = round(slideSize);
      
                  if (s.isHorizontal()) {
                      s.slides[i].style.width = slideSize + 'px';
                  }
                  else {
                      s.slides[i].style.height = slideSize + 'px';
                  }
              }
              s.slides[i].swiperSlideSize = slideSize;
              s.slidesSizesGrid.push(slideSize);
      
      
              if (s.params.centeredSlides) {
                  slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                  if(prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                  if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                  if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                  if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                  s.slidesGrid.push(slidePosition);
              }
              else {
                  if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                  s.slidesGrid.push(slidePosition);
                  slidePosition = slidePosition + slideSize + spaceBetween;
              }
      
              s.virtualSize += slideSize + spaceBetween;
      
              prevSlideSize = slideSize;
      
              index ++;
          }
          s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
          var newSlidesGrid;
      
          if (
              s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
              s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
          }
          if (!s.support.flexbox || s.params.setWrapperSize) {
              if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
              else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
          }
      
          if (s.params.slidesPerColumn > 1) {
              s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
              s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
              if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
              else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
              if (s.params.centeredSlides) {
                  newSlidesGrid = [];
                  for (i = 0; i < s.snapGrid.length; i++) {
                      if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                  }
                  s.snapGrid = newSlidesGrid;
              }
          }
      
          // Remove last grid elements depending on width
          if (!s.params.centeredSlides) {
              newSlidesGrid = [];
              for (i = 0; i < s.snapGrid.length; i++) {
                  if (s.snapGrid[i] <= s.virtualSize - s.size) {
                      newSlidesGrid.push(s.snapGrid[i]);
                  }
              }
              s.snapGrid = newSlidesGrid;
              if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                  s.snapGrid.push(s.virtualSize - s.size);
              }
          }
          if (s.snapGrid.length === 0) s.snapGrid = [0];
      
          if (s.params.spaceBetween !== 0) {
              if (s.isHorizontal()) {
                  if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                  else s.slides.css({marginRight: spaceBetween + 'px'});
              }
              else s.slides.css({marginBottom: spaceBetween + 'px'});
          }
          if (s.params.watchSlidesProgress) {
              s.updateSlidesOffset();
          }
      };
      s.updateSlidesOffset = function () {
          for (var i = 0; i < s.slides.length; i++) {
              s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
          }
      };
      
      /*=========================
        Dynamic Slides Per View
        ===========================*/
      s.currentSlidesPerView = function () {
          var spv = 1, i, j;
          if (s.params.centeredSlides) {
              var size = s.slides[s.activeIndex].swiperSlideSize;
              var breakLoop;
              for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                  if (s.slides[i] && !breakLoop) {
                      size += s.slides[i].swiperSlideSize;
                      spv ++;
                      if (size > s.size) breakLoop = true;
                  }
              }
              for (j = s.activeIndex - 1; j >= 0; j--) {
                  if (s.slides[j] && !breakLoop) {
                      size += s.slides[j].swiperSlideSize;
                      spv ++;
                      if (size > s.size) breakLoop = true;
                  }
              }
          }
          else {
              for (i = s.activeIndex + 1; i < s.slides.length; i++) {
                  if (s.slidesGrid[i] - s.slidesGrid[s.activeIndex] < s.size) {
                      spv++;
                  }
              }
          }
          return spv;
      };
      /*=========================
        Slider/slides progress
        ===========================*/
      s.updateSlidesProgress = function (translate) {
          if (typeof translate === 'undefined') {
              translate = s.translate || 0;
          }
          if (s.slides.length === 0) return;
          if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
      
          var offsetCenter = -translate;
          if (s.rtl) offsetCenter = translate;
      
          // Visible Slides
          s.slides.removeClass(s.params.slideVisibleClass);
          for (var i = 0; i < s.slides.length; i++) {
              var slide = s.slides[i];
              var slideProgress = (offsetCenter + (s.params.centeredSlides ? s.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
              if (s.params.watchSlidesVisibility) {
                  var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                  var slideAfter = slideBefore + s.slidesSizesGrid[i];
                  var isVisible =
                      (slideBefore >= 0 && slideBefore < s.size) ||
                      (slideAfter > 0 && slideAfter <= s.size) ||
                      (slideBefore <= 0 && slideAfter >= s.size);
                  if (isVisible) {
                      s.slides.eq(i).addClass(s.params.slideVisibleClass);
                  }
              }
              slide.progress = s.rtl ? -slideProgress : slideProgress;
          }
      };
      s.updateProgress = function (translate) {
          if (typeof translate === 'undefined') {
              translate = s.translate || 0;
          }
          var translatesDiff = s.maxTranslate() - s.minTranslate();
          var wasBeginning = s.isBeginning;
          var wasEnd = s.isEnd;
          if (translatesDiff === 0) {
              s.progress = 0;
              s.isBeginning = s.isEnd = true;
          }
          else {
              s.progress = (translate - s.minTranslate()) / (translatesDiff);
              s.isBeginning = s.progress <= 0;
              s.isEnd = s.progress >= 1;
          }
          if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
          if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
      
          if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
          s.emit('onProgress', s, s.progress);
      };
      s.updateActiveIndex = function () {
          var translate = s.rtl ? s.translate : -s.translate;
          var newActiveIndex, i, snapIndex;
          for (i = 0; i < s.slidesGrid.length; i ++) {
              if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                  if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                      newActiveIndex = i;
                  }
                  else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                      newActiveIndex = i + 1;
                  }
              }
              else {
                  if (translate >= s.slidesGrid[i]) {
                      newActiveIndex = i;
                  }
              }
          }
          // Normalize slideIndex
          if(s.params.normalizeSlideIndex){
              if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
          }
          // for (i = 0; i < s.slidesGrid.length; i++) {
              // if (- translate >= s.slidesGrid[i]) {
                  // newActiveIndex = i;
              // }
          // }
          snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
          if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
      
          if (newActiveIndex === s.activeIndex) {
              return;
          }
          s.snapIndex = snapIndex;
          s.previousIndex = s.activeIndex;
          s.activeIndex = newActiveIndex;
          s.updateClasses();
          s.updateRealIndex();
      };
      s.updateRealIndex = function(){
          s.realIndex = parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index') || s.activeIndex, 10);
      };
      
      /*=========================
        Classes
        ===========================*/
      s.updateClasses = function () {
          s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass + ' ' + s.params.slideDuplicateActiveClass + ' ' + s.params.slideDuplicateNextClass + ' ' + s.params.slideDuplicatePrevClass);
          var activeSlide = s.slides.eq(s.activeIndex);
          // Active classes
          activeSlide.addClass(s.params.slideActiveClass);
          if (params.loop) {
              // Duplicate to all looped slides
              if (activeSlide.hasClass(s.params.slideDuplicateClass)) {
                  s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
              }
              else {
                  s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.realIndex + '"]').addClass(s.params.slideDuplicateActiveClass);
              }
          }
          // Next Slide
          var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
          if (s.params.loop && nextSlide.length === 0) {
              nextSlide = s.slides.eq(0);
              nextSlide.addClass(s.params.slideNextClass);
          }
          // Prev Slide
          var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
          if (s.params.loop && prevSlide.length === 0) {
              prevSlide = s.slides.eq(-1);
              prevSlide.addClass(s.params.slidePrevClass);
          }
          if (params.loop) {
              // Duplicate to all looped slides
              if (nextSlide.hasClass(s.params.slideDuplicateClass)) {
                  s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
              }
              else {
                  s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + nextSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicateNextClass);
              }
              if (prevSlide.hasClass(s.params.slideDuplicateClass)) {
                  s.wrapper.children('.' + s.params.slideClass + ':not(.' + s.params.slideDuplicateClass + ')[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
              }
              else {
                  s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + prevSlide.attr('data-swiper-slide-index') + '"]').addClass(s.params.slideDuplicatePrevClass);
              }
          }
      
          // Pagination
          if (s.paginationContainer && s.paginationContainer.length > 0) {
              // Current/Total
              var current,
                  total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
              if (s.params.loop) {
                  current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                  if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                      current = current - (s.slides.length - s.loopedSlides * 2);
                  }
                  if (current > total - 1) current = current - total;
                  if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
              }
              else {
                  if (typeof s.snapIndex !== 'undefined') {
                      current = s.snapIndex;
                  }
                  else {
                      current = s.activeIndex || 0;
                  }
              }
              // Types
              if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                  s.bullets.removeClass(s.params.bulletActiveClass);
                  if (s.paginationContainer.length > 1) {
                      s.bullets.each(function () {
                          if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                      });
                  }
                  else {
                      s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                  }
              }
              if (s.params.paginationType === 'fraction') {
                  s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                  s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
              }
              if (s.params.paginationType === 'progress') {
                  var scale = (current + 1) / total,
                      scaleX = scale,
                      scaleY = 1;
                  if (!s.isHorizontal()) {
                      scaleY = scale;
                      scaleX = 1;
                  }
                  s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
              }
              if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                  s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                  s.emit('onPaginationRendered', s, s.paginationContainer[0]);
              }
          }
      
          // Next/active buttons
          if (!s.params.loop) {
              if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                  if (s.isBeginning) {
                      s.prevButton.addClass(s.params.buttonDisabledClass);
                      if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                  }
                  else {
                      s.prevButton.removeClass(s.params.buttonDisabledClass);
                      if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                  }
              }
              if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                  if (s.isEnd) {
                      s.nextButton.addClass(s.params.buttonDisabledClass);
                      if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                  }
                  else {
                      s.nextButton.removeClass(s.params.buttonDisabledClass);
                      if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                  }
              }
          }
      };
      
      /*=========================
        Pagination
        ===========================*/
      s.updatePagination = function () {
          if (!s.params.pagination) return;
          if (s.paginationContainer && s.paginationContainer.length > 0) {
              var paginationHTML = '';
              if (s.params.paginationType === 'bullets') {
                  var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                  for (var i = 0; i < numberOfBullets; i++) {
                      if (s.params.paginationBulletRender) {
                          paginationHTML += s.params.paginationBulletRender(s, i, s.params.bulletClass);
                      }
                      else {
                          paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                      }
                  }
                  s.paginationContainer.html(paginationHTML);
                  s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                  if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                      s.a11y.initPagination();
                  }
              }
              if (s.params.paginationType === 'fraction') {
                  if (s.params.paginationFractionRender) {
                      paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                  }
                  else {
                      paginationHTML =
                          '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                          ' / ' +
                          '<span class="' + s.params.paginationTotalClass+'"></span>';
                  }
                  s.paginationContainer.html(paginationHTML);
              }
              if (s.params.paginationType === 'progress') {
                  if (s.params.paginationProgressRender) {
                      paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                  }
                  else {
                      paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                  }
                  s.paginationContainer.html(paginationHTML);
              }
              if (s.params.paginationType !== 'custom') {
                  s.emit('onPaginationRendered', s, s.paginationContainer[0]);
              }
          }
      };
      /*=========================
        Common update method
        ===========================*/
      s.update = function (updateTranslate) {
          if (!s) return;
          s.updateContainerSize();
          s.updateSlidesSize();
          s.updateProgress();
          s.updatePagination();
          s.updateClasses();
          if (s.params.scrollbar && s.scrollbar) {
              s.scrollbar.set();
          }
          var newTranslate;
          function forceSetTranslate() {
              var translate = s.rtl ? -s.translate : s.translate;
              newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
              s.setWrapperTranslate(newTranslate);
              s.updateActiveIndex();
              s.updateClasses();
          }
          if (updateTranslate) {
              var translated;
              if (s.controller && s.controller.spline) {
                  s.controller.spline = undefined;
              }
              if (s.params.freeMode) {
                  forceSetTranslate();
                  if (s.params.autoHeight) {
                      s.updateAutoHeight();
                  }
              }
              else {
                  if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                      translated = s.slideTo(s.slides.length - 1, 0, false, true);
                  }
                  else {
                      translated = s.slideTo(s.activeIndex, 0, false, true);
                  }
                  if (!translated) {
                      forceSetTranslate();
                  }
              }
          }
          else if (s.params.autoHeight) {
              s.updateAutoHeight();
          }
      };
      
      /*=========================
        Resize Handler
        ===========================*/
      s.onResize = function (forceUpdatePagination) {
          if (s.params.onBeforeResize) s.params.onBeforeResize(s);
          //Breakpoints
          if (s.params.breakpoints) {
              s.setBreakpoint();
          }
      
          // Disable locks on resize
          var allowSwipeToPrev = s.params.allowSwipeToPrev;
          var allowSwipeToNext = s.params.allowSwipeToNext;
          s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
      
          s.updateContainerSize();
          s.updateSlidesSize();
          if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
          if (s.params.scrollbar && s.scrollbar) {
              s.scrollbar.set();
          }
          if (s.controller && s.controller.spline) {
              s.controller.spline = undefined;
          }
          var slideChangedBySlideTo = false;
          if (s.params.freeMode) {
              var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
              s.setWrapperTranslate(newTranslate);
              s.updateActiveIndex();
              s.updateClasses();
      
              if (s.params.autoHeight) {
                  s.updateAutoHeight();
              }
          }
          else {
              s.updateClasses();
              if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                  slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
              }
              else {
                  slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
              }
          }
          if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
              s.lazy.load();
          }
          // Return locks after resize
          s.params.allowSwipeToPrev = allowSwipeToPrev;
          s.params.allowSwipeToNext = allowSwipeToNext;
          if (s.params.onAfterResize) s.params.onAfterResize(s);
      };
      
      /*=========================
        Events
        ===========================*/
      
      //Define Touch Events
      s.touchEventsDesktop = {start: 'mousedown', move: 'mousemove', end: 'mouseup'};
      if (window.navigator.pointerEnabled) s.touchEventsDesktop = {start: 'pointerdown', move: 'pointermove', end: 'pointerup'};
      else if (window.navigator.msPointerEnabled) s.touchEventsDesktop = {start: 'MSPointerDown', move: 'MSPointerMove', end: 'MSPointerUp'};
      s.touchEvents = {
          start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : s.touchEventsDesktop.start,
          move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : s.touchEventsDesktop.move,
          end : s.support.touch || !s.params.simulateTouch ? 'touchend' : s.touchEventsDesktop.end
      };
      
      
      // WP8 Touch Events Fix
      if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
          (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
      }
      
      // Attach/detach events
      s.initEvents = function (detach) {
          var actionDom = detach ? 'off' : 'on';
          var action = detach ? 'removeEventListener' : 'addEventListener';
          var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
          var target = s.support.touch ? touchEventsTarget : document;
      
          var moveCapture = s.params.nested ? true : false;
      
          //Touch Events
          if (s.browser.ie) {
              touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
              target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
              target[action](s.touchEvents.end, s.onTouchEnd, false);
          }
          else {
              if (s.support.touch) {
                  var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                  touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, passiveListener);
                  touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                  touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, passiveListener);
              }
              if ((params.simulateTouch && !s.device.ios && !s.device.android) || (params.simulateTouch && !s.support.touch && s.device.ios)) {
                  touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                  document[action]('mousemove', s.onTouchMove, moveCapture);
                  document[action]('mouseup', s.onTouchEnd, false);
              }
          }
          window[action]('resize', s.onResize);
      
          // Next, Prev, Index
          if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
              s.nextButton[actionDom]('click', s.onClickNext);
              if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
          }
          if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
              s.prevButton[actionDom]('click', s.onClickPrev);
              if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
          }
          if (s.params.pagination && s.params.paginationClickable) {
              s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
              if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
          }
      
          // Prevent Links Clicks
          if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
      };
      s.attachEvents = function () {
          s.initEvents();
      };
      s.detachEvents = function () {
          s.initEvents(true);
      };
      
      /*=========================
        Handle Clicks
        ===========================*/
      // Prevent Clicks
      s.allowClick = true;
      s.preventClicks = function (e) {
          if (!s.allowClick) {
              if (s.params.preventClicks) e.preventDefault();
              if (s.params.preventClicksPropagation && s.animating) {
                  e.stopPropagation();
                  e.stopImmediatePropagation();
              }
          }
      };
      // Clicks
      s.onClickNext = function (e) {
          e.preventDefault();
          if (s.isEnd && !s.params.loop) return;
          s.slideNext();
      };
      s.onClickPrev = function (e) {
          e.preventDefault();
          if (s.isBeginning && !s.params.loop) return;
          s.slidePrev();
      };
      s.onClickIndex = function (e) {
          e.preventDefault();
          var index = $(this).index() * s.params.slidesPerGroup;
          if (s.params.loop) index = index + s.loopedSlides;
          s.slideTo(index);
      };
      
      /*=========================
        Handle Touches
        ===========================*/
      function findElementInEvent(e, selector) {
          var el = $(e.target);
          if (!el.is(selector)) {
              if (typeof selector === 'string') {
                  el = el.parents(selector);
              }
              else if (selector.nodeType) {
                  var found;
                  el.parents().each(function (index, _el) {
                      if (_el === selector) found = selector;
                  });
                  if (!found) return undefined;
                  else return selector;
              }
          }
          if (el.length === 0) {
              return undefined;
          }
          return el[0];
      }
      s.updateClickedSlide = function (e) {
          var slide = findElementInEvent(e, '.' + s.params.slideClass);
          var slideFound = false;
          if (slide) {
              for (var i = 0; i < s.slides.length; i++) {
                  if (s.slides[i] === slide) slideFound = true;
              }
          }
      
          if (slide && slideFound) {
              s.clickedSlide = slide;
              s.clickedIndex = $(slide).index();
          }
          else {
              s.clickedSlide = undefined;
              s.clickedIndex = undefined;
              return;
          }
          if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
              var slideToIndex = s.clickedIndex,
                  realIndex,
                  duplicatedSlides,
                  slidesPerView = s.params.slidesPerView === 'auto' ? s.currentSlidesPerView() : s.params.slidesPerView;
              if (s.params.loop) {
                  if (s.animating) return;
                  realIndex = parseInt($(s.clickedSlide).attr('data-swiper-slide-index'), 10);
                  if (s.params.centeredSlides) {
                      if ((slideToIndex < s.loopedSlides - slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + slidesPerView/2)) {
                          s.fixLoop();
                          slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                          setTimeout(function () {
                              s.slideTo(slideToIndex);
                          }, 0);
                      }
                      else {
                          s.slideTo(slideToIndex);
                      }
                  }
                  else {
                      if (slideToIndex > s.slides.length - slidesPerView) {
                          s.fixLoop();
                          slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.' + s.params.slideDuplicateClass + ')').eq(0).index();
                          setTimeout(function () {
                              s.slideTo(slideToIndex);
                          }, 0);
                      }
                      else {
                          s.slideTo(slideToIndex);
                      }
                  }
              }
              else {
                  s.slideTo(slideToIndex);
              }
          }
      };
      
      var isTouched,
          isMoved,
          allowTouchCallbacks,
          touchStartTime,
          isScrolling,
          currentTranslate,
          startTranslate,
          allowThresholdMove,
          // Form elements to match
          formElements = 'input, select, textarea, button, video',
          // Last click time
          lastClickTime = Date.now(), clickTimeout,
          //Velocities
          velocities = [],
          allowMomentumBounce;
      
      // Animating Flag
      s.animating = false;
      
      // Touches information
      s.touches = {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
      };
      
      // Touch handlers
      var isTouchEvent, startMoving;
      s.onTouchStart = function (e) {
          if (e.originalEvent) e = e.originalEvent;
          isTouchEvent = e.type === 'touchstart';
          if (!isTouchEvent && 'which' in e && e.which === 3) return;
          if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
              s.allowClick = true;
              return;
          }
          if (s.params.swipeHandler) {
              if (!findElementInEvent(e, s.params.swipeHandler)) return;
          }
      
          var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
          var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      
          // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
          if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
              return;
          }
      
          isTouched = true;
          isMoved = false;
          allowTouchCallbacks = true;
          isScrolling = undefined;
          startMoving = undefined;
          s.touches.startX = startX;
          s.touches.startY = startY;
          touchStartTime = Date.now();
          s.allowClick = true;
          s.updateContainerSize();
          s.swipeDirection = undefined;
          if (s.params.threshold > 0) allowThresholdMove = false;
          if (e.type !== 'touchstart') {
              var preventDefault = true;
              if ($(e.target).is(formElements)) preventDefault = false;
              if (document.activeElement && $(document.activeElement).is(formElements)) {
                  document.activeElement.blur();
              }
              if (preventDefault) {
                  e.preventDefault();
              }
          }
          s.emit('onTouchStart', s, e);
      };
      
      s.onTouchMove = function (e) {
          if (e.originalEvent) e = e.originalEvent;
          if (isTouchEvent && e.type === 'mousemove') return;
          if (e.preventedByNestedSwiper) {
              s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
              s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
              return;
          }
          if (s.params.onlyExternal) {
              // isMoved = true;
              s.allowClick = false;
              if (isTouched) {
                  s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                  s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                  touchStartTime = Date.now();
              }
              return;
          }
          if (isTouchEvent && s.params.touchReleaseOnEdges && !s.params.loop) {
              if (!s.isHorizontal()) {
                  // Vertical
                  if (
                      (s.touches.currentY < s.touches.startY && s.translate <= s.maxTranslate()) ||
                      (s.touches.currentY > s.touches.startY && s.translate >= s.minTranslate())
                      ) {
                      return;
                  }
              }
              else {
                  if (
                      (s.touches.currentX < s.touches.startX && s.translate <= s.maxTranslate()) ||
                      (s.touches.currentX > s.touches.startX && s.translate >= s.minTranslate())
                      ) {
                      return;
                  }
              }
          }
          if (isTouchEvent && document.activeElement) {
              if (e.target === document.activeElement && $(e.target).is(formElements)) {
                  isMoved = true;
                  s.allowClick = false;
                  return;
              }
          }
          if (allowTouchCallbacks) {
              s.emit('onTouchMove', s, e);
          }
          if (e.targetTouches && e.targetTouches.length > 1) return;
      
          s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
          s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      
          if (typeof isScrolling === 'undefined') {
              var touchAngle;
              if (s.isHorizontal() && s.touches.currentY === s.touches.startY || !s.isHorizontal() && s.touches.currentX === s.touches.startX) {
                  isScrolling = false;
              }
              else {
                  touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                  isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
              }
          }
          if (isScrolling) {
              s.emit('onTouchMoveOpposite', s, e);
          }
          if (typeof startMoving === 'undefined') {
              if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                  startMoving = true;
              }
          }
          if (!isTouched) return;
          if (isScrolling)  {
              isTouched = false;
              return;
          }
          if (!startMoving) {
              return;
          }
          s.allowClick = false;
          s.emit('onSliderMove', s, e);
          e.preventDefault();
          if (s.params.touchMoveStopPropagation && !s.params.nested) {
              e.stopPropagation();
          }
      
          if (!isMoved) {
              if (params.loop) {
                  s.fixLoop();
              }
              startTranslate = s.getWrapperTranslate();
              s.setWrapperTransition(0);
              if (s.animating) {
                  s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
              }
              if (s.params.autoplay && s.autoplaying) {
                  if (s.params.autoplayDisableOnInteraction) {
                      s.stopAutoplay();
                  }
                  else {
                      s.pauseAutoplay();
                  }
              }
              allowMomentumBounce = false;
              //Grab Cursor
              if (s.params.grabCursor && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
                  s.setGrabCursor(true);
              }
          }
          isMoved = true;
      
          var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
      
          diff = diff * s.params.touchRatio;
          if (s.rtl) diff = -diff;
      
          s.swipeDirection = diff > 0 ? 'prev' : 'next';
          currentTranslate = diff + startTranslate;
      
          var disableParentSwiper = true;
          if ((diff > 0 && currentTranslate > s.minTranslate())) {
              disableParentSwiper = false;
              if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
          }
          else if (diff < 0 && currentTranslate < s.maxTranslate()) {
              disableParentSwiper = false;
              if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
          }
      
          if (disableParentSwiper) {
              e.preventedByNestedSwiper = true;
          }
      
          // Directions locks
          if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
              currentTranslate = startTranslate;
          }
          if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
              currentTranslate = startTranslate;
          }
      
      
          // Threshold
          if (s.params.threshold > 0) {
              if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                  if (!allowThresholdMove) {
                      allowThresholdMove = true;
                      s.touches.startX = s.touches.currentX;
                      s.touches.startY = s.touches.currentY;
                      currentTranslate = startTranslate;
                      s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                      return;
                  }
              }
              else {
                  currentTranslate = startTranslate;
                  return;
              }
          }
      
          if (!s.params.followFinger) return;
      
          // Update active index in free mode
          if (s.params.freeMode || s.params.watchSlidesProgress) {
              s.updateActiveIndex();
          }
          if (s.params.freeMode) {
              //Velocity
              if (velocities.length === 0) {
                  velocities.push({
                      position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                      time: touchStartTime
                  });
              }
              velocities.push({
                  position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                  time: (new window.Date()).getTime()
              });
          }
          // Update progress
          s.updateProgress(currentTranslate);
          // Update translate
          s.setWrapperTranslate(currentTranslate);
      };
      s.onTouchEnd = function (e) {
          if (e.originalEvent) e = e.originalEvent;
          if (allowTouchCallbacks) {
              s.emit('onTouchEnd', s, e);
          }
          allowTouchCallbacks = false;
          if (!isTouched) return;
          //Return Grab Cursor
          if (s.params.grabCursor && isMoved && isTouched  && (s.params.allowSwipeToNext === true || s.params.allowSwipeToPrev === true)) {
              s.setGrabCursor(false);
          }
      
          // Time diff
          var touchEndTime = Date.now();
          var timeDiff = touchEndTime - touchStartTime;
      
          // Tap, doubleTap, Click
          if (s.allowClick) {
              s.updateClickedSlide(e);
              s.emit('onTap', s, e);
              if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                  if (clickTimeout) clearTimeout(clickTimeout);
                  clickTimeout = setTimeout(function () {
                      if (!s) return;
                      if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                          s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                      }
                      s.emit('onClick', s, e);
                  }, 300);
      
              }
              if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                  if (clickTimeout) clearTimeout(clickTimeout);
                  s.emit('onDoubleTap', s, e);
              }
          }
      
          lastClickTime = Date.now();
          setTimeout(function () {
              if (s) s.allowClick = true;
          }, 0);
      
          if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
              isTouched = isMoved = false;
              return;
          }
          isTouched = isMoved = false;
      
          var currentPos;
          if (s.params.followFinger) {
              currentPos = s.rtl ? s.translate : -s.translate;
          }
          else {
              currentPos = -currentTranslate;
          }
          if (s.params.freeMode) {
              if (currentPos < -s.minTranslate()) {
                  s.slideTo(s.activeIndex);
                  return;
              }
              else if (currentPos > -s.maxTranslate()) {
                  if (s.slides.length < s.snapGrid.length) {
                      s.slideTo(s.snapGrid.length - 1);
                  }
                  else {
                      s.slideTo(s.slides.length - 1);
                  }
                  return;
              }
      
              if (s.params.freeModeMomentum) {
                  if (velocities.length > 1) {
                      var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
      
                      var distance = lastMoveEvent.position - velocityEvent.position;
                      var time = lastMoveEvent.time - velocityEvent.time;
                      s.velocity = distance / time;
                      s.velocity = s.velocity / 2;
                      if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                          s.velocity = 0;
                      }
                      // this implies that the user stopped moving a finger then released.
                      // There would be no events with distance zero, so the last event is stale.
                      if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                          s.velocity = 0;
                      }
                  } else {
                      s.velocity = 0;
                  }
                  s.velocity = s.velocity * s.params.freeModeMomentumVelocityRatio;
      
                  velocities.length = 0;
                  var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                  var momentumDistance = s.velocity * momentumDuration;
      
                  var newPosition = s.translate + momentumDistance;
                  if (s.rtl) newPosition = - newPosition;
                  var doBounce = false;
                  var afterBouncePosition;
                  var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                  if (newPosition < s.maxTranslate()) {
                      if (s.params.freeModeMomentumBounce) {
                          if (newPosition + s.maxTranslate() < -bounceAmount) {
                              newPosition = s.maxTranslate() - bounceAmount;
                          }
                          afterBouncePosition = s.maxTranslate();
                          doBounce = true;
                          allowMomentumBounce = true;
                      }
                      else {
                          newPosition = s.maxTranslate();
                      }
                  }
                  else if (newPosition > s.minTranslate()) {
                      if (s.params.freeModeMomentumBounce) {
                          if (newPosition - s.minTranslate() > bounceAmount) {
                              newPosition = s.minTranslate() + bounceAmount;
                          }
                          afterBouncePosition = s.minTranslate();
                          doBounce = true;
                          allowMomentumBounce = true;
                      }
                      else {
                          newPosition = s.minTranslate();
                      }
                  }
                  else if (s.params.freeModeSticky) {
                      var j = 0,
                          nextSlide;
                      for (j = 0; j < s.snapGrid.length; j += 1) {
                          if (s.snapGrid[j] > -newPosition) {
                              nextSlide = j;
                              break;
                          }
      
                      }
                      if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                          newPosition = s.snapGrid[nextSlide];
                      } else {
                          newPosition = s.snapGrid[nextSlide - 1];
                      }
                      if (!s.rtl) newPosition = - newPosition;
                  }
                  //Fix duration
                  if (s.velocity !== 0) {
                      if (s.rtl) {
                          momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                      }
                      else {
                          momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                      }
                  }
                  else if (s.params.freeModeSticky) {
                      s.slideReset();
                      return;
                  }
      
                  if (s.params.freeModeMomentumBounce && doBounce) {
                      s.updateProgress(afterBouncePosition);
                      s.setWrapperTransition(momentumDuration);
                      s.setWrapperTranslate(newPosition);
                      s.onTransitionStart();
                      s.animating = true;
                      s.wrapper.transitionEnd(function () {
                          if (!s || !allowMomentumBounce) return;
                          s.emit('onMomentumBounce', s);
      
                          s.setWrapperTransition(s.params.speed);
                          s.setWrapperTranslate(afterBouncePosition);
                          s.wrapper.transitionEnd(function () {
                              if (!s) return;
                              s.onTransitionEnd();
                          });
                      });
                  } else if (s.velocity) {
                      s.updateProgress(newPosition);
                      s.setWrapperTransition(momentumDuration);
                      s.setWrapperTranslate(newPosition);
                      s.onTransitionStart();
                      if (!s.animating) {
                          s.animating = true;
                          s.wrapper.transitionEnd(function () {
                              if (!s) return;
                              s.onTransitionEnd();
                          });
                      }
      
                  } else {
                      s.updateProgress(newPosition);
                  }
      
                  s.updateActiveIndex();
              }
              if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                  s.updateProgress();
                  s.updateActiveIndex();
              }
              return;
          }
      
          // Find current slide
          var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
          for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
              if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                  if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                      stopIndex = i;
                      groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                  }
              }
              else {
                  if (currentPos >= s.slidesGrid[i]) {
                      stopIndex = i;
                      groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                  }
              }
          }
      
          // Find current slide size
          var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
      
          if (timeDiff > s.params.longSwipesMs) {
              // Long touches
              if (!s.params.longSwipes) {
                  s.slideTo(s.activeIndex);
                  return;
              }
              if (s.swipeDirection === 'next') {
                  if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                  else s.slideTo(stopIndex);
      
              }
              if (s.swipeDirection === 'prev') {
                  if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                  else s.slideTo(stopIndex);
              }
          }
          else {
              // Short swipes
              if (!s.params.shortSwipes) {
                  s.slideTo(s.activeIndex);
                  return;
              }
              if (s.swipeDirection === 'next') {
                  s.slideTo(stopIndex + s.params.slidesPerGroup);
      
              }
              if (s.swipeDirection === 'prev') {
                  s.slideTo(stopIndex);
              }
          }
      };
      /*=========================
        Transitions
        ===========================*/
      s._slideTo = function (slideIndex, speed) {
          return s.slideTo(slideIndex, speed, true, true);
      };
      s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (typeof slideIndex === 'undefined') slideIndex = 0;
          if (slideIndex < 0) slideIndex = 0;
          s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
          if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
      
          var translate = - s.snapGrid[s.snapIndex];
          // Stop autoplay
          if (s.params.autoplay && s.autoplaying) {
              if (internal || !s.params.autoplayDisableOnInteraction) {
                  s.pauseAutoplay(speed);
              }
              else {
                  s.stopAutoplay();
              }
          }
          // Update progress
          s.updateProgress(translate);
      
          // Normalize slideIndex
          if(s.params.normalizeSlideIndex){
              for (var i = 0; i < s.slidesGrid.length; i++) {
                  if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                      slideIndex = i;
                  }
              }
          }
      
          // Directions locks
          if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
              return false;
          }
          if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
              if ((s.activeIndex || 0) !== slideIndex ) return false;
          }
      
          // Update Index
          if (typeof speed === 'undefined') speed = s.params.speed;
          s.previousIndex = s.activeIndex || 0;
          s.activeIndex = slideIndex;
          s.updateRealIndex();
          if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
              // Update Height
              if (s.params.autoHeight) {
                  s.updateAutoHeight();
              }
              s.updateClasses();
              if (s.params.effect !== 'slide') {
                  s.setWrapperTranslate(translate);
              }
              return false;
          }
          s.updateClasses();
          s.onTransitionStart(runCallbacks);
      
          if (speed === 0 || s.browser.lteIE9) {
              s.setWrapperTranslate(translate);
              s.setWrapperTransition(0);
              s.onTransitionEnd(runCallbacks);
          }
          else {
              s.setWrapperTranslate(translate);
              s.setWrapperTransition(speed);
              if (!s.animating) {
                  s.animating = true;
                  s.wrapper.transitionEnd(function () {
                      if (!s) return;
                      s.onTransitionEnd(runCallbacks);
                  });
              }
      
          }
      
          return true;
      };
      
      s.onTransitionStart = function (runCallbacks) {
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (s.params.autoHeight) {
              s.updateAutoHeight();
          }
          if (s.lazy) s.lazy.onTransitionStart();
          if (runCallbacks) {
              s.emit('onTransitionStart', s);
              if (s.activeIndex !== s.previousIndex) {
                  s.emit('onSlideChangeStart', s);
                  if (s.activeIndex > s.previousIndex) {
                      s.emit('onSlideNextStart', s);
                  }
                  else {
                      s.emit('onSlidePrevStart', s);
                  }
              }
      
          }
      };
      s.onTransitionEnd = function (runCallbacks) {
          s.animating = false;
          s.setWrapperTransition(0);
          if (typeof runCallbacks === 'undefined') runCallbacks = true;
          if (s.lazy) s.lazy.onTransitionEnd();
          if (runCallbacks) {
              s.emit('onTransitionEnd', s);
              if (s.activeIndex !== s.previousIndex) {
                  s.emit('onSlideChangeEnd', s);
                  if (s.activeIndex > s.previousIndex) {
                      s.emit('onSlideNextEnd', s);
                  }

                  else {
                      s.emit('onSlidePrevEnd', s);
                  }
              }
          }
          if (s.params.history && s.history) {
              s.history.setHistory(s.params.history, s.activeIndex);
          }
          if (s.params.hashnav && s.hashnav) {
              s.hashnav.setHash();
          }
      
      };
      s.slideNext = function (runCallbacks, speed, internal) {
          if (s.params.loop) {
              if (s.animating) return false;
              s.fixLoop();
              var clientLeft = s.container[0].clientLeft;
              return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
          }
          else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
      };
      s._slideNext = function (speed) {
          return s.slideNext(true, speed, true);
      };
      s.slidePrev = function (runCallbacks, speed, internal) {
          if (s.params.loop) {
              if (s.animating) return false;
              s.fixLoop();
              var clientLeft = s.container[0].clientLeft;
              return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
          }
          else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
      };
      s._slidePrev = function (speed) {
          return s.slidePrev(true, speed, true);
      };
      s.slideReset = function (runCallbacks, speed, internal) {
          return s.slideTo(s.activeIndex, speed, runCallbacks);
      };
      
      s.disableTouchControl = function () {
          s.params.onlyExternal = true;
          return true;
      };
      s.enableTouchControl = function () {
          s.params.onlyExternal = false;
          return true;
      };
      
      /*=========================
        Translate/transition helpers
        ===========================*/
      s.setWrapperTransition = function (duration, byController) {
          s.wrapper.transition(duration);
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
              s.effects[s.params.effect].setTransition(duration);
          }
          if (s.params.parallax && s.parallax) {
              s.parallax.setTransition(duration);
          }
          if (s.params.scrollbar && s.scrollbar) {
              s.scrollbar.setTransition(duration);
          }
          if (s.params.control && s.controller) {
              s.controller.setTransition(duration, byController);
          }
          s.emit('onSetTransition', s, duration);
      };
      s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
          var x = 0, y = 0, z = 0;
          if (s.isHorizontal()) {
              x = s.rtl ? -translate : translate;
          }
          else {
              y = translate;
          }
      
          if (s.params.roundLengths) {
              x = round(x);
              y = round(y);
          }
      
          if (!s.params.virtualTranslate) {
              if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
              else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
          }
      
          s.translate = s.isHorizontal() ? x : y;
      
          // Check if we need to update progress
          var progress;
          var translatesDiff = s.maxTranslate() - s.minTranslate();
          if (translatesDiff === 0) {
              progress = 0;
          }
          else {
              progress = (translate - s.minTranslate()) / (translatesDiff);
          }
          if (progress !== s.progress) {
              s.updateProgress(translate);
          }
      
          if (updateActiveIndex) s.updateActiveIndex();
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
              s.effects[s.params.effect].setTranslate(s.translate);
          }
          if (s.params.parallax && s.parallax) {
              s.parallax.setTranslate(s.translate);
          }
          if (s.params.scrollbar && s.scrollbar) {
              s.scrollbar.setTranslate(s.translate);
          }
          if (s.params.control && s.controller) {
              s.controller.setTranslate(s.translate, byController);
          }
          s.emit('onSetTranslate', s, s.translate);
      };
      
      s.getTranslate = function (el, axis) {
          var matrix, curTransform, curStyle, transformMatrix;
      
          // automatic axis detection
          if (typeof axis === 'undefined') {
              axis = 'x';
          }
      
          if (s.params.virtualTranslate) {
              return s.rtl ? -s.translate : s.translate;
          }
      
          curStyle = window.getComputedStyle(el, null);
          if (window.WebKitCSSMatrix) {
              curTransform = curStyle.transform || curStyle.webkitTransform;
              if (curTransform.split(',').length > 6) {
                  curTransform = curTransform.split(', ').map(function(a){
                      return a.replace(',','.');
                  }).join(', ');
              }
              // Some old versions of Webkit choke when 'none' is passed; pass
              // empty string instead in this case
              transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
          }
          else {
              transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
              matrix = transformMatrix.toString().split(',');
          }
      
          if (axis === 'x') {
              //Latest Chrome and webkits Fix
              if (window.WebKitCSSMatrix)
                  curTransform = transformMatrix.m41;
              //Crazy IE10 Matrix
              else if (matrix.length === 16)
                  curTransform = parseFloat(matrix[12]);
              //Normal Browsers
              else
                  curTransform = parseFloat(matrix[4]);
          }
          if (axis === 'y') {
              //Latest Chrome and webkits Fix
              if (window.WebKitCSSMatrix)
                  curTransform = transformMatrix.m42;
              //Crazy IE10 Matrix
              else if (matrix.length === 16)
                  curTransform = parseFloat(matrix[13]);
              //Normal Browsers
              else
                  curTransform = parseFloat(matrix[5]);
          }
          if (s.rtl && curTransform) curTransform = -curTransform;
          return curTransform || 0;
      };
      s.getWrapperTranslate = function (axis) {
          if (typeof axis === 'undefined') {
              axis = s.isHorizontal() ? 'x' : 'y';
          }
          return s.getTranslate(s.wrapper[0], axis);
      };
      
      /*=========================
        Observer
        ===========================*/
      s.observers = [];
      function initObserver(target, options) {
          options = options || {};
          // create an observer instance
          var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
          var observer = new ObserverFunc(function (mutations) {
              mutations.forEach(function (mutation) {
                  s.onResize(true);
                  s.emit('onObserverUpdate', s, mutation);
              });
          });
      
          observer.observe(target, {
              attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
              childList: typeof options.childList === 'undefined' ? true : options.childList,
              characterData: typeof options.characterData === 'undefined' ? true : options.characterData
          });
      
          s.observers.push(observer);
      }
      s.initObservers = function () {
          if (s.params.observeParents) {
              var containerParents = s.container.parents();
              for (var i = 0; i < containerParents.length; i++) {
                  initObserver(containerParents[i]);
              }
          }
      
          // Observe container
          initObserver(s.container[0], {childList: false});
      
          // Observe wrapper
          initObserver(s.wrapper[0], {attributes: false});
      };
      s.disconnectObservers = function () {
          for (var i = 0; i < s.observers.length; i++) {
              s.observers[i].disconnect();
          }
          s.observers = [];
      };
      /*=========================
        Loop
        ===========================*/
      // Create looped slides
      s.createLoop = function () {
          // Remove duplicated slides
          s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
      
          var slides = s.wrapper.children('.' + s.params.slideClass);
      
          if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
      
          s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
          s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
          if (s.loopedSlides > slides.length) {
              s.loopedSlides = slides.length;
          }
      
          var prependSlides = [], appendSlides = [], i;
          slides.each(function (index, el) {
              var slide = $(this);
              if (index < s.loopedSlides) appendSlides.push(el);
              if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
              slide.attr('data-swiper-slide-index', index);
          });
          for (i = 0; i < appendSlides.length; i++) {
              s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
          }
          for (i = prependSlides.length - 1; i >= 0; i--) {
              s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
          }
      };
      s.destroyLoop = function () {
          s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
          s.slides.removeAttr('data-swiper-slide-index');
      };
      s.reLoop = function (updatePosition) {
          var oldIndex = s.activeIndex - s.loopedSlides;
          s.destroyLoop();
          s.createLoop();
          s.updateSlidesSize();
          if (updatePosition) {
              s.slideTo(oldIndex + s.loopedSlides, 0, false);
          }
      };
      s.fixLoop = function () {
          var newIndex;
          //Fix For Negative Oversliding
          if (s.activeIndex < s.loopedSlides) {
              newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
              newIndex = newIndex + s.loopedSlides;
              s.slideTo(newIndex, 0, false, true);
          }
          //Fix For Positive Oversliding
          else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
              newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
              newIndex = newIndex + s.loopedSlides;
              s.slideTo(newIndex, 0, false, true);
          }
      };
      /*=========================
        Append/Prepend/Remove Slides
        ===========================*/
      s.appendSlide = function (slides) {
          if (s.params.loop) {
              s.destroyLoop();
          }
          if (typeof slides === 'object' && slides.length) {
              for (var i = 0; i < slides.length; i++) {
                  if (slides[i]) s.wrapper.append(slides[i]);
              }
          }
          else {
              s.wrapper.append(slides);
          }
          if (s.params.loop) {
              s.createLoop();
          }
          if (!(s.params.observer && s.support.observer)) {
              s.update(true);
          }
      };
      s.prependSlide = function (slides) {
          if (s.params.loop) {
              s.destroyLoop();
          }
          var newActiveIndex = s.activeIndex + 1;
          if (typeof slides === 'object' && slides.length) {
              for (var i = 0; i < slides.length; i++) {
                  if (slides[i]) s.wrapper.prepend(slides[i]);
              }
              newActiveIndex = s.activeIndex + slides.length;
          }
          else {
              s.wrapper.prepend(slides);
          }
          if (s.params.loop) {
              s.createLoop();
          }
          if (!(s.params.observer && s.support.observer)) {
              s.update(true);
          }
          s.slideTo(newActiveIndex, 0, false);
      };
      s.removeSlide = function (slidesIndexes) {
          if (s.params.loop) {
              s.destroyLoop();
              s.slides = s.wrapper.children('.' + s.params.slideClass);
          }
          var newActiveIndex = s.activeIndex,
              indexToRemove;
          if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
              for (var i = 0; i < slidesIndexes.length; i++) {
                  indexToRemove = slidesIndexes[i];
                  if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                  if (indexToRemove < newActiveIndex) newActiveIndex--;
              }
              newActiveIndex = Math.max(newActiveIndex, 0);
          }
          else {
              indexToRemove = slidesIndexes;
              if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
              if (indexToRemove < newActiveIndex) newActiveIndex--;
              newActiveIndex = Math.max(newActiveIndex, 0);
          }
      
          if (s.params.loop) {
              s.createLoop();
          }
      
          if (!(s.params.observer && s.support.observer)) {
              s.update(true);
          }
          if (s.params.loop) {
              s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
          }
          else {
              s.slideTo(newActiveIndex, 0, false);
          }
      
      };
      s.removeAllSlides = function () {
          var slidesIndexes = [];
          for (var i = 0; i < s.slides.length; i++) {
              slidesIndexes.push(i);
          }
          s.removeSlide(slidesIndexes);
      };
      

      /*=========================
        Effects
        ===========================*/
      s.effects = {
          fade: {
              setTranslate: function () {
                  for (var i = 0; i < s.slides.length; i++) {
                      var slide = s.slides.eq(i);
                      var offset = slide[0].swiperSlideOffset;
                      var tx = -offset;
                      if (!s.params.virtualTranslate) tx = tx - s.translate;
                      var ty = 0;
                      if (!s.isHorizontal()) {
                          ty = tx;
                          tx = 0;
                      }
                      var slideOpacity = s.params.fade.crossFade ?
                              Math.max(1 - Math.abs(slide[0].progress), 0) :
                              1 + Math.min(Math.max(slide[0].progress, -1), 0);
                      slide
                          .css({
                              opacity: slideOpacity
                          })
                          .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
      
                  }
      
              },
              setTransition: function (duration) {
                  s.slides.transition(duration);
                  if (s.params.virtualTranslate && duration !== 0) {
                      var eventTriggered = false;
                      s.slides.transitionEnd(function () {
                          if (eventTriggered) return;
                          if (!s) return;
                          eventTriggered = true;
                          s.animating = false;
                          var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                          for (var i = 0; i < triggerEvents.length; i++) {
                              s.wrapper.trigger(triggerEvents[i]);
                          }
                      });
                  }
              }
          },
          flip: {
              setTranslate: function () {
                  for (var i = 0; i < s.slides.length; i++) {
                      var slide = s.slides.eq(i);
                      var progress = slide[0].progress;
                      if (s.params.flip.limitRotation) {
                          progress = Math.max(Math.min(slide[0].progress, 1), -1);
                      }
                      var offset = slide[0].swiperSlideOffset;
                      var rotate = -180 * progress,
                          rotateY = rotate,
                          rotateX = 0,
                          tx = -offset,
                          ty = 0;
                      if (!s.isHorizontal()) {
                          ty = tx;
                          tx = 0;
                          rotateX = -rotateY;
                          rotateY = 0;
                      }
                      else if (s.rtl) {
                          rotateY = -rotateY;
                      }
      
                      slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
      
                      if (s.params.flip.slideShadows) {
                          //Set shadows
                          var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                          var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                          if (shadowBefore.length === 0) {
                              shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                              slide.append(shadowBefore);
                          }
                          if (shadowAfter.length === 0) {
                              shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                              slide.append(shadowAfter);
                          }
                          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                      }
      
                      slide
                          .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                  }
              },
              setTransition: function (duration) {
                  s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                  if (s.params.virtualTranslate && duration !== 0) {
                      var eventTriggered = false;
                      s.slides.eq(s.activeIndex).transitionEnd(function () {
                          if (eventTriggered) return;
                          if (!s) return;
                          if (!$(this).hasClass(s.params.slideActiveClass)) return;
                          eventTriggered = true;
                          s.animating = false;
                          var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                          for (var i = 0; i < triggerEvents.length; i++) {
                              s.wrapper.trigger(triggerEvents[i]);
                          }
                      });
                  }
              }
          },
          cube: {
              setTranslate: function () {
                  var wrapperRotate = 0, cubeShadow;
                  if (s.params.cube.shadow) {
                      if (s.isHorizontal()) {
                          cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                          if (cubeShadow.length === 0) {
                              cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                              s.wrapper.append(cubeShadow);
                          }
                          cubeShadow.css({height: s.width + 'px'});
                      }
                      else {
                          cubeShadow = s.container.find('.swiper-cube-shadow');
                          if (cubeShadow.length === 0) {
                              cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                              s.container.append(cubeShadow);
                          }
                      }
                  }
                  for (var i = 0; i < s.slides.length; i++) {
                      var slide = s.slides.eq(i);
                      var slideAngle = i * 90;
                      var round = Math.floor(slideAngle / 360);
                      if (s.rtl) {
                          slideAngle = -slideAngle;
                          round = Math.floor(-slideAngle / 360);
                      }
                      var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                      var tx = 0, ty = 0, tz = 0;
                      if (i % 4 === 0) {
                          tx = - round * 4 * s.size;
                          tz = 0;
                      }
                      else if ((i - 1) % 4 === 0) {
                          tx = 0;
                          tz = - round * 4 * s.size;
                      }
                      else if ((i - 2) % 4 === 0) {
                          tx = s.size + round * 4 * s.size;
                          tz = s.size;
                      }
                      else if ((i - 3) % 4 === 0) {
                          tx = - s.size;
                          tz = 3 * s.size + s.size * 4 * round;
                      }
                      if (s.rtl) {
                          tx = -tx;
                      }
      
                      if (!s.isHorizontal()) {
                          ty = tx;
                          tx = 0;
                      }
      
                      var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                      if (progress <= 1 && progress > -1) {
                          wrapperRotate = i * 90 + progress * 90;
                          if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                      }
                      slide.transform(transform);
                      if (s.params.cube.slideShadows) {
                          //Set shadows
                          var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                          var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                          if (shadowBefore.length === 0) {
                              shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                              slide.append(shadowBefore);
                          }
                          if (shadowAfter.length === 0) {
                              shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                              slide.append(shadowAfter);
                          }
                          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                      }
                  }
                  s.wrapper.css({
                      '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                      '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                      '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                      'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                  });
      
                  if (s.params.cube.shadow) {
                      if (s.isHorizontal()) {
                          cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                      }
                      else {
                          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                          var scale1 = s.params.cube.shadowScale,
                              scale2 = s.params.cube.shadowScale / multiplier,
                              offset = s.params.cube.shadowOffset;
                          cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                      }
                  }
                  var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                  s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
              },
              setTransition: function (duration) {
                  s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                  if (s.params.cube.shadow && !s.isHorizontal()) {
                      s.container.find('.swiper-cube-shadow').transition(duration);
                  }
              }
          },
          coverflow: {
              setTranslate: function () {
                  var transform = s.translate;
                  var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                  var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                  var translate = s.params.coverflow.depth;
                  //Each slide offset from center
                  for (var i = 0, length = s.slides.length; i < length; i++) {
                      var slide = s.slides.eq(i);
                      var slideSize = s.slidesSizesGrid[i];
                      var slideOffset = slide[0].swiperSlideOffset;
                      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
      
                      var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                      var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                      // var rotateZ = 0
                      var translateZ = -translate * Math.abs(offsetMultiplier);
      
                      var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                      var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
      
                      //Fix for ultra small values
                      if (Math.abs(translateX) < 0.001) translateX = 0;
                      if (Math.abs(translateY) < 0.001) translateY = 0;
                      if (Math.abs(translateZ) < 0.001) translateZ = 0;
                      if (Math.abs(rotateY) < 0.001) rotateY = 0;
                      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      
                      var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      
                      slide.transform(slideTransform);
                      slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                      if (s.params.coverflow.slideShadows) {
                          //Set shadows
                          var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                          var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                          if (shadowBefore.length === 0) {
                              shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                              slide.append(shadowBefore);
                          }
                          if (shadowAfter.length === 0) {
                              shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                              slide.append(shadowAfter);
                          }
                          if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                          if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                      }
                  }
      
                  //Set correct perspective for IE10
                  if (s.browser.ie) {
                      var ws = s.wrapper[0].style;
                      ws.perspectiveOrigin = center + 'px 50%';
                  }
              },
              setTransition: function (duration) {
                  s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
              }
          }
      };
      

      /*=========================
        Images Lazy Loading
        ===========================*/
      s.lazy = {
          initialImageLoaded: false,
          loadImageInSlide: function (index, loadInDuplicate) {
              if (typeof index === 'undefined') return;
              if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
              if (s.slides.length === 0) return;
      
              var slide = s.slides.eq(index);
              var img = slide.find('.' + s.params.lazyLoadingClass + ':not(.' + s.params.lazyStatusLoadedClass + '):not(.' + s.params.lazyStatusLoadingClass + ')');
              if (slide.hasClass(s.params.lazyLoadingClass) && !slide.hasClass(s.params.lazyStatusLoadedClass) && !slide.hasClass(s.params.lazyStatusLoadingClass)) {
                  img = img.add(slide[0]);
              }
              if (img.length === 0) return;
      
              img.each(function () {
                  var _img = $(this);
                  _img.addClass(s.params.lazyStatusLoadingClass);
                  var background = _img.attr('data-background');
                  var src = _img.attr('data-src'),
                      srcset = _img.attr('data-srcset'),
                      sizes = _img.attr('data-sizes');
                  s.loadImage(_img[0], (src || background), srcset, sizes, false, function () {
                      if (typeof s === 'undefined' || s === null || !s) return;
                      if (background) {
                          _img.css('background-image', 'url("' + background + '")');
                          _img.removeAttr('data-background');
                      }
                      else {
                          if (srcset) {
                              _img.attr('srcset', srcset);
                              _img.removeAttr('data-srcset');
                          }
                          if (sizes) {
                              _img.attr('sizes', sizes);
                              _img.removeAttr('data-sizes');
                          }
                          if (src) {
                              _img.attr('src', src);
                              _img.removeAttr('data-src');
                          }
      
                      }
      
                      _img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);
                      slide.find('.' + s.params.lazyPreloaderClass + ', .' + s.params.preloaderClass).remove();
                      if (s.params.loop && loadInDuplicate) {
                          var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                          if (slide.hasClass(s.params.slideDuplicateClass)) {
                              var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                              s.lazy.loadImageInSlide(originalSlide.index(), false);
                          }
                          else {
                              var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                              s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                          }
                      }
                      s.emit('onLazyImageReady', s, slide[0], _img[0]);
                  });
      
                  s.emit('onLazyImageLoad', s, slide[0], _img[0]);
              });
      
          },
          load: function () {
              var i;
              var slidesPerView = s.params.slidesPerView;
              if (slidesPerView === 'auto') {
                  slidesPerView = 0;
              }
              if (!s.lazy.initialImageLoaded) s.lazy.initialImageLoaded = true;
              if (s.params.watchSlidesVisibility) {
                  s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                      s.lazy.loadImageInSlide($(this).index());
                  });
              }
              else {
                  if (slidesPerView > 1) {
                      for (i = s.activeIndex; i < s.activeIndex + slidesPerView ; i++) {
                          if (s.slides[i]) s.lazy.loadImageInSlide(i);
                      }
                  }
                  else {
                      s.lazy.loadImageInSlide(s.activeIndex);
                  }
              }
              if (s.params.lazyLoadingInPrevNext) {
                  if (slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                      var amount = s.params.lazyLoadingInPrevNextAmount;
                      var spv = slidesPerView;
                      var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                      var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                      // Next Slides
                      for (i = s.activeIndex + slidesPerView; i < maxIndex; i++) {
                          if (s.slides[i]) s.lazy.loadImageInSlide(i);
                      }
                      // Prev Slides
                      for (i = minIndex; i < s.activeIndex ; i++) {
                          if (s.slides[i]) s.lazy.loadImageInSlide(i);
                      }
                  }
                  else {
                      var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                      if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
      
                      var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                      if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                  }
              }
          },
          onTransitionStart: function () {
              if (s.params.lazyLoading) {
                  if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                      s.lazy.load();
                  }
              }
          },
          onTransitionEnd: function () {
              if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                  s.lazy.load();
              }
          }
      };
      

      /*=========================
        Scrollbar
        ===========================*/
      s.scrollbar = {
          isTouched: false,
          setDragPosition: function (e) {
              var sb = s.scrollbar;
              var x = 0, y = 0;
              var translate;
              var pointerPosition = s.isHorizontal() ?
                  ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                  ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
              var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
              var positionMin = -s.minTranslate() * sb.moveDivider;
              var positionMax = -s.maxTranslate() * sb.moveDivider;
              if (position < positionMin) {
                  position = positionMin;
              }
              else if (position > positionMax) {
                  position = positionMax;
              }
              position = -position / sb.moveDivider;
              s.updateProgress(position);
              s.setWrapperTranslate(position, true);
          },
          dragStart: function (e) {
              var sb = s.scrollbar;
              sb.isTouched = true;
              e.preventDefault();
              e.stopPropagation();
      
              sb.setDragPosition(e);
              clearTimeout(sb.dragTimeout);
      
              sb.track.transition(0);
              if (s.params.scrollbarHide) {
                  sb.track.css('opacity', 1);
              }
              s.wrapper.transition(100);
              sb.drag.transition(100);
              s.emit('onScrollbarDragStart', s);
          },
          dragMove: function (e) {
              var sb = s.scrollbar;
              if (!sb.isTouched) return;
              if (e.preventDefault) e.preventDefault();
              else e.returnValue = false;
              sb.setDragPosition(e);
              s.wrapper.transition(0);
              sb.track.transition(0);
              sb.drag.transition(0);
              s.emit('onScrollbarDragMove', s);
          },
          dragEnd: function (e) {
              var sb = s.scrollbar;
              if (!sb.isTouched) return;
              sb.isTouched = false;
              if (s.params.scrollbarHide) {
                  clearTimeout(sb.dragTimeout);
                  sb.dragTimeout = setTimeout(function () {
                      sb.track.css('opacity', 0);
                      sb.track.transition(400);
                  }, 1000);
      
              }
              s.emit('onScrollbarDragEnd', s);
              if (s.params.scrollbarSnapOnRelease) {
                  s.slideReset();
              }
          },
          draggableEvents: (function () {
              if ((s.params.simulateTouch === false && !s.support.touch)) return s.touchEventsDesktop;
              else return s.touchEvents;
          })(),
          enableDraggable: function () {
              var sb = s.scrollbar;
              var target = s.support.touch ? sb.track : document;
              $(sb.track).on(sb.draggableEvents.start, sb.dragStart);
              $(target).on(sb.draggableEvents.move, sb.dragMove);
              $(target).on(sb.draggableEvents.end, sb.dragEnd);
          },
          disableDraggable: function () {
              var sb = s.scrollbar;
              var target = s.support.touch ? sb.track : document;
              $(sb.track).off(sb.draggableEvents.start, sb.dragStart);
              $(target).off(sb.draggableEvents.move, sb.dragMove);
              $(target).off(sb.draggableEvents.end, sb.dragEnd);
          },
          set: function () {
              if (!s.params.scrollbar) return;
              var sb = s.scrollbar;
              sb.track = $(s.params.scrollbar);
              if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                  sb.track = s.container.find(s.params.scrollbar);
              }
              sb.drag = sb.track.find('.swiper-scrollbar-drag');
              if (sb.drag.length === 0) {
                  sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                  sb.track.append(sb.drag);
              }
              sb.drag[0].style.width = '';
              sb.drag[0].style.height = '';
              sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
      
              sb.divider = s.size / s.virtualSize;
              sb.moveDivider = sb.divider * (sb.trackSize / s.size);
              sb.dragSize = sb.trackSize * sb.divider;
      
              if (s.isHorizontal()) {
                  sb.drag[0].style.width = sb.dragSize + 'px';
              }
              else {
                  sb.drag[0].style.height = sb.dragSize + 'px';
              }
      
              if (sb.divider >= 1) {
                  sb.track[0].style.display = 'none';
              }
              else {
                  sb.track[0].style.display = '';
              }
              if (s.params.scrollbarHide) {
                  sb.track[0].style.opacity = 0;
              }
          },
          setTranslate: function () {
              if (!s.params.scrollbar) return;
              var diff;
              var sb = s.scrollbar;
              var translate = s.translate || 0;
              var newPos;
      
              var newSize = sb.dragSize;
              newPos = (sb.trackSize - sb.dragSize) * s.progress;
              if (s.rtl && s.isHorizontal()) {
                  newPos = -newPos;
                  if (newPos > 0) {
                      newSize = sb.dragSize - newPos;
                      newPos = 0;
                  }
                  else if (-newPos + sb.dragSize > sb.trackSize) {
                      newSize = sb.trackSize + newPos;
                  }
              }
              else {
                  if (newPos < 0) {
                      newSize = sb.dragSize + newPos;
                      newPos = 0;
                  }
                  else if (newPos + sb.dragSize > sb.trackSize) {
                      newSize = sb.trackSize - newPos;
                  }
              }
              if (s.isHorizontal()) {
                  if (s.support.transforms3d) {
                      sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                  }
                  else {
                      sb.drag.transform('translateX(' + (newPos) + 'px)');
                  }
                  sb.drag[0].style.width = newSize + 'px';
              }
              else {
                  if (s.support.transforms3d) {
                      sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                  }
                  else {
                      sb.drag.transform('translateY(' + (newPos) + 'px)');
                  }
                  sb.drag[0].style.height = newSize + 'px';
              }
              if (s.params.scrollbarHide) {
                  clearTimeout(sb.timeout);
                  sb.track[0].style.opacity = 1;
                  sb.timeout = setTimeout(function () {
                      sb.track[0].style.opacity = 0;
                      sb.track.transition(400);
                  }, 1000);
              }
          },
          setTransition: function (duration) {
              if (!s.params.scrollbar) return;
              s.scrollbar.drag.transition(duration);
          }
      };
      

      /*=========================
        Controller
        ===========================*/
      s.controller = {
          LinearSpline: function (x, y) {
              var binarySearch = (function() {
                  var maxIndex, minIndex, guess;
                  return function(array, val) {
                      minIndex = -1;
                      maxIndex = array.length;
                      while (maxIndex - minIndex > 1)
                          if (array[guess = maxIndex + minIndex >> 1] <= val) {
                              minIndex = guess;
                          } else {
                              maxIndex = guess;
                          }
                      return maxIndex;
                  };
              })();
              this.x = x;
              this.y = y;
              this.lastIndex = x.length - 1;
              // Given an x value (x2), return the expected y2 value:
              // (x1,y1) is the known point before given value,
              // (x3,y3) is the known point after given value.
              var i1, i3;
              var l = this.x.length;
      
              this.interpolate = function (x2) {
                  if (!x2) return 0;
      
                  // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                  i3 = binarySearch(this.x, x2);
                  i1 = i3 - 1;
      
                  // We have our indexes i1 & i3, so we can calculate already:
                  // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                  return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
              };
          },
          //xxx: for now i will just save one spline function to to
          getInterpolateFunction: function(c){
              if(!s.controller.spline) s.controller.spline = s.params.loop ?
                  new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                  new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
          },
          setTranslate: function (translate, byController) {
             var controlled = s.params.control;
             var multiplier, controlledTranslate;
             function setControlledTranslate(c) {
                  // this will create an Interpolate function based on the snapGrids
                  // x is the Grid of the scrolled scroller and y will be the controlled scroller
                  // it makes sense to create this only once and recall it for the interpolation
                  // the function does a lot of value caching for performance
                  translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                  if (s.params.controlBy === 'slide') {
                      s.controller.getInterpolateFunction(c);
                      // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                      // but it did not work out
                      controlledTranslate = -s.controller.spline.interpolate(-translate);
                  }
      
                  if(!controlledTranslate || s.params.controlBy === 'container'){
                      multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                      controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                  }
      
                  if (s.params.controlInverse) {
                      controlledTranslate = c.maxTranslate() - controlledTranslate;
                  }
                  c.updateProgress(controlledTranslate);
                  c.setWrapperTranslate(controlledTranslate, false, s);
                  c.updateActiveIndex();
             }
             if (Array.isArray(controlled)) {
                 for (var i = 0; i < controlled.length; i++) {
                     if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                         setControlledTranslate(controlled[i]);
                     }
                 }
             }
             else if (controlled instanceof Swiper && byController !== controlled) {
      
                 setControlledTranslate(controlled);
             }
          },
          setTransition: function (duration, byController) {
              var controlled = s.params.control;
              var i;
              function setControlledTransition(c) {
                  c.setWrapperTransition(duration, s);
                  if (duration !== 0) {
                      c.onTransitionStart();
                      c.wrapper.transitionEnd(function(){
                          if (!controlled) return;
                          if (c.params.loop && s.params.controlBy === 'slide') {
                              c.fixLoop();
                          }
                          c.onTransitionEnd();
      
                      });
                  }
              }
              if (Array.isArray(controlled)) {
                  for (i = 0; i < controlled.length; i++) {
                      if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                          setControlledTransition(controlled[i]);
                      }
                  }
              }
              else if (controlled instanceof Swiper && byController !== controlled) {
                  setControlledTransition(controlled);
              }
          }
      };
      

      /*=========================
        Hash Navigation
        ===========================*/
      s.hashnav = {
          onHashCange: function (e, a) {
              var newHash = document.location.hash.replace('#', '');
              var activeSlideHash = s.slides.eq(s.activeIndex).attr('data-hash');
              if (newHash !== activeSlideHash) {
                  s.slideTo(s.wrapper.children('.' + s.params.slideClass + '[data-hash="' + (newHash) + '"]').index());
              }
          },
          attachEvents: function (detach) {
              var action = detach ? 'off' : 'on';
              $(window)[action]('hashchange', s.hashnav.onHashCange);
          },
          setHash: function () {
              if (!s.hashnav.initialized || !s.params.hashnav) return;
              if (s.params.replaceState && window.history && window.history.replaceState) {
                  window.history.replaceState(null, null, ('#' + s.slides.eq(s.activeIndex).attr('data-hash') || ''));
              } else {
                  var slide = s.slides.eq(s.activeIndex);
                  var hash = slide.attr('data-hash') || slide.attr('data-history');
                  document.location.hash = hash || '';
              }
          },
          init: function () {
              if (!s.params.hashnav || s.params.history) return;
              s.hashnav.initialized = true;
              var hash = document.location.hash.replace('#', '');
              if (hash) {
                  var speed = 0;
                  for (var i = 0, length = s.slides.length; i < length; i++) {
                      var slide = s.slides.eq(i);
                      var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                      if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                          var index = slide.index();
                          s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                      }
                  }
              }
              if (s.params.hashnavWatchState) s.hashnav.attachEvents();
          },
          destroy: function () {
              if (s.params.hashnavWatchState) s.hashnav.attachEvents(true);
          }
      };
      

      /*=========================
        History Api with fallback to Hashnav
        ===========================*/
      s.history = {
          init: function () {
              if (!s.params.history) return;
              if (!window.history || !window.history.pushState) {
                  s.params.history = false;
                  s.params.hashnav = true;
                  return;
              }
              s.history.initialized = true;
              this.paths = this.getPathValues();
              if (!this.paths.key && !this.paths.value) return;
              this.scrollToSlide(0, this.paths.value, s.params.runCallbacksOnInit);
              if (!s.params.replaceState) {
                  window.addEventListener('popstate', this.setHistoryPopState);
              }
          },
          setHistoryPopState: function() {
              s.history.paths = s.history.getPathValues();
              s.history.scrollToSlide(s.params.speed, s.history.paths.value, false);
          },
          getPathValues: function() {
              var pathArray = window.location.pathname.slice(1).split('/');
              var total = pathArray.length;
              var key = pathArray[total - 2];
              var value = pathArray[total - 1];
              return { key: key, value: value };
          },
          setHistory: function (key, index) {
              if (!s.history.initialized || !s.params.history) return;
              var slide = s.slides.eq(index);
              var value = this.slugify(slide.attr('data-history'));
              if (!window.location.pathname.includes(key)) {
                  value = key + '/' + value;
              }
              if (s.params.replaceState) {
                  window.history.replaceState(null, null, value);
              } else {
                  window.history.pushState(null, null, value);
              }
          },
          slugify: function(text) {
              return text.toString().toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^\w\-]+/g, '')
                  .replace(/\-\-+/g, '-')
                  .replace(/^-+/, '')
                  .replace(/-+$/, '');
          },
          scrollToSlide: function(speed, value, runCallbacks) {
              if (value) {
                  for (var i = 0, length = s.slides.length; i < length; i++) {
                      var slide = s.slides.eq(i);
                      var slideHistory = this.slugify(slide.attr('data-history'));
                      if (slideHistory === value && !slide.hasClass(s.params.slideDuplicateClass)) {
                          var index = slide.index();
                          s.slideTo(index, speed, runCallbacks);
                      }
                  }
              } else {
                  s.slideTo(0, speed, runCallbacks);
              }
          }
      };
      

      /*=========================
        Keyboard Control
        ===========================*/
      function handleKeyboard(e) {
          if (e.originalEvent) e = e.originalEvent; //jquery fix
          var kc = e.keyCode || e.charCode;
          // Directions locks
          if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
              return false;
          }
          if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
              return false;
          }
          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
              return;
          }
          if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
              return;
          }
          if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
              var inView = false;
              //Check that swiper should be inside of visible area of window
              if (s.container.parents('.' + s.params.slideClass).length > 0 && s.container.parents('.' + s.params.slideActiveClass).length === 0) {
                  return;
              }
              var windowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
              };
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var swiperOffset = s.container.offset();
              if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
              var swiperCoord = [
                  [swiperOffset.left, swiperOffset.top],
                  [swiperOffset.left + s.width, swiperOffset.top],
                  [swiperOffset.left, swiperOffset.top + s.height],
                  [swiperOffset.left + s.width, swiperOffset.top + s.height]
              ];
              for (var i = 0; i < swiperCoord.length; i++) {
                  var point = swiperCoord[i];
                  if (
                      point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                      point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                  ) {
                      inView = true;
                  }
      
              }
              if (!inView) return;
          }
          if (s.isHorizontal()) {
              if (kc === 37 || kc === 39) {
                  if (e.preventDefault) e.preventDefault();
                  else e.returnValue = false;
              }
              if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
              if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
          }
          else {
              if (kc === 38 || kc === 40) {
                  if (e.preventDefault) e.preventDefault();
                  else e.returnValue = false;
              }
              if (kc === 40) s.slideNext();
              if (kc === 38) s.slidePrev();
          }
          s.emit('onKeyPress', s, kc);
      }
      s.disableKeyboardControl = function () {
          s.params.keyboardControl = false;
          $(document).off('keydown', handleKeyboard);
      };
      s.enableKeyboardControl = function () {
          s.params.keyboardControl = true;
          $(document).on('keydown', handleKeyboard);
      };
      

      /*=========================
        Mousewheel Control
        ===========================*/
      s.mousewheel = {
          event: false,
          lastScrollTime: (new window.Date()).getTime()
      };
      function isEventSupported() {
          var eventName = 'onwheel';
          var isSupported = eventName in document;
      
          if (!isSupported) {
              var element = document.createElement('div');
              element.setAttribute(eventName, 'return;');
              isSupported = typeof element[eventName] === 'function';
          }
      
          if (!isSupported &&
              document.implementation &&
              document.implementation.hasFeature &&
                  // always returns true in newer browsers as per the standard.
                  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
              document.implementation.hasFeature('', '') !== true ) {
              // This is the only way to test support for the `wheel` event in IE9+.
              isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
          }
      
          return isSupported;
      }
      /**
       * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
       * complicated, thus this doc is long and (hopefully) detailed enough to answer
       * your questions.
       *
       * If you need to react to the mouse wheel in a predictable way, this code is
       * like your bestest friend. * hugs *
       *
       * As of today, there are 4 DOM event types you can listen to:
       *
       *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
       *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
       *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
       *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
       *
       * So what to do?  The is the best:
       *
       *   normalizeWheel.getEventType();
       *
       * In your event callback, use this code to get sane interpretation of the
       * deltas.  This code will return an object with properties:
       *
       *   spinX   -- normalized spin speed (use for zoom) - x plane
       *   spinY   -- " - y plane
       *   pixelX  -- normalized distance (to pixels) - x plane
       *   pixelY  -- " - y plane
       *
       * Wheel values are provided by the browser assuming you are using the wheel to
       * scroll a web page by a number of lines or pixels (or pages).  Values can vary
       * significantly on different platforms and browsers, forgetting that you can
       * scroll at different speeds.  Some devices (like trackpads) emit more events
       * at smaller increments with fine granularity, and some emit massive jumps with
       * linear speed or acceleration.
       *
       * This code does its best to normalize the deltas for you:
       *
       *   - spin is trying to normalize how far the wheel was spun (or trackpad
       *     dragged).  This is super useful for zoom support where you want to
       *     throw away the chunky scroll steps on the PC and make those equal to
       *     the slow and smooth tiny steps on the Mac. Key data: This code tries to

       *     resolve a single slow step on a wheel to 1.
       *
       *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
       *     get the crazy differences between browsers, but at least it'll be in
       *     pixels!
       *
       *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
       *     should translate to positive value zooming IN, negative zooming OUT.
       *     This matches the newer 'wheel' event.
       *
       * Why are there spinX, spinY (or pixels)?
       *
       *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
       *     with a mouse.  It results in side-scrolling in the browser by default.
       *
       *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
       *
       *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
       *     probably is by browsers in conjunction with fancy 3D controllers .. but
       *     you know.
       *
       * Implementation info:
       *
       * Examples of 'wheel' event if you scroll slowly (down) by one step with an
       * average mouse:
       *
       *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
       *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
       *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
       *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
       *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
       *
       * On the trackpad:
       *
       *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
       *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
       *
       * On other/older browsers.. it's more complicated as there can be multiple and
       * also missing delta values.
       *
       * The 'wheel' event is more standard:
       *
       * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
       *
       * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
       * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
       * backward compatibility with older events.  Those other values help us
       * better normalize spin speed.  Example of what the browsers provide:
       *
       *                          | event.wheelDelta | event.detail
       *        ------------------+------------------+--------------
       *          Safari v5/OS X  |       -120       |       0
       *          Safari v5/Win7  |       -120       |       0
       *         Chrome v17/OS X  |       -120       |       0
       *         Chrome v17/Win7  |       -120       |       0
       *                IE9/Win7  |       -120       |   undefined
       *         Firefox v4/OS X  |     undefined    |       1
       *         Firefox v4/Win7  |     undefined    |       3
       *
       */
      function normalizeWheel( /*object*/ event ) /*object*/ {
          // Reasonable defaults
          var PIXEL_STEP = 10;
          var LINE_HEIGHT = 40;
          var PAGE_HEIGHT = 800;
      
          var sX = 0, sY = 0,       // spinX, spinY
              pX = 0, pY = 0;       // pixelX, pixelY
      
          // Legacy
          if( 'detail' in event ) {
              sY = event.detail;
          }
          if( 'wheelDelta' in event ) {
              sY = -event.wheelDelta / 120;
          }
          if( 'wheelDeltaY' in event ) {
              sY = -event.wheelDeltaY / 120;
          }
          if( 'wheelDeltaX' in event ) {
              sX = -event.wheelDeltaX / 120;
          }
      
          // side scrolling on FF with DOMMouseScroll
          if( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
              sX = sY;
              sY = 0;
          }
      
          pX = sX * PIXEL_STEP;
          pY = sY * PIXEL_STEP;
      
          if( 'deltaY' in event ) {
              pY = event.deltaY;
          }
          if( 'deltaX' in event ) {
              pX = event.deltaX;
          }
      
          if( (pX || pY) && event.deltaMode ) {
              if( event.deltaMode === 1 ) {          // delta in LINE units
                  pX *= LINE_HEIGHT;
                  pY *= LINE_HEIGHT;
              } else {                             // delta in PAGE units
                  pX *= PAGE_HEIGHT;
                  pY *= PAGE_HEIGHT;
              }
          }
      
          // Fall-back if spin cannot be determined
          if( pX && !sX ) {
              sX = (pX < 1) ? -1 : 1;
          }
          if( pY && !sY ) {
              sY = (pY < 1) ? -1 : 1;
          }
      
          return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY
          };
      }
      if (s.params.mousewheelControl) {
          /**
           * The best combination if you prefer spinX + spinY normalization.  It favors
           * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
           * 'wheel' event, making spin speed determination impossible.
           */
          s.mousewheel.event = (navigator.userAgent.indexOf('firefox') > -1) ?
              'DOMMouseScroll' :
              isEventSupported() ?
                  'wheel' : 'mousewheel';
      }
      function handleMousewheel(e) {
          if (e.originalEvent) e = e.originalEvent; //jquery fix
          var delta = 0;
          var rtlFactor = s.rtl ? -1 : 1;
      
          var data = normalizeWheel( e );
      
          if (s.params.mousewheelForceToAxis) {
              if (s.isHorizontal()) {
                  if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
                  else return;
              }
              else {
                  if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
                  else return;
              }
          }
          else {
              delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? - data.pixelX * rtlFactor : - data.pixelY;
          }
      
          if (delta === 0) return;
      
          if (s.params.mousewheelInvert) delta = -delta;
      
          if (!s.params.freeMode) {
              if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                  if (delta < 0) {
                      if ((!s.isEnd || s.params.loop) && !s.animating) {
                          s.slideNext();
                          s.emit('onScroll', s, e);
                      }
                      else if (s.params.mousewheelReleaseOnEdges) return true;
                  }
                  else {
                      if ((!s.isBeginning || s.params.loop) && !s.animating) {
                          s.slidePrev();
                          s.emit('onScroll', s, e);
                      }
                      else if (s.params.mousewheelReleaseOnEdges) return true;
                  }
              }
              s.mousewheel.lastScrollTime = (new window.Date()).getTime();
      
          }
          else {
              //Freemode or scrollContainer:
              var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
              var wasBeginning = s.isBeginning,
                  wasEnd = s.isEnd;
      
              if (position >= s.minTranslate()) position = s.minTranslate();
              if (position <= s.maxTranslate()) position = s.maxTranslate();
      
              s.setWrapperTransition(0);
              s.setWrapperTranslate(position);
              s.updateProgress();
              s.updateActiveIndex();
      
              if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                  s.updateClasses();
              }
      
              if (s.params.freeModeSticky) {
                  clearTimeout(s.mousewheel.timeout);
                  s.mousewheel.timeout = setTimeout(function () {
                      s.slideReset();
                  }, 300);
              }
              else {
                  if (s.params.lazyLoading && s.lazy) {
                      s.lazy.load();
                  }
              }
              // Emit event
              s.emit('onScroll', s, e);
      
              // Stop autoplay
              if (s.params.autoplay && s.params.autoplayDisableOnInteraction) s.stopAutoplay();
      
              // Return page scroll on edge positions
              if (position === 0 || position === s.maxTranslate()) return;
          }
      
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
          return false;
      }
      s.disableMousewheelControl = function () {
          if (!s.mousewheel.event) return false;
          var target = s.container;
          if (s.params.mousewheelEventsTarged !== 'container') {
              target = $(s.params.mousewheelEventsTarged);
          }
          target.off(s.mousewheel.event, handleMousewheel);
          s.params.mousewheelControl = false;
          return true;
      };
      
      s.enableMousewheelControl = function () {
          if (!s.mousewheel.event) return false;
          var target = s.container;
          if (s.params.mousewheelEventsTarged !== 'container') {
              target = $(s.params.mousewheelEventsTarged);
          }
          target.on(s.mousewheel.event, handleMousewheel);
          s.params.mousewheelControl = true;
          return true;
      };
      

      /*=========================
        Parallax
        ===========================*/
      function setParallaxTransform(el, progress) {
          el = $(el);
          var p, pX, pY;
          var rtlFactor = s.rtl ? -1 : 1;
      
          p = el.attr('data-swiper-parallax') || '0';
          pX = el.attr('data-swiper-parallax-x');
          pY = el.attr('data-swiper-parallax-y');
          if (pX || pY) {
              pX = pX || '0';
              pY = pY || '0';
          }
          else {
              if (s.isHorizontal()) {
                  pX = p;
                  pY = '0';
              }
              else {
                  pY = p;
                  pX = '0';
              }
          }
      
          if ((pX).indexOf('%') >= 0) {
              pX = parseInt(pX, 10) * progress * rtlFactor + '%';
          }
          else {
              pX = pX * progress * rtlFactor + 'px' ;
          }
          if ((pY).indexOf('%') >= 0) {
              pY = parseInt(pY, 10) * progress + '%';
          }
          else {
              pY = pY * progress + 'px' ;
          }
      
          el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
      }
      s.parallax = {
          setTranslate: function () {
              s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                  setParallaxTransform(this, s.progress);
      
              });
              s.slides.each(function () {
                  var slide = $(this);
                  slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                      var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                      setParallaxTransform(this, progress);
                  });
              });
          },
          setTransition: function (duration) {
              if (typeof duration === 'undefined') duration = s.params.speed;
              s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                  var el = $(this);
                  var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                  if (duration === 0) parallaxDuration = 0;
                  el.transition(parallaxDuration);
              });
          }
      };
      

      /*=========================
        Zoom
        ===========================*/
      s.zoom = {
          // "Global" Props
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
              slide: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              image: undefined,
              imageWrap: undefined,
              zoomMax: s.params.zoomMax
          },
          image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
          },
          velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
          },
          // Calc Scale From Multi-touches
          getDistanceBetweenTouches: function (e) {
              if (e.targetTouches.length < 2) return 1;
              var x1 = e.targetTouches[0].pageX,
                  y1 = e.targetTouches[0].pageY,
                  x2 = e.targetTouches[1].pageX,
                  y2 = e.targetTouches[1].pageY;
              var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
              return distance;
          },
          // Events
          onGestureStart: function (e) {
              var z = s.zoom;
              if (!s.support.gestures) {
                  if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                      return;
                  }
                  z.gesture.scaleStart = z.getDistanceBetweenTouches(e);
              }
              if (!z.gesture.slide || !z.gesture.slide.length) {
                  z.gesture.slide = $(this);
                  if (z.gesture.slide.length === 0) z.gesture.slide = s.slides.eq(s.activeIndex);
                  z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                  z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
                  z.gesture.zoomMax = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax ;
                  if (z.gesture.imageWrap.length === 0) {
                      z.gesture.image = undefined;
                      return;
                  }
              }
              z.gesture.image.transition(0);
              z.isScaling = true;
          },
          onGestureChange: function (e) {
              var z = s.zoom;
              if (!s.support.gestures) {
                  if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                      return;
                  }
                  z.gesture.scaleMove = z.getDistanceBetweenTouches(e);
              }
              if (!z.gesture.image || z.gesture.image.length === 0) return;
              if (s.support.gestures) {
                  z.scale = e.scale * z.currentScale;
              }
              else {
                  z.scale = (z.gesture.scaleMove / z.gesture.scaleStart) * z.currentScale;
              }
              if (z.scale > z.gesture.zoomMax) {
                  z.scale = z.gesture.zoomMax - 1 + Math.pow((z.scale - z.gesture.zoomMax + 1), 0.5);
              }
              if (z.scale < s.params.zoomMin) {
                  z.scale =  s.params.zoomMin + 1 - Math.pow((s.params.zoomMin - z.scale + 1), 0.5);
              }
              z.gesture.image.transform('translate3d(0,0,0) scale(' + z.scale + ')');
          },
          onGestureEnd: function (e) {
              var z = s.zoom;
              if (!s.support.gestures) {
                  if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2) {
                      return;
                  }
              }
              if (!z.gesture.image || z.gesture.image.length === 0) return;
              z.scale = Math.max(Math.min(z.scale, z.gesture.zoomMax), s.params.zoomMin);
              z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale(' + z.scale + ')');
              z.currentScale = z.scale;
              z.isScaling = false;
              if (z.scale === 1) z.gesture.slide = undefined;
          },
          onTouchStart: function (s, e) {
              var z = s.zoom;
              if (!z.gesture.image || z.gesture.image.length === 0) return;
              if (z.image.isTouched) return;
              if (s.device.os === 'android') e.preventDefault();
              z.image.isTouched = true;
              z.image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
              z.image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
          },
          onTouchMove: function (e) {
              var z = s.zoom;
              if (!z.gesture.image || z.gesture.image.length === 0) return;
              s.allowClick = false;
              if (!z.image.isTouched || !z.gesture.slide) return;
      
              if (!z.image.isMoved) {
                  z.image.width = z.gesture.image[0].offsetWidth;
                  z.image.height = z.gesture.image[0].offsetHeight;
                  z.image.startX = s.getTranslate(z.gesture.imageWrap[0], 'x') || 0;
                  z.image.startY = s.getTranslate(z.gesture.imageWrap[0], 'y') || 0;
                  z.gesture.slideWidth = z.gesture.slide[0].offsetWidth;
                  z.gesture.slideHeight = z.gesture.slide[0].offsetHeight;
                  z.gesture.imageWrap.transition(0);
                  if (s.rtl) z.image.startX = -z.image.startX;
                  if (s.rtl) z.image.startY = -z.image.startY;
              }
              // Define if we need image drag
              var scaledWidth = z.image.width * z.scale;
              var scaledHeight = z.image.height * z.scale;
      
              if (scaledWidth < z.gesture.slideWidth && scaledHeight < z.gesture.slideHeight) return;
      
              z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
              z.image.maxX = -z.image.minX;
              z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
              z.image.maxY = -z.image.minY;
      
              z.image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
              z.image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
      
              if (!z.image.isMoved && !z.isScaling) {
                  if (s.isHorizontal() &&
                      (Math.floor(z.image.minX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x < z.image.touchesStart.x) ||
                      (Math.floor(z.image.maxX) === Math.floor(z.image.startX) && z.image.touchesCurrent.x > z.image.touchesStart.x)
                      ) {
                      z.image.isTouched = false;
                      return;
                  }
                  else if (!s.isHorizontal() &&
                      (Math.floor(z.image.minY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y < z.image.touchesStart.y) ||
                      (Math.floor(z.image.maxY) === Math.floor(z.image.startY) && z.image.touchesCurrent.y > z.image.touchesStart.y)
                      ) {
                      z.image.isTouched = false;
                      return;
                  }
              }
              e.preventDefault();
              e.stopPropagation();
      
              z.image.isMoved = true;
              z.image.currentX = z.image.touchesCurrent.x - z.image.touchesStart.x + z.image.startX;
              z.image.currentY = z.image.touchesCurrent.y - z.image.touchesStart.y + z.image.startY;
      
              if (z.image.currentX < z.image.minX) {
                  z.image.currentX =  z.image.minX + 1 - Math.pow((z.image.minX - z.image.currentX + 1), 0.8);
              }
              if (z.image.currentX > z.image.maxX) {
                  z.image.currentX = z.image.maxX - 1 + Math.pow((z.image.currentX - z.image.maxX + 1), 0.8);
              }
      
              if (z.image.currentY < z.image.minY) {
                  z.image.currentY =  z.image.minY + 1 - Math.pow((z.image.minY - z.image.currentY + 1), 0.8);
              }
              if (z.image.currentY > z.image.maxY) {
                  z.image.currentY = z.image.maxY - 1 + Math.pow((z.image.currentY - z.image.maxY + 1), 0.8);
              }
      
              //Velocity
              if (!z.velocity.prevPositionX) z.velocity.prevPositionX = z.image.touchesCurrent.x;
              if (!z.velocity.prevPositionY) z.velocity.prevPositionY = z.image.touchesCurrent.y;
              if (!z.velocity.prevTime) z.velocity.prevTime = Date.now();
              z.velocity.x = (z.image.touchesCurrent.x - z.velocity.prevPositionX) / (Date.now() - z.velocity.prevTime) / 2;
              z.velocity.y = (z.image.touchesCurrent.y - z.velocity.prevPositionY) / (Date.now() - z.velocity.prevTime) / 2;
              if (Math.abs(z.image.touchesCurrent.x - z.velocity.prevPositionX) < 2) z.velocity.x = 0;
              if (Math.abs(z.image.touchesCurrent.y - z.velocity.prevPositionY) < 2) z.velocity.y = 0;
              z.velocity.prevPositionX = z.image.touchesCurrent.x;
              z.velocity.prevPositionY = z.image.touchesCurrent.y;
              z.velocity.prevTime = Date.now();
      
              z.gesture.imageWrap.transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
          },
          onTouchEnd: function (s, e) {
              var z = s.zoom;
              if (!z.gesture.image || z.gesture.image.length === 0) return;
              if (!z.image.isTouched || !z.image.isMoved) {
                  z.image.isTouched = false;
                  z.image.isMoved = false;
                  return;
              }
              z.image.isTouched = false;
              z.image.isMoved = false;
              var momentumDurationX = 300;
              var momentumDurationY = 300;
              var momentumDistanceX = z.velocity.x * momentumDurationX;
              var newPositionX = z.image.currentX + momentumDistanceX;
              var momentumDistanceY = z.velocity.y * momentumDurationY;
              var newPositionY = z.image.currentY + momentumDistanceY;
      
              //Fix duration
              if (z.velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - z.image.currentX) / z.velocity.x);
              if (z.velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - z.image.currentY) / z.velocity.y);
              var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      
              z.image.currentX = newPositionX;
              z.image.currentY = newPositionY;
      
              // Define if we need image drag
              var scaledWidth = z.image.width * z.scale;
              var scaledHeight = z.image.height * z.scale;
              z.image.minX = Math.min((z.gesture.slideWidth / 2 - scaledWidth / 2), 0);
              z.image.maxX = -z.image.minX;
              z.image.minY = Math.min((z.gesture.slideHeight / 2 - scaledHeight / 2), 0);
              z.image.maxY = -z.image.minY;
              z.image.currentX = Math.max(Math.min(z.image.currentX, z.image.maxX), z.image.minX);
              z.image.currentY = Math.max(Math.min(z.image.currentY, z.image.maxY), z.image.minY);
      
              z.gesture.imageWrap.transition(momentumDuration).transform('translate3d(' + z.image.currentX + 'px, ' + z.image.currentY + 'px,0)');
          },
          onTransitionEnd: function (s) {
              var z = s.zoom;
              if (z.gesture.slide && s.previousIndex !== s.activeIndex) {
                  z.gesture.image.transform('translate3d(0,0,0) scale(1)');
                  z.gesture.imageWrap.transform('translate3d(0,0,0)');
                  z.gesture.slide = z.gesture.image = z.gesture.imageWrap = undefined;
                  z.scale = z.currentScale = 1;
              }
          },
          // Toggle Zoom
          toggleZoom: function (s, e) {
              var z = s.zoom;
              if (!z.gesture.slide) {
                  z.gesture.slide = s.clickedSlide ? $(s.clickedSlide) : s.slides.eq(s.activeIndex);
                  z.gesture.image = z.gesture.slide.find('img, svg, canvas');
                  z.gesture.imageWrap = z.gesture.image.parent('.' + s.params.zoomContainerClass);
              }
              if (!z.gesture.image || z.gesture.image.length === 0) return;
      
              var touchX, touchY, offsetX, offsetY, diffX, diffY, translateX, translateY, imageWidth, imageHeight, scaledWidth, scaledHeight, translateMinX, translateMinY, translateMaxX, translateMaxY, slideWidth, slideHeight;
      
              if (typeof z.image.touchesStart.x === 'undefined' && e) {
                  touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                  touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
              }
              else {
                  touchX = z.image.touchesStart.x;
                  touchY = z.image.touchesStart.y;
              }
      
              if (z.scale && z.scale !== 1) {
                  // Zoom Out
                  z.scale = z.currentScale = 1;
                  z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');
                  z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');
                  z.gesture.slide = undefined;
              }
              else {
                  // Zoom In
                  z.scale = z.currentScale = z.gesture.imageWrap.attr('data-swiper-zoom') || s.params.zoomMax;
                  if (e) {
                      slideWidth = z.gesture.slide[0].offsetWidth;
                      slideHeight = z.gesture.slide[0].offsetHeight;
                      offsetX = z.gesture.slide.offset().left;
                      offsetY = z.gesture.slide.offset().top;
                      diffX = offsetX + slideWidth/2 - touchX;
                      diffY = offsetY + slideHeight/2 - touchY;
      
                      imageWidth = z.gesture.image[0].offsetWidth;
                      imageHeight = z.gesture.image[0].offsetHeight;
                      scaledWidth = imageWidth * z.scale;
                      scaledHeight = imageHeight * z.scale;
      
                      translateMinX = Math.min((slideWidth / 2 - scaledWidth / 2), 0);
                      translateMinY = Math.min((slideHeight / 2 - scaledHeight / 2), 0);
                      translateMaxX = -translateMinX;
                      translateMaxY = -translateMinY;
      
                      translateX = diffX * z.scale;
                      translateY = diffY * z.scale;
      
                      if (translateX < translateMinX) {
                          translateX =  translateMinX;
                      }
                      if (translateX > translateMaxX) {
                          translateX = translateMaxX;
                      }
      
                      if (translateY < translateMinY) {
                          translateY =  translateMinY;
                      }
                      if (translateY > translateMaxY) {
                          translateY = translateMaxY;
                      }
                  }
                  else {
                      translateX = 0;
                      translateY = 0;
                  }
                  z.gesture.imageWrap.transition(300).transform('translate3d(' + translateX + 'px, ' + translateY + 'px,0)');
                  z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(' + z.scale + ')');
              }
          },
          // Attach/Detach Events
          attachEvents: function (detach) {
              var action = detach ? 'off' : 'on';
      
              if (s.params.zoom) {
                  var target = s.slides;
                  var passiveListener = s.touchEvents.start === 'touchstart' && s.support.passiveListener && s.params.passiveListeners ? {passive: true, capture: false} : false;
                  // Scale image
                  if (s.support.gestures) {
                      s.slides[action]('gesturestart', s.zoom.onGestureStart, passiveListener);
                      s.slides[action]('gesturechange', s.zoom.onGestureChange, passiveListener);
                      s.slides[action]('gestureend', s.zoom.onGestureEnd, passiveListener);
                  }
                  else if (s.touchEvents.start === 'touchstart') {
                      s.slides[action](s.touchEvents.start, s.zoom.onGestureStart, passiveListener);
                      s.slides[action](s.touchEvents.move, s.zoom.onGestureChange, passiveListener);
                      s.slides[action](s.touchEvents.end, s.zoom.onGestureEnd, passiveListener);
                  }
      
                  // Move image
                  s[action]('touchStart', s.zoom.onTouchStart);
                  s.slides.each(function (index, slide){
                      if ($(slide).find('.' + s.params.zoomContainerClass).length > 0) {
                          $(slide)[action](s.touchEvents.move, s.zoom.onTouchMove);
                      }
                  });
                  s[action]('touchEnd', s.zoom.onTouchEnd);
      
                  // Scale Out
                  s[action]('transitionEnd', s.zoom.onTransitionEnd);
                  if (s.params.zoomToggle) {
                      s.on('doubleTap', s.zoom.toggleZoom);
                  }
              }
          },
          init: function () {
              s.zoom.attachEvents();
          },
          destroy: function () {
              s.zoom.attachEvents(true);
          }
      };
      

      /*=========================
        Plugins API. Collect all and init all plugins
        ===========================*/
      s._plugins = [];
      for (var plugin in s.plugins) {
          var p = s.plugins[plugin](s, s.params[plugin]);
          if (p) s._plugins.push(p);
      }
      // Method to call all plugins event/method
      s.callPlugins = function (eventName) {
          for (var i = 0; i < s._plugins.length; i++) {
              if (eventName in s._plugins[i]) {
                  s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
              }
          }
      };
      

      /*=========================
        Events/Callbacks/Plugins Emitter
        ===========================*/
      function normalizeEventName (eventName) {
          if (eventName.indexOf('on') !== 0) {
              if (eventName[0] !== eventName[0].toUpperCase()) {
                  eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
              }
              else {
                  eventName = 'on' + eventName;
              }
          }
          return eventName;
      }
      s.emitterEventListeners = {
      
      };
      s.emit = function (eventName) {
          // Trigger callbacks
          if (s.params[eventName]) {
              s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
          var i;
          // Trigger events
          if (s.emitterEventListeners[eventName]) {
              for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                  s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
              }
          }
          // Trigger plugins
          if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      };
      s.on = function (eventName, handler) {
          eventName = normalizeEventName(eventName);
          if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
          s.emitterEventListeners[eventName].push(handler);
          return s;
      };
      s.off = function (eventName, handler) {
          var i;
          eventName = normalizeEventName(eventName);
          if (typeof handler === 'undefined') {
              // Remove all handlers for such event
              s.emitterEventListeners[eventName] = [];
              return s;
          }
          if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
          for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
              if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
          }
          return s;
      };
      s.once = function (eventName, handler) {
          eventName = normalizeEventName(eventName);
          var _handler = function () {
              handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
              s.off(eventName, _handler);
          };
          s.on(eventName, _handler);
          return s;
      };
      

      // Accessibility tools
      s.a11y = {
          makeFocusable: function ($el) {
              $el.attr('tabIndex', '0');
              return $el;
          },
          addRole: function ($el, role) {
              $el.attr('role', role);
              return $el;
          },
      
          addLabel: function ($el, label) {
              $el.attr('aria-label', label);
              return $el;
          },
      
          disable: function ($el) {
              $el.attr('aria-disabled', true);
              return $el;
          },
      
          enable: function ($el) {
              $el.attr('aria-disabled', false);
              return $el;
          },
      
          onEnterKey: function (event) {
              if (event.keyCode !== 13) return;
              if ($(event.target).is(s.params.nextButton)) {
                  s.onClickNext(event);
                  if (s.isEnd) {
                      s.a11y.notify(s.params.lastSlideMessage);
                  }
                  else {
                      s.a11y.notify(s.params.nextSlideMessage);
                  }
              }
              else if ($(event.target).is(s.params.prevButton)) {
                  s.onClickPrev(event);
                  if (s.isBeginning) {
                      s.a11y.notify(s.params.firstSlideMessage);
                  }
                  else {
                      s.a11y.notify(s.params.prevSlideMessage);
                  }
              }
              if ($(event.target).is('.' + s.params.bulletClass)) {
                  $(event.target)[0].click();
              }
          },
      
          liveRegion: $('<span class="' + s.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
      
          notify: function (message) {
              var notification = s.a11y.liveRegion;
              if (notification.length === 0) return;
              notification.html('');
              notification.html(message);
          },
          init: function () {
              // Setup accessibility
              if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                  s.a11y.makeFocusable(s.nextButton);
                  s.a11y.addRole(s.nextButton, 'button');
                  s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
              }
              if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                  s.a11y.makeFocusable(s.prevButton);
                  s.a11y.addRole(s.prevButton, 'button');
                  s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
              }
      
              $(s.container).append(s.a11y.liveRegion);
          },
          initPagination: function () {
              if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                  s.bullets.each(function () {
                      var bullet = $(this);
                      s.a11y.makeFocusable(bullet);
                      s.a11y.addRole(bullet, 'button');
                      s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                  });
              }
          },
          destroy: function () {
              if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
          }
      };
      

      /*=========================
        Init/Destroy
        ===========================*/
      s.init = function () {
          if (s.params.loop) s.createLoop();
          s.updateContainerSize();
          s.updateSlidesSize();
          s.updatePagination();
          if (s.params.scrollbar && s.scrollbar) {
              s.scrollbar.set();
              if (s.params.scrollbarDraggable) {
                  s.scrollbar.enableDraggable();
              }
          }
          if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
              if (!s.params.loop) s.updateProgress();
              s.effects[s.params.effect].setTranslate();
          }
          if (s.params.loop) {
              s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
          }
          else {
              s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
              if (s.params.initialSlide === 0) {
                  if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                  if (s.lazy && s.params.lazyLoading) {
                      s.lazy.load();
                      s.lazy.initialImageLoaded = true;
                  }
              }
          }
          s.attachEvents();
          if (s.params.observer && s.support.observer) {
              s.initObservers();
          }
          if (s.params.preloadImages && !s.params.lazyLoading) {
              s.preloadImages();
          }
          if (s.params.zoom && s.zoom) {
              s.zoom.init();
          }
          if (s.params.autoplay) {
              s.startAutoplay();
          }
          if (s.params.keyboardControl) {
              if (s.enableKeyboardControl) s.enableKeyboardControl();
          }
          if (s.params.mousewheelControl) {
              if (s.enableMousewheelControl) s.enableMousewheelControl();
          }
          // Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
          if (s.params.hashnavReplaceState) {
              s.params.replaceState = s.params.hashnavReplaceState;
          }
          if (s.params.history) {
              if (s.history) s.history.init();
          }
          if (s.params.hashnav) {
              if (s.hashnav) s.hashnav.init();
          }
          if (s.params.a11y && s.a11y) s.a11y.init();
          s.emit('onInit', s);
      };
      
      // Cleanup dynamic styles
      s.cleanupStyles = function () {
          // Container
          s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
      
          // Wrapper
          s.wrapper.removeAttr('style');
      
          // Slides
          if (s.slides && s.slides.length) {
              s.slides
                  .removeClass([
                    s.params.slideVisibleClass,
                    s.params.slideActiveClass,
                    s.params.slideNextClass,
                    s.params.slidePrevClass
                  ].join(' '))
                  .removeAttr('style')
                  .removeAttr('data-swiper-column')
                  .removeAttr('data-swiper-row');
          }
      
          // Pagination/Bullets
          if (s.paginationContainer && s.paginationContainer.length) {
              s.paginationContainer.removeClass(s.params.paginationHiddenClass);
          }
          if (s.bullets && s.bullets.length) {
              s.bullets.removeClass(s.params.bulletActiveClass);
          }
      
          // Buttons
          if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
          if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
      
          // Scrollbar
          if (s.params.scrollbar && s.scrollbar) {
              if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
              if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
          }
      };
      
      // Destroy
      s.destroy = function (deleteInstance, cleanupStyles) {
          // Detach evebts
          s.detachEvents();
          // Stop autoplay
          s.stopAutoplay();
          // Disable draggable
          if (s.params.scrollbar && s.scrollbar) {
              if (s.params.scrollbarDraggable) {
                  s.scrollbar.disableDraggable();
              }
          }
          // Destroy loop
          if (s.params.loop) {
              s.destroyLoop();
          }
          // Cleanup styles
          if (cleanupStyles) {
              s.cleanupStyles();
          }
          // Disconnect observer
          s.disconnectObservers();
      
          // Destroy zoom
          if (s.params.zoom && s.zoom) {
              s.zoom.destroy();
          }
          // Disable keyboard/mousewheel
          if (s.params.keyboardControl) {
              if (s.disableKeyboardControl) s.disableKeyboardControl();
          }
          if (s.params.mousewheelControl) {
              if (s.disableMousewheelControl) s.disableMousewheelControl();
          }
          // Disable a11y
          if (s.params.a11y && s.a11y) s.a11y.destroy();
          // Delete history popstate
          if (s.params.history && !s.params.replaceState) {
              window.removeEventListener('popstate', s.history.setHistoryPopState);
          }
          if (s.params.hashnav && s.hashnav)  {
              s.hashnav.destroy();
          }
          // Destroy callback
          s.emit('onDestroy');
          // Delete instance
          if (deleteInstance !== false) s = null;
      };
      
      s.init();
      

  
      // Return swiper instance
      return s;
  };
  

  /*==================================================
      Prototype
  ====================================================*/
  Swiper.prototype = {
      isSafari: (function () {
          var ua = window.navigator.userAgent.toLowerCase();
          return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
      isArray: function (arr) {
          return Object.prototype.toString.apply(arr) === '[object Array]';
      },
      /*==================================================
      Browser
      ====================================================*/
      browser: {
          ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
          ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1),
          lteIE9: (function() {
              // create temporary DIV
              var div = document.createElement('div');
              // add content to tmp DIV which is wrapped into the IE HTML conditional statement
              div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
              // return true / false value based on what will browser render
              return div.getElementsByTagName('i').length === 1;
          })()
      },
      /*==================================================
      Devices
      ====================================================*/
      device: (function () {
          var ua = window.navigator.userAgent;
          var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
          var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          return {
              ios: ipad || iphone || ipod,
              android: android
          };
      })(),
      /*==================================================
      Feature Detection
      ====================================================*/
      support: {
          touch : (window.Modernizr && Modernizr.touch === true) || (function () {
              return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
          })(),
  
          transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
              var div = document.createElement('div').style;
              return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
          })(),
  
          flexbox: (function () {
              var div = document.createElement('div').style;
              var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
              for (var i = 0; i < styles.length; i++) {
                  if (styles[i] in div) return true;
              }
          })(),
  
          observer: (function () {
              return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
          })(),
  
          passiveListener: (function () {
              var supportsPassive = false;
              try {
                  var opts = Object.defineProperty({}, 'passive', {
                      get: function() {
                          supportsPassive = true;
                      }
                  });
                  window.addEventListener('testPassiveListener', null, opts);
              } catch (e) {}
              return supportsPassive;
          })(),
  
          gestures: (function () {
              return 'ongesturestart' in window;
          })()
      },
      /*==================================================
      Plugins
      ====================================================*/
      plugins: {}
  };
  

  /*===========================
   Get Dom libraries
   ===========================*/
  var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
  for (var i = 0; i < swiperDomPlugins.length; i++) {
    if (window[swiperDomPlugins[i]]) {
      addLibraryPlugin(window[swiperDomPlugins[i]]);
    }
  }
  // Required DOM Plugins
  var domLib;
  if (typeof Dom7 === 'undefined') {
    domLib = window.Dom7 || window.Zepto || window.jQuery;
  }
  else {
    domLib = Dom7;
  }
  

  /*===========================
  Add .swiper plugin from Dom libraries
  ===========================*/
  function addLibraryPlugin(lib) {
      lib.fn.swiper = function (params) {
          var firstInstance;
          lib(this).each(function () {
              var s = new Swiper(this, params);
              if (!firstInstance) firstInstance = s;
          });
          return firstInstance;
      };
  }
  
  if (domLib) {
      if (!('transitionEnd' in domLib.fn)) {
          domLib.fn.transitionEnd = function (callback) {
              var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                  i, j, dom = this;
              function fireCallBack(e) {
                  /*jshint validthis:true */
                  if (e.target !== this) return;
                  callback.call(this, e);
                  for (i = 0; i < events.length; i++) {
                      dom.off(events[i], fireCallBack);
                  }
              }
              if (callback) {
                  for (i = 0; i < events.length; i++) {
                      dom.on(events[i], fireCallBack);
                  }
              }
              return this;
          };
      }
      if (!('transform' in domLib.fn)) {
          domLib.fn.transform = function (transform) {
              for (var i = 0; i < this.length; i++) {
                  var elStyle = this[i].style;
                  elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
              }
              return this;
          };
      }
      if (!('transition' in domLib.fn)) {
          domLib.fn.transition = function (duration) {
              if (typeof duration !== 'string') {
                  duration = duration + 'ms';
              }
              for (var i = 0; i < this.length; i++) {
                  var elStyle = this[i].style;
                  elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
              }
              return this;
          };
      }
      if (!('outerWidth' in domLib.fn)) {
          domLib.fn.outerWidth = function (includeMargins) {
              if (this.length > 0) {
                  if (includeMargins)
                      return this[0].offsetWidth + parseFloat(this.css('margin-right')) + parseFloat(this.css('margin-left'));
                  else
                      return this[0].offsetWidth;
              }
              else return null;
          };
      }
  }
  

  window.Swiper = Swiper;
})();

/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
  module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
  define([], function () {
      'use strict';
      return window.Swiper;
  });
}

//# sourceMappingURL=maps/swiper.jquery.js.map
/**
 * EGSOL_WEB_UI.JS
 */

var egsolUI = {
	version: "1.0"
};

(function($){
	//init hover function
	/* UI Style: ui_hover */
	/* UI Attribute: hoverCls */
	egsolUI.initHover = function() {
		$(".ui_hover").each(function(){
			var $dom = $(this);
			if($dom.data("hasInitedHover"))
				return true;
			var hoverCls = $dom.attr("hoverCls");
			if (hoverCls) {
				$dom.mouseenter(function(){
					$dom.addClass(hoverCls);
				}).mouseout(function(event){
					var rt = event.relatedTarget;
					if(rt && rt != $dom.get(0) && !$.contains($dom.get(0), rt)) {
						$dom.removeClass(hoverCls);
					}
				});
			}
			$dom.data("hasInitedHover",true);
		});
	};

	//init input tip function
	/* UI Style: ui_input_tip */
	/* UI Attribute: tip, tipCls */
	egsolUI.initInputTip = function() {
		$(".ui_input_tip").each(function(){
			var $input = $(this);
			if($input.data("hasInitedInputTip"))
				return true;
			var tip = $input.attr("tip");
			var tipCls = $input.attr("tipCls");
			if (tip) {
				if ($input.val()==null || $input.val()=="") {
					$input.val(tip);
					if(tipCls) $input.addClass(tipCls);
				}
				$input.bind("focus",function(){
					if($input.val() == tip) {
						$input.val("");
						if(tipCls) $input.removeClass(tipCls);
					}
				}).bind("blur",function(){
					if($input.val() == "") {
						$input.val(tip);
						if(tipCls) $input.addClass(tipCls);
					}
				});
			}			
			$input.data("hasInitedInputTip",true);
		});
	};
	//multi input tip function
	egsolUI.multiInputTips = function(param){
		var $select=param.select,tips=param.tips,$input=param.input,tipCls=param.tipCls;
		var cur = $select.get(0) ? $select.get(0).selectedIndex : 0;
		$select.change(function(){
			if($input.val() == tips[cur]) {
				cur = $select.get(0).selectedIndex;
				$input.val(tips[cur]);
			}
			cur = $select.get(0).selectedIndex;
		});
		$input.mouseenter(function(){
			if($input.val() == tips[cur]) {
				$input.val('').focus();
				if(tipCls) $input.removeClass(tipCls);
			}
		}).bind('mouseleave blur',function(){
			if($input.val() == '') {
				if(tipCls) $input.addClass(tipCls);
				$input.val(tips[cur]).blur();
			}
		}).trigger('mouseleave');
	}

	//private show & hide function for inner call
	function _showAndHide(param) {
		var triggerType=param.triggerType,triggerId=param.triggerId,triggerStyle=param.triggerStyle,targetId=param.targetId;
		var posType=param.posType,left=param.left,top=param.top,disBodyClick=param.disBodyClick,isShowed=param.isShowed;
		var triggerHtml = param.triggerHtml;
		var $trigger = $("#"+triggerId);
		var $target = $("#"+targetId);
		var $body = $('body');
		var $win = $(window);
		var $doc = $(document);
		if(triggerHtml){
			if(isShowed){
				$trigger.data("showHtml",$trigger.html());
				$trigger.data("hideHtml",triggerHtml);
			}else{
				$trigger.data("showHtml",triggerHtml);
				$trigger.data("hideHtml",$trigger.html());
			}		
		}
		//move to be body's child
		if (posType) { $body.append($target); }
		if (!left) { left = 0; }
		if (!top) { top = 0; }
		if (triggerType == "click"){
			$trigger.click(function(event){
				if ($target.data("currentTriggerId") && $target.data("currentTriggerId") != triggerId) {
					beforeFunc("hide");
					$target.hide();
					if(triggerStyle){$trigger.removeClass(triggerStyle);}
					if(triggerHtml){$trigger.html($trigger.data("hideHtml"));}
					afterFunc("hide");
				}
				$target.data("currentTriggerId", triggerId);
				
				if(triggerStyle){$trigger.toggleClass(triggerStyle);}
				if($target.is(":hidden")){
					beforeFunc("show");
					if(triggerHtml){$trigger.html($trigger.data("showHtml"));}
				}else{
					beforeFunc("hide");
				}
				setPos();
				$target.toggle();
				if($target.is(":hidden")){
					if(triggerHtml){$trigger.html($trigger.data("hideHtml"));}
					afterFunc("hide");
				}else{
					afterFunc("show");
				}
			});
			if(!disBodyClick){
				$body.bind("click",function(event){
					var tar = event.target;
					var idFilterStr = "#"+targetId+",#"+triggerId;
					var triggerIds = $target.data("triggerIds");
					if (triggerIds) {
						for (var i=0; i<triggerIds.length; i++) {
							if (tar && tar.id==triggerIds[i]) {
								return;
							}
						}
						idFilterStr = $target.data("idFilterStr");
					}
					
					if (tar && tar.id!=targetId && tar.id!=triggerId
							&& $(tar).parents(idFilterStr).length == 0) {
						beforeFunc("hide");
						$target.hide();
						if(triggerStyle){$trigger.removeClass(triggerStyle);}
						if(triggerHtml){$trigger.html($trigger.data("hideHtml"));}
						afterFunc("hide");
					}
				});
			}
			$win.resize(function(e) {
                if ($target.is(":visible") && $target.data("currentTriggerId") == triggerId) {
					setPos();
				}
            });
		}else if(triggerType == "mouseover") {
			$trigger.mouseenter(function(event){
				beforeFunc("show");
				if(triggerStyle){$trigger.addClass(triggerStyle);}
				if(triggerHtml){$trigger.html($trigger.data("showHtml"));}
				setPos();
				$target.show();
				afterFunc("show");
			});
			$("#"+triggerId+",#"+targetId).mouseleave(function(event){
				var rt = event.relatedTarget;
				if(!rt || (rt && rt.id != targetId && rt.id != triggerId && 
					$(rt).parents("#"+triggerId+",#"+targetId).length==0)) {
					beforeFunc("hide");
					if(triggerStyle){$trigger.removeClass(triggerStyle);}
					$target.hide();
					if(triggerHtml){$trigger.html($trigger.data("hideHtml"));}
					afterFunc("hide");
				}
			});
		}
		
		function setPos(){
		var triggerH = $trigger.outerHeight();
		var targetH = $target.outerHeight();
		var triggerW = $trigger.outerWidth();
		var targetW = $target.outerWidth();
			var triggerT = $trigger.offset().top;
			var triggerL = $trigger.offset().left;
			
			var bodyTop = ($body.css('position').toLowerCase()=='relative') ? parseInt($body.css('top')) : 0;
			var _posType = null;
			
			if(posType == "auto" || posType == "auto_center") {
				var isCenter = (posType == "auto_center");
				_posType = calcAutoPosType(isCenter,triggerH,triggerW,targetH,targetW,triggerT,triggerL);
				
				// Add Current posType Class to target
				var cls = "posType_"+_posType+( ((left!=0 || top!=0) && isCenter) ? "center":"" );
				if($target.attr("current_posType")){
					$target.removeClass($target.attr("current_posType"));
				}
				$target.addClass(cls);
				$target.attr("current_posType",cls);
			}else {
				_posType = posType;
			}
			
			if(_posType == "manual") {
				$target.css({left:left+"px",top:(top-bodyTop)+"px"});
			}else if(_posType == "bottom") {//bottom_left
				$target.css({left:(triggerL+left)+"px",top:(triggerT+triggerH+top-bodyTop)+"px"});
			}else if(_posType == "bottom_right") {
				$target.css({left:(triggerL+triggerW-targetW+left)+"px",top:(triggerT+triggerH+top-bodyTop)+"px"});
			}else if(_posType == "top") {//top_left
				$target.css({left:(triggerL+left)+"px",top:(triggerT-targetH+top-bodyTop)+"px"});
			}else if(_posType == "top_right") {
				$target.css({left:(triggerL+triggerW-targetW+left)+"px",top:(triggerT-targetH+top-bodyTop)+"px"});
			}else if(_posType == "left") {//left_top
				$target.css({left:(triggerL-targetW+left)+"px",top:(triggerT+top-bodyTop)+"px"});
			}else if(_posType == "left_bottom") {
				$target.css({left:(triggerL-targetW+left)+"px",top:(triggerT+triggerH-targetH+top-bodyTop)+"px"});
			}else if(_posType == "right") {//right_top
				$target.css({left:(triggerL+triggerW+left)+"px",top:(triggerT+top-bodyTop)+"px"});
			}else if(_posType == "right_bottom") {//
				$target.css({left:(triggerL+triggerW+left)+"px",top:(triggerT+triggerH-targetH+top-bodyTop)+"px"});
			}else if(_posType == "cover") {
				$target.css({left:(triggerL+left)+"px",top:(triggerT+top-bodyTop)+"px"});
			}
		}
		function beforeFunc(action) {
			if(param.beforeHide && action=="hide") param.beforeHide($trigger,$target);
			if(param.beforeShow && action=="show") param.beforeShow($trigger,$target);
		}
		function afterFunc(action) {
			if(param.afterHide && action=="hide") param.afterHide($trigger,$target);
			if(param.afterShow && action=="show") param.afterShow($trigger,$target);
		}
		
		function calcAutoPosType(isCenter,triH,triW,tarH,tarW,triT,triL) {
			var winH = $win.outerHeight();
			var winW = $win.outerWidth();
			var sT = $win.scrollTop();
			var sL = $win.scrollLeft();
			// has vertical scroll bar 
			if($doc.outerHeight() > $win.outerHeight()) {
				winW = winW - 20;
			}
			// has horizontal scroll bar 
			if($doc.outerWidth() > $win.outerWidth()) {
				winH = winH - 20;
			}
			left = 0;
			top = 0;
			
			// can positon right
			if(triL-sL+triW+tarW<winW) {
				// can align center
				if(isCenter && triT-sT+tarH/2+triH/2<winH && triT-sT>tarH/2-triH/2) {
					top = -(tarH/2-triH/2);
					return "right";
				}
				
				// can align bottom
				if(triT-sT>tarH-triH) {
					return "right_bottom";
				}
				
				// can align top
				if(triT-sT+tarH<winH) {
					return "right";
				}
				
				if(isCenter) {
					top = -(tarH/2-triH/2);
				}
				return "right";
			}
			
			//can positon left
			if(triL-sL>tarW) {
				// can align center
				if(isCenter && triT-sT+tarH/2+triH/2<winH && triT-sT>tarH/2-triH/2) {
					top = -(tarH/2-triH/2);
					return "left";
				}
				
				// can align bottom
				if(triT-sT>tarH-triH) {
					return "left_bottom";
				}
				
				// can align top
				if(triT-sT+tarH<winH) {
					return "left";
				}
				
				if(isCenter) {
					top = -(tarH/2-triH/2);
				}
				return "left";
			}
			
			//can positon bottom
			if(triT-sT+triH+tarH<winH) {
				// can align center
				if(isCenter && triL-sL+tarW/2+triW/2<winW && triL-sL>tarW/2-triW/2) {
					left = -(tarW/2-triW/2);
					return "bottom";
				}
				
				// can align left
				if(triL-sL+tarW<winW) {
					return "bottom";
				}
				// can align right
				if(triL-sL>tarW-triW) {
					return "bottom_right";
				}
				
				if(isCenter) {
					left = -(tarW/2-triW/2);
				}
				return "bottom";
			}
			
			//can positon top
			if(triT-sT>tarH) {
				// can align center
				if(isCenter && triL-sL+tarW/2+triW/2<winW && triL-sL>tarW/2-triW/2) {
					left = -(tarW/2-triW/2);
					return "top";
				}
				
				// can align left
				if(triL-sL+tarW<winW) {
					return "top";
				}
				// can align right
				if(triL-sL>tarW-triW) {
					return "top_right";
				}
				
				if(isCenter) {
					left = -(tarW/2-triW/2);
				}
				return "top";
			}
			
			return "right";
		}
	}

	egsolUI.isMobileDevice = function() {
    	if (/(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser)/i.test(navigator.userAgent)) {
        	return true;
    	}
    	return false;
	}

	//init click show function
	egsolUI.clickShow = function(param) {
		param.triggerType = "click";
		_showAndHide(param);
	};

	//init mouseover show function
	egsolUI.moShow = function(param) {    
    	if (egsolUI.isMobileDevice()) {
			egsolUI.clickShow(param);
			return;
		}
		param.triggerType = "mouseover";
		_showAndHide(param);
	};
	
	//init multi-trigger click show function
	egsolUI.mulClickShow =function(param) {
		var $triggers = param.triggers;
		param.triggerType = "click";
		var idFilterStr = "#"+param.targetId;
		var triggerIds = new Array();
		$triggers.each(function(index){
			if (!this.id || this.id == "") {
				this.id = "___UI_trigger"+index+"_"+param.targetId;
			}
			param.triggerId = this.id;
			_showAndHide(param);
			
			triggerIds[index] = this.id;
			idFilterStr = idFilterStr + ",#" + this.id;
		});
		
		$("#"+param.targetId).data("triggerIds",triggerIds).data("idFilterStr",idFilterStr);
	}

	//init multi-trigger mouseover show function
	egsolUI.mulMoShow =function(param) {           
    	if (egsolUI.isMobileDevice()) {
			egsolUI.mulClickShow(param);
			return;
		}
		var $triggers = param.triggers;
		param.triggerType = "mouseover";
		$triggers.each(function(index){
			if (!this.id || this.id == "") {
				this.id = "___UI_trigger"+index+"_"+param.targetId;
			}
			param.triggerId = this.id;
			_showAndHide(param);
		});
	}
	
	//init custom select function
	/* UI Attribute: optionVal */
	egsolUI.customSelect = function(param) {
		var $trigger = $("#"+param.triggerId);
		var $target = $("#"+param.targetId);
		var $optText = $("#"+param.optTextShowId);
		var $optValue = $("#"+param.valueInputId);
		var curOptStyle = param.optionStyle;
		var initValue = param.initValue;
		var $opts = $target.children();
		var curIndex = 0;
		
		$opts.each(function(index,elem){
			$(elem).data("index",index);
		});
		if(curOptStyle){
			$opts.mouseenter(function(){
				$opts.removeClass(curOptStyle);
				$(this).addClass(curOptStyle);
			});
		}
		$opts.click(function(event){
			var $this = $(this);
			if(curOptStyle){
				$opts.removeClass(curOptStyle);
				$this.addClass(curOptStyle);
			}
			$optValue.attr("value",$this.attr("optionVal"));
			$optText.html($this.html());
			curIndex = $this.data("index");
			if(param.triggerStyle){$trigger.removeClass(param.triggerStyle);}
			$target.hide();
			event.stopPropagation();
			if(param.onchange){param.onchange($this.attr("optionVal"));}
		});
		param.triggerType = "click";
		param.afterHide = function () {
			if(curOptStyle){
				$opts.removeClass(curOptStyle);
				$($opts.get(curIndex)).addClass(curOptStyle);
			}
		};
		_showAndHide(param);

		if(initValue) {
			$opts.filter('[optionVal="'+initValue+'"]').click();
		} else {
			$opts.filter(':eq(0)').click();
		}
	};
	
	//show all function, an ajax call when has "dataUrl" param
	/* UI Attribute: dataUrl */
	egsolUI.showAll = function(param) {
		var dataUrl = param.dataUrl;
		var $trigger = param.trigger;
		var triggerStyle = param.triggerStyle;
		var triggerHtml = param.triggerHtml;
		var displayStyle = param.displayStyle;
		if(triggerHtml){
			$trigger.data("oldHtml",$trigger.html());		
		}
		var $target = param.listContainer;
		var $hideElems;
		
		var $lastCont = $target.children(":last");
		var $newConts = null;
		$trigger.click(function() {
			var $this = $(this);
			if ($this.data("isShowing")) return false;
			if(!$hideElems) {
				$hideElems = $target.children(":hidden");
			}

			if ($this.data("isShow"))
			{
				$this.data("isShow",false);
				if(param.beforeHide) param.beforeHide($trigger,$target);
				if(dataUrl){
					$newConts.hide();
				}else{
					$hideElems.hide();
				}
				if(triggerStyle){$trigger.toggleClass(triggerStyle);}
				if(triggerHtml){$this.html($this.data("oldHtml"));}
				if(param.afterHide) param.afterHide($trigger,$target);
				return;
			} else {
				if (!dataUrl || $newConts){
					if(param.beforeShow) param.beforeShow($trigger,$target);
					if(triggerStyle){$trigger.toggleClass(triggerStyle);}
					if(triggerHtml){$this.html(triggerHtml);}
					if(dataUrl){
						doShow($newConts);
					}else{
						doShow($hideElems);
					}
					if(param.afterShow) param.afterShow($trigger,$target);
					$this.data("isShow",true);
				} else {
					if(param.beforeShow) param.beforeShow($trigger,$target);
					if(triggerStyle){$trigger.toggleClass(triggerStyle);}
					if(triggerHtml){$this.html(triggerHtml);}
					$this.data("isShowing",true);
					$.get(dataUrl, function(data){
						$newConts = $(data);
						if($lastCont.length<=0){
							$target.append($newConts);
						} else if($lastCont==$trigger || $lastCont.find($trigger).length>0) {
							$lastCont.before($newConts);
						} else {
							$lastCont.after($newConts);
						}
						doShow($newConts);
						if(param.afterShow) param.afterShow($trigger,$target);
						$this.data("isShow",true);
						$this.data("isShowing",false);
					},"text");
				}
			}
			
		});
		
		function doShow($elem){
			if(displayStyle)
				$elem.css("display",displayStyle);
			else
				$elem.show();
		}
	};
	
	//init tab function
	/* UI Style: ui_tab_section|ui_tab_tit|ui_tab_con */
	/* UI Attribute: --|curStyle trigger|-- */
	egsolUI.initTab = function() {
		$(".ui_tab_section").each(function(){
			var $section = $(this);
			if($section.data("hasInitedTab"))
				return true;
			var $tit = $(".ui_tab_tit",$section);
			var titCurCls = $tit.attr("curStyle");
			var eventName = "mouseover";
			if($tit.attr('trigger') == 'click') {
				eventName = "click";
			}
			var $tits = $tit.children();
			var $con = $(".ui_tab_con",$section);
			var $cons = $con.children();
			$tits.each(function(index,elem){
				$(elem).data("index",index);
			});
			$tits.bind(eventName, function() {
				var $this = $(this);
				if(titCurCls){
					$tits.removeClass(titCurCls);
					$this.addClass(titCurCls);
				}
				
				var $curCon = $cons.eq($this.data("index"));
				if($curCon.data("isLoading")) {
					return true;
						}
				if($curCon.attr("data-url") && !$curCon.data("loaded")) {
					$curCon.data("isLoading", true);
					$.get($curCon.attr("data-url"), function(data){
						$curCon.html(data);
						$cons.hide();
						$curCon.show();
						$curCon.data("isLoading", false);
						$curCon.data("loaded", true);
						$curCon.trigger("UIEvent_Tab_ConLoaded");
					},"text");					
				} else {
					$cons.hide();
					$curCon.show();
				}
				if($section.attr("deferLoad-img")) {
					$curCon.find("img[data-src]").each(function(){
						var $this = $(this);
						$this.attr("src", $this.attr("data-src")).removeAttr("data-src");
					});
				}
			});
			$section.data("hasInitedTab",true);
		});
	};
	
	//init scroll function
	/* UI Style: ui_scroll_section|ui_scroll_win|ui_scroll_con|ui_scroll_page|ui_scroll_pre|ui_scroll_next|ui_scroll_extInfo */
	/* UI Attribute: speed autoInterval|--|scrollType(X/Y)|curStyle trigger|disableStyle|disableStyle|-- */
	egsolUI.initScroll = function(){
		$(".ui_scroll_section").each(function(){
			var $section = $(this);
			if($section.data("hasInitedScroll"))
				return true;
			var speed = 1000;
			if ($section.attr("speed")) {
				speed = parseInt($section.attr("speed"));
			}

			var $win = $(".ui_scroll_win",$section);
			var pHeight = $win.height();
			var pWidth = $win.width();

			var $page = $(".ui_scroll_page",$section);
			var pageCurCls = $page.attr("curStyle");
			var eventName = "mouseover";
			if($page.attr('trigger') == 'click') {
				eventName = "click";
			}
			var $pages = $page.children();
			$pages.each(function(index,elem){
				$(elem).data("index",index);
			});
			$section.on(eventName,'.ui_scroll_page > *',function(){
				gotoPage($(this).data("index") + 1);
			});
			//use templet re-generate the page section 
			function genPageSection(tpl) {
				var pageHtmls = [];
				for(var i=1; i<=pageCount; i++){
					pageHtmls[i-1] = tpl.replace('%pageNum%',i);
				}
				$page.html(pageHtmls.join(''));
				$pages = $page.children();
				$pages.each(function(index,elem){
					$(elem).data("index",index);
				});
			}

			var $nextBtn = $(".ui_scroll_next",$section);
			var nextCls = $nextBtn.attr("disableStyle");
			var $preBtn = $(".ui_scroll_pre",$section);
			var preCls = $preBtn.attr("disableStyle");

			var $extInfo = $(".ui_scroll_extInfo",$section);
			var $extInfos = $extInfo.children();

			var $con = $(".ui_scroll_con",$section);
			$con.css("position","absolute");
			var scrollType = "Y";
			if ($con.attr("scrollType")) {
				scrollType = $con.attr("scrollType");
			}

			var pageCount = 1;
			var curPageNo = 0;
			function initCon() {
			if (scrollType == "X") {
				var conW = 0;
				$con.children().each(function(){
						$(this).css({"float":"left"});
					conW = conW + $(this).outerWidth(true);
				});
				pageCount = Math.ceil(conW / pWidth);
				//for ie6 need more width 
					$con.width(pWidth*pageCount + 3);
			} else {
				var conH = 0;
				$con.children().each(function(){
					$(this).css({"display":"block"});
					conH = conH + $(this).outerHeight(true);
				});
				pageCount = Math.ceil(conH / pHeight);
					$con.height(pHeight*pageCount);
			}
				$section.data("scroll_pageCount", pageCount);
			}
			initCon();
			
			function gotoPage(pageNo) {
				if (pageNo<1 || pageNo>pageCount || pageNo==curPageNo) {
					return;
				}
				var scrollTo = -(pageNo-1) * (scrollType == "X" ? pWidth:pHeight);
				curPageNo = pageNo;
				updateStyle(pageNo);
				$con.stop(true,false);
				if (scrollType == "X") {
					$con.animate({left:scrollTo}, speed);
				} else {
					$con.animate({top:scrollTo}, speed);
				}
			}

			function lastToFirstPage() {
				var $tempCon = $con.clone().css(scrollType=="X" ? {left:-pWidth*(pageCount-1)} : {top:-pHeight*(pageCount-1)}).appendTo($win);
				$con.stop(true,false).css(scrollType=="X" ? {left:pWidth} : {top:pHeight});
				$tempCon.animate((scrollType=="X" ? {left:-pWidth*pageCount} : {top:-pHeight*pageCount}), speed, function(){
					$tempCon.remove();
				});
				$con.animate((scrollType=="X" ? {left:0} : {top:0}), speed);
				curPageNo = 1;
				updateStyle(1);
			}

			function firstToLastPage() {
				var $tempCon = $con.clone().css(scrollType=="X" ? {left:0} : {top:0}).appendTo($win);
				$con.stop(true,false).css(scrollType=="X" ? {left:-pWidth*pageCount} : {top:-pHeight*pageCount});
				$tempCon.animate((scrollType=="X" ? {left:pWidth} : {top:pHeight}), speed, function(){
					$tempCon.remove();
				});
				$con.animate((scrollType=="X" ? {left:-pWidth*(pageCount-1)} : {top:-pHeight*(pageCount-1)}), speed);
				curPageNo = pageCount;
				updateStyle(pageCount);
			}
			
			function updateStyle(pageNo){
				if (pageCurCls) {
					$pages.removeClass(pageCurCls);
					$($pages.get(pageNo-1)).addClass(pageCurCls);
				}
				if (nextCls) {
					if (pageNo == pageCount) {
						$nextBtn.addClass(nextCls);
					} else {
						$nextBtn.removeClass(nextCls);
					}
				}
				if (preCls) {
					if (pageNo == 1) {
						$preBtn.addClass(preCls);
					} else {
						$preBtn.removeClass(preCls);
					}
				}
				if ($extInfos.length > 0) {
					$extInfos.hide();
					$($extInfos.get(pageNo-1)).show();
				}
			}

			$nextBtn.click(function(){
				if (autoScrollInterval && curPageNo==pageCount) {
					lastToFirstPage();
				} else {
					gotoPage(curPageNo+1);
				}
			});
			$preBtn.click(function(){
				if (autoScrollInterval && curPageNo==1) {
					firstToLastPage();
				} else {
					gotoPage(curPageNo-1);
				}
			});

			gotoPage(1);

			var autoScrollInterval = $section.attr("autoInterval");
			if (autoScrollInterval) {
				function auto(){
					clearInterval($section.data("autoScroller"));
					$section.data("autoScroller",
						setInterval(function(){
							if (curPageNo==pageCount) {
								lastToFirstPage();
							} else {
								gotoPage(curPageNo+1);
							}
						}, autoScrollInterval)
					);
				}
				function pause(){
					clearInterval($section.data("autoScroller"));
				}
				$con.mouseenter(pause);
				$con.mouseleave(auto);
				$page.mouseenter(pause);
				$page.mouseleave(auto);
				$nextBtn.mouseenter(pause);
				$nextBtn.mouseleave(auto);
				$preBtn.mouseenter(pause);
				$preBtn.mouseleave(auto);
				$extInfo.mouseenter(pause);
				$extInfo.mouseleave(auto);
				auto();
			}
			
			$section.bind("reInitScroll", function(e, conHtml, pageTpl, autoPos, pageHtml){
				if(typeof autoPos == 'undefined') autoPos=true;
				$con.html(conHtml);
				pHeight = $win.height();
			    pWidth = $win.width();
				initCon();
				if( ! (typeof pageTpl == 'undefined' || ''==pageTpl) ) genPageSection(pageTpl);
				if(pageHtml) {
					$page.html(pageHtml);
					$pages = $page.children();
					$pages.each(function(index,elem){
						$(elem).data("index",index);
					});
				}
				if(autoPos){
					curPageNo = 0;
					gotoPage(1);
				}
			});
			$section.data("hasInitedScroll",true);
		});
	};

	//show overlay function
	egsolUI.showOverlay = function(param) {
		var $trigger = param.trigger;
		var $target = param.target;
		var showAtOnce = param.showAtOnce;
		if($target.length != 1) return;

		var isShowing = false;
		$("body").append($target);

		var $iframe = $("#ui_overlay_iframe");
		if ( $.support.msie && ($.support.version.slice(0,3) == "6.0" || document.compatMode=="BackCompat") ) {
			$target.css("position","absolute");
			if($.support.version.slice(0,3) == "6.0" && $iframe.length<=0){
				$iframe = $('<iframe id="ui_overlay_iframe"></iframe>');
				$iframe.css({opacity:"0","z-index":"9999997",position:"absolute",top:"0px",left:"0px",overflow:"hidden"});
				$("body").append($iframe);
				$iframe.hide();
			}
		} else {
			$target.css("position","fixed");
		}

		var $baselay = $("#ui_overlay_baselay");
		if($baselay.length<=0){
			$baselay = $('<div id="ui_overlay_baselay"></div>');
			$baselay.css({"background-color":"rgb(102, 102, 102)",opacity:"0.75","z-index":"9999998",position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px",display:"none"});
			$("body").append($baselay);
		}
		
		var setPos = function(){
			$iframe.width($(document).width()).height($(document).height());
			var h = $target.outerHeight();
			var w = $target.outerWidth();
			var top = parseInt(($(window).height()-h)/2) + "px";
			var left = parseInt(($(window).width()-w)/2) + "px";
			$target.css({top:top,left:left,bottom:"",right:""});
			$target.fixed(true);
		};
		
		var $win = $(window);
		var escKeyDown = function(event){
			if(event.keyCode == 27){
				hide();	
			}
		}
		
		var show = function(){
			if(param.beforeShow) param.beforeShow($trigger,$target);
			$iframe.show();
			$baselay.show();
			$target.css({"z-index":"9999999"}).show();
			if(param.afterShow) param.afterShow($trigger,$target);
			$win.bind("keydown",escKeyDown);
		};
		var hide = function(){
			if(isShowing){
				if(param.beforeHide) param.beforeHide($trigger,$target);
				$target.css({"z-index":""}).hide();
				$baselay.hide();
				$iframe.hide();
				isShowing = false;
				if(param.afterHide) param.afterHide($trigger,$target);
				$win.unbind("keydown",escKeyDown);
			}
		};

		if($trigger) {
		$trigger.click(function(){
			if(isShowing)return;
			isShowing = true;
			setPos();
			show();
		});
		}
		
		if(!param.disBodyClick) $baselay.click(hide);
		$target.find(".ui_overlay_close").on('click', hide);
		$(window).resize(function(){
			if(isShowing){
				setPos();
			}
		});
		if(showAtOnce) {
			isShowing = true;
			setPos();
			show();
		}
	};

     egsolUI.LoadBlock = (function(){
		var $trigger = null;

        var $target = null;

        if(typeof(JSMsg) == "undefined"){

            $trigger = $('<div>Elem as a trigger that will not be appended to body.</div>');

            $target = $('<div class="loadBlockContent" style="display:none;">Loading...<input type="hidden" class="ui_overlay_close"/></div>');

        } else{

            $trigger = $(JSMsg.uielem);

            $target = $('<div class="loadBlockContent" style="display:none;">'+ JSMsg.uiloading +'<input type="hidden" class="ui_overlay_close"/></div>');

        }


		egsolUI.showOverlay({trigger:$trigger, target:$target, disBodyClick:true});
		return {
			show : function(){
				$trigger.click();
			},
			hide : function(){
				$target.find(".ui_overlay_close").click();
			}
		};
	})();

	//init open popup window function
	egsolUI.initPopupWindow = function() {
		var defaultParams = "toolbar=no,menubar=no,status=no,scrollbars=yes,resizable=yes,location=yes";
		$("a.ui_popup_window").each(function(index){
			var $dom = $(this);
			if($dom.data("hasInitedPopupWindow"))
				return true;
			var url = $dom.attr("href");
			if(!url) return;
			$dom.attr("href","javascript:void(0);");
			var name = "popup_window_"+index;
			var parameters = $dom.attr("windowOptions");
			if (!parameters) parameters = defaultParams;
			else parameters = defaultParams + "," + parameters;
			
			$dom.click(function(){
				window.open(url, name, parameters);
			});
			$dom.data("hasInitedPopupWindow",true);
		});
	};
	
	//init pager
	egsolUI.initPager = function() {
		$(".ui_pager").each(function(index){
			var $dom = $(this);
			var $container = $('#'+$dom.attr("container"));
			if ($container.length==0)
				return;
			
			var $items = $container.children();
			var total = $items.length;
			var per = parseInt($dom.attr("perpage")) || 10;
			var pagecount = Math.ceil(total/per);
			pagecount = pagecount<=0 ? 1:pagecount;
			var cur = 0;
			
			var $btnFirst = $dom.find(".ui_pager_first");
			var $btnPre = $dom.find(".ui_pager_pre");
			var $pagebreak1 = $dom.find(".ui_pager_break1").hide();
			var $pageLinks = $dom.find(".ui_pager_links");
			var $pageLink = $dom.find(".ui_pager_link").clone().removeClass("ui_pager_cur");
			var maxLinkCnt = parseInt($pageLinks.attr("maxLinkCnt")) || 6;
			var $pagebreak2 = $dom.find(".ui_pager_break2").hide();
			var $btnNext = $dom.find(".ui_pager_next");
			//var $btnLast = $dom.find(".ui_pager_last");
			var $curNumSpan = $dom.find(".ui_pager_cur_num");
			var $totalNumSpan = $dom.find(".ui_pager_total_num");
			var $pageInput = $dom.find(".ui_pager_input");
			var $btnGo = $dom.find(".ui_pager_go");

			var init = function(){
				$btnFirst.html("1").click(function(){if(cur>1)gotoPage(1);});
				//$btnLast.html(""+pagecount).click(function(){if(cur<pagecount)gotoPage(pagecount);});
				$totalNumSpan.html(""+pagecount);
				$btnGo.click(function(){
					var n = parseInt($pageInput.val());
					if(n){
						if(n<1) n=1;
						if(n>pagecount) n=pagecount;
						$pageInput.val(""+n);
						gotoPage(n);
					}
				});
				$btnPre.click(function(){if(cur>1)gotoPage(cur-1);});
				$btnNext.click(function(){if(cur<pagecount)gotoPage(cur+1);});
				$pageLinks.on("click",".ui_pager_link",function(){
					if(!$(this).hasClass("ui_pager_cur"))
						gotoPage(parseInt(this.innerHTML));
				}).html("");
				gotoPage(1);
			};

			var gotoPage = function (n){
				if(n<1 || n>pagecount || cur===n) return;
				
				cur = n;
				changeHTML();
				showFun((n-1)*per, n*per>=total? total-1 : n*per-1);
			}

			var showFun = function (start,end){
				$items.hide().filter(function( index ) {
					return index>=start && index<=end;
				}).show();
			}

			var changeHTML = function(){
				$curNumSpan.html(""+cur);

				var rangeL = cur%maxLinkCnt==0 ? maxLinkCnt-1 : (cur%maxLinkCnt-1);
				var rangeH = cur%maxLinkCnt==0 ? 0 : maxLinkCnt-cur%maxLinkCnt;
				var low = cur - rangeL;
				var high = cur + rangeH;
				if (high > pagecount) {
					high = pagecount;
				}
				
				if(cur == 1){
					$btnPre.addClass("ui_pager_disable");
				}else{
					$btnPre.removeClass("ui_pager_disable");
				}
				if(cur == pagecount){
					$btnNext.addClass("ui_pager_disable");
				}else{
					$btnNext.removeClass("ui_pager_disable");
				}
				
				if(high < pagecount){
					$pagebreak2.show();
					$totalNumSpan.show();
					
					$btnFirst.hide();
					$pagebreak1.hide();
				}else{
					$pagebreak2.hide();
					$totalNumSpan.hide();
					
					if(low > 1){
						$pagebreak1.show();
						$btnFirst.show();
					}else{
						$pagebreak1.hide();
						$btnFirst.hide();
					}
				}
				
				$pageLinks.html("");
				for (var i = low; i <= high; i++){
					if(i == cur){
						$pageLinks.append($pageLink.clone().html(""+i).addClass("ui_pager_cur"));
					}else{
						$pageLinks.append($pageLink.clone().html(""+i));
					}
				}
			}

			init();
		});
	};//end init pager
	
	//onload
	$(function(){
		egsolUI.initTab();
		egsolUI.initHover();
		egsolUI.initInputTip();
		egsolUI.initScroll();
		egsolUI.initPopupWindow();
		egsolUI.initPager();
	});

})(jQuery);

//jquery extend
(function($){
	var $window = $(window);
	function _fixed($dom){
		var t = $dom.data("t");
		var l = $dom.data("l");
		var b = $dom.data("b");
		var r = $dom.data("r");

		var top,left;
		if(t != undefined) top = $window.scrollTop() + t + "px";
		else if(b != undefined) top = $window.height()+$window.scrollTop()-$dom.height()-b+"px";

		if(l != undefined) left = $window.scrollLeft() + l + "px";
		else if(r != undefined) left = $window.width()+$window.scrollLeft()-$dom.width()-r+"px";

		var p;
		if(top && left) p = {"top":top,"left":left};
		else if(top) p = {"top":top};
		else if(left) p = {"left":left};
		
		if (p) $dom.stop().animate(p,200);
	};
	
	$.fn.extend({
		fixed:function(reset){
			//only for IE6
			if ( $.support.msie && ($.support.version.slice(0,3) == "6.0" || document.compatMode=="BackCompat") ) {
				this.each(function(){
					var $this = $(this);
					if (reset) {
						var t = $this.css("top");
						var l = $this.css("left");
						var b = $this.css("bottom");
						var r = $this.css("right");
						if(!isNaN(parseInt(t))) $this.data("t",parseInt(t));
						if(!isNaN(parseInt(l))) $this.data("l",parseInt(l));
						if(!isNaN(parseInt(b))) $this.data("b",parseInt(b));
						if(!isNaN(parseInt(r))) $this.data("r",parseInt(r));
						_fixed($this);
					} else {
						_fixed($this);
					}
					if (!$this.data("winBind")) {
						$this.data("winBind",true);
						$window.scroll(function(){ _fixed($this); }).resize(function(){ _fixed($this); });
					}
				});
			}
		}
	});
})(jQuery);

/*=E UI_PLUGIN.JS */