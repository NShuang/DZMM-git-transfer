import{r as c,j as b}from"./react-vendor-CRlenuRN.js";import{i as q,g as Qt,s as _t,a as nt,b as Dt,c as lt,d as te,e as ee,f as ne,h as se,r as oe,j as ie,k as jt,l as ae,m as re,n as ce,o as le,S as ue,H as he,F as A,p as de,q as fe,t as It,u as z,v as ut,w as E,x as pe,y as F,z as Q,A as me,B as L,C as ye,D as ge,E as ve,G as ht,I as ke,J as Me,K as dt,L as xe,M as we,N as Pe,O as Ce,P as Tt,Q as Ee,R as Se}from"./vendor-motion-dom-kKUVC9dP.js";import{p as Rt,s as ft,m as be,a as pt,c as Le,n as H}from"./vendor-motion-utils-DF2Khz3i.js";const st=c.createContext({});function ot(e){const t=c.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ae=typeof window<"u",Nt=Ae?c.useLayoutEffect:c.useEffect,W=c.createContext(null),it=c.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function mt(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ve(...e){return t=>{let n=!1;const s=e.map(o=>{const i=mt(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<s.length;o++){const i=s[o];typeof i=="function"?i():mt(e[o],null)}}}}function _e(...e){return c.useCallback(Ve(...e),e)}class De extends c.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(q(n)&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,o=q(s)&&s.offsetWidth||0,i=q(s)&&s.offsetHeight||0,a=getComputedStyle(n),r=this.props.sizeRef.current;r.height=parseFloat(a.height),r.width=parseFloat(a.width),r.top=n.offsetTop,r.left=n.offsetLeft,r.right=o-r.width-r.left,r.bottom=i-r.height-r.top}return null}componentDidUpdate(){}render(){return this.props.children}}function je({children:e,isPresent:t,anchorX:n,anchorY:s,root:o,pop:i}){var l;const a=c.useId(),r=c.useRef(null),p=c.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:m}=c.useContext(it),d=((l=e.props)==null?void 0:l.ref)??(e==null?void 0:e.ref),u=_e(r,d);return c.useInsertionEffect(()=>{const{width:f,height:h,top:g,left:v,right:k,bottom:M}=p.current;if(t||i===!1||!r.current||!f||!h)return;const x=n==="left"?`left: ${v}`:`right: ${k}`,w=s==="bottom"?`bottom: ${M}`:`top: ${g}`;r.current.dataset.motionPopId=a;const C=document.createElement("style");m&&(C.nonce=m);const V=o??document.head;return V.appendChild(C),C.sheet&&C.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${x}px !important;
            ${w}px !important;
          }
        `),()=>{var _;(_=r.current)==null||_.removeAttribute("data-motion-pop-id"),V.contains(C)&&V.removeChild(C)}},[t]),b.jsx(De,{isPresent:t,childRef:r,sizeRef:p,pop:i,children:i===!1?e:c.cloneElement(e,{ref:u})})}const Ie=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:o,presenceAffectsLayout:i,mode:a,anchorX:r,anchorY:p,root:m})=>{const d=ot(Te),u=c.useId();let l=!0,f=c.useMemo(()=>(l=!1,{id:u,initial:t,isPresent:n,custom:o,onExitComplete:h=>{d.set(h,!0);for(const g of d.values())if(!g)return;s&&s()},register:h=>(d.set(h,!1),()=>d.delete(h))}),[n,d,s]);return i&&l&&(f={...f}),c.useMemo(()=>{d.forEach((h,g)=>d.set(g,!1))},[n]),c.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),e=b.jsx(je,{pop:a==="popLayout",isPresent:n,anchorX:r,anchorY:p,root:m,children:e}),b.jsx(W.Provider,{value:f,children:e})};function Te(){return new Map}function $t(e=!0){const t=c.useContext(W);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:o}=t,i=c.useId();c.useEffect(()=>{if(e)return o(i)},[e]);const a=c.useCallback(()=>e&&s&&s(i),[i,s,e]);return!n&&s?[!1,a]:[!0]}const R=e=>e.key||"";function yt(e){const t=[];return c.Children.forEach(e,n=>{c.isValidElement(n)&&t.push(n)}),t}const Us=({children:e,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:o=!0,mode:i="sync",propagate:a=!1,anchorX:r="left",anchorY:p="top",root:m})=>{const[d,u]=$t(a),l=c.useMemo(()=>yt(e),[e]),f=a&&!d?[]:l.map(R),h=c.useRef(!0),g=c.useRef(l),v=ot(()=>new Map),k=c.useRef(new Set),[M,x]=c.useState(l),[w,C]=c.useState(l);Nt(()=>{h.current=!1,g.current=l;for(let S=0;S<w.length;S++){const P=R(w[S]);f.includes(P)?(v.delete(P),k.current.delete(P)):v.get(P)!==!0&&v.set(P,!1)}},[w,f.length,f.join("-")]);const V=[];if(l!==M){let S=[...l];for(let P=0;P<w.length;P++){const D=w[P],B=R(D);f.includes(B)||(S.splice(P,0,D),V.push(D))}return i==="wait"&&V.length&&(S=V),C(yt(S)),x(l),null}const{forceRender:_}=c.useContext(st);return b.jsx(b.Fragment,{children:w.map(S=>{const P=R(S),D=a&&!d?!1:l===w||f.includes(P),B=()=>{if(k.current.has(P))return;if(v.has(P))k.current.add(P),v.set(P,!0);else return;let ct=!0;v.forEach(Zt=>{Zt||(ct=!1)}),ct&&(_==null||_(),C(g.current),a&&(u==null||u()),s&&s())};return b.jsx(Ie,{isPresent:D,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:o,mode:i,root:m,onExitComplete:D?void 0:B,anchorX:r,anchorY:p,children:S},P)})})},Ht=c.createContext({strict:!1}),gt={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let vt=!1;function Re(){if(vt)return;const e={};for(const t in gt)e[t]={isEnabled:n=>gt[t].some(s=>!!n[s])};_t(e),vt=!0}function zt(){return Re(),Qt()}function Ne(e){const t=zt();for(const n in e)t[n]={...t[n],...e[n]};_t(t)}const $e=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function O(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||$e.has(e)}let Ft=e=>!O(e);function He(e){typeof e=="function"&&(Ft=t=>t.startsWith("on")?!O(t):e(t))}try{He(require("@emotion/is-prop-valid").default)}catch{}function ze(e,t,n){const s={};for(const o in e)o==="values"&&typeof e.values=="object"||nt(e[o])||(Ft(o)||n===!0&&O(o)||!t&&!O(o)||e.draggable&&o.startsWith("onDrag"))&&(s[o]=e[o]);return s}const G=c.createContext({});function Fe(e,t){if(Dt(e)){const{initial:n,animate:s}=e;return{initial:n===!1||lt(n)?n:void 0,animate:lt(s)?s:void 0}}return e.inherit!==!1?t:{}}function Oe(e){const{initial:t,animate:n}=Fe(e,c.useContext(G));return c.useMemo(()=>({initial:t,animate:n}),[kt(t),kt(n)])}function kt(e){return Array.isArray(e)?e.join(" "):e}const at=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ot(e,t,n){for(const s in t)!nt(t[s])&&!te(s,n)&&(e[s]=t[s])}function We({transformTemplate:e},t){return c.useMemo(()=>{const n=at();return ee(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Ge(e,t){const n=e.style||{},s={};return Ot(s,n,e),Object.assign(s,We(e,t)),s}function Be(e,t){const n={},s=Ge(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=s,n}const Wt=()=>({...at(),attrs:{}});function qe(e,t,n,s){const o=c.useMemo(()=>{const i=Wt();return ne(i,t,se(s),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};Ot(i,e.style,e),o.style={...i,...o.style}}return o}const Ue=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function rt(e){return typeof e!="string"||e.includes("-")?!1:!!(Ue.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ke(e,t,n,{latestValues:s},o,i=!1,a){const p=(a??rt(e)?qe:Be)(t,s,o,e),m=ze(t,typeof e=="string",i),d=e!==c.Fragment?{...m,...p,ref:n}:{},{children:u}=t,l=c.useMemo(()=>nt(u)?u.get():u,[u]);return c.createElement(e,{...d,children:l})}function Xe({scrapeMotionValuesFromProps:e,createRenderState:t},n,s,o){return{latestValues:Ye(n,s,o,e),renderState:t()}}function Ye(e,t,n,s){const o={},i=s(e,{});for(const l in i)o[l]=oe(i[l]);let{initial:a,animate:r}=e;const p=Dt(e),m=ie(e);t&&m&&!p&&e.inherit!==!1&&(a===void 0&&(a=t.initial),r===void 0&&(r=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const u=d?r:a;if(u&&typeof u!="boolean"&&!jt(u)){const l=Array.isArray(u)?u:[u];for(let f=0;f<l.length;f++){const h=ae(e,l[f]);if(h){const{transitionEnd:g,transition:v,...k}=h;for(const M in k){let x=k[M];if(Array.isArray(x)){const w=d?x.length-1:0;x=x[w]}x!==null&&(o[M]=x)}for(const M in g)o[M]=g[M]}}}return o}const Gt=e=>(t,n)=>{const s=c.useContext(G),o=c.useContext(W),i=()=>Xe(e,t,s,o);return n?i():ot(i)},Je=Gt({scrapeMotionValuesFromProps:re,createRenderState:at}),Ze=Gt({scrapeMotionValuesFromProps:ce,createRenderState:Wt}),Qe=Symbol.for("motionComponentSymbol");function tn(e,t,n){const s=c.useRef(n);c.useInsertionEffect(()=>{s.current=n});const o=c.useRef(null);return c.useCallback(i=>{var r;i&&((r=e.onMount)==null||r.call(e,i));const a=s.current;if(typeof a=="function")if(i){const p=a(i);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):a(i);else a&&(a.current=i);t&&(i?t.mount(i):t.unmount())},[t])}const Bt=c.createContext({});function j(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function en(e,t,n,s,o,i){var x,w;const{visualElement:a}=c.useContext(G),r=c.useContext(Ht),p=c.useContext(W),m=c.useContext(it),d=m.reducedMotion,u=m.skipAnimations,l=c.useRef(null),f=c.useRef(!1);s=s||r.renderer,!l.current&&s&&(l.current=s(e,{visualState:t,parent:a,props:n,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:d,skipAnimations:u,isSVG:i}),f.current&&l.current&&(l.current.manuallyAnimateOnMount=!0));const h=l.current,g=c.useContext(Bt);h&&!h.projection&&o&&(h.type==="html"||h.type==="svg")&&nn(l.current,n,o,g);const v=c.useRef(!1);c.useInsertionEffect(()=>{h&&v.current&&h.update(n,p)});const k=n[le],M=c.useRef(!!k&&typeof window<"u"&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,k))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,k)));return Nt(()=>{f.current=!0,h&&(v.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),h.scheduleRenderMicrotask(),M.current&&h.animationState&&h.animationState.animateChanges())}),c.useEffect(()=>{h&&(!M.current&&h.animationState&&h.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,k)}),M.current=!1),h.enteringChildren=void 0)}),h}function nn(e,t,n,s){const{layoutId:o,layout:i,drag:a,dragConstraints:r,layoutScroll:p,layoutRoot:m,layoutAnchor:d,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:qt(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!a||r&&j(r),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:s,crossfade:u,layoutScroll:p,layoutRoot:m,layoutAnchor:d})}function qt(e){if(e)return e.options.allowProjection!==!1?e.projection:qt(e.parent)}function U(e,{forwardMotionProps:t=!1,type:n}={},s,o){s&&Ne(s);const i=n?n==="svg":rt(e),a=i?Ze:Je;function r(m,d){let u;const l={...c.useContext(it),...m,layoutId:sn(m)},{isStatic:f}=l,h=Oe(m),g=a(m,f);if(!f&&typeof window<"u"){on();const v=an(l);u=v.MeasureLayout,h.visualElement=en(e,g,l,o,v.ProjectionNode,i)}return b.jsxs(G.Provider,{value:h,children:[u&&h.visualElement?b.jsx(u,{visualElement:h.visualElement,...l}):null,Ke(e,m,tn(g,h.visualElement,d),g,f,t,i)]})}r.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const p=c.forwardRef(r);return p[Qe]=e,p}function sn({layoutId:e}){const t=c.useContext(st).id;return t&&e!==void 0?t+"-"+e:e}function on(e,t){c.useContext(Ht).strict}function an(e){const t=zt(),{drag:n,layout:s}=t;if(!n&&!s)return{};const o={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(e)||s!=null&&s.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function rn(e,t){if(typeof Proxy>"u")return U;const n=new Map,s=(i,a)=>U(i,a,e,t),o=(i,a)=>s(i,a);return new Proxy(o,{get:(i,a)=>a==="create"?s:(n.has(a)||n.set(a,U(a,void 0,e,t)),n.get(a))})}const cn=(e,t)=>t.isSVG??rt(e)?new ue(t):new he(t,{allowProjection:e!==c.Fragment});class ln extends A{constructor(t){super(t),t.animationState||(t.animationState=de(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();jt(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let un=0;class hn extends A{constructor(){super(...arguments),this.id=un++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;if(t&&s===!1){if(this.isExitComplete){const{initial:a,custom:r}=this.node.getProps();if(typeof a=="string"){const p=fe(this.node,a,r);if(p){const{transition:m,transitionEnd:d,...u}=p;for(const l in u)(i=this.node.getValue(l))==null||i.jump(u[l])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const dn={animation:{Feature:ln},exit:{Feature:hn}};function T(e){return{point:{x:e.pageX,y:e.pageY}}}const fn=e=>t=>It(t)&&e(t,T(t));function I(e,t,n,s){return z(e,t,fn(n),s)}const Ut=({current:e})=>e?e.ownerDocument.defaultView:null,Mt=(e,t)=>Math.abs(e-t);function pn(e,t){const n=Mt(e.x,t.x),s=Mt(e.y,t.y);return Math.sqrt(n**2+s**2)}const xt=new Set(["auto","scroll"]);class Kt{constructor(t,n,{transformPagePoint:s,contextWindow:o=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=N(this.lastRawMoveEventInfo,this.transformPagePoint));const f=K(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,g=pn(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!h&&!g)return;const{point:v}=f,{timestamp:k}=ut;this.history.push({...v,timestamp:k});const{onStart:M,onMove:x}=this.handlers;h||(M&&M(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastRawMoveEventInfo=h,this.lastMoveEventInfo=N(h,this.transformPagePoint),E.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=K(f.type==="pointercancel"?this.lastMoveEventInfo:N(h,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,M),v&&v(f,M)},!It(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=a,this.contextWindow=o||window;const p=T(t),m=N(p,this.transformPagePoint),{point:d}=m,{timestamp:u}=ut;this.history=[{...d,timestamp:u}];const{onSessionStart:l}=n;l&&l(t,K(m,this.history)),this.removeListeners=Rt(I(this.contextWindow,"pointermove",this.handlePointerMove),I(this.contextWindow,"pointerup",this.handlePointerUp),I(this.contextWindow,"pointercancel",this.handlePointerUp)),r&&this.startScrollTracking(r)}startScrollTracking(t){let n=t.parentElement;for(;n;){const s=getComputedStyle(n);(xt.has(s.overflowX)||xt.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const s=t===window,o=s?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:o.x-n.x,y:o.y-n.y};i.x===0&&i.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,o),E.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),pe(this.updatePoint)}}function N(e,t){return t?{point:t(e.point)}:e}function wt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function K({point:e},t){return{point:e,delta:wt(e,Xt(t)),offset:wt(e,mn(t)),velocity:yn(t,.1)}}function mn(e){return e[0]}function Xt(e){return e[e.length-1]}function yn(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,s=null;const o=Xt(e);for(;n>=0&&(s=e[n],!(o.timestamp-s.timestamp>ft(t)));)n--;if(!s)return{x:0,y:0};s===e[0]&&e.length>2&&o.timestamp-s.timestamp>ft(t)*2&&(s=e[1]);const i=be(o.timestamp-s.timestamp);if(i===0)return{x:0,y:0};const a={x:(o.x-s.x)/i,y:(o.y-s.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function gn(e,{min:t,max:n},s){return t!==void 0&&e<t?e=s?F(t,e,s.min):Math.max(e,t):n!==void 0&&e>n&&(e=s?F(n,e,s.max):Math.min(e,n)),e}function Pt(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vn(e,{top:t,left:n,bottom:s,right:o}){return{x:Pt(e.x,n,o),y:Pt(e.y,t,s)}}function Ct(e,t){let n=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,s]=[s,n]),{min:n,max:s}}function kn(e,t){return{x:Ct(e.x,t.x),y:Ct(e.y,t.y)}}function Mn(e,t){let n=.5;const s=Q(e),o=Q(t);return o>s?n=pt(t.min,t.max-s,e.min):s>o&&(n=pt(e.min,e.max-o,t.min)),Le(0,1,n)}function xn(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const tt=.35;function wn(e=tt){return e===!1?e=0:e===!0&&(e=tt),{x:Et(e,"left","right"),y:Et(e,"top","bottom")}}function Et(e,t,n){return{min:St(e,t),max:St(e,n)}}function St(e,t){return typeof e=="number"?e:e[t]||0}const Pn=new WeakMap;class Cn{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const i=u=>{n&&this.snapToCursor(T(u).point),this.stopAnimation()},a=(u,l)=>{const{drag:f,dragPropagation:h,onDragStart:g}=this.getProps();if(f&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Me(f),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=l,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),L(k=>{let M=this.getAxisMotionValue(k).get()||0;if(xe.test(M)){const{projection:x}=this.visualElement;if(x&&x.layout){const w=x.layout.layoutBox[k];w&&(M=Q(w)*(parseFloat(M)/100))}}this.originPoint[k]=M}),g&&E.update(()=>g(u,l),!1,!0),ht(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},r=(u,l)=>{this.latestPointerEvent=u,this.latestPanInfo=l;const{dragPropagation:f,dragDirectionLock:h,onDirectionLock:g,onDrag:v}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:k}=l;if(h&&this.currentDirection===null){this.currentDirection=Sn(k),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",l.point,k),this.updateAxis("y",l.point,k),this.visualElement.render(),v&&E.update(()=>v(u,l),!1,!0)},p=(u,l)=>{this.latestPointerEvent=u,this.latestPanInfo=l,this.stop(u,l),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:u}=this.getProps();(u||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Kt(t,{onSessionStart:i,onStart:a,onMove:r,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:s,contextWindow:Ut(this.visualElement),element:this.visualElement.current})}stop(t,n){const s=t||this.latestPointerEvent,o=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!o||!s)return;const{velocity:a}=o;this.startAnimation(a);const{onDragEnd:r}=this.getProps();r&&E.postRender(()=>r(s,o))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,s){const{drag:o}=this.getProps();if(!s||!$(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(a=gn(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,o=this.constraints;t&&j(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=vn(s.layoutBox,t):this.constraints=!1,this.elastic=wn(n),o!==this.constraints&&!j(t)&&s&&this.constraints&&!this.hasMutatedConstraints&&L(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=xn(s.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!j(t))return!1;const s=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=ye(s,o.root,this.visualElement.getTransformPagePoint());let a=kn(o.layout.layoutBox,i);if(n){const r=n(ge(a));this.hasMutatedConstraints=!!r,r&&(a=ve(r))}return a}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:o,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:r}=this.getProps(),p=this.constraints||{},m=L(d=>{if(!$(d,n,this.currentDirection))return;let u=p&&p[d]||{};(a===!0||a===d)&&(u={min:0,max:0});const l=o?200:1e6,f=o?40:1e7,h={type:"inertia",velocity:s?t[d]:0,bounceStiffness:l,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...i,...u};return this.startAxisValueAnimation(d,h)});return Promise.all(m).then(r)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return ht(this.visualElement,t),s.start(ke(t,s,0,n,this.visualElement,!1))}stopAnimation(){L(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),o=s[n];return o||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){L(n=>{const{drag:s}=this.getProps();if(!$(n,s,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:a,max:r}=o.layout.layoutBox[n],p=i.get()||0;i.set(t[n]-F(a,r,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!j(n)||!s||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};L(a=>{const r=this.getAxisMotionValue(a);if(r&&this.constraints!==!1){const p=r.get();o[a]=Mn({min:p,max:p},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),L(a=>{if(!$(a,t,null))return;const r=this.getAxisMotionValue(a),{min:p,max:m}=this.constraints[a];r.set(F(p,m,o[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Pn.set(this.visualElement,this);const t=this.visualElement.current,n=I(t,"pointerdown",m=>{const{drag:d,dragListener:u=!0}=this.getProps(),l=m.target,f=l!==t&&we(l);d&&u&&!f&&this.start(m)});let s;const o=()=>{const{dragConstraints:m}=this.getProps();j(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),s||(s=En(t,m.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",o);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),E.read(o);const r=z(window,"resize",()=>this.scalePositionWithinConstraints()),p=i.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:d})=>{this.isDragging&&d&&(L(u=>{const l=this.getAxisMotionValue(u);l&&(this.originPoint[u]+=m[u].translate,l.set(l.get()+m[u].translate))}),this.visualElement.render())}));return()=>{r(),n(),a(),p&&p(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:a=tt,dragMomentum:r=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:o,dragConstraints:i,dragElastic:a,dragMomentum:r}}}function bt(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function En(e,t,n){const s=dt(e,bt(n)),o=dt(t,bt(n));return()=>{s(),o()}}function $(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Sn(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class bn extends A{constructor(t){super(t),this.removeGroupControls=H,this.removeListeners=H,this.controls=new Cn(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||H}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const X=e=>(t,n)=>{e&&E.update(()=>e(t,n),!1,!0)};class Ln extends A{constructor(){super(...arguments),this.removePointerDownListener=H}onPointerDown(t){this.session=new Kt(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ut(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:o}=this.node.getProps();return{onSessionStart:X(t),onStart:X(n),onMove:X(s),onEnd:(i,a)=>{delete this.session,o&&E.postRender(()=>o(i,a))}}}mount(){this.removePointerDownListener=I(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Y=!1;class An extends c.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:o}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),s&&s.register&&o&&s.register(i),Y&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ce.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:o,isPresent:i}=this.props,{projection:a}=s;return a&&(a.isPresent=i,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),Y=!0,o||t.layoutDependency!==n||n===void 0||t.isPresent!==i?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||E.postRender(()=>{const r=a.getStack();(!r||!r.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:s}=t;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Pe.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:o}=t;Y=!0,o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),s&&s.deregister&&s.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Yt(e){const[t,n]=$t(),s=c.useContext(st);return b.jsx(An,{...e,layoutGroup:s,switchLayoutGroup:c.useContext(Bt),isPresent:t,safeToRemove:n})}const Vn={pan:{Feature:Ln},drag:{Feature:bn,ProjectionNode:Tt,MeasureLayout:Yt}};function Lt(e,t,n){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",n==="Start");const o="onHover"+n,i=s[o];i&&E.postRender(()=>i(t,T(t)))}class _n extends A{mount(){const{current:t}=this.node;t&&(this.unmount=Ee(t,(n,s)=>(Lt(this.node,s,"Start"),o=>Lt(this.node,o,"End"))))}unmount(){}}class Dn extends A{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rt(z(this.node.current,"focus",()=>this.onFocus()),z(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function At(e,t,n){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",n==="Start");const o="onTap"+(n==="End"?"":n),i=s[o];i&&E.postRender(()=>i(t,T(t)))}class jn extends A{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=Se(t,(o,i)=>(At(this.node,i,"Start"),(a,{success:r})=>At(this.node,a,r?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const et=new WeakMap,J=new WeakMap,In=e=>{const t=et.get(e.target);t&&t(e)},Tn=e=>{e.forEach(In)};function Rn({root:e,...t}){const n=e||document;J.has(n)||J.set(n,{});const s=J.get(n),o=JSON.stringify(t);return s[o]||(s[o]=new IntersectionObserver(Tn,{root:e,...t})),s[o]}function Nn(e,t,n){const s=Rn(t);return et.set(e,n),s.observe(e),()=>{et.delete(e),s.unobserve(e)}}const $n={some:0,all:1};class Hn extends A{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:o="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:s,threshold:typeof o=="number"?o:$n[o]},r=m=>{const{isIntersecting:d}=m;if(this.isInView===d||(this.isInView=d,i&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:l}=this.node.getProps(),f=d?u:l;f&&f(m)};this.stopObserver=Nn(this.node.current,a,r)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(zn(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function zn({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Fn={inView:{Feature:Hn},tap:{Feature:jn},focus:{Feature:Dn},hover:{Feature:_n}},On={layout:{ProjectionNode:Tt,MeasureLayout:Yt}},Wn={...dn,...Fn,...Vn,...On},Ks=rn(Wn,cn);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=e=>{const t=Bn(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Un=c.createContext({}),Kn=()=>c.useContext(Un),Xn=c.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:s,className:o="",children:i,iconNode:a,...r},p)=>{const{size:m=24,strokeWidth:d=2,absoluteStrokeWidth:u=!1,color:l="currentColor",className:f=""}=Kn()??{},h=s??u?Number(n??d)*24/Number(t??m):n??d;return c.createElement("svg",{ref:p,...Z,width:t??m??Z.width,height:t??m??Z.height,stroke:e??l,strokeWidth:h,className:Jt("lucide",f,o),...!i&&!qn(r)&&{"aria-hidden":"true"},...r},[...a.map(([g,v])=>c.createElement(g,v)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>{const n=c.forwardRef(({className:s,...o},i)=>c.createElement(Xn,{ref:i,iconNode:t,className:Jt(`lucide-${Gn(Vt(e))}`,`lucide-${e}`,s),...o}));return n.displayName=Vt(e),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xs=y("arrow-left",Yn);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]],Ys=y("book-open-text",Jn);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Js=y("book-open",Zn);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],Zs=y("bookmark",Qn);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],Qs=y("bug",ts);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],to=y("check",es);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],eo=y("chevron-left",ns);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],no=y("circle-alert",ss);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],so=y("circle-play",os);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],oo=y("clock-3",is);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],io=y("cloud",as);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ao=y("copy",rs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],ro=y("ghost",cs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],co=y("hard-drive",ls);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],lo=y("heart",us);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],uo=y("history",hs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ho=y("image",ds);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",key:"9kzy35"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",key:"1t0f0t"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor",key:"1obus6"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2",key:"1gvhby"}]],fo=y("images",fs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],po=y("loader-circle",ps);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],mo=y("log-out",ms);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],yo=y("map-pin",ys);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],go=y("map",gs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=[["path",{d:"M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826",key:"1wyg69"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.656 3H20a2 2 0 0 1 2 2v11.344",key:"mhl4k6"}]],vo=y("message-square-off",vs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]],ko=y("message-square-text",ks);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Mo=y("moon-star",Ms);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],xo=y("mouse-pointer-click",xs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],wo=y("navigation",ws);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],Po=y("panel-bottom",Ps);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]],Co=y("panel-right-open",Cs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Eo=y("pencil",Es);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],So=y("play",Ss);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],bo=y("refresh-cw",bs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Lo=y("rotate-ccw",Ls);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ao=y("save",As);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Vo=y("send",Vs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_o=y("settings",_s);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Do=y("sparkles",Ds);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],jo=y("square-dashed",js);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Io=y("square",Is);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]],To=y("sun-medium",Ts);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ro=y("trash-2",Rs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],No=y("triangle-alert",Ns);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],$o=y("type",$s);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Ho=y("undo-2",Hs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],zo=y("user-round",zs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Fo=y("user",Fs);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Oo=y("users",Os);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wo=y("x",Ws);export{Us as A,Qs as B,no as C,yo as D,Oo as E,Js as F,ro as G,uo as H,fo as I,eo as J,lo as K,po as L,vo as M,io as N,co as O,Eo as P,oo as Q,Lo as R,Do as S,Ro as T,Ho as U,zo as V,wo as W,Wo as X,Io as a,Vo as b,to as c,Ao as d,ao as e,No as f,So as g,mo as h,bo as i,Xs as j,Mo as k,To as l,Ks as m,go as n,_o as o,Ys as p,ko as q,Co as r,xo as s,Po as t,jo as u,$o as v,ho as w,Zs as x,so as y,Fo as z};
