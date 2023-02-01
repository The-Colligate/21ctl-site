"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{8273:function(e,t,a){a.r(t),a.d(t,{CountUp:function(){return s}});var n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},s=function(){function e(e,t,a){var s=this;this.endVal=t,this.options=a,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){s.startTime||(s.startTime=e);var t=e-s.startTime;s.remaining=s.duration-t,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration);var a=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=a?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(e){var t,a,n,i=(Math.abs(e).toFixed(s.options.decimalPlaces)+"").split(".");if(t=i[0],a=i.length>1?s.options.decimal+i[1]:"",s.options.useGrouping){n="";for(var r=3,l=0,o=0,c=t.length;o<c;++o)s.options.useIndianSeparators&&4===o&&(r=2,l=1),0!==o&&l%r==0&&(n=s.options.separator+n),l++,n=t[c-o-1]+n;t=n}return s.options.numerals&&s.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return s.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return s.options.numerals[+e]})),(e<0?"-":"")+s.options.prefix+t+a+s.options.suffix},this.easeOutExpo=function(e,t,a,n){return a*(1-Math.pow(2,-10*e/n))*1024/1023+t},this.options=n(n({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),n=a.top+window.pageYOffset,s=a.top+a.height+window.pageYOffset;s<t&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||n>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=t:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=t:this.el.innerHTML=t)},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},5915:function(e,t,a){a.r(t);var n=a(5893);a(7294),a(5675);var s=a(9008),i=a.n(s),r=a(1465),l=a(1121),o=a(4001),c=a(7857);let u=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:"Digital Infrastructure - 21 CTL"}),(0,n.jsx)("meta",{name:"description",content:""})]}),(0,n.jsxs)("div",{className:"max-w-full min-h-screen flex flex-col overflow-x-hidden relative",children:[(0,n.jsxs)("div",{className:"absolute w-full h-full flex justify-between items-center",children:[(0,n.jsx)("div",{className:"w-full min-h-[50%] bg_gradient_l"}),(0,n.jsx)("div",{className:"w-full min-h-[50%] bg_gradient_r"})]}),(0,n.jsxs)("div",{className:"w-full min-h-screen flex flex-col z-[1]",children:[(0,n.jsx)(r.w_,{}),(0,n.jsxs)("section",{className:"flex sm:px-36 px-8 my-6 items-center justify-between space-x-16 tablet:flex-col tablet:space-x-0 pt-28",children:[(0,n.jsxs)(l.E.div,{variants:o.oC,animate:"visible",initial:"hidden",className:"max-w-3xl",children:[(0,n.jsxs)("h1",{className:"text-7xl tracking-normal font-lato font-medium whitespace-pre-wrap largeTablet:text-5xl tablet:text-3xl smallTablet:text-2xl",children:[(0,n.jsx)("span",{className:"text-primary-orange leading-8",children:"Digital "}),"Infrastructure"]}),(0,n.jsx)("p",{className:"text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg",children:"We provide reliability, security, and high traffic handling for a seamless customer experience"})]}),(0,n.jsx)(l.E.div,{variants:o.A4,animate:"visible",initial:"hidden",children:(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058147/21ctl/logo/hero-image_abp6dp.png",width:650,height:650,className:"tablet:w-96 tablet:space-x-0 phone:w-64 phone:space-x-0"})})]}),(0,n.jsx)("section",{className:"sm:px-36 px-8 mt-5 mb-20 phone:mb-5",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"text-lg font-semibold pb-5 tablet:text-center phone:text-sm",children:"Our statistics reveal more about us."}),(0,n.jsxs)("div",{className:"figures flex sm:flex-row flex-col sm:space-x-8 space-x-0",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-primary-orange text-4xl font-semibold",children:(0,n.jsx)(c.ZP,{start:0,end:1e3,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Business Supported"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-primary-orange text-4xl font-semibold",children:(0,n.jsx)(c.ZP,{start:0,end:25,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Years Experience"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-primary-orange text-4xl font-semibold",children:(0,n.jsx)(c.ZP,{start:0,end:45,duration:2.75,prefix:"",suffix:"M+"})}),(0,n.jsx)("span",{className:"font-light",children:"Satisfied Customers"})]}),(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("p",{className:"text-primary-orange text-4xl font-semibold",children:(0,n.jsx)(c.ZP,{start:0,end:100,duration:2.75,prefix:"",suffix:"+"})}),(0,n.jsx)("span",{className:"font-light",children:"Mega Projects Completed "})]})]})]})}),(0,n.jsxs)("section",{className:"cloud-services mx-20 my-10 phone:mb-0 relative tablet:mx-10",children:[(0,n.jsxs)("div",{className:"w-2/5 mb-20 phone:w-full tablet:mb-5 tablet:w-full",children:[(0,n.jsx)("p",{className:"text-[#319FD9] font-[14px]",children:"REGIONAL NETWORK GATEWAY NIGERIA"}),(0,n.jsxs)("p",{className:"font-bold text-[35px] tablet:text-[25px] ",children:["Connect to every",(0,n.jsx)("br",{})," Hyperscale Cloud Provider"]}),(0,n.jsx)("p",{className:"text-[16px]",children:"We have recently installed the 1st regional network gateway in Nigeria to support direct connectivity to major Data Centres around the globe in partnership with PCCW."})]}),(0,n.jsxs)("div",{className:"services flex mx-10 flex-col phone:text-center phone:mx-0 ",children:[(0,n.jsxs)("div",{className:"number-1 bg-white p-10 my-5 rounded-lg phone:p-5",children:[(0,n.jsx)("h3",{className:"font-extrabold",children:"5G Readiness"}),(0,n.jsx)("p",{children:"Infrastructure with edge computing capabilities to support 5th generation technology standards"})]}),(0,n.jsxs)("div",{className:"number-1 bg-white p-10 my-5 rounded-lg phone:p-5",children:[(0,n.jsx)("h3",{className:"font-extrabold",children:"Data Centers"}),(0,n.jsx)("p",{children:"His defective nor convinced residence own. Connection has put impossible own apartments boisterous."})]}),(0,n.jsxs)("div",{className:"number-1 mx-auto bg-white p-10 my-5 rounded-lg phone:p-5",children:[(0,n.jsx)("h3",{className:"font-extrabold",children:"Towers"}),(0,n.jsx)("p",{children:"Wide range communication infrastructure and managed service to enable wireless connectivity connecting people, devices and networks."})]})]})]}),(0,n.jsx)("div",{className:"flex justify-center items-center mx-20 my-10 phone:my-5 phone:mx-10",children:(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058149/21ctl/icons/potential-partners_kd9w9q.png",height:100,width:100,className:"tablet:w-full"})}),(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{className:"text-center mx-10 tablet:mx-0",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center text-center w-3/4 mx-auto tablet:mx-10 phone:w-3/3",children:[(0,n.jsx)("h2",{className:"text-[42px] text-primary-orange my-4 tablet:text-[16px]",children:"21st century is a Digital professional service Infrastructure company with 25 years experience "}),(0,n.jsx)("p",{className:"text-[16px] tablet:text-[12px]",children:"Combine our capabilities with data Center operational knowledge, within a critical environment, connecting our customers. Our proven track record in delivering value to the customer. Providing sustainable solutions for today and tomorrow."})]})}),(0,n.jsxs)("div",{className:"data_center_grid mt-5 px-28 tablet:px-10",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700",children:[(0,n.jsxs)("div",{className:"p-5 text-black dark:text-black",children:[(0,n.jsxs)("h3",{className:"text-3xl font-medium tracking-wide ",children:[(0,n.jsx)("span",{className:"text-primary-orange",children:"Ikeja "})," Data Center"]}),(0,n.jsx)("p",{className:"py-2 pt-4 tracking-wide text-lg leading text-justify",children:"Our Ikoyi data center is designed to be energy-efficient, maintainable, and secure, with redundant 8MW utility power."})]}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058120/21ctl/data-centers/ikeja-center_ahvecs.png",className:"inline-block w-full fit",width:100,height:100})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700",children:[(0,n.jsxs)("div",{className:"p-5 text-black dark:text-black",children:[(0,n.jsxs)("h3",{className:"text-3xl font-medium tracking-wide ",children:[(0,n.jsx)("span",{className:"text-primary-orange",children:"Ikoyi "})," Data Center"]}),(0,n.jsx)("p",{className:"py-2 pt-4 tracking-wide text-lg leading text-justify",children:"Our six-story data center in Africa is innovative and equipped with a 10MW Turbine system, providing ample power and space for clients to grow."})]}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058121/21ctl/data-centers/lekki-center_ctedxo.png",className:"inline-block w-full h-fit",width:100,height:100})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700",children:[(0,n.jsxs)("div",{className:"p-5 text-black dark:text-black",children:[(0,n.jsxs)("h3",{className:"text-3xl font-medium tracking-wide ",children:[(0,n.jsx)("span",{className:"text-primary-orange",children:"Apapa "}),"  Data Center"]}),(0,n.jsx)("p",{className:"py-2 pt-4 tracking-wide text-lg leading text-justify",children:"Our Apapa data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy."})]}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058119/21ctl/data-centers/apapa-center_mmq3so.png",className:"inline-block w-full h-fit",width:100,height:100})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700",children:[(0,n.jsxs)("div",{className:"p-5 text-black dark:text-black",children:[(0,n.jsxs)("h3",{className:"text-3xl font-medium tracking-wide ",children:[(0,n.jsx)("span",{className:"text-primary-orange",children:"Saka-Tinubu "}),"  Data Center"]}),(0,n.jsx)("p",{className:"py-2 pt-4 tracking-wide text-lg leading text-justify",children:"Our Saka-Tinubu data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy."})]}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058122/21ctl/data-centers/sakatinubu_v5tjln.jpg",className:"inline-block w-full h-fit",width:100,height:100})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between shadow-lg shadow-gray-400 max-w-sm rounded-2xl my-4 flex-1 bg-white dark:shadow-gray-700",children:[(0,n.jsxs)("div",{className:"p-5 text-black dark:text-black",children:[(0,n.jsxs)("h3",{className:"text-3xl font-medium tracking-wide ",children:[(0,n.jsx)("span",{className:"text-primary-orange",children:"Alanamu "}),"  Data Center"]}),(0,n.jsx)("p",{className:"py-2 pt-4 tracking-wide text-lg leading text-justify ",children:"Our Alanamu data center is a large, multi-tenant facility in Africa with multiple carrier and utility feeds and strong electrical and mechanical redundancy."})]}),(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058118/21ctl/data-centers/alanamu_ldhtn9.png",width:100,height:100,className:"inline-block w-full h-fit rounded-br-2xl rounded-bl-2xl"})]})]})]}),(0,n.jsx)("section",{className:"five-gr pt-32 sm:mt-0 mt-32 phone:mt-0",children:(0,n.jsxs)("div",{className:" flex sm:flex-row flex-col w-full items-center m-auto sm:h-full h-full bg-white ",children:[(0,n.jsxs)("div",{className:"px-5 sm:py-0 py-10 mx-10 text-black dark:text-black",children:[(0,n.jsxs)("h4",{className:"text-5xl font-semibold text-left tablet:text-3xl",children:[" ",(0,n.jsx)("span",{className:"text-primary-orange",children:"5G"})," Readiness"]}),(0,n.jsx)("p",{className:"text-xl text-left pt-3 phone:text-sm",children:"Our infrastructure with edge computing capabilities supports 5G technology and enables new user experiences, deployment models, and services."})]}),(0,n.jsx)("div",{className:"w-full h-full sm:px-0 px-5",children:(0,n.jsx)("img",{src:"https://res.cloudinary.com/dqsggbqmf/image/upload/v1675058177/21ctl/logo/5g_main_qvaz7q.svg",className:" w-full sm:rounded-tr-3xl rounded-md sm:rounded-br-3xl "})})]})}),(0,n.jsx)(r.$_,{})]}),(0,n.jsx)(r.HE,{})]})]});t.default=u},7857:function(e,t,a){var n=a(7294),s=a(8273);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach(function(t){var n,s,i;n=e,s=t,i=a[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in n?Object.defineProperty(n,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[s]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function u(e){var t=n.useRef(e);return c(function(){t.current=e}),n.useCallback(function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.current.apply(void 0,a)},[])}var d=function(e,t){var a=t.decimal,n=t.decimals,i=t.duration,r=t.easingFn,l=t.end,o=t.formattingFn,c=t.numerals,u=t.prefix,d=t.separator,m=t.start,p=t.suffix,h=t.useEasing,f=t.enableScrollSpy,x=t.scrollSpyDelay,g=t.scrollSpyOnce;return new s.CountUp(e,l,{startVal:m,duration:i,decimal:a,decimalPlaces:n,easingFn:r,formattingFn:o,numerals:c,separator:d,prefix:u,suffix:p,useEasing:h,useGrouping:!!d,enableScrollSpy:f,scrollSpyDelay:x,scrollSpyOnce:g})},m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(e){var t=n.useMemo(function(){return r(r({},p),e)},[e]),a=t.ref,s=t.startOnMount,i=t.enableReinitialize,l=t.delay,c=t.onEnd,h=t.onStart,f=t.onPauseResume,x=t.onReset,g=t.onUpdate,y=o(t,m),b=n.useRef(),w=n.useRef(),j=n.useRef(!1),v=u(function(){return d("string"==typeof a?a:a.current,y)}),N=u(function(e){var t=b.current;if(t&&!e)return t;var a=v();return b.current=a,a}),V=u(function(){var e=function(){return N(!0).start(function(){null==c||c({pauseResume:k,reset:E,start:S,update:O})})};l&&l>0?w.current=setTimeout(e,1e3*l):e(),null==h||h({pauseResume:k,reset:E,update:O})}),k=u(function(){N().pauseResume(),null==f||f({reset:E,start:S,update:O})}),E=u(function(){N().el&&(w.current&&clearTimeout(w.current),N().reset(),null==x||x({pauseResume:k,start:S,update:O}))}),O=u(function(e){N().update(e),null==g||g({pauseResume:k,reset:E,start:S})}),S=u(function(){E(),V()}),F=u(function(e){s&&(e&&E(),V())});return n.useEffect(function(){j.current?i&&F(!0):(j.current=!0,F())},[i,j,F,l,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),n.useEffect(function(){return function(){E()}},[E]),{start:S,pauseResume:k,reset:E,update:O,getCountUp:N}},f=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,a=e.redraw,s=e.containerProps,i=e.children,c=e.style,d=o(e,f),m=n.useRef(null),p=n.useRef(!1),x=h(r(r({},d),{},{ref:m,startOnMount:"function"!=typeof i||0===e.delay,enableReinitialize:!1})),g=x.start,y=x.reset,b=x.update,w=x.pauseResume,j=x.getCountUp,v=u(function(){g()}),N=u(function(t){e.preserveValue||y(),b(t)}),V=u(function(){if("function"==typeof e.children&&!(m.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}j()});return(n.useEffect(function(){V()},[V]),n.useEffect(function(){p.current&&N(e.end)},[e.end,N]),n.useEffect(function(){a&&p.current&&v()},[v,a,a&&e]),n.useEffect(function(){!a&&p.current&&v()},[v,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),n.useEffect(function(){p.current=!0},[]),"function"==typeof i)?i({countUpRef:m,start:g,reset:y,update:b,pauseResume:w,getCountUp:j}):n.createElement("span",l({className:t,ref:m,style:c},s),void 0!==e.start?j().formattingFn(e.start):"")}}}]);