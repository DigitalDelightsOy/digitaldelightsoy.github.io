"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[5359],{4243:(d,c,o)=>{o.d(c,{dT:()=>i.d});var i=o(3732)},5359:(d,c,o)=>{o.r(c),o.d(c,{ProgressBarDemoComponent:()=>F});var i=o(6814),p=o(4177),u=o(4243),m=o(6905),t=o(5879);let x=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[i.ez,m.Q]})}return e})();var h=o(870),f=o(3350),v=o(2733),_=o(9635),C=o(4729);const g=function(e){return{"dd-primary-300-fg":e}};function b(e,a){if(1&e&&(t.TgZ(0,"div",7)(1,"div",8),t._UZ(2,"dd-icon",9),t.qZA(),t.TgZ(3,"div",10),t._UZ(4,"div",11),t.qZA()()),2&e){const s=a.$implicit,r=a.index,n=t.oxw(3);t.Q6J("ngClass",t.VKq(2,g,r>n.currentStateIndex)),t.xp6(2),t.Q6J("icon",s.icon)}}function y(e,a){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,b,5,4,"div",6),t.qZA()),2&e){const s=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",s.states)}}const S=function(e){return{"max-width":e}},B=function(e){return{"text-align-end":e}};function Z(e,a){if(1&e&&(t.TgZ(0,"div",13)(1,"div",14),t._uU(2),t.qZA()()),2&e){const s=a.$implicit,r=a.index,n=t.oxw(3);t.Q6J("ngClass",t.VKq(4,g,r>n.currentStateIndex)),t.xp6(1),t.Q6J("ngStyle",t.VKq(6,S,n.labelSpace+"px"))("ngClass",t.VKq(8,B,r+1===(null==n.states?null:n.states.length))),t.xp6(1),t.hij(" ",s.label," ")}}function I(e,a){if(1&e&&(t.TgZ(0,"div",5),t.YNc(1,Z,3,10,"div",12),t.qZA()),2&e){const s=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",s.states)}}const w=function(e){return{width:e}};function P(e,a){if(1&e&&(t.ynx(0),t.YNc(1,y,2,1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"div",4),t.qZA(),t.YNc(4,I,2,1,"div",2),t.BQk()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",(null==s.states?null:s.states.length)&&void 0!==s.currentStateIndex),t.xp6(2),t.Q6J("ngStyle",t.VKq(4,w,s.progressPercentage+"%"))("ngClass",s.barColor),t.xp6(1),t.Q6J("ngIf",(null==s.states?null:s.states.length)&&void 0!==s.currentStateIndex)}}function A(e,a){if(1&e&&(t.TgZ(0,"div",22)(1,"div",23),t._UZ(2,"dd-icon",9),t.qZA(),t.TgZ(3,"div",24),t._UZ(4,"div",11),t.qZA()()),2&e){const s=a.$implicit,r=a.index,n=t.oxw(3);t.Q6J("ngClass",t.VKq(2,g,r<n.statesReversed.length-1-n.currentStateIndex)),t.xp6(2),t.Q6J("icon",s.icon)}}function J(e,a){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,A,5,4,"div",21),t.qZA()),2&e){const s=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",s.statesReversed)}}function T(e,a){if(1&e&&(t.TgZ(0,"div",27)(1,"div",28),t._uU(2),t.qZA()()),2&e){const s=a.$implicit,r=a.index,n=t.oxw(3);t.Q6J("ngClass",t.VKq(2,g,r<n.statesReversed.length-1-n.currentStateIndex)),t.xp6(2),t.hij(" ",s.label," ")}}function L(e,a){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,T,3,4,"div",26),t.qZA()),2&e){const s=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",s.statesReversed)}}const Q=function(e){return{"offset-bar-vertical":e}},O=function(e){return{"min-height":e}},M=function(e){return{height:e}};function D(e,a){if(1&e&&(t.TgZ(0,"div",15),t.YNc(1,J,2,1,"div",16),t.TgZ(2,"div",17),t._UZ(3,"div",18),t.qZA(),t.YNc(4,L,2,1,"div",19),t.qZA()),2&e){const s=t.oxw();t.xp6(1),t.Q6J("ngIf",(null==s.states?null:s.states.length)&&void 0!==s.currentStateIndex),t.xp6(1),t.Q6J("ngClass",t.VKq(6,Q,null==s.states?null:s.states.length))("ngStyle",t.VKq(8,O,s.verticalBarMinHeight+"px")),t.xp6(1),t.Q6J("ngStyle",t.VKq(10,M,s.progressPercentage+"%"))("ngClass",s.barColor),t.xp6(1),t.Q6J("ngIf",(null==s.states?null:s.states.length)&&void 0!==s.currentStateIndex)}}let V=(()=>{class e{constructor(s){this.el=s,this.progress=0,this.max=100,this.vertical=!1}get progressPercentage(){if(this.states&&this.states.length>0&&void 0!==this.currentStateIndex){if(this.currentStateIndex>=this.states.length-1)return 100;const s=this.vertical?this.el.nativeElement.getBoundingClientRect().height:this.el.nativeElement.getBoundingClientRect().width,r=8/s;return 0===this.currentStateIndex?100*(16/s+r):Math.min(100*(this.currentStateIndex*(s/(this.states.length-1))/s+r),100)}return this.progress?this.progress>this.max?100:this.progress/this.max*100:16/1083*100}get labelSpace(){const s=this.vertical?this.el.nativeElement.getBoundingClientRect().height:this.el.nativeElement.getBoundingClientRect().width;if(this.states?.length){const r=s>600?16:8;return s/(this.states?.length-1)*(2/3)-r}return 0}get verticalBarMinHeight(){return this.states?.length?80*this.states?.length:200}get statesReversed(){return this.states?.slice().reverse()??[]}get barColor(){return this.states&&this.states.length>0&&void 0!==this.currentStateIndex?this.currentStateIndex<this.states.length&&this.currentStateIndex>=0&&this.states[this.currentStateIndex]?.color?this.states[this.currentStateIndex].color??"":this.currentStateIndex+1>=this.states.length?"dd-success":"dd-accent":this.progress>=this.max?"dd-success":"dd-accent"}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(t.SBq))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["dd-progress-bar"]],inputs:{progress:"progress",max:"max",states:"states",currentStateIndex:"currentStateIndex",vertical:"vertical"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["verticalBarTemplate",""],["fxLayout","row","fxLayoutAlign","space-between start",4,"ngIf"],["id","progress-bar",1,"w-100-p","border-radius-6","dd-primary-100-bg","h-16"],[1,"border-radius-6","h-16","progress",3,"ngStyle","ngClass"],["fxLayout","row","fxLayoutAlign","space-between start"],["fxLayout","column","fxLayoutAlign","start center","class","w-0 h-36 state",3,"ngClass",4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutAlign","start center",1,"w-0","h-36","state",3,"ngClass"],[1,"pb-spacer-solo"],[3,"icon"],["fxLayout","row","fxLayoutAlign","center center",1,"w-32","h-0","pt-spacer-xmini"],[1,"h-8","w-8","border-radius-100-p","dd-white-bg","dot"],["fxLayout","column","class","w-0 state",3,"ngClass",4,"ngFor","ngForOf"],["fxLayout","column",1,"w-0","state",3,"ngClass"],[1,"label","pt-spacer-mini",3,"ngStyle","ngClass"],["fxLayout","row",1,"h-100-p"],["fxLayout","column","fxLayoutAlign","space-between start",4,"ngIf"],["id","progress-bar-vertical","fxLayout","column","fxLayoutAlign","end start",1,"border-radius-6","dd-primary-100-bg","w-16",3,"ngClass","ngStyle"],[1,"border-radius-6","w-16","progress",3,"ngStyle","ngClass"],["fxLayout","column","fxLayoutAlign","space-between start","class","py-spacer-xmini",4,"ngIf"],["fxLayout","column","fxLayoutAlign","space-between start"],["fxLayout","row","fxLayoutAlign","start center","class","h-0 w-36 state",3,"ngClass",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"h-0","w-36","state",3,"ngClass"],[1,"pr-spacer-solo"],["fxLayout","column","fxLayoutAlign","center center",1,"h-32","w-0","pl-spacer-xmini"],["fxLayout","column","fxLayoutAlign","space-between start",1,"py-spacer-xmini"],["fxLayout","row","class","h-0 state",3,"ngClass",4,"ngFor","ngForOf"],["fxLayout","row",1,"h-0","state",3,"ngClass"],[1,"label-vertical","pl-spacer-mini"]],template:function(r,n){if(1&r&&(t.YNc(0,P,5,6,"ng-container",0),t.YNc(1,D,5,12,"ng-template",null,1,t.W1O)),2&r){const l=t.MAs(2);t.Q6J("ngIf",!n.vertical)("ngIfElse",l)}},dependencies:[i.mk,i.sg,i.O5,i.PC,C.o],styles:["[_nghost-%COMP%]   .state[_ngcontent-%COMP%]{align-items:center!important}[_nghost-%COMP%]   .state[_ngcontent-%COMP%]:first-of-type{align-items:flex-start!important}[_nghost-%COMP%]   .state[_ngcontent-%COMP%]:last-of-type{align-items:flex-end!important}[_nghost-%COMP%]   .progress[_ngcontent-%COMP%]{transition-property:background-color,width,height;transition-duration:.4s;transition-timing-function:ease}[_nghost-%COMP%]   .dot[_ngcontent-%COMP%]{z-index:2}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{inline-size:max-content}[_nghost-%COMP%]   .text-align-end[_ngcontent-%COMP%]{text-align:end}"],changeDetection:0})}return e})();var q=o(4499);let F=(()=>{class e extends h.Jo{constructor(){super("ProgressBarComponent"),this.progressBarState=0,this.progressBarVerticalState=0,this.progressBarStates=[{icon:this.testIcon,label:"Order received"},{icon:this.testIcon,label:"Order packed"},{icon:this.testIcon,label:"In shipping"},{icon:this.testIcon,label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",color:"dd-accent"},{icon:this.testIcon,label:"Completed"}],this.codeDemos["Progress bar"]='<dd-progress-bar [progress]="5" [max]="10"></dd-progress-bar>',this.codeDemos["Vertical progress bar"]='<dd-progress-bar [vertical]="true" [progress]="4" [max]="10"></dd-progress-bar>',this.codeDemos["Progress bar with states"]='\n<dd-progress-bar [vertical]="true"\n    [currentStateIndex]="progressBarVerticalState"\n    [states]="progressBarStates">\n</dd-progress-bar>',this.codeDemos["Example states"]="\nprogressBarStates: ProgressBarState[] = [\n    { icon: 'icon-string', label: 'Order received' },\n    { icon: 'icon-string', label: 'Order packed' }\n];"}progressBarAction(){const s=this.progressBarStates.length-1;this.progressBarState=this.progressBarState>s?0:this.progressBarState+1,this.progressBarVerticalState=this.progressBarVerticalState>s?0:this.progressBarVerticalState+1}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-progress-bar-demo"]],standalone:!0,features:[t.qOj,t.jDz],decls:23,vars:32,consts:[[3,"documentationData","codeDemos"],[1,"demo-container","my-spacer-basic"],[3,"progress"],[3,"progress","max"],[1,"my-spacer-basic"],[1,"mb-spacer-basic"],[3,"text","buttonClick"],[3,"currentStateIndex","states"],[3,"vertical","currentStateIndex","states"],[1,"flex-row","g-spacer-large","mt-spacer-basic"],[3,"vertical","progress","max"]],template:function(r,n){1&r&&(t.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-component-documentation",0),t.ALo(3,"async"),t.TgZ(4,"div",1),t._UZ(5,"dd-progress-bar")(6,"dd-progress-bar",2)(7,"dd-progress-bar",3)(8,"dd-progress-bar",3)(9,"dd-progress-bar",3),t.qZA(),t.TgZ(10,"div",4)(11,"div",5)(12,"dd-button",6),t.NdJ("buttonClick",function(){return n.progressBarAction()}),t.qZA()(),t._uU(13," TODO: this is sometimes initialized to max value (bar shows max progress) "),t._UZ(14,"dd-progress-bar",7),t.qZA(),t.TgZ(15,"div",4),t._UZ(16,"dd-progress-bar",8),t.TgZ(17,"div",9),t._UZ(18,"dd-progress-bar",10)(19,"dd-progress-bar",10)(20,"dd-progress-bar",10)(21,"dd-progress-bar",10)(22,"dd-progress-bar",10),t.qZA()()()()()),2&r&&(t.xp6(2),t.Q6J("documentationData",t.lcZ(3,30,n.documentationData$))("codeDemos",n.codeDemos),t.xp6(4),t.Q6J("progress",10),t.xp6(1),t.Q6J("progress",5)("max",10),t.xp6(1),t.Q6J("progress",4)("max",5),t.xp6(1),t.Q6J("progress",5)("max",5),t.xp6(3),t.Q6J("text","Test"),t.xp6(2),t.Q6J("currentStateIndex",n.progressBarState)("states",n.progressBarStates),t.xp6(2),t.Q6J("vertical",!0)("currentStateIndex",n.progressBarVerticalState)("states",n.progressBarStates),t.xp6(2),t.Q6J("vertical",!0)("progress",0)("max",10),t.xp6(1),t.Q6J("vertical",!0)("progress",2)("max",10),t.xp6(1),t.Q6J("vertical",!0)("progress",4)("max",10),t.xp6(1),t.Q6J("vertical",!0)("progress",6)("max",10),t.xp6(1),t.Q6J("vertical",!0)("progress",10)("max",10))},dependencies:[i.ez,i.Ov,f.Z,u.dT,v.A,_.e,x,V,p.hJ,q.r]})}return e})()}}]);