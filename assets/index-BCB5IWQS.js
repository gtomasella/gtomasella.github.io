(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Md(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},lu,Qt,Et,ni=1e8,gt=1/ni,Ac=Math.PI*2,Gm=Ac/4,Hm=0,Sd=Math.sqrt,Vm=Math.cos,Wm=Math.sin,$t=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},cu=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},uu=function(){return typeof window<"u"},eo=function(e){return Ct(e)||$t(e)},yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,Xm=/random\([^)]+\)/g,Ym=/,\s*/g,Yu=/(?:-?\.?\d|\.)+/gi,Ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Td=/[+-]=-?[.\d]+/,qm=/[^,'"\[\]\s]+/gi,$m=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,di,wc,hu,Xn={},tl={},bd,Ad=function(e){return(tl=Gs(e,Xn))&&Ln},fu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oa=function(e,t){return!t&&console.warn(e)},wd=function(e,t){return e&&(Xn[e]=t)&&tl&&(tl[e]=t)||Xn},Fa=function(){return 0},jm={suppressEvents:!0,isStart:!0,kill:!1},Xo={suppressEvents:!0,kill:!1},Km={suppressEvents:!0},du={},rr=[],Rc={},Rd,Bn={},Nl={},qu=30,Yo=[],pu="",mu=function(e){var t=e[0],n,i;if(yi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yo.length;i--&&!Yo[i].targetTest(t););n=Yo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kd(e[i],n)))||e.splice(i,1);return e},Dr=function(e){return e._gsap||mu(ii(e))[0]._gsap},Cd=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():cu(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},nl=function(){var e=rr.length,t=rr.slice(0),n,i;for(Rc={},rr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},_u=function(e){return!!(e._initted||e._startAt||e.add)},Pd=function(e,t,n,i){rr.length&&!Qt&&nl(),e.render(t,n,!!(Qt&&t<0&&_u(e))),rr.length&&!Qt&&nl()},Ld=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(qm).length<2?t:$t(e)?e.trim():e},Dd=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Gs=function(e,t){for(var n in t)e[n]=t[n];return e},$u=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},il=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ma=function(e){var t=e.parent||At,n=e.keyframes?Qm(hn(e.keyframes)):Yn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ud=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ur=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},e_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cc=function(e,t,n,i){return e._startAt&&(Qt?e._startAt.revert(Xo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},t_=function r(e){return!e||e._ts&&r(e.parent)},ju=function(e){return e._repeat?Hs(e._tTime,e=e.duration()+e._rDelay)*e:0},Hs=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},rl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sl=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},yl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sl(e),n._dirty||Ur(n,e)),e},Id=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rl(e.rawTime(),t),(!t._dur||Ka(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},_i=function(e,t,n,i){return t.parent&&ur(t),t._start=bt((Gi(n)?n:n||e!==At?jn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ud(e,t,"_first","_last",e._sort?"_start":0),Pc(t)||(e._recent=t),i||Id(e,t),e._ts<0&&yl(e,e._tTime),e},Nd=function(e,t){return(Xn.ScrollTrigger||fu("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Od=function(e,t,n,i,s){if(vu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rd!==kn.frame)return rr.push(e),e._lazy=[s,i],1},n_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Pc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},i_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&n_(e)&&!(!e._initted&&Pc(e))||(e._ts<0||e._dp._ts<0)&&!Pc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ka(0,e._tDur,t),u=Hs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Hs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qt||i||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Od(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Cc(e,t,n,!0),e._onUpdate&&!n&&Hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ur(e,1),!n&&!Qt&&(Hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},r_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vs=function(e,t,n,i){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&yl(e,e._tTime=e._tDur*a),e.parent&&Sl(e),n||Ur(e.parent,e),e},Ku=function(e){return e instanceof Tn?Ur(e):Vs(e,e._dur)},s_={_start:0,endTime:Fa,totalDuration:Fa},jn=function r(e,t,n){var i=e.labels,s=e._recent||s_,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Sa=function(e,t,n){var i=Gi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Nt(t[0],o,t[s+1])},mr=function(e,t){return e||e===0?t(e):t},Ka=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!$t(e)||!(t=$m.exec(e))?"":t[1]},a_=function(e,t,n){return mr(n,function(i){return Ka(e,t,i)})},Lc=[].slice,Fd=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==di},o_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return $t(i)&&!t||Fd(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):$t(e)&&!n&&(wc||!Ws())?Lc.call((t||hu).querySelectorAll(e),0):hn(e)?o_(e,n):Fd(e)?Lc.call(e,0):e?[e]:[]},Dc=function(e){return e=ii(e)[0]||Oa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?Oa("Invalid scope")||hu.createElement("div"):e)}},Bd=function(e){return e.sort(function(){return .5-Math.random()})},zd=function(e){if(Ct(e))return e;var t=yi(e)?e:{each:e},n=Ir(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return $t(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=o[_],m,S,v,T,R,A,x,U,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,ni])[1],!M){for(x=-ni;x<(x=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=o[_]=[],m=l?Math.min(M,_)*u-.5:i%M,S=M===ni?0:l?_*h/M-.5:i/M|0,x=0,U=ni,A=0;A<_;A++)v=A%M-m,T=S-(A/M|0),p[A]=R=c?Math.abs(c==="y"?T:v):Sd(v*v+T*T),R>x&&(x=R),R<U&&(U=R);i==="random"&&Bd(p),p.max=x-U,p.min=U,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=ln(t.amount||t.each)||0,n=n&&_<0?M_(n):n}return _=(p[d]-p.min)/p.max||0,bt(p.b+(n?n(_):_)*p.v)+p.u}},Uc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gi(n)?0:ln(n))}},kd=function(e,t){var n=hn(e),i,s;return!n&&yi(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!Gi(e[0]))&&(i*=i)):e=Uc(e.increment)),mr(t,n?Ct(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Gi(o)?u:u+ln(o)}:Uc(e))},Gd=function(e,t,n,i){return mr(hn(e)?!t:n===!0?!!(n=0):!i,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},l_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},c_=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},u_=function(e,t,n){return Vd(e,t,0,1,n)},Hd=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},h_=function r(e,t,n){var i=t-e;return hn(e)?Hd(e,r(0,e.length),t):mr(n,function(s){return(i+(s-e)%i)%i+e})},f_=function r(e,t,n){var i=t-e,s=i*2;return hn(e)?Hd(e,r(0,e.length-1),t):mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ba=function(e){return e.replace(Xm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ym);return Gd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Vd=function(e,t,n,i,s){var o=t-e,a=i-n;return mr(s,function(l){return n+((l-e)/o*a||0)})},d_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=$t(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Gs(hn(e)?[]:{},e));if(!u){for(l in t)gu.call(a,e,l,"get",t[l]);s=function(g){return Su(g,a)||(o?e.p:e)}}}return mr(n,s)},Zu=function(e,t,n){var i=e.labels,s=ni,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Hn=function(e,t,n){var i=e.vars,s=i[t],o=Et,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&rr.length&&nl(),a&&(Et=a),u=l?s.apply(c,l):s.call(c),Et=o,u},fa=function(e){return ur(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Hn(e,"onInterrupt"),e},ws,Wd=[],Xd=function(e){if(e)if(e=!e.name&&e.default||e,uu()||e.headless){var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fa,render:Su,add:gu,kill:P_,modifier:C_,rawVars:0},o={targetTest:0,get:0,getSetter:Mu,aliases:{},register:0};if(Ws(),e!==i){if(Bn[t])return;Yn(i,Yn(il(e,s),o)),Gs(i.prototype,Gs(s,il(e,o))),Bn[i.prop=t]=i,e.targetTest&&(Yo.push(i),du[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}wd(t,i),e.register&&e.register(Ln,i,wn)}else Wd.push(e)},_t=255,da={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},Ol=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},Yd=function(e,t,n){var i=e?Gi(e)?[e>>16,e>>8&_t,e&_t]:0:da.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])i=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Yu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ol(l+1/3,s,o),i[1]=Ol(l,s,o),i[2]=Ol(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Yu)||da.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qd=function(e){var t=[],n=[],i=-1;return e.split(sr).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Qu=function(e,t,n){var i="",s=(e+i).match(sr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Yd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=qd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(sr,"1").split(As),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(sr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},sr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),p_=/hsl[a]?\(/,$d=function(e){var t=e.join(" "),n;if(sr.lastIndex=0,sr.test(t))return n=p_.test(t),e[1]=Qu(e[1],n),e[0]=Qu(e[0],n,qd(e[1])),!0},za,kn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(p){var m=r()-i,S=p===!0,v,T,R,A;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,v=R-o,(v>0||S)&&(A=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=v+(v>=s?4:s-v),T=1),S||(l=c(_)),T)for(f=0;f<a.length;f++)a[f](R,d,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){bd&&(!wc&&uu()&&(di=wc=window,hu=di.document||{},Xn.gsap=Ln,(di.gsapVersions||(di.gsapVersions=[])).push(Ln.version),Ad(tl||di.GreenSockGlobals||!di.gsap&&di||{}),Wd.forEach(Xd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},za=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),za=0,c=Fa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,S){var v=m?function(T,R,A,x){p(T,R,A,x),h.remove(v)}:p;return h.remove(p),a[S?"unshift":"push"](v),Ws(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),Ws=function(){return!za&&kn.wake()},lt={},m_=/^[\d.\-M][\d.\-,\s]/,__=/["']/g,g_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(__,"").trim():+c,i=l.substr(a+1).trim();return t},v_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},x_=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g_(t[1])]:v_(e).split(",").map(Ld)):lt._CE&&m_.test(e)?lt._CE("",e):n},M_=function(e){return function(t){return 1-e(1-t)}},Ir=function(e,t){return e&&(Ct(e)?e:lt[e]||x_(e))||t},qr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){lt[a]=Xn[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},jd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ac*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Wm((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:jd(a);return s=Ac/s,l.config=function(c,u){return r(e,c,u)},l},Bl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jd(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;qr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;qr("Elastic",Fl("in"),Fl("out"),Fl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};qr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});qr("Circ",function(r){return-(Sd(1-r*r)-1)});qr("Sine",function(r){return r===1?1:-Vm(r*Gm)+1});qr("Back",Bl("in"),Bl("out"),Bl());lt.SteppedEase=lt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((i*Ka(0,o,a)|0)+s)*n}}};Na.ease=lt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return pu+=r+","+r+"Params,"});var Kd=function(e,t){this.id=Hm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cd,this.set=t?t.getSetter:Mu},ka=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),za||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yl(this,n),!s._dp||s.parent||Id(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&_i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ju(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ju(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Hs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sl(this),e_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=bt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&_i(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Km);var i=Qt;return Qt=n,_u(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ku(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ku(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-gt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ct(n)?n:Dd,l=function(){var u=i.then;i.then=null,s&&s(),Ct(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){fa(this)},r}();Yn(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var Tn=function(r){Md(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),At&&_i(n.parent||At,Ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nd(Ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Sa(0,arguments,this),this},t.from=function(i,s,o){return Sa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Sa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(i,s,jn(this,o),1),this},t.call=function(i,s,o){return _i(this,Nt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Nt(i,o,jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ma(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ma(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,p,m,S,v,T,R,A,x;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,T=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=bt(u%p),u===l?(_=this._repeat,d=c):(R=bt(u/p),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=Hs(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),A&&_&1&&(d=c-d,x=1),_!==R&&!this._lock){var U=A&&R&1,M=U===(A&&_&1);if(_<R&&(U=!U),a=U?0:u%c?c:u,this._lock=1,this.render(a||(x?0:bt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hn(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=r_(this,bt(a),bt(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Hn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=-gt);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||Qt&&_u(f)),d!==this._time||!this._ts&&!m){S=0,g&&(u+=this._zTime=y?-gt:gt);break}}f=g}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=T,Sl(this),this.render(i,s,o);this._onUpdate&&!s&&Hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(T===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ur(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Hn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Gi(s)||(s=jn(this,s,i)),!(i instanceof ka)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if($t(i))return this.addLabel(i,s);if(Ct(i))i=Nt.delayedCall(0,i);else return this}return this!==i?_i(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return $t(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(i.parent===this&&Ml(this,i),i===this._recent&&(this._recent=this._last),Ur(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Nt.delayedCall(0,s||Fa,o);return a.data="isPause",this._hasPause=1,_i(this,a,jn(this,i))},t.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&ur(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Zi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Gi(s),u;l;)l instanceof Nt?Zm(l._targets,a)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Nt.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Vs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Zu(this,jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Zu(this,jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=bt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ur(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ur(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_i(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=bt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Vs(o,o===At&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(At._ts&&(Pd(At,rl(i,At)),Rd=kn.frame),kn.frame>=qu){qu+=Wn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Wn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e}(ka);Yn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var S_=function(e,t,n,i,s,o,a){var l=new wn(this._pt,e,t,0,1,np,null,s),c=0,u=0,h,d,f,g,_,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ba(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(Il)||[];h=Il.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ls(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Il.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Td.test(i)||m)&&(l.e=0),this._pt=l,l},gu=function(e,t,n,i,s,o,a,l,c,u){Ct(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ct(h)?c?A_:ep:xu,g;if($t(i)&&(~i.indexOf("random(")&&(i=Ba(i)),i.charAt(1)==="="&&(g=Ls(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Ic)return!isNaN(d*i)&&i!==""?(g=new wn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?R_:tp,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&fu(t,i),S_.call(this,e,t,d,i,f,l||Wn.stringFilter,c))},y_=function(e,t,n,i,s){if(Ct(e)&&(e=ya(e,s,t,n,i)),!yi(e)||e.style&&e.nodeType||hn(e)||yd(e))return $t(e)?ya(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ya(e[a],s,t,n,i);return o},Zd=function(e,t,n,i,s,o){var a,l,c,u;if(Bn[e]&&(a=new Bn[e]).init(s,a.rawVars?t[e]:y_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Zi,Ic,vu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!lu,T=e.timeline,R=i.easeReverse||h,A,x,U,M,y,F,B,Q,D,O,V,W,q;if(T&&(!d||!s)&&(s="none"),e._ease=Ir(s,Na.ease),e._rEase=R&&(Ir(R)||e._ease),e._from=!T&&!!i.runBackwards,e._from&&(e.ratio=1),!T||d&&!i.stagger){if(Q=p[0]?Dr(p[0]).harness:0,W=Q&&i[Q.prop],A=il(i,du),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Xo:jm),_._lazy=0),o){if(ur(e._startAt=Nt.set(p,Yn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!a&&!f)&&e._startAt.revert(Xo),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),U=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&bn(l),immediateRender:a,stagger:0,parent:m},A),W&&(U[Q.prop]=W),ur(e._startAt=Nt.set(p,U)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert(Xo):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,x=0;x<p.length;x++){if(y=p[x],B=y._gsap||mu(p)[x]._gsap,e._ptLookup[x]=O={},Rc[B.id]&&rr.length&&nl(),V=S===p?x:S.indexOf(y),Q&&(D=new Q).init(y,W||A,e,V,S)!==!1&&(e._pt=M=new wn(e._pt,y,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function($){O[$]=M}),D.priority&&(F=1)),!Q||W)for(U in A)Bn[U]&&(D=Zd(U,A,e,V,y,S))?D.priority&&(F=1):O[U]=M=gu.call(e,y,U,"get",A[U],V,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(y,e._op[x]),v&&e._pt&&(Zi=e,At.killTweensOf(y,O,e.globalTime(t)),q=!e.parent,Zi=0),e._pt&&l&&(Rc[B.id]=1)}F&&ip(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,d&&t<=0&&T.render(ni,!0,!0)},E_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ic=1,e.vars[t]="+=0",vu(e,a),Ic=0,l?Oa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Lt(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},T_=function(e,t){var n=e[0]?Dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Gs({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},b_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ya=function(e,t,n,i,s){return Ct(e)?e.call(t,n,i,s):$t(e)&&~e.indexOf("random(")?Ba(e):e},Qd=pu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jd={};An(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});var Nt=function(r){Md(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ma(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||At,S=(hn(n)||yd(n)?Gi(n[0]):"length"in i)?[n]:ii(n),v,T,R,A,x,U,M,y;if(a._targets=S.length?mu(S):Oa("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||eo(c)||eo(u)){i=a.vars;var F=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Tn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),v.kill(),v.parent=v._dp=Ci(a),v._start=0,d||eo(c)||eo(u)){if(A=S.length,M=d&&zd(d),yi(d))for(x in d)~Qd.indexOf(x)&&(y||(y={}),y[x]=d[x]);for(T=0;T<A;T++)R=il(i,Jd),R.stagger=0,F&&(R.easeReverse=F),y&&Gs(R,y),U=S[T],R.duration=+ya(c,Ci(a),T,U,S),R.delay=(+ya(u,Ci(a),T,U,S)||0)-a._delay,!d&&A===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(U,R,M?M(T,U,S):0),v._ease=lt.none;v.duration()?c=u=0:a.timeline=0}else if(g){Ma(Yn(v.vars.defaults,{ease:"none"})),v._ease=Ir(g.ease||i.ease||"none");var B=0,Q,D,O;if(hn(g))g.forEach(function(V){return v.to(S,V,">")}),v.duration();else{R={};for(x in g)x==="ease"||x==="easeEach"||b_(x,g[x],R,g.easeEach);for(x in R)for(Q=R[x].sort(function(V,W){return V.t-W.t}),B=0,T=0;T<Q.length;T++)D=Q[T],O={ease:D.e,duration:(D.t-(T?Q[T-1].t:0))/100*c},O[x]=D.v,v.to(S,O,B),B+=O.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!lu&&(Zi=Ci(a),At.killTweensOf(S),Zi=0),_i(m,Ci(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===bt(m._time)&&bn(h)&&t_(Ci(a))&&m.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),p&&Nd(Ci(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-gt&&!u?l:i<gt?0:i,d,f,g,_,p,m,S,v;if(!c)i_(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=bt(h%_),h===l?(g=this._repeat,d=c):(p=bt(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=Hs(this._tTime,_),d===a&&!o&&this._initted&&g===p)return this._tTime=h,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(bt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Od(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var T=d<a;if(T!==this._inv){var R=T?a:c-a;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(T?-1:1)/R:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(d/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!p&&(Hn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cc(this,i,s,o),Hn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Hn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ur(this,1),!s&&!(u&&!a)&&(h||a||m)&&(Hn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){za||kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vu(this,c),u=this._ease(c/this._dur),E_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(yl(this,0),this.parent||Ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zi&&Zi.vars.overwrite!==!0)._first||fa(this),this.parent&&o!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&Jm(a,l))return s==="all"&&(this._pt=0),fa(this);for(h=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},An(s,function(S){return _[S]=1}),s=_),s=T_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ml(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&fa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Sa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Sa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return At.killTweensOf(i,s,o)},e}(ka);Yn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Nt[r]=function(){var e=new Tn,t=Lc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var xu=function(e,t,n){return e[t]=n},ep=function(e,t,n){return e[t](n)},A_=function(e,t,n,i){return e[t](i.fp,n)},w_=function(e,t,n){return e.setAttribute(t,n)},Mu=function(e,t){return Ct(e[t])?ep:cu(e[t])&&e.setAttribute?w_:xu},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},R_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},np=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Su=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},C_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},P_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},L_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},ip=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||tp,this.d=l||this,this.set=c||xu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=L_,this.m=n,this.mt=s,this.tween=i},r}();An(pu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return du[r]=1});Xn.TweenMax=Xn.TweenLite=Nt;Xn.TimelineLite=Xn.TimelineMax=Tn;At=new Tn({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=$d;var Nr=[],qo={},D_=[],Ju=0,U_=0,zl=function(e){return(qo[e]||D_).map(function(t){return t()})},Nc=function(){var e=Date.now(),t=[];e-Ju>2&&(zl("matchMediaInit"),Nr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ju=e,zl("matchMedia"))},rp=function(){function r(t,n){this.selector=n&&Dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=U_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ct(n)&&(s=i,i=n,n=Ct);var o=this,a=function(){var c=Et,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Dc(s)),Et=o,h=i.apply(o,arguments),Ct(h)&&o._r.push(h),Et=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ct?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Et;Et=null,n(this),Et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Nr.length;o--;)Nr[o].id===this.id&&Nr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),I_=function(){function r(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){yi(n)||(n={matches:n});var o=new rp(0,s||this.scope),a=o.conditions={},l,c,u;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(Nr.indexOf(o)<0&&Nr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Nc):l.addEventListener("change",Nc)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),sl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xd(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){$t(e)&&(e=ii(e)[0]);var s=Dr(e||{}).get,o=n?Dd:Ld;return n==="native"&&(n=""),e&&(t?o((Bn[t]&&Bn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Bn[t],a=Dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ws._pt=0,h.init(e,n?u+n:u,ws,0,[e]),h.render(1,h),ws._pt&&Su(1,ws)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Ln.to(e,Yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,Na.ease)),$u(Na,e||{})},config:function(e){return $u(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Xn[a]&&Oa(t+" effect requires "+a+" plugin.")}),Nl[t]=function(a,l,c){return n(ii(a),Yn(l||{},s),c)},o&&(Tn.prototype[t]=function(a,l,c){return this.add(Nl[t](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Ir(t)},parseEase:function(e,t){return arguments.length?Ir(e,t):lt},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&_i(n,i,i._start-i._delay),i=s;return _i(At,n,0),n},context:function(e,t){return e?new rp(e,t):Et},matchMedia:function(e){return new I_(e)},matchMediaRefresh:function(){return Nr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Nc()},addEventListener:function(e,t){var n=qo[e]||(qo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:h_,wrapYoyo:f_,distribute:zd,random:Gd,snap:kd,normalize:u_,getUnit:ln,clamp:a_,splitColor:Yd,toArray:ii,selector:Dc,mapRange:Vd,pipe:l_,unitize:c_,interpolate:d_,shuffle:Bd},install:Ad,effects:Nl,ticker:kn,updateRoot:Tn.updateRoot,plugins:Bn,globalTimeline:At,core:{PropTween:wn,globals:wd,Tween:Nt,Timeline:Tn,Animation:ka,getCache:Dr,_removeLinkedListItem:Ml,reverting:function(){return Qt},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return lu=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sl[r]=Nt[r]});kn.add(Tn.updateRoot);ws=sl.to({},{duration:0});var N_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},O_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=N_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},kl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if($t(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}O_(a,s)}}}},Ln=sl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kl("roundProps",Uc),kl("modifiers"),kl("snap",kd))||sl;Nt.version=Tn.version=Ln.version="3.15.0";bd=1;uu()&&Ws();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var eh,Qi,Ds,yu,Pr,th,Eu,F_=function(){return typeof window<"u"},Hi={},Tr=180/Math.PI,Us=Math.PI/180,Kr=Math.atan2,nh=1e8,Tu=/([A-Z])/g,B_=/(left|right|width|margin|padding|x)/i,z_=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},G_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},H_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},V_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ap=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},W_=function(e,t,n){return e.style[t]=n},X_=function(e,t,n){return e.style.setProperty(t,n)},Y_=function(e,t,n){return e._gsap[t]=n},q_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$_=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},j_=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},wt="transform",Rn=wt+"Origin",K_=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Hi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Pi(i,a)}):this.tfm[e]=o.x?o[e]:Pi(i,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return vi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},op=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Z_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Eu(),(!s||!s.isStart)&&!n[wt]&&(op(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lp=function(e,t){var n={target:e,props:[],revert:Z_,save:K_};return e._gsap||Ln.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},cp,Fc=function(e,t){var n=Qi.createElementNS?Qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qi.createElement(e);return n&&n.style?n:Qi.createElement(e)},Vn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Tu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xs(t)||t,1)||""},ih="O,Moz,ms,Ms,Webkit".split(","),Xs=function(e,t,n){var i=t||Pr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ih[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ih[o]:"")+e},Bc=function(){F_()&&window.document&&(eh=window,Qi=eh.document,Ds=Qi.documentElement,Pr=Fc("div")||{style:{}},Fc("div"),wt=Xs(wt),Rn=wt+"Origin",Pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!Xs("perspective"),Eu=Ln.core.reverting,yu=1)},rh=function(e){var t=e.ownerSVGElement,n=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ds.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ds.removeChild(n),s},sh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},up=function(e){var t,n;try{t=e.getBBox()}catch{t=rh(e),n=1}return t&&(t.width||t.height)||n||(t=rh(e)),t&&!t.width&&!t.x&&!t.y?{x:+sh(e,["x","cx","x1"])||0,y:+sh(e,["y","cy","y1"])||0,width:0,height:0}:t},hp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&up(e))},hr=function(e,t){if(t){var n=e.style,i;t in Hi&&t!==Rn&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Tu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ji=function(e,t,n,i,s,o){var a=new wn(e._pt,t,n,0,1,o?ap:sp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},ah={deg:1,rad:1,turn:1},Q_={grid:1,flex:1},fr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Pr.style,l=B_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||ah[i]||ah[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&hp(e),(f||o==="%")&&(Hi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Lt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qi||!_.appendChild)&&(_=Qi.body),p=_._gsap,p&&f&&p.width&&l&&p.time===kn.time&&!p.uncache)return Lt(s/p.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:hr(e,t)}else(f||o==="%")&&!Q_[Vn(_,"display")]&&(a.position=Vn(e,"position")),_===e&&(a.position="static"),_.appendChild(Pr),g=Pr[u],_.removeChild(Pr),a.position="absolute";return l&&f&&(p=Dr(_),p.time=kn.time,p.width=_[u]),Lt(d?g*s/h:g&&s?h/g*s:0)},Pi=function(e,t,n,i){var s;return yu||Bc(),t in vi&&t!=="transform"&&(t=vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(s=Ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ol(Vn(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=al[t]&&al[t](e,t,n)||Vn(e,t)||Cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fr(e,t,s,n)+n:s},J_=function(e,t,n,i){if(!n||n==="none"){var s=Xs(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,np),l=0,c=0,u,h,d,f,g,_,p,m,S,v,T,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Vn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Vn(e,t)||i,_?e.style[t]=_:hr(e,t)),u=[n,i],$d(u),n=u[0],i=u[1],d=n.match(As)||[],R=i.match(As)||[],R.length){for(;h=As.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,T=_.substr((f+"").length),p.charAt(1)==="="&&(p=Ls(f,p)+T),m=parseFloat(p),v=p.substr((m+"").length),l=As.lastIndex-v.length,v||(v=v||Wn.units[t]||T,l===i.length&&(i+=v,a.e+=v)),T!==v&&(f=fr(e,t,_,v)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ap:sp;return Td.test(i)&&(a.e=0),this._pt=a,a},oh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=oh[n]||n,t[1]=oh[i]||i,t.join(" ")},tg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Hi[a]&&(l=1,a=a==="transformOrigin"?Rn:wt),hr(n,a);l&&(hr(n,wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ha(n,1),o.uncache=1,op(i)))}},al={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,n,0,0,tg);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ga=[1,0,0,1,0,0],fp={},dp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lh=function(e){var t=Vn(e,wt);return dp(t)?Ga:t.substr(7).match(Ed).map(Lt)},bu=function(e,t){var n=e._gsap||Dr(e),i=e.style,s=lh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==Ds&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ds.appendChild(e)),s=lh(e),l?i.display=l:hr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zc=function(e,t,n,i,s,o){var a=e._gsap,l=s||bu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],S=l[5],v=t.split(" "),T=parseFloat(v[0])||0,R=parseFloat(v[1])||0,A,x,U,M;n?l!==Ga&&(x=f*p-g*_)&&(U=T*(p/x)+R*(-_/x)+(_*S-p*m)/x,M=T*(-g/x)+R*(f/x)-(f*S-g*m)/x,T=U,R=M):(A=up(e),T=A.x+(~v[0].indexOf("%")?T/100*A.width:T),R=A.y+(~(v[1]||v[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(m=T-c,S=R-u,a.xOffset=h+(m*f+S*_)-m,a.yOffset=d+(m*g+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=T,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Rn]="0px 0px",o&&(Ji(o,a,"xOrigin",c,T),Ji(o,a,"yOrigin",u,R),Ji(o,a,"xOffset",h,a.xOffset),Ji(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",T+" "+R)},Ha=function(e,t){var n=e._gsap||new Kd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Rn)||"0",u,h,d,f,g,_,p,m,S,v,T,R,A,x,U,M,y,F,B,Q,D,O,V,W,q,$,C,Z,he,j,K,le;return u=h=d=_=p=m=S=v=T=0,f=g=1,n.svg=!!(e.getCTM&&hp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),x=bu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),zc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,x)),R=n.xOrigin||0,A=n.yOrigin||0,x!==Ga&&(F=x[0],B=x[1],Q=x[2],D=x[3],u=O=x[4],h=V=x[5],x.length===6?(f=Math.sqrt(F*F+B*B),g=Math.sqrt(D*D+Q*Q),_=F||B?Kr(B,F)*Tr:0,S=Q||D?Kr(Q,D)*Tr+_:0,S&&(g*=Math.abs(Math.cos(S*Us))),n.svg&&(u-=R-(R*F+A*Q),h-=A-(R*B+A*D))):(le=x[6],j=x[7],C=x[8],Z=x[9],he=x[10],K=x[11],u=x[12],h=x[13],d=x[14],U=Kr(le,he),p=U*Tr,U&&(M=Math.cos(-U),y=Math.sin(-U),W=O*M+C*y,q=V*M+Z*y,$=le*M+he*y,C=O*-y+C*M,Z=V*-y+Z*M,he=le*-y+he*M,K=j*-y+K*M,O=W,V=q,le=$),U=Kr(-Q,he),m=U*Tr,U&&(M=Math.cos(-U),y=Math.sin(-U),W=F*M-C*y,q=B*M-Z*y,$=Q*M-he*y,K=D*y+K*M,F=W,B=q,Q=$),U=Kr(B,F),_=U*Tr,U&&(M=Math.cos(U),y=Math.sin(U),W=F*M+B*y,q=O*M+V*y,B=B*M-F*y,V=V*M-O*y,F=W,O=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Lt(Math.sqrt(F*F+B*B+Q*Q)),g=Lt(Math.sqrt(V*V+le*le)),U=Kr(O,V),S=Math.abs(U)>2e-4?U*Tr:0,T=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dp(Vn(e,wt)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Lt(f),n.scaleY=Lt(g),n.rotation=Lt(_)+a,n.rotationX=Lt(p)+a,n.rotationY=Lt(m)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=T+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=ol(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?ig:cp?pp:ng,n.uncache=0,n},ol=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=ln(t);return Lt(parseFloat(t)+parseFloat(fr(e,"x",n+"px",i)))+i},ng=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pp(e,t)},vr="0deg",na="0px",xr=") ",pp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,v=n.zOrigin,T="",R=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==vr||u!==vr)){var A=parseFloat(u)*Us,x=Math.sin(A),U=Math.cos(A),M;A=parseFloat(h)*Us,M=Math.cos(A),o=Gl(S,o,x*M*-v),a=Gl(S,a,-Math.sin(A)*-v),l=Gl(S,l,U*M*-v+v)}p!==na&&(T+="perspective("+p+xr),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(R||o!==na||a!==na||l!==na)&&(T+=l!==na||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==vr&&(T+="rotate("+c+xr),u!==vr&&(T+="rotateY("+u+xr),h!==vr&&(T+="rotateX("+h+xr),(d!==vr||f!==vr)&&(T+="skew("+d+", "+f+xr),(g!==1||_!==1)&&(T+="scale("+g+", "+_+xr),S.style[wt]=T||"translate(0, 0)"},ig=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,v=parseFloat(o),T=parseFloat(a),R,A,x,U,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Us,c*=Us,R=Math.cos(l)*h,A=Math.sin(l)*h,x=Math.sin(l-c)*-d,U=Math.cos(l-c)*d,c&&(u*=Us,M=Math.tan(c-u),M=Math.sqrt(1+M*M),x*=M,U*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),R*=M,A*=M)),R=Lt(R),A=Lt(A),x=Lt(x),U=Lt(U)):(R=h,U=d,A=x=0),(v&&!~(o+"").indexOf("px")||T&&!~(a+"").indexOf("px"))&&(v=fr(f,"x",o,"px"),T=fr(f,"y",a,"px")),(g||_||p||m)&&(v=Lt(v+g-(g*R+_*x)+p),T=Lt(T+_-(g*A+_*U)+m)),(i||s)&&(M=f.getBBox(),v=Lt(v+i/100*M.width),T=Lt(T+s/100*M.height)),M="matrix("+R+","+A+","+x+","+U+","+v+","+T+")",f.setAttribute("transform",M),S&&(f.style[wt]=M)},rg=function(e,t,n,i,s){var o=360,a=$t(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Tr:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*nh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*nh)%o-~~(c/o)*o)),e._pt=d=new wn(e._pt,t,n,i,c,k_),d.e=u,d.u="deg",e._props.push(n),d},ch=function(e,t){for(var n in t)e[n]=t[n];return e},sg=function(e,t,n){var i=ch({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[wt]=t,a=Ha(n,1),hr(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],o[wt]=t,a=Ha(n,1),o[wt]=c);for(l in Hi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=ln(c),g=ln(u),h=f!==g?fr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new wn(e._pt,a,l,h,d-h,Oc),e._pt.u=g||0,e._props.push(l));ch(a,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});al[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Pi(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var mp={name:"css",register:Bc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,S,v,T,R,A,x,U,M;yu||Bc(),this.styles=this.styles||lp(e),U=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Bn[_]&&Zd(_,t,n,i,e,s)))){if(f=typeof u,g=al[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ba(u)),g)g(this,e,_,u,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",sr.lastIndex=0,sr.test(c)||(p=ln(c),m=ln(u),m?p!==m&&(c=fr(e,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=Ba(c)),ln(c+"")||c==="auto"||(c+=Wn.units[_]||ln(Pi(e,_))||""),(c+"").charAt(1)==="="&&(c=Pi(e,_))):c=Pi(e,_),d=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in vi&&(_==="autoAlpha"&&(d===1&&Pi(e,"visibility")==="hidden"&&h&&(d=0),U.push("visibility",0,a.visibility),Ji(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Hi,v){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Vn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Vn(e,"perspective"),y?e.style.perspective=y:hr(e,"perspective")}h=parseFloat(u)}if(T||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ha(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,T=this._pt=new wn(this._pt,a,wt,0,1,R.renderTransform,R,0,-1),T.dep=1),_==="scale")this._pt=new wn(this._pt,R,"scaleY",R.scaleY,(S?Ls(R.scaleY,S+h):h)-R.scaleY||0,Oc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(Rn,0,a[Rn]),u=eg(u),R.svg?zc(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Ji(this,R,"zOrigin",R.zOrigin,m),Ji(this,a,_,ol(c),ol(u)));continue}else if(_==="svgOrigin"){zc(e,u,1,A,0,this);continue}else if(_ in fp){rg(this,R,_,d,S?Ls(d,S+u):u);continue}else if(_==="smoothOrigin"){Ji(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){sg(this,u,e);continue}}else _ in a||(_=Xs(_)||_);if(v||(h||h===0)&&(d||d===0)&&!z_.test(u)&&_ in a)p=(c+"").substr((d+"").length),h||(h=0),m=ln(u)||(_ in Wn.units?Wn.units[_]:p),p!==m&&(d=fr(e,_,c,m)),this._pt=new wn(this._pt,v?R:a,_,d,(S?Ls(d,S+h):h)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?V_:Oc),this._pt.u=m||0,v&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=H_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=G_);else if(_ in a)J_.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){fu(_,u);continue}v||(_ in a?U.push(_,0,a[_]):typeof e[_]=="function"?U.push(_,2,e[_]()):U.push(_,1,c||e[_])),o.push(_)}}x&&ip(this)},render:function(e,t){if(t.tween._time||!Eu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Pi,aliases:vi,getSetter:function(e,t,n){var i=vi[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==Rn&&(e._gsap.x||Pi(e,"x"))?n&&th===n?t==="scale"?q_:Y_:(th=n||{})&&(t==="scale"?$_:j_):e.style&&!cu(e.style[t])?W_:~t.indexOf("-")?X_:Mu(e,t)},core:{_removeProperty:hr,_getMatrix:bu}};Ln.utils.checkPrefix=Xs;Ln.core.getStyleSaver=lp;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){Hi[s]=1});An(e,function(s){Wn.units[s]="deg",fp[s]=1}),vi[i[13]]=r+","+e,An(n,function(s){var o=s.split(":");vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Ln.registerPlugin(mp);var Bt=Ln.registerPlugin(mp)||Ln;Bt.core.Tween;function ag(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function og(r,e,t){return e&&ag(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kt,$o,Gn,er,tr,Is,_p,br,Ns,gp,Ui,li,vp,xp=function(){return Kt||typeof window<"u"&&(Kt=window.gsap)&&Kt.registerPlugin&&Kt},Mp=1,Rs=[],at=[],Si=[],Ea=Date.now,kc=function(e,t){return t},lg=function(){var e=Ns.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,Si),at=n,Si=i,kc=function(o,a){return t[o](a)}},ar=function(e,t){return~Si.indexOf(e)&&Si[Si.indexOf(e)+1][t]},Ta=function(e){return!!~gp.indexOf(e)},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},to="scrollLeft",no="scrollTop",Gc=function(){return Ui&&Ui.isPressed||at.cache++},ll=function(e,t){var n=function i(s){if(s||s===0){Mp&&(Gn.history.scrollRestoration="manual");var o=Ui&&Ui.isPressed;s=i.v=Math.round(s)||(Ui&&Ui.iOS?1:0),e(s),i.cacheID=at.cache,o&&kc("ss",s)}else(t||at.cache!==i.cacheID||kc("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:to,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ll(function(r){return arguments.length?Gn.scrollTo(r,kt.sc()):Gn.pageXOffset||er[to]||tr[to]||Is[to]||0})},kt={s:no,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:ll(function(r){return arguments.length?Gn.scrollTo(Sn.sc(),r):Gn.pageYOffset||er[no]||tr[no]||Is[no]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||Kt.utils.toArray)(e)[0]||(typeof e=="string"&&Kt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},dr=function(e,t){var n=t.s,i=t.sc;Ta(e)&&(e=er.scrollingElement||tr);var s=at.indexOf(e),o=i===kt.sc?1:2;!~s&&(s=at.push(e)-1),at[s+o]||mn(e,"scroll",Gc);var a=at[s+o],l=a||(at[s+o]=ll(ar(e,n),!0)||(Ta(e)?i:ll(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Kt.getProperty(e,"scrollBehavior")==="smooth"),l},Hc=function(e,t,n){var i=e,s=e,o=Ea(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ea();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,p=s,m=Ea();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},ia=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},uh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Sp=function(){Ns=Kt.core.globals().ScrollTrigger,Ns&&Ns.core&&lg()},yp=function(e){return Kt=e||xp(),!$o&&Kt&&typeof document<"u"&&document.body&&(Gn=window,er=document,tr=er.documentElement,Is=er.body,gp=[Gn,er,tr,Is],Kt.utils.clamp,vp=Kt.core.context||function(){},br="onpointerenter"in Is?"pointer":"mouse",_p=Dt.isTouch=Gn.matchMedia&&Gn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Gn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Dt.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mp=0},500),$o=1),Ns||Sp(),$o};Sn.op=kt;at.cache=0;var Dt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){$o||yp(Kt)||console.warn("Please gsap.registerPlugin(Observer)"),Ns||Sp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,v=n.onPress,T=n.onRelease,R=n.onRight,A=n.onLeft,x=n.onUp,U=n.onDown,M=n.onChangeX,y=n.onChangeY,F=n.onChange,B=n.onToggleX,Q=n.onToggleY,D=n.onHover,O=n.onHoverEnd,V=n.onMove,W=n.ignoreCheck,q=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,Z=n.onWheel,he=n.onEnable,j=n.onDisable,K=n.onClick,le=n.scrollSpeed,Me=n.capture,me=n.allowClicks,Ue=n.lockAxis,Pe=n.onLockAxis;this.target=a=En(a)||tr,this.vars=n,f&&(f=Kt.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,le=le||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Gn.getComputedStyle(Is).lineHeight)||22);var Fe,Xe,k,Ye,ve,Le,xe,H=this,ze=0,w=0,E=n.passive||!u&&n.passive!==!1,z=dr(a,Sn),ie=dr(a,kt),ee=z(),re=ie(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",de=Ta(a),ce=a.ownerDocument||er,we=[0,0,0],Ge=[0,0,0],J=0,ot=function(){return J=Ea()},De=function(Se,Ae){return(H.event=Se)&&f&&cg(Se.target,f)||Ae&&_e&&Se.pointerType!=="touch"||W&&W(Se,Ae)},qe=function(){H._vx.reset(),H._vy.reset(),Xe.pause(),h&&h(H)},Te=function(){var Se=H.deltaX=uh(we),Ae=H.deltaY=uh(Ge),oe=Math.abs(Se)>=i,He=Math.abs(Ae)>=i;F&&(oe||He)&&F(H,Se,Ae,we,Ge),oe&&(R&&H.deltaX>0&&R(H),A&&H.deltaX<0&&A(H),M&&M(H),B&&H.deltaX<0!=ze<0&&B(H),ze=H.deltaX,we[0]=we[1]=we[2]=0),He&&(U&&H.deltaY>0&&U(H),x&&H.deltaY<0&&x(H),y&&y(H),Q&&H.deltaY<0!=w<0&&Q(H),w=H.deltaY,Ge[0]=Ge[1]=Ge[2]=0),(Ye||k)&&(V&&V(H),k&&(p&&k===1&&p(H),S&&S(H),k=0),Ye=!1),Le&&!(Le=!1)&&Pe&&Pe(H),ve&&(Z(H),ve=!1),Fe=0},ge=function(Se,Ae,oe){we[oe]+=Se,Ge[oe]+=Ae,H._vx.update(Se),H._vy.update(Ae),c?Fe||(Fe=requestAnimationFrame(Te)):Te()},P=function(Se,Ae){Ue&&!xe&&(H.axis=xe=Math.abs(Se)>Math.abs(Ae)?"x":"y",Le=!0),xe!=="y"&&(we[2]+=Se,H._vx.update(Se,!0)),xe!=="x"&&(Ge[2]+=Ae,H._vy.update(Ae,!0)),c?Fe||(Fe=requestAnimationFrame(Te)):Te()},ae=function(Se){if(!De(Se,1)){Se=ia(Se,u);var Ae=Se.clientX,oe=Se.clientY,He=Ae-H.x,ke=oe-H.y,Ke=H.isDragging;H.x=Ae,H.y=oe,(Ke||(He||ke)&&(Math.abs(H.startX-Ae)>=s||Math.abs(H.startY-oe)>=s))&&(k||(k=Ke?2:1),Ke||(H.isDragging=!0),P(He,ke))}},be=H.onPress=function(ye){De(ye,1)||ye&&ye.button||(H.axis=xe=null,Xe.pause(),H.isPressed=!0,ye=ia(ye),ze=w=0,H.startX=H.x=ye.clientX,H.startY=H.y=ye.clientY,H._vx.reset(),H._vy.reset(),mn(q?a:ce,li[1],ae,E,!0),H.deltaX=H.deltaY=0,v&&v(H))},te=H.onRelease=function(ye){if(!De(ye,1)){dn(q?a:ce,li[1],ae,!0);var Se=!isNaN(H.y-H.startY),Ae=H.isDragging,oe=Ae&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),He=ia(ye);!oe&&Se&&(H._vx.reset(),H._vy.reset(),u&&me&&Kt.delayedCall(.08,function(){if(Ea()-J>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(ce.createEvent){var ke=ce.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Gn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(ke)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&Ae&&!q&&Xe.restart(!0),k&&Te(),m&&Ae&&m(H),T&&T(H,oe)}},ne=function(Se){return Se.touches&&Se.touches.length>1&&(H.isGesturing=!0)&&$(Se,H.isDragging)},L=function(){return(H.isGesturing=!1)||C(H)},se=function(Se){if(!De(Se)){var Ae=z(),oe=ie();ge((Ae-ee)*le,(oe-re)*le,1),ee=Ae,re=oe,h&&Xe.restart(!0)}},ue=function(Se){if(!De(Se)){Se=ia(Se,u),Z&&(ve=!0);var Ae=(Se.deltaMode===1?l:Se.deltaMode===2?Gn.innerHeight:1)*g;ge(Se.deltaX*Ae,Se.deltaY*Ae,0),h&&!q&&Xe.restart(!0)}},Be=function(Se){if(!De(Se)){var Ae=Se.clientX,oe=Se.clientY,He=Ae-H.x,ke=oe-H.y;H.x=Ae,H.y=oe,Ye=!0,h&&Xe.restart(!0),(He||ke)&&P(He,ke)}},Ie=function(Se){H.event=Se,D(H)},je=function(Se){H.event=Se,O(H)},Qe=function(Se){return De(Se)||ia(Se,u)&&K(H)};Xe=H._dc=Kt.delayedCall(d||.25,qe).pause(),H.deltaX=H.deltaY=0,H._vx=Hc(0,50,!0),H._vy=Hc(0,50,!0),H.scrollX=z,H.scrollY=ie,H.isDragging=H.isGesturing=H.isPressed=!1,vp(this),H.enable=function(ye){return H.isEnabled||(mn(de?ce:a,"scroll",Gc),o.indexOf("scroll")>=0&&mn(de?ce:a,"scroll",se,E,Me),o.indexOf("wheel")>=0&&mn(a,"wheel",ue,E,Me),(o.indexOf("touch")>=0&&_p||o.indexOf("pointer")>=0)&&(mn(a,li[0],be,E,Me),mn(ce,li[2],te),mn(ce,li[3],te),me&&mn(a,"click",ot,!0,!0),K&&mn(a,"click",Qe),$&&mn(ce,"gesturestart",ne),C&&mn(ce,"gestureend",L),D&&mn(a,br+"enter",Ie),O&&mn(a,br+"leave",je),V&&mn(a,br+"move",Be)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Ye=k=!1,H._vx.reset(),H._vy.reset(),ee=z(),re=ie(),ye&&ye.type&&be(ye),he&&he(H)),H},H.disable=function(){H.isEnabled&&(Rs.filter(function(ye){return ye!==H&&Ta(ye.target)}).length||dn(de?ce:a,"scroll",Gc),H.isPressed&&(H._vx.reset(),H._vy.reset(),dn(q?a:ce,li[1],ae,!0)),dn(de?ce:a,"scroll",se,Me),dn(a,"wheel",ue,Me),dn(a,li[0],be,Me),dn(ce,li[2],te),dn(ce,li[3],te),dn(a,"click",ot,!0),dn(a,"click",Qe),dn(ce,"gesturestart",ne),dn(ce,"gestureend",L),dn(a,br+"enter",Ie),dn(a,br+"leave",je),dn(a,br+"move",Be),H.isEnabled=H.isPressed=H.isDragging=!1,j&&j(H))},H.kill=H.revert=function(){H.disable();var ye=Rs.indexOf(H);ye>=0&&Rs.splice(ye,1),Ui===H&&(Ui=0)},Rs.push(H),q&&Ta(a)&&(Ui=H),H.enable(_)},og(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Dt.version="3.15.0";Dt.create=function(r){return new Dt(r)};Dt.register=yp;Dt.getAll=function(){return Rs.slice()};Dt.getById=function(r){return Rs.filter(function(e){return e.vars.id===r})[0]};xp()&&Kt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,Es,rt,ft,zn,ct,Au,cl,Va,ba,pa,io,sn,El,Vc,vn,hh,fh,Ts,Ep,Hl,Tp,gn,Wc,bp,Ap,ji,Xc,wu,Os,Ru,Aa,Yc,Vl,ro=1,an=Date.now,Wl=an(),ri=0,ma=0,dh=function(e,t,n){var i=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ph=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ug=function r(){return ma&&requestAnimationFrame(r)},mh=function(){return El=1},_h=function(){return El=0},pi=function(e){return e},_a=function(e){return Math.round(e*1e5)/1e5||0},wp=function(){return typeof window<"u"},Rp=function(){return Ee||wp()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Hr=function(e){return!!~Au.indexOf(e)},Cp=function(e){return(e==="Height"?Ru:rt["inner"+e])||zn["client"+e]||ct["client"+e]},Pp=function(e){return ar(e,"getBoundingClientRect")||(Hr(e)?function(){return Jo.width=rt.innerWidth,Jo.height=Ru,Jo}:function(){return Li(e)})},hg=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ar(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Cp(s):e["client"+s])||0}},fg=function(e,t){return!t||~Si.indexOf(e)?Pp(e):function(){return Jo}},xi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ar(e,n))?o()-Pp(e)()[s]:Hr(e)?(zn[n]||ct[n])-Cp(i):e[n]-e["offset"+i])},so=function(e,t){for(var n=0;n<Ts.length;n+=3)(!t||~t.indexOf(Ts[n+1]))&&e(Ts[n],Ts[n+1],Ts[n+2])},Fn=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},ga=function(e){return typeof e=="number"},Ar=function(e){return typeof e=="object"},ra=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Zr=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Qr=Math.abs,Lp="left",Dp="top",Cu="right",Pu="bottom",Or="width",Fr="height",wa="Right",Ra="Left",Ca="Top",Pa="Bottom",It="padding",Kn="margin",Ys="Width",Lu="Height",zt="px",Zn=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},dg=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Li=function(e,t){var n=t&&Zn(e)[Vc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ul=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Up=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pg=function(e){return function(t){return Ee.utils.snap(Up(e),t)}},Du=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},mg=function(e){return function(t,n){return Du(Up(e))(t,n.direction)}},ao=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Yt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Xt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},vh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lo={toggleActions:"play",anticipatePin:0},hl={top:0,left:0,center:.5,bottom:1,right:1},jo=function(e,t){if(Fn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hl?hl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},co=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=ft.createElement("div"),_=Hr(n)||ar(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?ct:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,v=S?c:u,T="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(T+=(i===kt?Cu:Pu)+":"+(o+parseFloat(d))+"px;"),a&&(T+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=T,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ko(g,0,i,S),g},Ko=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ys]=1,s["border"+a+Ys]=0,s[n.p]=t+"px",Ee.set(e,s)},tt=[],qc={},Wa,xh=function(){return an()-ri>34&&(Wa||(Wa=requestAnimationFrame(Oi)))},Jr=function(){(!gn||!gn.isPressed||gn.startX>ct.clientWidth)&&(at.cache++,gn?Wa||(Wa=requestAnimationFrame(Oi)):Oi(),ri||Wr("scrollStart"),ri=an())},Xl=function(){Ap=rt.innerWidth,bp=rt.innerHeight},va=function(e){at.cache++,(e===!0||!sn&&!Tp&&!ft.fullscreenElement&&!ft.webkitFullscreenElement&&(!Wc||Ap!==rt.innerWidth||Math.abs(rt.innerHeight-bp)>rt.innerHeight*.25))&&cl.restart(!0)},Vr={},_g=[],Ip=function r(){return Xt(nt,"scrollEnd",r)||Lr(!0)},Wr=function(e){return Vr[e]&&Vr[e].map(function(t){return t()})||_g},On=[],Np=function(e){for(var t=0;t<On.length;t+=5)(!e||On[t+4]&&On[t+4].query===e)&&(On[t].style.cssText=On[t+1],On[t].getBBox&&On[t].setAttribute("transform",On[t+2]||""),On[t+3].uncache=1)},Op=function(){return at.forEach(function(e){return cn(e)&&++e.cacheID&&(e.rec=e())})},Uu=function(e,t){var n;for(vn=0;vn<tt.length;vn++)n=tt[vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Aa=!0,t&&Np(t),t||Wr("revert")},Fp=function(e,t){at.cache++,(t||!xn)&&at.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(rt.history.scrollRestoration=wu=e)},xn,Br=0,Mh,gg=function(){if(Mh!==Br){var e=Mh=Br;requestAnimationFrame(function(){return e===Br&&Lr(!0)})}},Bp=function(){ct.appendChild(Os),Ru=!gn&&Os.offsetHeight||rt.innerHeight,ct.removeChild(Os)},Sh=function(e){return Va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Lr=function(e,t){if(zn=ft.documentElement,ct=ft.body,Au=[rt,ft,zn,ct],ri&&!e&&!Aa){Yt(nt,"scrollEnd",Ip);return}Bp(),xn=nt.isRefreshing=!0,Aa||Op();var n=Wr("refreshInit");Ep&&nt.sort(),t||Uu(),at.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Aa=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Yc=1,Sh(!0),tt.forEach(function(i){var s=xi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Sh(!1),Yc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fp(wu,1),cl.pause(),Br++,xn=2,Oi(2),tt.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),xn=nt.isRefreshing=!1,Wr("refresh")},$c=0,Zo=1,La,Oi=function(e){if(e===2||!xn&&!Aa){nt.isUpdating=!0,La&&La.update(0);var t=tt.length,n=an(),i=n-Wl>=50,s=t&&tt[0].scroll();if(Zo=$c>s?-1:1,xn||($c=s),i&&(ri&&!El&&n-ri>200&&(ri=0,Wr("scrollEnd")),pa=Wl,Wl=n),Zo<0){for(vn=t;vn-- >0;)tt[vn]&&tt[vn].update(0,i);Zo=1}else for(vn=0;vn<t;vn++)tt[vn]&&tt[vn].update(0,i);nt.isUpdating=!1}Wa=0},jc=[Lp,Dp,Pu,Cu,Kn+Pa,Kn+wa,Kn+Ca,Kn+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qo=jc.concat([Or,Fr,"boxSizing","max"+Ys,"max"+Lu,"position",Kn,It,It+Ca,It+wa,It+Pa,It+Ra]),vg=function(e,t,n){Fs(n);var i=e._gsap;if(i.spacerIsNative)Fs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Yl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=jc.length,o=t.style,a=e.style,l;s--;)l=jc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Pu]=a[Cu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Or]=ul(e,Sn)+zt,o[Fr]=ul(e,kt)+zt,o[It]=a[Kn]=a[Dp]=a[Lp]="0",Fs(i),a[Or]=a["max"+Ys]=n[Or],a[Fr]=a["max"+Lu]=n[Fr],a[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xg=/([A-Z])/g,Fs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xg,"-$1").toLowerCase())}},uo=function(e){for(var t=Qo.length,n=e.style,i=[],s=0;s<t;s++)i.push(Qo[s],n[Qo[s]]);return i.t=e,i},Mg=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Jo={left:0,top:0},yh=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){cn(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?jo("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,S;if(f&&f.seek(0),isNaN(e)||(e=+e),ga(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Ko(a,n,i,!0);else{cn(t)&&(t=t(l));var v=(e||"0").split(" "),T,R,A,x;S=En(t,l)||ct,T=Li(S)||{},(!T||!T.left&&!T.top)&&Zn(S).display==="none"&&(x=S.style.display,S.style.display="block",T=Li(S),x?S.style.display=x:S.style.removeProperty("display")),R=jo(v[0],T[i.d]),A=jo(v[1]||"0",n),e=T[i.p]-c[i.p]-u+R+s-A,a&&Ko(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var U=e+n,M=o._isStart;p="scroll"+i.d2,Ko(o,U,i,M&&U>20||!M&&(h?Math.max(ct[p],zn[p]):o.parentNode[p])<=U+1),h&&(c=Li(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+zt))}return f&&S&&(p=Li(S),f.seek(d),m=Li(S),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},Sg=/(webkit|moz|length|cssText|inset)/i,Eh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ct){e._stOrig=s.cssText,a=Zn(e);for(o in a)!+o&&!Sg.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},zp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ho=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Th=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=zp(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){at.cache++,o.tween&&Oi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ee.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Yt(e,"wheel",n.wheelHandler),nt.isTouch&&Yt(e,"touchmove",n.wheelHandler),s},nt=function(){function r(t,n){Es||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=pi;return}n=gh(Fn(n)||ga(n)||n.nodeType?{trigger:n}:n,lo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,v=s.once,T=s.snap,R=s.pinReparent,A=s.pinSpacer,x=s.containerAnimation,U=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:kt,F=!h&&h!==0,B=En(n.scroller||rt),Q=Ee.core.getCache(B),D=Hr(B),O=("pinType"in n?n.pinType:ar(B,"pinType")||D&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=F&&n.toggleActions.split(" "),q="markers"in n?n.markers:lo.markers,$=D?0:parseFloat(Zn(B)["border"+y.p2+Ys])||0,C=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(C)},he=hg(B,D,y),j=fg(B,D),K=0,le=0,Me=0,me=dr(B,y),Ue,Pe,Fe,Xe,k,Ye,ve,Le,xe,H,ze,w,E,z,ie,ee,re,_e,de,ce,we,Ge,J,ot,De,qe,Te,ge,P,ae,be,te,ne,L,se,ue,Be,Ie,je;if(C._startClamp=C._endClamp=!1,C._dir=y,p*=45,C.scroller=B,C.scroll=x?x.time.bind(x):me,Xe=me(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ep=1,n.refreshPriority===-9999&&(La=C)),Q.tweenScroll=Q.tweenScroll||{top:Th(B,kt),left:Th(B,Sn)},C.tweenTo=Ue=Q.tweenScroll[y.p],C.scrubDuration=function(oe){ne=ga(oe)&&oe,ne?te?te.duration(oe):te=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return m&&m(C)}}):(te&&te.progress(1).kill(),te=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),ae=0,l||(l=i.vars.id)),T&&((!Ar(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in ct.style&&Ee.set(D?[ct,zn]:B,{scrollBehavior:"auto"}),at.forEach(function(oe){return cn(oe)&&oe.target===(D?ft.scrollingElement||zn:B)&&(oe.smooth=!1)}),Fe=cn(T.snapTo)?T.snapTo:T.snapTo==="labels"?pg(i):T.snapTo==="labelsDirectional"?mg(i):T.directional!==!1?function(oe,He){return Du(T.snapTo)(oe,an()-le<500?0:He.direction)}:Ee.utils.snap(T.snapTo),L=T.duration||{min:.1,max:2},L=Ar(L)?ba(L.min,L.max):ba(L,L),se=Ee.delayedCall(T.delay||ne/2||.1,function(){var oe=me(),He=an()-le<500,ke=Ue.tween;if((He||Math.abs(C.getVelocity())<10)&&!ke&&!El&&K!==oe){var Ke=(oe-Ye)/z,Tt=i&&!F?i.totalProgress():Ke,it=He?0:(Tt-be)/(an()-pa)*1e3||0,vt=Ee.utils.clamp(-Ke,1-Ke,Qr(it/2)*it/.185),Ot=Ke+(T.inertia===!1?0:vt),St,xt,ut=T,Un=ut.onStart,b=ut.onInterrupt,N=ut.onComplete;if(St=Fe(Ot,C),ga(St)||(St=Ot),xt=Math.max(0,Math.round(Ye+St*z)),oe<=ve&&oe>=Ye&&xt!==oe){if(ke&&!ke._initted&&ke.data<=Qr(xt-oe))return;T.inertia===!1&&(vt=St-Ke),Ue(xt,{duration:L(Qr(Math.max(Qr(Ot-Tt),Qr(St-Tt))*.185/it/.05||0)),ease:T.ease||"power3",data:Qr(xt-oe),onInterrupt:function(){return se.restart(!0)&&b&&Zr(C,b)},onComplete:function(){C.update(),K=me(),i&&!F&&(te?te.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),ae=be=i&&!F?i.totalProgress():C.progress,S&&S(C),N&&Zr(C,N)}},oe,vt*z,xt-oe-vt*z),Un&&Zr(C,Un,Ue.tween)}}else C.isActive&&K!==oe&&se.restart(!0)}).pause()),l&&(qc[l]=C),d=C.trigger=En(d||f!==!0&&f),je=d&&d._gsap&&d._gsap.stRevert,je&&(je=je(C)),f=f===!0?d:En(f),Fn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Kn||(g=!g&&f.parentNode&&f.parentNode.style&&Zn(f.parentNode).display==="flex"?!1:It),C.pin=f,Pe=Ee.core.getCache(f),Pe.spacer?ie=Pe.pinState:(A&&(A=En(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=uo(A))),Pe.spacer=_e=A||ft.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),Pe.pinState=ie=uo(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),C.spacer=_e=Pe.spacer,P=Zn(f),ot=P[g+y.os2],ce=Ee.getProperty(f),we=Ee.quickSetter(f,y.a,zt),Yl(f,_e,P),re=uo(f)),q){w=Ar(q)?gh(q,vh):vh,H=co("scroller-start",l,B,y,w,0),ze=co("scroller-end",l,B,y,w,0,H),de=H["offset"+y.op.d2];var Qe=En(ar(B,"content")||B);Le=this.markerStart=co("start",l,Qe,y,w,de,0,x),xe=this.markerEnd=co("end",l,Qe,y,w,de,0,x),x&&(Ie=Ee.quickSetter([Le,xe],y.a,zt)),!O&&!(Si.length&&ar(B,"fixedMarkers")===!0)&&(dg(D?ct:B),Ee.set([H,ze],{force3D:!0}),qe=Ee.quickSetter(H,y.a,zt),ge=Ee.quickSetter(ze,y.a,zt))}if(x){var ye=x.vars.onUpdate,Se=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){C.update(0,0,1),ye&&ye.apply(x,Se||[])})}if(C.previous=function(){return tt[tt.indexOf(C)-1]},C.next=function(){return tt[tt.indexOf(C)+1]},C.revert=function(oe,He){if(!He)return C.kill(!0);var ke=oe!==!1||!C.enabled,Ke=sn;ke!==C.isReverted&&(ke&&(ue=Math.max(me(),C.scroll.rec||0),Me=C.progress,Be=i&&i.progress()),Le&&[Le,xe,H,ze].forEach(function(Tt){return Tt.style.display=ke?"none":"block"}),ke&&(sn=C,C.update(ke)),f&&(!R||!C.isActive)&&(ke?vg(f,_e,ie):Yl(f,_e,Zn(f),De)),ke||C.update(ke),sn=Ke,C.isReverted=ke)},C.refresh=function(oe,He,ke,Ke){if(!((sn||!C.enabled)&&!He)){if(f&&oe&&ri){Yt(r,"scrollEnd",Ip);return}!xn&&Z&&Z(C),sn=C,Ue.tween&&!ke&&(Ue.tween.kill(),Ue.tween=0),te&&te.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function($e){return $e.vars.immediateRender&&$e.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Tt=he(),it=j(),vt=x?x.duration():xi(B,y),Ot=z<=.01||!z,St=0,xt=Ke||0,ut=Ar(ke)?ke.end:n.end,Un=n.endTrigger||d,b=Ar(ke)?ke.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),N=C.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,C),Y=d&&Math.max(0,tt.indexOf(C))||0,X=Y,G,fe,Re,Ve,Ce,Ne,We,Ze,yt,Ft,ht,fn,pt;for(q&&Ar(ke)&&(fn=Ee.getProperty(H,y.p),pt=Ee.getProperty(ze,y.p));X-- >0;)Ne=tt[X],Ne.end||Ne.refresh(0,1)||(sn=C),We=Ne.pin,We&&(We===d||We===f||We===N)&&!Ne.isReverted&&(Ft||(Ft=[]),Ft.unshift(Ne),Ne.revert(!0,!0)),Ne!==tt[X]&&(Y--,X--);for(cn(b)&&(b=b(C)),b=dh(b,"start",C),Ye=yh(b,d,Tt,y,me(),Le,H,C,it,$,O,vt,x,C._startClamp&&"_startClamp")||(f?-.001:0),cn(ut)&&(ut=ut(C)),Fn(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(Fn(b)?b.split(" ")[0]:"")+ut:(St=jo(ut.substr(2),Tt),ut=Fn(b)?b:(x?Ee.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ye):Ye)+St,Un=d)),ut=dh(ut,"end",C),ve=Math.max(Ye,yh(ut||(Un?"100% 0":vt),Un,Tt,y,me()+St,xe,ze,C,it,$,O,vt,x,C._endClamp&&"_endClamp"))||-.001,St=0,X=Y;X--;)Ne=tt[X]||{},We=Ne.pin,We&&Ne.start-Ne._pinPush<=Ye&&!x&&Ne.end>0&&(G=Ne.end-(C._startClamp?Math.max(0,Ne.start):Ne.start),(We===d&&Ne.start-Ne._pinPush<Ye||We===N)&&isNaN(b)&&(St+=G*(1-Ne.progress)),We===f&&(xt+=G));if(Ye+=St,ve+=St,C._startClamp&&(C._startClamp+=St),C._endClamp&&!xn&&(C._endClamp=ve||-.001,ve=Math.min(ve,xi(B,y))),z=ve-Ye||(Ye-=.01)&&.001,Ot&&(Me=Ee.utils.clamp(0,1,Ee.utils.normalize(Ye,ve,ue))),C._pinPush=xt,Le&&St&&(G={},G[y.a]="+="+St,N&&(G[y.p]="-="+me()),Ee.set([Le,xe],G)),f&&!(Yc&&C.end>=xi(B,y)))G=Zn(f),Ve=y===kt,Re=me(),Ge=parseFloat(ce(y.a))+xt,!vt&&ve>1&&(ht=(D?ft.scrollingElement||zn:B).style,ht={style:ht,value:ht["overflow"+y.a.toUpperCase()]},D&&Zn(ct)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+y.a.toUpperCase()]="scroll")),Yl(f,_e,G),re=uo(f),fe=Li(f,!0),Ze=O&&dr(B,Ve?Sn:kt)(),g?(De=[g+y.os2,z+xt+zt],De.t=_e,X=g===It?ul(f,y)+z+xt:0,X&&(De.push(y.d,X+zt),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=X+zt)),Fs(De),N&&tt.forEach(function($e){$e.pin===N&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),O&&me(ue)):(X=ul(f,y),X&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=X+zt)),O&&(Ce={top:fe.top+(Ve?Re-Ye:Ze)+zt,left:fe.left+(Ve?Ze:Re-Ye)+zt,boxSizing:"border-box",position:"fixed"},Ce[Or]=Ce["max"+Ys]=Math.ceil(fe.width)+zt,Ce[Fr]=Ce["max"+Lu]=Math.ceil(fe.height)+zt,Ce[Kn]=Ce[Kn+Ca]=Ce[Kn+wa]=Ce[Kn+Pa]=Ce[Kn+Ra]="0",Ce[It]=G[It],Ce[It+Ca]=G[It+Ca],Ce[It+wa]=G[It+wa],Ce[It+Pa]=G[It+Pa],Ce[It+Ra]=G[It+Ra],ee=Mg(ie,Ce,R),xn&&me(0)),i?(yt=i._initted,Hl(1),i.render(i.duration(),!0,!0),J=ce(y.a)-Ge+z+xt,Te=Math.abs(z-J)>1,O&&Te&&ee.splice(ee.length-2,2),i.render(0,!0,!0),yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Hl(0)):J=z,ht&&(ht.value?ht.style["overflow"+y.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+y.a));else if(d&&me()&&!x)for(fe=d.parentNode;fe&&fe!==ct;)fe._pinOffset&&(Ye-=fe._pinOffset,ve-=fe._pinOffset),fe=fe.parentNode;Ft&&Ft.forEach(function($e){return $e.revert(!1,!0)}),C.start=Ye,C.end=ve,Xe=k=xn?ue:me(),!x&&!xn&&(Xe<ue&&me(ue),C.scroll.rec=0),C.revert(!1,!0),le=an(),se&&(K=-1,se.restart(!0)),sn=0,i&&F&&(i._initted||Be)&&i.progress()!==Be&&i.progress(Be||0,!0).render(i.time(),!0,!0),(Ot||Me!==C.progress||x||_||i&&!i._initted)&&(i&&!F&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ye<-.001&&!Me?Ee.utils.normalize(Ye,ve,0):Me,!0),C.progress=Ot||(Xe-Ye)/z===Me?0:Me),f&&g&&(_e._pinOffset=Math.round(C.progress*J)),te&&te.invalidate(),isNaN(fn)||(fn-=Ee.getProperty(H,y.p),pt-=Ee.getProperty(ze,y.p),ho(H,y,fn),ho(Le,y,fn-(Ke||0)),ho(ze,y,pt),ho(xe,y,pt-(Ke||0))),Ot&&!xn&&C.update(),u&&!xn&&!E&&(E=!0,u(C),E=!1)}},C.getVelocity=function(){return(me()-k)/(an()-pa)*1e3||0},C.endAnimation=function(){ra(C.callbackAnimation),i&&(te?te.progress(1):i.paused()?F||ra(i,C.direction<0,1):ra(i,i.reversed()))},C.labelToScroll=function(oe){return i&&i.labels&&(Ye||C.refresh()||Ye)+i.labels[oe]/i.duration()*z||0},C.getTrailing=function(oe){var He=tt.indexOf(C),ke=C.direction>0?tt.slice(0,He).reverse():tt.slice(He+1);return(Fn(oe)?ke.filter(function(Ke){return Ke.vars.preventOverlaps===oe}):ke).filter(function(Ke){return C.direction>0?Ke.end<=Ye:Ke.start>=ve})},C.update=function(oe,He,ke){if(!(x&&!ke&&!oe)){var Ke=xn===!0?ue:C.scroll(),Tt=oe?0:(Ke-Ye)/z,it=Tt<0?0:Tt>1?1:Tt||0,vt=C.progress,Ot,St,xt,ut,Un,b,N,Y;if(He&&(k=Xe,Xe=x?me():Ke,T&&(be=ae,ae=i&&!F?i.totalProgress():it)),p&&f&&!sn&&!ro&&ri&&(!it&&Ye<Ke+(Ke-k)/(an()-pa)*p?it=1e-4:it===1&&ve>Ke+(Ke-k)/(an()-pa)*p&&(it=.9999)),it!==vt&&C.enabled){if(Ot=C.isActive=!!it&&it<1,St=!!vt&&vt<1,b=Ot!==St,Un=b||!!it!=!!vt,C.direction=it>vt?1:-1,C.progress=it,Un&&!sn&&(xt=it&&!vt?0:it===1?1:vt===1?2:3,F&&(ut=!b&&W[xt+1]!=="none"&&W[xt+1]||W[xt],Y=i&&(ut==="complete"||ut==="reset"||ut in i))),M&&(b||Y)&&(Y||h||!i)&&(cn(M)?M(C):C.getTrailing(M).forEach(function(Re){return Re.endAnimation()})),F||(te&&!sn&&!ro?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",it,i._tTime/i._tDur):(te.vars.totalProgress=it,te.invalidate().restart())):i&&i.totalProgress(it,!!(sn&&(le||oe)))),f){if(oe&&g&&(_e.style[g+y.os2]=ot),!O)we(_a(Ge+J*it));else if(Un){if(N=!oe&&it>vt&&ve+1>Ke&&Ke+1>=xi(B,y),R)if(!oe&&(Ot||N)){var X=Li(f,!0),G=Ke-Ye;Eh(f,ct,X.top+(y===kt?G:0)+zt,X.left+(y===kt?0:G)+zt)}else Eh(f,_e);Fs(Ot||N?ee:re),Te&&it<1&&Ot||we(Ge+(it===1&&!N?J:0))}}T&&!Ue.tween&&!sn&&!ro&&se.restart(!0),a&&(b||v&&it&&(it<1||!Vl))&&Va(a.targets).forEach(function(Re){return Re.classList[Ot||v?"add":"remove"](a.className)}),o&&!F&&!oe&&o(C),Un&&!sn?(F&&(Y&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(C)),(b||!Vl)&&(c&&b&&Zr(C,c),V[xt]&&Zr(C,V[xt]),v&&(it===1?C.kill(!1,1):V[xt]=0),b||(xt=it===1?1:3,V[xt]&&Zr(C,V[xt]))),U&&!Ot&&Math.abs(C.getVelocity())>(ga(U)?U:2500)&&(ra(C.callbackAnimation),te?te.progress(1):ra(i,ut==="reverse"?1:!it,1))):F&&o&&!sn&&o(C)}if(ge){var fe=x?Ke/x.duration()*(x._caScrollDist||0):Ke;qe(fe+(H._isFlipped?1:0)),ge(fe)}Ie&&Ie(-Ke/x.duration()*(x._caScrollDist||0))}},C.enable=function(oe,He){C.enabled||(C.enabled=!0,Yt(B,"resize",va),D||Yt(B,"scroll",Jr),Z&&Yt(r,"refreshInit",Z),oe!==!1&&(C.progress=Me=0,Xe=k=K=me()),He!==!1&&C.refresh())},C.getTween=function(oe){return oe&&Ue?Ue.tween:te},C.setPositions=function(oe,He,ke,Ke){if(x){var Tt=x.scrollTrigger,it=x.duration(),vt=Tt.end-Tt.start;oe=Tt.start+vt*oe/it,He=Tt.start+vt*He/it}C.refresh(!1,!1,{start:ph(oe,ke&&!!C._startClamp),end:ph(He,ke&&!!C._endClamp)},Ke),C.update()},C.adjustPinSpacing=function(oe){if(De&&oe){var He=De.indexOf(y.d)+1;De[He]=parseFloat(De[He])+oe+zt,De[1]=parseFloat(De[1])+oe+zt,Fs(De)}},C.disable=function(oe,He){if(oe!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,He||te&&te.pause(),ue=0,Pe&&(Pe.uncache=1),Z&&Xt(r,"refreshInit",Z),se&&(se.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!D)){for(var ke=tt.length;ke--;)if(tt[ke].scroller===B&&tt[ke]!==C)return;Xt(B,"resize",va),D||Xt(B,"scroll",Jr)}},C.kill=function(oe,He){C.disable(oe,He),te&&!He&&te.kill(),l&&delete qc[l];var ke=tt.indexOf(C);ke>=0&&tt.splice(ke,1),ke===vn&&Zo>0&&vn--,ke=0,tt.forEach(function(Ke){return Ke.scroller===C.scroller&&(ke=1)}),ke||xn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,oe&&i.revert({kill:!1}),He||i.kill()),Le&&[Le,xe,H,ze].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),La===C&&(La=0),f&&(Pe&&(Pe.uncache=1),ke=0,tt.forEach(function(Ke){return Ke.pin===f&&ke++}),ke||(Pe.spacer=0)),n.onKill&&n.onKill(C)},tt.push(C),C.enable(!1,!1),je&&je(C),i&&i.add&&!z){var Ae=C.update;C.update=function(){C.update=Ae,at.cache++,Ye||ve||C.refresh()},Ee.delayedCall(.01,C.update),z=.01,Ye=ve=0}else C.refresh();f&&gg()},r.register=function(n){return Es||(Ee=n||Rp(),wp()&&window.document&&r.enable(),Es=ma),Es},r.defaults=function(n){if(n)for(var i in n)lo[i]=n[i];return lo},r.disable=function(n,i){ma=0,tt.forEach(function(o){return o[i?"kill":"disable"](n)}),Xt(rt,"wheel",Jr),Xt(ft,"scroll",Jr),clearInterval(io),Xt(ft,"touchcancel",pi),Xt(ct,"touchstart",pi),ao(Xt,ft,"pointerdown,touchstart,mousedown",mh),ao(Xt,ft,"pointerup,touchend,mouseup",_h),cl.kill(),so(Xt);for(var s=0;s<at.length;s+=3)oo(Xt,at[s],at[s+1]),oo(Xt,at[s],at[s+2])},r.enable=function(){if(rt=window,ft=document,zn=ft.documentElement,ct=ft.body,Ee){if(Va=Ee.utils.toArray,ba=Ee.utils.clamp,Xc=Ee.core.context||pi,Hl=Ee.core.suppressOverwrites||pi,wu=rt.history.scrollRestoration||"auto",$c=rt.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),ct){ma=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",Bp(),ug(),Dt.register(Ee),r.isTouch=Dt.isTouch,ji=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wc=Dt.isTouch===1,Yt(rt,"wheel",Jr),Au=[rt,ft,zn,ct],Ee.matchMedia?(r.matchMedia=function(u){var h=Ee.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Ee.addEventListener("matchMediaInit",function(){Op(),Uu()}),Ee.addEventListener("matchMediaRevert",function(){return Np()}),Ee.addEventListener("matchMedia",function(){Lr(0,1),Wr("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Xl(),Xl})):console.warn("Requires GSAP 3.11.0 or later"),Xl(),Yt(ft,"scroll",Jr);var n=ct.hasAttribute("style"),i=ct.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Li(ct),kt.m=Math.round(a.top+kt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ct.setAttribute("style",""),ct.removeAttribute("style")),io=setInterval(xh,250),Ee.delayedCall(.5,function(){return ro=0}),Yt(ft,"touchcancel",pi),Yt(ct,"touchstart",pi),ao(Yt,ft,"pointerdown,touchstart,mousedown",mh),ao(Yt,ft,"pointerup,touchend,mouseup",_h),Vc=Ee.utils.checkPrefix("transform"),Qo.push(Vc),Es=an(),cl=Ee.delayedCall(.2,Lr).pause(),Ts=[ft,"visibilitychange",function(){var u=rt.innerWidth,h=rt.innerHeight;ft.hidden?(hh=u,fh=h):(hh!==u||fh!==h)&&va()},ft,"DOMContentLoaded",Lr,rt,"load",Lr,rt,"resize",va],so(Yt),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<at.length;l+=3)oo(Xt,at[l],at[l+1]),oo(Xt,at[l],at[l+2])}else if(ft){var c=function u(){r.enable(),ft.removeEventListener("DOMContentLoaded",u)};ft.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Vl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(io)||(io=i)&&setInterval(xh,i),"ignoreMobileResize"in n&&(Wc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(so(Xt)||so(Yt,n.autoRefreshEvents||"none"),Tp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=at.indexOf(s),a=Hr(s);~o&&at.splice(o,a?6:2),i&&(a?Si.unshift(rt,i,ct,i,zn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Fn(n)?En(n):n).getBoundingClientRect(),a=o[s?Or:Fr]*i||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},r.positionInViewport=function(n,i,s){Fn(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?Or:Fr],l=i==null?a/2:i in hl?hl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(s){return s()})}},r}();nt.version="3.15.0";nt.saveStyles=function(r){return r?Va(r).forEach(function(e){if(e&&e.style){var t=On.indexOf(e);t>=0&&On.splice(t,5),On.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Xc())}}):On};nt.revert=function(r,e){return Uu(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?va(!0):(Es||nt.register())&&Lr(!0)};nt.update=function(r){return++at.cache&&Oi(r===!0?2:0)};nt.clearScrollMemory=Fp;nt.maxScroll=function(r,e){return xi(r,e?Sn:kt)};nt.getScrollFunc=function(r,e){return dr(En(r),e?Sn:kt)};nt.getById=function(r){return qc[r]};nt.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!ri};nt.snapDirectional=Du;nt.addEventListener=function(r,e){var t=Vr[r]||(Vr[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=Vr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Ee.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&cn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return cn(s)&&(s=s(),Yt(nt,"refresh",function(){return s=e.batchMax()})),Va(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var bh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ql=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===zn&&r(ct,t)},fo={auto:1,scroll:1},yg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=an(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ct&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fo[(l=Zn(s)).overflowY]||fo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Hr(s)&&(fo[(l=Zn(s)).overflowY]||fo[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},kp=function(e,t,n,i){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Yt(ft,Dt.eventTypes[0],wh,!1,!0)},onDisable:function(){return Xt(ft,Dt.eventTypes[0],wh,!0)}})},Eg=/(input|label|select|textarea)/i,Ah,wh=function(e){var t=Eg.test(e.target.tagName);(t||Ah)&&(e._gsapAllow=!0,Ah=t)},Tg=function(e){Ar(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=En(e.target)||zn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),d=ji&&(e.content&&En(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=dr(c,kt),g=dr(c,Sn),_=1,p=(Dt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,m=0,S=cn(i)?function(){return i(a)}:function(){return i||2.8},v,T,R=kp(c,e.type,!0,s),A=function(){return T=!1},x=pi,U=pi,M=function(){l=xi(c,kt),U=ba(ji?1:0,l),n&&(x=ba(0,xi(c,Sn))),v=Br},y=function(){d._gsap.y=_a(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(T){requestAnimationFrame(A);var q=_a(a.deltaY/2),$=U(f.v-q);if(d&&$!==f.v+f.offset){f.offset=$-f.v;var C=_a((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",f.cacheID=at.cache,Oi()}return!0}f.offset&&y(),T=!0},B,Q,D,O,V=function(){M(),B.isActive()&&B.vars.scrollY>l&&(f()>l?B.progress(1)&&f(l):B.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(W){return ji&&W.type==="touchmove"&&F()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){T=!1;var W=_;_=_a((rt.visualViewport&&rt.visualViewport.scale||1)/p),B.pause(),W!==_&&ql(c,_>1.01?!0:n?!1:"x"),Q=g(),D=f(),M(),v=Br},e.onRelease=e.onGestureStart=function(W,q){if(f.offset&&y(),!q)O.restart(!0);else{at.cache++;var $=S(),C,Z;n&&(C=g(),Z=C+$*.05*-W.velocityX/.227,$*=bh(g,C,Z,xi(c,Sn)),B.vars.scrollX=x(Z)),C=f(),Z=C+$*.05*-W.velocityY/.227,$*=bh(f,C,Z,xi(c,kt)),B.vars.scrollY=U(Z),B.invalidate().duration($).play(.01),(ji&&B.vars.scrollY>=l||C>=l-1)&&Ee.to({},{onUpdate:V,duration:$})}o&&o(W)},e.onWheel=function(){B._ts&&B.pause(),an()-m>1e3&&(v=0,m=an())},e.onChange=function(W,q,$,C,Z){if(Br!==v&&M(),q&&n&&g(x(C[2]===q?Q+(W.startX-W.x):g()+q-C[1])),$){f.offset&&y();var he=Z[2]===$,j=he?D+W.startY-W.y:f()+$-Z[1],K=U(j);he&&j!==K&&(D+=K-j),f(K)}($||q)&&Oi()},e.onEnable=function(){ql(c,n?!1:"x"),nt.addEventListener("refresh",V),Yt(rt,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){ql(c,!0),Xt(rt,"resize",V),nt.removeEventListener("refresh",V),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=ji,ji&&!f()&&f(1),ji&&Ee.ticker.add(pi),O=a._dc,B=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zp(f,f(),function(){return B.pause()})},onUpdate:Oi,onComplete:O.vars.onComplete}),a};nt.sort=function(r){if(cn(r))return tt.sort(r);var e=rt.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Dt(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return gn;if(r===!0&&gn)return gn.enable();if(r===!1){gn&&gn.kill(),gn=r;return}var e=r instanceof Dt?r:Tg(r);return gn&&gn.target===e.target&&gn.kill(),Hr(e.target)&&(gn=e),e};nt.core={_getVelocityProp:Hc,_inputObserver:kp,_scrollers:at,_proxies:Si,bridge:{ss:function(){ri||Wr("scrollStart"),ri=an()},ref:function(){return sn}}};Rp()&&Ee.registerPlugin(nt);/*!
 * ScrollToPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var un,Gp,Fi,Mi,or,Hp,Bs,po,Vp=function(){return typeof window<"u"},Wp=function(){return un||Vp()&&(un=window.gsap)&&un.registerPlugin&&un},Xp=function(e){return typeof e=="string"},Rh=function(e){return typeof e=="function"},Xa=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return e===Fi||e===Mi||e===or?Math.max(Mi[i],or[i])-(Fi["inner"+n]||Mi[s]||or[s]):e[i]-e["offset"+n]},Ya=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Fi&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Mi[n]!=null?Mi:or),function(){return e[n]}},bg=function(e,t,n,i){if(Rh(e)&&(e=e(t,n,i)),typeof e!="object")return Xp(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Rh(e[o])?e[o](t,n,i):e[o];return s},Yp=function(e,t){if(e=Hp(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===Fi||t===or,s=i?{top:Mi.clientTop-(Fi.pageYOffset||Mi.scrollTop||or.scrollTop||0),left:Mi.clientLeft-(Fi.pageXOffset||Mi.scrollLeft||or.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!i&&t&&(o.x+=Ya(t,"x")(),o.y+=Ya(t,"y")()),o},Ch=function(e,t,n,i,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Xp(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-s:e==="max"?Xa(t,n)-s:Math.min(Xa(t,n),Yp(e,t)[n]-s)},Kc=function(){un=Wp(),Vp()&&un&&typeof document<"u"&&document.body&&(Fi=window,or=document.body,Mi=document.documentElement,Hp=un.utils.toArray,un.config({autoKillThreshold:7}),Bs=un.config(),Gp=1)},Qs={version:"3.15.0",name:"scrollTo",rawVars:1,register:function(e){un=e,Kc()},init:function(e,t,n,i,s){Gp||Kc();var o=this,a=un.getProperty(e,"scrollSnapType");o.isWin=e===Fi,o.target=e,o.tween=n,t=bg(t,i,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Bs).autoKill,o.getX=Ya(e,"x"),o.getY=Ya(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),po||(po=un.core.globals().ScrollTrigger),un.getProperty(e,"scrollBehavior")==="smooth"&&un.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Ch(t.x,e,"x",o.x,t.offsetX||0),i,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Ch(t.y,e,"y",o.y,t.offsetY||0),i,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,d,f,g,_,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,f=c||!t.skipY?t.getY():l,g=f-l,_=d-a,p=Bs.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>p||_<-p)&&d<Xa(i,"x")&&(t.skipX=1),!t.skipY&&(g>p||g<-p)&&f<Xa(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?Fi.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(f=i.scrollTop,d=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=f+1,i.scrollLeft=d+1,i.scrollTop=f,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,po&&po.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Qs.max=Xa;Qs.getOffset=Yp;Qs.buildGetter=Ya;Qs.config=function(r){Bs||Kc()||(Bs=un.config());for(var e in r)Bs[e]=r[e]};Wp()&&un.registerPlugin(Qs);const Ag={name:"Guido Tomasella",kicker:"Data Governance · Data Quality · Data Engineering · AI",roles:["Data Manager","Tech Lead"],tagline:"I make data trustworthy, then build the agents that keep it that way."},wg={manager:{label:"Manager",disciplines:["Data","Data Quality","Data Governance"]},techLead:{label:"Tech Lead",disciplines:["Data Engineering","AI"]}},Rg={categories:{manager:"#e3b23c",techlead:"#f0ce7a",ai:"#d9772e"},nodes:[{label:"Data Governance",cat:"manager",hub:!0},{label:"Data Quality",cat:"manager",hub:!0},{label:"Data",cat:"manager"},{label:"DataHub",cat:"manager"},{label:"Lineage",cat:"manager"},{label:"Data Contracts",cat:"manager"},{label:"Data Engineering",cat:"techlead",hub:!0},{label:"Pipelines",cat:"techlead"},{label:"PySpark",cat:"techlead"},{label:"BigQuery",cat:"techlead"},{label:"Observability",cat:"techlead"},{label:"AI",cat:"ai",hub:!0},{label:"Agents",cat:"ai",hub:!0},{label:"MCP",cat:"ai"},{label:"RAG",cat:"ai"},{label:"LLMs",cat:"ai"},{label:"Knowledge Graph",cat:"ai"}]},Cg=[{branch:"Data Governance",message:"Agents read the catalog, flag drift, and keep the documentation current, so policy lives in the platform instead of a slide deck."},{branch:"Data Quality",message:"Rules run ahead of the pipeline and catch bad data before it ever reaches a dashboard."},{branch:"Data Engineering",message:"Pipelines that used to need a ticket and a week now get an agent that audits, drafts, and proposes the fix."},{branch:"AI",message:"Claude and LangChain work as teammates, wired into governance, roadmaps, and Jira itself."}],Pg=[{company:"Scanntech",role:"Data Quality & Governance Manager (CDAO)",dates:"2024 — present",summary:"Built the data governance practice from zero and federated it across five LatAm countries, then put AI agents on top to keep it running itself."},{company:"Telecom Argentina",role:"Data Governance Team Leader & Tech Lead",dates:"2021 — 2024",summary:"Brought order to a multi-terabyte data estate with hundreds of pipelines and stood up the company's first real governance layer."},{company:"Telecom Argentina",role:"Team Leader — Headend",dates:"2019 — 2021",summary:"Turned a video datacenter's operations into a data-centric practice, setting the foundation for everything that came after."}],Lg=[{title:"MCP Data Agents",description:"A small fleet of autonomous agents (Jira auditor, auto documentation, roadmap generator) that work the data catalog so people don't have to.",tech:"MCP, Claude API, DataHub",link:"https://github.com/guido-tomasella"},{title:"LangGraph RAG System",description:"A hybrid retrieval engine with self correcting search and reasoning loops, built to answer real questions over production data.",tech:"LangGraph, Qdrant, FastAPI",link:"https://github.com/guido-tomasella"},{title:"PySpark Data Quality Framework",description:"Data quality checks in PySpark that catch problems before they reach a dashboard.",tech:"PySpark, Python",link:"https://github.com/guido-tomasella"}],Dg={headline:"Let's build.",email:"tomasellaguido@hotmail.com",links:[{label:"LinkedIn",url:"https://linkedin.com/in/guido-tomasella-06222885"},{label:"GitHub",url:"https://github.com/guido-tomasella"},{label:"CV",url:"cv.pdf"}]},qp={identity:Ag,hats:wg,graph:Rg,amplifier:Cg,experience:Pg,projects:Lg,contact:Dg};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="160",es={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ug=0,Ph=1,Ig=2,$p=1,Ng=2,Ri=3,pr=0,Cn=1,Di=2,Bi=0,zs=1,Xr=2,Lh=3,Dh=4,Og=5,Rr=100,Fg=101,Bg=102,Uh=103,Ih=104,zg=200,kg=201,Gg=202,Hg=203,Zc=204,Qc=205,Vg=206,Wg=207,Xg=208,Yg=209,qg=210,$g=211,jg=212,Kg=213,Zg=214,Qg=0,Jg=1,e0=2,fl=3,t0=4,n0=5,i0=6,r0=7,jp=0,s0=1,a0=2,lr=0,Kp=1,Zp=2,Qp=3,Nu=4,o0=5,Jp=6,em=300,qs=301,$s=302,Jc=303,eu=304,Tl=306,tu=1e3,ci=1001,nu=1002,Mn=1003,Nh=1004,$l=1005,Qn=1006,l0=1007,qa=1008,cr=1009,c0=1010,u0=1011,Ou=1012,tm=1013,nr=1014,ir=1015,zi=1016,nm=1017,im=1018,zr=1020,h0=1021,ui=1023,f0=1024,d0=1025,kr=1026,js=1027,p0=1028,rm=1029,m0=1030,sm=1031,am=1033,jl=33776,Kl=33777,Zl=33778,Ql=33779,Oh=35840,Fh=35841,Bh=35842,zh=35843,om=36196,kh=37492,Gh=37496,Hh=37808,Vh=37809,Wh=37810,Xh=37811,Yh=37812,qh=37813,$h=37814,jh=37815,Kh=37816,Zh=37817,Qh=37818,Jh=37819,ef=37820,tf=37821,Jl=36492,nf=36494,rf=36495,_0=36283,sf=36284,af=36285,of=36286,lm=3e3,Gr=3001,g0=3200,v0=3201,x0=0,M0=1,ti="",Gt="srgb",Vi="srgb-linear",Fu="display-p3",bl="display-p3-linear",dl="linear",Mt="srgb",pl="rec709",ml="p3",ns=7680,lf=519,S0=512,y0=513,E0=514,cm=515,T0=516,b0=517,A0=518,w0=519,iu=35044,cf="300 es",ru=1035,Ii=2e3,_l=2001;class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uf=1234567;const Da=Math.PI/180,$a=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function on(r,e,t){return Math.max(e,Math.min(t,r))}function Bu(r,e){return(r%e+e)%e}function R0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function C0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ua(r,e,t){return(1-t)*r+t*e}function P0(r,e,t,n){return Ua(r,e,1-Math.exp(-t*n))}function L0(r,e=1){return e-Math.abs(Bu(r,e*2)-e)}function D0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function U0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function I0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function N0(r,e){return r+Math.random()*(e-r)}function O0(r){return r*(.5-Math.random())}function F0(r){r!==void 0&&(uf=r);let e=uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(r){return r*Da}function z0(r){return r*$a}function su(r){return(r&r-1)===0&&r!==0}function k0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function G0(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const um={DEG2RAD:Da,RAD2DEG:$a,generateUUID:ki,clamp:on,euclideanModulo:Bu,mapLinear:R0,inverseLerp:C0,lerp:Ua,damp:P0,pingpong:L0,smoothstep:D0,smootherstep:U0,randInt:I0,randFloat:N0,randFloatSpread:O0,seededRandom:F0,degToRad:B0,radToDeg:z0,isPowerOfTwo:su,ceilPowerOfTwo:k0,floorPowerOfTwo:gl,setQuaternionFromProperEuler:G0,normalize:mt,denormalize:gi};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],v=i[4],T=i[7],R=i[2],A=i[5],x=i[8];return s[0]=o*_+a*S+l*R,s[3]=o*p+a*v+l*A,s[6]=o*m+a*T+l*x,s[1]=c*_+u*S+h*R,s[4]=c*p+u*v+h*A,s[7]=c*m+u*T+h*x,s[2]=d*_+f*S+g*R,s[5]=d*p+f*v+g*A,s[8]=d*m+f*T+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ec.makeScale(e,t)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new st;function hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H0(){const r=vl("canvas");return r.style.display="block",r}const hf={};function Ia(r){r in hf||(hf[r]=!0,console.warn(r))}const ff=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),df=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mo={[Vi]:{transfer:dl,primaries:pl,toReference:r=>r,fromReference:r=>r},[Gt]:{transfer:Mt,primaries:pl,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[bl]:{transfer:dl,primaries:ml,toReference:r=>r.applyMatrix3(df),fromReference:r=>r.applyMatrix3(ff)},[Fu]:{transfer:Mt,primaries:ml,toReference:r=>r.convertSRGBToLinear().applyMatrix3(df),fromReference:r=>r.applyMatrix3(ff).convertLinearToSRGB()}},V0=new Set([Vi,bl]),dt={enabled:!0,_workingColorSpace:Vi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!V0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mo[e].toReference,i=mo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return mo[r].primaries},getTransfer:function(r){return r===ti?dl:mo[r].transfer}};function ks(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let is;class fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=vl("canvas")),is.width=e.width,is.height=e.height;const n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ks(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W0=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(nc(i[o].image)):s.push(nc(i[o]))}else s=nc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class Pn extends $r{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=ci,i=ci,s=Qn,o=qa,a=ui,l=cr,c=Pn.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ki(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gr?Gt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tu:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tu:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Gr:lm}set encoding(e){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gr?Gt:ti}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=em;Pn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,T=(f+1)/2,R=(m+1)/2,A=(u+d)/4,x=(h+_)/4,U=(g+p)/4;return v>T&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=x/n):T>R?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=A/i,s=U/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=x/s,i=U/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends $r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gr?Gt:ti),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Y0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pm extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class q0 extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let p=1-a;const m=l*d+c*f+u*g+h*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,m*S);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const T=a*S;if(l=l*p+d*T,c=c*p+f*T,u=u*p+g*T,h=h*p+_*T,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new I,pf=new Yr;class Za{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),go.subVectors(this.max,sa),rs.subVectors(e.a,sa),ss.subVectors(e.b,sa),as.subVectors(e.c,sa),Wi.subVectors(ss,rs),Xi.subVectors(as,ss),Mr.subVectors(rs,as);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!rc(t,rs,ss,as,go)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,rs,ss,as,go))?!1:(vo.crossVectors(Wi,Xi),t=[vo.x,vo.y,vo.z],rc(t,rs,ss,as,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new I,new I,new I,new I,new I,new I,new I,new I],si=new I,_o=new Za,rs=new I,ss=new I,as=new I,Wi=new I,Xi=new I,Mr=new I,sa=new I,go=new I,vo=new I,Sr=new I;function rc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Sr.fromArray(r,s);const a=i.x*Math.abs(Sr.x)+i.y*Math.abs(Sr.y)+i.z*Math.abs(Sr.z),l=e.dot(Sr),c=t.dot(Sr),u=n.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $0=new Za,aa=new I,sc=new I;class Qa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(sc)),this.expandByPoint(aa.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new I,ac=new I,xo=new I,Yi=new I,oc=new I,Mo=new I,lc=new I;class Al{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(ac);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Yi.dot(this.direction),l=-Yi.dot(xo),c=Yi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ac).addScaledVector(xo,d),f}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,s){oc.subVectors(t,e),Mo.subVectors(n,e),lc.crossVectors(oc,Mo);let o=this.direction.dot(lc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Mo.crossVectors(Yi,Mo));if(l<0)return null;const c=a*this.direction.dot(oc.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(lc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),o=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,K0)}lookAt(e,t,n){const i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),qi.crossVectors(n,In),qi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),qi.crossVectors(n,In)),qi.normalize(),So.crossVectors(In,qi),i[0]=qi.x,i[4]=So.x,i[8]=In.x,i[1]=qi.y,i[5]=So.y,i[9]=In.y,i[2]=qi.z,i[6]=So.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],T=n[11],R=n[15],A=i[0],x=i[4],U=i[8],M=i[12],y=i[1],F=i[5],B=i[9],Q=i[13],D=i[2],O=i[6],V=i[10],W=i[14],q=i[3],$=i[7],C=i[11],Z=i[15];return s[0]=o*A+a*y+l*D+c*q,s[4]=o*x+a*F+l*O+c*$,s[8]=o*U+a*B+l*V+c*C,s[12]=o*M+a*Q+l*W+c*Z,s[1]=u*A+h*y+d*D+f*q,s[5]=u*x+h*F+d*O+f*$,s[9]=u*U+h*B+d*V+f*C,s[13]=u*M+h*Q+d*W+f*Z,s[2]=g*A+_*y+p*D+m*q,s[6]=g*x+_*F+p*O+m*$,s[10]=g*U+_*B+p*V+m*C,s[14]=g*M+_*Q+p*W+m*Z,s[3]=S*A+v*y+T*D+R*q,s[7]=S*x+v*F+T*O+R*$,s[11]=S*U+v*B+T*V+R*C,s[15]=S*M+v*Q+T*W+R*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+p*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*c-_*d*c+_*l*f-a*p*f-h*l*m+a*d*m,v=g*d*c-u*p*c-g*l*f+o*p*f+u*l*m-o*d*m,T=u*_*c-g*h*c+g*a*f-o*_*f-u*a*m+o*h*m,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,A=t*S+n*v+i*T+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/A;return e[0]=S*x,e[1]=(_*d*s-h*p*s-_*i*f+n*p*f+h*i*m-n*d*m)*x,e[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*x,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*x,e[4]=v*x,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*x,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*m-t*l*m)*x,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*x,e[8]=T*x,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*x,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*x,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*x,e[12]=R*x,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*x,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*x,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*x,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,p=o*h,m=a*h,S=l*c,v=l*u,T=l*h,R=n.x,A=n.y,x=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+T)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-T)*A,i[5]=(1-(d+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(g+v)*x,i[9]=(p-S)*x,i[10]=(1-(d+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ii){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Ii)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_l)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ii){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===Ii)g=(o+s)*h,_=-2*h;else if(a===_l)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new I,ai=new Pt,j0=new I(0,0,0),K0=new I(1,1,1),qi=new I,So=new I,In=new I,mf=new Pt,_f=new Yr;class wl{constructor(e=0,t=0,n=0,i=wl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wl.DEFAULT_ORDER="XYZ";class mm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z0=0;const gf=new I,ls=new Yr,bi=new Pt,yo=new I,oa=new I,Q0=new I,J0=new Yr,vf=new I(1,0,0),xf=new I(0,1,0),Mf=new I(0,0,1),ev={type:"added"},tv={type:"removed"};class Jt extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new I,t=new wl,n=new Yr,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new st}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Mf,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(oa,yo,this.up):bi.lookAt(yo,oa,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(bi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ev)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,J0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new I,Ai=new I,cc=new I,wi=new I,cs=new I,us=new I,Sf=new I,uc=new I,hc=new I,fc=new I;let Eo=!1;class Jn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){oi.subVectors(i,t),Ai.subVectors(n,t),cc.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Ai),l=oi.dot(cc),c=Ai.dot(Ai),u=Ai.dot(cc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ai.subVectors(e,t),oi.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),oi.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;cs.subVectors(i,n),us.subVectors(s,n),uc.subVectors(e,n);const l=cs.dot(uc),c=us.dot(uc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,i);const u=cs.dot(hc),h=us.dot(hc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(cs,o);fc.subVectors(e,s);const f=cs.dot(fc),g=us.dot(fc);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(us,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Sf.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Sf,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},To={h:0,s:0,l:0};function dc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Bu(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=dc(o,s,e+1/3),this.g=dc(o,s,e),this.b=dc(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=tc(e.r),this.g=tc(e.g),this.b=tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return dt.fromWorkingColorSpace(nn.copy(this),e),Math.round(on(nn.r*255,0,255))*65536+Math.round(on(nn.g*255,0,255))*256+Math.round(on(nn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gt){dt.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(To);const n=Ua($i.h,To.h,t),i=Ua($i.s,To.s,t),s=Ua($i.l,To.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new et;et.NAMES=_m;let nv=0;class jr extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=zs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Qc&&(n.blendDst=this.blendDst),this.blendEquation!==Rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zu extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new I,bo=new Oe;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class gm extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vm extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fi extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let iv=0;const $n=new Pt,pc=new Jt,hs=new I,Nn=new Za,la=new Za,Wt=new I;class Dn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hm(e)?vm:gm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];la.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Nn.min,la.min),Nn.expandByPoint(Wt),Wt.addVectors(Nn.max,la.max),Nn.expandByPoint(Wt)):(Nn.expandByPoint(la.min),Nn.expandByPoint(la.max))}Nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Wt.add(hs)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new I,u[y]=new I;const h=new I,d=new I,f=new I,g=new Oe,_=new Oe,p=new Oe,m=new I,S=new I;function v(y,F,B){h.fromArray(i,y*3),d.fromArray(i,F*3),f.fromArray(i,B*3),g.fromArray(o,y*2),_.fromArray(o,F*2),p.fromArray(o,B*2),d.sub(h),f.sub(h),_.sub(g),p.sub(g);const Q=1/(_.x*p.y-p.x*_.y);isFinite(Q)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(Q),S.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Q),c[y].add(m),c[F].add(m),c[B].add(m),u[y].add(S),u[F].add(S),u[B].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,F=T.length;y<F;++y){const B=T[y],Q=B.start,D=B.count;for(let O=Q,V=Q+D;O<V;O+=3)v(n[O+0],n[O+1],n[O+2])}const R=new I,A=new I,x=new I,U=new I;function M(y){x.fromArray(s,y*3),U.copy(x);const F=c[y];R.copy(F),R.sub(x.multiplyScalar(x.dot(F))).normalize(),A.crossVectors(U,F);const Q=A.dot(u[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=Q}for(let y=0,F=T.length;y<F;++y){const B=T[y],Q=B.start,D=B.count;for(let O=Q,V=Q+D;O<V;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new qt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yf=new Pt,yr=new Al,Ao=new Qa,Ef=new I,fs=new I,ds=new I,ps=new I,mc=new I,wo=new I,Ro=new Oe,Co=new Oe,Po=new Oe,Tf=new I,bf=new I,Af=new I,Lo=new I,Do=new I;class Ni extends Jt{constructor(e=new Dn,t=new zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(mc.fromBufferAttribute(h,e),o?wo.addScaledVector(mc,u):wo.addScaledVector(mc.sub(t),u))}t.add(wo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Ao.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ao,Ef)===null||yr.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(yf.copy(s).invert(),yr.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=S,R=v;T<R;T+=3){const A=a.getX(T),x=a.getX(T+1),U=a.getX(T+2);i=Uo(this,m,e,n,c,u,h,A,x,U),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);i=Uo(this,o,e,n,c,u,h,S,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=S,R=v;T<R;T+=3){const A=T,x=T+1,U=T+2;i=Uo(this,m,e,n,c,u,h,A,x,U),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,T=p+2;i=Uo(this,o,e,n,c,u,h,S,v,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function rv(r,e,t,n,i,s,o,a){let l;if(e.side===Cn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===pr,a),l===null)return null;Do.copy(a),Do.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:r}}function Uo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,fs),r.getVertexPosition(l,ds),r.getVertexPosition(c,ps);const u=rv(r,e,t,n,fs,ds,ps,Lo);if(u){i&&(Ro.fromBufferAttribute(i,a),Co.fromBufferAttribute(i,l),Po.fromBufferAttribute(i,c),u.uv=Jn.getInterpolation(Lo,fs,ds,ps,Ro,Co,Po,new Oe)),s&&(Ro.fromBufferAttribute(s,a),Co.fromBufferAttribute(s,l),Po.fromBufferAttribute(s,c),u.uv1=Jn.getInterpolation(Lo,fs,ds,ps,Ro,Co,Po,new Oe),u.uv2=u.uv1),o&&(Tf.fromBufferAttribute(o,a),bf.fromBufferAttribute(o,l),Af.fromBufferAttribute(o,c),u.normal=Jn.getInterpolation(Lo,fs,ds,ps,Tf,bf,Af,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};Jn.getNormal(fs,ds,ps,h.normal),u.face=h}return u}class Ja extends Dn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(h,2));function g(_,p,m,S,v,T,R,A,x,U,M){const y=T/x,F=R/U,B=T/2,Q=R/2,D=A/2,O=x+1,V=U+1;let W=0,q=0;const $=new I;for(let C=0;C<V;C++){const Z=C*F-Q;for(let he=0;he<O;he++){const j=he*y-B;$[_]=j*S,$[p]=Z*v,$[m]=D,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(he/x),h.push(1-C/U),W+=1}}for(let C=0;C<U;C++)for(let Z=0;Z<x;Z++){const he=d+Z+O*C,j=d+Z+O*(C+1),K=d+(Z+1)+O*(C+1),le=d+(Z+1)+O*C;l.push(he,j,le),l.push(j,K,le),q+=6}a.addGroup(f,q,M),f+=q,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(r){const e={};for(let t=0;t<r.length;t++){const n=Ks(r[t]);for(const i in n)e[i]=n[i]}return e}function sv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xm(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}const ja={clone:Ks,merge:_n};var av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mm extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ei extends Mm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,_s=1;class lv extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ei(ms,_s,e,t);i.layers=this.layers,this.add(i);const s=new ei(ms,_s,e,t);s.layers=this.layers,this.add(s);const o=new ei(ms,_s,e,t);o.layers=this.layers,this.add(o);const a=new ei(ms,_s,e,t);a.layers=this.layers,this.add(a);const l=new ei(ms,_s,e,t);l.layers=this.layers,this.add(l);const c=new ei(ms,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sm extends Pn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cv extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gr?Gt:ti),this.texture=new Sm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ja(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Bi});s.uniforms.tEquirect.value=t;const o=new Ni(i,s),a=t.minFilter;return t.minFilter===qa&&(t.minFilter=Qn),new lv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const _c=new I,uv=new I,hv=new st;class Ki{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_c.subVectors(n,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hv.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Qa,Io=new I;class ym{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],v=i[14],T=i[15];if(n[0].setComponents(l-s,d-c,p-f,T-m).normalize(),n[1].setComponents(l+s,d+c,p+f,T+m).normalize(),n[2].setComponents(l+o,d+u,p+g,T+S).normalize(),n[3].setComponents(l-o,d-u,p-g,T-S).normalize(),n[4].setComponents(l-a,d-h,p-_,T-v).normalize(),t===Ii)n[5].setComponents(l+a,d+h,p+_,T+v).normalize();else if(t===_l)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Io.x=i.normal.x>0?e.max.x:e.min.x,Io.y=i.normal.y>0?e.max.y:e.min.y,Io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Em(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fv(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):r.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ku extends Dn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let v=0;v<c;v++){const T=v*h-s;g.push(T,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,T=S+c*(m+1),R=S+1+c*(m+1),A=S+1+c*m;f.push(v,T,A),f.push(T,R,A)}this.setIndex(f),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(_,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.width,e.height,e.widthSegments,e.heightSegments)}}var dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pv=`#ifdef USE_ALPHAHASH
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
#endif`,mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
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
#endif`,Mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sv=`#ifdef USE_BATCHING
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
#endif`,yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Av=`#ifdef USE_IRIDESCENCE
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
#endif`,wv=`#ifdef USE_BUMPMAP
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ov=`#define PI 3.141592653589793
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
} // validated`,Fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bv=`vec3 transformedNormal = objectNormal;
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
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wv=`
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
}`,Xv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
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
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
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
#endif`,fx=`struct PhysicalMaterial {
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
}`,dx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Tx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
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
}`,xM=`#if DEPTH_PACKING == 3200
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
}`,MM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,bM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,wM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,CM=`#define LAMBERT
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
}`,PM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,DM=`#define NORMAL
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
}`,UM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,NM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,kM=`uniform float size;
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
}`,GM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,VM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:dv,alphahash_pars_fragment:pv,alphamap_fragment:mv,alphamap_pars_fragment:_v,alphatest_fragment:gv,alphatest_pars_fragment:vv,aomap_fragment:xv,aomap_pars_fragment:Mv,batching_pars_vertex:Sv,batching_vertex:yv,begin_vertex:Ev,beginnormal_vertex:Tv,bsdfs:bv,iridescence_fragment:Av,bumpmap_pars_fragment:wv,clipping_planes_fragment:Rv,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Pv,clipping_planes_vertex:Lv,color_fragment:Dv,color_pars_fragment:Uv,color_pars_vertex:Iv,color_vertex:Nv,common:Ov,cube_uv_reflection_fragment:Fv,defaultnormal_vertex:Bv,displacementmap_pars_vertex:zv,displacementmap_vertex:kv,emissivemap_fragment:Gv,emissivemap_pars_fragment:Hv,colorspace_fragment:Vv,colorspace_pars_fragment:Wv,envmap_fragment:Xv,envmap_common_pars_fragment:Yv,envmap_pars_fragment:qv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:ax,envmap_vertex:jv,fog_vertex:Kv,fog_pars_vertex:Zv,fog_fragment:Qv,fog_pars_fragment:Jv,gradientmap_pars_fragment:ex,lightmap_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:hx,lights_physical_pars_fragment:fx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:_x,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:xx,map_fragment:Mx,map_pars_fragment:Sx,map_particle_fragment:yx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Tx,metalnessmap_pars_fragment:bx,morphcolor_vertex:Ax,morphnormal_vertex:wx,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Ix,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:kx,packing:Gx,premultiplied_alpha_fragment:Hx,project_vertex:Vx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:$x,shadowmap_pars_vertex:jx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:Qx,skinning_pars_vertex:Jx,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:aM,transmission_pars_fragment:oM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:uM,worldpos_vertex:hM,background_vert:fM,background_frag:dM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:_M,cube_frag:gM,depth_vert:vM,depth_frag:xM,distanceRGBA_vert:MM,distanceRGBA_frag:SM,equirect_vert:yM,equirect_frag:EM,linedashed_vert:TM,linedashed_frag:bM,meshbasic_vert:AM,meshbasic_frag:wM,meshlambert_vert:RM,meshlambert_frag:CM,meshmatcap_vert:PM,meshmatcap_frag:LM,meshnormal_vert:DM,meshnormal_frag:UM,meshphong_vert:IM,meshphong_frag:NM,meshphysical_vert:OM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:kM,points_frag:GM,shadow_vert:HM,shadow_frag:VM,sprite_vert:WM,sprite_frag:XM},pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},mi={basic:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:_n([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:_n([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:_n([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:_n([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:_n([pe.points,pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:_n([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:_n([pe.common,pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:_n([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:_n([pe.sprite,pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:_n([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:_n([pe.lights,pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};mi.physical={uniforms:_n([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const No={r:0,b:0,g:0};function YM(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Tl)?(u===void 0&&(u=new Ni(new Ja(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ks(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,(h!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ni(new ku(2,2),new yn({name:"BackgroundMaterial",uniforms:Ks(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=dt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(No,xm(r)),n.buffers.color.setClear(No.r,No.g,No.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function qM(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(D,O,V,W,q){let $=!1;if(o){const C=_(W,V,O);c!==C&&(c=C,f(c.object)),$=m(D,W,V,q),$&&S(D,W,V,q)}else{const C=O.wireframe===!0;(c.geometry!==W.id||c.program!==V.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=V.id,c.wireframe=C,$=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,U(D,O,V,W),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,O,V){const W=V.wireframe===!0;let q=a[D.id];q===void 0&&(q={},a[D.id]=q);let $=q[O.id];$===void 0&&($={},q[O.id]=$);let C=$[W];return C===void 0&&(C=p(d()),$[W]=C),C}function p(D){const O=[],V=[],W=[];for(let q=0;q<i;q++)O[q]=0,V[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:W,object:D,attributes:{},index:null}}function m(D,O,V,W){const q=c.attributes,$=O.attributes;let C=0;const Z=V.getAttributes();for(const he in Z)if(Z[he].location>=0){const K=q[he];let le=$[he];if(le===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function S(D,O,V,W){const q={},$=O.attributes;let C=0;const Z=V.getAttributes();for(const he in Z)if(Z[he].location>=0){let K=$[he];K===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const le={};le.attribute=K,K&&K.data&&(le.data=K.data),q[he]=le,C++}c.attributes=q,c.attributesNum=C,c.index=W}function v(){const D=c.newAttributes;for(let O=0,V=D.length;O<V;O++)D[O]=0}function T(D){R(D,0)}function R(D,O){const V=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;V[D]=1,W[D]===0&&(r.enableVertexAttribArray(D),W[D]=1),q[D]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),q[D]=O)}function A(){const D=c.newAttributes,O=c.enabledAttributes;for(let V=0,W=O.length;V<W;V++)O[V]!==D[V]&&(r.disableVertexAttribArray(V),O[V]=0)}function x(D,O,V,W,q,$,C){C===!0?r.vertexAttribIPointer(D,O,V,q,$):r.vertexAttribPointer(D,O,V,W,q,$)}function U(D,O,V,W){if(n.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const q=W.attributes,$=V.getAttributes(),C=O.defaultAttributeValues;for(const Z in $){const he=$[Z];if(he.location>=0){let j=q[Z];if(j===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const K=j.normalized,le=j.itemSize,Me=t.get(j);if(Me===void 0)continue;const me=Me.buffer,Ue=Me.type,Pe=Me.bytesPerElement,Fe=n.isWebGL2===!0&&(Ue===r.INT||Ue===r.UNSIGNED_INT||j.gpuType===tm);if(j.isInterleavedBufferAttribute){const Xe=j.data,k=Xe.stride,Ye=j.offset;if(Xe.isInstancedInterleavedBuffer){for(let ve=0;ve<he.locationSize;ve++)R(he.location+ve,Xe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ve=0;ve<he.locationSize;ve++)T(he.location+ve);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ve=0;ve<he.locationSize;ve++)x(he.location+ve,le/he.locationSize,Ue,K,k*Pe,(Ye+le/he.locationSize*ve)*Pe,Fe)}else{if(j.isInstancedBufferAttribute){for(let Xe=0;Xe<he.locationSize;Xe++)R(he.location+Xe,j.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Xe=0;Xe<he.locationSize;Xe++)T(he.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let Xe=0;Xe<he.locationSize;Xe++)x(he.location+Xe,le/he.locationSize,Ue,K,le*Pe,le/he.locationSize*Xe*Pe,Fe)}}else if(C!==void 0){const K=C[Z];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(he.location,K);break;case 3:r.vertexAttrib3fv(he.location,K);break;case 4:r.vertexAttrib4fv(he.location,K);break;default:r.vertexAttrib1fv(he.location,K)}}}}A()}function M(){B();for(const D in a){const O=a[D];for(const V in O){const W=O[V];for(const q in W)g(W[q].object),delete W[q];delete O[V]}delete a[D]}}function y(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const V in O){const W=O[V];for(const q in W)g(W[q].object),delete W[q];delete O[V]}delete a[D.id]}function F(D){for(const O in a){const V=a[O];if(V[D.id]===void 0)continue;const W=V[D.id];for(const q in W)g(W[q].object),delete W[q];delete V[D.id]}}function B(){Q(),u=!0,c!==l&&(c=l,f(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function $M(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function jM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=o||e.has("OES_texture_float"),R=v&&T,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:A}}function KM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ki,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,v=S*4;let T=m.clippingState||null;l.value=T,T=u(g,d,v,f);for(let R=0;R!==v;++R)T[R]=t[R];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,T=f;v!==_;++v,T+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ZM(r){let e=new WeakMap;function t(o,a){return a===Jc?o.mapping=qs:a===eu&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===eu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cv(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Tm extends Mm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,wf=[.125,.215,.35,.446,.526,.582],Cr=20,gc=new Tm,Rf=new et;let vc=null,xc=0,Mc=0;const wr=(1+Math.sqrt(5))/2,gs=1/wr,Cf=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,wr,gs),new I(0,wr,-gs),new I(gs,0,wr),new I(-gs,0,wr),new I(wr,gs,0),new I(-wr,gs,0)];class Pf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,xc,Mc),e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:zi,format:ui,colorSpace:Vi,depthBuffer:!1},i=Lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QM(s)),this._blurMaterial=JM(s,e,t)}return i}_compileMaterial(e){const t=new Ni(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,i){const a=new ei(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Rf),u.toneMapping=lr,u.autoClear=!1;const f=new zu({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Ni(new Ja,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Rf),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Oo(i,S*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qs||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Cf[(i-1)%Cf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ni(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Cr;p>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cr}`);const m=[];let S=0;for(let x=0;x<Cr;++x){const U=x/_,M=Math.exp(-U*U/2);m.push(M),x===0?S+=M:x<p&&(S+=2*M)}for(let x=0;x<m.length;x++)m[x]=m[x]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const T=this._sizeLods[i],R=3*T*(i>v-Cs?i-v+Cs:0),A=4*(this._cubeSize-T);Oo(t,R,A,3*T,2*T),l.setRenderTarget(t),l.render(h,gc)}}function QM(r){const e=[],t=[],n=[];let i=r;const s=r-Cs+1+wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Cs?l=wf[o-r+Cs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),v=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let A=0;A<f;A++){const x=A%3*2/3-1,U=A>2?0:-1,M=[x,U,0,x+2/3,U,0,x+2/3,U+1,0,x,U,0,x+2/3,U+1,0,x,U+1,0];S.set(M,_*g*A),v.set(d,p*g*A);const y=[A,A,A,A,A,A];T.set(y,m*g*A)}const R=new Dn;R.setAttribute("position",new qt(S,_)),R.setAttribute("uv",new qt(v,p)),R.setAttribute("faceIndex",new qt(T,m)),e.push(R),i>Cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lf(r,e,t){const n=new hi(r,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function JM(r,e,t){const n=new Float32Array(Cr),i=new I(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Df(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Uf(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}function eS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===eu,u=l===qs||l===$s;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Pf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Pf(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nS(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,T=S.length;v<T;v+=3){const R=S[v+0],A=S[v+1],x=S[v+2];d.push(R,A,A,x,x,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,T=S.length/3-1;v<T;v+=3){const R=v+0,A=v+1,x=v+2;d.push(R,A,A,x,x,R)}}else return;const p=new(hm(d)?vm:gm)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function iS(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){r.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function rS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sS(r,e){return r[0]-e[0]}function aS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function oS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let D=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let U=0;S===!0&&(U=1),v===!0&&(U=2),T===!0&&(U=3);let M=u.attributes.position.count*U,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*y*4*g),B=new pm(F,M,y,g);B.type=ir,B.needsUpdate=!0;const Q=U*4;for(let O=0;O<g;O++){const V=R[O],W=A[O],q=x[O],$=M*y*4*O;for(let C=0;C<V.count;C++){const Z=C*Q;S===!0&&(o.fromBufferAttribute(V,C),F[$+Z+0]=o.x,F[$+Z+1]=o.y,F[$+Z+2]=o.z,F[$+Z+3]=0),v===!0&&(o.fromBufferAttribute(W,C),F[$+Z+4]=o.x,F[$+Z+5]=o.y,F[$+Z+6]=o.z,F[$+Z+7]=0),T===!0&&(o.fromBufferAttribute(q,C),F[$+Z+8]=o.x,F[$+Z+9]=o.y,F[$+Z+10]=o.z,F[$+Z+11]=q.itemSize===4?o.w:1)}}_={count:g,texture:B,size:new Oe(M,y)},s.set(u,_),u.addEventListener("dispose",D)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<f;v++){const T=g[v];T[0]=v,T[1]=d[v]}g.sort(aS);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(sS);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const T=a[v],R=T[0],A=T[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[R]&&u.setAttribute("morphTarget"+v,_[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),i[v]=A,m+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function lS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bm extends Pn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:kr,u!==kr&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===kr&&(n=nr),n===void 0&&u===js&&(n=zr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Am=new Pn,wm=new bm(1,1);wm.compareFunction=cm;const Rm=new pm,Cm=new q0,Pm=new Sm,If=[],Nf=[],Of=new Float32Array(16),Ff=new Float32Array(9),Bf=new Float32Array(4);function Js(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=If[i];if(s===void 0&&(s=new Float32Array(i),If[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rl(r,e){let t=Nf[e];t===void 0&&(t=new Int32Array(e),Nf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function uS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function hS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function fS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function dS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Bf.set(n),r.uniformMatrix2fv(this.addr,!1,Bf),Vt(t,n)}}function pS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Ff.set(n),r.uniformMatrix3fv(this.addr,!1,Ff),Vt(t,n)}}function mS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Of.set(n),r.uniformMatrix4fv(this.addr,!1,Of),Vt(t,n)}}function _S(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function vS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function xS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function MS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function SS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function yS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function TS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?wm:Am;t.setTexture2D(e||s,i)}function bS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cm,i)}function AS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pm,i)}function wS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rm,i)}function RS(r){switch(r){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return _S;case 35667:case 35671:return gS;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return MS;case 36294:return SS;case 36295:return yS;case 36296:return ES;case 35678:case 36198:case 36298:case 36306:case 35682:return TS;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return wS}}function CS(r,e){r.uniform1fv(this.addr,e)}function PS(r,e){const t=Js(e,this.size,2);r.uniform2fv(this.addr,t)}function LS(r,e){const t=Js(e,this.size,3);r.uniform3fv(this.addr,t)}function DS(r,e){const t=Js(e,this.size,4);r.uniform4fv(this.addr,t)}function US(r,e){const t=Js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IS(r,e){const t=Js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function NS(r,e){const t=Js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OS(r,e){r.uniform1iv(this.addr,e)}function FS(r,e){r.uniform2iv(this.addr,e)}function BS(r,e){r.uniform3iv(this.addr,e)}function zS(r,e){r.uniform4iv(this.addr,e)}function kS(r,e){r.uniform1uiv(this.addr,e)}function GS(r,e){r.uniform2uiv(this.addr,e)}function HS(r,e){r.uniform3uiv(this.addr,e)}function VS(r,e){r.uniform4uiv(this.addr,e)}function WS(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Am,s[o])}function XS(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cm,s[o])}function YS(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Pm,s[o])}function qS(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);Ht(n,s)||(r.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rm,s[o])}function $S(r){switch(r){case 5126:return CS;case 35664:return PS;case 35665:return LS;case 35666:return DS;case 35674:return US;case 35675:return IS;case 35676:return NS;case 5124:case 35670:return OS;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return GS;case 36295:return HS;case 36296:return VS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}class jS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}}class KS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$S(t.type)}}class ZS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function zf(r,e){r.seq.push(e),r.map[e.id]=e}function QS(r,e,t){const n=r.name,i=n.length;for(Sc.lastIndex=0;;){const s=Sc.exec(n),o=Sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zf(t,c===void 0?new jS(a,r,e):new KS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new ZS(a),zf(t,h)),t=h}}}class el{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);QS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function kf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const JS=37297;let ey=0;function ty(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ny(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===ml&&t===pl?n="LinearDisplayP3ToLinearSRGB":e===pl&&t===ml&&(n="LinearSRGBToLinearDisplayP3"),r){case Vi:case bl:return[n,"LinearTransferOETF"];case Gt:case Fu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Gf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ty(r.getShaderSource(e),o)}else return i}function iy(r,e){const t=ny(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ry(r,e){let t;switch(e){case Kp:t="Linear";break;case Zp:t="Reinhard";break;case Qp:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case Jp:t="AgX";break;case o0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function ay(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function oy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ly(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ps(r){return r!==""}function Hf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(r){return r.replace(cy,hy)}const uy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hy(r,e){let t=Je[e];if(t===void 0){const n=uy.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(r){return r.replace(fy,dy)}function dy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$p?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function my(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function gy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jp:e="ENVMAP_BLENDING_MULTIPLY";break;case s0:e="ENVMAP_BLENDING_MIX";break;case a0:e="ENVMAP_BLENDING_ADD";break}return e}function vy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=py(t),c=my(t),u=_y(t),h=gy(t),d=vy(t),f=t.isWebGL2?"":sy(t),g=ay(t),_=oy(s),p=i.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),m.length>0&&(m+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ps).join(`
`),S.length>0&&(S+=`
`)):(m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),S=[f,Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Je.tonemapping_pars_fragment:"",t.toneMapping!==lr?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=au(o),o=Hf(o,t),o=Vf(o,t),a=au(a),a=Hf(a,t),a=Vf(a,t),o=Wf(o),a=Wf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=v+m+o,R=v+S+a,A=kf(i,i.VERTEX_SHADER,T),x=kf(i,i.FRAGMENT_SHADER,R);i.attachShader(p,A),i.attachShader(p,x),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function U(B){if(r.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(x).trim();let V=!0,W=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,x);else{const q=Gf(i,A,"vertex"),$=Gf(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+q+`
`+$)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||O==="")&&(W=!1);W&&(B.diagnostics={runnable:V,programLog:Q,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:S}})}i.deleteShader(A),i.deleteShader(x),M=new el(i,p),y=ly(i,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,JS)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=x,this}let My=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}}function Ey(r,e,t,n,i,s,o){const a=new mm,l=new Sy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,y,F,B,Q){const D=B.fog,O=Q.geometry,V=M.isMeshStandardMaterial?B.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),q=W&&W.mapping===Tl?W.image.height:null,$=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const C=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=C!==void 0?C.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let j,K,le,Me;if($){const Se=mi[$];j=Se.vertexShader,K=Se.fragmentShader}else j=M.vertexShader,K=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const me=r.getRenderTarget(),Ue=Q.isInstancedMesh===!0,Pe=Q.isBatchedMesh===!0,Fe=!!M.map,Xe=!!M.matcap,k=!!W,Ye=!!M.aoMap,ve=!!M.lightMap,Le=!!M.bumpMap,xe=!!M.normalMap,H=!!M.displacementMap,ze=!!M.emissiveMap,w=!!M.metalnessMap,E=!!M.roughnessMap,z=M.anisotropy>0,ie=M.clearcoat>0,ee=M.iridescence>0,re=M.sheen>0,_e=M.transmission>0,de=z&&!!M.anisotropyMap,ce=ie&&!!M.clearcoatMap,we=ie&&!!M.clearcoatNormalMap,Ge=ie&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,ot=ee&&!!M.iridescenceThicknessMap,De=re&&!!M.sheenColorMap,qe=re&&!!M.sheenRoughnessMap,Te=!!M.specularMap,ge=!!M.specularColorMap,P=!!M.specularIntensityMap,ae=_e&&!!M.transmissionMap,be=_e&&!!M.thicknessMap,te=!!M.gradientMap,ne=!!M.alphaMap,L=M.alphaTest>0,se=!!M.alphaHash,ue=!!M.extensions,Be=!!O.attributes.uv1,Ie=!!O.attributes.uv2,je=!!O.attributes.uv3;let Qe=lr;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:K,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Pe,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Vi,map:Fe,matcap:Xe,envMap:k,envMapMode:k&&W.mapping,envMapCubeUVHeight:q,aoMap:Ye,lightMap:ve,bumpMap:Le,normalMap:xe,displacementMap:d&&H,emissiveMap:ze,normalMapObjectSpace:xe&&M.normalMapType===M0,normalMapTangentSpace:xe&&M.normalMapType===x0,metalnessMap:w,roughnessMap:E,anisotropy:z,anisotropyMap:de,clearcoat:ie,clearcoatMap:ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Ge,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:ot,sheen:re,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Te,specularColorMap:ge,specularIntensityMap:P,transmission:_e,transmissionMap:ae,thicknessMap:be,gradientMap:te,opaque:M.transparent===!1&&M.blending===zs,alphaMap:ne,alphaTest:L,alphaHash:se,combine:M.combine,mapUv:Fe&&_(M.map.channel),aoMapUv:Ye&&_(M.aoMap.channel),lightMapUv:ve&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:H&&_(M.displacementMap.channel),emissiveMapUv:ze&&_(M.emissiveMap.channel),metalnessMapUv:w&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:ce&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(M.sheenRoughnessMap.channel),specularMapUv:Te&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:P&&_(M.specularIntensityMap.channel),transmissionMapUv:ae&&_(M.transmissionMap.channel),thicknessMapUv:be&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Ie,vertexUv3s:je,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Fe||ne),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Di,flipSided:M.side===Cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)y.push(F),y.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(S(y,M),v(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){const y=g[M.type];let F;if(y){const B=mi[y];F=ja.clone(B.uniforms)}else F=M.uniforms;return F}function R(M,y){let F;for(let B=0,Q=c.length;B<Q;B++){const D=c[B];if(D.cacheKey===y){F=D,++F.usedTimes;break}}return F===void 0&&(F=new xy(r,y,M,s),c.push(F)),F}function A(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function x(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:R,releaseProgram:A,releaseShaderCache:x,programs:c,dispose:U}}function Ty(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function by(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,g,_,p){const m=o(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||by),n.length>1&&n.sort(d||Yf),i.length>1&&i.sort(d||Yf)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ay(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new qf,r.set(n,[o])):i>=s.length?(o=new qf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function wy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Ry(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cy=0;function Py(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ly(r,e){const t=new wy,n=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Pt,a=new Pt;function l(u,h){let d=0,f=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,T=0,R=0,A=0,x=0,U=0,M=0;u.sort(Py);const y=h===!0?Math.PI:1;for(let B=0,Q=u.length;B<Q;B++){const D=u[B],O=D.color,V=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*V*y,f+=O.g*V*y,g+=O.b*V*y;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],V);M++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const C=D.shadow,Z=n.get(D);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=D.shadow.matrix,T++}i.directional[_]=$,_++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(V*y),$.distance=W,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[m]=$;const C=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,C.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[m]=C.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=q,A++}m++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(O).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=$,S++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*y),$.distance=D.distance,$.decay=D.decay,D.castShadow){const C=D.shadow,Z=n.get(D);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=q,i.pointShadowMatrix[p]=D.shadow.matrix,R++}i.point[p]=$,p++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(V*y),$.groundColor.copy(D.groundColor).multiplyScalar(V*y),i.hemi[v]=$,v++}}S>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==S||F.hemiLength!==v||F.numDirectionalShadows!==T||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==x||F.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+x-U,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=M,F.directionalLength=_,F.pointLength=p,F.spotLength=m,F.rectAreaLength=S,F.hemiLength=v,F.numDirectionalShadows=T,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=x,F.numLightProbes=M,i.version=Cy++)}function c(u,h){let d=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const T=u[S];if(T.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(T.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(T.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(T.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function $f(r,e){const t=new Ly(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dy(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $f(r,e),t.set(s,[l])):o>=a.length?(l=new $f(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uy extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function Fy(r,e,t){let n=new ym;const i=new Oe,s=new Oe,o=new Zt,a=new Uy({depthPacking:v0}),l=new Iy,c={},u=t.maxTextureSize,h={[pr]:Cn,[Cn]:pr,[Di]:Di},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Ny,fragmentShader:Oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ni(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$p;let m=this.type;this.render=function(A,x,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Q=m!==Ri&&this.type===Ri,D=m===Ri&&this.type!==Ri;for(let O=0,V=A.length;O<V;O++){const W=A[O],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const $=q.getFrameExtents();if(i.multiply($),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,q.mapSize.y=s.y)),q.map===null||Q===!0||D===!0){const Z=this.type!==Ri?{minFilter:Mn,magFilter:Mn}:{};q.map!==null&&q.map.dispose(),q.map=new hi(i.x,i.y,Z),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const C=q.getViewportCount();for(let Z=0;Z<C;Z++){const he=q.getViewport(Z);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),B.viewport(o),q.updateMatrices(W,Z),n=q.getFrustum(),T(x,U,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Ri&&S(q,U),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(M,y,F)};function S(A,x){const U=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(x,null,U,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(x,null,U,f,_,null)}function v(A,x,U,M){let y=null;const F=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)y=F;else if(y=U.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const B=y.uuid,Q=x.uuid;let D=c[B];D===void 0&&(D={},c[B]=D);let O=D[Q];O===void 0&&(O=y.clone(),D[Q]=O,x.addEventListener("dispose",R)),y=O}if(y.visible=x.visible,y.wireframe=x.wireframe,M===Ri?y.side=x.shadowSide!==null?x.shadowSide:x.side:y.side=x.shadowSide!==null?x.shadowSide:h[x.side],y.alphaMap=x.alphaMap,y.alphaTest=x.alphaTest,y.map=x.map,y.clipShadows=x.clipShadows,y.clippingPlanes=x.clippingPlanes,y.clipIntersection=x.clipIntersection,y.displacementMap=x.displacementMap,y.displacementScale=x.displacementScale,y.displacementBias=x.displacementBias,y.wireframeLinewidth=x.wireframeLinewidth,y.linewidth=x.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=U}return y}function T(A,x,U,M,y){if(A.visible===!1)return;if(A.layers.test(x.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),D=A.material;if(Array.isArray(D)){const O=Q.groups;for(let V=0,W=O.length;V<W;V++){const q=O[V],$=D[q.materialIndex];if($&&$.visible){const C=v(A,$,M,y);A.onBeforeShadow(r,A,x,U,Q,C,q),r.renderBufferDirect(U,null,Q,C,A,q),A.onAfterShadow(r,A,x,U,Q,C,q)}}}else if(D.visible){const O=v(A,D,M,y);A.onBeforeShadow(r,A,x,U,Q,O,null),r.renderBufferDirect(U,null,Q,O,A,null),A.onAfterShadow(r,A,x,U,Q,O,null)}}const B=A.children;for(let Q=0,D=B.length;Q<D;Q++)T(B[Q],x,U,M,y)}function R(A){A.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function By(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const se=new Zt;let ue=null;const Be=new Zt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!L&&(r.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){L=Ie},setClear:function(Ie,je,Qe,ye,Se){Se===!0&&(Ie*=ye,je*=ye,Qe*=ye),se.set(Ie,je,Qe,ye),Be.equals(se)===!1&&(r.clearColor(Ie,je,Qe,ye),Be.copy(se))},reset:function(){L=!1,ue=null,Be.set(-1,0,0,0)}}}function s(){let L=!1,se=null,ue=null,Be=null;return{setTest:function(Ie){Ie?Pe(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(Ie){se!==Ie&&!L&&(r.depthMask(Ie),se=Ie)},setFunc:function(Ie){if(ue!==Ie){switch(Ie){case Qg:r.depthFunc(r.NEVER);break;case Jg:r.depthFunc(r.ALWAYS);break;case e0:r.depthFunc(r.LESS);break;case fl:r.depthFunc(r.LEQUAL);break;case t0:r.depthFunc(r.EQUAL);break;case n0:r.depthFunc(r.GEQUAL);break;case i0:r.depthFunc(r.GREATER);break;case r0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=Ie}},setLocked:function(Ie){L=Ie},setClear:function(Ie){Be!==Ie&&(r.clearDepth(Ie),Be=Ie)},reset:function(){L=!1,se=null,ue=null,Be=null}}}function o(){let L=!1,se=null,ue=null,Be=null,Ie=null,je=null,Qe=null,ye=null,Se=null;return{setTest:function(Ae){L||(Ae?Pe(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(Ae){se!==Ae&&!L&&(r.stencilMask(Ae),se=Ae)},setFunc:function(Ae,oe,He){(ue!==Ae||Be!==oe||Ie!==He)&&(r.stencilFunc(Ae,oe,He),ue=Ae,Be=oe,Ie=He)},setOp:function(Ae,oe,He){(je!==Ae||Qe!==oe||ye!==He)&&(r.stencilOp(Ae,oe,He),je=Ae,Qe=oe,ye=He)},setLocked:function(Ae){L=Ae},setClear:function(Ae){Se!==Ae&&(r.clearStencil(Ae),Se=Ae)},reset:function(){L=!1,se=null,ue=null,Be=null,Ie=null,je=null,Qe=null,ye=null,Se=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,T=null,R=null,A=null,x=null,U=null,M=new et(0,0,0),y=0,F=!1,B=null,Q=null,D=null,O=null,V=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=$>=2);let Z=null,he={};const j=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),le=new Zt().fromArray(j),Me=new Zt().fromArray(K);function me(L,se,ue,Be){const Ie=new Uint8Array(4),je=r.createTexture();r.bindTexture(L,je),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ue;Qe++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,Be,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(se+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return je}const Ue={};Ue[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ue[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ue[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(fl),ze(!1),w(Ph),Pe(r.CULL_FACE),xe(Bi);function Pe(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function Fe(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function Xe(L,se){return f[L]!==se?(r.bindFramebuffer(L,se),f[L]=se,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=se),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function k(L,se){let ue=_,Be=!1;if(L)if(ue=g.get(se),ue===void 0&&(ue=[],g.set(se,ue)),L.isWebGLMultipleRenderTargets){const Ie=L.texture;if(ue.length!==Ie.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let je=0,Qe=Ie.length;je<Qe;je++)ue[je]=r.COLOR_ATTACHMENT0+je;ue.length=Ie.length,Be=!0}}else ue[0]!==r.COLOR_ATTACHMENT0&&(ue[0]=r.COLOR_ATTACHMENT0,Be=!0);else ue[0]!==r.BACK&&(ue[0]=r.BACK,Be=!0);Be&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ye(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const ve={[Rr]:r.FUNC_ADD,[Fg]:r.FUNC_SUBTRACT,[Bg]:r.FUNC_REVERSE_SUBTRACT};if(n)ve[Uh]=r.MIN,ve[Ih]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ve[Uh]=L.MIN_EXT,ve[Ih]=L.MAX_EXT)}const Le={[zg]:r.ZERO,[kg]:r.ONE,[Gg]:r.SRC_COLOR,[Zc]:r.SRC_ALPHA,[qg]:r.SRC_ALPHA_SATURATE,[Xg]:r.DST_COLOR,[Vg]:r.DST_ALPHA,[Hg]:r.ONE_MINUS_SRC_COLOR,[Qc]:r.ONE_MINUS_SRC_ALPHA,[Yg]:r.ONE_MINUS_DST_COLOR,[Wg]:r.ONE_MINUS_DST_ALPHA,[$g]:r.CONSTANT_COLOR,[jg]:r.ONE_MINUS_CONSTANT_COLOR,[Kg]:r.CONSTANT_ALPHA,[Zg]:r.ONE_MINUS_CONSTANT_ALPHA};function xe(L,se,ue,Be,Ie,je,Qe,ye,Se,Ae){if(L===Bi){m===!0&&(Fe(r.BLEND),m=!1);return}if(m===!1&&(Pe(r.BLEND),m=!0),L!==Og){if(L!==S||Ae!==F){if((v!==Rr||A!==Rr)&&(r.blendEquation(r.FUNC_ADD),v=Rr,A=Rr),Ae)switch(L){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xr:r.blendFunc(r.ONE,r.ONE);break;case Lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,R=null,x=null,U=null,M.set(0,0,0),y=0,S=L,F=Ae}return}Ie=Ie||se,je=je||ue,Qe=Qe||Be,(se!==v||Ie!==A)&&(r.blendEquationSeparate(ve[se],ve[Ie]),v=se,A=Ie),(ue!==T||Be!==R||je!==x||Qe!==U)&&(r.blendFuncSeparate(Le[ue],Le[Be],Le[je],Le[Qe]),T=ue,R=Be,x=je,U=Qe),(ye.equals(M)===!1||Se!==y)&&(r.blendColor(ye.r,ye.g,ye.b,Se),M.copy(ye),y=Se),S=L,F=!1}function H(L,se){L.side===Di?Fe(r.CULL_FACE):Pe(r.CULL_FACE);let ue=L.side===Cn;se&&(ue=!ue),ze(ue),L.blending===zs&&L.transparent===!1?xe(Bi):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Be=L.stencilWrite;c.setTest(Be),Be&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){B!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),B=L)}function w(L){L!==Ug?(Pe(r.CULL_FACE),L!==Q&&(L===Ph?r.cullFace(r.BACK):L===Ig?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),Q=L}function E(L){L!==D&&(q&&r.lineWidth(L),D=L)}function z(L,se,ue){L?(Pe(r.POLYGON_OFFSET_FILL),(O!==se||V!==ue)&&(r.polygonOffset(se,ue),O=se,V=ue)):Fe(r.POLYGON_OFFSET_FILL)}function ie(L){L?Pe(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function ee(L){L===void 0&&(L=r.TEXTURE0+W-1),Z!==L&&(r.activeTexture(L),Z=L)}function re(L,se,ue){ue===void 0&&(Z===null?ue=r.TEXTURE0+W-1:ue=Z);let Be=he[ue];Be===void 0&&(Be={type:void 0,texture:void 0},he[ue]=Be),(Be.type!==L||Be.texture!==se)&&(Z!==ue&&(r.activeTexture(ue),Z=ue),r.bindTexture(L,se||Ue[L]),Be.type=L,Be.texture=se)}function _e(){const L=he[Z];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function de(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){le.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),le.copy(L))}function ae(L){Me.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Me.copy(L))}function be(L,se){let ue=h.get(se);ue===void 0&&(ue=new WeakMap,h.set(se,ue));let Be=ue.get(L);Be===void 0&&(Be=r.getUniformBlockIndex(se,L.name),ue.set(L,Be))}function te(L,se){const Be=h.get(se).get(L);u.get(se)!==Be&&(r.uniformBlockBinding(se,Be,L.__bindingPointIndex),u.set(se,Be))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Z=null,he={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,T=null,R=null,A=null,x=null,U=null,M=new et(0,0,0),y=0,F=!1,B=null,Q=null,D=null,O=null,V=null,le.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Fe,bindFramebuffer:Xe,drawBuffers:k,useProgram:Ye,setBlending:xe,setMaterial:H,setFlipSided:ze,setCullFace:w,setLineWidth:E,setPolygonOffset:z,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:_e,compressedTexImage2D:de,compressedTexImage3D:ce,texImage2D:Te,texImage3D:ge,updateUBOMapping:be,uniformBlockBinding:te,texStorage2D:De,texStorage3D:qe,texSubImage2D:we,texSubImage3D:Ge,compressedTexSubImage2D:J,compressedTexSubImage3D:ot,scissor:P,viewport:ae,reset:ne}}function zy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return f?new OffscreenCanvas(w,E):vl("canvas")}function _(w,E,z,ie){let ee=1;if((w.width>ie||w.height>ie)&&(ee=ie/Math.max(w.width,w.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const re=E?gl:Math.floor,_e=re(ee*w.width),de=re(ee*w.height);h===void 0&&(h=g(_e,de));const ce=z?g(_e,de):h;return ce.width=_e,ce.height=de,ce.getContext("2d").drawImage(w,0,0,_e,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+de+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return su(w.width)&&su(w.height)}function m(w){return a?!1:w.wrapS!==ci||w.wrapT!==ci||w.minFilter!==Mn&&w.minFilter!==Qn}function S(w,E){return w.generateMipmaps&&E&&w.minFilter!==Mn&&w.minFilter!==Qn}function v(w){r.generateMipmap(w)}function T(w,E,z,ie,ee=!1){if(a===!1)return E;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=E;if(E===r.RED&&(z===r.FLOAT&&(re=r.R32F),z===r.HALF_FLOAT&&(re=r.R16F),z===r.UNSIGNED_BYTE&&(re=r.R8)),E===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(re=r.R8UI),z===r.UNSIGNED_SHORT&&(re=r.R16UI),z===r.UNSIGNED_INT&&(re=r.R32UI),z===r.BYTE&&(re=r.R8I),z===r.SHORT&&(re=r.R16I),z===r.INT&&(re=r.R32I)),E===r.RG&&(z===r.FLOAT&&(re=r.RG32F),z===r.HALF_FLOAT&&(re=r.RG16F),z===r.UNSIGNED_BYTE&&(re=r.RG8)),E===r.RGBA){const _e=ee?dl:dt.getTransfer(ie);z===r.FLOAT&&(re=r.RGBA32F),z===r.HALF_FLOAT&&(re=r.RGBA16F),z===r.UNSIGNED_BYTE&&(re=_e===Mt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(w,E,z){return S(w,z)===!0||w.isFramebufferTexture&&w.minFilter!==Mn&&w.minFilter!==Qn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){return w===Mn||w===Nh||w===$l?r.NEAREST:r.LINEAR}function x(w){const E=w.target;E.removeEventListener("dispose",x),M(E),E.isVideoTexture&&u.delete(E)}function U(w){const E=w.target;E.removeEventListener("dispose",U),F(E)}function M(w){const E=n.get(w);if(E.__webglInit===void 0)return;const z=w.source,ie=d.get(z);if(ie){const ee=ie[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(w),Object.keys(ie).length===0&&d.delete(z)}n.remove(w)}function y(w){const E=n.get(w);r.deleteTexture(E.__webglTexture);const z=w.source,ie=d.get(z);delete ie[E.__cacheKey],o.memory.textures--}function F(w){const E=w.texture,z=n.get(w),ie=n.get(E);if(ie.__webglTexture!==void 0&&(r.deleteTexture(ie.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let re=0;re<z.__webglFramebuffer[ee].length;re++)r.deleteFramebuffer(z.__webglFramebuffer[ee][re]);else r.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)r.deleteFramebuffer(z.__webglFramebuffer[ee]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,re=E.length;ee<re;ee++){const _e=n.get(E[ee]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(E[ee])}n.remove(E),n.remove(w)}let B=0;function Q(){B=0}function D(){const w=B;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),B+=1,w}function O(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function V(w,E){const z=n.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const ie=w.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,w,E);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+E)}function W(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){le(z,w,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+E)}function q(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){le(z,w,E);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+E)}function $(w,E){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Me(z,w,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+E)}const C={[tu]:r.REPEAT,[ci]:r.CLAMP_TO_EDGE,[nu]:r.MIRRORED_REPEAT},Z={[Mn]:r.NEAREST,[Nh]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[l0]:r.LINEAR_MIPMAP_NEAREST,[qa]:r.LINEAR_MIPMAP_LINEAR},he={[S0]:r.NEVER,[w0]:r.ALWAYS,[y0]:r.LESS,[cm]:r.LEQUAL,[E0]:r.EQUAL,[A0]:r.GEQUAL,[T0]:r.GREATER,[b0]:r.NOTEQUAL};function j(w,E,z){if(z?(r.texParameteri(w,r.TEXTURE_WRAP_S,C[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,C[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,C[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Z[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Z[E.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ci||E.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Mn&&E.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Mn||E.minFilter!==$l&&E.minFilter!==qa||E.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(w,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function K(w,E){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",x));const ie=E.source;let ee=d.get(ie);ee===void 0&&(ee={},d.set(ie,ee));const re=O(E);if(re!==w.__cacheKey){ee[re]===void 0&&(ee[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[re].usedTimes++;const _e=ee[w.__cacheKey];_e!==void 0&&(ee[w.__cacheKey].usedTimes--,_e.usedTimes===0&&y(E)),w.__cacheKey=re,w.__webglTexture=ee[re].texture}return z}function le(w,E,z){let ie=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=r.TEXTURE_3D);const ee=K(w,E),re=E.source;t.bindTexture(ie,w.__webglTexture,r.TEXTURE0+z);const _e=n.get(re);if(re.version!==_e.__version||ee===!0){t.activeTexture(r.TEXTURE0+z);const de=dt.getPrimaries(dt.workingColorSpace),ce=E.colorSpace===ti?null:dt.getPrimaries(E.colorSpace),we=E.colorSpace===ti||de===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ge=m(E)&&p(E.image)===!1;let J=_(E.image,Ge,!1,i.maxTextureSize);J=ze(E,J);const ot=p(J)||a,De=s.convert(E.format,E.colorSpace);let qe=s.convert(E.type),Te=T(E.internalFormat,De,qe,E.colorSpace,E.isVideoTexture);j(ie,E,ot);let ge;const P=E.mipmaps,ae=a&&E.isVideoTexture!==!0&&Te!==om,be=_e.__version===void 0||ee===!0,te=R(E,J,ot);if(E.isDepthTexture)Te=r.DEPTH_COMPONENT,a?E.type===ir?Te=r.DEPTH_COMPONENT32F:E.type===nr?Te=r.DEPTH_COMPONENT24:E.type===zr?Te=r.DEPTH24_STENCIL8:Te=r.DEPTH_COMPONENT16:E.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===kr&&Te===r.DEPTH_COMPONENT&&E.type!==Ou&&E.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=nr,qe=s.convert(E.type)),E.format===js&&Te===r.DEPTH_COMPONENT&&(Te=r.DEPTH_STENCIL,E.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=zr,qe=s.convert(E.type))),be&&(ae?t.texStorage2D(r.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Te,J.width,J.height,0,De,qe,null));else if(E.isDataTexture)if(P.length>0&&ot){ae&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],ae?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,qe,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,De,qe,ge.data);E.generateMipmaps=!1}else ae?(be&&t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,De,qe,J.data)):t.texImage2D(r.TEXTURE_2D,0,Te,J.width,J.height,0,De,qe,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Te,P[0].width,P[0].height,J.depth);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],E.format!==ui?De!==null?ae?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,J.depth,De,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,J.depth,De,qe,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Te,ge.width,ge.height,J.depth,0,De,qe,ge.data)}else{ae&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],E.format!==ui?De!==null?ae?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,De,qe,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Te,ge.width,ge.height,0,De,qe,ge.data)}else if(E.isDataArrayTexture)ae?(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,te,Te,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,De,qe,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,De,qe,J.data);else if(E.isData3DTexture)ae?(be&&t.texStorage3D(r.TEXTURE_3D,te,Te,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,De,qe,J.data)):t.texImage3D(r.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,De,qe,J.data);else if(E.isFramebufferTexture){if(be)if(ae)t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height);else{let ne=J.width,L=J.height;for(let se=0;se<te;se++)t.texImage2D(r.TEXTURE_2D,se,Te,ne,L,0,De,qe,null),ne>>=1,L>>=1}}else if(P.length>0&&ot){ae&&be&&t.texStorage2D(r.TEXTURE_2D,te,Te,P[0].width,P[0].height);for(let ne=0,L=P.length;ne<L;ne++)ge=P[ne],ae?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,De,qe,ge):t.texImage2D(r.TEXTURE_2D,ne,Te,De,qe,ge);E.generateMipmaps=!1}else ae?(be&&t.texStorage2D(r.TEXTURE_2D,te,Te,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,qe,J)):t.texImage2D(r.TEXTURE_2D,0,Te,De,qe,J);S(E,ot)&&v(ie),_e.__version=re.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Me(w,E,z){if(E.image.length!==6)return;const ie=K(w,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+z);const re=n.get(ee);if(ee.version!==re.__version||ie===!0){t.activeTexture(r.TEXTURE0+z);const _e=dt.getPrimaries(dt.workingColorSpace),de=E.colorSpace===ti?null:dt.getPrimaries(E.colorSpace),ce=E.colorSpace===ti||_e===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,J=[];for(let ne=0;ne<6;ne++)!we&&!Ge?J[ne]=_(E.image[ne],!1,!0,i.maxCubemapSize):J[ne]=Ge?E.image[ne].image:E.image[ne],J[ne]=ze(E,J[ne]);const ot=J[0],De=p(ot)||a,qe=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),ge=T(E.internalFormat,qe,Te,E.colorSpace),P=a&&E.isVideoTexture!==!0,ae=re.__version===void 0||ie===!0;let be=R(E,ot,De);j(r.TEXTURE_CUBE_MAP,E,De);let te;if(we){P&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ge,ot.width,ot.height);for(let ne=0;ne<6;ne++){te=J[ne].mipmaps;for(let L=0;L<te.length;L++){const se=te[L];E.format!==ui?qe!==null?P?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,qe,se.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ge,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,se.width,se.height,qe,Te,se.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,ge,se.width,se.height,0,qe,Te,se.data)}}}else{te=E.mipmaps,P&&ae&&(te.length>0&&be++,t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ge,J[0].width,J[0].height));for(let ne=0;ne<6;ne++)if(Ge){P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,J[ne].width,J[ne].height,qe,Te,J[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,J[ne].width,J[ne].height,0,qe,Te,J[ne].data);for(let L=0;L<te.length;L++){const ue=te[L].image[ne].image;P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,ue.width,ue.height,qe,Te,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ge,ue.width,ue.height,0,qe,Te,ue.data)}}else{P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,qe,Te,J[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,qe,Te,J[ne]);for(let L=0;L<te.length;L++){const se=te[L];P?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,qe,Te,se.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,ge,qe,Te,se.image[ne])}}}S(E,De)&&v(r.TEXTURE_CUBE_MAP),re.__version=ee.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function me(w,E,z,ie,ee,re){const _e=s.convert(z.format,z.colorSpace),de=s.convert(z.type),ce=T(z.internalFormat,_e,de,z.colorSpace);if(!n.get(E).__hasExternalTextures){const Ge=Math.max(1,E.width>>re),J=Math.max(1,E.height>>re);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,re,ce,Ge,J,E.depth,0,_e,de,null):t.texImage2D(ee,re,ce,Ge,J,0,_e,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),xe(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,n.get(z).__webglTexture,0,Le(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,n.get(z).__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(w,E,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ie=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(z||xe(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ir?ie=r.DEPTH_COMPONENT32F:ee.type===nr&&(ie=r.DEPTH_COMPONENT24));const re=Le(E);xe(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,ie,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,re,ie,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ie,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ie=Le(E);z&&xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],_e=s.convert(re.format,re.colorSpace),de=s.convert(re.type),ce=T(re.internalFormat,_e,de,re.colorSpace),we=Le(E);z&&xe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ce,E.width,E.height):xe(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ce,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const ie=n.get(E.depthTexture).__webglTexture,ee=Le(E);if(E.depthTexture.format===kr)xe(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(E.depthTexture.format===js)xe(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const E=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,w)}else if(z){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ue(E.__webglDepthbuffer[ie],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ue(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(w,E,z){const ie=n.get(w);E!==void 0&&me(ie.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Fe(w)}function k(w){const E=w.texture,z=n.get(w),ie=n.get(E);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=E.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,_e=p(w)||a;if(ee){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let ce=0;ce<E.mipmaps.length;ce++)z.__webglFramebuffer[de][ce]=r.createFramebuffer()}else z.__webglFramebuffer[de]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)z.__webglFramebuffer[de]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(re)if(i.drawBuffers){const de=w.texture;for(let ce=0,we=de.length;ce<we;ce++){const Ge=n.get(de[ce]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&xe(w)===!1){const de=re?E:[E];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<de.length;ce++){const we=de[ce];z.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Ge=s.convert(we.format,we.colorSpace),J=s.convert(we.type),ot=T(we.internalFormat,Ge,J,we.colorSpace,w.isXRRenderTarget===!0),De=Le(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ot,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),j(r.TEXTURE_CUBE_MAP,E,_e);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)me(z.__webglFramebuffer[de][ce],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,ce);else me(z.__webglFramebuffer[de],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(E,_e)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){const de=w.texture;for(let ce=0,we=de.length;ce<we;ce++){const Ge=de[ce],J=n.get(Ge);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),j(r.TEXTURE_2D,Ge,_e),me(z.__webglFramebuffer,w,Ge,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),S(Ge,_e)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?de=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ie.__webglTexture),j(de,E,_e),a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)me(z.__webglFramebuffer[ce],w,E,r.COLOR_ATTACHMENT0,de,ce);else me(z.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,de,0);S(E,_e)&&v(de),t.unbindTexture()}w.depthBuffer&&Fe(w)}function Ye(w){const E=p(w)||a,z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0,ee=z.length;ie<ee;ie++){const re=z[ie];if(S(re,E)){const _e=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,de=n.get(re).__webglTexture;t.bindTexture(_e,de),v(_e),t.unbindTexture()}}}function ve(w){if(a&&w.samples>0&&xe(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],z=w.width,ie=w.height;let ee=r.COLOR_BUFFER_BIT;const re=[],_e=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=n.get(w),ce=w.isWebGLMultipleRenderTargets===!0;if(ce)for(let we=0;we<E.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let we=0;we<E.length;we++){re.push(r.COLOR_ATTACHMENT0+we),w.depthBuffer&&re.push(_e);const Ge=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Ge===!1&&(w.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,de.__webglColorRenderbuffer[we]),Ge===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_e]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_e])),ce){const J=n.get(E[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,z,ie,0,0,z,ie,ee,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let we=0;we<E.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,de.__webglColorRenderbuffer[we]);const Ge=n.get(E[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,de.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Le(w){return Math.min(i.maxSamples,w.samples)}function xe(w){const E=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(w){const E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function ze(w,E){const z=w.colorSpace,ie=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ru||z!==Vi&&z!==ti&&(dt.getTransfer(z)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ie===ui?(w.format=ru,w.minFilter=Qn,w.generateMipmaps=!1):E=fm.sRGBToLinear(E):(ie!==ui||ee!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=Xe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=xe}function ky(r,e,t){const n=t.isWebGL2;function i(s,o=ti){let a;const l=dt.getTransfer(o);if(s===cr)return r.UNSIGNED_BYTE;if(s===nm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===im)return r.UNSIGNED_SHORT_5_5_5_1;if(s===c0)return r.BYTE;if(s===u0)return r.SHORT;if(s===Ou)return r.UNSIGNED_SHORT;if(s===tm)return r.INT;if(s===nr)return r.UNSIGNED_INT;if(s===ir)return r.FLOAT;if(s===zi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===h0)return r.ALPHA;if(s===ui)return r.RGBA;if(s===f0)return r.LUMINANCE;if(s===d0)return r.LUMINANCE_ALPHA;if(s===kr)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===ru)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===p0)return r.RED;if(s===rm)return r.RED_INTEGER;if(s===m0)return r.RG;if(s===sm)return r.RG_INTEGER;if(s===am)return r.RGBA_INTEGER;if(s===jl||s===Kl||s===Zl||s===Ql)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Oh||s===Fh||s===Bh||s===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Oh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===om)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kh||s===Gh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kh)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hh||s===Vh||s===Wh||s===Xh||s===Yh||s===qh||s===$h||s===jh||s===Kh||s===Zh||s===Qh||s===Jh||s===ef||s===tf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$h)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jh)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ef)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tf)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jl||s===nf||s===rf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jl)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_0||s===sf||s===af||s===of)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Jl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===af)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===of)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Gy extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xa extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Vy extends $r{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const S=[],v=[],T=new Oe;let R=null;const A=new ei;A.layers.enable(1),A.viewport=new Zt;const x=new ei;x.layers.enable(2),x.viewport=new Zt;const U=[A,x],M=new Gy;M.layers.enable(1),M.layers.enable(2);let y=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let K=S[j];return K===void 0&&(K=new yc,S[j]=K),K.getTargetRaySpace()},this.getControllerGrip=function(j){let K=S[j];return K===void 0&&(K=new yc,S[j]=K),K.getGripSpace()},this.getHand=function(j){let K=S[j];return K===void 0&&(K=new yc,S[j]=K),K.getHandSpace()};function B(j){const K=v.indexOf(j.inputSource);if(K===-1)return;const le=S[K];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",D);for(let j=0;j<S.length;j++){const K=v[j];K!==null&&(v[j]=null,S[j].disconnect(K))}y=null,F=null,e.setRenderTarget(p),f=null,d=null,h=null,i=null,m=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new hi(f.framebufferWidth,f.framebufferHeight,{format:ui,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,le=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?js:kr,le=_.stencil?zr:nr);const me={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new hi(d.textureWidth,d.textureHeight,{format:ui,type:cr,depthTexture:new bm(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(m);Ue.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(j){for(let K=0;K<j.removed.length;K++){const le=j.removed[K],Me=v.indexOf(le);Me>=0&&(v[Me]=null,S[Me].disconnect(le))}for(let K=0;K<j.added.length;K++){const le=j.added[K];let Me=v.indexOf(le);if(Me===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=v.length){v.push(le),Me=Ue;break}else if(v[Ue]===null){v[Ue]=le,Me=Ue;break}if(Me===-1)break}const me=S[Me];me&&me.connect(le)}}const O=new I,V=new I;function W(j,K,le){O.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const Me=O.distanceTo(V),me=K.projectionMatrix.elements,Ue=le.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Fe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],k=(me[9]-1)/me[5],Ye=(me[8]-1)/me[0],ve=(Ue[8]+1)/Ue[0],Le=Pe*Ye,xe=Pe*ve,H=Me/(-Ye+ve),ze=H*-Ye;K.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ze),j.translateZ(H),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const w=Pe+H,E=Fe+H,z=Le-ze,ie=xe+(Me-ze),ee=Xe*Fe/E*w,re=k*Fe/E*w;j.projectionMatrix.makePerspective(z,ie,ee,re,w,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function q(j,K){K===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(K.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;M.near=x.near=A.near=j.near,M.far=x.far=A.far=j.far,(y!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,F=M.far);const K=j.parent,le=M.cameras;q(M,K);for(let Me=0;Me<le.length;Me++)q(le[Me],K);le.length===2?W(M,A,x):M.projectionMatrix.copy(A.projectionMatrix),$(j,M,K)};function $(j,K,le){le===null?j.matrix.copy(K.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(K.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(K.projectionMatrix),j.projectionMatrixInverse.copy(K.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$a*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let C=null;function Z(j,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Me=!1;le.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let me=0;me<le.length;me++){const Ue=le[me];let Pe=null;if(f!==null)Pe=f.getViewport(Ue);else{const Xe=h.getViewSubImage(d,Ue);Pe=Xe.viewport,me===0&&(e.setRenderTargetTextures(m,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(m))}let Fe=U[me];Fe===void 0&&(Fe=new ei,Fe.layers.enable(me),Fe.viewport=new Zt,U[me]=Fe),Fe.matrix.fromArray(Ue.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ue.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),me===0&&(M.matrix.copy(Fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(Fe)}}for(let le=0;le<S.length;le++){const Me=v[le],me=S[le];Me!==null&&me!==void 0&&me.update(Me,K,c||o)}C&&C(j,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const he=new Em;he.setAnimationLoop(Z),this.setAnimationLoop=function(j){C=j},this.dispose=function(){}}}function Wy(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){const T=v.program;n.uniformBlockBinding(S,T)}function c(S,v){let T=i[S.id];T===void 0&&(g(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(S,R);const A=e.render.frame;s[S.id]!==A&&(d(S),s[S.id]=A)}function u(S){const v=h();S.__bindingPointIndex=v;const T=r.createBuffer(),R=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,T),T}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],T=S.uniforms,R=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,x=T.length;A<x;A++){const U=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,y=U.length;M<y;M++){const F=U[M];if(f(F,A,M,R)===!0){const B=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let D=0;for(let O=0;O<Q.length;O++){const V=Q[O],W=_(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,B+D,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,v,T,R){const A=S.value,x=v+"_"+T;if(R[x]===void 0)return typeof A=="number"||typeof A=="boolean"?R[x]=A:R[x]=A.clone(),!0;{const U=R[x];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[x]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(S){const v=S.uniforms;let T=0;const R=16;for(let x=0,U=v.length;x<U;x++){const M=Array.isArray(v[x])?v[x]:[v[x]];for(let y=0,F=M.length;y<F;y++){const B=M[y],Q=Array.isArray(B.value)?B.value:[B.value];for(let D=0,O=Q.length;D<O;D++){const V=Q[D],W=_(V),q=T%R;q!==0&&R-q<W.boundary&&(T+=R-q),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=W.storage}}}const A=T%R;return A>0&&(T+=R-A),S.__size=T,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Lm{constructor(e={}){const{canvas:t=H0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const v=this;let T=!1,R=0,A=0,x=null,U=-1,M=null;const y=new Zt,F=new Zt;let B=null;const Q=new et(0);let D=0,O=t.width,V=t.height,W=1,q=null,$=null;const C=new Zt(0,0,O,V),Z=new Zt(0,0,O,V);let he=!1;const j=new ym;let K=!1,le=!1,Me=null;const me=new Pt,Ue=new Oe,Pe=new I,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return x===null?W:1}let k=n;function Ye(b,N){for(let Y=0;Y<b.length;Y++){const X=b[Y],G=t.getContext(X,N);if(G!==null)return G}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",se,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),k=Ye(N,b),k===null)throw Ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,Le,xe,H,ze,w,E,z,ie,ee,re,_e,de,ce,we,Ge,J,ot,De,qe,Te,ge,P,ae;function be(){ve=new tS(k),Le=new jM(k,ve,e),ve.init(Le),ge=new ky(k,ve,Le),xe=new By(k,ve,Le),H=new rS(k),ze=new Ty,w=new zy(k,ve,xe,ze,Le,ge,H),E=new ZM(v),z=new eS(v),ie=new fv(k,Le),P=new qM(k,ve,ie,Le),ee=new nS(k,ie,H,P),re=new lS(k,ee,ie,H),De=new oS(k,Le,w),Ge=new KM(ze),_e=new Ey(v,E,z,ve,Le,P,Ge),de=new Wy(v,ze),ce=new Ay,we=new Dy(ve,Le),ot=new YM(v,E,z,xe,re,d,l),J=new Fy(v,re,Le),ae=new Xy(k,H,Le,xe),qe=new $M(k,ve,H,Le),Te=new iS(k,ve,H,Le),H.programs=_e.programs,v.capabilities=Le,v.extensions=ve,v.properties=ze,v.renderLists=ce,v.shadowMap=J,v.state=xe,v.info=H}be();const te=new Vy(v,k);this.xr=te,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(O,V,!1))},this.getSize=function(b){return b.set(O,V)},this.setSize=function(b,N,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,V=N,t.width=Math.floor(b*W),t.height=Math.floor(N*W),Y===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(O*W,V*W).floor()},this.setDrawingBufferSize=function(b,N,Y){O=b,V=N,W=Y,t.width=Math.floor(b*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,N,Y,X){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,N,Y,X),xe.viewport(y.copy(C).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,N,Y,X){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,N,Y,X),xe.scissor(F.copy(Z).multiplyScalar(W).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){xe.setScissorTest(he=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(b=!0,N=!0,Y=!0){let X=0;if(b){let G=!1;if(x!==null){const fe=x.texture.format;G=fe===am||fe===sm||fe===rm}if(G){const fe=x.texture.type,Re=fe===cr||fe===nr||fe===Ou||fe===zr||fe===nm||fe===im,Ve=ot.getClearColor(),Ce=ot.getClearAlpha(),Ne=Ve.r,We=Ve.g,Ze=Ve.b;Re?(f[0]=Ne,f[1]=We,f[2]=Ze,f[3]=Ce,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Ne,g[1]=We,g[2]=Ze,g[3]=Ce,k.clearBufferiv(k.COLOR,0,g))}else X|=k.COLOR_BUFFER_BIT}N&&(X|=k.DEPTH_BUFFER_BIT),Y&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ce.dispose(),we.dispose(),ze.dispose(),E.dispose(),z.dispose(),re.dispose(),P.dispose(),ae.dispose(),_e.dispose(),te.dispose(),te.removeEventListener("sessionstart",Se),te.removeEventListener("sessionend",Ae),Me&&(Me.dispose(),Me=null),oe.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=H.autoReset,N=J.enabled,Y=J.autoUpdate,X=J.needsUpdate,G=J.type;be(),H.autoReset=b,J.enabled=N,J.autoUpdate=Y,J.needsUpdate=X,J.type=G}function se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ue(b){const N=b.target;N.removeEventListener("dispose",ue),Be(N)}function Be(b){Ie(b),ze.remove(b)}function Ie(b){const N=ze.get(b).programs;N!==void 0&&(N.forEach(function(Y){_e.releaseProgram(Y)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Y,X,G,fe){N===null&&(N=Fe);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Ve=xt(b,N,Y,X,G);xe.setMaterial(X,Re);let Ce=Y.index,Ne=1;if(X.wireframe===!0){if(Ce=ee.getWireframeAttribute(Y),Ce===void 0)return;Ne=2}const We=Y.drawRange,Ze=Y.attributes.position;let yt=We.start*Ne,Ft=(We.start+We.count)*Ne;fe!==null&&(yt=Math.max(yt,fe.start*Ne),Ft=Math.min(Ft,(fe.start+fe.count)*Ne)),Ce!==null?(yt=Math.max(yt,0),Ft=Math.min(Ft,Ce.count)):Ze!=null&&(yt=Math.max(yt,0),Ft=Math.min(Ft,Ze.count));const ht=Ft-yt;if(ht<0||ht===1/0)return;P.setup(G,X,Ve,Y,Ce);let fn,pt=qe;if(Ce!==null&&(fn=ie.get(Ce),pt=Te,pt.setIndex(fn)),G.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*Xe()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(G.isLine){let $e=X.linewidth;$e===void 0&&($e=1),xe.setLineWidth($e*Xe()),G.isLineSegments?pt.setMode(k.LINES):G.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else G.isPoints?pt.setMode(k.POINTS):G.isSprite&&pt.setMode(k.TRIANGLES);if(G.isBatchedMesh)pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pt.renderInstances(yt,ht,G.count);else if(Y.isInstancedBufferGeometry){const $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pl=Math.min(Y.instanceCount,$e);pt.renderInstances(yt,ht,Pl)}else pt.render(yt,ht)};function je(b,N,Y){b.transparent===!0&&b.side===Di&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,vt(b,N,Y),b.side=pr,b.needsUpdate=!0,vt(b,N,Y),b.side=Di):vt(b,N,Y)}this.compile=function(b,N,Y=null){Y===null&&(Y=b),p=we.get(Y),p.init(),S.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==Y&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const X=new Set;return b.traverse(function(G){const fe=G.material;if(fe)if(Array.isArray(fe))for(let Re=0;Re<fe.length;Re++){const Ve=fe[Re];je(Ve,Y,G),X.add(Ve)}else je(fe,Y,G),X.add(fe)}),S.pop(),p=null,X},this.compileAsync=function(b,N,Y=null){const X=this.compile(b,N,Y);return new Promise(G=>{function fe(){if(X.forEach(function(Re){ze.get(Re).currentProgram.isReady()&&X.delete(Re)}),X.size===0){G(b);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Qe=null;function ye(b){Qe&&Qe(b)}function Se(){oe.stop()}function Ae(){oe.start()}const oe=new Em;oe.setAnimationLoop(ye),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(b){Qe=b,te.setAnimationLoop(b),b===null?oe.stop():oe.start()},te.addEventListener("sessionstart",Se),te.addEventListener("sessionend",Ae),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,x),p=we.get(b,S.length),p.init(),S.push(p),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(me),le=this.localClippingEnabled,K=Ge.init(this.clippingPlanes,le),_=ce.get(b,m.length),_.init(),m.push(_),He(b,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,$),this.info.render.frame++,K===!0&&Ge.beginShadows();const Y=p.state.shadowsArray;if(J.render(Y,b,N),K===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(_,b),p.setupLights(v._useLegacyLights),N.isArrayCamera){const X=N.cameras;for(let G=0,fe=X.length;G<fe;G++){const Re=X[G];ke(_,b,Re,Re.viewport)}}else ke(_,b,N);x!==null&&(w.updateMultisampleRenderTarget(x),w.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(v,b,N),P.resetDefaultState(),U=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function He(b,N,Y,X){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){X&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Re=re.update(b),Ve=b.material;Ve.visible&&_.push(b,Re,Ve,Y,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Re=re.update(b),Ve=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Pe.copy(Re.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Ve)){const Ce=Re.groups;for(let Ne=0,We=Ce.length;Ne<We;Ne++){const Ze=Ce[Ne],yt=Ve[Ze.materialIndex];yt&&yt.visible&&_.push(b,Re,yt,Y,Pe.z,Ze)}}else Ve.visible&&_.push(b,Re,Ve,Y,Pe.z,null)}}const fe=b.children;for(let Re=0,Ve=fe.length;Re<Ve;Re++)He(fe[Re],N,Y,X)}function ke(b,N,Y,X){const G=b.opaque,fe=b.transmissive,Re=b.transparent;p.setupLightsView(Y),K===!0&&Ge.setGlobalState(v.clippingPlanes,Y),fe.length>0&&Ke(G,fe,N,Y),X&&xe.viewport(y.copy(X)),G.length>0&&Tt(G,N,Y),fe.length>0&&Tt(fe,N,Y),Re.length>0&&Tt(Re,N,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ke(b,N,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const fe=Le.isWebGL2;Me===null&&(Me=new hi(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?zi:cr,minFilter:qa,samples:fe?4:0})),v.getDrawingBufferSize(Ue),fe?Me.setSize(Ue.x,Ue.y):Me.setSize(gl(Ue.x),gl(Ue.y));const Re=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(Q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ve=v.toneMapping;v.toneMapping=lr,Tt(b,Y,X),w.updateMultisampleRenderTarget(Me),w.updateRenderTargetMipmap(Me);let Ce=!1;for(let Ne=0,We=N.length;Ne<We;Ne++){const Ze=N[Ne],yt=Ze.object,Ft=Ze.geometry,ht=Ze.material,fn=Ze.group;if(ht.side===Di&&yt.layers.test(X.layers)){const pt=ht.side;ht.side=Cn,ht.needsUpdate=!0,it(yt,Y,X,Ft,ht,fn),ht.side=pt,ht.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(Me),w.updateRenderTargetMipmap(Me)),v.setRenderTarget(Re),v.setClearColor(Q,D),v.toneMapping=Ve}function Tt(b,N,Y){const X=N.isScene===!0?N.overrideMaterial:null;for(let G=0,fe=b.length;G<fe;G++){const Re=b[G],Ve=Re.object,Ce=Re.geometry,Ne=X===null?Re.material:X,We=Re.group;Ve.layers.test(Y.layers)&&it(Ve,N,Y,Ce,Ne,We)}}function it(b,N,Y,X,G,fe){b.onBeforeRender(v,N,Y,X,G,fe),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(v,N,Y,X,b,fe),G.transparent===!0&&G.side===Di&&G.forceSinglePass===!1?(G.side=Cn,G.needsUpdate=!0,v.renderBufferDirect(Y,N,X,G,b,fe),G.side=pr,G.needsUpdate=!0,v.renderBufferDirect(Y,N,X,G,b,fe),G.side=Di):v.renderBufferDirect(Y,N,X,G,b,fe),b.onAfterRender(v,N,Y,X,G,fe)}function vt(b,N,Y){N.isScene!==!0&&(N=Fe);const X=ze.get(b),G=p.state.lights,fe=p.state.shadowsArray,Re=G.state.version,Ve=_e.getParameters(b,G.state,fe,N,Y),Ce=_e.getProgramCacheKey(Ve);let Ne=X.programs;X.environment=b.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(b.isMeshStandardMaterial?z:E).get(b.envMap||X.environment),Ne===void 0&&(b.addEventListener("dispose",ue),Ne=new Map,X.programs=Ne);let We=Ne.get(Ce);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===Re)return St(b,Ve),We}else Ve.uniforms=_e.getUniforms(b),b.onBuild(Y,Ve,v),b.onBeforeCompile(Ve,v),We=_e.acquireProgram(Ve,Ce),Ne.set(Ce,We),X.uniforms=Ve.uniforms;const Ze=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Ge.uniform),St(b,Ve),X.needsLights=Un(b),X.lightsStateVersion=Re,X.needsLights&&(Ze.ambientLightColor.value=G.state.ambient,Ze.lightProbe.value=G.state.probe,Ze.directionalLights.value=G.state.directional,Ze.directionalLightShadows.value=G.state.directionalShadow,Ze.spotLights.value=G.state.spot,Ze.spotLightShadows.value=G.state.spotShadow,Ze.rectAreaLights.value=G.state.rectArea,Ze.ltc_1.value=G.state.rectAreaLTC1,Ze.ltc_2.value=G.state.rectAreaLTC2,Ze.pointLights.value=G.state.point,Ze.pointLightShadows.value=G.state.pointShadow,Ze.hemisphereLights.value=G.state.hemi,Ze.directionalShadowMap.value=G.state.directionalShadowMap,Ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ze.spotShadowMap.value=G.state.spotShadowMap,Ze.spotLightMatrix.value=G.state.spotLightMatrix,Ze.spotLightMap.value=G.state.spotLightMap,Ze.pointShadowMap.value=G.state.pointShadowMap,Ze.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function Ot(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=el.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function St(b,N){const Y=ze.get(b);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function xt(b,N,Y,X,G){N.isScene!==!0&&(N=Fe),w.resetTextureUnits();const fe=N.fog,Re=X.isMeshStandardMaterial?N.environment:null,Ve=x===null?v.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Vi,Ce=(X.isMeshStandardMaterial?z:E).get(X.envMap||Re),Ne=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ze=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,Ft=!!Y.morphAttributes.color;let ht=lr;X.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(ht=v.toneMapping);const fn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=fn!==void 0?fn.length:0,$e=ze.get(X),Pl=p.state.lights;if(K===!0&&(le===!0||b!==M)){const qn=b===M&&X.id===U;Ge.setState(X,b,qn)}let Rt=!1;X.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Pl.state.version||$e.outputColorSpace!==Ve||G.isBatchedMesh&&$e.batching===!1||!G.isBatchedMesh&&$e.batching===!0||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||$e.envMap!==Ce||X.fog===!0&&$e.fog!==fe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ge.numPlanes||$e.numIntersection!==Ge.numIntersection)||$e.vertexAlphas!==Ne||$e.vertexTangents!==We||$e.morphTargets!==Ze||$e.morphNormals!==yt||$e.morphColors!==Ft||$e.toneMapping!==ht||Le.isWebGL2===!0&&$e.morphTargetsCount!==pt)&&(Rt=!0):(Rt=!0,$e.__version=X.version);let _r=$e.currentProgram;Rt===!0&&(_r=vt(X,N,G));let Wu=!1,ta=!1,Ll=!1;const en=_r.getUniforms(),gr=$e.uniforms;if(xe.useProgram(_r.program)&&(Wu=!0,ta=!0,Ll=!0),X.id!==U&&(U=X.id,ta=!0),Wu||M!==b){en.setValue(k,"projectionMatrix",b.projectionMatrix),en.setValue(k,"viewMatrix",b.matrixWorldInverse);const qn=en.map.cameraPosition;qn!==void 0&&qn.setValue(k,Pe.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&en.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&en.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,ta=!0,Ll=!0)}if(G.isSkinnedMesh){en.setOptional(k,G,"bindMatrix"),en.setOptional(k,G,"bindMatrixInverse");const qn=G.skeleton;qn&&(Le.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),en.setValue(k,"boneTexture",qn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(en.setOptional(k,G,"batchingTexture"),en.setValue(k,"batchingTexture",G._matricesTexture,w));const Dl=Y.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0&&Le.isWebGL2===!0)&&De.update(G,Y,_r),(ta||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,en.setValue(k,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(gr.envMap.value=Ce,gr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ta&&(en.setValue(k,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&ut(gr,Ll),fe&&X.fog===!0&&de.refreshFogUniforms(gr,fe),de.refreshMaterialUniforms(gr,X,W,V,Me),el.upload(k,Ot($e),gr,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(el.upload(k,Ot($e),gr,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&en.setValue(k,"center",G.center),en.setValue(k,"modelViewMatrix",G.modelViewMatrix),en.setValue(k,"normalMatrix",G.normalMatrix),en.setValue(k,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qn=X.uniformsGroups;for(let Ul=0,km=qn.length;Ul<km;Ul++)if(Le.isWebGL2){const Xu=qn[Ul];ae.update(Xu,_r),ae.bind(Xu,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function ut(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Un(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,N,Y){ze.get(b.texture).__webglTexture=N,ze.get(b.depthTexture).__webglTexture=Y;const X=ze.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const Y=ze.get(b);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Y=0){x=b,R=N,A=Y;let X=!0,G=null,fe=!1,Re=!1;if(b){const Ce=ze.get(b);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Ce.__webglFramebuffer===void 0?w.setupRenderTarget(b):Ce.__hasExternalTextures&&w.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const We=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[N])?G=We[N][Y]:G=We[N],fe=!0):Le.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?G=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[Y]:G=We,y.copy(b.viewport),F.copy(b.scissor),B=b.scissorTest}else y.copy(C).multiplyScalar(W).floor(),F.copy(Z).multiplyScalar(W).floor(),B=he;if(xe.bindFramebuffer(k.FRAMEBUFFER,G)&&Le.drawBuffers&&X&&xe.drawBuffers(b,G),xe.viewport(y),xe.scissor(F),xe.setScissorTest(B),fe){const Ce=ze.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,Y)}else if(Re){const Ce=ze.get(b.texture),Ne=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,Ne)}U=-1},this.readRenderTargetPixels=function(b,N,Y,X,G,fe,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve){xe.bindFramebuffer(k.FRAMEBUFFER,Ve);try{const Ce=b.texture,Ne=Ce.format,We=Ce.type;if(Ne!==ui&&ge.convert(Ne)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=We===zi&&(ve.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ve.has("EXT_color_buffer_float"));if(We!==cr&&ge.convert(We)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===ir&&(Le.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-X&&Y>=0&&Y<=b.height-G&&k.readPixels(N,Y,X,G,ge.convert(Ne),ge.convert(We),fe)}finally{const Ce=x!==null?ze.get(x).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(b,N,Y=0){const X=Math.pow(2,-Y),G=Math.floor(N.image.width*X),fe=Math.floor(N.image.height*X);w.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,b.x,b.y,G,fe),xe.unbindTexture()},this.copyTextureToTexture=function(b,N,Y,X=0){const G=N.image.width,fe=N.image.height,Re=ge.convert(Y.format),Ve=ge.convert(Y.type);w.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,b.x,b.y,G,fe,Re,Ve,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Re,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,b.x,b.y,Re,Ve,N.image),X===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,Y,X,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=b.max.x-b.min.x+1,Re=b.max.y-b.min.y+1,Ve=b.max.z-b.min.z+1,Ce=ge.convert(X.format),Ne=ge.convert(X.type);let We;if(X.isData3DTexture)w.setTexture3D(X,0),We=k.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)w.setTexture2DArray(X,0),We=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Ze=k.getParameter(k.UNPACK_ROW_LENGTH),yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ft=k.getParameter(k.UNPACK_SKIP_PIXELS),ht=k.getParameter(k.UNPACK_SKIP_ROWS),fn=k.getParameter(k.UNPACK_SKIP_IMAGES),pt=Y.isCompressedTexture?Y.mipmaps[G]:Y.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,b.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(We,G,N.x,N.y,N.z,fe,Re,Ve,Ce,Ne,pt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(We,G,N.x,N.y,N.z,fe,Re,Ve,Ce,pt.data)):k.texSubImage3D(We,G,N.x,N.y,N.z,fe,Re,Ve,Ce,Ne,pt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ft),k.pixelStorei(k.UNPACK_SKIP_ROWS,ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fn),G===0&&X.generateMipmaps&&k.generateMipmap(We),xe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){R=0,A=0,x=null,xe.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fu?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===bl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Gr:lm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gr?Gt:Vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Yy extends Lm{}Yy.prototype.isWebGL1Renderer=!0;class Hu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new Hu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qy extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new I;class xl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dm extends jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const ca=new I,xs=new I,Ms=new I,Ss=new Oe,ua=new Oe,Um=new Pt,Fo=new I,ha=new I,Bo=new I,jf=new Oe,Ec=new Oe,Kf=new Oe;class jy extends Jt{constructor(e=new Dm){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $y(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new xl(n,3,0,!1)),vs.setAttribute("uv",new xl(n,2,3,!1))}this.geometry=vs,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Um.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-Ms.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;zo(Fo.set(-.5,-.5,0),Ms,o,xs,i,s),zo(ha.set(.5,-.5,0),Ms,o,xs,i,s),zo(Bo.set(.5,.5,0),Ms,o,xs,i,s),jf.set(0,0),Ec.set(1,0),Kf.set(1,1);let a=e.ray.intersectTriangle(Fo,ha,Bo,!1,ca);if(a===null&&(zo(ha.set(-.5,.5,0),Ms,o,xs,i,s),Ec.set(0,1),a=e.ray.intersectTriangle(Fo,Bo,ha,!1,ca),a===null))return;const l=e.ray.origin.distanceTo(ca);l<e.near||l>e.far||t.push({distance:l,point:ca.clone(),uv:Jn.getInterpolation(ca,Fo,ha,Bo,jf,Ec,Kf,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zo(r,e,t,n,i,s){Ss.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ua.x=s*Ss.x-i*Ss.y,ua.y=i*Ss.x+s*Ss.y):ua.copy(Ss),r.copy(e),r.x+=ua.x,r.y+=ua.y,r.applyMatrix4(Um)}class Im extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zf=new I,Qf=new I,Jf=new Pt,Tc=new Al,ko=new Qa;class Ky extends Jt{constructor(e=new Dn,t=new Im){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zf.fromBufferAttribute(t,i-1),Qf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zf.distanceTo(Qf);e.setAttribute("lineDistance",new fi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(i),ko.radius+=s,e.ray.intersectsSphere(ko)===!1)return;Jf.copy(i).invert(),Tc.copy(e.ray).applyMatrix4(Jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,h=new I,d=new I,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let v=m,T=S-1;v<T;v+=f){const R=g.getX(v),A=g.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,A),Tc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let v=m,T=S-1;v<T;v+=f){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Tc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ed=new I,td=new I;class Zy extends Ky{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ed.fromBufferAttribute(t,i),td.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ed.distanceTo(td);e.setAttribute("lineDistance",new fi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nm extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nd=new Pt,ou=new Al,Go=new Qa,Ho=new I;class Om extends Jt{constructor(e=new Dn,t=new Nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;nd.copy(i).invert(),ou.copy(e.ray).applyMatrix4(nd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const p=c.getX(g);Ho.fromBufferAttribute(h,p),id(Ho,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ho.fromBufferAttribute(h,g),id(Ho,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function id(r,e,t,n,i,s,o){const a=ou.distanceSqToPoint(r);if(a<t){const l=new I;ou.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class rd extends Pn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qy extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sd(){return(typeof performance>"u"?Date:performance).now()}class ad{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(on(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);const od={type:"change"},bc={type:"start"},ld={type:"end"},Vo=new Al,cd=new Ki,Jy=Math.cos(70*um.DEG2RAD);class eE extends $r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",we),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",we),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(od),n.update(),s=i.NONE},this.update=function(){const P=new I,ae=new Yr().setFromUnitVectors(e.up,new I(0,1,0)),be=ae.clone().invert(),te=new I,ne=new Yr,L=new I,se=2*Math.PI;return function(Be=null){const Ie=n.object.position;P.copy(Ie).sub(n.target),P.applyQuaternion(ae),a.setFromVector3(P),n.autoRotate&&s===i.NONE&&B(y(Be)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let je=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;isFinite(je)&&isFinite(Qe)&&(je<-Math.PI?je+=se:je>Math.PI&&(je-=se),Qe<-Math.PI?Qe+=se:Qe>Math.PI&&(Qe-=se),je<=Qe?a.theta=Math.max(je,Math.min(Qe,a.theta)):a.theta=a.theta>(je+Qe)/2?Math.max(je,a.theta):Math.min(Qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=C(a.radius):a.radius=C(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(be),Ie.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ye=!1;if(n.zoomToCursor&&A){let Se=null;if(n.object.isPerspectiveCamera){const Ae=P.length();Se=C(Ae*c);const oe=Ae-Se;n.object.position.addScaledVector(T,oe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ae=new I(R.x,R.y,0);Ae.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0;const oe=new I(R.x,R.y,0);oe.unproject(n.object),n.object.position.sub(oe).add(Ae),n.object.updateMatrixWorld(),Se=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(Vo.origin.copy(n.object.position),Vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vo.direction))<Jy?e.lookAt(n.target):(cd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vo.intersectPlane(cd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ye=!0);return c=1,A=!1,ye||te.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(od),te.copy(n.object.position),ne.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ot),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",z),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",z),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",we),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new ad,l=new ad;let c=1;const u=new I,h=new Oe,d=new Oe,f=new Oe,g=new Oe,_=new Oe,p=new Oe,m=new Oe,S=new Oe,v=new Oe,T=new I,R=new Oe;let A=!1;const x=[],U={};let M=!1;function y(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function F(P){const ae=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*ae)}function B(P){l.theta-=P}function Q(P){l.phi-=P}const D=function(){const P=new I;return function(be,te){P.setFromMatrixColumn(te,0),P.multiplyScalar(-be),u.add(P)}}(),O=function(){const P=new I;return function(be,te){n.screenSpacePanning===!0?P.setFromMatrixColumn(te,1):(P.setFromMatrixColumn(te,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(be),u.add(P)}}(),V=function(){const P=new I;return function(be,te){const ne=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;P.copy(L).sub(n.target);let se=P.length();se*=Math.tan(n.object.fov/2*Math.PI/180),D(2*be*se/ne.clientHeight,n.object.matrix),O(2*te*se/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(be*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),O(te*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(P,ae){if(!n.zoomToCursor)return;A=!0;const be=n.domElement.getBoundingClientRect(),te=P-be.left,ne=ae-be.top,L=be.width,se=be.height;R.x=te/L*2-1,R.y=-(ne/se)*2+1,T.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function C(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function Z(P){h.set(P.clientX,P.clientY)}function he(P){$(P.clientX,P.clientX),m.set(P.clientX,P.clientY)}function j(P){g.set(P.clientX,P.clientY)}function K(P){d.set(P.clientX,P.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*f.x/ae.clientHeight),Q(2*Math.PI*f.y/ae.clientHeight),h.copy(d),n.update()}function le(P){S.set(P.clientX,P.clientY),v.subVectors(S,m),v.y>0?W(F(v.y)):v.y<0&&q(F(v.y)),m.copy(S),n.update()}function Me(P){_.set(P.clientX,P.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_),n.update()}function me(P){$(P.clientX,P.clientY),P.deltaY<0?q(F(P.deltaY)):P.deltaY>0&&W(F(P.deltaY)),n.update()}function Ue(P){let ae=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),ae=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),ae=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),ae=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),ae=!0;break}ae&&(P.preventDefault(),n.update())}function Pe(P){if(x.length===1)h.set(P.pageX,P.pageY);else{const ae=ge(P),be=.5*(P.pageX+ae.x),te=.5*(P.pageY+ae.y);h.set(be,te)}}function Fe(P){if(x.length===1)g.set(P.pageX,P.pageY);else{const ae=ge(P),be=.5*(P.pageX+ae.x),te=.5*(P.pageY+ae.y);g.set(be,te)}}function Xe(P){const ae=ge(P),be=P.pageX-ae.x,te=P.pageY-ae.y,ne=Math.sqrt(be*be+te*te);m.set(0,ne)}function k(P){n.enableZoom&&Xe(P),n.enablePan&&Fe(P)}function Ye(P){n.enableZoom&&Xe(P),n.enableRotate&&Pe(P)}function ve(P){if(x.length==1)d.set(P.pageX,P.pageY);else{const be=ge(P),te=.5*(P.pageX+be.x),ne=.5*(P.pageY+be.y);d.set(te,ne)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const ae=n.domElement;B(2*Math.PI*f.x/ae.clientHeight),Q(2*Math.PI*f.y/ae.clientHeight),h.copy(d)}function Le(P){if(x.length===1)_.set(P.pageX,P.pageY);else{const ae=ge(P),be=.5*(P.pageX+ae.x),te=.5*(P.pageY+ae.y);_.set(be,te)}p.subVectors(_,g).multiplyScalar(n.panSpeed),V(p.x,p.y),g.copy(_)}function xe(P){const ae=ge(P),be=P.pageX-ae.x,te=P.pageY-ae.y,ne=Math.sqrt(be*be+te*te);S.set(0,ne),v.set(0,Math.pow(S.y/m.y,n.zoomSpeed)),W(v.y),m.copy(S);const L=(P.pageX+ae.x)*.5,se=(P.pageY+ae.y)*.5;$(L,se)}function H(P){n.enableZoom&&xe(P),n.enablePan&&Le(P)}function ze(P){n.enableZoom&&xe(P),n.enableRotate&&ve(P)}function w(P){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",z)),De(P),P.pointerType==="touch"?Ge(P):ie(P))}function E(P){n.enabled!==!1&&(P.pointerType==="touch"?J(P):ee(P))}function z(P){qe(P),x.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",z)),n.dispatchEvent(ld),s=i.NONE}function ie(P){let ae;switch(P.button){case 0:ae=n.mouseButtons.LEFT;break;case 1:ae=n.mouseButtons.MIDDLE;break;case 2:ae=n.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case es.DOLLY:if(n.enableZoom===!1)return;he(P),s=i.DOLLY;break;case es.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;j(P),s=i.PAN}else{if(n.enableRotate===!1)return;Z(P),s=i.ROTATE}break;case es.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Z(P),s=i.ROTATE}else{if(n.enablePan===!1)return;j(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bc)}function ee(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;le(P);break;case i.PAN:if(n.enablePan===!1)return;Me(P);break}}function re(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(bc),me(_e(P)),n.dispatchEvent(ld))}function _e(P){const ae=P.deltaMode,be={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(ae){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return P.ctrlKey&&!M&&(be.deltaY*=10),be}function de(P){P.key==="Control"&&(M=!0,document.addEventListener("keyup",ce,{passive:!0,capture:!0}))}function ce(P){P.key==="Control"&&(M=!1,document.removeEventListener("keyup",ce,{passive:!0,capture:!0}))}function we(P){n.enabled===!1||n.enablePan===!1||Ue(P)}function Ge(P){switch(Te(P),x.length){case 1:switch(n.touches.ONE){case ts.ROTATE:if(n.enableRotate===!1)return;Pe(P),s=i.TOUCH_ROTATE;break;case ts.PAN:if(n.enablePan===!1)return;Fe(P),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ts.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(P),s=i.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(P),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(bc)}function J(P){switch(Te(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Le(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(P),n.update();break;default:s=i.NONE}}function ot(P){n.enabled!==!1&&P.preventDefault()}function De(P){x.push(P.pointerId)}function qe(P){delete U[P.pointerId];for(let ae=0;ae<x.length;ae++)if(x[ae]==P.pointerId){x.splice(ae,1);return}}function Te(P){let ae=U[P.pointerId];ae===void 0&&(ae=new Oe,U[P.pointerId]=ae),ae.set(P.pageX,P.pageY)}function ge(P){const ae=P.pointerId===x[0]?x[1]:x[0];return U[ae]}n.domElement.addEventListener("contextmenu",ot),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",z),n.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",de,{passive:!0,capture:!0}),this.update()}}class tE extends Jt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Oe(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const ys=new I,ud=new Pt,hd=new Pt,fd=new I,dd=new I;class nE{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),ud.copy(g.matrixWorldInverse),hd.multiplyMatrices(g.projectionMatrix,ud),c(f,f,g),d(f)},this.setSize=function(f,g){n=f,i=g,s=n/2,o=i/2,l.style.width=f+"px",l.style.height=g+"px"};function c(f,g,_){if(f.isCSS2DObject){ys.setFromMatrixPosition(f.matrixWorld),ys.applyMatrix4(hd);const p=f.visible===!0&&ys.z>=-1&&ys.z<=1&&f.layers.test(_.layers)===!0;if(f.element.style.display=p===!0?"":"none",p===!0){f.onBeforeRender(t,g,_);const S=f.element;S.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(ys.x*s+s)+"px,"+(-ys.y*o+o)+"px)",S.parentNode!==l&&l.appendChild(S),f.onAfterRender(t,g,_)}const m={distanceToCameraSquared:u(_,f)};a.objects.set(f,m)}for(let p=0,m=f.children.length;p<m;p++)c(f.children[p],g,_)}function u(f,g){return fd.setFromMatrixPosition(f.matrixWorld),dd.setFromMatrixPosition(g.matrixWorld),fd.distanceToSquared(dd)}function h(f){const g=[];return f.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(f){const g=h(f).sort(function(p,m){if(p.renderOrder!==m.renderOrder)return m.renderOrder-p.renderOrder;const S=a.objects.get(p).distanceToCameraSquared,v=a.objects.get(m).distanceToCameraSquared;return S-v}),_=g.length;for(let p=0,m=g.length;p<m;p++)g[p].element.style.zIndex=_-p}}}const Bm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iE=new Tm(-1,1,1,-1,0,1);class rE extends Dn{constructor(){super(),this.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new fi([0,2,0,0,2,0],2))}}const sE=new rE;class Vu{constructor(e){this._mesh=new Ni(sE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class aE extends ea{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ja.clone(e.uniforms),this.material=new yn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pd extends ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class oE extends ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new aE(Bm),this.copyPass.material.blending=Bi,this.clock=new Fm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pd!==void 0&&(o instanceof pd?n=!0:o instanceof oE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cE extends ea{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const uE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Zs extends ea{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(s,o,{type:zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new hi(s,o,{type:zi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new hi(s,o,{type:zi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=uE;this.highPassUniforms=ja.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Bm;this.copyUniforms=ja.clone(u.uniforms),this.blendMaterial=new yn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new et,this.oldClearAlpha=1,this.basic=new zu,this.fsQuad=new Vu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new yn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Zs.BlurDirectionX=new Oe(1,0);Zs.BlurDirectionY=new Oe(0,1);const hE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fE extends ea{constructor(){super();const e=hE;this.uniforms=ja.clone(e.uniforms),this.material=new Qy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zp?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jp&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dE{constructor(e,{reducedMotion:t=!1}={}){this.container=e,this.reduced=t,this.systems=[],this.pointer=new Oe(-10,-10),this._tx=0,this._ty=0,this._px=0,this._py=0,this.scripted=!1,this.clock=new Fm,this.renderer=new Lm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Nu,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.labelRenderer=new nE,Object.assign(this.labelRenderer.domElement.style,{position:"absolute",top:"0",left:"0",pointerEvents:"none"}),e.appendChild(this.labelRenderer.domElement),this.scene=new qy,this.scene.background=this._gradientBackground(),this.scene.fog=new Hu(659732,.05),this.camera=new ei(50,1,.1,100),this.camera.position.set(0,0,7.5),this.controls=new eE(this.camera,this.renderer.domElement),Object.assign(this.controls,{enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.1,rotateSpeed:1.5,autoRotate:!this.reduced,autoRotateSpeed:1.3}),this._addDust(),this._addNebula(),this.composer=new lE(this.renderer),this.composer.addPass(new cE(this.scene,this.camera)),this.bloom=new Zs(new Oe(1,1),.85,.5,0),this.composer.addPass(this.bloom),this.composer.addPass(new fE),this.renderer.domElement.addEventListener("pointermove",n=>{const i=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(n.clientX-i.left)/i.width*2-1,this.pointer.y=-((n.clientY-i.top)/i.height*2-1),this._px=this.pointer.x,this._py=this.pointer.y}),window.addEventListener("resize",()=>this.resize()),this.resize(),this.renderer.setAnimationLoop(()=>this.tick())}_gradientBackground(){const e=document.createElement("canvas");e.width=4,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#15242b"),n.addColorStop(.45,"#0d161c"),n.addColorStop(1,"#070d11"),t.fillStyle=n,t.fillRect(0,0,4,512);const i=new rd(e);return i.colorSpace=Gt,i}_addDust(){const t=new Float32Array(1560);for(let i=0;i<520;i++){const s=6+Math.random()*9,o=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);t[i*3]=s*Math.sin(a)*Math.cos(o),t[i*3+1]=s*Math.sin(a)*Math.sin(o),t[i*3+2]=s*Math.cos(a)}const n=new Dn;n.setAttribute("position",new qt(t,3)),this.dust=new Om(n,new Nm({color:5918519,size:.03,sizeAttenuation:!0,transparent:!0,opacity:.55,depthWrite:!1,blending:Xr})),this.scene.add(this.dust)}_addNebula(){this.nebula=[];const e=(t,n,i,s,o,a)=>{const l=new Dm({map:this._radialTexture(t),transparent:!0,opacity:a,depthWrite:!1,depthTest:!1,fog:!1,blending:Xr}),c=new jy(l);c.scale.set(o,o,1),c.position.set(n,i,s),c.userData={baseOpacity:a,x:n,y:i},this.scene.add(c),this.nebula.push(c)};e("#e3b23c",-3.2,1.6,-9,17,.12),e("#2f6b6b",4.2,-2.2,-11,22,.09)}_radialTexture(e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=new et(e),s=`${i.r*255|0}, ${i.g*255|0}, ${i.b*255|0}`,o=n.createRadialGradient(128,128,0,128,128,128);o.addColorStop(0,`rgba(${s}, 1)`),o.addColorStop(.5,`rgba(${s}, 0.35)`),o.addColorStop(1,`rgba(${s}, 0)`),n.fillStyle=o,n.fillRect(0,0,256,256);const a=new rd(t);return a.colorSpace=Gt,a}add(e){this.systems.push(e),e.object3d&&this.scene.add(e.object3d)}resize(){var n;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.bloom.setSize(e,t),this.labelRenderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const i of this.systems)(n=i.onResize)==null||n.call(i,this)}tick(){var n;const e=this.clock.getDelta(),t=this.clock.elapsedTime;if(!document.hidden){if(this.scripted||(this.controls.update(),this.reduced||(this._tx+=(this._px-this._tx)*.06,this._ty+=(this._py-this._ty)*.06,this.camera.rotateY(this._tx*.1),this.camera.rotateX(-this._ty*.1))),this.dust&&!this.reduced&&(this.dust.rotation.y+=e*.01),this.nebula&&!this.reduced)for(let i=0;i<this.nebula.length;i++){const s=this.nebula[i],o=i*2.1;s.material.opacity=s.userData.baseOpacity*(.65+.35*Math.sin(t*.12+o)),s.position.x=s.userData.x+Math.sin(t*.05+o)*.9,s.position.y=s.userData.y+Math.cos(t*.045+o)*.7}for(const i of this.systems)(n=i.update)==null||n.call(i,t,e,this);this.composer.render(),this.labelRenderer.render(this.scene,this.camera)}}}function pE(r,e=7){const t=new Float32Array(r*3);for(let n=0;n<r;n++){const i=e*Math.cbrt(Math.random()),s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);t[n*3]=i*Math.sin(o)*Math.cos(s),t[n*3+1]=i*Math.sin(o)*Math.sin(s),t[n*3+2]=i*Math.cos(o)}return t}function md(r,e=3){const t=new Float32Array(r*3),n=Math.PI*(3-Math.sqrt(5));for(let i=0;i<r;i++){const s=1-i/(r-1)*2,o=Math.sqrt(Math.max(0,1-s*s)),a=i*n,l=e*(.82+Math.random()*.18);t[i*3]=Math.cos(a)*o*l,t[i*3+1]=s*l,t[i*3+2]=Math.sin(a)*o*l}return t}function _d(r,e,t={}){const n=t.fontSize||240,i=document.createElement("canvas"),s=i.getContext("2d"),o=`900 ${n}px Arial, sans-serif`;s.font=o;const a=Math.ceil(s.measureText(r).width)+60,l=Math.ceil(n*1.3);i.width=a,i.height=l,s.fillStyle="#fff",s.font=o,s.textAlign="center",s.textBaseline="middle",s.fillText(r,a/2,l/2);const c=s.getImageData(0,0,a,l).data,u=[];for(let f=0;f<l;f+=2)for(let g=0;g<a;g+=2)c[(f*a+g)*4+3]>128&&u.push([g,f]);const h=new Float32Array(e*3),d=6.4/a;for(let f=0;f<e;f++){const g=u.length?u[Math.floor(Math.random()*u.length)]:[a/2,l/2];h[f*3]=(g[0]-a/2)*d,h[f*3+1]=-(g[1]-l/2)*d,h[f*3+2]=(Math.random()-.5)*.6}return h}const mE=`
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
    vec3 A0 = vec3(0.89, 0.70, 0.235); vec3 A1 = vec3(0.82, 0.50, 0.18);  vec3 A2 = vec3(0.91, 0.92, 0.86); // Ember
    vec3 B0 = vec3(0.94, 0.81, 0.48);  vec3 B1 = vec3(0.78, 0.42, 0.16);  vec3 B2 = vec3(0.95, 0.93, 0.87); // Brass
    vec3 C0 = vec3(1.0, 0.78, 0.34);   vec3 C1 = vec3(0.71, 0.38, 0.11);  vec3 C2 = vec3(0.93, 0.90, 0.84); // Signal
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
`,_E=`
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
`;class gE{constructor(e,{count:t=1900,reducedMotion:n=!1}={}){this.object3d=new xa,this.count=t,this.nodes=e.nodes,this.NH=this.nodes.length,this.hovered=-1,this.labelStrength=0,this.introFactor=1,this._proj=new I,this._build(e,n)}_build(e,t){const n=e.categories,i=["manager","techlead","ai"],s=this.count,o=this.NH;this.hubIndices=[];for(let x=0;x<o;x++)this.hubIndices.push(Math.min(s-1,Math.floor((x+.5)*(s/o))));const a=new Set(this.hubIndices),l={};this.hubIndices.forEach((x,U)=>l[x]=U);const c=this._buildNeural(s,o,a),u=pE(s,7),h=new Float32Array(u.length);for(let x=0;x<h.length;x++)h[x]=u[x]*2;this.shapes=[u,c,_d("GT",s,{fontSize:280}),_d("LET'S BUILD",s,{fontSize:150}),h,md(s,3.2),md(s,.05)];const d=new Float32Array(this.shapes[0]),f=new Float32Array(s*3),g=new Float32Array(s),_=new Float32Array(s),p=new et;for(let x=0;x<s;x++){const U=a.has(x),M=U?this.nodes[l[x]].cat:i[x%3];p.set(n[M]||"#9fb4ff"),U||p.multiplyScalar(.85),f[x*3]=p.r,f[x*3+1]=p.g,f[x*3+2]=p.b,g[x]=U?26:6.5,_[x]=Math.random()}this.sizesBase=g.slice();const m=new Dn;m.setAttribute("position",new qt(d,3)),m.setAttribute("aColor",new qt(f,3)),m.setAttribute("aSize",new qt(g,1)),m.setAttribute("aSeed",new qt(_,1)),this.pointGeo=m,this.material=new yn({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uMotion:{value:t?0:1},uOpacity:{value:1}},vertexShader:mE,fragmentShader:_E,transparent:!0,depthWrite:!1,blending:Xr}),this.points=new Om(m,this.material),this.object3d.add(this.points);const S=this.edges.length;this.edgePos=new Float32Array(S*2*3);const v=new Float32Array(S*2*3),T=new et,R=new et;for(let x=0;x<S;x++){const[U,M]=this.edges[x];T.set(n[this.nodes[U].cat]||"#9fb4ff").multiplyScalar(.55),R.set(n[this.nodes[M].cat]||"#9fb4ff").multiplyScalar(.55),v.set([T.r,T.g,T.b,R.r,R.g,R.b],x*6)}this.edgeBaseColors=v.slice(),this.edgeColors=v;const A=new Dn;A.setAttribute("position",new qt(this.edgePos,3)),A.setAttribute("color",new qt(v,3)),this.lineGeo=A,this.lines=new Zy(A,new Im({vertexColors:!0,transparent:!0,opacity:.6,blending:Xr,depthWrite:!1})),this.object3d.add(this.lines),this.labels=[];for(let x=0;x<o;x++){const U=document.createElement("div");U.className="kg-label"+(this.nodes[x].hub?" kg-label--hub":""),U.textContent=this.nodes[x].label;const M=new tE(U);this.object3d.add(M),this.labels.push({el:U,obj:M})}}_buildNeural(e,t,n){const i=[4,6,5,3],s=[-2.9,-.97,.97,2.9],o=[],a=[];for(let h=0;h<i.length;h++){const d=i[h],f=[];for(let g=0;g<d;g++){const _=d===1?0:(g/(d-1)-.5)*4.4;f.push(o.length),o.push({x:s[h],y:_,z:(Math.random()-.5)*.5})}a.push(f)}const l=[];for(let h=0;h<a.length-1;h++)for(const d of a[h]){const f=a[h+1].map(g=>[Math.abs(o[d].y-o[g].y),g]).sort((g,_)=>g[0]-_[0]);for(let g=0;g<Math.min(2,f.length);g++)l.push([d,f[g][1]])}this.edges=l.filter(([h,d])=>h<t&&d<t);const c=new Float32Array(e*3),u=(h,d,f)=>{c[h*3]=d.x+(Math.random()-.5)*f,c[h*3+1]=d.y+(Math.random()-.5)*f,c[h*3+2]=d.z+(Math.random()-.5)*f};for(let h=0;h<t;h++)u(this.hubIndices[h],o[h%o.length],.14);for(let h=0;h<e;h++)if(!n.has(h))if(Math.random()<.5)u(h,o[Math.random()*o.length|0],.32);else{const d=l[Math.random()*l.length|0],f=o[d[0]],g=o[d[1]],_=Math.random();c[h*3]=f.x+(g.x-f.x)*_+(Math.random()-.5)*.12,c[h*3+1]=f.y+(g.y-f.y)*_+(Math.random()-.5)*.12,c[h*3+2]=f.z+(g.z-f.z)*_+(Math.random()-.5)*.12}return c}setSegment(e,t,n){n=Math.min(Math.max(n,0),1);const i=this.shapes[e],s=this.shapes[t],o=this.pointGeo.attributes.position.array;for(let a=0;a<o.length;a++)o[a]=i[a]+(s[a]-i[a])*n;this.pointGeo.attributes.position.needsUpdate=!0}onResize(e){this.material.uniforms.uPixelRatio.value=e.renderer.getPixelRatio()}_applyHover(){const e=this.edgeColors,t=this.edgeBaseColors;for(let i=0;i<this.edges.length;i++){const[s,o]=this.edges[i],a=s===this.hovered||o===this.hovered;for(let l=0;l<2;l++){const c=(i*2+l)*3;a?(e[c]=.94,e[c+1]=.81,e[c+2]=.48):(e[c]=t[c],e[c+1]=t[c+1],e[c+2]=t[c+2])}}this.lineGeo.attributes.color.needsUpdate=!0;const n=this.pointGeo.attributes.aSize.array;for(let i=0;i<this.NH;i++){const s=this.hubIndices[i];n[s]=i===this.hovered?this.sizesBase[s]*1.9:this.sizesBase[s]}this.pointGeo.attributes.aSize.needsUpdate=!0;for(let i=0;i<this.NH;i++)this.labels[i].el.classList.toggle("kg-label--hover",i===this.hovered)}update(e,t,n){this.material.uniforms.uTime.value=e,this.material.uniforms.uOpacity.value=this.introFactor;const i=this.pointGeo.attributes.position.array,s=n.camera,o=this.labelStrength*this.introFactor,a=this.labelStrength>.4;let l=.08,c=-1;for(let h=0;h<this.NH;h++){const d=this.hubIndices[h],f=i[d*3],g=i[d*3+1],_=i[d*3+2],p=this.labels[h];p.obj.position.set(f,g,_);const m=this._proj.set(f,g,_).project(s),S=um.clamp(1-(m.z*.5+.5),0,1);if(p.el.style.opacity=(o*(.5+.5*S)).toFixed(3),a&&m.z<=1){const v=Math.hypot(m.x-n.pointer.x,m.y-n.pointer.y);v<l&&(l=v,c=h)}}a||(c=-1),c!==this.hovered&&(this.hovered=c,this._applyHover());const u=this.edgePos;for(let h=0;h<this.edges.length;h++){const[d,f]=this.edges[h],g=this.hubIndices[d],_=this.hubIndices[f];u.set([i[g*3],i[g*3+1],i[g*3+2],i[_*3],i[_*3+1],i[_*3+2]],h*6)}this.lineGeo.attributes.position.needsUpdate=!0,this.lines.material.opacity=.6*o,this.lines.visible=o>.01}}const vE=""+new URL("portrait-Dvma4V9J.png",import.meta.url).href;function xE(r,e){const{identity:t,hats:n,amplifier:i,experience:s,projects:o,contact:a}=r,l=p=>p.map(m=>`<li>${m}</li>`).join(""),c=(p,m,S,v="")=>`
    <section class="panel ${v}" id="${p}">
      <div class="frame" data-reveal>
        <div class="frame__body">
          <div class="frame__lead">${m}</div>
          <div class="frame__content">${S}</div>
        </div>
      </div>
    </section>`,u=c("hero",`<p class="role-line" data-hero>${t.roles.join(" · ")}</p>
     <h1 class="hero__name" data-hero>${t.name}</h1>
     <p class="hero__tagline" data-hero>${t.tagline}</p>`,`<ul class="hero__meta" data-hero>${t.kicker.split(" · ").map(p=>`<li>${p}</li>`).join("")}</ul>`,"panel--hero"),h=c("hats",`<h2 class="frame__title">Two hats,<br />one throughline</h2>
     <p class="frame__intro">I run the data, its quality and governance, and lead how it gets engineered and shipped with AI.</p>`,`<div class="hats">
       <div class="hat"><h3>${n.manager.label}</h3><ul>${l(n.manager.disciplines)}</ul></div>
       <div class="hat"><h3>${n.techLead.label}</h3><ul>${l(n.techLead.disciplines)}</ul></div>
     </div>`),d=c("amplify",`<h2 class="frame__title">I amplify every layer with AI &amp; agents</h2>
     <p class="frame__intro">Governance, quality and engineering, each one multiplied by agents that read, audit and build.</p>`,`<div class="cards">${i.map(p=>`<div class="card"><span class="card__tag">${p.branch}</span><p>${p.message}</p></div>`).join("")}</div>`),f=c("work",`<h2 class="frame__title">Where I've led</h2>
     <p class="frame__intro">From founding a governance practice across LatAm to architecting multi-terabyte data platforms.</p>`,`<div class="rows">${s.map(p=>`<div class="row"><div class="row__meta"><span class="row__company">${p.company}</span><span class="row__dates">${p.dates}</span></div><div class="row__body"><h3>${p.role}</h3><p>${p.summary}</p></div></div>`).join("")}</div>`),g=c("projects",`<h2 class="frame__title">Things I've built</h2>
     <p class="frame__intro">Agents, retrieval and data quality, running in production. Scroll to step through them.</p>`,`<div class="proj-stage">${o.map((p,m)=>`<a class="proj" href="${p.link}" target="_blank" rel="noopener"><span class="proj__num">0${m+1} / 0${o.length}</span><h3>${p.title}</h3><p>${p.description}</p><span class="proj__tech">${p.tech}</span><span class="proj__link">View on GitHub →</span><span class="sr-only"> (opens in new tab)</span></a>`).join("")}</div>`),_=c("contact",`<div class="portrait"><img src="${vE}" alt="Guido Tomasella" loading="lazy" /></div>`,`<h2 class="contact__headline">${a.headline}</h2>
     <a class="contact__email" href="mailto:${a.email}">${a.email}</a>
     <div class="contact__links">${a.links.map(p=>`<a href="${p.url}" target="_blank" rel="noopener">${p.label}<span class="sr-only"> (opens in new tab)</span></a>`).join("")}</div>
     <button class="contact__top" type="button"><span aria-hidden="true">↑ </span>Back to the start</button>`,"panel--contact");e.innerHTML=`
    <section class="panel panel--intro" id="intro" aria-hidden="true"></section>
    ${u}${h}${d}${f}${g}${_}`}Bt.registerPlugin(nt,Qs);const Cl=window.matchMedia("(prefers-reduced-motion: reduce)").matches,zm=window.matchMedia("(max-width: 700px)").matches;xE(qp,document.getElementById("content"));const bs=new dE(document.getElementById("webgl"),{reducedMotion:Cl}),jt=new gE(qp.graph,{count:zm?1e3:1900,reducedMotion:Cl});bs.add(jt);const rn={DISPERSED:0,NEURAL:1,GT:2,BUILD:3,BURST:4,SPHERE:5,POINT:6},gd=document.getElementById("intro");gd&&(gd.style.display="none");if(Cl)jt.introFactor=1,jt.labelStrength=.3,jt.setSegment(rn.GT,rn.GT,0),Bt.set([".topbar","#hero .frame","#hero [data-hero]",".scrollcue"],{opacity:1,y:0,autoAlpha:1});else{let r=()=>{};Bt.set([".topbar","#hero .frame","#hero [data-hero]",".scrollcue"],{autoAlpha:0});const e=u=>{document.documentElement.style.overflow=u?"hidden":"",document.body.style.overflow=u?"hidden":""};e(!0),jt.introFactor=0,jt.labelStrength=0,jt.setSegment(rn.DISPERSED,rn.DISPERSED,0),Bt.to(jt,{introFactor:1,duration:1.2,ease:"power2.out"}),bs.scripted=!0;const t=bs.camera,n=jt.object3d.rotation,i={a:0,b:0,c:0,d:0,e:0};let s=!1;const o=()=>{s||(s=!0,bs.scripted=!1,e(!1),bs.controls.autoRotateSpeed=0,Bt.to(bs.controls,{autoRotateSpeed:1.3,duration:1.6,ease:"power1.inOut"}),r())},a=Bt.timeline({onComplete:o});a.to(n,{y:"+="+Math.PI*1.6,duration:2,ease:"none"},0);const l={u:0};a.to(l,{u:1,duration:3.8,ease:"sine.inOut",onUpdate:()=>{const u=Math.sin(l.u*Math.PI)*1.15,h=7.5;t.position.set(0,h*Math.sin(u),h*Math.cos(u)),t.lookAt(0,0,0)}},2),a.to(i,{a:1,duration:2.3,ease:"power2.inOut",onUpdate:()=>jt.setSegment(rn.DISPERSED,rn.SPHERE,i.a)},2.3),a.to(n,{y:"+="+Math.PI*3,x:"+="+Math.PI*1.2,duration:2.5,ease:"none"},2.3),a.to(i,{b:1,duration:1,ease:"power2.in",onUpdate:()=>jt.setSegment(rn.SPHERE,rn.POINT,i.b)},4.7),a.set(n,{x:0,y:0,z:0},5.75),a.to(i,{c:1,duration:.5,ease:"power2.out",onUpdate:()=>jt.setSegment(rn.POINT,rn.BURST,i.c)},5.8),a.to(t,{zoom:2.2,duration:.35,ease:"power2.out",onUpdate:()=>t.updateProjectionMatrix()},5.7),a.to(t,{zoom:1,duration:.7,ease:"power2.inOut",onUpdate:()=>t.updateProjectionMatrix()},6.05),a.to(i,{d:1,duration:1.2,ease:"power2.inOut",onUpdate:()=>jt.setSegment(rn.BURST,rn.NEURAL,i.d)},6.3),a.to(jt,{labelStrength:1,duration:.8},6.6),a.to(i,{e:1,duration:1.1,ease:"power2.inOut",onUpdate:()=>jt.setSegment(rn.NEURAL,rn.GT,i.e)},7.6),a.to(jt,{labelStrength:.3,duration:.8},7.6),a.to(".topbar",{autoAlpha:1,duration:.6},7.9),a.add(()=>{Bt.to("#hero .frame",{autoAlpha:1,duration:.5}),Bt.fromTo("#hero [data-hero]",{y:22,autoAlpha:0},{y:0,autoAlpha:1,stagger:.1,duration:.7,ease:"power3.out"})},8.1),a.to(".scrollcue",{autoAlpha:1,duration:.5},8.5);const c=()=>{s||a.progress(1)};if(window.addEventListener("wheel",c,{passive:!0}),window.addEventListener("keydown",c),window.addEventListener("click",c),nt.create({trigger:"#contact",start:"top bottom",end:"top top",scrub:1,onUpdate:u=>jt.setSegment(rn.GT,rn.BUILD,u.progress)}),Bt.utils.toArray(".panel:not(.panel--hero) [data-reveal]").forEach(u=>{Bt.from(u,{y:32,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 86%"}})}),!zm){let S=function(A){if(A===p||!h[A])return;const x=A>p?1:-1;Bt.to(h[p],{autoAlpha:0,y:-26*x,duration:.3,ease:"power2.out"}),Bt.fromTo(h[A],{autoAlpha:0,y:26*x},{autoAlpha:1,y:0,duration:.35,ease:"power2.out"}),p=A},v=function(){const A=d[f];if(A.card!==void 0){const x=m("#projects");Math.abs(window.scrollY-x)>8&&Bt.to(window,{scrollTo:x,duration:.25,ease:"power2.out"}),S(A.card)}else Bt.to(window,{scrollTo:m(A.sel),duration:.25,ease:"power2.out"})},T=function(A){const x=f+A;x<0||x>d.length-1||(f=x,v())};const u=document.querySelector(".proj-stage"),h=Bt.utils.toArray(".proj-stage .proj");u&&h.length&&(u.classList.add("proj-stage--pinned"),Bt.set(h,{autoAlpha:0}),Bt.set(h[0],{autoAlpha:1,y:0}));const d=[{sel:"#hero"},{sel:"#hats"},{sel:"#amplify"},{sel:"#work"},...h.map((A,x)=>({sel:"#projects",card:x})),{sel:"#contact"}];let f=0,g=!1,_=!1,p=0;const m=A=>{const x=document.querySelector(A);return x?Math.round(x.getBoundingClientRect().top+window.scrollY):0},R=A=>{_||(_=!0,setTimeout(()=>_=!1,300),T(A))};r=()=>{g=!0,f=0,_=!0,setTimeout(()=>_=!1,500)},window.addEventListener("wheel",A=>{g&&(A.preventDefault(),R(A.deltaY>0?1:-1))},{passive:!1}),window.addEventListener("keydown",A=>{if(!g)return;const x=A.key==="ArrowDown"||A.key==="PageDown"||A.key===" ",U=A.key==="ArrowUp"||A.key==="PageUp";!x&&!U||(A.preventDefault(),R(x?1:-1))})}nt.create({start:"top -8%",end:"max",onToggle:u=>Bt.to(".scrollcue",{opacity:u.isActive?0:1,duration:.4})})}var xd;(xd=document.querySelector(".contact__top"))==null||xd.addEventListener("click",()=>{window.scrollTo({top:0,behavior:Cl?"auto":"smooth"})});const vd=document.getElementById("cursor"),Wo=document.getElementById("cursor-ring");if(window.matchMedia("(hover: hover)").matches&&vd&&Wo){let r=0,e=0,t=0,n=0;window.addEventListener("pointermove",s=>{t=s.clientX,n=s.clientY,vd.style.transform=`translate(${t-3.5}px, ${n-3.5}px)`});const i=()=>{r+=(t-r)*.18,e+=(n-e)*.18,Wo.style.transform=`translate(${r-17}px, ${e-17}px)`,requestAnimationFrame(i)};i(),document.addEventListener("pointerover",s=>{s.target.closest("a, button")&&Wo.classList.add("is-hover")}),document.addEventListener("pointerout",s=>{s.target.closest("a, button")&&Wo.classList.remove("is-hover")})}
