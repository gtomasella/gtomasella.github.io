(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ai(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},qc,Kt,yt,Jn=1e8,_t=1/Jn,fc=Math.PI*2,Sm=fc/4,ym=0,id=Math.sqrt,Em=Math.cos,Tm=Math.sin,Yt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},Fi=function(e){return typeof e=="number"},$c=function(e){return typeof e>"u"},xi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},jc=function(){return typeof window<"u"},Xa=function(e){return Rt(e)||Yt(e)},rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,bm=/random\([^)]+\)/g,Am=/,\s*/g,Lu=/(?:-?\.?\d|\.)+/gi,sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ad=/[+-]=-?[.\d]+/,wm=/[^,'"\[\]\s]+/gi,Rm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,hi,dc,Kc,Gn={},Vo={},od,ld=function(e){return(Vo=Ds(e,Gn))&&Rn},Zc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wa=function(e,t){return!t&&console.warn(e)},cd=function(e,t){return e&&(Gn[e]=t)&&Vo&&(Vo[e]=t)||Gn},Ra=function(){return 0},Cm={suppressEvents:!0,isStart:!0,kill:!1},Uo={suppressEvents:!0,kill:!1},Pm={suppressEvents:!0},Qc={},tr=[],pc={},ud,In={},yl={},Du=30,Io=[],Jc="",eu=function(e){var t=e[0],n,i;if(xi(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Io.length;i--&&!Io[i].targetTest(t););n=Io[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Dd(e[i],n)))||e.splice(i,1);return e},Cr=function(e){return e._gsap||eu(ei(e))[0]._gsap},hd=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():$c(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},ys=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Lm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Wo=function(){var e=tr.length,t=tr.slice(0),n,i;for(pc={},tr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},tu=function(e){return!!(e._initted||e._startAt||e.add)},fd=function(e,t,n,i){tr.length&&!Kt&&Wo(),e.render(t,n,!!(Kt&&t<0&&tu(e))),tr.length&&!Kt&&Wo()},dd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wm).length<2?t:Yt(e)?e.trim():e},pd=function(e){return e},Hn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ds=function(e,t){for(var n in t)e[n]=t[n];return e},Uu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=xi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Xo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ha=function(e){var t=e.parent||bt,n=e.keyframes?Dm(on(e.keyframes)):Hn;if(yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Um=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},md=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ol=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Im=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mc=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(Uo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Nm=function r(e){return!e||e._ts&&r(e.parent)},Iu=function(e){return e._repeat?Us(e._tTime,e=e.duration()+e._rDelay)*e:0},Us=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},Yo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ll=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},cl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ll(e),n._dirty||Pr(n,e)),e},_d=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Yo(e.rawTime(),t),(!t._dur||Ga(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),Pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},pi=function(e,t,n,i){return t.parent&&or(t),t._start=Tt((Fi(n)?n:n||e!==bt?qn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),md(e,t,"_first","_last",e._sort?"_start":0),_c(t)||(e._recent=t),i||_d(e,t),e._ts<0&&cl(e,e._tTime),e},gd=function(e,t){return(Gn.ScrollTrigger||Zc("scrollTrigger",t))&&Gn.ScrollTrigger.create(t,e)},vd=function(e,t,n,i,s){if(iu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ud!==On.frame)return tr.push(e),e._lazy=[s,i],1},Om=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},_c=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fm=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Om(e)&&!(!e._initted&&_c(e))||(e._ts<0||e._dp._ts<0)&&!_c(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ga(0,e._tDur,t),u=Us(l,a),e._yoyo&&u&1&&(o=1-o),u!==Us(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Kt||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&vd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&mc(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&or(e,1),!n&&!Kt&&(Bn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Bm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Is=function(e,t,n,i){var s=e._repeat,o=Tt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&cl(e,e._tTime=e._tDur*a),e.parent&&ll(e),n||Pr(e.parent,e),e},Nu=function(e){return e instanceof Sn?Pr(e):Is(e,e._dur)},zm={_start:0,endTime:Ra,totalDuration:Ra},qn=function r(e,t,n){var i=e.labels,s=e._recent||zm,o=e.duration()>=Jn?s.endTime(!1):e._dur,a,l,c;return Yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},fa=function(e,t,n){var i=Fi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Nt(t[0],o,t[s+1])},fr=function(e,t){return e||e===0?t(e):t},Ga=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!Yt(e)||!(t=Rm.exec(e))?"":t[1]},km=function(e,t,n){return fr(n,function(i){return Ga(e,t,i)})},gc=[].slice,xd=function(e,t){return e&&xi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&xi(e[0]))&&!e.nodeType&&e!==hi},Gm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Yt(i)&&!t||xd(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Yt(e)&&!n&&(dc||!Ns())?gc.call((t||Kc).querySelectorAll(e),0):on(e)?Gm(e,n):xd(e)?gc.call(e,0):e?[e]:[]},vc=function(e){return e=ei(e)[0]||wa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?wa("Invalid scope")||Kc.createElement("div"):e)}},Md=function(e){return e.sort(function(){return .5-Math.random()})},Sd=function(e){if(Rt(e))return e;var t=xi(e)?e:{each:e},n=Lr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Yt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,p=o[_],m,M,v,S,A,w,y,U,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!x){for(y=-Jn;y<(y=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:i%x,M=x===Jn?0:l?_*f/x-.5:i/x|0,y=0,U=Jn,w=0;w<_;w++)v=w%x-m,S=M-(w/x|0),p[w]=A=c?Math.abs(c==="y"?S:v):id(v*v+S*S),A>y&&(y=A),A<U&&(U=A);i==="random"&&Md(p),p.max=y-U,p.min=U,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=rn(t.amount||t.each)||0,n=n&&_<0?e_(n):n}return _=(p[d]-p.min)/p.max||0,Tt(p.b+(n?n(_):_)*p.v)+p.u}},xc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Fi(n)?0:rn(n))}},yd=function(e,t){var n=on(e),i,s;return!n&&xi(e)&&(i=n=e.radius||Jn,e.values?(e=ei(e.values),(s=!Fi(e[0]))&&(i*=i)):e=xc(e.increment)),fr(t,n?Rt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Jn,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||Fi(o)?u:u+rn(o)}:xc(e))},Ed=function(e,t,n,i){return fr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Hm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Vm=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},Wm=function(e,t,n){return bd(e,t,0,1,n)},Td=function(e,t,n){return fr(n,function(i){return e[~~t(i)]})},Xm=function r(e,t,n){var i=t-e;return on(e)?Td(e,r(0,e.length),t):fr(n,function(s){return(i+(s-e)%i)%i+e})},Ym=function r(e,t,n){var i=t-e,s=i*2;return on(e)?Td(e,r(0,e.length-1),t):fr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ca=function(e){return e.replace(bm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Am);return Ed(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},bd=function(e,t,n,i,s){var o=t-e,a=i-n;return fr(s,function(l){return n+((l-e)/o*a||0)})},qm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Yt(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Ds(on(e)?[]:{},e));if(!u){for(l in t)nu.call(a,e,l,"get",t[l]);s=function(g){return au(g,a)||(o?e.p:e)}}}return fr(n,s)},Ou=function(e,t,n){var i=e.labels,s=Jn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(e,t,n){var i=e.vars,s=i[t],o=yt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&tr.length&&Wo(),a&&(yt=a),u=l?s.apply(c,l):s.call(c),yt=o,u},ia=function(e){return or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Bn(e,"onInterrupt"),e},vs,Ad=[],wd=function(e){if(e)if(e=!e.name&&e.default||e,jc()||e.headless){var t=e.name,n=Rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ra,render:au,add:nu,kill:u_,modifier:c_,rawVars:0},o={targetTest:0,get:0,getSetter:su,aliases:{},register:0};if(Ns(),e!==i){if(In[t])return;Hn(i,Hn(Xo(e,s),o)),Ds(i.prototype,Ds(s,Xo(e,o))),In[i.prop=t]=i,e.targetTest&&(Io.push(i),Qc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cd(t,i),e.register&&e.register(Rn,i,Tn)}else Ad.push(e)},mt=255,ra={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},El=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},Rd=function(e,t,n){var i=e?Fi(e)?[e>>16,e>>8&mt,e&mt]:0:ra.black,s,o,a,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ra[e])i=ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&mt,i&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=El(l+1/3,s,o),i[1]=El(l,s,o),i[2]=El(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lu)||ra.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/mt,o=i[1]/mt,a=i[2]/mt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Cd=function(e){var t=[],n=[],i=-1;return e.split(nr).forEach(function(s){var o=s.match(gs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Fu=function(e,t,n){var i="",s=(e+i).match(nr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Rd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Cd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(nr,"1").split(gs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(nr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},nr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ra)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),$m=/hsl[a]?\(/,Pd=function(e){var t=e.join(" "),n;if(nr.lastIndex=0,nr.test(t))return n=$m.test(t),e[1]=Fu(e[1],n),e[0]=Fu(e[0],n,Cd(e[1])),!0},Pa,On=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(p){var m=r()-i,M=p===!0,v,S,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,v=A-o,(v>0||M)&&(w=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(_)),S)for(h=0;h<a.length;h++)a[h](A,d,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){od&&(!dc&&jc()&&(hi=dc=window,Kc=hi.document||{},Gn.gsap=Rn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Rn.version),ld(Vo||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Ad.forEach(wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Pa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Pa=0,c=Ra},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,M){var v=m?function(S,A,w,y){p(S,A,w,y),f.remove(v)}:p;return f.remove(p),a[M?"unshift":"push"](v),Ns(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&h>=m&&h--},_listeners:a},f}(),Ns=function(){return!Pa&&On.wake()},lt={},jm=/^[\d.\-M][\d.\-,\s]/,Km=/["']/g,Zm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Km,"").trim():+c,i=l.substr(a+1).trim();return t},Qm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Jm=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zm(t[1])]:Qm(e).split(",").map(dd)):lt._CE&&jm.test(e)?lt._CE("",e):n},e_=function(e){return function(t){return 1-e(1-t)}},Lr=function(e,t){return e&&(Rt(e)?e:lt[e]||Jm(e))||t},Vr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return En(e,function(a){lt[a]=Gn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Ld=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Tl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/fc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Tm((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ld(a);return s=fc/s,l.config=function(c,u){return r(e,c,u)},l},bl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ld(n);return i.config=function(s){return r(e,s)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Vr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;Vr("Elastic",Tl("in"),Tl("out"),Tl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Vr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Vr("Circ",function(r){return-(id(1-r*r)-1)});Vr("Sine",function(r){return r===1?1:-Em(r*Sm)+1});Vr("Back",bl("in"),bl("out"),bl());lt.SteppedEase=lt.steps=Gn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((i*Ga(0,o,a)|0)+s)*n}}};Aa.ease=lt["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Jc+=r+","+r+"Params,"});var Dd=function(e,t){this.id=ym++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hd,this.set=t?t.getSetter:su},La=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Is(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Pa||On.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cl(this,n),!s._dp||s.parent||_d(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Iu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Iu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Us(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Yo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(Ga(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ll(this),Im(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Tt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Pm);var i=Kt;return Kt=n,tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-_t),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Rt(n)?n:pd,l=function(){var u=i.then;i.then=null,s&&s(),Rt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ia(this)},r}();Hn(La.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var Sn=function(r){nd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),bt&&pi(n.parent||bt,Ai(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gd(Ai(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return fa(0,arguments,this),this},t.from=function(i,s,o){return fa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return fa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(i,s,qn(this,o),1),this},t.call=function(i,s,o){return pi(this,Nt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Nt(i,o,qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ha(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,ha(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Tt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,p,m,M,v,S,A,w,y;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=Tt(u%p),u===l?(_=this._repeat,d=c):(A=Tt(u/p),_=~~A,_&&_===A&&(d=c,_--),d>c&&(d=c)),A=Us(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(d=c-d,y=1),_!==A&&!this._lock){var U=w&&A&1,x=U===(w&&_&1);if(_<A&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(y?0:Tt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Bm(this,Tt(a),Tt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Bn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=-_t);break}}h=g}else{h=this._last;for(var E=i<0?i:d;h;){if(g=h._prev,(h._act||E<=h._end)&&h._ts&&M!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,o||Kt&&tu(h)),d!==this._time||!this._ts&&!m){M=0,g&&(u+=this._zTime=E?-_t:_t);break}}h=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-_t)._zTime=d>=a?1:-1,this._ts))return this._start=S,ll(this),this.render(i,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Fi(s)||(s=qn(this,s,i)),!(i instanceof La)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Yt(i))return this.addLabel(i,s);if(Rt(i))i=Nt.delayedCall(0,i);else return this}return this!==i?pi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Yt(i)?this.removeLabel(i):Rt(i)?this.killTweensOf(i):(i.parent===this&&ol(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Nt.delayedCall(0,s||Ra,o);return a.data="isPause",this._hasPause=1,pi(this,a,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&or(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)$i!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ei(i),l=this._first,c=Fi(s),u;l;)l instanceof Nt?Lm(l._targets,a)&&(c?(!$i||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Nt.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Is(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Hn({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ou(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ou(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Tt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Jn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Tt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Is(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(bt._ts&&(fd(bt,Yo(i,bt)),ud=On.frame),On.frame>=Du){Du+=kn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&kn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},e}(La);Hn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var t_=function(e,t,n,i,s,o,a){var l=new Tn(this._pt,e,t,0,1,Bd,null,s),c=0,u=0,f,d,h,g,_,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ca(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(Sl)||[];f=Sl.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ys(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Sl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ad.test(i)||m)&&(l.e=0),this._pt=l,l},nu=function(e,t,n,i,s,o,a,l,c,u){Rt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Rt(f)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Rt(f)?c?a_:Od:ru,g;if(Yt(i)&&(~i.indexOf("random(")&&(i=Ca(i)),i.charAt(1)==="="&&(g=ys(d,i)+(rn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Mc)return!isNaN(d*i)&&i!==""?(g=new Tn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?l_:Fd,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Zc(t,i),t_.call(this,e,t,d,i,h,l||kn.stringFilter,c))},n_=function(e,t,n,i,s){if(Rt(e)&&(e=da(e,s,t,n,i)),!xi(e)||e.style&&e.nodeType||on(e)||rd(e))return Yt(e)?da(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=da(e[a],s,t,n,i);return o},Ud=function(e,t,n,i,s,o){var a,l,c,u;if(In[e]&&(a=new In[e]).init(s,a.rawVars?t[e]:n_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==vs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},$i,Mc,iu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!qc,S=e.timeline,A=i.easeReverse||f,w,y,U,x,E,z,I,Z,D,O,k,W,q;if(S&&(!d||!s)&&(s="none"),e._ease=Lr(s,Aa.ease),e._rEase=A&&(Lr(A)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||d&&!i.stagger){if(Z=p[0]?Cr(p[0]).harness:0,W=Z&&i[Z.prop],w=Xo(i,Qc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?Uo:Cm),_._lazy=0),o){if(or(e._startAt=Nt.set(p,Hn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!h)&&e._startAt.revert(Uo),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),U=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:m},w),W&&(U[Z.prop]=W),or(e._startAt=Nt.set(p,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(Uo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&yn(l)||l&&!g,y=0;y<p.length;y++){if(E=p[y],I=E._gsap||eu(p)[y]._gsap,e._ptLookup[y]=O={},pc[I.id]&&tr.length&&Wo(),k=M===p?y:M.indexOf(E),Z&&(D=new Z).init(E,W||w,e,k,M)!==!1&&(e._pt=x=new Tn(e._pt,E,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(j){O[j]=x}),D.priority&&(z=1)),!Z||W)for(U in w)In[U]&&(D=Ud(U,w,e,k,E,M))?D.priority&&(z=1):O[U]=x=nu.call(e,E,U,"get",w[U],k,M,0,i.stringFilter);e._op&&e._op[y]&&e.kill(E,e._op[y]),v&&e._pt&&($i=e,bt.killTweensOf(E,O,e.globalTime(t)),q=!e.parent,$i=0),e._pt&&l&&(pc[I.id]=1)}z&&zd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&S.render(Jn,!0,!0)},i_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Mc=1,e.vars[t]="+=0",iu(e,a),Mc=0,l?wa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Ct(n)+rn(f.e)),f.b&&(f.b=u.s+rn(f.b))},r_=function(e,t){var n=e[0]?Cr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ds({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},s_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},da=function(e,t,n,i,s){return Rt(e)?e.call(t,n,i,s):Yt(e)&&~e.indexOf("random(")?Ca(e):e},Id=Jc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nd={};En(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Nd[r]=1});var Nt=function(r){nd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ha(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||bt,M=(on(n)||rd(n)?Fi(n[0]):"length"in i)?[n]:ei(n),v,S,A,w,y,U,x,E;if(a._targets=M.length?eu(M):wa("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Xa(c)||Xa(u)){i=a.vars;var z=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Sn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),v.kill(),v.parent=v._dp=Ai(a),v._start=0,d||Xa(c)||Xa(u)){if(w=M.length,x=d&&Sd(d),xi(d))for(y in d)~Id.indexOf(y)&&(E||(E={}),E[y]=d[y]);for(S=0;S<w;S++)A=Xo(i,Nd),A.stagger=0,z&&(A.easeReverse=z),E&&Ds(A,E),U=M[S],A.duration=+da(c,Ai(a),S,U,M),A.delay=(+da(u,Ai(a),S,U,M)||0)-a._delay,!d&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),v.to(U,A,x?x(S,U,M):0),v._ease=lt.none;v.duration()?c=u=0:a.timeline=0}else if(g){ha(Hn(v.vars.defaults,{ease:"none"})),v._ease=Lr(g.ease||i.ease||"none");var I=0,Z,D,O;if(on(g))g.forEach(function(k){return v.to(M,k,">")}),v.duration();else{A={};for(y in g)y==="ease"||y==="easeEach"||s_(y,g[y],A,g.easeEach);for(y in A)for(Z=A[y].sort(function(k,W){return k.t-W.t}),I=0,S=0;S<Z.length;S++)D=Z[S],O={ease:D.e,duration:(D.t-(S?Z[S-1].t:0))/100*c},O[y]=D.v,v.to(M,O,I),I+=O.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return h===!0&&!qc&&($i=Ai(a),bt.killTweensOf(M),$i=0),pi(m,Ai(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Tt(m._time)&&yn(f)&&Nm(Ai(a))&&m.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-u)||0)),p&&gd(Ai(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-_t&&!u?l:i<_t?0:i,d,h,g,_,p,m,M,v;if(!c)Fm(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=Tt(f%_),f===l?(g=this._repeat,d=c):(p=Tt(f/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=Us(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Tt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(vd(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var A=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!p&&(Bn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(M,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&mc(this,i,s,o),Bn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&mc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&or(this,1),!s&&!(u&&!a)&&(f||a||m)&&(Bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Pa||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||iu(this,c),u=this._ease(c/this._dur),i_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(cl(this,0),this.parent||md(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,$i&&$i.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ei(i):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,p,m;if((!s||s==="all")&&Um(a,l))return s==="all"&&(this._pt=0),ia(this);for(f=this._op=this._op||[],s!=="all"&&(Yt(s)&&(_={},En(s,function(M){return _[M]=1}),s=_),s=r_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(f[m]=s,g=d,h={}):(h=f[m]=f[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ol(this,p,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&ia(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return fa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return fa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return bt.killTweensOf(i,s,o)},e}(La);Hn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(r){Nt[r]=function(){var e=new Sn,t=gc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ru=function(e,t,n){return e[t]=n},Od=function(e,t,n){return e[t](n)},a_=function(e,t,n,i){return e[t](i.fp,n)},o_=function(e,t,n){return e.setAttribute(t,n)},su=function(e,t){return Rt(e[t])?Od:$c(e[t])&&e.setAttribute?o_:ru},Fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},l_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},au=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},c_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},u_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ol(this,t,"_pt"):t.dep||(n=1),t=i;return!n},h_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},zd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Tn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Fd,this.d=l||this,this.set=c||ru,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=h_,this.m=n,this.mt=s,this.tween=i},r}();En(Jc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Qc[r]=1});Gn.TweenMax=Gn.TweenLite=Nt;Gn.TimelineLite=Gn.TimelineMax=Sn;bt=new Sn({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=Pd;var Dr=[],No={},f_=[],Bu=0,d_=0,Al=function(e){return(No[e]||f_).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-Bu>2&&(Al("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=hi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Al("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bu=e,Al("matchMedia"))},kd=function(){function r(t,n){this.selector=n&&vc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=d_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Rt(n)&&(s=i,i=n,n=Rt);var o=this,a=function(){var c=yt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=vc(s)),yt=o,f=i.apply(o,arguments),Rt(f)&&o._r.push(f),yt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Rt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),p_=function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){xi(n)||(n={matches:n});var o=new kd(0,s||this.scope),a=o.conditions={},l,c,u;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=hi.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return u&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),qo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return wd(i)})},timeline:function(e){return new Sn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Yt(e)&&(e=ei(e)[0]);var s=Cr(e||{}).get,o=n?pd:dd;return n==="native"&&(n=""),e&&(t?o((In[t]&&In[t].get||s)(e,t,n,i)):function(a,l,c){return o((In[a]&&In[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=In[t],a=Cr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;vs._pt=0,f.init(e,n?u+n:u,vs,0,[e]),f.render(1,f),vs._pt&&au(1,vs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Rn.to(e,Hn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lr(e.ease,Aa.ease)),Uu(Aa,e||{})},config:function(e){return Uu(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!In[a]&&!Gn[a]&&wa(t+" effect requires "+a+" plugin.")}),yl[t]=function(a,l,c){return n(ei(a),Hn(l||{},s),c)},o&&(Sn.prototype[t]=function(a,l,c){return this.add(yl[t](a,xi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Lr(t)},parseEase:function(e,t){return arguments.length?Lr(e,t):lt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Sn(e),i,s;for(n.smoothChildTiming=yn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=s;return pi(bt,n,0),n},context:function(e,t){return e?new kd(e,t):yt},matchMedia:function(e){return new p_(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sc()},addEventListener:function(e,t){var n=No[e]||(No[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=No[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Xm,wrapYoyo:Ym,distribute:Sd,random:Ed,snap:yd,normalize:Wm,getUnit:rn,clamp:km,splitColor:Rd,toArray:ei,selector:vc,mapRange:bd,pipe:Hm,unitize:Vm,interpolate:qm,shuffle:Md},install:ld,effects:yl,ticker:On,updateRoot:Sn.updateRoot,plugins:In,globalTimeline:bt,core:{PropTween:Tn,globals:cd,Tween:Nt,Timeline:Sn,Animation:La,getCache:Cr,_removeLinkedListItem:ol,reverting:function(){return Kt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return qc=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qo[r]=Nt[r]});On.add(Sn.updateRoot);vs=qo.to({},{duration:0});var m_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},__=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=m_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},wl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Yt(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}__(a,s)}}}},Rn=qo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wl("roundProps",xc),wl("modifiers"),wl("snap",yd))||qo;Nt.version=Sn.version=Rn.version="3.15.0";od=1;jc()&&Ns();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zu,ji,Es,ou,wr,ku,lu,g_=function(){return typeof window<"u"},Bi={},Sr=180/Math.PI,Ts=Math.PI/180,Xr=Math.atan2,Gu=1e8,cu=/([A-Z])/g,v_=/(left|right|width|margin|padding|x)/i,x_=/[\s,\(]\S/,mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},M_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},y_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},E_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},T_=function(e,t,n){return e.style[t]=n},b_=function(e,t,n){return e.style.setProperty(t,n)},A_=function(e,t,n){return e._gsap[t]=n},w_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},R_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},C_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},At="transform",bn=At+"Origin",P_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=wi(i,a)}):this.tfm[e]=o.x?o[e]:wi(i,e),e===bn&&(this.tfm.zOrigin=o.zOrigin);else return mi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(At)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},Vd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lu(),(!s||!s.isStart)&&!n[At]&&(Vd(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Wd=function(e,t){var n={target:e,props:[],revert:L_,save:P_};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Xd,Ec=function(e,t){var n=ji.createElementNS?ji.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ji.createElement(e);return n&&n.style?n:ji.createElement(e)},zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Os(t)||t,1)||""},Hu="O,Moz,ms,Ms,Webkit".split(","),Os=function(e,t,n){var i=t||wr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Hu[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Hu[o]:"")+e},Tc=function(){g_()&&window.document&&(zu=window,ji=zu.document,Es=ji.documentElement,wr=Ec("div")||{style:{}},Ec("div"),At=Os(At),bn=At+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xd=!!Os("perspective"),lu=Rn.core.reverting,ou=1)},Vu=function(e){var t=e.ownerSVGElement,n=Ec("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Es.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Es.removeChild(n),s},Wu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yd=function(e){var t,n;try{t=e.getBBox()}catch{t=Vu(e),n=1}return t&&(t.width||t.height)||n||(t=Vu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Wu(e,["x","cx","x1"])||0,y:+Wu(e,["y","cy","y1"])||0,width:0,height:0}:t},qd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yd(e))},lr=function(e,t){if(t){var n=e.style,i;t in Bi&&t!==bn&&(t=At),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ki=function(e,t,n,i,s,o){var a=new Tn(e._pt,t,n,0,1,o?Hd:Gd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Xu={deg:1,rad:1,turn:1},D_={grid:1,flex:1},cr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=wr.style,l=v_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,p,m;if(i===o||!s||Xu[i]||Xu[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&qd(e),(h||o==="%")&&(Bi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Ct(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ji||!_.appendChild)&&(_=ji.body),p=_._gsap,p&&h&&p.width&&l&&p.time===On.time&&!p.uncache)return Ct(s/p.width*f);if(h&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+i,g=e[u],M?e.style[t]=M:lr(e,t)}else(h||o==="%")&&!D_[zn(_,"display")]&&(a.position=zn(e,"position")),_===e&&(a.position="static"),_.appendChild(wr),g=wr[u],_.removeChild(wr),a.position="absolute";return l&&h&&(p=Cr(_),p.time=On.time,p.width=_[u]),Ct(d?g*s/f:g&&s?f/g*s:0)},wi=function(e,t,n,i){var s;return ou||Tc(),t in mi&&t!=="transform"&&(t=mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(s=Ua(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:jo(zn(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$o[t]&&$o[t](e,t,n)||zn(e,t)||hd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(e,t,s,n)+n:s},U_=function(e,t,n,i){if(!n||n==="none"){var s=Os(t,e,1),o=s&&zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=zn(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,Bd),l=0,c=0,u,f,d,h,g,_,p,m,M,v,S,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=zn(e,t)||i,_?e.style[t]=_:lr(e,t)),u=[n,i],Pd(u),n=u[0],i=u[1],d=n.match(gs)||[],A=i.match(gs)||[],A.length){for(;f=gs.exec(i);)p=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(h=parseFloat(_)||0,S=_.substr((h+"").length),p.charAt(1)==="="&&(p=ys(h,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=gs.lastIndex-v.length,v||(v=v||kn.units[t]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(h=cr(e,t,_,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Hd:Gd;return ad.test(i)&&(a.e=0),this._pt=a,a},Yu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yu[n]||n,t[1]=Yu[i]||i,t.join(" ")},N_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Bi[a]&&(l=1,a=a==="transformOrigin"?bn:At),lr(n,a);l&&(lr(n,At),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ua(n,1),o.uncache=1,Vd(i)))}},$o={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,n,0,0,N_);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Da=[1,0,0,1,0,0],$d={},jd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qu=function(e){var t=zn(e,At);return jd(t)?Da:t.substr(7).match(sd).map(Ct)},uu=function(e,t){var n=e._gsap||Cr(e),i=e.style,s=qu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Da:s):(s===Da&&!e.offsetParent&&e!==Es&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Es.appendChild(e)),s=qu(e),l?i.display=l:lr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Es.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bc=function(e,t,n,i,s,o){var a=e._gsap,l=s||uu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],M=l[5],v=t.split(" "),S=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,y,U,x;n?l!==Da&&(y=h*p-g*_)&&(U=S*(p/y)+A*(-_/y)+(_*M-p*m)/y,x=S*(-g/y)+A*(h/y)-(h*M-g*m)/y,S=U,A=x):(w=Yd(e),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=S-c,M=A-u,a.xOffset=f+(m*h+M*_)-m,a.yOffset=d+(m*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[bn]="0px 0px",o&&(Ki(o,a,"xOrigin",c,S),Ki(o,a,"yOrigin",u,A),Ki(o,a,"xOffset",f,a.xOffset),Ki(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+A)},Ua=function(e,t){var n=e._gsap||new Dd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=zn(e,bn)||"0",u,f,d,h,g,_,p,m,M,v,S,A,w,y,U,x,E,z,I,Z,D,O,k,W,q,j,C,Q,ae,$,K,ce;return u=f=d=_=p=m=M=v=S=0,h=g=1,n.svg=!!(e.getCTM&&qd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),y=uu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),bc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,y)),A=n.xOrigin||0,w=n.yOrigin||0,y!==Da&&(z=y[0],I=y[1],Z=y[2],D=y[3],u=O=y[4],f=k=y[5],y.length===6?(h=Math.sqrt(z*z+I*I),g=Math.sqrt(D*D+Z*Z),_=z||I?Xr(I,z)*Sr:0,M=Z||D?Xr(Z,D)*Sr+_:0,M&&(g*=Math.abs(Math.cos(M*Ts))),n.svg&&(u-=A-(A*z+w*Z),f-=w-(A*I+w*D))):(ce=y[6],$=y[7],C=y[8],Q=y[9],ae=y[10],K=y[11],u=y[12],f=y[13],d=y[14],U=Xr(ce,ae),p=U*Sr,U&&(x=Math.cos(-U),E=Math.sin(-U),W=O*x+C*E,q=k*x+Q*E,j=ce*x+ae*E,C=O*-E+C*x,Q=k*-E+Q*x,ae=ce*-E+ae*x,K=$*-E+K*x,O=W,k=q,ce=j),U=Xr(-Z,ae),m=U*Sr,U&&(x=Math.cos(-U),E=Math.sin(-U),W=z*x-C*E,q=I*x-Q*E,j=Z*x-ae*E,K=D*E+K*x,z=W,I=q,Z=j),U=Xr(I,z),_=U*Sr,U&&(x=Math.cos(U),E=Math.sin(U),W=z*x+I*E,q=O*x+k*E,I=I*x-z*E,k=k*x-O*E,z=W,O=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=Ct(Math.sqrt(z*z+I*I+Z*Z)),g=Ct(Math.sqrt(k*k+ce*ce)),U=Xr(O,k),M=Math.abs(U)>2e-4?U*Sr:0,S=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jd(zn(e,At)),W&&e.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(h*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ct(h),n.scaleY=Ct(g),n.rotation=Ct(_)+a,n.rotationX=Ct(p)+a,n.rotationY=Ct(m)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[bn]=jo(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?F_:Xd?Kd:O_,n.uncache=0,n},jo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Rl=function(e,t,n){var i=rn(t);return Ct(parseFloat(t)+parseFloat(cr(e,"x",n+"px",i)))+i},O_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kd(e,t)},mr="0deg",Ks="0px",_r=") ",Kd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,S="",A=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==mr||u!==mr)){var w=parseFloat(u)*Ts,y=Math.sin(w),U=Math.cos(w),x;w=parseFloat(f)*Ts,x=Math.cos(w),o=Rl(M,o,y*x*-v),a=Rl(M,a,-Math.sin(w)*-v),l=Rl(M,l,U*x*-v+v)}p!==Ks&&(S+="perspective("+p+_r),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||o!==Ks||a!==Ks||l!==Ks)&&(S+=l!==Ks||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+_r),c!==mr&&(S+="rotate("+c+_r),u!==mr&&(S+="rotateY("+u+_r),f!==mr&&(S+="rotateX("+f+_r),(d!==mr||h!==mr)&&(S+="skew("+d+", "+h+_r),(g!==1||_!==1)&&(S+="scale("+g+", "+_+_r),M.style[At]=S||"translate(0, 0)"},F_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),A,w,y,U,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ts,c*=Ts,A=Math.cos(l)*f,w=Math.sin(l)*f,y=Math.sin(l-c)*-d,U=Math.cos(l-c)*d,c&&(u*=Ts,x=Math.tan(c-u),x=Math.sqrt(1+x*x),y*=x,U*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,w*=x)),A=Ct(A),w=Ct(w),y=Ct(y),U=Ct(U)):(A=f,U=d,w=y=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=cr(h,"x",o,"px"),S=cr(h,"y",a,"px")),(g||_||p||m)&&(v=Ct(v+g-(g*A+_*y)+p),S=Ct(S+_-(g*w+_*U)+m)),(i||s)&&(x=h.getBBox(),v=Ct(v+i/100*x.width),S=Ct(S+s/100*x.height)),x="matrix("+A+","+w+","+y+","+U+","+v+","+S+")",h.setAttribute("transform",x),M&&(h.style[At]=x)},B_=function(e,t,n,i,s){var o=360,a=Yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Sr:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Gu)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Gu)%o-~~(c/o)*o)),e._pt=d=new Tn(e._pt,t,n,i,c,M_),d.e=u,d.u="deg",e._props.push(n),d},$u=function(e,t){for(var n in t)e[n]=t[n];return e},z_=function(e,t,n){var i=$u({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[At]=t,a=Ua(n,1),lr(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],o[At]=t,a=Ua(n,1),o[At]=c);for(l in Bi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=rn(c),g=rn(u),f=h!==g?cr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Tn(e._pt,a,l,f,d-f,yc),e._pt.u=g||0,e._props.push(l));$u(a,i)};En("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});$o[e>1?"border"+r:r]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return wi(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var Zd={name:"css",register:Tc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,p,m,M,v,S,A,w,y,U,x;ou||Tc(),this.styles=this.styles||Wd(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(In[_]&&Ud(_,t,n,i,e,s)))){if(h=typeof u,g=$o[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ca(u)),g)g(this,e,_,u,n)&&(y=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",nr.lastIndex=0,nr.test(c)||(p=rn(c),m=rn(u),m?p!==m&&(c=cr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Yt(c)&&~c.indexOf("random(")&&(c=Ca(c)),rn(c+"")||c==="auto"||(c+=kn.units[_]||rn(wi(e,_))||""),(c+"").charAt(1)==="="&&(c=wi(e,_))):c=wi(e,_),d=parseFloat(c),M=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in mi&&(_==="autoAlpha"&&(d===1&&wi(e,"visibility")==="hidden"&&f&&(d=0),U.push("visibility",0,a.visibility),Ki(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Bi,v){if(this.styles.save(_),x=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=zn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=zn(e,"perspective"),E?e.style.perspective=E:lr(e,"perspective")}f=parseFloat(u)}if(S||(A=e._gsap,A.renderTransform&&!t.parseTransform||Ua(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,S=this._pt=new Tn(this._pt,a,At,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new Tn(this._pt,A,"scaleY",A.scaleY,(M?ys(A.scaleY,M+f):f)-A.scaleY||0,yc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(bn,0,a[bn]),u=I_(u),A.svg?bc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Ki(this,A,"zOrigin",A.zOrigin,m),Ki(this,a,_,jo(c),jo(u)));continue}else if(_==="svgOrigin"){bc(e,u,1,w,0,this);continue}else if(_ in $d){B_(this,A,_,d,M?ys(d,M+u):u);continue}else if(_==="smoothOrigin"){Ki(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){z_(this,u,e);continue}}else _ in a||(_=Os(_)||_);if(v||(f||f===0)&&(d||d===0)&&!x_.test(u)&&_ in a)p=(c+"").substr((d+"").length),f||(f=0),m=rn(u)||(_ in kn.units?kn.units[_]:p),p!==m&&(d=cr(e,_,c,m)),this._pt=new Tn(this._pt,v?A:a,_,d,(M?ys(d,M+f):f)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?E_:yc),this._pt.u=m||0,v&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=y_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=S_);else if(_ in a)U_.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){Zc(_,u);continue}v||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}y&&zd(this)},render:function(e,t){if(t.tween._time||!lu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:wi,aliases:mi,getSetter:function(e,t,n){var i=mi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==bn&&(e._gsap.x||wi(e,"x"))?n&&ku===n?t==="scale"?w_:A_:(ku=n||{})&&(t==="scale"?R_:C_):e.style&&!$c(e.style[t])?T_:~t.indexOf("-")?b_:su(e,t)},core:{_removeProperty:lr,_getMatrix:uu}};Rn.utils.checkPrefix=Os;Rn.core.getStyleSaver=Wd;(function(r,e,t,n){var i=En(r+","+e+","+t,function(s){Bi[s]=1});En(e,function(s){kn.units[s]="deg",$d[s]=1}),mi[i[13]]=r+","+e,En(n,function(s){var o=s.split(":");mi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});Rn.registerPlugin(Zd);var Ut=Rn.registerPlugin(Zd)||Rn;Ut.core.Tween;function k_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function G_(r,e,t){return e&&k_(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $t,Oo,Fn,Zi,Qi,bs,Qd,yr,As,Jd,Pi,si,ep,tp=function(){return $t||typeof window<"u"&&($t=window.gsap)&&$t.registerPlugin&&$t},np=1,xs=[],st=[],vi=[],pa=Date.now,Ac=function(e,t){return t},H_=function(){var e=As.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,vi),st=n,vi=i,Ac=function(o,a){return t[o](a)}},ir=function(e,t){return~vi.indexOf(e)&&vi[vi.indexOf(e)+1][t]},ma=function(e){return!!~Jd.indexOf(e)},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ya="scrollLeft",qa="scrollTop",wc=function(){return Pi&&Pi.isPressed||st.cache++},Ko=function(e,t){var n=function i(s){if(s||s===0){np&&(Fn.history.scrollRestoration="manual");var o=Pi&&Pi.isPressed;s=i.v=Math.round(s)||(Pi&&Pi.iOS?1:0),e(s),i.cacheID=st.cache,o&&Ac("ss",s)}else(t||st.cache!==i.cacheID||Ac("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},vn={s:Ya,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ko(function(r){return arguments.length?Fn.scrollTo(r,zt.sc()):Fn.pageXOffset||Zi[Ya]||Qi[Ya]||bs[Ya]||0})},zt={s:qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vn,sc:Ko(function(r){return arguments.length?Fn.scrollTo(vn.sc(),r):Fn.pageYOffset||Zi[qa]||Qi[qa]||bs[qa]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||$t.utils.toArray)(e)[0]||(typeof e=="string"&&$t.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},V_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ur=function(e,t){var n=t.s,i=t.sc;ma(e)&&(e=Zi.scrollingElement||Qi);var s=st.indexOf(e),o=i===zt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||hn(e,"scroll",wc);var a=st[s+o],l=a||(st[s+o]=Ko(ir(e,n),!0)||(ma(e)?i:Ko(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=$t.getProperty(e,"scrollBehavior")==="smooth"),l},Rc=function(e,t,n){var i=e,s=e,o=pa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=pa();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=pa();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Zs=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ju=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ip=function(){As=$t.core.globals().ScrollTrigger,As&&As.core&&H_()},rp=function(e){return $t=e||tp(),!Oo&&$t&&typeof document<"u"&&document.body&&(Fn=window,Zi=document,Qi=Zi.documentElement,bs=Zi.body,Jd=[Fn,Zi,Qi,bs],$t.utils.clamp,ep=$t.core.context||function(){},yr="onpointerenter"in bs?"pointer":"mouse",Qd=Pt.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,si=Pt.eventTypes=("ontouchstart"in Qi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return np=0},500),Oo=1),As||ip(),Oo};vn.op=zt;st.cache=0;var Pt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Oo||rp($t)||console.warn("Please gsap.registerPlugin(Observer)"),As||ip();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,A=n.onRight,w=n.onLeft,y=n.onUp,U=n.onDown,x=n.onChangeX,E=n.onChangeY,z=n.onChange,I=n.onToggleX,Z=n.onToggleY,D=n.onHover,O=n.onHoverEnd,k=n.onMove,W=n.ignoreCheck,q=n.isNormalizer,j=n.onGestureStart,C=n.onGestureEnd,Q=n.onWheel,ae=n.onEnable,$=n.onDisable,K=n.onClick,ce=n.scrollSpeed,Me=n.capture,me=n.allowClicks,Ue=n.lockAxis,Pe=n.onLockAxis;this.target=a=Mn(a)||Qi,this.vars=n,h&&(h=$t.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(bs).lineHeight)||22);var Oe,We,G,Ye,ve,Le,xe,V=this,Be=0,R=0,T=n.passive||!u&&n.passive!==!1,F=ur(a,vn),ie=ur(a,zt),ee=F(),re=ie(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&si[0]==="pointerdown",de=ma(a),ue=a.ownerDocument||Zi,we=[0,0,0],ke=[0,0,0],J=0,ot=function(){return J=pa()},De=function(Se,Ae){return(V.event=Se)&&h&&V_(Se.target,h)||Ae&&_e&&Se.pointerType!=="touch"||W&&W(Se,Ae)},qe=function(){V._vx.reset(),V._vy.reset(),We.pause(),f&&f(V)},Te=function(){var Se=V.deltaX=ju(we),Ae=V.deltaY=ju(ke),le=Math.abs(Se)>=i,Ge=Math.abs(Ae)>=i;z&&(le||Ge)&&z(V,Se,Ae,we,ke),le&&(A&&V.deltaX>0&&A(V),w&&V.deltaX<0&&w(V),x&&x(V),I&&V.deltaX<0!=Be<0&&I(V),Be=V.deltaX,we[0]=we[1]=we[2]=0),Ge&&(U&&V.deltaY>0&&U(V),y&&V.deltaY<0&&y(V),E&&E(V),Z&&V.deltaY<0!=R<0&&Z(V),R=V.deltaY,ke[0]=ke[1]=ke[2]=0),(Ye||G)&&(k&&k(V),G&&(p&&G===1&&p(V),M&&M(V),G=0),Ye=!1),Le&&!(Le=!1)&&Pe&&Pe(V),ve&&(Q(V),ve=!1),Oe=0},ge=function(Se,Ae,le){we[le]+=Se,ke[le]+=Ae,V._vx.update(Se),V._vy.update(Ae),c?Oe||(Oe=requestAnimationFrame(Te)):Te()},P=function(Se,Ae){Ue&&!xe&&(V.axis=xe=Math.abs(Se)>Math.abs(Ae)?"x":"y",Le=!0),xe!=="y"&&(we[2]+=Se,V._vx.update(Se,!0)),xe!=="x"&&(ke[2]+=Ae,V._vy.update(Ae,!0)),c?Oe||(Oe=requestAnimationFrame(Te)):Te()},oe=function(Se){if(!De(Se,1)){Se=Zs(Se,u);var Ae=Se.clientX,le=Se.clientY,Ge=Ae-V.x,ze=le-V.y,Ke=V.isDragging;V.x=Ae,V.y=le,(Ke||(Ge||ze)&&(Math.abs(V.startX-Ae)>=s||Math.abs(V.startY-le)>=s))&&(G||(G=Ke?2:1),Ke||(V.isDragging=!0),P(Ge,ze))}},be=V.onPress=function(ye){De(ye,1)||ye&&ye.button||(V.axis=xe=null,We.pause(),V.isPressed=!0,ye=Zs(ye),Be=R=0,V.startX=V.x=ye.clientX,V.startY=V.y=ye.clientY,V._vx.reset(),V._vy.reset(),hn(q?a:ue,si[1],oe,T,!0),V.deltaX=V.deltaY=0,v&&v(V))},te=V.onRelease=function(ye){if(!De(ye,1)){un(q?a:ue,si[1],oe,!0);var Se=!isNaN(V.y-V.startY),Ae=V.isDragging,le=Ae&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ge=Zs(ye);!le&&Se&&(V._vx.reset(),V._vy.reset(),u&&me&&$t.delayedCall(.08,function(){if(pa()-J>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(ue.createEvent){var ze=ue.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Fn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(ze)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,f&&Ae&&!q&&We.restart(!0),G&&Te(),m&&Ae&&m(V),S&&S(V,le)}},ne=function(Se){return Se.touches&&Se.touches.length>1&&(V.isGesturing=!0)&&j(Se,V.isDragging)},L=function(){return(V.isGesturing=!1)||C(V)},se=function(Se){if(!De(Se)){var Ae=F(),le=ie();ge((Ae-ee)*ce,(le-re)*ce,1),ee=Ae,re=le,f&&We.restart(!0)}},he=function(Se){if(!De(Se)){Se=Zs(Se,u),Q&&(ve=!0);var Ae=(Se.deltaMode===1?l:Se.deltaMode===2?Fn.innerHeight:1)*g;ge(Se.deltaX*Ae,Se.deltaY*Ae,0),f&&!q&&We.restart(!0)}},Fe=function(Se){if(!De(Se)){var Ae=Se.clientX,le=Se.clientY,Ge=Ae-V.x,ze=le-V.y;V.x=Ae,V.y=le,Ye=!0,f&&We.restart(!0),(Ge||ze)&&P(Ge,ze)}},Ie=function(Se){V.event=Se,D(V)},je=function(Se){V.event=Se,O(V)},Qe=function(Se){return De(Se)||Zs(Se,u)&&K(V)};We=V._dc=$t.delayedCall(d||.25,qe).pause(),V.deltaX=V.deltaY=0,V._vx=Rc(0,50,!0),V._vy=Rc(0,50,!0),V.scrollX=F,V.scrollY=ie,V.isDragging=V.isGesturing=V.isPressed=!1,ep(this),V.enable=function(ye){return V.isEnabled||(hn(de?ue:a,"scroll",wc),o.indexOf("scroll")>=0&&hn(de?ue:a,"scroll",se,T,Me),o.indexOf("wheel")>=0&&hn(a,"wheel",he,T,Me),(o.indexOf("touch")>=0&&Qd||o.indexOf("pointer")>=0)&&(hn(a,si[0],be,T,Me),hn(ue,si[2],te),hn(ue,si[3],te),me&&hn(a,"click",ot,!0,!0),K&&hn(a,"click",Qe),j&&hn(ue,"gesturestart",ne),C&&hn(ue,"gestureend",L),D&&hn(a,yr+"enter",Ie),O&&hn(a,yr+"leave",je),k&&hn(a,yr+"move",Fe)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Ye=G=!1,V._vx.reset(),V._vy.reset(),ee=F(),re=ie(),ye&&ye.type&&be(ye),ae&&ae(V)),V},V.disable=function(){V.isEnabled&&(xs.filter(function(ye){return ye!==V&&ma(ye.target)}).length||un(de?ue:a,"scroll",wc),V.isPressed&&(V._vx.reset(),V._vy.reset(),un(q?a:ue,si[1],oe,!0)),un(de?ue:a,"scroll",se,Me),un(a,"wheel",he,Me),un(a,si[0],be,Me),un(ue,si[2],te),un(ue,si[3],te),un(a,"click",ot,!0),un(a,"click",Qe),un(ue,"gesturestart",ne),un(ue,"gestureend",L),un(a,yr+"enter",Ie),un(a,yr+"leave",je),un(a,yr+"move",Fe),V.isEnabled=V.isPressed=V.isDragging=!1,$&&$(V))},V.kill=V.revert=function(){V.disable();var ye=xs.indexOf(V);ye>=0&&xs.splice(ye,1),Pi===V&&(Pi=0)},xs.push(V),q&&ma(a)&&(Pi=V),V.enable(_)},G_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Pt.version="3.15.0";Pt.create=function(r){return new Pt(r)};Pt.register=rp;Pt.getAll=function(){return xs.slice()};Pt.getById=function(r){return xs.filter(function(e){return e.vars.id===r})[0]};tp()&&$t.registerPlugin(Pt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ps,it,ft,Nn,ct,hu,Zo,Ia,_a,sa,$a,en,ul,Cc,mn,Ku,Zu,ms,sp,Cl,ap,pn,Pc,op,lp,Yi,Lc,fu,ws,du,ga,Dc,Pl,ja=1,tn=Date.now,Ll=tn(),ti=0,aa=0,Qu=function(e,t,n){var i=Un(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ju=function(e,t){return t&&(!Un(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},W_=function r(){return aa&&requestAnimationFrame(r)},eh=function(){return ul=1},th=function(){return ul=0},fi=function(e){return e},oa=function(e){return Math.round(e*1e5)/1e5||0},cp=function(){return typeof window<"u"},up=function(){return Ee||cp()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},zr=function(e){return!!~hu.indexOf(e)},hp=function(e){return(e==="Height"?du:it["inner"+e])||Nn["client"+e]||ct["client"+e]},fp=function(e){return ir(e,"getBoundingClientRect")||(zr(e)?function(){return Go.width=it.innerWidth,Go.height=du,Go}:function(){return Ri(e)})},X_=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ir(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?hp(s):e["client"+s])||0}},Y_=function(e,t){return!t||~vi.indexOf(e)?fp(e):function(){return Go}},_i=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ir(e,n))?o()-fp(e)()[s]:zr(e)?(Nn[n]||ct[n])-hp(i):e[n]-e["offset"+i])},Ka=function(e,t){for(var n=0;n<ms.length;n+=3)(!t||~t.indexOf(ms[n+1]))&&e(ms[n],ms[n+1],ms[n+2])},Un=function(e){return typeof e=="string"},sn=function(e){return typeof e=="function"},la=function(e){return typeof e=="number"},Er=function(e){return typeof e=="object"},Qs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Yr=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},qr=Math.abs,dp="left",pp="top",pu="right",mu="bottom",Ur="width",Ir="height",va="Right",xa="Left",Ma="Top",Sa="Bottom",It="padding",$n="margin",Fs="Width",_u="Height",Bt="px",jn=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},q_=function(e){var t=jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},nh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ri=function(e,t){var n=t&&jn(e)[Cc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Qo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},mp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},$_=function(e){return function(t){return Ee.utils.snap(mp(e),t)}},gu=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},j_=function(e){return function(t,n){return gu(mp(e))(t,n.direction)}},Za=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Wt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Vt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ih={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ja={toggleActions:"play",anticipatePin:0},Jo={top:0,left:0,center:.5,bottom:1,right:1},Fo=function(e,t){if(Un(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jo?Jo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},eo=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=ft.createElement("div"),_=zr(n)||ir(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?ct:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===zt?pu:mu)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Bo(g,0,i,M),g},Bo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Fs]=1,s["border"+a+Fs]=0,s[n.p]=t+"px",Ee.set(e,s)},tt=[],Uc={},Na,rh=function(){return tn()-ti>34&&(Na||(Na=requestAnimationFrame(Ui)))},$r=function(){(!pn||!pn.isPressed||pn.startX>ct.clientWidth)&&(st.cache++,pn?Na||(Na=requestAnimationFrame(Ui)):Ui(),ti||Gr("scrollStart"),ti=tn())},Dl=function(){lp=it.innerWidth,op=it.innerHeight},ca=function(e){st.cache++,(e===!0||!en&&!ap&&!ft.fullscreenElement&&!ft.webkitFullscreenElement&&(!Pc||lp!==it.innerWidth||Math.abs(it.innerHeight-op)>it.innerHeight*.25))&&Zo.restart(!0)},kr={},K_=[],_p=function r(){return Vt(Je,"scrollEnd",r)||Rr(!0)},Gr=function(e){return kr[e]&&kr[e].map(function(t){return t()})||K_},Dn=[],gp=function(e){for(var t=0;t<Dn.length;t+=5)(!e||Dn[t+4]&&Dn[t+4].query===e)&&(Dn[t].style.cssText=Dn[t+1],Dn[t].getBBox&&Dn[t].setAttribute("transform",Dn[t+2]||""),Dn[t+3].uncache=1)},vp=function(){return st.forEach(function(e){return sn(e)&&++e.cacheID&&(e.rec=e())})},vu=function(e,t){var n;for(mn=0;mn<tt.length;mn++)n=tt[mn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ga=!0,t&&gp(t),t||Gr("revert")},xp=function(e,t){st.cache++,(t||!_n)&&st.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),Un(e)&&(it.history.scrollRestoration=fu=e)},_n,Nr=0,sh,Z_=function(){if(sh!==Nr){var e=sh=Nr;requestAnimationFrame(function(){return e===Nr&&Rr(!0)})}},Mp=function(){ct.appendChild(ws),du=!pn&&ws.offsetHeight||it.innerHeight,ct.removeChild(ws)},ah=function(e){return Ia(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rr=function(e,t){if(Nn=ft.documentElement,ct=ft.body,hu=[it,ft,Nn,ct],ti&&!e&&!ga){Wt(Je,"scrollEnd",_p);return}Mp(),_n=Je.isRefreshing=!0,ga||vp();var n=Gr("refreshInit");sp&&Je.sort(),t||vu(),st.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),ga=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Dc=1,ah(!0),tt.forEach(function(i){var s=_i(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ah(!1),Dc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),xp(fu,1),Zo.pause(),Nr++,_n=2,Ui(2),tt.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),_n=Je.isRefreshing=!1,Gr("refresh")},Ic=0,zo=1,ya,Ui=function(e){if(e===2||!_n&&!ga){Je.isUpdating=!0,ya&&ya.update(0);var t=tt.length,n=tn(),i=n-Ll>=50,s=t&&tt[0].scroll();if(zo=Ic>s?-1:1,_n||(Ic=s),i&&(ti&&!ul&&n-ti>200&&(ti=0,Gr("scrollEnd")),sa=Ll,Ll=n),zo<0){for(mn=t;mn-- >0;)tt[mn]&&tt[mn].update(0,i);zo=1}else for(mn=0;mn<t;mn++)tt[mn]&&tt[mn].update(0,i);Je.isUpdating=!1}Na=0},Nc=[dp,pp,mu,pu,$n+Sa,$n+va,$n+Ma,$n+xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ko=Nc.concat([Ur,Ir,"boxSizing","max"+Fs,"max"+_u,"position",$n,It,It+Ma,It+va,It+Sa,It+xa]),Q_=function(e,t,n){Rs(n);var i=e._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ul=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Nc.length,o=t.style,a=e.style,l;s--;)l=Nc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[mu]=a[pu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ur]=Qo(e,vn)+Bt,o[Ir]=Qo(e,zt)+Bt,o[It]=a[$n]=a[pp]=a[dp]="0",Rs(i),a[Ur]=a["max"+Fs]=n[Ur],a[Ir]=a["max"+_u]=n[Ir],a[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},J_=/([A-Z])/g,Rs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(J_,"-$1").toLowerCase())}},to=function(e){for(var t=ko.length,n=e.style,i=[],s=0;s<t;s++)i.push(ko[s],n[ko[s]]);return i.t=e,i},eg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Go={left:0,top:0},oh=function(e,t,n,i,s,o,a,l,c,u,f,d,h,g){sn(e)&&(e=e(l)),Un(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Fo("0"+e.substr(3),n):0));var _=h?h.time():0,p,m,M;if(h&&h.seek(0),isNaN(e)||(e=+e),la(e))h&&(e=Ee.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&Bo(a,n,i,!0);else{sn(t)&&(t=t(l));var v=(e||"0").split(" "),S,A,w,y;M=Mn(t,l)||ct,S=Ri(M)||{},(!S||!S.left&&!S.top)&&jn(M).display==="none"&&(y=M.style.display,M.style.display="block",S=Ri(M),y?M.style.display=y:M.style.removeProperty("display")),A=Fo(v[0],S[i.d]),w=Fo(v[1]||"0",n),e=S[i.p]-c[i.p]-u+A+s-w,a&&Bo(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,x=o._isStart;p="scroll"+i.d2,Bo(o,U,i,x&&U>20||!x&&(f?Math.max(ct[p],Nn[p]):o.parentNode[p])<=U+1),f&&(c=Ri(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Bt))}return h&&M&&(p=Ri(M),h.seek(d),m=Ri(M),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},tg=/(webkit|moz|length|cssText|inset)/i,lh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ct){e._stOrig=s.cssText,a=jn(e);for(o in a)!+o&&!tg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Sp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},no=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},ch=function(e,t){var n=ur(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||n();var _=Sp(n,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Ui()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Wt(e,"wheel",n.wheelHandler),Je.isTouch&&Wt(e,"touchmove",n.wheelHandler),s},Je=function(){function r(t,n){ps||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!aa){this.update=this.refresh=this.kill=fi;return}n=nh(Un(n)||la(n)||n.nodeType?{trigger:n}:n,Ja);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,A=s.pinReparent,w=s.pinSpacer,y=s.containerAnimation,U=s.fastScrollEnd,x=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vn:zt,z=!f&&f!==0,I=Mn(n.scroller||it),Z=Ee.core.getCache(I),D=zr(I),O=("pinType"in n?n.pinType:ir(I,"pinType")||D&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=z&&n.toggleActions.split(" "),q="markers"in n?n.markers:Ja.markers,j=D?0:parseFloat(jn(I)["border"+E.p2+Fs])||0,C=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ae=X_(I,D,E),$=Y_(I,D),K=0,ce=0,Me=0,me=ur(I,E),Ue,Pe,Oe,We,G,Ye,ve,Le,xe,V,Be,R,T,F,ie,ee,re,_e,de,ue,we,ke,J,ot,De,qe,Te,ge,P,oe,be,te,ne,L,se,he,Fe,Ie,je;if(C._startClamp=C._endClamp=!1,C._dir=E,p*=45,C.scroller=I,C.scroll=y?y.time.bind(y):me,We=me(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(sp=1,n.refreshPriority===-9999&&(ya=C)),Z.tweenScroll=Z.tweenScroll||{top:ch(I,zt),left:ch(I,vn)},C.tweenTo=Ue=Z.tweenScroll[E.p],C.scrubDuration=function(le){ne=la(le)&&le,ne?te?te.duration(le):te=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return m&&m(C)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(f),oe=0,l||(l=i.vars.id)),S&&((!Er(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ct.style&&Ee.set(D?[ct,Nn]:I,{scrollBehavior:"auto"}),st.forEach(function(le){return sn(le)&&le.target===(D?ft.scrollingElement||Nn:I)&&(le.smooth=!1)}),Oe=sn(S.snapTo)?S.snapTo:S.snapTo==="labels"?$_(i):S.snapTo==="labelsDirectional"?j_(i):S.directional!==!1?function(le,Ge){return gu(S.snapTo)(le,tn()-ce<500?0:Ge.direction)}:Ee.utils.snap(S.snapTo),L=S.duration||{min:.1,max:2},L=Er(L)?_a(L.min,L.max):_a(L,L),se=Ee.delayedCall(S.delay||ne/2||.1,function(){var le=me(),Ge=tn()-ce<500,ze=Ue.tween;if((Ge||Math.abs(C.getVelocity())<10)&&!ze&&!ul&&K!==le){var Ke=(le-Ye)/F,Et=i&&!z?i.totalProgress():Ke,nt=Ge?0:(Et-be)/(tn()-sa)*1e3||0,gt=Ee.utils.clamp(-Ke,1-Ke,qr(nt/2)*nt/.185),Ot=Ke+(S.inertia===!1?0:gt),Mt,vt,ut=S,Cn=ut.onStart,b=ut.onInterrupt,N=ut.onComplete;if(Mt=Oe(Ot,C),la(Mt)||(Mt=Ot),vt=Math.max(0,Math.round(Ye+Mt*F)),le<=ve&&le>=Ye&&vt!==le){if(ze&&!ze._initted&&ze.data<=qr(vt-le))return;S.inertia===!1&&(gt=Mt-Ke),Ue(vt,{duration:L(qr(Math.max(qr(Ot-Et),qr(Mt-Et))*.185/nt/.05||0)),ease:S.ease||"power3",data:qr(vt-le),onInterrupt:function(){return se.restart(!0)&&b&&Yr(C,b)},onComplete:function(){C.update(),K=me(),i&&!z&&(te?te.resetTo("totalProgress",Mt,i._tTime/i._tDur):i.progress(Mt)),oe=be=i&&!z?i.totalProgress():C.progress,M&&M(C),N&&Yr(C,N)}},le,gt*F,vt-le-gt*F),Cn&&Yr(C,Cn,Ue.tween)}}else C.isActive&&K!==le&&se.restart(!0)}).pause()),l&&(Uc[l]=C),d=C.trigger=Mn(d||h!==!0&&h),je=d&&d._gsap&&d._gsap.stRevert,je&&(je=je(C)),h=h===!0?d:Mn(h),Un(a)&&(a={targets:d,className:a}),h&&(g===!1||g===$n||(g=!g&&h.parentNode&&h.parentNode.style&&jn(h.parentNode).display==="flex"?!1:It),C.pin=h,Pe=Ee.core.getCache(h),Pe.spacer?ie=Pe.pinState:(w&&(w=Mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Pe.spacerIsNative=!!w,w&&(Pe.spacerState=to(w))),Pe.spacer=_e=w||ft.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),Pe.pinState=ie=to(h)),n.force3D!==!1&&Ee.set(h,{force3D:!0}),C.spacer=_e=Pe.spacer,P=jn(h),ot=P[g+E.os2],ue=Ee.getProperty(h),we=Ee.quickSetter(h,E.a,Bt),Ul(h,_e,P),re=to(h)),q){R=Er(q)?nh(q,ih):ih,V=eo("scroller-start",l,I,E,R,0),Be=eo("scroller-end",l,I,E,R,0,V),de=V["offset"+E.op.d2];var Qe=Mn(ir(I,"content")||I);Le=this.markerStart=eo("start",l,Qe,E,R,de,0,y),xe=this.markerEnd=eo("end",l,Qe,E,R,de,0,y),y&&(Ie=Ee.quickSetter([Le,xe],E.a,Bt)),!O&&!(vi.length&&ir(I,"fixedMarkers")===!0)&&(q_(D?ct:I),Ee.set([V,Be],{force3D:!0}),qe=Ee.quickSetter(V,E.a,Bt),ge=Ee.quickSetter(Be,E.a,Bt))}if(y){var ye=y.vars.onUpdate,Se=y.vars.onUpdateParams;y.eventCallback("onUpdate",function(){C.update(0,0,1),ye&&ye.apply(y,Se||[])})}if(C.previous=function(){return tt[tt.indexOf(C)-1]},C.next=function(){return tt[tt.indexOf(C)+1]},C.revert=function(le,Ge){if(!Ge)return C.kill(!0);var ze=le!==!1||!C.enabled,Ke=en;ze!==C.isReverted&&(ze&&(he=Math.max(me(),C.scroll.rec||0),Me=C.progress,Fe=i&&i.progress()),Le&&[Le,xe,V,Be].forEach(function(Et){return Et.style.display=ze?"none":"block"}),ze&&(en=C,C.update(ze)),h&&(!A||!C.isActive)&&(ze?Q_(h,_e,ie):Ul(h,_e,jn(h),De)),ze||C.update(ze),en=Ke,C.isReverted=ze)},C.refresh=function(le,Ge,ze,Ke){if(!((en||!C.enabled)&&!Ge)){if(h&&le&&ti){Wt(r,"scrollEnd",_p);return}!_n&&Q&&Q(C),en=C,Ue.tween&&!ze&&(Ue.tween.kill(),Ue.tween=0),te&&te.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function($e){return $e.vars.immediateRender&&$e.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Et=ae(),nt=$(),gt=y?y.duration():_i(I,E),Ot=F<=.01||!F,Mt=0,vt=Ke||0,ut=Er(ze)?ze.end:n.end,Cn=n.endTrigger||d,b=Er(ze)?ze.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),N=C.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,C),Y=d&&Math.max(0,tt.indexOf(C))||0,X=Y,H,fe,Re,He,Ce,Ne,Ve,Ze,St,Ft,ht,cn,pt;for(q&&Er(ze)&&(cn=Ee.getProperty(V,E.p),pt=Ee.getProperty(Be,E.p));X-- >0;)Ne=tt[X],Ne.end||Ne.refresh(0,1)||(en=C),Ve=Ne.pin,Ve&&(Ve===d||Ve===h||Ve===N)&&!Ne.isReverted&&(Ft||(Ft=[]),Ft.unshift(Ne),Ne.revert(!0,!0)),Ne!==tt[X]&&(Y--,X--);for(sn(b)&&(b=b(C)),b=Qu(b,"start",C),Ye=oh(b,d,Et,E,me(),Le,V,C,nt,j,O,gt,y,C._startClamp&&"_startClamp")||(h?-.001:0),sn(ut)&&(ut=ut(C)),Un(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Un(b)?b.split(" ")[0]:"")+ut:(Mt=Fo(ut.substr(2),Et),ut=Un(b)?b:(y?Ee.utils.mapRange(0,y.duration(),y.scrollTrigger.start,y.scrollTrigger.end,Ye):Ye)+Mt,Cn=d)),ut=Qu(ut,"end",C),ve=Math.max(Ye,oh(ut||(Cn?"100% 0":gt),Cn,Et,E,me()+Mt,xe,Be,C,nt,j,O,gt,y,C._endClamp&&"_endClamp"))||-.001,Mt=0,X=Y;X--;)Ne=tt[X]||{},Ve=Ne.pin,Ve&&Ne.start-Ne._pinPush<=Ye&&!y&&Ne.end>0&&(H=Ne.end-(C._startClamp?Math.max(0,Ne.start):Ne.start),(Ve===d&&Ne.start-Ne._pinPush<Ye||Ve===N)&&isNaN(b)&&(Mt+=H*(1-Ne.progress)),Ve===h&&(vt+=H));if(Ye+=Mt,ve+=Mt,C._startClamp&&(C._startClamp+=Mt),C._endClamp&&!_n&&(C._endClamp=ve||-.001,ve=Math.min(ve,_i(I,E))),F=ve-Ye||(Ye-=.01)&&.001,Ot&&(Me=Ee.utils.clamp(0,1,Ee.utils.normalize(Ye,ve,he))),C._pinPush=vt,Le&&Mt&&(H={},H[E.a]="+="+Mt,N&&(H[E.p]="-="+me()),Ee.set([Le,xe],H)),h&&!(Dc&&C.end>=_i(I,E)))H=jn(h),He=E===zt,Re=me(),ke=parseFloat(ue(E.a))+vt,!gt&&ve>1&&(ht=(D?ft.scrollingElement||Nn:I).style,ht={style:ht,value:ht["overflow"+E.a.toUpperCase()]},D&&jn(ct)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+E.a.toUpperCase()]="scroll")),Ul(h,_e,H),re=to(h),fe=Ri(h,!0),Ze=O&&ur(I,He?vn:zt)(),g?(De=[g+E.os2,F+vt+Bt],De.t=_e,X=g===It?Qo(h,E)+F+vt:0,X&&(De.push(E.d,X+Bt),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=X+Bt)),Rs(De),N&&tt.forEach(function($e){$e.pin===N&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),O&&me(he)):(X=Qo(h,E),X&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=X+Bt)),O&&(Ce={top:fe.top+(He?Re-Ye:Ze)+Bt,left:fe.left+(He?Ze:Re-Ye)+Bt,boxSizing:"border-box",position:"fixed"},Ce[Ur]=Ce["max"+Fs]=Math.ceil(fe.width)+Bt,Ce[Ir]=Ce["max"+_u]=Math.ceil(fe.height)+Bt,Ce[$n]=Ce[$n+Ma]=Ce[$n+va]=Ce[$n+Sa]=Ce[$n+xa]="0",Ce[It]=H[It],Ce[It+Ma]=H[It+Ma],Ce[It+va]=H[It+va],Ce[It+Sa]=H[It+Sa],Ce[It+xa]=H[It+xa],ee=eg(ie,Ce,A),_n&&me(0)),i?(St=i._initted,Cl(1),i.render(i.duration(),!0,!0),J=ue(E.a)-ke+F+vt,Te=Math.abs(F-J)>1,O&&Te&&ee.splice(ee.length-2,2),i.render(0,!0,!0),St||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cl(0)):J=F,ht&&(ht.value?ht.style["overflow"+E.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+E.a));else if(d&&me()&&!y)for(fe=d.parentNode;fe&&fe!==ct;)fe._pinOffset&&(Ye-=fe._pinOffset,ve-=fe._pinOffset),fe=fe.parentNode;Ft&&Ft.forEach(function($e){return $e.revert(!1,!0)}),C.start=Ye,C.end=ve,We=G=_n?he:me(),!y&&!_n&&(We<he&&me(he),C.scroll.rec=0),C.revert(!1,!0),ce=tn(),se&&(K=-1,se.restart(!0)),en=0,i&&z&&(i._initted||Fe)&&i.progress()!==Fe&&i.progress(Fe||0,!0).render(i.time(),!0,!0),(Ot||Me!==C.progress||y||_||i&&!i._initted)&&(i&&!z&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(y&&Ye<-.001&&!Me?Ee.utils.normalize(Ye,ve,0):Me,!0),C.progress=Ot||(We-Ye)/F===Me?0:Me),h&&g&&(_e._pinOffset=Math.round(C.progress*J)),te&&te.invalidate(),isNaN(cn)||(cn-=Ee.getProperty(V,E.p),pt-=Ee.getProperty(Be,E.p),no(V,E,cn),no(Le,E,cn-(Ke||0)),no(Be,E,pt),no(xe,E,pt-(Ke||0))),Ot&&!_n&&C.update(),u&&!_n&&!T&&(T=!0,u(C),T=!1)}},C.getVelocity=function(){return(me()-G)/(tn()-sa)*1e3||0},C.endAnimation=function(){Qs(C.callbackAnimation),i&&(te?te.progress(1):i.paused()?z||Qs(i,C.direction<0,1):Qs(i,i.reversed()))},C.labelToScroll=function(le){return i&&i.labels&&(Ye||C.refresh()||Ye)+i.labels[le]/i.duration()*F||0},C.getTrailing=function(le){var Ge=tt.indexOf(C),ze=C.direction>0?tt.slice(0,Ge).reverse():tt.slice(Ge+1);return(Un(le)?ze.filter(function(Ke){return Ke.vars.preventOverlaps===le}):ze).filter(function(Ke){return C.direction>0?Ke.end<=Ye:Ke.start>=ve})},C.update=function(le,Ge,ze){if(!(y&&!ze&&!le)){var Ke=_n===!0?he:C.scroll(),Et=le?0:(Ke-Ye)/F,nt=Et<0?0:Et>1?1:Et||0,gt=C.progress,Ot,Mt,vt,ut,Cn,b,N,Y;if(Ge&&(G=We,We=y?me():Ke,S&&(be=oe,oe=i&&!z?i.totalProgress():nt)),p&&h&&!en&&!ja&&ti&&(!nt&&Ye<Ke+(Ke-G)/(tn()-sa)*p?nt=1e-4:nt===1&&ve>Ke+(Ke-G)/(tn()-sa)*p&&(nt=.9999)),nt!==gt&&C.enabled){if(Ot=C.isActive=!!nt&&nt<1,Mt=!!gt&&gt<1,b=Ot!==Mt,Cn=b||!!nt!=!!gt,C.direction=nt>gt?1:-1,C.progress=nt,Cn&&!en&&(vt=nt&&!gt?0:nt===1?1:gt===1?2:3,z&&(ut=!b&&W[vt+1]!=="none"&&W[vt+1]||W[vt],Y=i&&(ut==="complete"||ut==="reset"||ut in i))),x&&(b||Y)&&(Y||f||!i)&&(sn(x)?x(C):C.getTrailing(x).forEach(function(Re){return Re.endAnimation()})),z||(te&&!en&&!ja?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",nt,i._tTime/i._tDur):(te.vars.totalProgress=nt,te.invalidate().restart())):i&&i.totalProgress(nt,!!(en&&(ce||le)))),h){if(le&&g&&(_e.style[g+E.os2]=ot),!O)we(oa(ke+J*nt));else if(Cn){if(N=!le&&nt>gt&&ve+1>Ke&&Ke+1>=_i(I,E),A)if(!le&&(Ot||N)){var X=Ri(h,!0),H=Ke-Ye;lh(h,ct,X.top+(E===zt?H:0)+Bt,X.left+(E===zt?0:H)+Bt)}else lh(h,_e);Rs(Ot||N?ee:re),Te&&nt<1&&Ot||we(ke+(nt===1&&!N?J:0))}}S&&!Ue.tween&&!en&&!ja&&se.restart(!0),a&&(b||v&&nt&&(nt<1||!Pl))&&Ia(a.targets).forEach(function(Re){return Re.classList[Ot||v?"add":"remove"](a.className)}),o&&!z&&!le&&o(C),Cn&&!en?(z&&(Y&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(C)),(b||!Pl)&&(c&&b&&Yr(C,c),k[vt]&&Yr(C,k[vt]),v&&(nt===1?C.kill(!1,1):k[vt]=0),b||(vt=nt===1?1:3,k[vt]&&Yr(C,k[vt]))),U&&!Ot&&Math.abs(C.getVelocity())>(la(U)?U:2500)&&(Qs(C.callbackAnimation),te?te.progress(1):Qs(i,ut==="reverse"?1:!nt,1))):z&&o&&!en&&o(C)}if(ge){var fe=y?Ke/y.duration()*(y._caScrollDist||0):Ke;qe(fe+(V._isFlipped?1:0)),ge(fe)}Ie&&Ie(-Ke/y.duration()*(y._caScrollDist||0))}},C.enable=function(le,Ge){C.enabled||(C.enabled=!0,Wt(I,"resize",ca),D||Wt(I,"scroll",$r),Q&&Wt(r,"refreshInit",Q),le!==!1&&(C.progress=Me=0,We=G=K=me()),Ge!==!1&&C.refresh())},C.getTween=function(le){return le&&Ue?Ue.tween:te},C.setPositions=function(le,Ge,ze,Ke){if(y){var Et=y.scrollTrigger,nt=y.duration(),gt=Et.end-Et.start;le=Et.start+gt*le/nt,Ge=Et.start+gt*Ge/nt}C.refresh(!1,!1,{start:Ju(le,ze&&!!C._startClamp),end:Ju(Ge,ze&&!!C._endClamp)},Ke),C.update()},C.adjustPinSpacing=function(le){if(De&&le){var Ge=De.indexOf(E.d)+1;De[Ge]=parseFloat(De[Ge])+le+Bt,De[1]=parseFloat(De[1])+le+Bt,Rs(De)}},C.disable=function(le,Ge){if(le!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ge||te&&te.pause(),he=0,Pe&&(Pe.uncache=1),Q&&Vt(r,"refreshInit",Q),se&&(se.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!D)){for(var ze=tt.length;ze--;)if(tt[ze].scroller===I&&tt[ze]!==C)return;Vt(I,"resize",ca),D||Vt(I,"scroll",$r)}},C.kill=function(le,Ge){C.disable(le,Ge),te&&!Ge&&te.kill(),l&&delete Uc[l];var ze=tt.indexOf(C);ze>=0&&tt.splice(ze,1),ze===mn&&zo>0&&mn--,ze=0,tt.forEach(function(Ke){return Ke.scroller===C.scroller&&(ze=1)}),ze||_n||(C.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Ge||i.kill()),Le&&[Le,xe,V,Be].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),ya===C&&(ya=0),h&&(Pe&&(Pe.uncache=1),ze=0,tt.forEach(function(Ke){return Ke.pin===h&&ze++}),ze||(Pe.spacer=0)),n.onKill&&n.onKill(C)},tt.push(C),C.enable(!1,!1),je&&je(C),i&&i.add&&!F){var Ae=C.update;C.update=function(){C.update=Ae,st.cache++,Ye||ve||C.refresh()},Ee.delayedCall(.01,C.update),F=.01,Ye=ve=0}else C.refresh();h&&Z_()},r.register=function(n){return ps||(Ee=n||up(),cp()&&window.document&&r.enable(),ps=aa),ps},r.defaults=function(n){if(n)for(var i in n)Ja[i]=n[i];return Ja},r.disable=function(n,i){aa=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Vt(it,"wheel",$r),Vt(ft,"scroll",$r),clearInterval($a),Vt(ft,"touchcancel",fi),Vt(ct,"touchstart",fi),Za(Vt,ft,"pointerdown,touchstart,mousedown",eh),Za(Vt,ft,"pointerup,touchend,mouseup",th),Zo.kill(),Ka(Vt);for(var s=0;s<st.length;s+=3)Qa(Vt,st[s],st[s+1]),Qa(Vt,st[s],st[s+2])},r.enable=function(){if(it=window,ft=document,Nn=ft.documentElement,ct=ft.body,Ee){if(Ia=Ee.utils.toArray,_a=Ee.utils.clamp,Lc=Ee.core.context||fi,Cl=Ee.core.suppressOverwrites||fi,fu=it.history.scrollRestoration||"auto",Ic=it.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),ct){aa=1,ws=document.createElement("div"),ws.style.height="100vh",ws.style.position="absolute",Mp(),W_(),Pt.register(Ee),r.isTouch=Pt.isTouch,Yi=Pt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pc=Pt.isTouch===1,Wt(it,"wheel",$r),hu=[it,ft,Nn,ct],Ee.matchMedia?(r.matchMedia=function(u){var f=Ee.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Ee.addEventListener("matchMediaInit",function(){vp(),vu()}),Ee.addEventListener("matchMediaRevert",function(){return gp()}),Ee.addEventListener("matchMedia",function(){Rr(0,1),Gr("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Dl(),Dl})):console.warn("Requires GSAP 3.11.0 or later"),Dl(),Wt(ft,"scroll",$r);var n=ct.hasAttribute("style"),i=ct.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ri(ct),zt.m=Math.round(a.top+zt.sc())||0,vn.m=Math.round(a.left+vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ct.setAttribute("style",""),ct.removeAttribute("style")),$a=setInterval(rh,250),Ee.delayedCall(.5,function(){return ja=0}),Wt(ft,"touchcancel",fi),Wt(ct,"touchstart",fi),Za(Wt,ft,"pointerdown,touchstart,mousedown",eh),Za(Wt,ft,"pointerup,touchend,mouseup",th),Cc=Ee.utils.checkPrefix("transform"),ko.push(Cc),ps=tn(),Zo=Ee.delayedCall(.2,Rr).pause(),ms=[ft,"visibilitychange",function(){var u=it.innerWidth,f=it.innerHeight;ft.hidden?(Ku=u,Zu=f):(Ku!==u||Zu!==f)&&ca()},ft,"DOMContentLoaded",Rr,it,"load",Rr,it,"resize",ca],Ka(Wt),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<st.length;l+=3)Qa(Vt,st[l],st[l+1]),Qa(Vt,st[l],st[l+2])}else if(ft){var c=function u(){r.enable(),ft.removeEventListener("DOMContentLoaded",u)};ft.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Pl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($a)||($a=i)&&setInterval(rh,i),"ignoreMobileResize"in n&&(Pc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ka(Vt)||Ka(Wt,n.autoRefreshEvents||"none"),ap=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),o=st.indexOf(s),a=zr(s);~o&&st.splice(o,a?6:2),i&&(a?vi.unshift(it,i,ct,i,Nn,i):vi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Un(n)?Mn(n):n).getBoundingClientRect(),a=o[s?Ur:Ir]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){Un(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?Ur:Ir],l=i==null?a/2:i in Jo?Jo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=kr.killAll||[];kr={},i.forEach(function(s){return s()})}},r}();Je.version="3.15.0";Je.saveStyles=function(r){return r?Ia(r).forEach(function(e){if(e&&e.style){var t=Dn.indexOf(e);t>=0&&Dn.splice(t,5),Dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Lc())}}):Dn};Je.revert=function(r,e){return vu(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?ca(!0):(ps||Je.register())&&Rr(!0)};Je.update=function(r){return++st.cache&&Ui(r===!0?2:0)};Je.clearScrollMemory=xp;Je.maxScroll=function(r,e){return _i(r,e?vn:zt)};Je.getScrollFunc=function(r,e){return ur(Mn(r),e?vn:zt)};Je.getById=function(r){return Uc[r]};Je.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!ti};Je.snapDirectional=gu;Je.addEventListener=function(r,e){var t=kr[r]||(kr[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=kr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Ee.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return sn(s)&&(s=s(),Wt(Je,"refresh",function(){return s=e.batchMax()})),Ia(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var uh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Il=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Pt.isTouch?" pinch-zoom":""):"none",e===Nn&&r(ct,t)},io={auto:1,scroll:1},ng=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(io[(l=jn(s)).overflowY]||io[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!zr(s)&&(io[(l=jn(s)).overflowY]||io[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},yp=function(e,t,n,i){return Pt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ng,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Wt(ft,Pt.eventTypes[0],fh,!1,!0)},onDisable:function(){return Vt(ft,Pt.eventTypes[0],fh,!0)}})},ig=/(input|label|select|textarea)/i,hh,fh=function(e){var t=ig.test(e.target.tagName);(t||hh)&&(e._gsapAllow=!0,hh=t)},rg=function(e){Er(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||Nn,u=Ee.core.globals().ScrollSmoother,f=u&&u.get(),d=Yi&&(e.content&&Mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=ur(c,zt),g=ur(c,vn),_=1,p=(Pt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,m=0,M=sn(i)?function(){return i(a)}:function(){return i||2.8},v,S,A=yp(c,e.type,!0,s),w=function(){return S=!1},y=fi,U=fi,x=function(){l=_i(c,zt),U=_a(Yi?1:0,l),n&&(y=_a(0,_i(c,vn))),v=Nr},E=function(){d._gsap.y=oa(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},z=function(){if(S){requestAnimationFrame(w);var q=oa(a.deltaY/2),j=U(h.v-q);if(d&&j!==h.v+h.offset){h.offset=j-h.v;var C=oa((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",h.cacheID=st.cache,Ui()}return!0}h.offset&&E(),S=!0},I,Z,D,O,k=function(){x(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(W){return Yi&&W.type==="touchmove"&&z()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){S=!1;var W=_;_=oa((it.visualViewport&&it.visualViewport.scale||1)/p),I.pause(),W!==_&&Il(c,_>1.01?!0:n?!1:"x"),Z=g(),D=h(),x(),v=Nr},e.onRelease=e.onGestureStart=function(W,q){if(h.offset&&E(),!q)O.restart(!0);else{st.cache++;var j=M(),C,Q;n&&(C=g(),Q=C+j*.05*-W.velocityX/.227,j*=uh(g,C,Q,_i(c,vn)),I.vars.scrollX=y(Q)),C=h(),Q=C+j*.05*-W.velocityY/.227,j*=uh(h,C,Q,_i(c,zt)),I.vars.scrollY=U(Q),I.invalidate().duration(j).play(.01),(Yi&&I.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:k,duration:j})}o&&o(W)},e.onWheel=function(){I._ts&&I.pause(),tn()-m>1e3&&(v=0,m=tn())},e.onChange=function(W,q,j,C,Q){if(Nr!==v&&x(),q&&n&&g(y(C[2]===q?Z+(W.startX-W.x):g()+q-C[1])),j){h.offset&&E();var ae=Q[2]===j,$=ae?D+W.startY-W.y:h()+j-Q[1],K=U($);ae&&$!==K&&(D+=K-$),h(K)}(j||q)&&Ui()},e.onEnable=function(){Il(c,n?!1:"x"),Je.addEventListener("refresh",k),Wt(it,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){Il(c,!0),Vt(it,"resize",k),Je.removeEventListener("refresh",k),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new Pt(e),a.iOS=Yi,Yi&&!h()&&h(1),Yi&&Ee.ticker.add(fi),O=a._dc,I=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Sp(h,h(),function(){return I.pause()})},onUpdate:Ui,onComplete:O.vars.onComplete}),a};Je.sort=function(r){if(sn(r))return tt.sort(r);var e=it.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Pt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return pn;if(r===!0&&pn)return pn.enable();if(r===!1){pn&&pn.kill(),pn=r;return}var e=r instanceof Pt?r:rg(r);return pn&&pn.target===e.target&&pn.kill(),zr(e.target)&&(pn=e),e};Je.core={_getVelocityProp:Rc,_inputObserver:yp,_scrollers:st,_proxies:vi,bridge:{ss:function(){ti||Gr("scrollStart"),ti=tn()},ref:function(){return en}}};up()&&Ee.registerPlugin(Je);/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,Ep,Ii,gi,rr,Tp,Cs,ro,bp=function(){return typeof window<"u"},Ap=function(){return an||bp()&&(an=window.gsap)&&an.registerPlugin&&an},wp=function(e){return typeof e=="string"},dh=function(e){return typeof e=="function"},Oa=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Ii||e===gi||e===rr?Math.max(gi[i],rr[i])-(Ii["inner"+n]||gi[s]||rr[s]):e[i]-e["offset"+n]},Fa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Ii&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=gi[n]!=null?gi:rr),function(){return e[n]}},sg=function(e,t,n,i){if(dh(e)&&(e=e(t,n,i)),typeof e!="object")return wp(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&dh(e[o])?e[o](t,n,i):e[o];return s},Rp=function(e,t){if(e=Tp(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Ii||t===rr,s=i?{top:gi.clientTop-(Ii.pageYOffset||gi.scrollTop||rr.scrollTop||0),left:gi.clientLeft-(Ii.pageXOffset||gi.scrollLeft||rr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Fa(t,"x")(),o.y+=Fa(t,"y")()),o},ph=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:wp(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Oa(t,n)-s:Math.min(Oa(t,n),Rp(e,t)[n]-s)},Oc=function(){an=Ap(),bp()&&an&&typeof document<"u"&&document.body&&(Ii=window,rr=document.body,gi=document.documentElement,Tp=an.utils.toArray,an.config({autoKillThreshold:7}),Cs=an.config(),Ep=1)},Ws={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){an=e,Oc()},init:function(e,t,n,i,s){Ep||Oc();var o=this,a=an.getProperty(e,"scrollSnapType");o.isWin=e===Ii,o.target=e,o.tween=n,t=sg(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Cs).autoKill,o.getX=Fa(e,"x"),o.getY=Fa(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),ro||(ro=an.core.globals().ScrollTrigger),an.getProperty(e,"scrollBehavior")==="smooth"&&an.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,ph(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,ph(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,f=t.snapInline,d,h,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,g=h-l,_=d-a,p=Cs.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<Oa(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&h<Oa(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?Ii.scrollTo(t.skipX?d:t.x,t.skipY?h:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=i.scrollTop,d=i.scrollLeft,f?i.style.scrollSnapType=f:i.style.removeProperty("scroll-snap-type"),i.scrollTop=h+1,i.scrollLeft=d+1,i.scrollTop=h,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,ro&&ro.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Ws.max=Oa;Ws.getOffset=Rp;Ws.buildGetter=Fa;Ws.config=function(r){Cs||Oc()||(Cs=an.config());for(var e in r)Cs[e]=r[e]};Ap()&&an.registerPlugin(Ws);const ag={name:"Guido Tomasella",kicker:"Data Governance · Data Quality · Data Engineering · AI",roles:["Data Manager","Tech Lead"],tagline:"I make data trustworthy, then build the agents that keep it that way."},og={manager:{label:"Manager",disciplines:["Data","Data Quality","Data Governance"]},techLead:{label:"Tech Lead",disciplines:["Data Engineering","AI"]}},lg={categories:{manager:"#22d3ff",techlead:"#3a86ff",ai:"#ff6b35"},nodes:[{label:"Data Governance",cat:"manager",hub:!0},{label:"Data Quality",cat:"manager",hub:!0},{label:"Data",cat:"manager"},{label:"DataHub",cat:"manager"},{label:"Lineage",cat:"manager"},{label:"Data Contracts",cat:"manager"},{label:"Data Engineering",cat:"techlead",hub:!0},{label:"Pipelines",cat:"techlead"},{label:"PySpark",cat:"techlead"},{label:"BigQuery",cat:"techlead"},{label:"Observability",cat:"techlead"},{label:"AI",cat:"ai",hub:!0},{label:"Agents",cat:"ai",hub:!0},{label:"MCP",cat:"ai"},{label:"RAG",cat:"ai"},{label:"LLMs",cat:"ai"},{label:"Knowledge Graph",cat:"ai"}]},cg=[{branch:"Data Governance",message:"Policies stop living in slide decks — agents read the catalog, flag drift, and write the documentation themselves."},{branch:"Data Quality",message:"Checks run ahead of the pipeline, not after the complaint — rules catch bad data before it ships."},{branch:"Data Engineering",message:"Pipelines that used to need a ticket and a week now get an agent that audits, drafts, and proposes the fix."},{branch:"AI",message:"Claude and LangChain aren't side projects — they're teammates wired into governance, roadmaps, and Jira itself."}],ug=[{company:"Scanntech",role:"Data Quality & Governance Manager (CDAO)",dates:"2024 — present",summary:"Built the data governance practice from zero and federated it across five LatAm countries, then put AI agents on top to keep it running itself."},{company:"Telecom Argentina",role:"Data Governance Team Leader & Tech Lead",dates:"2021 — 2024",summary:"Brought order to a multi-terabyte data estate with hundreds of pipelines and stood up the company's first real governance layer."},{company:"Telecom Argentina",role:"Team Leader — Headend",dates:"2019 — 2021",summary:"Turned a video datacenter's operations into a data-centric practice, setting the foundation for everything that came after."}],hg=[{title:"MCP Data Agents",description:"A small fleet of autonomous agents — Jira auditor, auto-documentation, roadmap generator — that work the data catalog so people don't have to.",tech:"MCP, Claude API, DataHub",link:"https://github.com/guido-tomasella"},{title:"LangGraph RAG System",description:"A hybrid retrieval engine with self-correcting search and reasoning loops, built to answer real questions about real data.",tech:"LangGraph, Qdrant, FastAPI",link:"https://github.com/guido-tomasella"},{title:"PySpark Data Quality Framework",description:"The shift from finding bad data after the fact to catching it before it ever reaches a dashboard.",tech:"PySpark, Python",link:"https://github.com/guido-tomasella"}],fg={headline:"Let's build.",email:"tomasellaguido@hotmail.com",links:[{label:"LinkedIn",url:"https://linkedin.com/in/guido-tomasella-06222885"},{label:"GitHub",url:"https://github.com/guido-tomasella"},{label:"CV",url:"cv.pdf"}]},Cp={identity:ag,hats:og,graph:lg,amplifier:cg,experience:ug,projects:hg,contact:fg};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="160",jr={ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dg=0,mh=1,pg=2,Pp=1,mg=2,bi=3,hr=0,An=1,Ci=2,Ni=0,Ps=1,Bs=2,_h=3,gh=4,_g=5,br=100,gg=101,vg=102,vh=103,xh=104,xg=200,Mg=201,Sg=202,yg=203,Fc=204,Bc=205,Eg=206,Tg=207,bg=208,Ag=209,wg=210,Rg=211,Cg=212,Pg=213,Lg=214,Dg=0,Ug=1,Ig=2,el=3,Ng=4,Og=5,Fg=6,Bg=7,Lp=0,zg=1,kg=2,sr=0,Dp=1,Up=2,Ip=3,Mu=4,Gg=5,Np=6,Op=300,zs=301,ks=302,zc=303,kc=304,hl=306,Gc=1e3,oi=1001,Hc=1002,gn=1003,Mh=1004,Nl=1005,Kn=1006,Hg=1007,Ba=1008,ar=1009,Vg=1010,Wg=1011,Su=1012,Fp=1013,Ji=1014,er=1015,Oi=1016,Bp=1017,zp=1018,Or=1020,Xg=1021,li=1023,Yg=1024,qg=1025,Fr=1026,Gs=1027,$g=1028,kp=1029,jg=1030,Gp=1031,Hp=1033,Ol=33776,Fl=33777,Bl=33778,zl=33779,Sh=35840,yh=35841,Eh=35842,Th=35843,Vp=36196,bh=37492,Ah=37496,wh=37808,Rh=37809,Ch=37810,Ph=37811,Lh=37812,Dh=37813,Uh=37814,Ih=37815,Nh=37816,Oh=37817,Fh=37818,Bh=37819,zh=37820,kh=37821,kl=36492,Gh=36494,Hh=36495,Kg=36283,Vh=36284,Wh=36285,Xh=36286,Wp=3e3,Br=3001,Zg=3200,Qg=3201,Jg=0,e0=1,Qn="",Xt="srgb",zi="srgb-linear",yu="display-p3",fl="display-p3-linear",tl="linear",xt="srgb",nl="rec709",il="p3",Zr=7680,Yh=519,t0=512,n0=513,i0=514,Xp=515,r0=516,s0=517,a0=518,o0=519,qh=35044,$h="300 es",Vc=1035,Li=2e3,rl=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Ea=Math.PI/180,za=180/Math.PI;function Xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function nn(r,e,t){return Math.max(e,Math.min(t,r))}function Eu(r,e){return(r%e+e)%e}function l0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function c0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ta(r,e,t){return(1-t)*r+t*e}function u0(r,e,t,n){return Ta(r,e,1-Math.exp(-t*n))}function h0(r,e=1){return e-Math.abs(Eu(r,e*2)-e)}function f0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function d0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function p0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function m0(r,e){return r+Math.random()*(e-r)}function _0(r){return r*(.5-Math.random())}function g0(r){r!==void 0&&(jh=r);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(r){return r*Ea}function x0(r){return r*za}function Wc(r){return(r&r-1)===0&&r!==0}function M0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function S0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),d=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*h,a*c);break;case"YXY":r.set(l*h,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yp={DEG2RAD:Ea,RAD2DEG:za,generateUUID:Xs,clamp:nn,euclideanModulo:Eu,mapLinear:l0,inverseLerp:c0,lerp:Ta,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:_0,seededRandom:g0,degToRad:v0,radToDeg:x0,isPowerOfTwo:Wc,ceilPowerOfTwo:M0,floorPowerOfTwo:sl,setQuaternionFromProperEuler:S0,normalize:fn,denormalize:_s};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],p=i[3],m=i[6],M=i[1],v=i[4],S=i[7],A=i[2],w=i[5],y=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*p+a*v+l*w,s[6]=o*m+a*S+l*y,s[1]=c*_+u*M+f*A,s[4]=c*p+u*v+f*w,s[7]=c*m+u*S+f*y,s[2]=d*_+h*M+g*A,s[5]=d*p+h*v+g*w,s[8]=d*m+h*S+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gl=new rt;function qp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function y0(){const r=al("canvas");return r.style.display="block",r}const Kh={};function ba(r){r in Kh||(Kh[r]=!0,console.warn(r))}const Zh=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qh=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),so={[zi]:{transfer:tl,primaries:nl,toReference:r=>r,fromReference:r=>r},[Xt]:{transfer:xt,primaries:nl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fl]:{transfer:tl,primaries:il,toReference:r=>r.applyMatrix3(Qh),fromReference:r=>r.applyMatrix3(Zh)},[yu]:{transfer:xt,primaries:il,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Qh),fromReference:r=>r.applyMatrix3(Zh).convertLinearToSRGB()}},E0=new Set([zi,fl]),dt={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!E0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=so[e].toReference,i=so[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return so[r].primaries},getTransfer:function(r){return r===Qn?tl:so[r].transfer}};function Ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qr;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=al("canvas")),Qr.width=e.width,Qr.height=e.height;const n=Qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ls(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Xs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vl(i[o].image)):s.push(Vl(i[o]))}else s=Vl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$p.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b0=0;class wn extends Wr{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=oi,i=oi,s=Kn,o=Ba,a=li,l=ar,c=wn.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Xs(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Br?Xt:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gc:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gc:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Br:Wp}set encoding(e){ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Br?Xt:Qn}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Op;wn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(h+1)/2,A=(m+1)/2,w=(u+d)/4,y=(f+_)/4,U=(g+p)/4;return v>S&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=y/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=U/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=y/s,i=U/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends Wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Br?Xt:Qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends A0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kp extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends wn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,m*M);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const S=a*M;if(l=l*p+d*S,c=c*p+h*S,u=u*p+g*S,f=f*p+_*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=i+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wl=new B,Jh=new Hr;class Ha{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),oo.subVectors(this.max,Js),Jr.subVectors(e.a,Js),es.subVectors(e.b,Js),ts.subVectors(e.c,Js),ki.subVectors(es,Jr),Gi.subVectors(ts,es),gr.subVectors(Jr,ts);let t=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-gr.z,gr.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,gr.z,0,-gr.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-gr.y,gr.x,0];return!Xl(t,Jr,es,ts,oo)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Jr,es,ts,oo))?!1:(lo.crossVectors(ki,Gi),t=[lo.x,lo.y,lo.z],Xl(t,Jr,es,ts,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new B,new B,new B,new B,new B,new B,new B,new B],ni=new B,ao=new Ha,Jr=new B,es=new B,ts=new B,ki=new B,Gi=new B,gr=new B,Js=new B,oo=new B,lo=new B,vr=new B;function Xl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vr.fromArray(r,s);const a=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const R0=new Ha,ea=new B,Yl=new B;class Va{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(Yl)),this.expandByPoint(ea.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new B,ql=new B,co=new B,Hi=new B,$l=new B,uo=new B,jl=new B;class dl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ql.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(ql);const s=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=Hi.dot(this.direction),l=-Hi.dot(co),c=Hi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ql).addScaledVector(co,d),h}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,s){$l.subVectors(t,e),uo.subVectors(n,e),jl.crossVectors($l,uo);let o=this.direction.dot(jl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(Hi,uo));if(l<0)return null;const c=a*this.direction.dot($l.cross(Hi));if(c<0||l+c>o)return null;const u=-a*Hi.dot(jl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),s=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,P0)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Vi.crossVectors(n,Pn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Vi.crossVectors(n,Pn)),Vi.normalize(),ho.crossVectors(Pn,Vi),i[0]=Vi.x,i[4]=ho.x,i[8]=Pn.x,i[1]=Vi.y,i[5]=ho.y,i[9]=Pn.y,i[2]=Vi.z,i[6]=ho.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],v=n[7],S=n[11],A=n[15],w=i[0],y=i[4],U=i[8],x=i[12],E=i[1],z=i[5],I=i[9],Z=i[13],D=i[2],O=i[6],k=i[10],W=i[14],q=i[3],j=i[7],C=i[11],Q=i[15];return s[0]=o*w+a*E+l*D+c*q,s[4]=o*y+a*z+l*O+c*j,s[8]=o*U+a*I+l*k+c*C,s[12]=o*x+a*Z+l*W+c*Q,s[1]=u*w+f*E+d*D+h*q,s[5]=u*y+f*z+d*O+h*j,s[9]=u*U+f*I+d*k+h*C,s[13]=u*x+f*Z+d*W+h*Q,s[2]=g*w+_*E+p*D+m*q,s[6]=g*y+_*z+p*O+m*j,s[10]=g*U+_*I+p*k+m*C,s[14]=g*x+_*Z+p*W+m*Q,s[3]=M*w+v*E+S*D+A*q,s[7]=M*y+v*z+S*O+A*j,s[11]=M*U+v*I+S*k+A*C,s[15]=M*x+v*Z+S*W+A*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*h-n*l*h)+_*(+t*l*h-t*c*d+s*o*d-i*o*h+i*c*u-s*l*u)+p*(+t*c*f-t*a*h-s*o*f+n*o*h+s*a*u-n*c*u)+m*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,v=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,S=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,A=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,w=t*M+n*v+i*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=M*y,e[1]=(_*d*s-f*p*s-_*i*h+n*p*h+f*i*m-n*d*m)*y,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*y,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*h-n*l*h)*y,e[4]=v*y,e[5]=(u*p*s-g*d*s+g*i*h-t*p*h-u*i*m+t*d*m)*y,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*y,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*h+t*l*h)*y,e[8]=S*y,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*m-t*f*m)*y,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*y,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*h-t*a*h)*y,e[12]=A*y,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*p+t*f*p)*y,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*y,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,p=o*f,m=a*f,M=l*c,v=l*u,S=l*f,A=n.x,w=n.y,y=n.z;return i[0]=(1-(_+m))*A,i[1]=(h+S)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(h-S)*w,i[5]=(1-(d+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+v)*y,i[9]=(p-M)*y,i[10]=(1-(d+_))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ii.copy(this);const c=1/s,u=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Li){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let h,g;if(a===Li)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rl)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Li){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(o-s),d=(t+e)*c,h=(n+i)*u;let g,_;if(a===Li)g=(o+s)*f,_=-2*f;else if(a===rl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new B,ii=new Lt,C0=new B(0,0,0),P0=new B(1,1,1),Vi=new B,ho=new B,Pn=new B,ef=new Lt,tf=new Hr;class pl{constructor(e=0,t=0,n=0,i=pl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pl.DEFAULT_ORDER="XYZ";class Zp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const nf=new B,is=new Hr,yi=new Lt,fo=new B,ta=new B,D0=new B,U0=new Hr,rf=new B(1,0,0),sf=new B(0,1,0),af=new B(0,0,1),I0={type:"added"},N0={type:"removed"};class ln extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new B,t=new pl,n=new Hr,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new rt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ta,fo,this.up):yi.lookAt(fo,ta,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),is.setFromRotationMatrix(yi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(I0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ln.DEFAULT_UP=new B(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new B,Ei=new B,Kl=new B,Ti=new B,rs=new B,ss=new B,of=new B,Zl=new B,Ql=new B,Jl=new B;let po=!1;class ai{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ri.subVectors(i,t),Ei.subVectors(n,t),Kl.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Ei),l=ri.dot(Kl),c=Ei.dot(Ei),u=Ei.dot(Kl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,n,i,s,o,a,l){return po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),po=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Ei.subVectors(e,t),ri.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ri.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),po=!0),ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ai.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;rs.subVectors(i,n),ss.subVectors(s,n),Zl.subVectors(e,n);const l=rs.dot(Zl),c=ss.dot(Zl);if(l<=0&&c<=0)return t.copy(n);Ql.subVectors(e,i);const u=rs.dot(Ql),f=ss.dot(Ql);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(rs,o);Jl.subVectors(e,s);const h=rs.dot(Jl),g=ss.dot(Jl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ss,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return of.subVectors(s,i),a=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(of,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function ec(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Eu(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ec(o,s,e+1/3),this.g=ec(o,s,e),this.b=ec(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=Hl(e.r),this.g=Hl(e.g),this.b=Hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return dt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(nn(Jt.r*255,0,255))*65536+Math.round(nn(Jt.g*255,0,255))*256+Math.round(nn(Jt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Xt){dt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(mo);const n=Ta(Wi.h,mo.h,t),i=Ta(Wi.s,mo.s,t),s=Ta(Wi.l,mo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new at;at.NAMES=Qp;let O0=0;class Ys extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Ps,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Bc,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==el&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tu extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new B,_o=new Xe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class Jp extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class em extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let F0=0;const Xn=new Lt,tc=new ln,as=new B,Ln=new Ha,na=new Ha,Ht=new B;class Vn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?em:Jp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ui(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Ln.min,na.min),Ln.expandByPoint(Ht),Ht.addVectors(Ln.max,na.max),Ln.expandByPoint(Ht)):(Ln.expandByPoint(na.min),Ln.expandByPoint(na.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(e,c),Ht.add(as)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new B,u[E]=new B;const f=new B,d=new B,h=new B,g=new Xe,_=new Xe,p=new Xe,m=new B,M=new B;function v(E,z,I){f.fromArray(i,E*3),d.fromArray(i,z*3),h.fromArray(i,I*3),g.fromArray(o,E*2),_.fromArray(o,z*2),p.fromArray(o,I*2),d.sub(f),h.sub(f),_.sub(g),p.sub(g);const Z=1/(_.x*p.y-p.x*_.y);isFinite(Z)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(h,-_.y).multiplyScalar(Z),M.copy(h).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Z),c[E].add(m),c[z].add(m),c[I].add(m),u[E].add(M),u[z].add(M),u[I].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,z=S.length;E<z;++E){const I=S[E],Z=I.start,D=I.count;for(let O=Z,k=Z+D;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}const A=new B,w=new B,y=new B,U=new B;function x(E){y.fromArray(s,E*3),U.copy(y);const z=c[E];A.copy(z),A.sub(y.multiplyScalar(y.dot(z))).normalize(),w.crossVectors(U,z);const Z=w.dot(u[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=Z}for(let E=0,z=S.length;E<z;++E){const I=S[E],Z=I.start,D=I.count;for(let O=Z,k=Z+D;O<k;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new qt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lf=new Lt,xr=new dl,go=new Va,cf=new B,os=new B,ls=new B,cs=new B,nc=new B,vo=new B,xo=new Xe,Mo=new Xe,So=new Xe,uf=new B,hf=new B,ff=new B,yo=new B,Eo=new B;class Di extends ln{constructor(e=new Vn,t=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(nc.fromBufferAttribute(f,e),o?vo.addScaledVector(nc,u):vo.addScaledVector(nc.sub(t),u))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(go.containsPoint(xr.origin)===!1&&(xr.intersectSphere(go,cf)===null||xr.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(lf),!(n.boundingBox!==null&&xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,A=v;S<A;S+=3){const w=a.getX(S),y=a.getX(S+1),U=a.getX(S+2);i=To(this,m,e,n,c,u,f,w,y,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=To(this,o,e,n,c,u,f,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=M,A=v;S<A;S+=3){const w=S,y=S+1,U=S+2;i=To(this,m,e,n,c,u,f,w,y,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const M=p,v=p+1,S=p+2;i=To(this,o,e,n,c,u,f,M,v,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function B0(r,e,t,n,i,s,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===hr,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:r}}function To(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,os),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const u=B0(r,e,t,n,os,ls,cs,yo);if(u){i&&(xo.fromBufferAttribute(i,a),Mo.fromBufferAttribute(i,l),So.fromBufferAttribute(i,c),u.uv=ai.getInterpolation(yo,os,ls,cs,xo,Mo,So,new Xe)),s&&(xo.fromBufferAttribute(s,a),Mo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,c),u.uv1=ai.getInterpolation(yo,os,ls,cs,xo,Mo,So,new Xe),u.uv2=u.uv1),o&&(uf.fromBufferAttribute(o,a),hf.fromBufferAttribute(o,l),ff.fromBufferAttribute(o,c),u.normal=ai.getInterpolation(yo,os,ls,cs,uf,hf,ff,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};ai.getNormal(os,ls,cs,f.normal),u.face=f}return u}class Wa extends Vn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(u,3)),this.setAttribute("uv",new ui(f,2));function g(_,p,m,M,v,S,A,w,y,U,x){const E=S/y,z=A/U,I=S/2,Z=A/2,D=w/2,O=y+1,k=U+1;let W=0,q=0;const j=new B;for(let C=0;C<k;C++){const Q=C*z-Z;for(let ae=0;ae<O;ae++){const $=ae*E-I;j[_]=$*M,j[p]=Q*v,j[m]=D,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),f.push(ae/y),f.push(1-C/U),W+=1}}for(let C=0;C<U;C++)for(let Q=0;Q<y;Q++){const ae=d+Q+O*C,$=d+Q+O*(C+1),K=d+(Q+1)+O*(C+1),ce=d+(Q+1)+O*C;l.push(ae,$,ce),l.push($,K,ce),q+=6}a.addGroup(h,q,x),h+=q,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function z0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tm(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}const ka={clone:Hs,merge:dn};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nm extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zn extends nm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return za*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class H0 extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zn(us,hs,e,t);i.layers=this.layers,this.add(i);const s=new Zn(us,hs,e,t);s.layers=this.layers,this.add(s);const o=new Zn(us,hs,e,t);o.layers=this.layers,this.add(o);const a=new Zn(us,hs,e,t);a.layers=this.layers,this.add(a);const l=new Zn(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new Zn(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class im extends wn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Br?Xt:Qn),this.texture=new im(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wa(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Ni});s.uniforms.tEquirect.value=t;const o=new Di(i,s),a=t.minFilter;return t.minFilter===Ba&&(t.minFilter=Kn),new H0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ic=new B,W0=new B,X0=new rt;class qi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ic.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ic),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X0.getNormalMatrix(e),i=this.coplanarPoint(ic).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Va,bo=new B;class rm{constructor(e=new qi,t=new qi,n=new qi,i=new qi,s=new qi,o=new qi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],g=i[9],_=i[10],p=i[11],m=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,p-h,S-m).normalize(),n[1].setComponents(l+s,d+c,p+h,S+m).normalize(),n[2].setComponents(l+o,d+u,p+g,S+M).normalize(),n[3].setComponents(l-o,d-u,p-g,S-M).normalize(),n[4].setComponents(l-a,d-f,p-_,S-v).normalize(),t===Li)n[5].setComponents(l+a,d+f,p+_,S+v).normalize();else if(t===rl)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){return Mr.center.set(0,0,0),Mr.radius=.7071067811865476,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bo.x=i.normal.x>0?e.max.x:e.min.x,bo.y=i.normal.y>0?e.max.y:e.min.y,bo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Y0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,h=f.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=r.SHORT;else if(f instanceof Uint32Array)_=r.UNSIGNED_INT;else if(f instanceof Int32Array)_=r.INT;else if(f instanceof Int8Array)_=r.BYTE;else if(f instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,g=u.updateRanges;if(r.bindBuffer(f,c),h.count===-1&&g.length===0&&r.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(f,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}h.count!==-1&&(t?r.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):r.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,i(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class bu extends Vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const M=m*d-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-M,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;h.push(v,S,w),h.push(S,A,w)}this.setIndex(h),this.setAttribute("position",new ui(g,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,av=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:q0,alphahash_pars_fragment:$0,alphamap_fragment:j0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:Q0,aomap_fragment:J0,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:av,bumpmap_pars_fragment:ov,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:_v,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:Mv,emissivemap_fragment:Sv,emissivemap_pars_fragment:yv,colorspace_fragment:Ev,colorspace_pars_fragment:Tv,envmap_fragment:bv,envmap_common_pars_fragment:Av,envmap_pars_fragment:wv,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:kv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Dv,fog_pars_fragment:Uv,gradientmap_pars_fragment:Iv,lightmap_fragment:Nv,lightmap_pars_fragment:Ov,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Bv,lights_pars_begin:zv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:Yv,lights_fragment_begin:qv,lights_fragment_maps:$v,lights_fragment_end:jv,logdepthbuf_fragment:Kv,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:Jv,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:rx,metalnessmap_pars_fragment:sx,morphcolor_vertex:ax,morphnormal_vertex:ox,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:yx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:bx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Px,shadowmask_pars_fragment:Lx,skinbase_vertex:Dx,skinning_pars_vertex:Ux,skinning_vertex:Ix,skinnormal_vertex:Nx,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:Bx,tonemapping_pars_fragment:zx,transmission_fragment:kx,transmission_pars_fragment:Gx,uv_pars_fragment:Hx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:Yx,background_frag:qx,backgroundCube_vert:$x,backgroundCube_frag:jx,cube_vert:Kx,cube_frag:Zx,depth_vert:Qx,depth_frag:Jx,distanceRGBA_vert:eM,distanceRGBA_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:aM,meshbasic_frag:oM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:fM,meshnormal_frag:dM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:_M,meshphysical_frag:gM,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:MM,points_frag:SM,shadow_vert:yM,shadow_frag:EM,sprite_vert:TM,sprite_frag:bM},pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},di={basic:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:dn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:dn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:dn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:dn([pe.points,pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:dn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:dn([pe.common,pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:dn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:dn([pe.sprite,pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:dn([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:dn([pe.lights,pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};di.physical={uniforms:dn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ao={r:0,b:0,g:0};function AM(r,e,t,n,i,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(p,m){let M=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===hl)?(u===void 0&&(u=new Di(new Wa(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Hs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=dt.getTransfer(v.colorSpace)!==xt,(f!==v||d!==v.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Di(new bu(2,2),new xn({name:"BackgroundMaterial",uniforms:Hs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Ao,tm(r)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function wM(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(D,O,k,W,q){let j=!1;if(o){const C=_(W,k,O);c!==C&&(c=C,h(c.object)),j=m(D,W,k,q),j&&M(D,W,k,q)}else{const C=O.wireframe===!0;(c.geometry!==W.id||c.program!==k.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=k.id,c.wireframe=C,j=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,U(D,O,k,W),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function h(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,k){const W=k.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let j=q[O.id];j===void 0&&(j={},q[O.id]=j);let C=j[W];return C===void 0&&(C=p(d()),j[W]=C),C}function p(D){const O=[],k=[],W=[];for(let q=0;q<i;q++)O[q]=0,k[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:W,object:D,attributes:{},index:null}}function m(D,O,k,W){const q=c.attributes,j=O.attributes;let C=0;const Q=k.getAttributes();for(const ae in Q)if(Q[ae].location>=0){const K=q[ae];let ce=j[ae];if(ce===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function M(D,O,k,W){const q={},j=O.attributes;let C=0;const Q=k.getAttributes();for(const ae in Q)if(Q[ae].location>=0){let K=j[ae];K===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),q[ae]=ce,C++}c.attributes=q,c.attributesNum=C,c.index=W}function v(){const D=c.newAttributes;for(let O=0,k=D.length;O<k;O++)D[O]=0}function S(D){A(D,0)}function A(D,O){const k=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;k[D]=1,W[D]===0&&(r.enableVertexAttribArray(D),W[D]=1),q[D]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),q[D]=O)}function w(){const D=c.newAttributes,O=c.enabledAttributes;for(let k=0,W=O.length;k<W;k++)O[k]!==D[k]&&(r.disableVertexAttribArray(k),O[k]=0)}function y(D,O,k,W,q,j,C){C===!0?r.vertexAttribIPointer(D,O,k,q,j):r.vertexAttribPointer(D,O,k,W,q,j)}function U(D,O,k,W){if(n.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=W.attributes,j=k.getAttributes(),C=O.defaultAttributeValues;for(const Q in j){const ae=j[Q];if(ae.location>=0){let $=q[Q];if($===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const K=$.normalized,ce=$.itemSize,Me=t.get($);if(Me===void 0)continue;const me=Me.buffer,Ue=Me.type,Pe=Me.bytesPerElement,Oe=n.isWebGL2===!0&&(Ue===r.INT||Ue===r.UNSIGNED_INT||$.gpuType===Fp);if($.isInterleavedBufferAttribute){const We=$.data,G=We.stride,Ye=$.offset;if(We.isInstancedInterleavedBuffer){for(let ve=0;ve<ae.locationSize;ve++)A(ae.location+ve,We.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ve=0;ve<ae.locationSize;ve++)S(ae.location+ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ve=0;ve<ae.locationSize;ve++)y(ae.location+ve,ce/ae.locationSize,Ue,K,G*Pe,(Ye+ce/ae.locationSize*ve)*Pe,Oe)}else{if($.isInstancedBufferAttribute){for(let We=0;We<ae.locationSize;We++)A(ae.location+We,$.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let We=0;We<ae.locationSize;We++)S(ae.location+We);r.bindBuffer(r.ARRAY_BUFFER,me);for(let We=0;We<ae.locationSize;We++)y(ae.location+We,ce/ae.locationSize,Ue,K,ce*Pe,ce/ae.locationSize*We*Pe,Oe)}}else if(C!==void 0){const K=C[Q];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ae.location,K);break;case 3:r.vertexAttrib3fv(ae.location,K);break;case 4:r.vertexAttrib4fv(ae.location,K);break;default:r.vertexAttrib1fv(ae.location,K)}}}}w()}function x(){I();for(const D in a){const O=a[D];for(const k in O){const W=O[k];for(const q in W)g(W[q].object),delete W[q];delete O[k]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const k in O){const W=O[k];for(const q in W)g(W[q].object),delete W[q];delete O[k]}delete a[D.id]}function z(D){for(const O in a){const k=a[O];if(k[D.id]===void 0)continue;const W=k[D.id];for(const q in W)g(W[q].object),delete W[q];delete k[D.id]}}function I(){Z(),u=!0,c!==l&&(c=l,h(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:I,resetDefaultState:Z,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function RM(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,f){r.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,g;if(i)h=r,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<d;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function CM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),A=v&&S,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:w}}function PM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new qi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,v=M*4;let S=m.clippingState||null;l.value=S,S=u(g,d,v,h);for(let A=0;A!==v;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=h;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function LM(r){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=zs:a===kc&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===kc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new V0(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class am extends nm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ms=4,df=[.125,.215,.35,.446,.526,.582],Ar=20,rc=new am,pf=new at;let sc=null,ac=0,oc=0;const Tr=(1+Math.sqrt(5))/2,fs=1/Tr,mf=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Tr,fs),new B(0,Tr,-fs),new B(fs,0,Tr),new B(-fs,0,Tr),new B(Tr,fs,0),new B(-Tr,fs,0)];class _f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,ac,oc),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Oi,format:li,colorSpace:zi,depthBuffer:!1},i=gf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DM(s)),this._blurMaterial=UM(s,e,t)}return i}_compileMaterial(e){const t=new Di(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,i){const a=new Zn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(pf),u.toneMapping=sr,u.autoClear=!1;const h=new Tu({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Di(new Wa,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(pf),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;wo(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=mf[(i-1)%mf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Di(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ar-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ar;p>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ar}`);const m=[];let M=0;for(let y=0;y<Ar;++y){const U=y/_,x=Math.exp(-U*U/2);m.push(x),y===0?M+=x:y<p&&(M+=2*x)}for(let y=0;y<m.length;y++)m[y]=m[y]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],A=3*S*(i>v-Ms?i-v+Ms:0),w=4*(this._cubeSize-S);wo(t,A,w,3*S,2*S),l.setRenderTarget(t),l.render(f,rc)}}function DM(r){const e=[],t=[],n=[];let i=r;const s=r-Ms+1+df.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ms?l=df[o-r+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*h),v=new Float32Array(p*g*h),S=new Float32Array(m*g*h);for(let w=0;w<h;w++){const y=w%3*2/3-1,U=w>2?0:-1,x=[y,U,0,y+2/3,U,0,y+2/3,U+1,0,y,U,0,y+2/3,U+1,0,y,U+1,0];M.set(x,_*g*w),v.set(d,p*g*w);const E=[w,w,w,w,w,w];S.set(E,m*g*w)}const A=new Vn;A.setAttribute("position",new qt(M,_)),A.setAttribute("uv",new qt(v,p)),A.setAttribute("faceIndex",new qt(S,m)),e.push(A),i>Ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gf(r,e,t){const n=new ci(r,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function UM(r,e,t){const n=new Float32Array(Ar),i=new B(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function vf(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xf(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zc||l===kc,u=l===zs||l===ks;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _f(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new _f(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function NM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function OM(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let v=0,S=M.length;v<S;v+=3){const A=M[v+0],w=M[v+1],y=M[v+2];d.push(A,w,w,y,y,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const A=v+0,w=v+1,y=v+2;d.push(A,w,w,y,y,A)}}else return;const p=new(qp(d)?em:Jp)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function FM(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,g){r.drawElements(s,g,a,h*l),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,h*l,_),t.update(g,s,_)}function d(h,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(h[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let m=0;for(let M=0;M<_;M++)m+=g[M];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function BM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zM(r,e){return r[0]-e[0]}function kM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function GM(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new jt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let O=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var h=O;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),A===!0&&(x=3);let E=u.attributes.position.count*x,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const I=new Float32Array(E*z*4*_),Z=new Kp(I,E,z,_);Z.type=er,Z.needsUpdate=!0;const D=x*4;for(let k=0;k<_;k++){const W=w[k],q=y[k],j=U[k],C=E*z*4*k;for(let Q=0;Q<W.count;Q++){const ae=Q*D;v===!0&&(o.fromBufferAttribute(W,Q),I[C+ae+0]=o.x,I[C+ae+1]=o.y,I[C+ae+2]=o.z,I[C+ae+3]=0),S===!0&&(o.fromBufferAttribute(q,Q),I[C+ae+4]=o.x,I[C+ae+5]=o.y,I[C+ae+6]=o.z,I[C+ae+7]=0),A===!0&&(o.fromBufferAttribute(j,Q),I[C+ae+8]=o.x,I[C+ae+9]=o.y,I[C+ae+10]=o.z,I[C+ae+11]=j.itemSize===4?o.w:1)}}p={count:_,texture:Z,size:new Xe(E,z)},s.set(u,p),u.addEventListener("dispose",O)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];const M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const A=_[S];A[0]=S,A[1]=d[S]}_.sort(kM);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(zM);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const A=a[S],w=A[0],y=A[1];w!==Number.MAX_SAFE_INTEGER&&y?(p&&u.getAttribute("morphTarget"+S)!==p[w]&&u.setAttribute("morphTarget"+S,p[w]),m&&u.getAttribute("morphNormal"+S)!==m[w]&&u.setAttribute("morphNormal"+S,m[w]),i[S]=y,M+=y):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const v=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",v),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function HM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class om extends wn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Fr,u!==Fr&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fr&&(n=Ji),n===void 0&&u===Gs&&(n=Or),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lm=new wn,cm=new om(1,1);cm.compareFunction=Xp;const um=new Kp,hm=new w0,fm=new im,Mf=[],Sf=[],yf=new Float32Array(16),Ef=new Float32Array(9),Tf=new Float32Array(4);function qs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Mf[i];if(s===void 0&&(s=new Float32Array(i),Mf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ml(r,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function VM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function qM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Tf.set(n),r.uniformMatrix2fv(this.addr,!1,Tf),Gt(t,n)}}function $M(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Ef.set(n),r.uniformMatrix3fv(this.addr,!1,Ef),Gt(t,n)}}function jM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;yf.set(n),r.uniformMatrix4fv(this.addr,!1,yf),Gt(t,n)}}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function eS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function nS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function iS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function rS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?cm:lm;t.setTexture2D(e||s,i)}function sS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hm,i)}function aS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fm,i)}function oS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||um,i)}function lS(r){switch(r){case 5126:return VM;case 35664:return WM;case 35665:return XM;case 35666:return YM;case 35674:return qM;case 35675:return $M;case 35676:return jM;case 5124:case 35670:return KM;case 35667:case 35671:return ZM;case 35668:case 35672:return QM;case 35669:case 35673:return JM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}function cS(r,e){r.uniform1fv(this.addr,e)}function uS(r,e){const t=qs(e,this.size,2);r.uniform2fv(this.addr,t)}function hS(r,e){const t=qs(e,this.size,3);r.uniform3fv(this.addr,t)}function fS(r,e){const t=qs(e,this.size,4);r.uniform4fv(this.addr,t)}function dS(r,e){const t=qs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pS(r,e){const t=qs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mS(r,e){const t=qs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _S(r,e){r.uniform1iv(this.addr,e)}function gS(r,e){r.uniform2iv(this.addr,e)}function vS(r,e){r.uniform3iv(this.addr,e)}function xS(r,e){r.uniform4iv(this.addr,e)}function MS(r,e){r.uniform1uiv(this.addr,e)}function SS(r,e){r.uniform2uiv(this.addr,e)}function yS(r,e){r.uniform3uiv(this.addr,e)}function ES(r,e){r.uniform4uiv(this.addr,e)}function TS(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lm,s[o])}function bS(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hm,s[o])}function AS(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fm,s[o])}function wS(r,e,t){const n=this.cache,i=e.length,s=ml(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||um,s[o])}function RS(r){switch(r){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return _S;case 35667:case 35671:return gS;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return MS;case 36294:return SS;case 36295:return yS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}}class LS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function bf(r,e){r.seq.push(e),r.map[e.id]=e}function DS(r,e,t){const n=r.name,i=n.length;for(lc.lastIndex=0;;){const s=lc.exec(n),o=lc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bf(t,c===void 0?new CS(a,r,e):new PS(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new LS(a),bf(t,f)),t=f}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);DS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Af(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const US=37297;let IS=0;function NS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function OS(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===il&&t===nl?n="LinearDisplayP3ToLinearSRGB":e===nl&&t===il&&(n="LinearSRGBToLinearDisplayP3"),r){case zi:case fl:return[n,"LinearTransferOETF"];case Xt:case yu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function wf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+NS(r.getShaderSource(e),o)}else return i}function FS(r,e){const t=OS(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function BS(r,e){let t;switch(e){case Dp:t="Linear";break;case Up:t="Reinhard";break;case Ip:t="OptimizedCineon";break;case Mu:t="ACESFilmic";break;case Np:t="AgX";break;case Gg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zS(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function kS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ss).join(`
`)}function GS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ss(r){return r!==""}function Rf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(r){return r.replace(VS,XS)}const WS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XS(r,e){let t=et[e];if(t===void 0){const n=WS.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(r){return r.replace(YS,qS)}function qS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $S(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Pp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function jS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zs:case ks:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function ZS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lp:e="ENVMAP_BLENDING_MULTIPLY";break;case zg:e="ENVMAP_BLENDING_MIX";break;case kg:e="ENVMAP_BLENDING_ADD";break}return e}function QS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$S(t),c=jS(t),u=KS(t),f=ZS(t),d=QS(t),h=t.isWebGL2?"":zS(t),g=kS(t),_=GS(s),p=i.createProgram();let m,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),m.length>0&&(m+=`
`),M=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ss).join(`
`),M.length>0&&(M+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),M=[h,Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?et.tonemapping_pars_fragment:"",t.toneMapping!==sr?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Xc(o),o=Rf(o,t),o=Cf(o,t),a=Xc(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+m+o,A=v+M+a,w=Af(i,i.VERTEX_SHADER,S),y=Af(i,i.FRAGMENT_SHADER,A);i.attachShader(p,w),i.attachShader(p,y),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(I){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(y).trim();let k=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,y);else{const q=wf(i,w,"vertex"),j=wf(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||O==="")&&(W=!1);W&&(I.diagnostics={runnable:k,programLog:Z,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:M}})}i.deleteShader(w),i.deleteShader(y),x=new Ho(i,p),E=HS(i,p)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(p,US)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=y,this}let ey=0;class ty{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ny(e),t.set(e,n)),n}}class ny{constructor(e){this.id=ey++,this.code=e,this.usedTimes=0}}function iy(r,e,t,n,i,s,o){const a=new Zp,l=new ty,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,E,z,I,Z){const D=I.fog,O=Z.geometry,k=x.isMeshStandardMaterial?I.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),q=W&&W.mapping===hl?W.image.height:null,j=g[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const C=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=C!==void 0?C.length:0;let ae=0;O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3);let $,K,ce,Me;if(j){const Se=di[j];$=Se.vertexShader,K=Se.fragmentShader}else $=x.vertexShader,K=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),Me=l.getFragmentShaderID(x);const me=r.getRenderTarget(),Ue=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Oe=!!x.map,We=!!x.matcap,G=!!W,Ye=!!x.aoMap,ve=!!x.lightMap,Le=!!x.bumpMap,xe=!!x.normalMap,V=!!x.displacementMap,Be=!!x.emissiveMap,R=!!x.metalnessMap,T=!!x.roughnessMap,F=x.anisotropy>0,ie=x.clearcoat>0,ee=x.iridescence>0,re=x.sheen>0,_e=x.transmission>0,de=F&&!!x.anisotropyMap,ue=ie&&!!x.clearcoatMap,we=ie&&!!x.clearcoatNormalMap,ke=ie&&!!x.clearcoatRoughnessMap,J=ee&&!!x.iridescenceMap,ot=ee&&!!x.iridescenceThicknessMap,De=re&&!!x.sheenColorMap,qe=re&&!!x.sheenRoughnessMap,Te=!!x.specularMap,ge=!!x.specularColorMap,P=!!x.specularIntensityMap,oe=_e&&!!x.transmissionMap,be=_e&&!!x.thicknessMap,te=!!x.gradientMap,ne=!!x.alphaMap,L=x.alphaTest>0,se=!!x.alphaHash,he=!!x.extensions,Fe=!!O.attributes.uv1,Ie=!!O.attributes.uv2,je=!!O.attributes.uv3;let Qe=sr;return x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=r.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:K,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Pe,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:zi,map:Oe,matcap:We,envMap:G,envMapMode:G&&W.mapping,envMapCubeUVHeight:q,aoMap:Ye,lightMap:ve,bumpMap:Le,normalMap:xe,displacementMap:d&&V,emissiveMap:Be,normalMapObjectSpace:xe&&x.normalMapType===e0,normalMapTangentSpace:xe&&x.normalMapType===Jg,metalnessMap:R,roughnessMap:T,anisotropy:F,anisotropyMap:de,clearcoat:ie,clearcoatMap:ue,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:re,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Te,specularColorMap:ge,specularIntensityMap:P,transmission:_e,transmissionMap:oe,thicknessMap:be,gradientMap:te,opaque:x.transparent===!1&&x.blending===Ps,alphaMap:ne,alphaTest:L,alphaHash:se,combine:x.combine,mapUv:Oe&&_(x.map.channel),aoMapUv:Ye&&_(x.aoMap.channel),lightMapUv:ve&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:xe&&_(x.normalMap.channel),displacementMapUv:V&&_(x.displacementMap.channel),emissiveMapUv:Be&&_(x.emissiveMap.channel),metalnessMapUv:R&&_(x.metalnessMap.channel),roughnessMapUv:T&&_(x.roughnessMap.channel),anisotropyMapUv:de&&_(x.anisotropyMap.channel),clearcoatMapUv:ue&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(x.sheenRoughnessMap.channel),specularMapUv:Te&&_(x.specularMap.channel),specularColorMapUv:ge&&_(x.specularColorMap.channel),specularIntensityMapUv:P&&_(x.specularIntensityMap.channel),transmissionMapUv:oe&&_(x.transmissionMap.channel),thicknessMapUv:be&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ie,vertexUv3s:je,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(Oe||ne),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ae,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:he&&x.extensions.derivatives===!0,extensionFragDepth:he&&x.extensions.fragDepth===!0,extensionDrawBuffers:he&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(M(E,x),v(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const E=g[x.type];let z;if(E){const I=di[E];z=ka.clone(I.uniforms)}else z=x.uniforms;return z}function A(x,E){let z;for(let I=0,Z=c.length;I<Z;I++){const D=c[I];if(D.cacheKey===E){z=D,++z.usedTimes;break}}return z===void 0&&(z=new JS(r,E,x,s),c.push(z)),z}function w(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function y(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:y,programs:c,dispose:U}}function ry(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Df(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Uf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,h,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||sy),n.length>1&&n.sort(d||Df),i.length>1&&i.sort(d||Df)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function ay(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Uf,r.set(n,[o])):i>=s.length?(o=new Uf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function oy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new at};break;case"SpotLight":t={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function ly(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cy=0;function uy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hy(r,e){const t=new oy,n=ly(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,o=new Lt,a=new Lt;function l(u,f){let d=0,h=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,p=0,m=0,M=0,v=0,S=0,A=0,w=0,y=0,U=0,x=0;u.sort(uy);const E=f===!0?Math.PI:1;for(let I=0,Z=u.length;I<Z;I++){const D=u[I],O=D.color,k=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*k*E,h+=O.g*k*E,g+=O.b*k*E;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],k);x++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const C=D.shadow,Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.directionalShadow[_]=Q,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,S++}i.directional[_]=j,_++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(O).multiplyScalar(k*E),j.distance=W,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[m]=j;const C=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,C.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[m]=C.matrix,D.castShadow){const Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,i.spotShadow[m]=Q,i.spotShadowMap[m]=q,w++}m++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(O).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=j,M++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*E),j.distance=D.distance,j.decay=D.decay,D.castShadow){const C=D.shadow,Q=n.get(D);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=D.shadow.matrix,A++}i.point[p]=j,p++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(k*E),j.groundColor.copy(D.groundColor).multiplyScalar(k*E),i.hemi[v]=j,v++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==m||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==A||z.numSpotShadows!==w||z.numSpotMaps!==y||z.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=M,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+y-U,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=x,z.directionalLength=_,z.pointLength=p,z.spotLength=m,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=A,z.numSpotShadows=w,z.numSpotMaps=y,z.numLightProbes=x,i.version=cy++)}function c(u,f){let d=0,h=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const S=u[M];if(S.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(S.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function If(r,e){const t=new hy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new If(r,e),t.set(s,[l])):o>=a.length?(l=new If(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class dy extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class py extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gy(r,e,t){let n=new rm;const i=new Xe,s=new Xe,o=new jt,a=new dy({depthPacking:Qg}),l=new py,c={},u=t.maxTextureSize,f={[hr]:An,[An]:hr,[Ci]:Ci},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:my,fragmentShader:_y}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Di(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pp;let m=this.type;this.render=function(w,y,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=r.getRenderTarget(),E=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ni),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Z=m!==bi&&this.type===bi,D=m===bi&&this.type!==bi;for(let O=0,k=w.length;O<k;O++){const W=w[O],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const j=q.getFrameExtents();if(i.multiply(j),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||Z===!0||D===!0){const Q=this.type!==bi?{minFilter:gn,magFilter:gn}:{};q.map!==null&&q.map.dispose(),q.map=new ci(i.x,i.y,Q),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const C=q.getViewportCount();for(let Q=0;Q<C;Q++){const ae=q.getViewport(Q);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),I.viewport(o),q.updateMatrices(W,Q),n=q.getFrustum(),S(y,U,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===bi&&M(q,U),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(x,E,z)};function M(w,y){const U=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,U,d,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,U,h,_,null)}function v(w,y,U,x){let E=null;const z=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(z!==void 0)E=z;else if(E=U.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const I=E.uuid,Z=y.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let O=D[Z];O===void 0&&(O=E.clone(),D[Z]=O,y.addEventListener("dispose",A)),E=O}if(E.visible=y.visible,E.wireframe=y.wireframe,x===bi?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:f[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=r.properties.get(E);I.light=U}return E}function S(w,y,U,x,E){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),D=w.material;if(Array.isArray(D)){const O=Z.groups;for(let k=0,W=O.length;k<W;k++){const q=O[k],j=D[q.materialIndex];if(j&&j.visible){const C=v(w,j,x,E);w.onBeforeShadow(r,w,y,U,Z,C,q),r.renderBufferDirect(U,null,Z,C,w,q),w.onAfterShadow(r,w,y,U,Z,C,q)}}}else if(D.visible){const O=v(w,D,x,E);w.onBeforeShadow(r,w,y,U,Z,O,null),r.renderBufferDirect(U,null,Z,O,w,null),w.onAfterShadow(r,w,y,U,Z,O,null)}}const I=w.children;for(let Z=0,D=I.length;Z<D;Z++)S(I[Z],y,U,x,E)}function A(w){w.target.removeEventListener("dispose",A);for(const U in c){const x=c[U],E=w.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function vy(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const se=new jt;let he=null;const Fe=new jt(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!L&&(r.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){L=Ie},setClear:function(Ie,je,Qe,ye,Se){Se===!0&&(Ie*=ye,je*=ye,Qe*=ye),se.set(Ie,je,Qe,ye),Fe.equals(se)===!1&&(r.clearColor(Ie,je,Qe,ye),Fe.copy(se))},reset:function(){L=!1,he=null,Fe.set(-1,0,0,0)}}}function s(){let L=!1,se=null,he=null,Fe=null;return{setTest:function(Ie){Ie?Pe(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(Ie){se!==Ie&&!L&&(r.depthMask(Ie),se=Ie)},setFunc:function(Ie){if(he!==Ie){switch(Ie){case Dg:r.depthFunc(r.NEVER);break;case Ug:r.depthFunc(r.ALWAYS);break;case Ig:r.depthFunc(r.LESS);break;case el:r.depthFunc(r.LEQUAL);break;case Ng:r.depthFunc(r.EQUAL);break;case Og:r.depthFunc(r.GEQUAL);break;case Fg:r.depthFunc(r.GREATER);break;case Bg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Ie}},setLocked:function(Ie){L=Ie},setClear:function(Ie){Fe!==Ie&&(r.clearDepth(Ie),Fe=Ie)},reset:function(){L=!1,se=null,he=null,Fe=null}}}function o(){let L=!1,se=null,he=null,Fe=null,Ie=null,je=null,Qe=null,ye=null,Se=null;return{setTest:function(Ae){L||(Ae?Pe(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Ae){se!==Ae&&!L&&(r.stencilMask(Ae),se=Ae)},setFunc:function(Ae,le,Ge){(he!==Ae||Fe!==le||Ie!==Ge)&&(r.stencilFunc(Ae,le,Ge),he=Ae,Fe=le,Ie=Ge)},setOp:function(Ae,le,Ge){(je!==Ae||Qe!==le||ye!==Ge)&&(r.stencilOp(Ae,le,Ge),je=Ae,Qe=le,ye=Ge)},setLocked:function(Ae){L=Ae},setClear:function(Ae){Se!==Ae&&(r.clearStencil(Ae),Se=Ae)},reset:function(){L=!1,se=null,he=null,Fe=null,Ie=null,je=null,Qe=null,ye=null,Se=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,_=[],p=null,m=!1,M=null,v=null,S=null,A=null,w=null,y=null,U=null,x=new at(0,0,0),E=0,z=!1,I=null,Z=null,D=null,O=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=j>=1):C.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=j>=2);let Q=null,ae={};const $=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ce=new jt().fromArray($),Me=new jt().fromArray(K);function me(L,se,he,Fe){const Ie=new Uint8Array(4),je=r.createTexture();r.bindTexture(L,je),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<he;Qe++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(se+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return je}const Ue={};Ue[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(el),Be(!1),R(mh),Pe(r.CULL_FACE),xe(Ni);function Pe(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function Oe(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function We(L,se){return h[L]!==se?(r.bindFramebuffer(L,se),h[L]=se,n&&(L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function G(L,se){let he=_,Fe=!1;if(L)if(he=g.get(se),he===void 0&&(he=[],g.set(se,he)),L.isWebGLMultipleRenderTargets){const Ie=L.texture;if(he.length!==Ie.length||he[0]!==r.COLOR_ATTACHMENT0){for(let je=0,Qe=Ie.length;je<Qe;je++)he[je]=r.COLOR_ATTACHMENT0+je;he.length=Ie.length,Fe=!0}}else he[0]!==r.COLOR_ATTACHMENT0&&(he[0]=r.COLOR_ATTACHMENT0,Fe=!0);else he[0]!==r.BACK&&(he[0]=r.BACK,Fe=!0);Fe&&(t.isWebGL2?r.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ye(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const ve={[br]:r.FUNC_ADD,[gg]:r.FUNC_SUBTRACT,[vg]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[vh]=r.MIN,ve[xh]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[vh]=L.MIN_EXT,ve[xh]=L.MAX_EXT)}const Le={[xg]:r.ZERO,[Mg]:r.ONE,[Sg]:r.SRC_COLOR,[Fc]:r.SRC_ALPHA,[wg]:r.SRC_ALPHA_SATURATE,[bg]:r.DST_COLOR,[Eg]:r.DST_ALPHA,[yg]:r.ONE_MINUS_SRC_COLOR,[Bc]:r.ONE_MINUS_SRC_ALPHA,[Ag]:r.ONE_MINUS_DST_COLOR,[Tg]:r.ONE_MINUS_DST_ALPHA,[Rg]:r.CONSTANT_COLOR,[Cg]:r.ONE_MINUS_CONSTANT_COLOR,[Pg]:r.CONSTANT_ALPHA,[Lg]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(L,se,he,Fe,Ie,je,Qe,ye,Se,Ae){if(L===Ni){m===!0&&(Oe(r.BLEND),m=!1);return}if(m===!1&&(Pe(r.BLEND),m=!0),L!==_g){if(L!==M||Ae!==z){if((v!==br||w!==br)&&(r.blendEquation(r.FUNC_ADD),v=br,w=br),Ae)switch(L){case Ps:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bs:r.blendFunc(r.ONE,r.ONE);break;case _h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,A=null,y=null,U=null,x.set(0,0,0),E=0,M=L,z=Ae}return}Ie=Ie||se,je=je||he,Qe=Qe||Fe,(se!==v||Ie!==w)&&(r.blendEquationSeparate(ve[se],ve[Ie]),v=se,w=Ie),(he!==S||Fe!==A||je!==y||Qe!==U)&&(r.blendFuncSeparate(Le[he],Le[Fe],Le[je],Le[Qe]),S=he,A=Fe,y=je,U=Qe),(ye.equals(x)===!1||Se!==E)&&(r.blendColor(ye.r,ye.g,ye.b,Se),x.copy(ye),E=Se),M=L,z=!1}function V(L,se){L.side===Ci?Oe(r.CULL_FACE):Pe(r.CULL_FACE);let he=L.side===An;se&&(he=!he),Be(he),L.blending===Ps&&L.transparent===!1?xe(Ni):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Fe=L.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){I!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),I=L)}function R(L){L!==dg?(Pe(r.CULL_FACE),L!==Z&&(L===mh?r.cullFace(r.BACK):L===pg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),Z=L}function T(L){L!==D&&(q&&r.lineWidth(L),D=L)}function F(L,se,he){L?(Pe(r.POLYGON_OFFSET_FILL),(O!==se||k!==he)&&(r.polygonOffset(se,he),O=se,k=he)):Oe(r.POLYGON_OFFSET_FILL)}function ie(L){L?Pe(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function ee(L){L===void 0&&(L=r.TEXTURE0+W-1),Q!==L&&(r.activeTexture(L),Q=L)}function re(L,se,he){he===void 0&&(Q===null?he=r.TEXTURE0+W-1:he=Q);let Fe=ae[he];Fe===void 0&&(Fe={type:void 0,texture:void 0},ae[he]=Fe),(Fe.type!==L||Fe.texture!==se)&&(Q!==he&&(r.activeTexture(he),Q=he),r.bindTexture(L,se||Ue[L]),Fe.type=L,Fe.texture=se)}function _e(){const L=ae[Q];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){ce.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function oe(L){Me.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function be(L,se){let he=f.get(se);he===void 0&&(he=new WeakMap,f.set(se,he));let Fe=he.get(L);Fe===void 0&&(Fe=r.getUniformBlockIndex(se,L.name),he.set(L,Fe))}function te(L,se){const Fe=f.get(se).get(L);u.get(se)!==Fe&&(r.uniformBlockBinding(se,Fe,L.__bindingPointIndex),u.set(se,Fe))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Q=null,ae={},h={},g=new WeakMap,_=[],p=null,m=!1,M=null,v=null,S=null,A=null,w=null,y=null,U=null,x=new at(0,0,0),E=0,z=!1,I=null,Z=null,D=null,O=null,k=null,ce.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Oe,bindFramebuffer:We,drawBuffers:G,useProgram:Ye,setBlending:xe,setMaterial:V,setFlipSided:Be,setCullFace:R,setLineWidth:T,setPolygonOffset:F,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:ue,texImage2D:Te,texImage3D:ge,updateUBOMapping:be,uniformBlockBinding:te,texStorage2D:De,texStorage3D:qe,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:ot,scissor:P,viewport:oe,reset:ne}}function xy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return h?new OffscreenCanvas(R,T):al("canvas")}function _(R,T,F,ie){let ee=1;if((R.width>ie||R.height>ie)&&(ee=ie/Math.max(R.width,R.height)),ee<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const re=T?sl:Math.floor,_e=re(ee*R.width),de=re(ee*R.height);f===void 0&&(f=g(_e,de));const ue=F?g(_e,de):f;return ue.width=_e,ue.height=de,ue.getContext("2d").drawImage(R,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+de+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Wc(R.width)&&Wc(R.height)}function m(R){return a?!1:R.wrapS!==oi||R.wrapT!==oi||R.minFilter!==gn&&R.minFilter!==Kn}function M(R,T){return R.generateMipmaps&&T&&R.minFilter!==gn&&R.minFilter!==Kn}function v(R){r.generateMipmap(R)}function S(R,T,F,ie,ee=!1){if(a===!1)return T;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let re=T;if(T===r.RED&&(F===r.FLOAT&&(re=r.R32F),F===r.HALF_FLOAT&&(re=r.R16F),F===r.UNSIGNED_BYTE&&(re=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(re=r.R8UI),F===r.UNSIGNED_SHORT&&(re=r.R16UI),F===r.UNSIGNED_INT&&(re=r.R32UI),F===r.BYTE&&(re=r.R8I),F===r.SHORT&&(re=r.R16I),F===r.INT&&(re=r.R32I)),T===r.RG&&(F===r.FLOAT&&(re=r.RG32F),F===r.HALF_FLOAT&&(re=r.RG16F),F===r.UNSIGNED_BYTE&&(re=r.RG8)),T===r.RGBA){const _e=ee?tl:dt.getTransfer(ie);F===r.FLOAT&&(re=r.RGBA32F),F===r.HALF_FLOAT&&(re=r.RGBA16F),F===r.UNSIGNED_BYTE&&(re=_e===xt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function A(R,T,F){return M(R,F)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){return R===gn||R===Mh||R===Nl?r.NEAREST:r.LINEAR}function y(R){const T=R.target;T.removeEventListener("dispose",y),x(T),T.isVideoTexture&&u.delete(T)}function U(R){const T=R.target;T.removeEventListener("dispose",U),z(T)}function x(R){const T=n.get(R);if(T.__webglInit===void 0)return;const F=R.source,ie=d.get(F);if(ie){const ee=ie[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(R),Object.keys(ie).length===0&&d.delete(F)}n.remove(R)}function E(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const F=R.source,ie=d.get(F);delete ie[T.__cacheKey],o.memory.textures--}function z(R){const T=R.texture,F=n.get(R),ie=n.get(T);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(F.__webglFramebuffer[ee]))for(let re=0;re<F.__webglFramebuffer[ee].length;re++)r.deleteFramebuffer(F.__webglFramebuffer[ee][re]);else r.deleteFramebuffer(F.__webglFramebuffer[ee]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[ee])}else{if(Array.isArray(F.__webglFramebuffer))for(let ee=0;ee<F.__webglFramebuffer.length;ee++)r.deleteFramebuffer(F.__webglFramebuffer[ee]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,re=T.length;ee<re;ee++){const _e=n.get(T[ee]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(T[ee])}n.remove(T),n.remove(R)}let I=0;function Z(){I=0}function D(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function O(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){const F=n.get(R);if(R.isVideoTexture&&V(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(F,R,T);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function W(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ce(F,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function q(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ce(F,R,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function j(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){Me(F,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}const C={[Gc]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Hc]:r.MIRRORED_REPEAT},Q={[gn]:r.NEAREST,[Mh]:r.NEAREST_MIPMAP_NEAREST,[Nl]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[Hg]:r.LINEAR_MIPMAP_NEAREST,[Ba]:r.LINEAR_MIPMAP_LINEAR},ae={[t0]:r.NEVER,[o0]:r.ALWAYS,[n0]:r.LESS,[Xp]:r.LEQUAL,[i0]:r.EQUAL,[a0]:r.GEQUAL,[r0]:r.GREATER,[s0]:r.NOTEQUAL};function $(R,T,F){if(F?(r.texParameteri(R,r.TEXTURE_WRAP_S,C[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,C[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,C[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Q[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Q[T.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==oi||T.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(T.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==gn&&T.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===gn||T.minFilter!==Nl&&T.minFilter!==Ba||T.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Oi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function K(R,T){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",y));const ie=T.source;let ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));const re=O(T);if(re!==R.__cacheKey){ee[re]===void 0&&(ee[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[re].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&E(T)),R.__cacheKey=re,R.__webglTexture=ee[re].texture}return F}function ce(R,T,F){let ie=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=r.TEXTURE_3D);const ee=K(R,T),re=T.source;t.bindTexture(ie,R.__webglTexture,r.TEXTURE0+F);const _e=n.get(re);if(re.version!==_e.__version||ee===!0){t.activeTexture(r.TEXTURE0+F);const de=dt.getPrimaries(dt.workingColorSpace),ue=T.colorSpace===Qn?null:dt.getPrimaries(T.colorSpace),we=T.colorSpace===Qn||de===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=m(T)&&p(T.image)===!1;let J=_(T.image,ke,!1,i.maxTextureSize);J=Be(T,J);const ot=p(J)||a,De=s.convert(T.format,T.colorSpace);let qe=s.convert(T.type),Te=S(T.internalFormat,De,qe,T.colorSpace,T.isVideoTexture);$(ie,T,ot);let ge;const P=T.mipmaps,oe=a&&T.isVideoTexture!==!0&&Te!==Vp,be=_e.__version===void 0||ee===!0,te=A(T,J,ot);if(T.isDepthTexture)Te=r.DEPTH_COMPONENT,a?T.type===er?Te=r.DEPTH_COMPONENT32F:T.type===Ji?Te=r.DEPTH_COMPONENT24:T.type===Or?Te=r.DEPTH24_STENCIL8:Te=r.DEPTH_COMPONENT16:T.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Fr&&Te===r.DEPTH_COMPONENT&&T.type!==Su&&T.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ji,qe=s.convert(T.type)),T.format===Gs&&Te===r.DEPTH_COMPONENT&&(Te=r.DEPTH_STENCIL,T.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Or,qe=s.convert(T.type))),be&&(oe?t.texStorage2D(r.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Te,J.width,J.height,0,De,qe,null));else if(T.isDataTexture)if(P.length>0&&ot){oe&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],oe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,qe,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,De,qe,ge.data);T.generateMipmaps=!1}else oe?(be&&t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,De,qe,J.data)):t.texImage2D(r.TEXTURE_2D,0,Te,J.width,J.height,0,De,qe,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Te,P[0].width,P[0].height,J.depth);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],T.format!==li?De!==null?oe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,J.depth,De,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,J.depth,De,qe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,J.depth,0,De,qe,ge.data)}else{oe&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],T.format!==li?De!==null?oe?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,qe,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,De,qe,ge.data)}else if(T.isDataArrayTexture)oe?(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Te,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,De,qe,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,De,qe,J.data);else if(T.isData3DTexture)oe?(be&&t.texStorage3D(r.TEXTURE_3D,te,Te,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,De,qe,J.data)):t.texImage3D(r.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,De,qe,J.data);else if(T.isFramebufferTexture){if(be)if(oe)t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height);else{let ne=J.width,L=J.height;for(let se=0;se<te;se++)t.texImage2D(r.TEXTURE_2D,se,Te,ne,L,0,De,qe,null),ne>>=1,L>>=1}}else if(P.length>0&&ot){oe&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],oe?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,De,qe,ge):t.texImage2D(r.TEXTURE_2D,ne,Te,De,qe,ge);T.generateMipmaps=!1}else oe?(be&&t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,qe,J)):t.texImage2D(r.TEXTURE_2D,0,Te,De,qe,J);M(T,ot)&&v(ie),_e.__version=re.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Me(R,T,F){if(T.image.length!==6)return;const ie=K(R,T),ee=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const re=n.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(r.TEXTURE0+F);const _e=dt.getPrimaries(dt.workingColorSpace),de=T.colorSpace===Qn?null:dt.getPrimaries(T.colorSpace),ue=T.colorSpace===Qn||_e===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,ke=T.image[0]&&T.image[0].isDataTexture,J=[];for(let ne=0;ne<6;ne++)!we&&!ke?J[ne]=_(T.image[ne],!1,!0,i.maxCubemapSize):J[ne]=ke?T.image[ne].image:T.image[ne],J[ne]=Be(T,J[ne]);const ot=J[0],De=p(ot)||a,qe=s.convert(T.format,T.colorSpace),Te=s.convert(T.type),ge=S(T.internalFormat,qe,Te,T.colorSpace),P=a&&T.isVideoTexture!==!0,oe=re.__version===void 0||ie===!0;let be=A(T,ot,De);$(r.TEXTURE_CUBE_MAP,T,De);let te;if(we){P&&oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ge,ot.width,ot.height);for(let ne=0;ne<6;ne++){te=J[ne].mipmaps;for(let L=0;L<te.length;L++){const se=te[L];T.format!==li?qe!==null?P?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,qe,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ge,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,qe,Te,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ge,se.width,se.height,0,qe,Te,se.data)}}}else{te=T.mipmaps,P&&oe&&(te.length>0&&be++,t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ge,J[0].width,J[0].height));for(let ne=0;ne<6;ne++)if(ke){P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,J[ne].width,J[ne].height,qe,Te,J[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,J[ne].width,J[ne].height,0,qe,Te,J[ne].data);for(let L=0;L<te.length;L++){const he=te[L].image[ne].image;P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,he.width,he.height,qe,Te,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ge,he.width,he.height,0,qe,Te,he.data)}}else{P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,qe,Te,J[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,qe,Te,J[ne]);for(let L=0;L<te.length;L++){const se=te[L];P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,qe,Te,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ge,qe,Te,se.image[ne])}}}M(T,De)&&v(r.TEXTURE_CUBE_MAP),re.__version=ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function me(R,T,F,ie,ee,re){const _e=s.convert(F.format,F.colorSpace),de=s.convert(F.type),ue=S(F.internalFormat,_e,de,F.colorSpace);if(!n.get(T).__hasExternalTextures){const ke=Math.max(1,T.width>>re),J=Math.max(1,T.height>>re);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,ue,ke,J,T.depth,0,_e,de,null):t.texImage2D(ee,re,ue,ke,J,0,_e,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,n.get(F).__webglTexture,0,Le(T)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,n.get(F).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(R,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ie=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||xe(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===er?ie=r.DEPTH_COMPONENT32F:ee.type===Ji&&(ie=r.DEPTH_COMPONENT24));const re=Le(T);xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,ie,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,ie,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ie=Le(T);F&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const ie=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],_e=s.convert(re.format,re.colorSpace),de=s.convert(re.type),ue=S(re.internalFormat,_e,de,re.colorSpace),we=Le(T);F&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ue,T.width,T.height):xe(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const ie=n.get(T.depthTexture).__webglTexture,ee=Le(T);if(T.depthTexture.format===Fr)xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(T.depthTexture.format===Gs)xe(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Oe(R){const T=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,R)}else if(F){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ue(T.__webglDepthbuffer[ie],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Ue(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(R,T,F){const ie=n.get(R);T!==void 0&&me(ie.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Oe(R)}function G(R){const T=R.texture,F=n.get(R),ie=n.get(T);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=T.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,re=R.isWebGLMultipleRenderTargets===!0,_e=p(R)||a;if(ee){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let ue=0;ue<T.mipmaps.length;ue++)F.__webglFramebuffer[de][ue]=r.createFramebuffer()}else F.__webglFramebuffer[de]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)F.__webglFramebuffer[de]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(re)if(i.drawBuffers){const de=R.texture;for(let ue=0,we=de.length;ue<we;ue++){const ke=n.get(de[ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const de=re?T:[T];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<de.length;ue++){const we=de[ue];F.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const ke=s.convert(we.format,we.colorSpace),J=s.convert(we.type),ot=S(we.internalFormat,ke,J,we.colorSpace,R.isXRRenderTarget===!0),De=Le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ot,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),$(r.TEXTURE_CUBE_MAP,T,_e);for(let de=0;de<6;de++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)me(F.__webglFramebuffer[de][ue],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ue);else me(F.__webglFramebuffer[de],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);M(T,_e)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=R.texture;for(let ue=0,we=de.length;ue<we;ue++){const ke=de[ue],J=n.get(ke);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),$(r.TEXTURE_2D,ke,_e),me(F.__webglFramebuffer,R,ke,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),M(ke,_e)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?de=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),$(de,T,_e),a&&T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)me(F.__webglFramebuffer[ue],R,T,r.COLOR_ATTACHMENT0,de,ue);else me(F.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,de,0);M(T,_e)&&v(de),t.unbindTexture()}R.depthBuffer&&Oe(R)}function Ye(R){const T=p(R)||a,F=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,ee=F.length;ie<ee;ie++){const re=F[ie];if(M(re,T)){const _e=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(re).__webglTexture;t.bindTexture(_e,de),v(_e),t.unbindTexture()}}}function ve(R){if(a&&R.samples>0&&xe(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],F=R.width,ie=R.height;let ee=r.COLOR_BUFFER_BIT;const re=[],_e=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(R),ue=R.isWebGLMultipleRenderTargets===!0;if(ue)for(let we=0;we<T.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let we=0;we<T.length;we++){re.push(r.COLOR_ATTACHMENT0+we),R.depthBuffer&&re.push(_e);const ke=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[we]),ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_e]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_e])),ue){const J=n.get(T[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,F,ie,0,0,F,ie,ee,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<T.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,de.__webglColorRenderbuffer[we]);const ke=n.get(T[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(i.maxSamples,R.samples)}function xe(R){const T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function V(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Be(R,T){const F=R.colorSpace,ie=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Vc||F!==zi&&F!==Qn&&(dt.getTransfer(F)===xt?a===!1?e.has("EXT_sRGB")===!0&&ie===li?(R.format=Vc,R.minFilter=Kn,R.generateMipmaps=!1):T=$p.sRGBToLinear(T):(ie!==li||ee!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=We,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xe}function My(r,e,t){const n=t.isWebGL2;function i(s,o=Qn){let a;const l=dt.getTransfer(o);if(s===ar)return r.UNSIGNED_BYTE;if(s===Bp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Vg)return r.BYTE;if(s===Wg)return r.SHORT;if(s===Su)return r.UNSIGNED_SHORT;if(s===Fp)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===er)return r.FLOAT;if(s===Oi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xg)return r.ALPHA;if(s===li)return r.RGBA;if(s===Yg)return r.LUMINANCE;if(s===qg)return r.LUMINANCE_ALPHA;if(s===Fr)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$g)return r.RED;if(s===kp)return r.RED_INTEGER;if(s===jg)return r.RG;if(s===Gp)return r.RG_INTEGER;if(s===Hp)return r.RGBA_INTEGER;if(s===Ol||s===Fl||s===Bl||s===zl)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sh||s===yh||s===Eh||s===Th)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Eh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bh||s===Ah)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bh)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ah)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wh||s===Rh||s===Ch||s===Ph||s===Lh||s===Dh||s===Uh||s===Ih||s===Nh||s===Oh||s===Fh||s===Bh||s===zh||s===kh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ch)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kh)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kl||s===Gh||s===Hh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kl)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kg||s===Vh||s===Wh||s===Xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Sy extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ua extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ua;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ey extends Wr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const M=[],v=[],S=new Xe;let A=null;const w=new Zn;w.layers.enable(1),w.viewport=new jt;const y=new Zn;y.layers.enable(2),y.viewport=new jt;const U=[w,y],x=new Sy;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=M[$];return K===void 0&&(K=new cc,M[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=M[$];return K===void 0&&(K=new cc,M[$]=K),K.getGripSpace()},this.getHand=function($){let K=M[$];return K===void 0&&(K=new cc,M[$]=K),K.getHandSpace()};function I($){const K=v.indexOf($.inputSource);if(K===-1)return;const ce=M[K];ce!==void 0&&(ce.update($.inputSource,$.frame,c||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",D);for(let $=0;$<M.length;$++){const K=v[$];K!==null&&(v[$]=null,M[$].disconnect(K))}E=null,z=null,e.setRenderTarget(p),h=null,d=null,f=null,i=null,m=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),m=new ci(h.framebufferWidth,h.framebufferHeight,{format:li,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ce=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Gs:Fr,ce=_.stencil?Or:Ji);const me={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new ci(d.textureWidth,d.textureHeight,{format:li,type:ar,depthTexture:new om(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(m);Ue.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D($){for(let K=0;K<$.removed.length;K++){const ce=$.removed[K],Me=v.indexOf(ce);Me>=0&&(v[Me]=null,M[Me].disconnect(ce))}for(let K=0;K<$.added.length;K++){const ce=$.added[K];let Me=v.indexOf(ce);if(Me===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=v.length){v.push(ce),Me=Ue;break}else if(v[Ue]===null){v[Ue]=ce,Me=Ue;break}if(Me===-1)break}const me=M[Me];me&&me.connect(ce)}}const O=new B,k=new B;function W($,K,ce){O.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const Me=O.distanceTo(k),me=K.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Oe=me[14]/(me[10]+1),We=(me[9]+1)/me[5],G=(me[9]-1)/me[5],Ye=(me[8]-1)/me[0],ve=(Ue[8]+1)/Ue[0],Le=Pe*Ye,xe=Pe*ve,V=Me/(-Ye+ve),Be=V*-Ye;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(V),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Pe+V,T=Oe+V,F=Le-Be,ie=xe+(Me-Be),ee=We*Oe/T*R,re=G*Oe/T*R;$.projectionMatrix.makePerspective(F,ie,ee,re,R,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function q($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;x.near=y.near=w.near=$.near,x.far=y.far=w.far=$.far,(E!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const K=$.parent,ce=x.cameras;q(x,K);for(let Me=0;Me<ce.length;Me++)q(ce[Me],K);ce.length===2?W(x,w,y):x.projectionMatrix.copy(w.projectionMatrix),j($,x,K)};function j($,K,ce){ce===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=za*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)};let C=null;function Q($,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let Me=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,Me=!0);for(let me=0;me<ce.length;me++){const Ue=ce[me];let Pe=null;if(h!==null)Pe=h.getViewport(Ue);else{const We=f.getViewSubImage(d,Ue);Pe=We.viewport,me===0&&(e.setRenderTargetTextures(m,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(m))}let Oe=U[me];Oe===void 0&&(Oe=new Zn,Oe.layers.enable(me),Oe.viewport=new jt,U[me]=Oe),Oe.matrix.fromArray(Ue.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ue.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(x.matrix.copy(Oe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Me===!0&&x.cameras.push(Oe)}}for(let ce=0;ce<M.length;ce++){const Me=v[ce],me=M[ce];Me!==null&&me!==void 0&&me.update(Me,K,c||o)}C&&C($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ae=new sm;ae.setAnimationLoop(Q),this.setAnimationLoop=function($){C=$},this.dispose=function(){}}}function Ty(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,tm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===An&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===An&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function by(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(M,A);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const v=f();M.__bindingPointIndex=v;const S=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],S=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,y=S.length;w<y;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,E=U.length;x<E;x++){const z=U[x];if(h(z,w,x,A)===!0){const I=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let D=0;for(let O=0;O<Z.length;O++){const k=Z[O],W=_(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+D,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,v,S,A){const w=M.value,y=v+"_"+S;if(A[y]===void 0)return typeof w=="number"||typeof w=="boolean"?A[y]=w:A[y]=w.clone(),!0;{const U=A[y];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return A[y]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(M){const v=M.uniforms;let S=0;const A=16;for(let y=0,U=v.length;y<U;y++){const x=Array.isArray(v[y])?v[y]:[v[y]];for(let E=0,z=x.length;E<z;E++){const I=x[E],Z=Array.isArray(I.value)?I.value:[I.value];for(let D=0,O=Z.length;D<O;D++){const k=Z[D],W=_(k),q=S%A;q!==0&&A-q<W.boundary&&(S+=A-q),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=W.storage}}}const w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class dm{constructor(e={}){const{canvas:t=y0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let S=!1,A=0,w=0,y=null,U=-1,x=null;const E=new jt,z=new jt;let I=null;const Z=new at(0);let D=0,O=t.width,k=t.height,W=1,q=null,j=null;const C=new jt(0,0,O,k),Q=new jt(0,0,O,k);let ae=!1;const $=new rm;let K=!1,ce=!1,Me=null;const me=new Lt,Ue=new Xe,Pe=new B,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return y===null?W:1}let G=n;function Ye(b,N){for(let Y=0;Y<b.length;Y++){const X=b[Y],H=t.getContext(X,N);if(H!==null)return H}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),G=Ye(N,b),G===null)throw Ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Le,xe,V,Be,R,T,F,ie,ee,re,_e,de,ue,we,ke,J,ot,De,qe,Te,ge,P,oe;function be(){ve=new NM(G),Le=new CM(G,ve,e),ve.init(Le),ge=new My(G,ve,Le),xe=new vy(G,ve,Le),V=new BM(G),Be=new ry,R=new xy(G,ve,xe,Be,Le,ge,V),T=new LM(v),F=new IM(v),ie=new Y0(G,Le),P=new wM(G,ve,ie,Le),ee=new OM(G,ie,V,P),re=new HM(G,ee,ie,V),De=new GM(G,Le,R),ke=new PM(Be),_e=new iy(v,T,F,ve,Le,P,ke),de=new Ty(v,Be),ue=new ay,we=new fy(ve,Le),ot=new AM(v,T,F,xe,re,d,l),J=new gy(v,re,Le),oe=new by(G,V,Le,xe),qe=new RM(G,ve,V,Le),Te=new FM(G,ve,V,Le),V.programs=_e.programs,v.capabilities=Le,v.extensions=ve,v.properties=Be,v.renderLists=ue,v.shadowMap=J,v.state=xe,v.info=V}be();const te=new Ey(v,G);this.xr=te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(O,k,!1))},this.getSize=function(b){return b.set(O,k)},this.setSize=function(b,N,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,k=N,t.width=Math.floor(b*W),t.height=Math.floor(N*W),Y===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(O*W,k*W).floor()},this.setDrawingBufferSize=function(b,N,Y){O=b,k=N,W=Y,t.width=Math.floor(b*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,N,Y,X){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,N,Y,X),xe.viewport(E.copy(C).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,N,Y,X){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,N,Y,X),xe.scissor(z.copy(Q).multiplyScalar(W).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){xe.setScissorTest(ae=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(b=!0,N=!0,Y=!0){let X=0;if(b){let H=!1;if(y!==null){const fe=y.texture.format;H=fe===Hp||fe===Gp||fe===kp}if(H){const fe=y.texture.type,Re=fe===ar||fe===Ji||fe===Su||fe===Or||fe===Bp||fe===zp,He=ot.getClearColor(),Ce=ot.getClearAlpha(),Ne=He.r,Ve=He.g,Ze=He.b;Re?(h[0]=Ne,h[1]=Ve,h[2]=Ze,h[3]=Ce,G.clearBufferuiv(G.COLOR,0,h)):(g[0]=Ne,g[1]=Ve,g[2]=Ze,g[3]=Ce,G.clearBufferiv(G.COLOR,0,g))}else X|=G.COLOR_BUFFER_BIT}N&&(X|=G.DEPTH_BUFFER_BIT),Y&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),we.dispose(),Be.dispose(),T.dispose(),F.dispose(),re.dispose(),P.dispose(),oe.dispose(),_e.dispose(),te.dispose(),te.removeEventListener("sessionstart",Se),te.removeEventListener("sessionend",Ae),Me&&(Me.dispose(),Me=null),le.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=V.autoReset,N=J.enabled,Y=J.autoUpdate,X=J.needsUpdate,H=J.type;be(),V.autoReset=b,J.enabled=N,J.autoUpdate=Y,J.needsUpdate=X,J.type=H}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){const N=b.target;N.removeEventListener("dispose",he),Fe(N)}function Fe(b){Ie(b),Be.remove(b)}function Ie(b){const N=Be.get(b).programs;N!==void 0&&(N.forEach(function(Y){_e.releaseProgram(Y)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Y,X,H,fe){N===null&&(N=Oe);const Re=H.isMesh&&H.matrixWorld.determinant()<0,He=vt(b,N,Y,X,H);xe.setMaterial(X,Re);let Ce=Y.index,Ne=1;if(X.wireframe===!0){if(Ce=ee.getWireframeAttribute(Y),Ce===void 0)return;Ne=2}const Ve=Y.drawRange,Ze=Y.attributes.position;let St=Ve.start*Ne,Ft=(Ve.start+Ve.count)*Ne;fe!==null&&(St=Math.max(St,fe.start*Ne),Ft=Math.min(Ft,(fe.start+fe.count)*Ne)),Ce!==null?(St=Math.max(St,0),Ft=Math.min(Ft,Ce.count)):Ze!=null&&(St=Math.max(St,0),Ft=Math.min(Ft,Ze.count));const ht=Ft-St;if(ht<0||ht===1/0)return;P.setup(H,X,He,Y,Ce);let cn,pt=qe;if(Ce!==null&&(cn=ie.get(Ce),pt=Te,pt.setIndex(cn)),H.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*We()),pt.setMode(G.LINES)):pt.setMode(G.TRIANGLES);else if(H.isLine){let $e=X.linewidth;$e===void 0&&($e=1),xe.setLineWidth($e*We()),H.isLineSegments?pt.setMode(G.LINES):H.isLineLoop?pt.setMode(G.LINE_LOOP):pt.setMode(G.LINE_STRIP)}else H.isPoints?pt.setMode(G.POINTS):H.isSprite&&pt.setMode(G.TRIANGLES);if(H.isBatchedMesh)pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)pt.renderInstances(St,ht,H.count);else if(Y.isInstancedBufferGeometry){const $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,gl=Math.min(Y.instanceCount,$e);pt.renderInstances(St,ht,gl)}else pt.render(St,ht)};function je(b,N,Y){b.transparent===!0&&b.side===Ci&&b.forceSinglePass===!1?(b.side=An,b.needsUpdate=!0,gt(b,N,Y),b.side=hr,b.needsUpdate=!0,gt(b,N,Y),b.side=Ci):gt(b,N,Y)}this.compile=function(b,N,Y=null){Y===null&&(Y=b),p=we.get(Y),p.init(),M.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),b!==Y&&b.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const X=new Set;return b.traverse(function(H){const fe=H.material;if(fe)if(Array.isArray(fe))for(let Re=0;Re<fe.length;Re++){const He=fe[Re];je(He,Y,H),X.add(He)}else je(fe,Y,H),X.add(fe)}),M.pop(),p=null,X},this.compileAsync=function(b,N,Y=null){const X=this.compile(b,N,Y);return new Promise(H=>{function fe(){if(X.forEach(function(Re){Be.get(Re).currentProgram.isReady()&&X.delete(Re)}),X.size===0){H(b);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Qe=null;function ye(b){Qe&&Qe(b)}function Se(){le.stop()}function Ae(){le.start()}const le=new sm;le.setAnimationLoop(ye),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(b){Qe=b,te.setAnimationLoop(b),b===null?le.stop():le.start()},te.addEventListener("sessionstart",Se),te.addEventListener("sessionend",Ae),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,y),p=we.get(b,M.length),p.init(),M.push(p),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(me),ce=this.localClippingEnabled,K=ke.init(this.clippingPlanes,ce),_=ue.get(b,m.length),_.init(),m.push(_),Ge(b,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,j),this.info.render.frame++,K===!0&&ke.beginShadows();const Y=p.state.shadowsArray;if(J.render(Y,b,N),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(_,b),p.setupLights(v._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let H=0,fe=X.length;H<fe;H++){const Re=X[H];ze(_,b,Re,Re.viewport)}}else ze(_,b,N);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(v,b,N),P.resetDefaultState(),U=-1,x=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ge(b,N,Y,X){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){X&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Re=re.update(b),He=b.material;He.visible&&_.push(b,Re,He,Y,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Re=re.update(b),He=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Pe.copy(Re.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(He)){const Ce=Re.groups;for(let Ne=0,Ve=Ce.length;Ne<Ve;Ne++){const Ze=Ce[Ne],St=He[Ze.materialIndex];St&&St.visible&&_.push(b,Re,St,Y,Pe.z,Ze)}}else He.visible&&_.push(b,Re,He,Y,Pe.z,null)}}const fe=b.children;for(let Re=0,He=fe.length;Re<He;Re++)Ge(fe[Re],N,Y,X)}function ze(b,N,Y,X){const H=b.opaque,fe=b.transmissive,Re=b.transparent;p.setupLightsView(Y),K===!0&&ke.setGlobalState(v.clippingPlanes,Y),fe.length>0&&Ke(H,fe,N,Y),X&&xe.viewport(E.copy(X)),H.length>0&&Et(H,N,Y),fe.length>0&&Et(fe,N,Y),Re.length>0&&Et(Re,N,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ke(b,N,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const fe=Le.isWebGL2;Me===null&&(Me=new ci(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Oi:ar,minFilter:Ba,samples:fe?4:0})),v.getDrawingBufferSize(Ue),fe?Me.setSize(Ue.x,Ue.y):Me.setSize(sl(Ue.x),sl(Ue.y));const Re=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(Z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=sr,Et(b,Y,X),R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me);let Ce=!1;for(let Ne=0,Ve=N.length;Ne<Ve;Ne++){const Ze=N[Ne],St=Ze.object,Ft=Ze.geometry,ht=Ze.material,cn=Ze.group;if(ht.side===Ci&&St.layers.test(X.layers)){const pt=ht.side;ht.side=An,ht.needsUpdate=!0,nt(St,Y,X,Ft,ht,cn),ht.side=pt,ht.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me)),v.setRenderTarget(Re),v.setClearColor(Z,D),v.toneMapping=He}function Et(b,N,Y){const X=N.isScene===!0?N.overrideMaterial:null;for(let H=0,fe=b.length;H<fe;H++){const Re=b[H],He=Re.object,Ce=Re.geometry,Ne=X===null?Re.material:X,Ve=Re.group;He.layers.test(Y.layers)&&nt(He,N,Y,Ce,Ne,Ve)}}function nt(b,N,Y,X,H,fe){b.onBeforeRender(v,N,Y,X,H,fe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,N,Y,X,b,fe),H.transparent===!0&&H.side===Ci&&H.forceSinglePass===!1?(H.side=An,H.needsUpdate=!0,v.renderBufferDirect(Y,N,X,H,b,fe),H.side=hr,H.needsUpdate=!0,v.renderBufferDirect(Y,N,X,H,b,fe),H.side=Ci):v.renderBufferDirect(Y,N,X,H,b,fe),b.onAfterRender(v,N,Y,X,H,fe)}function gt(b,N,Y){N.isScene!==!0&&(N=Oe);const X=Be.get(b),H=p.state.lights,fe=p.state.shadowsArray,Re=H.state.version,He=_e.getParameters(b,H.state,fe,N,Y),Ce=_e.getProgramCacheKey(He);let Ne=X.programs;X.environment=b.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(b.isMeshStandardMaterial?F:T).get(b.envMap||X.environment),Ne===void 0&&(b.addEventListener("dispose",he),Ne=new Map,X.programs=Ne);let Ve=Ne.get(Ce);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Re)return Mt(b,He),Ve}else He.uniforms=_e.getUniforms(b),b.onBuild(Y,He,v),b.onBeforeCompile(He,v),Ve=_e.acquireProgram(He,Ce),Ne.set(Ce,Ve),X.uniforms=He.uniforms;const Ze=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=ke.uniform),Mt(b,He),X.needsLights=Cn(b),X.lightsStateVersion=Re,X.needsLights&&(Ze.ambientLightColor.value=H.state.ambient,Ze.lightProbe.value=H.state.probe,Ze.directionalLights.value=H.state.directional,Ze.directionalLightShadows.value=H.state.directionalShadow,Ze.spotLights.value=H.state.spot,Ze.spotLightShadows.value=H.state.spotShadow,Ze.rectAreaLights.value=H.state.rectArea,Ze.ltc_1.value=H.state.rectAreaLTC1,Ze.ltc_2.value=H.state.rectAreaLTC2,Ze.pointLights.value=H.state.point,Ze.pointLightShadows.value=H.state.pointShadow,Ze.hemisphereLights.value=H.state.hemi,Ze.directionalShadowMap.value=H.state.directionalShadowMap,Ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ze.spotShadowMap.value=H.state.spotShadowMap,Ze.spotLightMatrix.value=H.state.spotLightMatrix,Ze.spotLightMap.value=H.state.spotLightMap,Ze.pointShadowMap.value=H.state.pointShadowMap,Ze.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Ot(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Ho.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Mt(b,N){const Y=Be.get(b);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function vt(b,N,Y,X,H){N.isScene!==!0&&(N=Oe),R.resetTextureUnits();const fe=N.fog,Re=X.isMeshStandardMaterial?N.environment:null,He=y===null?v.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:zi,Ce=(X.isMeshStandardMaterial?F:T).get(X.envMap||Re),Ne=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ze=!!Y.morphAttributes.position,St=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color;let ht=sr;X.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ht=v.toneMapping);const cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=cn!==void 0?cn.length:0,$e=Be.get(X),gl=p.state.lights;if(K===!0&&(ce===!0||b!==x)){const Wn=b===x&&X.id===U;ke.setState(X,b,Wn)}let wt=!1;X.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==gl.state.version||$e.outputColorSpace!==He||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||$e.envMap!==Ce||X.fog===!0&&$e.fog!==fe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ke.numPlanes||$e.numIntersection!==ke.numIntersection)||$e.vertexAlphas!==Ne||$e.vertexTangents!==Ve||$e.morphTargets!==Ze||$e.morphNormals!==St||$e.morphColors!==Ft||$e.toneMapping!==ht||Le.isWebGL2===!0&&$e.morphTargetsCount!==pt)&&(wt=!0):(wt=!0,$e.__version=X.version);let dr=$e.currentProgram;wt===!0&&(dr=gt(X,N,H));let Cu=!1,js=!1,vl=!1;const Zt=dr.getUniforms(),pr=$e.uniforms;if(xe.useProgram(dr.program)&&(Cu=!0,js=!0,vl=!0),X.id!==U&&(U=X.id,js=!0),Cu||x!==b){Zt.setValue(G,"projectionMatrix",b.projectionMatrix),Zt.setValue(G,"viewMatrix",b.matrixWorldInverse);const Wn=Zt.map.cameraPosition;Wn!==void 0&&Wn.setValue(G,Pe.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&Zt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,js=!0,vl=!0)}if(H.isSkinnedMesh){Zt.setOptional(G,H,"bindMatrix"),Zt.setOptional(G,H,"bindMatrixInverse");const Wn=H.skeleton;Wn&&(Le.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Zt.setValue(G,"boneTexture",Wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Zt.setOptional(G,H,"batchingTexture"),Zt.setValue(G,"batchingTexture",H._matricesTexture,R));const xl=Y.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&Le.isWebGL2===!0)&&De.update(H,Y,dr),(js||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,Zt.setValue(G,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pr.envMap.value=Ce,pr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),js&&(Zt.setValue(G,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&ut(pr,vl),fe&&X.fog===!0&&de.refreshFogUniforms(pr,fe),de.refreshMaterialUniforms(pr,X,W,k,Me),Ho.upload(G,Ot($e),pr,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ho.upload(G,Ot($e),pr,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(G,"center",H.center),Zt.setValue(G,"modelViewMatrix",H.modelViewMatrix),Zt.setValue(G,"normalMatrix",H.normalMatrix),Zt.setValue(G,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wn=X.uniformsGroups;for(let Ml=0,Mm=Wn.length;Ml<Mm;Ml++)if(Le.isWebGL2){const Pu=Wn[Ml];oe.update(Pu,dr),oe.bind(Pu,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function ut(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Cn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,N,Y){Be.get(b.texture).__webglTexture=N,Be.get(b.depthTexture).__webglTexture=Y;const X=Be.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const Y=Be.get(b);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Y=0){y=b,A=N,w=Y;let X=!0,H=null,fe=!1,Re=!1;if(b){const Ce=Be.get(b);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(b):Ce.__hasExternalTextures&&R.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Ve=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[N])?H=Ve[N][Y]:H=Ve[N],fe=!0):Le.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?H=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[Y]:H=Ve,E.copy(b.viewport),z.copy(b.scissor),I=b.scissorTest}else E.copy(C).multiplyScalar(W).floor(),z.copy(Q).multiplyScalar(W).floor(),I=ae;if(xe.bindFramebuffer(G.FRAMEBUFFER,H)&&Le.drawBuffers&&X&&xe.drawBuffers(b,H),xe.viewport(E),xe.scissor(z),xe.setScissorTest(I),fe){const Ce=Be.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,Y)}else if(Re){const Ce=Be.get(b.texture),Ne=N||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,Ne)}U=-1},this.readRenderTargetPixels=function(b,N,Y,X,H,fe,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(He=He[Re]),He){xe.bindFramebuffer(G.FRAMEBUFFER,He);try{const Ce=b.texture,Ne=Ce.format,Ve=Ce.type;if(Ne!==li&&ge.convert(Ne)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=Ve===Oi&&(ve.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ve!==ar&&ge.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===er&&(Le.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-X&&Y>=0&&Y<=b.height-H&&G.readPixels(N,Y,X,H,ge.convert(Ne),ge.convert(Ve),fe)}finally{const Ce=y!==null?Be.get(y).__webglFramebuffer:null;xe.bindFramebuffer(G.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,N,Y=0){const X=Math.pow(2,-Y),H=Math.floor(N.image.width*X),fe=Math.floor(N.image.height*X);R.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,b.x,b.y,H,fe),xe.unbindTexture()},this.copyTextureToTexture=function(b,N,Y,X=0){const H=N.image.width,fe=N.image.height,Re=ge.convert(Y.format),He=ge.convert(Y.type);R.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,b.x,b.y,H,fe,Re,He,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Re,N.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,b.x,b.y,Re,He,N.image),X===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,Y,X,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,He=b.max.z-b.min.z+1,Ce=ge.convert(X.format),Ne=ge.convert(X.type);let Ve;if(X.isData3DTexture)R.setTexture3D(X,0),Ve=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),Ve=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Ze=G.getParameter(G.UNPACK_ROW_LENGTH),St=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ft=G.getParameter(G.UNPACK_SKIP_PIXELS),ht=G.getParameter(G.UNPACK_SKIP_ROWS),cn=G.getParameter(G.UNPACK_SKIP_IMAGES),pt=Y.isCompressedTexture?Y.mipmaps[H]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,pt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(Ve,H,N.x,N.y,N.z,fe,Re,He,Ce,Ne,pt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ve,H,N.x,N.y,N.z,fe,Re,He,Ce,pt.data)):G.texSubImage3D(Ve,H,N.x,N.y,N.z,fe,Re,He,Ce,Ne,pt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ft),G.pixelStorei(G.UNPACK_SKIP_ROWS,ht),G.pixelStorei(G.UNPACK_SKIP_IMAGES,cn),H===0&&X.generateMipmaps&&G.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){A=0,w=0,y=null,xe.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yu?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===fl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Br:Wp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Br?Xt:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ay extends dm{}Ay.prototype.isWebGL1Renderer=!0;class wu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(e),this.density=t}clone(){return new wu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wy extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pm extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nf=new B,Of=new B,Ff=new Lt,uc=new dl,Ro=new Va;class Ry extends ln{constructor(e=new Vn,t=new pm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Nf.fromBufferAttribute(t,i-1),Of.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Nf.distanceTo(Of);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Ff.copy(i).invert(),uc.copy(e.ray).applyMatrix4(Ff);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,f=new B,d=new B,h=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=h){const A=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,w),uc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=m,S=M-1;v<S;v+=h){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),uc.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Bf=new B,zf=new B;class Cy extends Ry{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bf.fromBufferAttribute(t,i),zf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bf.distanceTo(zf);e.setAttribute("lineDistance",new ui(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mm extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kf=new Lt,Yc=new dl,Co=new Va,Po=new B;class _m extends ln{constructor(e=new Vn,t=new mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;kf.copy(i).invert(),Yc.copy(e.ray).applyMatrix4(kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);Po.fromBufferAttribute(f,p),Gf(Po,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Po.fromBufferAttribute(f,g),Gf(Po,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gf(r,e,t,n,i,s,o){const a=Yc.distanceSqToPoint(r);if(a<t){const l=new B;Yc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Py extends wn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ly extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hf(){return(typeof performance>"u"?Date:performance).now()}class Vf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const Wf={type:"change"},hc={type:"start"},Xf={type:"end"},Lo=new dl,Yf=new qi,Dy=Math.cos(70*Yp.DEG2RAD);class Uy extends Wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",we),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wf),n.update(),s=i.NONE},this.update=function(){const P=new B,oe=new Hr().setFromUnitVectors(e.up,new B(0,1,0)),be=oe.clone().invert(),te=new B,ne=new Hr,L=new B,se=2*Math.PI;return function(Fe=null){const Ie=n.object.position;P.copy(Ie).sub(n.target),P.applyQuaternion(oe),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&I(E(Fe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let je=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;isFinite(je)&&isFinite(Qe)&&(je<-Math.PI?je+=se:je>Math.PI&&(je-=se),Qe<-Math.PI?Qe+=se:Qe>Math.PI&&(Qe-=se),je<=Qe?a.theta=Math.max(je,Math.min(Qe,a.theta)):a.theta=a.theta>(je+Qe)/2?Math.max(je,a.theta):Math.min(Qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=C(a.radius):a.radius=C(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(be),Ie.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ye=!1;if(n.zoomToCursor&&w){let Se=null;if(n.object.isPerspectiveCamera){const Ae=P.length();Se=C(Ae*c);const le=Ae-Se;n.object.position.addScaledVector(S,le),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ae=new B(A.x,A.y,0);Ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0;const le=new B(A.x,A.y,0);le.unproject(n.object),n.object.position.sub(le).add(Ae),n.object.updateMatrixWorld(),Se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(Lo.origin.copy(n.object.position),Lo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Lo.direction))<Dy?e.lookAt(n.target):(Yf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Lo.intersectPlane(Yf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0);return c=1,w=!1,ye||te.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Wf),te.copy(n.object.position),ne.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ot),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",we),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Vf,l=new Vf;let c=1;const u=new B,f=new Xe,d=new Xe,h=new Xe,g=new Xe,_=new Xe,p=new Xe,m=new Xe,M=new Xe,v=new Xe,S=new B,A=new Xe;let w=!1;const y=[],U={};let x=!1;function E(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function z(P){const oe=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*oe)}function I(P){l.theta-=P}function Z(P){l.phi-=P}const D=function(){const P=new B;return function(be,te){P.setFromMatrixColumn(te,0),P.multiplyScalar(-be),u.add(P)}}(),O=function(){const P=new B;return function(be,te){n.screenSpacePanning===!0?P.setFromMatrixColumn(te,1):(P.setFromMatrixColumn(te,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(be),u.add(P)}}(),k=function(){const P=new B;return function(be,te){const ne=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;P.copy(L).sub(n.target);let se=P.length();se*=Math.tan(n.object.fov/2*Math.PI/180),D(2*be*se/ne.clientHeight,n.object.matrix),O(2*te*se/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(be*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),O(te*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P,oe){if(!n.zoomToCursor)return;w=!0;const be=n.domElement.getBoundingClientRect(),te=P-be.left,ne=oe-be.top,L=be.width,se=be.height;A.x=te/L*2-1,A.y=-(ne/se)*2+1,S.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function C(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function Q(P){f.set(P.clientX,P.clientY)}function ae(P){j(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function $(P){g.set(P.clientX,P.clientY)}function K(P){d.set(P.clientX,P.clientY),h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const oe=n.domElement;I(2*Math.PI*h.x/oe.clientHeight),Z(2*Math.PI*h.y/oe.clientHeight),f.copy(d),n.update()}function ce(P){M.set(P.clientX,P.clientY),v.subVectors(M,m),v.y>0?W(z(v.y)):v.y<0&&q(z(v.y)),m.copy(M),n.update()}function Me(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(_),n.update()}function me(P){j(P.clientX,P.clientY),P.deltaY<0?q(z(P.deltaY)):P.deltaY>0&&W(z(P.deltaY)),n.update()}function Ue(P){let oe=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),oe=!0;break}oe&&(P.preventDefault(),n.update())}function Pe(P){if(y.length===1)f.set(P.pageX,P.pageY);else{const oe=ge(P),be=.5*(P.pageX+oe.x),te=.5*(P.pageY+oe.y);f.set(be,te)}}function Oe(P){if(y.length===1)g.set(P.pageX,P.pageY);else{const oe=ge(P),be=.5*(P.pageX+oe.x),te=.5*(P.pageY+oe.y);g.set(be,te)}}function We(P){const oe=ge(P),be=P.pageX-oe.x,te=P.pageY-oe.y,ne=Math.sqrt(be*be+te*te);m.set(0,ne)}function G(P){n.enableZoom&&We(P),n.enablePan&&Oe(P)}function Ye(P){n.enableZoom&&We(P),n.enableRotate&&Pe(P)}function ve(P){if(y.length==1)d.set(P.pageX,P.pageY);else{const be=ge(P),te=.5*(P.pageX+be.x),ne=.5*(P.pageY+be.y);d.set(te,ne)}h.subVectors(d,f).multiplyScalar(n.rotateSpeed);const oe=n.domElement;I(2*Math.PI*h.x/oe.clientHeight),Z(2*Math.PI*h.y/oe.clientHeight),f.copy(d)}function Le(P){if(y.length===1)_.set(P.pageX,P.pageY);else{const oe=ge(P),be=.5*(P.pageX+oe.x),te=.5*(P.pageY+oe.y);_.set(be,te)}p.subVectors(_,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(_)}function xe(P){const oe=ge(P),be=P.pageX-oe.x,te=P.pageY-oe.y,ne=Math.sqrt(be*be+te*te);M.set(0,ne),v.set(0,Math.pow(M.y/m.y,n.zoomSpeed)),W(v.y),m.copy(M);const L=(P.pageX+oe.x)*.5,se=(P.pageY+oe.y)*.5;j(L,se)}function V(P){n.enableZoom&&xe(P),n.enablePan&&Le(P)}function Be(P){n.enableZoom&&xe(P),n.enableRotate&&ve(P)}function R(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",F)),De(P),P.pointerType==="touch"?ke(P):ie(P))}function T(P){n.enabled!==!1&&(P.pointerType==="touch"?J(P):ee(P))}function F(P){qe(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(Xf),s=i.NONE}function ie(P){let oe;switch(P.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case jr.DOLLY:if(n.enableZoom===!1)return;ae(P),s=i.DOLLY;break;case jr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;$(P),s=i.PAN}else{if(n.enableRotate===!1)return;Q(P),s=i.ROTATE}break;case jr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Q(P),s=i.ROTATE}else{if(n.enablePan===!1)return;$(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(hc)}function ee(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ce(P);break;case i.PAN:if(n.enablePan===!1)return;Me(P);break}}function re(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(hc),me(_e(P)),n.dispatchEvent(Xf))}function _e(P){const oe=P.deltaMode,be={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(oe){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return P.ctrlKey&&!x&&(be.deltaY*=10),be}function de(P){P.key==="Control"&&(x=!0,document.addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(P){P.key==="Control"&&(x=!1,document.removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function we(P){n.enabled===!1||n.enablePan===!1||Ue(P)}function ke(P){switch(Te(P),y.length){case 1:switch(n.touches.ONE){case Kr.ROTATE:if(n.enableRotate===!1)return;Pe(P),s=i.TOUCH_ROTATE;break;case Kr.PAN:if(n.enablePan===!1)return;Oe(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(P),s=i.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(hc)}function J(P){switch(Te(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Le(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(P),n.update();break;default:s=i.NONE}}function ot(P){n.enabled!==!1&&P.preventDefault()}function De(P){y.push(P.pointerId)}function qe(P){delete U[P.pointerId];for(let oe=0;oe<y.length;oe++)if(y[oe]==P.pointerId){y.splice(oe,1);return}}function Te(P){let oe=U[P.pointerId];oe===void 0&&(oe=new Xe,U[P.pointerId]=oe),oe.set(P.pageX,P.pageY)}function ge(P){const oe=P.pointerId===y[0]?y[1]:y[0];return U[oe]}n.domElement.addEventListener("contextmenu",ot),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}class Iy extends ln{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Xe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const ds=new B,qf=new Lt,$f=new Lt,jf=new B,Kf=new B;class Ny{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(h,g){h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),qf.copy(g.matrixWorldInverse),$f.multiplyMatrices(g.projectionMatrix,qf),c(h,h,g),d(h)},this.setSize=function(h,g){n=h,i=g,s=n/2,o=i/2,l.style.width=h+"px",l.style.height=g+"px"};function c(h,g,_){if(h.isCSS2DObject){ds.setFromMatrixPosition(h.matrixWorld),ds.applyMatrix4($f);const p=h.visible===!0&&ds.z>=-1&&ds.z<=1&&h.layers.test(_.layers)===!0;if(h.element.style.display=p===!0?"":"none",p===!0){h.onBeforeRender(t,g,_);const M=h.element;M.style.transform="translate("+-100*h.center.x+"%,"+-100*h.center.y+"%)translate("+(ds.x*s+s)+"px,"+(-ds.y*o+o)+"px)",M.parentNode!==l&&l.appendChild(M),h.onAfterRender(t,g,_)}const m={distanceToCameraSquared:u(_,h)};a.objects.set(h,m)}for(let p=0,m=h.children.length;p<m;p++)c(h.children[p],g,_)}function u(h,g){return jf.setFromMatrixPosition(h.matrixWorld),Kf.setFromMatrixPosition(g.matrixWorld),jf.distanceToSquared(Kf)}function f(h){const g=[];return h.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(h){const g=f(h).sort(function(p,m){if(p.renderOrder!==m.renderOrder)return m.renderOrder-p.renderOrder;const M=a.objects.get(p).distanceToCameraSquared,v=a.objects.get(m).distanceToCameraSquared;return M-v}),_=g.length;for(let p=0,m=g.length;p<m;p++)g[p].element.style.zIndex=_-p}}}const vm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class $s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Oy=new am(-1,1,1,-1,0,1);class Fy extends Vn{constructor(){super(),this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui([0,2,0,0,2,0],2))}}const By=new Fy;class Ru{constructor(e){this._mesh=new Di(By,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Oy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zy extends $s{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ka.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ru(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Zf extends $s{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class ky extends $s{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Xe);this._width=n.width,this._height=n.height,t=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zy(vm),this.copyPass.material.blending=Ni,this.clock=new gm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zf!==void 0&&(o instanceof Zf?n=!0:o instanceof ky&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Hy extends $s{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Vy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vs extends $s{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(s,o,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new ci(s,o,{type:Oi});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new ci(s,o,{type:Oi});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=Vy;this.highPassUniforms=ka.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Xe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=vm;this.copyUniforms=ka.clone(u.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new Tu,this.fsQuad=new Ru(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Xe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Vs.BlurDirectionX=new Xe(1,0);Vs.BlurDirectionY=new Xe(0,1);const Wy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Xy extends $s{constructor(){super();const e=Wy;this.uniforms=ka.clone(e.uniforms),this.material=new Ly({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ru(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Up?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ip?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Np&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yy{constructor(e,{reducedMotion:t=!1}={}){this.container=e,this.reduced=t,this.systems=[],this.pointer=new Xe(-10,-10),this._tx=0,this._ty=0,this._px=0,this._py=0,this.clock=new gm,this.renderer=new dm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Mu,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.labelRenderer=new Ny,Object.assign(this.labelRenderer.domElement.style,{position:"absolute",top:"0",left:"0",pointerEvents:"none"}),e.appendChild(this.labelRenderer.domElement),this.scene=new wy,this.scene.background=this._gradientBackground(),this.scene.fog=new wu(329743,.05),this.camera=new Zn(50,1,.1,100),this.camera.position.set(0,0,7.5),this.controls=new Uy(this.camera,this.renderer.domElement),Object.assign(this.controls,{enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.1,rotateSpeed:1.5,autoRotate:!this.reduced,autoRotateSpeed:1.3}),this._addDust(),this.composer=new Gy(this.renderer),this.composer.addPass(new Hy(this.scene,this.camera)),this.bloom=new Vs(new Xe(1,1),.85,.5,0),this.composer.addPass(this.bloom),this.composer.addPass(new Xy),this.renderer.domElement.addEventListener("pointermove",n=>{const i=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(n.clientX-i.left)/i.width*2-1,this.pointer.y=-((n.clientY-i.top)/i.height*2-1),this._px=this.pointer.x,this._py=this.pointer.y}),window.addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.setAnimationLoop(()=>this.tick())}_gradientBackground(){const e=document.createElement("canvas");e.width=4,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#0c1530"),n.addColorStop(.45,"#070d1c"),n.addColorStop(1,"#03060d"),t.fillStyle=n,t.fillRect(0,0,4,512);const i=new Py(e);return i.colorSpace=Xt,i}_addDust(){const t=new Float32Array(1560);for(let i=0;i<520;i++){const s=6+Math.random()*9,o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);t[i*3]=s*Math.sin(a)*Math.cos(o),t[i*3+1]=s*Math.sin(a)*Math.sin(o),t[i*3+2]=s*Math.cos(a)}const n=new Vn;n.setAttribute("position",new qt(t,3)),this.dust=new _m(n,new mm({color:3494010,size:.03,sizeAttenuation:!0,transparent:!0,opacity:.55,depthWrite:!1,blending:Bs})),this.scene.add(this.dust)}add(e){this.systems.push(e),e.object3d&&this.scene.add(e.object3d)}resize(){var n;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.bloom.setSize(e,t),this.labelRenderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const i of this.systems)(n=i.onResize)==null||n.call(i,this)}tick(){var n;const e=this.clock.getDelta(),t=this.clock.elapsedTime;this.controls.update(),this.reduced||(this._tx+=(this._px-this._tx)*.06,this._ty+=(this._py-this._ty)*.06,this.camera.rotateY(this._tx*.1),this.camera.rotateX(-this._ty*.1)),this.dust&&!this.reduced&&(this.dust.rotation.y+=e*.01);for(const i of this.systems)(n=i.update)==null||n.call(i,t,e,this);this.composer.render(),this.labelRenderer.render(this.scene,this.camera)}}function qy(r,e=7){const t=new Float32Array(r*3);for(let n=0;n<r;n++){const i=e*Math.cbrt(Math.random()),s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);t[n*3]=i*Math.sin(o)*Math.cos(s),t[n*3+1]=i*Math.sin(o)*Math.sin(s),t[n*3+2]=i*Math.cos(o)}return t}function Qf(r,e,t={}){const n=t.fontSize||240,i=document.createElement("canvas"),s=i.getContext("2d"),o=`900 ${n}px Arial, sans-serif`;s.font=o;const a=Math.ceil(s.measureText(r).width)+60,l=Math.ceil(n*1.3);i.width=a,i.height=l,s.fillStyle="#fff",s.font=o,s.textAlign="center",s.textBaseline="middle",s.fillText(r,a/2,l/2);const c=s.getImageData(0,0,a,l).data,u=[];for(let h=0;h<l;h+=2)for(let g=0;g<a;g+=2)c[(h*a+g)*4+3]>128&&u.push([g,h]);const f=new Float32Array(e*3),d=6.4/a;for(let h=0;h<e;h++){const g=u.length?u[Math.floor(Math.random()*u.length)]:[a/2,l/2];f[h*3]=(g[0]-a/2)*d,f[h*3+1]=-(g[1]-l/2)*d,f[h*3+2]=(Math.random()-.5)*.6}return f}const $y=`
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uMotion;
  varying vec3 vColor;
  varying float vFade;
  // Continuous colour flow that also CYCLES between palettes over time.
  // ph = per-particle flow phase, pt = slow palette-cycle phase.
  vec3 paletteFlow(float ph, float pt) {
    vec3 A0 = vec3(0.13, 0.83, 1.0);  vec3 A1 = vec3(0.49, 0.36, 1.0);  vec3 A2 = vec3(1.0, 0.30, 0.62); // Aurora
    vec3 B0 = vec3(0.0, 0.95, 0.75);  vec3 B1 = vec3(0.20, 0.55, 1.0);  vec3 B2 = vec3(1.0, 0.82, 0.25); // Plasma
    vec3 C0 = vec3(1.0, 0.18, 0.59);  vec3 C1 = vec3(0.55, 0.23, 0.93); vec3 C2 = vec3(0.16, 0.83, 1.0); // Synthwave
    float k = fract(pt) * 3.0;
    vec3 c0, c1, c2;
    if (k < 1.0)      { float f = k;        c0 = mix(A0, B0, f); c1 = mix(A1, B1, f); c2 = mix(A2, B2, f); }
    else if (k < 2.0) { float f = k - 1.0;  c0 = mix(B0, C0, f); c1 = mix(B1, C1, f); c2 = mix(B2, C2, f); }
    else              { float f = k - 2.0;  c0 = mix(C0, A0, f); c1 = mix(C1, A1, f); c2 = mix(C2, A2, f); }
    float seg = fract(ph) * 3.0;
    if (seg < 1.0) return mix(c0, c1, seg);
    if (seg < 2.0) return mix(c1, c2, seg - 1.0);
    return mix(c2, c0, seg - 2.0);
  }
  void main() {
    vColor = paletteFlow(aSeed * 0.7 + uTime * 0.05 * uMotion, uTime * 0.02 * uMotion);
    vec3 p = position;
    float ph = aSeed * 6.2831853;
    p.x += sin(uTime * 0.45 + ph) * 0.04 * uMotion;
    p.y += cos(uTime * 0.40 + ph * 1.3) * 0.04 * uMotion;
    p.z += sin(uTime * 0.35 + ph * 0.7) * 0.04 * uMotion;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float depth = -mv.z;
    vFade = smoothstep(15.0, 4.0, depth);
    gl_PointSize = aSize * uPixelRatio * (9.0 / depth);
    gl_Position = projectionMatrix * mv;
  }
`,jy=`
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.5, 0.12, d);
    vec3 col = vColor * (0.5 + core);
    gl_FragColor = vec4(col, alpha * mix(0.25, 1.0, vFade) * uOpacity);
  }
`;class Ky{constructor(e,{count:t=1900,reducedMotion:n=!1}={}){this.object3d=new ua,this.count=t,this.nodes=e.nodes,this.NH=this.nodes.length,this.hovered=-1,this.labelStrength=0,this.introFactor=1,this._proj=new B,this._build(e,n)}_build(e,t){const n=e.categories,i=["manager","techlead","ai"],s=this.count,o=this.NH;this.hubIndices=[];for(let A=0;A<o;A++)this.hubIndices.push(Math.min(s-1,Math.floor((A+.5)*(s/o))));const a=new Set(this.hubIndices),l={};this.hubIndices.forEach((A,w)=>l[A]=w);const c=this._buildNeural(s,o,a);this.shapes=[qy(s,7),c,Qf("GT",s,{fontSize:280}),Qf("LET'S BUILD",s,{fontSize:150})];const u=new Float32Array(this.shapes[0]),f=new Float32Array(s*3),d=new Float32Array(s),h=new Float32Array(s),g=new at;for(let A=0;A<s;A++){const w=a.has(A),y=w?this.nodes[l[A]].cat:i[A%3];g.set(n[y]||"#9fb4ff"),w||g.multiplyScalar(.85),f[A*3]=g.r,f[A*3+1]=g.g,f[A*3+2]=g.b,d[A]=w?26:6.5,h[A]=Math.random()}this.sizesBase=d.slice();const _=new Vn;_.setAttribute("position",new qt(u,3)),_.setAttribute("aColor",new qt(f,3)),_.setAttribute("aSize",new qt(d,1)),_.setAttribute("aSeed",new qt(h,1)),this.pointGeo=_,this.material=new xn({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uMotion:{value:t?0:1},uOpacity:{value:1}},vertexShader:$y,fragmentShader:jy,transparent:!0,depthWrite:!1,blending:Bs}),this.points=new _m(_,this.material),this.object3d.add(this.points);const p=this.edges.length;this.edgePos=new Float32Array(p*2*3);const m=new Float32Array(p*2*3),M=new at,v=new at;for(let A=0;A<p;A++){const[w,y]=this.edges[A];M.set(n[this.nodes[w].cat]||"#9fb4ff").multiplyScalar(.55),v.set(n[this.nodes[y].cat]||"#9fb4ff").multiplyScalar(.55),m.set([M.r,M.g,M.b,v.r,v.g,v.b],A*6)}this.edgeBaseColors=m.slice(),this.edgeColors=m;const S=new Vn;S.setAttribute("position",new qt(this.edgePos,3)),S.setAttribute("color",new qt(m,3)),this.lineGeo=S,this.lines=new Cy(S,new pm({vertexColors:!0,transparent:!0,opacity:.6,blending:Bs,depthWrite:!1})),this.object3d.add(this.lines),this.labels=[];for(let A=0;A<o;A++){const w=document.createElement("div");w.className="kg-label"+(this.nodes[A].hub?" kg-label--hub":""),w.textContent=this.nodes[A].label;const y=new Iy(w);this.object3d.add(y),this.labels.push({el:w,obj:y})}}_buildNeural(e,t,n){const i=[4,6,5,3],s=[-2.9,-.97,.97,2.9],o=[],a=[];for(let f=0;f<i.length;f++){const d=i[f],h=[];for(let g=0;g<d;g++){const _=d===1?0:(g/(d-1)-.5)*4.4;h.push(o.length),o.push({x:s[f],y:_,z:(Math.random()-.5)*.5})}a.push(h)}const l=[];for(let f=0;f<a.length-1;f++)for(const d of a[f]){const h=a[f+1].map(g=>[Math.abs(o[d].y-o[g].y),g]).sort((g,_)=>g[0]-_[0]);for(let g=0;g<Math.min(2,h.length);g++)l.push([d,h[g][1]])}this.edges=l.filter(([f,d])=>f<t&&d<t);const c=new Float32Array(e*3),u=(f,d,h)=>{c[f*3]=d.x+(Math.random()-.5)*h,c[f*3+1]=d.y+(Math.random()-.5)*h,c[f*3+2]=d.z+(Math.random()-.5)*h};for(let f=0;f<t;f++)u(this.hubIndices[f],o[f%o.length],.14);for(let f=0;f<e;f++)if(!n.has(f))if(Math.random()<.5)u(f,o[Math.random()*o.length|0],.32);else{const d=l[Math.random()*l.length|0],h=o[d[0]],g=o[d[1]],_=Math.random();c[f*3]=h.x+(g.x-h.x)*_+(Math.random()-.5)*.12,c[f*3+1]=h.y+(g.y-h.y)*_+(Math.random()-.5)*.12,c[f*3+2]=h.z+(g.z-h.z)*_+(Math.random()-.5)*.12}return c}setSegment(e,t,n){n=Math.min(Math.max(n,0),1);const i=this.shapes[e],s=this.shapes[t],o=this.pointGeo.attributes.position.array;for(let a=0;a<o.length;a++)o[a]=i[a]+(s[a]-i[a])*n;this.pointGeo.attributes.position.needsUpdate=!0}onResize(e){this.material.uniforms.uPixelRatio.value=e.renderer.getPixelRatio()}_applyHover(){const e=this.edgeColors,t=this.edgeBaseColors;for(let i=0;i<this.edges.length;i++){const[s,o]=this.edges[i],a=s===this.hovered||o===this.hovered;for(let l=0;l<2;l++){const c=(i*2+l)*3;a?(e[c]=.13,e[c+1]=.83,e[c+2]=1):(e[c]=t[c],e[c+1]=t[c+1],e[c+2]=t[c+2])}}this.lineGeo.attributes.color.needsUpdate=!0;const n=this.pointGeo.attributes.aSize.array;for(let i=0;i<this.NH;i++){const s=this.hubIndices[i];n[s]=i===this.hovered?this.sizesBase[s]*1.9:this.sizesBase[s]}this.pointGeo.attributes.aSize.needsUpdate=!0;for(let i=0;i<this.NH;i++)this.labels[i].el.classList.toggle("kg-label--hover",i===this.hovered)}update(e,t,n){this.material.uniforms.uTime.value=e,this.material.uniforms.uOpacity.value=this.introFactor;const i=this.pointGeo.attributes.position.array,s=n.camera,o=this.labelStrength*this.introFactor,a=this.labelStrength>.4;let l=.08,c=-1;for(let f=0;f<this.NH;f++){const d=this.hubIndices[f],h=i[d*3],g=i[d*3+1],_=i[d*3+2],p=this.labels[f];p.obj.position.set(h,g,_);const m=this._proj.set(h,g,_).project(s),M=Yp.clamp(1-(m.z*.5+.5),0,1);if(p.el.style.opacity=(o*(.5+.5*M)).toFixed(3),a&&m.z<=1){const v=Math.hypot(m.x-n.pointer.x,m.y-n.pointer.y);v<l&&(l=v,c=f)}}a||(c=-1),c!==this.hovered&&(this.hovered=c,this._applyHover());const u=this.edgePos;for(let f=0;f<this.edges.length;f++){const[d,h]=this.edges[f],g=this.hubIndices[d],_=this.hubIndices[h];u.set([i[g*3],i[g*3+1],i[g*3+2],i[_*3],i[_*3+1],i[_*3+2]],f*6)}this.lineGeo.attributes.position.needsUpdate=!0,this.lines.material.opacity=.6*o,this.lines.visible=o>.01}}function Zy(r,e){const{identity:t,hats:n,amplifier:i,experience:s,projects:o,contact:a}=r,l=p=>p.map(m=>`<li>${m}</li>`).join(""),c=(p,m,M,v,S,A="")=>`
    <section class="panel ${A}" id="${p}">
      <div class="frame" data-reveal>
        <span class="frame__corner frame__corner--tl"></span>
        <span class="frame__corner frame__corner--tr"></span>
        <span class="frame__corner frame__corner--bl"></span>
        <span class="frame__corner frame__corner--br"></span>
        <span class="frame__ghost" aria-hidden="true">${m}</span>
        <div class="frame__head">
          <span class="frame__num">${m}</span>
          <span class="frame__label">${M}</span>
        </div>
        <div class="frame__body">
          <div class="frame__lead">${v}</div>
          <div class="frame__content">${S}</div>
        </div>
      </div>
    </section>`,u=c("hero","01","Identity",`<p class="eyebrow eyebrow--accent" data-hero>${t.kicker}</p>
     <h1 class="hero__name" data-hero>${t.name}</h1>
     <p class="hero__tagline" data-hero>${t.tagline}</p>`,`<ul class="roles" data-hero>${t.roles.map(p=>`<li>${p}</li>`).join("")}</ul>`,"panel--hero"),f=c("hats","02","Two hats",`<h2 class="frame__title">Two hats,<br />one throughline</h2>
     <p class="frame__intro">I run the data — quality and governance — and lead how it gets engineered and shipped with AI.</p>`,`<div class="hats">
       <div class="hat"><h3>${n.manager.label}</h3><ul>${l(n.manager.disciplines)}</ul></div>
       <div class="hat"><h3>${n.techLead.label}</h3><ul>${l(n.techLead.disciplines)}</ul></div>
     </div>`),d=c("amplify","03","The throughline",`<h2 class="frame__title">I amplify every layer with AI &amp; agents</h2>
     <p class="frame__intro">Governance, quality and engineering — each one multiplied by agents that read, audit and build.</p>`,`<div class="cards">${i.map(p=>`<div class="card"><span class="card__tag">${p.branch}</span><p>${p.message}</p></div>`).join("")}</div>`),h=c("work","04","Experience",`<h2 class="frame__title">Where I've led</h2>
     <p class="frame__intro">From founding a governance practice across LatAm to architecting multi-terabyte data platforms.</p>`,`<div class="rows">${s.map(p=>`<div class="row"><div class="row__meta"><span class="row__company">${p.company}</span><span class="row__dates">${p.dates}</span></div><div class="row__body"><h3>${p.role}</h3><p>${p.summary}</p></div></div>`).join("")}</div>`),g=c("projects","05","Selected work",`<h2 class="frame__title">Things I've built</h2>
     <p class="frame__intro">Agents, retrieval and data quality — running in production. Scroll to step through them.</p>`,`<div class="proj-stage">${o.map((p,m)=>`<a class="proj" href="${p.link}" target="_blank" rel="noopener"><span class="proj__num">0${m+1} / 0${o.length}</span><h3>${p.title}</h3><p>${p.description}</p><span class="proj__tech">${p.tech}</span><span class="proj__link">View on GitHub →</span><span class="sr-only"> (opens in new tab)</span></a>`).join("")}</div>`),_=c("contact","06","Contact",`<h2 class="contact__headline">${a.headline}</h2>
     <a class="contact__email" href="mailto:${a.email}">${a.email}</a>`,`<div class="contact__links">${a.links.map(p=>`<a href="${p.url}" target="_blank" rel="noopener">${p.label}<span class="sr-only"> (opens in new tab)</span></a>`).join("")}</div>
     <button class="contact__top" type="button"><span aria-hidden="true">↑ </span>Back to the start</button>`,"panel--contact");e.innerHTML=`
    <section class="panel panel--intro" id="intro" aria-hidden="true"></section>
    ${u}${f}${d}${h}${g}${_}`}Ut.registerPlugin(Je,Ws);const _l=window.matchMedia("(prefers-reduced-motion: reduce)").matches,xm=window.matchMedia("(max-width: 700px)").matches;Zy(Cp,document.getElementById("content"));const Qy=new Yy(document.getElementById("webgl"),{reducedMotion:_l}),Yn=new Ky(Cp.graph,{count:xm?1e3:1900,reducedMotion:_l});Qy.add(Yn);const Xi={DISPERSED:0,NEURAL:1,GT:2,BUILD:3},Jf=(r,e,t)=>{const n=Math.min(Math.max((t-r)/(e-r),0),1);return n*n*(3-2*n)};if(_l){Yn.introFactor=1,Yn.labelStrength=.3,Yn.setSegment(Xi.GT,Xi.GT,0);const r=document.getElementById("intro");r&&(r.style.display="none"),Ut.set([".topbar","#hero [data-hero]",".scrollcue"],{opacity:1,y:0})}else{if(Yn.introFactor=0,Ut.to(Yn,{introFactor:1,duration:1.6,ease:"power2.out"}),Ut.set([".topbar","#hero [data-hero]"],{opacity:0,y:16}),Je.create({trigger:"#intro",start:"top top",end:"bottom bottom",scrub:1,onUpdate:r=>{const e=r.progress;e<.5?Yn.setSegment(Xi.DISPERSED,Xi.NEURAL,e/.5):Yn.setSegment(Xi.NEURAL,Xi.GT,(e-.5)/.5);const t=Jf(.22,.46,e),n=Jf(.6,.92,e);Yn.labelStrength=t*(1-.7*n)},onLeave:()=>Ut.to(Yn,{labelStrength:.3,duration:.6}),onEnterBack:()=>Ut.killTweensOf(Yn,"labelStrength")}),Ut.to(".topbar",{opacity:1,y:0,duration:1,scrollTrigger:{trigger:"#hero",start:"top 80%"}}),Ut.to("#hero [data-hero]",{opacity:1,y:0,duration:1,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:"#hero",start:"top 78%"}}),Je.create({trigger:"#contact",start:"top bottom",end:"top top",scrub:1,onUpdate:r=>Yn.setSegment(Xi.GT,Xi.BUILD,r.progress)}),Ut.utils.toArray(".panel:not(.panel--hero):not(.panel--intro) [data-reveal]").forEach(r=>{Ut.from(r,{y:32,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 86%"}})}),!xm){let l=function(d){if(d===o||!e[d])return;const h=d>o?1:-1;Ut.to(e[o],{autoAlpha:0,y:-26*h,duration:.3,ease:"power2.out"}),Ut.fromTo(e[d],{autoAlpha:0,y:26*h},{autoAlpha:1,y:0,duration:.35,ease:"power2.out"}),o=d},c=function(){const d=t[n];if(d.card!==void 0){const h=a("#projects");Math.abs(window.scrollY-h)>8&&Ut.to(window,{scrollTo:h,duration:.4,ease:"power2.out"}),l(d.card)}else Ut.to(window,{scrollTo:a(d.sel),duration:.4,ease:"power2.out"})},u=function(d){const h=n+d;if(h<0){i=!1,Ut.to(window,{scrollTo:Math.max(0,a("#hero")-window.innerHeight*.75),duration:.7,ease:"power2.inOut"});return}h>t.length-1||(n=h,c())};var Jy=l,eE=c,tE=u;const r=document.querySelector(".proj-stage"),e=Ut.utils.toArray(".proj-stage .proj");r&&e.length&&(r.classList.add("proj-stage--pinned"),Ut.set(e,{autoAlpha:0}),Ut.set(e[0],{autoAlpha:1,y:0}));const t=[{sel:"#hero"},{sel:"#hats"},{sel:"#amplify"},{sel:"#work"},...e.map((d,h)=>({sel:"#projects",card:h})),{sel:"#contact"}];let n=0,i=!1,s=!1,o=0;const a=d=>{const h=document.querySelector(d);return h?Math.round(h.getBoundingClientRect().top+window.scrollY):0},f=d=>{s||(s=!0,setTimeout(()=>s=!1,440),u(d))};Je.create({trigger:"#hero",start:"top top",end:"bottom top",onEnter:()=>{i=!0,n=0},onEnterBack:()=>{i=!0},onLeaveBack:()=>{i=!1}}),window.addEventListener("wheel",d=>{i&&(d.preventDefault(),f(d.deltaY>0?1:-1))},{passive:!1}),window.addEventListener("keydown",d=>{if(!i)return;const h=d.key==="ArrowDown"||d.key==="PageDown"||d.key===" ",g=d.key==="ArrowUp"||d.key==="PageUp";!h&&!g||(d.preventDefault(),f(h?1:-1))})}Je.create({start:"top -8%",end:"max",onToggle:r=>Ut.to(".scrollcue",{opacity:r.isActive?0:1,duration:.4})})}var td;(td=document.querySelector(".contact__top"))==null||td.addEventListener("click",()=>{window.scrollTo({top:0,behavior:_l?"auto":"smooth"})});const ed=document.getElementById("cursor"),Do=document.getElementById("cursor-ring");if(window.matchMedia("(hover: hover)").matches&&ed&&Do){let r=0,e=0,t=0,n=0;window.addEventListener("pointermove",s=>{t=s.clientX,n=s.clientY,ed.style.transform=`translate(${t-3.5}px, ${n-3.5}px)`});const i=()=>{r+=(t-r)*.18,e+=(n-e)*.18,Do.style.transform=`translate(${r-17}px, ${e-17}px)`,requestAnimationFrame(i)};i(),document.addEventListener("pointerover",s=>{s.target.closest("a, button")&&Do.classList.add("is-hover")}),document.addEventListener("pointerout",s=>{s.target.closest("a, button")&&Do.classList.remove("is-hover")})}
