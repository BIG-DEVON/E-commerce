(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{5696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(3338),r=n(11),o=n.n(r),i=n(3750),l=n(9727),c={};!function e(t,n,a,r){var o,i,l,c,s,u,d,f,h,m=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function g(){}function b(e){var a=n.exports.Promise,r=void 0!==a?a:t.Promise;return"function"==typeof r?new r(e):(e(g,g),null)}var p=(l=Math.floor(1e3/60),c={},s=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(o=function(e){var t=Math.random();return c[t]=requestAnimationFrame(function n(a){s===a||s+l-1<a?(s=a,delete c[t],e()):c[t]=requestAnimationFrame(n)}),t},i=function(e){c[e]&&cancelAnimationFrame(c[e])}):(o=function(e){return setTimeout(e,l)},i=function(e){return clearTimeout(e)}),{frame:o,cancel:i}),v=(f={},function(){if(u)return u;if(!a&&m){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{u=new Worker(URL.createObjectURL(new Blob([t])))}catch(n){return"function"==typeof console.warn&&console.warn("\uD83C\uDF8A Could not load worker",n),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,a,r){if(d)return t(n,null),d;var o=Math.random().toString(36).slice(2);return d=b(function(a){function i(t){t.data.callback===o&&(delete f[o],e.removeEventListener("message",i),d=null,r(),a())}e.addEventListener("message",i),t(n,o),f[o]=i.bind(null,{data:{callback:o}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),f)f[t](),delete f[t]}}(u)}return u}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(e,t,n){var a;return a=e&&null!=e[t]?e[t]:y[t],n?n(a):a}function M(e){return e<0?0:Math.floor(e)}function E(e){return parseInt(e,16)}function x(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function N(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function I(e,n){var o,i=!e,l=!!w(n||{},"resize"),c=w(n,"disableForReducedMotion",Boolean),s=m&&w(n||{},"useWorker")?v():null,u=i?C:N,d=!!e&&!!s&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function h(n){var h,m=c||w(n,"disableForReducedMotion",Boolean),g=w(n,"zIndex",Number);if(m&&f)return b(function(e){e()});i&&o?e=o.canvas:i&&!e&&((h=document.createElement("canvas")).style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.pointerEvents="none",h.style.zIndex=g,e=h,document.body.appendChild(e)),l&&!d&&u(e);var v={width:e.width,height:e.height};function y(){if(s){var t={getBoundingClientRect:function(){if(!i)return e.getBoundingClientRect()}};u(t),s.postMessage({resize:{width:t.width,height:t.height}});return}v.width=v.height=null}function E(){o=null,l&&t.removeEventListener("resize",y),i&&e&&(document.body.removeChild(e),e=null,d=!1)}return(s&&!d&&s.init(e),d=!0,s&&(e.__confetti_initialized=!0),l&&t.addEventListener("resize",y,!1),s)?s.fire(n,v,E):function(t,n,i){for(var l,c,s,d,f,h,m,g,v=w(t,"particleCount",M),y=w(t,"angle",Number),E=w(t,"spread",Number),k=w(t,"startVelocity",Number),C=w(t,"decay",Number),N=w(t,"gravity",Number),I=w(t,"drift",Number),T=w(t,"colors",x),S=w(t,"ticks",Number),_=w(t,"shapes"),F=w(t,"scalar"),O=((l=w(t,"origin",Object)).x=w(l,"x",Number),l.y=w(l,"y",Number),l),z=v,P=[],R=e.width*O.x,L=e.height*O.y;z--;)P.push(function(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}({x:R,y:L,angle:y,spread:E,startVelocity:k,color:T[z%T.length],shape:_[Math.floor(Math.random()*(_.length-0))+0],ticks:S,decay:C,gravity:N,drift:I,scalar:F}));return o?o.addFettis(P):(c=e,s=n,h=P.slice(),m=c.getContext("2d"),g=b(function(e){function t(){d=f=null,m.clearRect(0,0,s.width,s.height),i(),e()}d=p.frame(function e(){a&&!(s.width===r.width&&s.height===r.height)&&(s.width=c.width=r.width,s.height=c.height=r.height),s.width||s.height||(u(c),s.width=c.width,s.height=c.height),m.clearRect(0,0,s.width,s.height),(h=h.filter(function(e){var t,n,a,r,o,i,l,c,s,u,d,f;return t=m,n=e,n.x+=Math.cos(n.angle2D)*n.velocity+n.drift,n.y+=Math.sin(n.angle2D)*n.velocity+n.gravity,n.wobble+=n.wobbleSpeed,n.velocity*=n.decay,n.tiltAngle+=.1,n.tiltSin=Math.sin(n.tiltAngle),n.tiltCos=Math.cos(n.tiltAngle),n.random=Math.random()+2,n.wobbleX=n.x+10*n.scalar*Math.cos(n.wobble),n.wobbleY=n.y+10*n.scalar*Math.sin(n.wobble),c=n.tick++/n.totalTicks,s=n.x+n.random*n.tiltCos,u=n.y+n.random*n.tiltSin,d=n.wobbleX+n.random*n.tiltCos,f=n.wobbleY+n.random*n.tiltSin,(t.fillStyle="rgba("+n.color.r+", "+n.color.g+", "+n.color.b+", "+(1-c)+")",t.beginPath(),"circle"===n.shape)?t.ellipse?t.ellipse(n.x,n.y,Math.abs(d-s)*n.ovalScalar,Math.abs(f-u)*n.ovalScalar,Math.PI/10*n.wobble,0,2*Math.PI):(a=n.x,r=n.y,o=Math.abs(d-s)*n.ovalScalar,i=Math.abs(f-u)*n.ovalScalar,l=Math.PI/10*n.wobble,t.save(),t.translate(a,r),t.rotate(l),t.scale(o,i),t.arc(0,0,1,0,2*Math.PI,void 0),t.restore()):(t.moveTo(Math.floor(n.x),Math.floor(n.y)),t.lineTo(Math.floor(n.wobbleX),Math.floor(u)),t.lineTo(Math.floor(d),Math.floor(f)),t.lineTo(Math.floor(s),Math.floor(n.wobbleY))),t.closePath(),t.fill(),n.tick<n.totalTicks})).length?d=p.frame(e):t()}),f=t}),(o={addFettis:function(e){return h=h.concat(e),g},canvas:c,promise:g,reset:function(){d&&p.cancel(d),f&&f()}}).promise)}(n,v,E)}return h.reset=function(){s&&s.reset(),o&&o.reset()},h}function T(){return h||(h=I(null,{useWorker:!0,resize:!0})),h}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=I}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),c,!1);var s=c.exports;c.exports.create;let u=()=>{var e=Date.now()+7e3,t={startVelocity:30,spread:360,ticks:60,zIndex:0};function n(e,t){return Math.random()*(t-e)+e}var a=setInterval(function(){var r=e-Date.now();if(r<=0)return clearInterval(a);var o=50*(r/7e3);s(Object.assign({},t,{particleCount:o,origin:{x:n(.1,.3),y:Math.random()-.2}})),s(Object.assign({},t,{particleCount:o,origin:{x:n(.7,.9),y:Math.random()-.2}}))},250)},d=()=>{let{setCartItems:e,setTotalPrice:t,setTotalQuantities:n}=(0,l.F)();return(0,a.useEffect)(()=>{localStorage.clear(),e([]),t(0),n(0),u()},[]),a.createElement("div",{className:"success-wrapper"},a.createElement("div",{className:"success"},a.createElement("p",{className:"icon"},a.createElement(i.Vno,null)),a.createElement("h2",null,"Thank you for your order!"),a.createElement("p",{className:"email-msg"},"Check your email inbox for the receipt."),a.createElement("p",{className:"description"},"If you have any questions, please email",a.createElement("a",{className:"email",href:"mailto:order@example.com"},"order@example.com")),a.createElement(o(),{href:"/"},a.createElement("button",{type:"button",width:"300px",className:"btn"},"Continue Shopping"))))};var f=d},8768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/success",function(){return n(5696)}])}},function(e){e.O(0,[13,888,179],function(){return e(e.s=8768)}),_N_E=e.O()}]);