/*!
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://piwik.org/free-software/bsd/ Simplified BSD (also in js/LICENSE.txt)
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var f,a={},o=document,c=navigator,B=screen,y=window,l=false,v=[],h=y.encodeURIComponent,w=y.decodeURIComponent,d=unescape,C,F;function q(N){var i=typeof N;return i!=="undefined"}function m(i){return typeof i==="function"}function A(i){return typeof i==="object"}function j(i){return typeof i==="string"||i instanceof String}function I(){var N,P,O;for(N=0;N<arguments.length;N+=1){O=arguments[N];P=O.shift();if(j(P)){C[P].apply(C,O)}else{P.apply(C,O)}}}function L(P,O,N,i){if(P.addEventListener){P.addEventListener(O,N,i);return true}if(P.attachEvent){return P.attachEvent("on"+O,N)}P["on"+O]=N}function G(O,R){var N="",Q,P;for(Q in a){if(Object.prototype.hasOwnProperty.call(a,Q)){P=a[Q][O];if(m(P)){N+=P(R)}}}return N}function J(){var i;G("unload");if(f){do{i=new Date()}while(i.getTimeAlias()<f)}}function H(){var N;if(!l){l=true;G("load");for(N=0;N<v.length;N++){v[N]()
}}return true}function k(){var N;if(o.addEventListener){L(o,"DOMContentLoaded",function i(){o.removeEventListener("DOMContentLoaded",i,false);H()})}else{if(o.attachEvent){o.attachEvent("onreadystatechange",function i(){if(o.readyState==="complete"){o.detachEvent("onreadystatechange",i);H()}});if(o.documentElement.doScroll&&y===y.top){(function i(){if(!l){try{o.documentElement.doScroll("left")}catch(O){setTimeout(i,0);return}H()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){N=setInterval(function(){if(l||/loaded|complete/.test(o.readyState)){clearInterval(N);H()}},10)}L(y,"load",H,false)}function e(O,N){var i=o.createElement("script");i.type="text/javascript";i.src=O;if(i.readyState){i.onreadystatechange=function(){var P=this.readyState;if(P==="loaded"||P==="complete"){i.onreadystatechange=null;N()}}}else{i.onload=N}o.getElementsByTagName("head")[0].appendChild(i)}function r(){var i="";try{i=y.top.document.referrer}catch(O){if(y.parent){try{i=y.parent.document.referrer}catch(N){i=""
}}}if(i===""){i=o.referrer}return i}function g(i){var O=new RegExp("^([a-z]+):"),N=O.exec(i);return N?N[1]:null}function b(i){var O=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),N=O.exec(i);return N?N[1]:i}function z(O,N){var R=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),Q=R.exec(O),P=new RegExp("(?:^|&)"+N+"=([^&]*)"),i=Q?P.exec(Q[1]):0;return i?w(i[1]):""}function n(i){return d(h(i))}function K(ad){var P=function(W,i){return(W<<i)|(W>>>(32-i))},ae=function(ak){var aj="",ai,W;for(ai=7;ai>=0;ai--){W=(ak>>>(ai*4))&15;aj+=W.toString(16)}return aj},S,ag,af,O=[],X=1732584193,U=4023233417,T=2562383102,R=271733878,Q=3285377520,ac,ab,aa,Z,Y,ah,N,V=[];ad=n(ad);N=ad.length;for(ag=0;ag<N-3;ag+=4){af=ad.charCodeAt(ag)<<24|ad.charCodeAt(ag+1)<<16|ad.charCodeAt(ag+2)<<8|ad.charCodeAt(ag+3);V.push(af)}switch(N&3){case 0:ag=2147483648;break;case 1:ag=ad.charCodeAt(N-1)<<24|8388608;break;case 2:ag=ad.charCodeAt(N-2)<<24|ad.charCodeAt(N-1)<<16|32768;break;case 3:ag=ad.charCodeAt(N-3)<<24|ad.charCodeAt(N-2)<<16|ad.charCodeAt(N-1)<<8|128;
break}V.push(ag);while((V.length&15)!==14){V.push(0)}V.push(N>>>29);V.push((N<<3)&4294967295);for(S=0;S<V.length;S+=16){for(ag=0;ag<16;ag++){O[ag]=V[S+ag]}for(ag=16;ag<=79;ag++){O[ag]=P(O[ag-3]^O[ag-8]^O[ag-14]^O[ag-16],1)}ac=X;ab=U;aa=T;Z=R;Y=Q;for(ag=0;ag<=19;ag++){ah=(P(ac,5)+((ab&aa)|(~ab&Z))+Y+O[ag]+1518500249)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=20;ag<=39;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+1859775393)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=40;ag<=59;ag++){ah=(P(ac,5)+((ab&aa)|(ab&Z)|(aa&Z))+Y+O[ag]+2400959708)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=60;ag<=79;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+3395469782)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}X=(X+ac)&4294967295;U=(U+ab)&4294967295;T=(T+aa)&4294967295;R=(R+Z)&4294967295;Q=(Q+Y)&4294967295}ah=ae(X)+ae(U)+ae(T)+ae(R)+ae(Q);return ah.toLowerCase()}function E(O,i,N){if(O==="translate.googleusercontent.com"){if(N===""){N=i}i=z(i,"u");O=b(i)}else{if(O==="cc.bingj.com"||O==="webcache.googleusercontent.com"||O.slice(0,5)==="74.6."){i=o.links[0].href;
O=b(i)}}return[O,i,N]}function s(N){var i=N.length;if(N.charAt(--i)==="."){N=N.slice(0,i)}if(N.slice(0,2)==="*."){N=N.slice(1)}return N}function M(N){if(!j(N)){N=N.text||"";var i=o.getElementsByTagName("title");if(i&&q(i[0])){N=i[0].text}}return N}function x(i){if(i.slice(-9)==="piwik.php"){i=i.slice(0,i.length-9)}return i}function t(Q,U){var W="Piwik_Overlay",T=o.referrer,i=x(Q);i.slice(i.slice(0,7)==="http://"?7:8,i.length);T.slice(T.slice(0,7)==="http://"?7:8,T.length);if(T.slice(0,i.length)===i){var O=new RegExp("^"+i+"index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var P=O.exec(T);if(P){var R=P[1];if(R!==String(U)){return false}var S=P[2],N=P[3];y.name=W+"###"+S+"###"+N}}var V=y.name.split("###");return V.length===3&&V[0]===W}function D(O,P){var R=y.name.split("###"),Q=R[1],N=R[2],i=x(O);e(i+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(i,P,Q,N)})}function u(ag,aF){var Q=E(o.domain,y.location.href,r()),aZ=s(Q[0]),bd=Q[1],aM=Q[2],aK="GET",P=ag||"",aH="",a3=aF||"",aw,am=o.title,ao="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aI=[aZ],T=[],aA=[],af=[],aG=500,U,ah,V,W,aq=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],al=["pk_kwd","piwik_kwd","utm_term"],bb="_pk_",Z,bc,X=false,a6,at,av,ad=63072000000,ae=1800000,ax=15768000000,S=false,aB={},a7=200,aS={},a4={},aP=false,aN=false,aL,aC,aa,ap=K,aO,au;
function aU(bm,bj,bi,bl,bh,bk){if(X){return}var bg;if(bi){bg=new Date();bg.setTime(bg.getTime()+bi)}o.cookie=bm+"="+h(bj)+(bi?";expires="+bg.toGMTString():"")+";path="+(bl||"/")+(bh?";domain="+bh:"")+(bk?";secure":"")}function ac(bi){if(X){return 0}var bg=new RegExp("(^|;)[ ]*"+bi+"=([^;]*)"),bh=bg.exec(o.cookie);return bh?w(bh[2]):0}function a8(bg){var bh;if(V){bh=new RegExp("#.*");return bg.replace(bh,"")}return bg}function aY(bi,bg){var bj=g(bg),bh;if(bj){return bg}if(bg.slice(0,1)==="/"){return g(bi)+"://"+b(bi)+bg}bi=a8(bi);if((bh=bi.indexOf("?"))>=0){bi=bi.slice(0,bh)}if((bh=bi.lastIndexOf("/"))!==bi.length-1){bi=bi.slice(0,bh+1)}return bi+bg}function aJ(bj){var bh,bg,bi;for(bh=0;bh<aI.length;bh++){bg=s(aI[bh].toLowerCase());if(bj===bg){return true}if(bg.slice(0,1)==="."){if(bj===bg.slice(1)){return true}bi=bj.length-bg.length;if((bi>0)&&(bj.slice(bi)===bg)){return true}}}return false}function bf(bg){var bh=new Image(1,1);bh.onload=function(){};bh.src=P+(P.indexOf("?")<0?"?":"&")+bg
}function aV(bg){try{var bi=y.XMLHttpRequest?new y.XMLHttpRequest():y.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bi.open("POST",P,true);bi.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){bf(bg)}};bi.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bi.send(bg)}catch(bh){bf(bg)}}function ar(bi,bh){var bg=new Date();if(!a6){if(aK==="POST"){aV(bi)}else{bf(bi)}f=bg.getTime()+bh}}function aT(bg){return bb+bg+"."+a3+"."+aO}function R(){if(X){return"0"}if(!q(c.cookieEnabled)){var bg=aT("testcookie");aU(bg,"1");return ac(bg)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function aD(){aO=ap((Z||aZ)+(bc||"/")).slice(0,4)}function ab(){var bh=aT("cvar"),bg=ac(bh);if(bg.length){bg=JSON2.parse(bg);if(A(bg)){return bg}}return{}}function O(){if(S===false){S=ab()}}function a2(){var bg=new Date();aL=bg.getTime()}function Y(bk,bh,bg,bj,bi,bl){aU(aT("id"),bk+"."+bh+"."+bg+"."+bj+"."+bi+"."+bl,ad,bc,Z)}function N(){var bh=new Date(),bg=Math.round(bh.getTime()/1000),bj=ac(aT("id")),bi;
if(bj){bi=bj.split(".");bi.unshift("0")}else{if(!au){au=ap((c.userAgent||"")+(c.platform||"")+JSON2.stringify(a4)+bg).slice(0,16)}bi=["1",au,bg,0,bg,"",""]}return bi}function i(){var bg=ac(aT("ref"));if(bg.length){try{bg=JSON2.parse(bg);if(A(bg)){return bg}}catch(bh){}}return["","",0,""]}function an(bi,bH,bI,bk){var bF,bh=new Date(),bq=Math.round(bh.getTime()/1000),bK,bG,bm,by,bC,bp,bA,bn,bE,bl=1024,bL,bt,bB=S,bw=aT("id"),br=aT("ses"),bs=aT("ref"),bM=aT("cvar"),bz=N(),bv=ac(br),bD=i(),bJ=aw||bd,bo,bg;if(X){X=false;aU(bw,"",-86400,bc,Z);aU(br,"",-86400,bc,Z);aU(bM,"",-86400,bc,Z);aU(bs,"",-86400,bc,Z);X=true}if(a6){return""}bK=bz[0];bG=bz[1];by=bz[2];bm=bz[3];bC=bz[4];bp=bz[5];if(!q(bz[6])){bz[6]=""}bA=bz[6];if(!q(bk)){bk=""}var bu=o.characterSet||o.charset;if(!bu||bu.toLowerCase()==="utf-8"){bu=null}bo=bD[0];bg=bD[1];bn=bD[2];bE=bD[3];if(!bv){bm++;bp=bC;if(!av||!bo.length){for(bF in aq){if(Object.prototype.hasOwnProperty.call(aq,bF)){bo=z(bJ,aq[bF]);if(bo.length){break}}}for(bF in al){if(Object.prototype.hasOwnProperty.call(al,bF)){bg=z(bJ,al[bF]);
if(bg.length){break}}}}bL=b(aM);bt=bE.length?b(bE):"";if(bL.length&&!aJ(bL)&&(!av||!bt.length||aJ(bt))){bE=aM}if(bE.length||bo.length){bn=bq;bD=[bo,bg,bn,a8(bE.slice(0,bl))];aU(bs,JSON2.stringify(bD),ax,bc,Z)}}bi+="&idsite="+a3+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bh.getHours()+"&m="+bh.getMinutes()+"&s="+bh.getSeconds()+"&url="+h(a8(bJ))+(aM.length?"&urlref="+h(a8(aM)):"")+"&_id="+bG+"&_idts="+by+"&_idvc="+bm+"&_idn="+bK+(bo.length?"&_rcn="+h(bo):"")+(bg.length?"&_rck="+h(bg):"")+"&_refts="+bn+"&_viewts="+bp+(String(bA).length?"&_ects="+bA:"")+(String(bE).length?"&_ref="+h(a8(bE.slice(0,bl))):"")+(bu?"&cs="+h(bu):"");var bj=JSON2.stringify(aB);if(bj.length>2){bi+="&cvar="+h(bj)}for(bF in a4){if(Object.prototype.hasOwnProperty.call(a4,bF)){bi+="&"+bF+"="+a4[bF]}}if(bH){bi+="&data="+h(JSON2.stringify(bH))}else{if(W){bi+="&data="+h(JSON2.stringify(W))}}if(S){var bx=JSON2.stringify(S);if(bx.length>2){bi+="&_cvar="+h(bx)}for(bF in bB){if(Object.prototype.hasOwnProperty.call(bB,bF)){if(S[bF][0]===""||S[bF][1]===""){delete S[bF]
}}}aU(bM,JSON2.stringify(S),ae,bc,Z)}Y(bG,by,bm,bq,bp,q(bk)&&String(bk).length?bk:bA);aU(br,"*",ae,bc,Z);bi+=G(bI);if(aH.length){bi+="&"+aH}return bi}function aX(bj,bi,bn,bk,bg,bq){var bl="idgoal=0",bm,bh=new Date(),bo=[],bp;if(String(bj).length){bl+="&ec_id="+h(bj);bm=Math.round(bh.getTime()/1000)}bl+="&revenue="+bi;if(String(bn).length){bl+="&ec_st="+bn}if(String(bk).length){bl+="&ec_tx="+bk}if(String(bg).length){bl+="&ec_sh="+bg}if(String(bq).length){bl+="&ec_dt="+bq}if(aS){for(bp in aS){if(Object.prototype.hasOwnProperty.call(aS,bp)){if(!q(aS[bp][1])){aS[bp][1]=""}if(!q(aS[bp][2])){aS[bp][2]=""}if(!q(aS[bp][3])||String(aS[bp][3]).length===0){aS[bp][3]=0}if(!q(aS[bp][4])||String(aS[bp][4]).length===0){aS[bp][4]=1}bo.push(aS[bp])}}bl+="&ec_items="+h(JSON2.stringify(bo))}bl=an(bl,W,"ecommerce",bm);ar(bl,aG)}function aW(bg,bk,bj,bi,bh,bl){if(String(bg).length&&q(bk)){aX(bg,bk,bj,bi,bh,bl)}}function ba(bg){if(q(bg)){aX("",bg,"","","","")}}function az(bj,bk){var bg=new Date(),bi=an("action_name="+h(M(bj||am)),bk,"log");
ar(bi,aG);if(U&&ah&&!aN){aN=true;L(o,"click",a2);L(o,"mouseup",a2);L(o,"mousedown",a2);L(o,"mousemove",a2);L(o,"mousewheel",a2);L(y,"DOMMouseScroll",a2);L(y,"scroll",a2);L(o,"keypress",a2);L(o,"keydown",a2);L(o,"keyup",a2);L(y,"resize",a2);L(y,"focus",a2);L(y,"blur",a2);aL=bg.getTime();setTimeout(function bh(){var bl=new Date(),bm;if((aL+ah)>bl.getTime()){if(U<bl.getTime()){bm=an("ping=1",bk,"ping");ar(bm,aG)}setTimeout(bh,ah)}},ah)}}function ak(bg,bj,bh,bk){var bi=an("search="+h(bg)+(bj?"&search_cat="+h(bj):"")+(q(bh)?"&search_count="+bh:""),bk,"sitesearch");ar(bi,aG)}function aE(bg,bj,bi){var bh=an("idgoal="+bg+(bj?"&revenue="+bj:""),bi,"goal");ar(bh,aG)}function a1(bh,bg,bj){var bi=an(bg+"="+h(a8(bh)),bj,"link");ar(bi,aG)}function a5(bh,bg){if(bh!==""){return bh+bg.charAt(0).toUpperCase()+bg.slice(1)}return bg}function aj(bl){var bk,bg,bj=["","webkit","ms","moz"],bi;if(!at){for(bg=0;bg<bj.length;bg++){bi=bj[bg];if(Object.prototype.hasOwnProperty.call(o,a5(bi,"hidden"))){if(o[a5(bi,"visibilityState")]==="prerender"){bk=true
}break}}}if(bk){L(o,bi+"visibilitychange",function bh(){o.removeEventListener(bi+"visibilitychange",bh,false);bl()});return}bl()}function ai(bi,bh){var bj,bg="(^| )(piwik[_-]"+bh;if(bi){for(bj=0;bj<bi.length;bj++){bg+="|"+bi[bj]}}bg+=")( |$)";return new RegExp(bg)}function a0(bj,bg,bk){var bi=ai(aA,"download"),bh=ai(af,"link"),bl=new RegExp("\\.("+ao+")([?&#]|$)","i");return bh.test(bj)?"link":(bi.test(bj)||bl.test(bg)?"download":(bk?0:"link"))}function aR(bl){var bj,bh,bg;while((bj=bl.parentNode)!==null&&q(bj)&&((bh=bl.tagName.toUpperCase())!=="A"&&bh!=="AREA")){bl=bj}if(q(bl.href)){var bm=bl.hostname||b(bl.href),bn=bm.toLowerCase(),bi=bl.href.replace(bm,bn),bk=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bk.test(bi)){bg=a0(bl.className,bi,aJ(bn));if(bg){bi=d(bi);a1(bi,bg)}}}}function be(bg){var bh,bi;bg=bg||y.event;bh=bg.which||bg.button;bi=bg.target||bg.srcElement;if(bg.type==="click"){if(bi){aR(bi)}}else{if(bg.type==="mousedown"){if((bh===1||bh===2)&&bi){aC=bh;
aa=bi}else{aC=aa=null}}else{if(bg.type==="mouseup"){if(bh===aC&&bi===aa){aR(bi)}aC=aa=null}}}}function aQ(bh,bg){if(bg){L(bh,"mouseup",be,false);L(bh,"mousedown",be,false)}else{L(bh,"click",be,false)}}function ay(bh){if(!aP){aP=true;var bi,bg=ai(T,"ignore"),bj=o.links;if(bj){for(bi=0;bi<bj.length;bi++){if(!bg.test(bj[bi].className)){aQ(bj[bi],bh)}}}}}function a9(){var bh,bi,bj={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bg=(new RegExp("Mac OS X.*Safari/")).test(c.userAgent)?y.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(c.userAgent))){if(c.mimeTypes&&c.mimeTypes.length){for(bh in bj){if(Object.prototype.hasOwnProperty.call(bj,bh)){bi=c.mimeTypes[bj[bh]];a4[bh]=(bi&&bi.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&q(c.javaEnabled)&&c.javaEnabled()){a4.java="1"
}if(m(y.GearsFactory)){a4.gears="1"}a4.cookie=R()}a4.res=B.width*bg+"x"+B.height*bg}a9();aD();return{getVisitorId:function(){return(N())[1]},getVisitorInfo:function(){return N()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(bg){P=bg},setSiteId:function(bg){a3=bg},setCustomData:function(bg,bh){if(A(bg)){W=bg}else{if(!W){W=[]}W[bg]=bh}},appendToTrackingUrl:function(bg){aH=bg},getCustomData:function(){return W},setCustomVariable:function(bh,bg,bk,bi){var bj;if(!q(bi)){bi="visit"}if(bh>0){bg=q(bg)&&!j(bg)?String(bg):bg;bk=q(bk)&&!j(bk)?String(bk):bk;bj=[bg.slice(0,a7),bk.slice(0,a7)];if(bi==="visit"||bi===2){O();S[bh]=bj}else{if(bi==="page"||bi===3){aB[bh]=bj}}}},getCustomVariable:function(bh,bi){var bg;if(!q(bi)){bi="visit"}if(bi==="page"||bi===3){bg=aB[bh]
}else{if(bi==="visit"||bi===2){O();bg=S[bh]}}if(!q(bg)||(bg&&bg[0]==="")){return false}return bg},deleteCustomVariable:function(bg,bh){if(this.getCustomVariable(bg,bh)){this.setCustomVariable(bg,"","",bh)}},setLinkTrackingTimer:function(bg){aG=bg},setDownloadExtensions:function(bg){ao=bg},addDownloadExtensions:function(bg){ao+="|"+bg},setDomains:function(bg){aI=j(bg)?[bg]:bg;aI.push(aZ)},setIgnoreClasses:function(bg){T=j(bg)?[bg]:bg},setRequestMethod:function(bg){aK=bg||"GET"},setReferrerUrl:function(bg){aM=bg},setCustomUrl:function(bg){aw=aY(bd,bg)},setDocumentTitle:function(bg){am=bg},setDownloadClasses:function(bg){aA=j(bg)?[bg]:bg},setLinkClasses:function(bg){af=j(bg)?[bg]:bg},setCampaignNameKey:function(bg){aq=j(bg)?[bg]:bg},setCampaignKeywordKey:function(bg){al=j(bg)?[bg]:bg},discardHashTag:function(bg){V=bg},setCookieNamePrefix:function(bg){bb=bg;S=ab()},setCookieDomain:function(bg){Z=s(bg);aD()},setCookiePath:function(bg){bc=bg;aD()},setVisitorCookieTimeout:function(bg){ad=bg*1000
},setSessionCookieTimeout:function(bg){ae=bg*1000},setReferralCookieTimeout:function(bg){ax=bg*1000},setConversionAttributionFirstReferrer:function(bg){av=bg},disableCookies:function(){X=true;a4.cookie="0"},setDoNotTrack:function(bh){var bg=c.doNotTrack||c.msDoNotTrack;a6=bh&&(bg==="yes"||bg==="1");if(a6){this.disableCookies()}},addListener:function(bh,bg){aQ(bh,bg)},enableLinkTracking:function(bg){if(l){ay(bg)}else{v.push(function(){ay(bg)})}},setHeartBeatTimer:function(bi,bh){var bg=new Date();U=bg.getTime()+bi*1000;ah=bh*1000},killFrame:function(){if(y.location!==y.top.location){y.top.location=y.location}},redirectFile:function(bg){if(y.location.protocol==="file:"){y.location=bg}},setCountPreRendered:function(bg){at=bg},trackGoal:function(bg,bi,bh){aj(function(){aE(bg,bi,bh)})},trackLink:function(bh,bg,bi){aj(function(){a1(bh,bg,bi)})},trackPageView:function(bg,bh){if(t(P,a3)){aj(function(){D(P,a3)})}else{aj(function(){az(bg,bh)})}},trackSiteSearch:function(bg,bi,bh){aj(function(){ak(bg,bi,bh)
})},setEcommerceView:function(bj,bg,bi,bh){if(!q(bi)||!bi.length){bi=""}else{if(bi instanceof Array){bi=JSON2.stringify(bi)}}aB[5]=["_pkc",bi];if(q(bh)&&String(bh).length){aB[2]=["_pkp",bh]}if((!q(bj)||!bj.length)&&(!q(bg)||!bg.length)){return}if(q(bj)&&bj.length){aB[3]=["_pks",bj]}if(!q(bg)||!bg.length){bg=""}aB[4]=["_pkn",bg]},addEcommerceItem:function(bk,bg,bi,bh,bj){if(bk.length){aS[bk]=[bk,bg,bi,bh,bj]}},trackEcommerceOrder:function(bg,bk,bj,bi,bh,bl){aW(bg,bk,bj,bi,bh,bl)},trackEcommerceCartUpdate:function(bg){ba(bg)}}}function p(){return{push:I}}L(y,"beforeunload",J,false);k();Date.prototype.getTimeAlias=Date.prototype.getTime;C=new u();for(F=0;F<_paq.length;F++){if(_paq[F][0]==="setTrackerUrl"||_paq[F][0]==="setSiteId"){I(_paq[F]);delete _paq[F]}}for(F=0;F<_paq.length;F++){if(_paq[F]){I(_paq[F])}}_paq=new p();return{addPlugin:function(i,N){a[i]=N},getTracker:function(i,N){return new u(i,N)},getAsyncTracker:function(){return C}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)
}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};