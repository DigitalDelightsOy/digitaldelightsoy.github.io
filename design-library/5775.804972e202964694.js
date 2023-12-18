"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[5775],{5775:(I,C,g)=>{g.r(C),g.d(C,{SignatureDemoComponent:()=>$});var _=g(6814),S=g(4243),o=g(5879),b=g(4177);class w{constructor(t,i,e,n){if(isNaN(t)||isNaN(i))throw new Error(`Point is invalid: (${t}, ${i})`);this.x=+t,this.y=+i,this.pressure=e||0,this.time=n||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class y{constructor(t,i,e,n,s,r){this.startPoint=t,this.control2=i,this.control1=e,this.endPoint=n,this.startWidth=s,this.endWidth=r}static fromPoints(t,i){const e=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new y(t[1],e,n,t[2],i.start,i.end)}static calculateControlPoints(t,i,e){const n=t.x-i.x,s=t.y-i.y,r=i.x-e.x,c=i.y-e.y,h_x=(t.x+i.x)/2,h_y=(t.y+i.y)/2,a_x=(i.x+e.x)/2,a_y=(i.y+e.y)/2,d=Math.sqrt(n*n+s*s),l=Math.sqrt(r*r+c*c),m=l/(d+l),P=i.x-(a_x+(h_x-a_x)*m),E=i.y-(a_y+(h_y-a_y)*m);return{c1:new w(h_x+P,h_y+E),c2:new w(a_x+P,a_y+E)}}length(){let e,n,i=0;for(let s=0;s<=10;s+=1){const r=s/10,c=this.point(r,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),h=this.point(r,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const a=c-e,d=h-n;i+=Math.sqrt(a*a+d*d)}e=c,n=h}return i}point(t,i,e,n,s){return i*(1-t)*(1-t)*(1-t)+3*e*(1-t)*(1-t)*t+3*n*(1-t)*t*t+s*t*t*t}}class k{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,i,e){this._et.addEventListener(t,i,e)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,i,e){this._et.removeEventListener(t,i,e)}}class x extends k{constructor(t,i={}){super(),this.canvas=t,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=e=>{1===e.buttons&&(this._drawningStroke=!0,this._strokeBegin(e))},this._handleMouseMove=e=>{this._drawningStroke&&this._strokeMoveUpdate(e)},this._handleMouseUp=e=>{1===e.buttons&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(e))},this._handleTouchStart=e=>{e.cancelable&&e.preventDefault(),1===e.targetTouches.length&&this._strokeBegin(e.changedTouches[0])},this._handleTouchMove=e=>{e.cancelable&&e.preventDefault(),this._strokeMoveUpdate(e.targetTouches[0])},this._handleTouchEnd=e=>{e.target===this.canvas&&(e.cancelable&&e.preventDefault(),this._strokeEnd(e.changedTouches[0]))},this._handlePointerStart=e=>{this._drawningStroke=!0,e.preventDefault(),this._strokeBegin(e)},this._handlePointerMove=e=>{this._drawningStroke&&(e.preventDefault(),this._strokeMoveUpdate(e))},this._handlePointerEnd=e=>{this._drawningStroke&&(e.preventDefault(),this._drawningStroke=!1,this._strokeEnd(e))},this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.dotSize=i.dotSize||0,this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=i.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?function D(u,t=250){let n,s,r,i=0,e=null;const c=()=>{i=Date.now(),e=null,n=u.apply(s,r),e||(s=null,r=[])};return function(...a){const d=Date.now(),l=t-(d-i);return s=this,r=a,l<=0||l>t?(e&&(clearTimeout(e),e=null),i=d,n=u.apply(s,r),e||(s=null,r=[])):e||(e=window.setTimeout(c,l)),n}}(x.prototype._strokeUpdate,this.throttle):x.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:i}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,i.width,i.height),t.fillRect(0,0,i.width,i.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,i={}){return new Promise((e,n)=>{const s=new Image,r=i.ratio||window.devicePixelRatio||1,c=i.width||this.canvas.width/r,h=i.height||this.canvas.height/r,a=i.xOffset||0,d=i.yOffset||0;this._reset(this._getPointGroupOptions()),s.onload=()=>{this._ctx.drawImage(s,a,d,c,h),e()},s.onerror=l=>{n(l)},s.crossOrigin="anonymous",s.src=t,this._isEmpty=!1})}toDataURL(t="image/png",i){return"image/svg+xml"===t?("object"!=typeof i&&(i=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(i))}`):("number"!=typeof i&&(i=void 0),this.canvas.toDataURL(t,i))}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:i=!0}={}){i&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t}));const i=this._getPointGroupOptions(),e=Object.assign(Object.assign({},i),{points:[]});this._data.push(e),this._reset(i),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const s=this._createPoint(t.clientX,t.clientY,void 0!==t.pressure?t.pressure:void 0!==t.force?t.force:0),r=this._data[this._data.length-1],c=r.points,h=c.length>0&&c[c.length-1],a=!!h&&s.distanceTo(h)<=this.minDistance,d=this._getPointGroupOptions(r);if(!h||!h||!a){const l=this._addPoint(s,d);h?l&&this._drawCurve(l,d):this._drawDot(s,d),c.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,i,e){const n=this.canvas.getBoundingClientRect();return new w(t-n.left,i-n.top,e,(new Date).getTime())}_addPoint(t,i){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const n=this._calculateCurveWidths(e[1],e[2],i),s=y.fromPoints(e,n);return e.shift(),s}return null}_calculateCurveWidths(t,i,e){const n=e.velocityFilterWeight*i.velocityFrom(t)+(1-e.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(n,e),r={end:s,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=s,r}_strokeWidth(t,i){return Math.max(i.maxWidth/(t+1),i.minWidth)}_drawCurveSegment(t,i,e){const n=this._ctx;n.moveTo(t,i),n.arc(t,i,e,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,i){const e=this._ctx,n=t.endWidth-t.startWidth,s=2*Math.ceil(t.length());e.beginPath(),e.fillStyle=i.penColor;for(let r=0;r<s;r+=1){const c=r/s,h=c*c,a=h*c,d=1-c,l=d*d,p=l*d;let v=p*t.startPoint.x;v+=3*l*c*t.control1.x,v+=3*d*h*t.control2.x,v+=a*t.endPoint.x;let m=p*t.startPoint.y;m+=3*l*c*t.control1.y,m+=3*d*h*t.control2.y,m+=a*t.endPoint.y;const f=Math.min(t.startWidth+a*n,i.maxWidth);this._drawCurveSegment(v,m,f)}e.closePath(),e.fill()}_drawDot(t,i){const e=this._ctx,n=i.dotSize>0?i.dotSize:(i.minWidth+i.maxWidth)/2;e.beginPath(),this._drawCurveSegment(t.x,t.y,n),e.closePath(),e.fillStyle=i.penColor,e.fill()}_fromData(t,i,e){for(const n of t){const{points:s}=n,r=this._getPointGroupOptions(n);if(s.length>1)for(let c=0;c<s.length;c+=1){const h=s[c],a=new w(h.x,h.y,h.pressure,h.time);0===c&&this._reset(r);const d=this._addPoint(a,r);d&&i(d,r)}else this._reset(r),e(s[0],r)}}toSVG({includeBackgroundColor:t=!1}={}){const i=this._data,e=Math.max(window.devicePixelRatio||1,1),r=this.canvas.width/e,c=this.canvas.height/e,h=document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.setAttribute("xmlns","http://www.w3.org/2000/svg"),h.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),h.setAttribute("viewBox",`0 0 ${r} ${c}`),h.setAttribute("width",r.toString()),h.setAttribute("height",c.toString()),t&&this.backgroundColor){const a=document.createElement("rect");a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("fill",this.backgroundColor),h.appendChild(a)}return this._fromData(i,(a,{penColor:d})=>{const l=document.createElement("path");if(!(isNaN(a.control1.x)||isNaN(a.control1.y)||isNaN(a.control2.x)||isNaN(a.control2.y))){const p=`M ${a.startPoint.x.toFixed(3)},${a.startPoint.y.toFixed(3)} C ${a.control1.x.toFixed(3)},${a.control1.y.toFixed(3)} ${a.control2.x.toFixed(3)},${a.control2.y.toFixed(3)} ${a.endPoint.x.toFixed(3)},${a.endPoint.y.toFixed(3)}`;l.setAttribute("d",p),l.setAttribute("stroke-width",(2.25*a.endWidth).toFixed(3)),l.setAttribute("stroke",d),l.setAttribute("fill","none"),l.setAttribute("stroke-linecap","round"),h.appendChild(l)}},(a,{penColor:d,dotSize:l,minWidth:p,maxWidth:v})=>{const m=document.createElement("circle");m.setAttribute("r",(l>0?l:(p+v)/2).toString()),m.setAttribute("cx",a.x.toString()),m.setAttribute("cy",a.y.toString()),m.setAttribute("fill",d),h.appendChild(m)}),h.outerHTML}}var M=g(4499);const W=["canvas"],T=function(u,t,i){return{small:u,medium:t,large:i}};let L=(()=>{class u{constructor(){this.variant="medium",this.imageChanged=new o.vpe,this.penColor="black",this.backgroundColor="transparent"}ngOnInit(){switch(this.variant){case"small":this.width=400;break;case"medium":this.width=600;break;default:this.width=800}this.height=this.width/2}ngAfterViewInit(){if(!this.canvasRef)throw new Error("No canvasRef found.");this.signaturePad=new x(this.canvasRef.nativeElement,{penColor:this.penColor,backgroundColor:this.backgroundColor,maxWidth:2,minWidth:1}),this.signaturePad.penColor=this.penColor,this.signaturePad.on(),this.signaturePad.addEventListener("endStroke",()=>{const i=this.signaturePad?.toDataURL();this.imageChanged.emit(i)})}clearPad(){this.signaturePad?.clear(),this.imageChanged.emit(void 0)}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["dd-signature"]],viewQuery:function(e,n){if(1&e&&o.Gf(W,7,o.SBq),2&e){let s;o.iGM(s=o.CRH())&&(n.canvasRef=s.first)}},inputs:{variant:"variant"},outputs:{imageChanged:"imageChanged"},standalone:!0,features:[o.jDz],decls:4,vars:9,consts:[[1,"signature-pad",3,"ngClass"],[1,"dd-white-bg","border","border-radius-6","elevation-01",3,"width","height"],["canvas",""],[1,"signature-clear-button",3,"text","color","buttonClick"]],template:function(e,n){1&e&&(o.TgZ(0,"div",0),o._UZ(1,"canvas",1,2),o.TgZ(3,"dd-button",3),o.NdJ("buttonClick",function(){return n.clearPad()}),o.qZA()()),2&e&&(o.Q6J("ngClass",o.kEZ(5,T,"small"===n.variant,"medium"===n.variant,"large"===n.variant)),o.xp6(1),o.Q6J("width",n.width)("height",n.height),o.xp6(2),o.Q6J("text","Clear")("color","primary-light"))},dependencies:[_.ez,_.mk,b.hJ,M.r],styles:[".signature-pad[_ngcontent-%COMP%]{position:relative}.signature-pad.small[_ngcontent-%COMP%]{width:402px;height:202px}.signature-pad.medium[_ngcontent-%COMP%]{width:602px;height:302px}.signature-pad.large[_ngcontent-%COMP%]{width:802px;height:402px}.signature-pad[_ngcontent-%COMP%]   .signature-clear-button[_ngcontent-%COMP%]{position:absolute;right:16px;top:16px}"]})}return u})();var A=g(3350),O=g(870),F=g(2733),U=g(9635);function N(u,t){if(1&u&&(o.ynx(0),o._UZ(1,"img",4),o.BQk()),2&u){const i=o.oxw();o.xp6(1),o.Q6J("src",i.signatureImage,o.LSH)}}let $=(()=>{class u extends O.Jo{constructor(){super("SignatureComponent"),this.codeDemos.Signature='<dd-signature [variant]="\'medium\'" (imageChanged)="showImage($event)"></dd-signature>',this.codeDemos["Signature event"]="\n        showImage(data?: string): void {\n    this.signatureImage = data;\n}"}showImage(i){this.signatureImage=i}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275cmp=o.Xpm({type:u,selectors:[["app-signature-demo"]],standalone:!0,features:[o.qOj,o.jDz],decls:10,vars:6,consts:[[3,"documentationData","codeDemos"],[3,"variant","imageChanged"],[1,"h-300"],[4,"ngIf"],[3,"src"]],template:function(e,n){1&e&&(o.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-component-documentation",0),o.ALo(3,"async"),o.TgZ(4,"div")(5,"div"),o._uU(6,"Start drawing"),o.qZA(),o.TgZ(7,"dd-signature",1),o.NdJ("imageChanged",function(r){return n.showImage(r)}),o.qZA(),o.TgZ(8,"div",2),o.YNc(9,N,2,1,"ng-container",3),o.qZA()()()()()),2&e&&(o.xp6(2),o.Q6J("documentationData",o.lcZ(3,4,n.documentationData$))("codeDemos",n.codeDemos),o.xp6(5),o.Q6J("variant","medium"),o.xp6(2),o.Q6J("ngIf",n.signatureImage))},dependencies:[_.ez,_.O5,_.Ov,L,A.Z,S.dT,F.A,U.e]})}return u})()}}]);