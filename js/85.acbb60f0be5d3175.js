"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{2085:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n=i(5893),o=i(8122);i(7294);var s=i(8595),r=i(267),a=i(1252),l=i(6941),d=i(1121),u=i(9470),c=i.n(u);let h=e=>{let{name:t,feedback:i}=e;return(0,n.jsx)(c(),{bottom:!0,duration:2e3,children:(0,n.jsx)(l.Z,{className:"card-lift--hover shadow mt-4",children:(0,n.jsx)(d.Z,{children:(0,n.jsx)("div",{className:"d-flex px-3",children:(0,n.jsxs)("div",{className:"pl-4",children:[(0,n.jsx)("h5",{className:"text-info",children:t}),(0,n.jsx)("p",{className:"description mt-3",children:i})]})})})})})};var p=()=>o.KK&&(0,n.jsx)("section",{className:"section section-lg",children:(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)("div",{className:"d-flex p-4",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",children:(0,n.jsx)("i",{className:"fa fa-star text-info"})})}),(0,n.jsx)("div",{className:"pl-4",children:(0,n.jsx)("h4",{className:"display-3 text-info",children:"Our Clients Feedback"})})]}),(0,n.jsx)(r.Z,{className:"row-grid align-items-center",children:o.KK.map(((e,t)=>(0,n.jsx)(a.Z,{lg:6,children:(0,n.jsx)(h,{...e})},t)))})]})})},9470:function(e,t,i){function n(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,r=t.down,l=t.top,d=t.bottom,c=t.big,h=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(l||r?4:0)|(d||s?8:0)|(h?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(u.hasOwnProperty(f))return u[f];var v=n||o||s||r||l||d,m=void 0,y=void 0;if(v){if(!h!=!(e&&p)){var w=[o,n,d,l,r,s];n=w[0],o=w[1],l=w[2],d=w[3],s=w[4],r=w[5]}var b=i||(c?"2000px":"100%");m=n?"-"+b:o?b:"0",y=r||l?"-"+b:s||d?b:"0"}return u[f]=(0,a.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),s=e.timeout,r=e.duration,d=void 0===r?a.defaults.duration:r,u=e.delay,c=void 0===u?a.defaults.delay:u,h=e.count,p=void 0===h?a.defaults.count:h,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===s?d:s,delay:c,forever:o,count:p,style:{animationFillMode:"both"},reverse:f.left};return t?(0,l.default)(f,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var s,r=i(5697),a=i(1017),l=(s=i(2580))&&s.__esModule?s:{default:s},d={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},5792:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=(n=i(7294))&&n.__esModule?n:{default:n},l=i(5697),d=i(1017),u=(0,l.shape)({make:l.func,duration:l.number.isRequired,delay:l.number.isRequired,forever:l.bool,count:l.number.isRequired,style:l.object.isRequired,reverse:l.bool}),c={collapse:l.bool,collapseEl:l.element,cascade:l.bool,wait:l.number,force:l.bool,disabled:l.bool,appear:l.bool,enter:l.bool,exit:l.bool,fraction:l.number,refProp:l.string,innerRef:l.func,onReveal:l.func,unmountOnExit:l.bool,mountOnEnter:l.bool,inEffect:u.isRequired,outEffect:(0,l.oneOfType)([u,(0,l.oneOf)([!1])]).isRequired,ssrReveal:l.bool,collapseOnly:l.bool,ssrFadeout:l.bool},h={transitionGroup:l.object},p=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,d.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,r=i.delay,a=i.duration;o||(this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(a+(t?a:0)*s)))}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,r=void 0;if(t.collapseOnly)s=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;s=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=a.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){(function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw s}}return i}(e,t);throw TypeError("Invalid attempt to destructure non-iterable instance")})(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return a.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):a.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=n.duration,l=n.reverse,u=i.length,c=2*r;this.props.collapse&&(r=(c=parseInt(this.state.style.animationDuration,10))/2);var h=l?u:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?a.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(l?h--:h++,0,u,r,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=a.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:a.default.createElement("div",null,e)}return a.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e,t,i,n;n=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var o=this.getChild();"function"==typeof o.ref&&(this.childRef=o.ref);var r=!1,l=o.props,u=l.style,c=l.className,h=l.children,p=this.props.disabled?c:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(c?" "+c:"")||void 0,f=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&h&&this.state.style.animationName?(r=this.cascade(h),f=s({},u,{opacity:1})):f=this.props.disabled?u:s({},u,this.state.style);var v=s({},this.props.props,(e={className:p,style:f},t=this.props.refProp,i=this.saveRef,t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e)),m=a.default.cloneElement(o,v,n?r||h:void 0);return void 0!==this.props.collapse?this.props.collapseEl?a.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:m}):a.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:m}):m}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(d.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(a.default.Component);p.propTypes=c,p.defaultProps={fraction:.2,refProp:"ref"},p.contextTypes=h,p.displayName="RevealBase",t.default=p,e.exports=t.default},1017:function(e,t){function i(e){try{return p.insertRule(e,p.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function n(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",n,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",n,!0),window.document.removeEventListener("visibilitychange",n))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,i,n,o){var s=Math.log(n);return Math.exp(s+(Math.log(o)-s)/(i-t)*(e-t))},t.animation=function(e){if(!p)return"";var t="@keyframes "+(f+c)+"{"+e+"}",i=h[e];return i?""+f+i:(p.insertRule(t,p.cssRules.length),h[e]=c,""+f+c++)},t.hideAll=n,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,a=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),c=1,h={},p=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||a,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(l,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(p=v.sheet,window.addEventListener("scroll",n,!0),window.addEventListener("orientationchange",n,!0),window.document.addEventListener("visibilitychange",n))}},2580:function(e,t,i){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),2>s.default.Children.count(n)?s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(r.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(7294)),r=n(i(5792));e.exports=t.default}}]);