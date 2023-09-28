(function(E,g){typeof exports=="object"&&typeof module<"u"?module.exports=g():typeof define=="function"&&define.amd?define(g):(E=typeof globalThis<"u"?globalThis:E||self,E.Zoomist=g())})(this,function(){var B,Rt,j,Xt,k,zt,G,Dt,P,Lt,F,yt,q,At,K,It,J,$t,Q,Ct,tt,xt,et,Mt;"use strict";var de=Object.defineProperty;var ue=(E,g,S)=>g in E?de(E,g,{enumerable:!0,configurable:!0,writable:!0,value:S}):E[g]=S;var R=(E,g,S)=>(ue(E,typeof g!="symbol"?g+"":g,S),S),me=(E,g,S)=>{if(!g.has(E))throw TypeError("Cannot "+S)};var b=(E,g,S)=>{if(g.has(E))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(E):g.set(E,S)};var O=(E,g,S)=>(me(E,g,"access private method"),S);const E="",g=n=>document.contains(N(n)),S=n=>{if(!n)return!1;try{const{constructor:t}=n,{prototype:s}=t,{hasOwnProperty:e}=Object.prototype;return t&&s&&e.call(s,"isPrototypeOf")}catch{return!1}},ut=n=>typeof n=="function",M=n=>!isNaN(Number(n)),st=n=>n==null,N=n=>n instanceof HTMLElement?n:document.querySelector(n),X=n=>{const t=n instanceof TouchEvent?n.touches[0]:n;return{clientX:t.clientX,clientY:t.clientY}},Z=n=>({clientX:[...n].map(t=>t.clientX).reduce((t,s)=>t+s)/n.length,clientY:[...n].map(t=>t.clientY).reduce((t,s)=>t+s)/n.length}),z=n=>{const{width:t,height:s,top:e,left:i,bottom:c}=n.getBoundingClientRect();return{width:t,height:s,top:e,left:i,bottom:c}},mt=n=>n.length>=2?Math.hypot(n[0].clientX-n[1].clientX,n[0].clientY-n[1].clientY):0,A=(n,t)=>{for(const[s,e]of Object.entries(t))typeof e=="string"&&n.style.setProperty(s,e)},I=(n,t)=>{for(const[s,e]of Object.entries(t))n.setAttribute(s,e)},v=(n,t)=>{for(const[s,e]of Object.entries(t))n[s]=e},D=(n,t,s)=>Math.min(Math.max(n,t),s),y=n=>{const t=+(Math.round(+(n+"e+2"))+"e-2");return isNaN(t)?0:t},ft=n=>{throw new Error(n)},nt=n=>console.warn(n),$=(n="div",t,s,e)=>{const i=document.createElement(n);return t&&i.classList.add(...t.split(" ")),s&&I(i,s),e&&(i.innerHTML=e),i},p="zoomist",Nt=`${p}-container`,gt=`${p}-wrapper`,it=`${p}-image`,C=`${p}-slider`,Zt=`${p}-slider-wrapper`,Ht=`${p}-slider-bar`,Wt=`${p}-slider-button`,H=`${p}-zoomer`,Vt=`${p}-zoomer-button`,ot=`${p}-zoomer-icon`,rt=`${p}-zoomer-in`,at=`${p}-zoomer-out`,lt=`${p}-zoomer-reset`,Ut=`${p}-zoomer-disabled`,Bt={tabindex:"0",role:"slider","aria-label":"slider for zoomist","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0","aria-disabled":"false"},ct={tabindex:"0",role:"button","aria-disabled":"false"},jt={...ct,"aria-label":"button for zoom in zoomist"},kt={...ct,"aria-label":"button for zoom out zoomist"},Gt={...ct,"aria-label":"button for reset zoomist scale"},L=!!(typeof window<"u"&&typeof window.document<"u"&&"ontouchstart"in window),Pt=L?"touchstart":"mousedown",W=L?"touchmove":"mousemove",V=L?"touchend":"mouseup",Ft="wheel",qt=["left","right","center"],Kt=["top","bottom","center"],_t="--scale",pt="--translate-x",Et="--translate-y",Jt="--value",St={draggable:!0,wheelable:!0,pinchable:!0,bounds:!0,zoomRatio:.1,maxScale:10,minScale:1,initScale:null},Qt={el:null,direction:"horizontal"},te={el:`.${C}`},ee={el:null,inEl:null,outEl:null,resetEl:null,disabledClass:Ut},se={el:`.${H}`,inEl:`.${rt}`,outEl:`.${at}`,resetEl:`.${lt}`},ne={ready:null,reset:null,resize:null,beforeDestroy:null,destroy:null,beforeUpdate:null,update:null,zoom:null,wheel:null,dragStart:null,drag:null,dragEnd:null,pinchStart:null,pinch:null,pinchEnd:null,slideStart:null,slide:null,slideEnd:null},ie={slider:null,zoomer:null},oe=`
<svg viewBox="0 0 12 12" class="${ot}">
  <polygon points="12,5.5 6.5,5.5 6.5,0 5.5,0 5.5,5.5 0,5.5 0,6.5 5.5,6.5 5.5,12 6.5,12 6.5,6.5 12,6.5 "/>
</svg>
`,re=`
<svg viewBox="0 0 12 12" class="${ot}">
  <rect y="5.5" width="12" height="1"/>
</svg>
`,ae=`
<svg viewBox="0 0 12 12" class="${ot}">
  <path d="m7.45,1.27l.35-.22c.26-.17.34-.52.17-.78-.17-.27-.52-.34-.78-.17l-1.54.99-.19.13-.11.46,1.12,1.75c.11.17.29.26.48.26.1,0,.21-.03.31-.09.26-.17.34-.52.17-.78l-.29-.46c1.85.5,3.22,2.17,3.22,4.18,0,2.39-1.95,4.34-4.34,4.34S1.66,8.92,1.66,6.52c0-1.15.44-2.23,1.25-3.05.22-.22.22-.58,0-.8-.22-.22-.58-.22-.8,0-1.02,1.03-1.58,2.4-1.58,3.85,0,3.02,2.46,5.48,5.48,5.48s5.48-2.46,5.48-5.48c0-2.51-1.71-4.62-4.02-5.26Z"/>
</svg>
`,le={on(n,t){if(!t||!ut(t))return this;const{__events__:s}=this;return n.split(" ").forEach(e=>{const i=e;s[i]||(s[i]=[]),s[i].push(t)}),this},emit(n,...t){const{__events__:s}=this;return s[n]?(s[n].forEach(e=>{ut(e)&&e.apply(this,t)}),this):this},zoom(n,t){const{scale:s}=this.transform,e=this.useFixedRatio(y(s*(n+1)));return s===e?this:(this.zoomTo(e,t),this)},zoomTo(n,t=!0){const{image:s,transform:{scale:e,translateX:i,translateY:c},options:{bounds:r}}=this;if(n=this.useFixedRatio(n),n===e)return this;if(this.transform.scale=n,this.emit("zoom",this,this.transform.scale),!t)return this;t=typeof t=="boolean"?this.getContainerCenterClient():t;const{clientX:l,clientY:o}=t,{top:a,left:d,width:f,height:m}=z(s),{width:h,height:u}=this.getImageDiff(),_=n/e-1,T=(f/2-l+d)*_+i,w=(m/2-o+a)*_+c,Y=r?D(T,h,-h):T,x=r?D(w,u,-u):w;return v(this.transform,{translateX:Y,translateY:x}),this},move(n){const{options:{bounds:t},transform:{translateX:s,translateY:e}}=this,{x:i,y:c}=n,{width:r,height:l}=this.getImageDiff();if(M(i)){const o=s+i,a=t?D(o,r,-r):o;this.transform.translateX=a}if(M(c)){const o=e+c,a=t?D(o,l,-l):o;this.transform.translateY=a}return this},moveTo(n){const{options:{bounds:t}}=this,{x:s,y:e}=n,{width:i,height:c}=this.getImageDiff();if(M(s)){const r=Number(s),l=t?D(r,i,-i):r;this.transform.translateX=l}if(qt.some(r=>r===s)){const l={left:-i,right:i,center:0}[s];this.transform.translateX=l}if(M(e)){const r=Number(e),l=t?D(r,c,-c):r;this.transform.translateY=l}if(Kt.some(r=>r===e)){const l={top:-c,bottom:c,center:0}[e];this.transform.translateY=l}return this},slideTo(n){const{options:{minScale:t,maxScale:s}}=this,e=(s-t)*n/100+t;return this.zoomTo(e),this},reset(){const{options:{initScale:n}}=this;return v(this.transform,{scale:n,translateX:0,translateY:0}),this.emit("reset",this),this},destroy(n=!1){const{element:t,image:s,controller:e}=this;return this.mounted&&(this.emit("beforeDestroy",this),e.abort(),this.destroyModules(),n&&s&&(this.reset(),s.removeAttribute("style")),t[p]=null,this.mounted=!1,this.emit("destroy",this)),null},update(n){const{element:t,controller:s}=this;return this.emit("beforeUpdate",this),t[p]=null,this.mounted=!1,s.abort(),this.destroyModules(),n&&(this.options=Object.assign({},St,S(n)&&n)),this.init(),this.emit("update",this),this},getImageData(){return{...this.data.imageData}},getContainerData(){return{...this.data.containerData}},getSliderValue(){const{__modules__:{slider:n}}=this;return n&&n.value?n.value:null},getImageDiff(){const{width:n,height:t}=this.getContainerData(),{width:s,height:e}=this.getImageData();return{width:(n-s)/2,height:(t-e)/2}},getContainerCenterClient(){const{element:n}=this,{top:t,left:s,width:e,height:i}=z(n);return{clientX:s+e/2,clientY:t+i/2}},getScaleRatio(){const{transform:{scale:n},options:{minScale:t,maxScale:s}}=this;return(n-t)/(s-t)},useFixedRatio(n){const{options:{minScale:t,maxScale:s}}=this;return D(n,t,s)}},{defineProperty:U}=Object;class vt{constructor(t,s){b(this,B);b(this,j);b(this,k);b(this,G);b(this,P);b(this,F);b(this,q);b(this,K);b(this,J);b(this,Q);b(this,tt);b(this,et);R(this,"element");R(this,"options");R(this,"wrapper");R(this,"image");R(this,"mounted");R(this,"data");R(this,"transform");R(this,"states");R(this,"controller");R(this,"__events__");R(this,"__modules__");t||ft("The first argument is required."),g(t)||ft(`Element ${t} is not exist.`),this.element=N(t),this.options=Object.assign({},St,S(s)&&s),this.init()}init(){const{element:t}=this,{options:{bounds:s,minScale:e,maxScale:i,initScale:c}}=this;if(t[p])return;t[p]=this;const r=t.querySelector(`.${gt}`),l=t.querySelector(`.${it}`);if(!r)return nt(`${p} needs a ".${gt}" element.`);if(!l)return nt(`${p} needs a ".${it}" element.`);this.options.minScale=s&&e<1?1:e,this.options.maxScale=Math.max(i,e),this.options.initScale=D(c||e,e,i),this.wrapper=r,this.image=l,O(this,B,Rt).call(this)}destroyModules(){const{slider:t,zoomer:s}=this.__modules__;t&&this.destroySlider(),s&&this.destroyZoomer()}destroySlider(){var c,r;const{__modules__:{slider:t}}=this;if(!t||!t.mounted)return;const{options:{el:s},controller:e}=t;s===`.${C}`?(c=t.sliderEl)==null||c.remove():(r=t.sliderTrack)==null||r.remove(),e==null||e.abort(),t.mounted=!1}destroyZoomer(){const{__modules__:{zoomer:t}}=this;if(!t||!t.mounted)return;const{options:{el:s,inEl:e,outEl:i,resetEl:c},controller:r,zoomerEl:l,zoomerInEl:o,zoomerOutEl:a,zoomerResetEl:d}=t,f=(m,h,u)=>{m===`.${h}`&&(u==null||u.remove())};[{target:s,className:H,el:l},{target:e,className:rt,el:o},{target:i,className:at,el:a},{target:c,className:lt,el:d}].forEach(m=>f(m.target,m.className,m.el)),r==null||r.abort(),t.mounted=!1}}return B=new WeakSet,Rt=function(){const{element:t,image:s,options:e}=this,{draggable:i,pinchable:c}=e,{offsetWidth:r,offsetHeight:l}=t,{offsetWidth:o,offsetHeight:a}=s,{width:d,height:f}=z(s);if(!o||!a)return nt(`The width or height of ${it} should not be 0.`);if(this.transform={scale:0,translateX:0,translateY:0},this.data={imageData:{originWidth:o,originHeight:a,width:d,height:f},containerData:{width:r,height:l}},L&&(i||c)&&(this.data.touchData={hypot:0,startX:0,startY:0,prevX:0,prevY:0,imageTop:0,imageLeft:0,widthDiff:0,heightDiff:0}),!L&&i&&(this.data.dragData={startX:0,startY:0}),this.__events__={...ne},e.on)for(const[m,h]of Object.entries(e.on))this.__events__[m]=[h];if(this.__modules__={...ie},e.slider){const m=e.slider===!0?te:e.slider;this.__modules__.slider={options:Object.assign({},Qt,m)}}if(e.zoomer){const m=e.zoomer===!0?se:e.zoomer;this.__modules__.zoomer={options:Object.assign({},ee,m)}}this.controller=new AbortController,O(this,j,Xt).call(this)},j=new WeakSet,Xt=function(){if(this.mounted)return;const{element:t,image:s,options:{minScale:e,maxScale:i,initScale:c},__modules__:{slider:r,zoomer:l}}=this,o=this;A(s,{transform:`
        translate(var(${pt}, 0px), var(${Et}, 0px))
        scale(var(${_t}, 0))`}),U(this.transform,"scale",{get(){return o.transform.__scale__},set(a){const d=o.useFixedRatio(a);if(!(st(d)||o.transform.__scale__===d)){if(o.transform.__scale__=d,A(s,{[_t]:d.toString()}),v(o.data.imageData,{width:z(s).width,height:z(s).height}),r){const f=Math.round(o.getScaleRatio()*100);r.value=f}if(l&&l.options.disabledClass){const{zoomerInEl:f,zoomerOutEl:m,zoomerResetEl:h,options:{disabledClass:u}}=l;f&&(f.classList[d===i?"add":"remove"](u),I(f,{"aria-disabled":d===i?"true":"false"})),m&&(m.classList[d===e?"add":"remove"](u),I(m,{"aria-disabled":d===e?"true":"false"})),h&&(h.classList[d===c?"add":"remove"](u),I(h,{"aria-disabled":d===c?"true":"false"}))}}}}),U(this.transform,"translateX",{get(){return o.transform.__translateX__},set(a){const d=y(a);st(d)||o.transform.__translateX__===d||(o.transform.__translateX__=d,A(s,{[pt]:`${d}px`}))}}),U(this.transform,"translateY",{get(){return o.transform.__translateY__},set(a){const d=y(a);st(d)||o.transform.__translateY__===d||(o.transform.__translateY__=d,A(s,{[Et]:`${d}px`}))}}),O(this,k,zt).call(this),O(this,K,It).call(this),v(this.transform,{scale:c,translateX:0,translateY:0}),t.classList.add(Nt),this.mounted=!0,this.emit("ready",this)},k=new WeakSet,zt=function(){const{wrapper:t,options:s,controller:{signal:e}}=this,{draggable:i,pinchable:c,wheelable:r}=s;if(this.states={},r){this.states.wheeling=!1;const l=o=>O(this,G,Dt).call(this,o);t.addEventListener(Ft,l,{signal:e})}if(L&&(i||c)){i&&(this.states.dragging=!1),c&&(this.states.pinching=!1);const l=o=>O(this,F,yt).call(this,o);t.addEventListener("touchstart",l,{signal:e})}if(!L&&i){this.states.dragging=!1;const l=o=>O(this,P,Lt).call(this,o);t.addEventListener("mousedown",l,{signal:e})}O(this,q,At).call(this)},G=new WeakSet,Dt=function(t){const{options:s}=this,{zoomRatio:e}=s;if(t.preventDefault(),this.states.wheeling)return;this.states.wheeling=!0,setTimeout(()=>{this.states.wheeling=!1},30);const i=(t.deltaY||t.detail)>0?-1:1;this.zoom(i*e,X(t)),this.emit("wheel",this,this.transform.scale,t)},P=new WeakSet,Lt=function(t){const{data:s,transform:e}=this,{dragData:i,imageData:c}=s;if(!i||!c)return;const r=a=>{a&&a.button!==0||(v(i,{startX:X(a).clientX,startY:X(a).clientY}),this.states.dragging=!0,this.emit("dragStart",this,{x:e.translateX,y:e.translateY},a),document.addEventListener(W,l),document.addEventListener(V,o))},l=a=>{if(a.touches||!this.states.dragging)return;const d=X(a).clientX,f=X(a).clientY,m=d-i.startX+e.translateX,h=f-i.startY+e.translateY;this.moveTo({x:m,y:h}),v(i,{startX:X(a).clientX,startY:X(a).clientY}),this.emit("drag",this,{x:m,y:h},a)},o=a=>{a.touches||(this.states.dragging=!1,this.emit("dragEnd",this,{x:e.translateX,y:e.translateY},a),document.removeEventListener(W,l),document.removeEventListener(V,o))};r(t)},F=new WeakSet,yt=function(t){const{data:s,transform:e,options:{maxScale:i,minScale:c,draggable:r,pinchable:l}}=this,{touchData:o,imageData:a}=s;if(!o||!a)return;const d=h=>{const u=h.touches;if(!u)return;const{top:_,left:T}=z(this.image),{width:w,height:Y}=this.getImageDiff();v(o,{hypot:mt(u),startX:Z(u).clientX,startY:Z(u).clientY,prevX:0,prevY:0,imageTop:_,imageLeft:T,widthDiff:w,heightDiff:Y}),r&&(this.states.dragging=!0,this.emit("dragStart",this,{x:e.translateX,y:e.translateY},h)),l&&u.length===2&&(this.states.pinching=!0,this.emit("pinchStart",this,e.scale,h)),document.addEventListener("touchmove",f),document.addEventListener("touchend",m)},f=h=>{const u=h.touches;if(!u)return;const{states:{dragging:_,pinching:T}}=this,{top:w,left:Y}=z(this.image),{width:x,height:Tt}=this.getImageDiff(),ht=mt(u),bt=ht?ht/o.hypot:1,dt=this.useFixedRatio(bt*e.scale),Ot=Z(u).clientX+o.prevX,wt=Z(u).clientY+o.prevY;if(T&&u.length===2&&this.zoomTo(dt,!1),_){const Yt=dt!==i&&dt!==c&&l?bt:1,ce=y(Ot-o.imageLeft-(x-o.widthDiff)-(o.startX-o.imageLeft)*Yt+e.translateX),he=y(wt-o.imageTop-(Tt-o.heightDiff)-(o.startY-o.imageTop)*Yt+e.translateY);this.moveTo({x:ce,y:he})}v(o,{hypot:ht,startX:Ot,startY:wt,imageTop:w,imageLeft:Y,widthDiff:x,heightDiff:Tt}),T&&u.length===2&&this.emit("pinch",this,e.scale,h),_&&this.emit("drag",this,{x:e.translateX,y:e.translateY},h)},m=h=>{const u=h.touches;if(!u)return;const{states:{dragging:_,pinching:T}}=this;if(_&&!u.length&&(this.states.dragging=!1,this.emit("dragEnd",this,{x:e.translateX,y:e.translateY},h)),T&&u.length<2&&(this.states.pinching=!1,this.emit("pinchEnd",this,e.scale,h)),_&&u.length===1){const w=X(h).clientX,Y=X(h).clientY;v(o,{prevX:o.startX-w,prevY:o.startY-Y})}u.length||(document.removeEventListener("touchmove",f),document.removeEventListener("touchend",m))};d(t)},q=new WeakSet,At=function(){const{element:t,image:s,transform:e}=this;new ResizeObserver(()=>{const{offsetWidth:c,offsetHeight:r}=t,{width:l,height:o}=this.getContainerData();if(c===l&&r===o)return;const a=e.translateX,d=e.translateY;if(a){const _=c/l*a;this.transform.translateX=_}if(d){const _=r/o*d;this.transform.translateY=_}const{offsetWidth:f,offsetHeight:m}=s,{width:h,height:u}=z(s);v(this.data.containerData,{width:c,height:r}),v(this.data.imageData,{originWidth:f,originHeight:m,width:h,height:u}),this.emit("resize",this)}).observe(t)},K=new WeakSet,It=function(){const{slider:t,zoomer:s}=this.__modules__;t&&O(this,J,$t).call(this),s&&O(this,tt,xt).call(this)},J=new WeakSet,$t=function(){const{element:t,__modules__:{slider:s}}=this;if(!s||s.mounted)return;const{options:{el:e,direction:i}}=s,c=e===`.${C}`;if(!e||!c&&!g(e))return;const r=c?$("div",C):N(e),l=$("div",Zt),o=$("span",Ht),a=$("span",Wt,{...Bt,"aria-orientation":i});r.classList.add(`${C}-${i}`),U(s,"value",{get(){return s.__value__},set(d){s.__value__!==d&&(s.__value__=d,A(r,{[Jt]:d.toString()}),I(a,{"aria-valuenow":d.toString()}))}}),v(s,{value:this.getScaleRatio()*100,controller:new AbortController,sliding:!1,sliderEl:r,sliderTrack:l,sliderButton:a}),O(this,Q,Ct).call(this),l.append(o,a),r.append(l),c&&t.append(r),s.mounted=!0},Q=new WeakSet,Ct=function(){const{options:{minScale:t,maxScale:s},__modules__:{slider:e}}=this;if(!e)return;const{options:{direction:i},controller:c,sliderEl:r,sliderTrack:l}=e;if(!r||!l)return;const o=i==="vertical",a=h=>{const u=z(l),_=u[o?"height":"width"],T=u[o?"bottom":"left"],w=X(h)[o?"clientY":"clientX"],Y=y(D((w-T)*(o?-1:1)/_,0,1));return(s-t)*Y+t},d=h=>{if(h instanceof MouseEvent&&h.button!==0)return;e.sliding=!0;const u=a(h);this.zoomTo(u),this.emit("slideStart",this,this.getSliderValue(),h),document.addEventListener(W,f),document.addEventListener(V,m)},f=h=>{if(!e.sliding)return;const u=a(h);this.zoomTo(u),this.emit("slide",this,this.getSliderValue(),h)},m=h=>{this.emit("slideEnd",this,this.getSliderValue(),h),e.sliding=!1,document.removeEventListener(W,f),document.removeEventListener(V,m)};r.addEventListener(Pt,d,{signal:c==null?void 0:c.signal})},tt=new WeakSet,xt=function(){const{element:t,__modules__:{zoomer:s}}=this;if(!s||s.mounted)return;const{options:{el:e,inEl:i,outEl:c,resetEl:r}}=s,l=[i,c,r],o=(h,u,_,T,w)=>{const Y=h===`.${_}`;return!h||!Y&&!g(h)?null:(_=l.includes(h)?`${_} ${Vt}`:_,Y?$(u,_,T,w):N(h))},a=o(e,"div",H),d=o(i,"button",rt,jt,oe),f=o(c,"button",at,kt,re),m=o(r,"button",lt,Gt,ae);v(s,{controller:new AbortController,zoomerEl:a,zoomerInEl:d,zoomerOutEl:f,zoomerResetEl:m}),a&&(d&&a.append(d),f&&a.append(f),m&&a.append(m),e===`.${H}`&&t.append(a)),O(this,et,Mt).call(this),s.mounted=!0},et=new WeakSet,Mt=function(){const{options:{zoomRatio:t},__modules__:{zoomer:s}}=this,e=this;if(!s)return;const{controller:i,zoomerInEl:c,zoomerOutEl:r,zoomerResetEl:l}=s;c&&c.addEventListener("click",()=>{e.zoom(t)},{signal:i==null?void 0:i.signal}),r&&r.addEventListener("click",()=>{e.zoom(-t)},{signal:i==null?void 0:i.signal}),l&&l.addEventListener("click",()=>{e.reset()},{signal:i==null?void 0:i.signal})},Object.assign(vt.prototype,le),vt});
