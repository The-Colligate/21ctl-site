"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{7284:function(t,e,s){s.r(e),s.d(e,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(t){for(var e,s=1,n=arguments.length;s<n;s++)for(var i in e=arguments[s])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,s){var i=this;this.endVal=e,this.options=s,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var s=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=s?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,s,n,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],s=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){n="";for(var r=3,o=0,l=0,c=e.length;l<c;++l)i.options.useIndianSeparators&&4===l&&(r=2,o=1),0!==l&&o%r==0&&(n=i.options.separator+n),o++,n=e[c-l-1]+n;e=n}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),s=s.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+s+i.options.suffix},this.easeOutExpo=function(t,e,s,n){return s*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=n(n({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,s=t.el.getBoundingClientRect(),n=s.top+window.pageYOffset,i=s.top+s.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||n>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);this.el&&("INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e)},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},230:function(t,e,s){s.r(e);var n=s(1527);s(959);var i=s(5377),a=s.n(i),r=s(7032);s(3690);var o=s(9295);let l=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"About Us - 21 CTL"}),(0,n.jsx)("meta",{name:"description",content:""})]}),(0,n.jsxs)("div",{className:"max-w-full min-h-screen flex flex-col overflow-x-hidden relative",children:[(0,n.jsxs)("div",{className:"absolute w-full h-full flex justify-between items-center",children:[(0,n.jsx)("div",{className:"w-full min-h-[50%] bg_gradient_l"}),(0,n.jsx)("div",{className:"w-full min-h-[50%] bg_gradient_r"})]}),(0,n.jsxs)("div",{className:"w-full min-h-screen flex flex-col z-[1]",children:[(0,n.jsx)(r.w_,{}),(0,n.jsx)("section",{className:"about-us sm:px-36 px-8 my-16 ",children:(0,n.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,n.jsxs)("div",{className:"max-w-3xl",children:[(0,n.jsxs)("h1",{className:"text-7xl font-bold tracking-normal text-center font-lato text-white whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl",children:["About"," ",(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] leading-8",children:"Us "})]}),(0,n.jsx)("p",{className:"text-2xl text-white text-center mt-6 largeTablet:text-xl smallTablet:text-lg",children:"We provide reliability, security, and high traffic handling for a seamless customer experience"})]})})}),(0,n.jsx)("section",{className:"sm:px-36 px-8 my-10",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"text-lg font-semibold pb-5",children:"Our statistics reveal more about us."}),(0,n.jsxs)("div",{className:"figures flex sm:flex-row flex-col sm:space-x-8 space-x-0",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold",children:(0,n.jsx)(o.ZP,{start:0,end:200,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Businessess Supported"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold",children:(0,n.jsx)(o.ZP,{start:0,end:25,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Years Experience"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold",children:(0,n.jsx)(o.ZP,{start:0,end:14,duration:2.75,prefix:"",suffix:"M+"})}),(0,n.jsx)("span",{className:"font-light",children:"Satisfied Customers"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-transparent bg-clip-text bg-gradient-to-br from-[#0282BA] to-[#015A81] text-4xl font-semibold",children:(0,n.jsx)(o.ZP,{start:0,end:100,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Completed Projects"})]})]})]})}),(0,n.jsx)("section",{className:"sm:px-28 px-8",children:(0,n.jsxs)("div",{className:"m-auto max-w-5xl",children:[(0,n.jsx)("h2",{className:"text-[36px] font-semibold tablet:text-[26px] mb-4",children:"About the Company"}),(0,n.jsxs)("p",{className:"text-[26px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[16px]",children:["21st Century Technologies is a licensed information communications and technology provider in Nigeria, with a 19-year history. The company owns and operates the most extensive optical fibre cable networks in Nigeria, with high-speed internet access and international subsea fibre capacity.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"21st Century Technologies is also the leading commercial data centre service provider in Nigeria, specializing in the protection of off-site data and server hosting in its state-of-the-art, secure facilities. The company offers bespoke service solutions to government, businesses, and homes with a redundant and multi-homed network backbone. 21st Century Technologies has its head office in Lagos and branches throughout Nigeria."]})]})}),(0,n.jsxs)("section",{className:"vision-mission-section",children:[(0,n.jsxs)("div",{className:"m-20 mr-0 flex justify-between items-center tablet:m-10 tablet:flex-col",children:[(0,n.jsxs)("div",{className:"w-[50%] tablet:w-full",children:[(0,n.jsx)("h2",{className:"text-5xl font-semibold tablet:text-[24px] mb-4",children:"Vision and Mission"}),(0,n.jsxs)("div",{className:"tablet:my-5 mb-4",children:[(0,n.jsx)("h3",{className:"text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2",children:"MISSION"}),(0,n.jsxs)("p",{className:"text-[24px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px] mb-4",children:['"To use State of the Art Infrastructure to provide world-class solutions to our valued customers through highly motivated talent and strategic alliances."'," "]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:" text-[26px] font-semibold opacity-40 tablet:text-[20px] mb-2",children:"VISION"}),(0,n.jsx)("p",{className:"text-[24px] text-[#2e2e2c] dark:text-white text-justify tablet:text-[18px]",children:'"To be the foremost integrated ICT solutions provider in Africa."'})]})]}),(0,n.jsx)("div",{className:"flex items-center justify-end w-[50%] tablet:w-full",children:(0,n.jsx)("img",{src:"/logo/vision-mission.png",className:"",height:734,width:914})})]}),(0,n.jsxs)("div",{className:"relative flex sm:flex-row flex-col justify-center items-center mb-28 sm:px-0 px-8",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{className:"w-[640px] px-10 pr-30 py-20 bg-[#E7D2CD] dark:text-black rounded-2xl tablet:w-full tablet:pr-10 tablet:py-8",children:[(0,n.jsx)("h2",{className:"text-[36px] font-semibold mb-10 tablet:text-[26px]",children:"The Network"}),(0,n.jsx)("p",{className:"text-[20px] w-3/4 text-justify dark:text-black tablet:w-full tablet:text-[16px]",children:"21st Century Technologies has a world-class fibre optic network in conjunction with Siemens AG, with extensive coverage in the Lagos metropolis. The company's voice network is powered by the EWSD switching platform, which is used by 350 operators in over 150 countries. The company can offer scalable bandwidth solutions up to 622 Mbps on its metropolitan network."})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/logo/network.png",className:"sm:-ml-16 -ml-0",height:430,width:530})})]})]}),(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"text-[36px] font-semibold text-center mb-4",children:"Core Values"}),(0,n.jsxs)("div",{className:"values_grid m-auto ",children:[(0,n.jsxs)("div",{className:"flex justify-center items-center tablet:my-5",children:[(0,n.jsx)("img",{src:"./icons/innovation.svg",className:" w-50 pr-2 ",height:50,width:50}),(0,n.jsx)("p",{children:"Innovation"})]}),(0,n.jsxs)("div",{className:"flex justify-center items-center",children:[(0,n.jsx)("img",{src:"./icons/partnership.svg",className:" w-50 pr-2",height:50,width:50}),(0,n.jsx)("p",{children:"Partnership"})]}),(0,n.jsxs)("div",{className:"flex justify-center items-center tablet:my-5",children:[(0,n.jsx)("img",{src:"./icons/integrity.svg",className:" w-50 pr-2",height:50,width:50}),(0,n.jsx)("p",{children:"Integrity"})]}),(0,n.jsxs)("div",{className:"flex justify-center items-center",children:[(0,n.jsx)("img",{src:"./icons/inspiring.svg",className:" w-50 pr-2",height:50,width:50}),(0,n.jsx)("p",{children:"Inspiring"})]}),(0,n.jsxs)("div",{className:"flex justify-center items-center tablet:my-5 sm:ml-0 ml-5",children:[(0,n.jsx)("img",{src:"./icons/commitment.svg",className:" w-50 pr-2",height:50,width:50}),(0,n.jsx)("p",{children:"Commitment"})]})]})]}),(0,n.jsx)(r.$_,{})]}),(0,n.jsx)(r.HE,{})]})]});e.default=l},9295:function(t,e,s){var n=s(959),i=s(7284);function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach(function(e){var n,i,a;n=t,i=e,a=s[e],(i=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var n=s.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(i))in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}function o(){return(o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var s,n,i=function(t,e){if(null==t)return{};var s,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)s=a[n],e.indexOf(s)>=0||(i[s]=t[s]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)s=a[n],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function u(t){var e=n.useRef(t);return c(function(){e.current=t}),n.useCallback(function(){for(var t=arguments.length,s=Array(t),n=0;n<t;n++)s[n]=arguments[n];return e.current.apply(void 0,s)},[])}var d=function(t,e){var s=e.decimal,n=e.decimals,a=e.duration,r=e.easingFn,o=e.end,l=e.formattingFn,c=e.numerals,u=e.prefix,d=e.separator,h=e.start,f=e.suffix,p=e.useEasing,m=e.enableScrollSpy,x=e.scrollSpyDelay,g=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:h,duration:a,decimal:s,decimalPlaces:n,easingFn:r,formattingFn:l,numerals:c,separator:d,prefix:u,suffix:f,useEasing:p,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:x,scrollSpyOnce:g})},h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],f={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},p=function(t){var e=n.useMemo(function(){return r(r({},f),t)},[t]),s=e.ref,i=e.startOnMount,a=e.enableReinitialize,o=e.delay,c=e.onEnd,p=e.onStart,m=e.onPauseResume,x=e.onReset,g=e.onUpdate,b=l(e,h),v=n.useRef(),y=n.useRef(),j=n.useRef(!1),w=u(function(){return d("string"==typeof s?s:s.current,b)}),N=u(function(t){var e=v.current;if(e&&!t)return e;var s=w();return v.current=s,s}),V=u(function(){var t=function(){return N(!0).start(function(){null==c||c({pauseResume:E,reset:O,start:A,update:S})})};o&&o>0?y.current=setTimeout(t,1e3*o):t(),null==p||p({pauseResume:E,reset:O,update:S})}),E=u(function(){N().pauseResume(),null==m||m({reset:O,start:A,update:S})}),O=u(function(){N().el&&(y.current&&clearTimeout(y.current),N().reset(),null==x||x({pauseResume:E,start:A,update:S}))}),S=u(function(t){N().update(t),null==g||g({pauseResume:E,reset:O,start:A})}),A=u(function(){O(),V()}),F=u(function(t){i&&(t&&O(),V())});return n.useEffect(function(){j.current?a&&F(!0):(j.current=!0,F())},[a,j,F,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),n.useEffect(function(){return function(){O()}},[O]),{start:A,pauseResume:E,reset:O,update:S,getCountUp:N}},m=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,s=t.redraw,i=t.containerProps,a=t.children,c=t.style,d=l(t,m),h=n.useRef(null),f=n.useRef(!1),x=p(r(r({},d),{},{ref:h,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),g=x.start,b=x.reset,v=x.update,y=x.pauseResume,j=x.getCountUp,w=u(function(){g()}),N=u(function(e){t.preserveValue||b(),v(e)}),V=u(function(){if("function"==typeof t.children&&!(h.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}j()});return(n.useEffect(function(){V()},[V]),n.useEffect(function(){f.current&&N(t.end)},[t.end,N]),n.useEffect(function(){s&&f.current&&w()},[w,s,s&&t]),n.useEffect(function(){!s&&f.current&&w()},[w,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),n.useEffect(function(){f.current=!0},[]),"function"==typeof a)?a({countUpRef:h,start:g,reset:b,update:v,pauseResume:y,getCountUp:j}):n.createElement("span",o({className:e,ref:h,style:c},i),void 0!==t.start?j().formattingFn(t.start):"")}}}]);