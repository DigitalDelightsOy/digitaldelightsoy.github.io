"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[4322],{9618:(E,a,o)=>{o.d(a,{I:()=>m});var _=o(6814),p=o(4177),d=o(7326),t=o(5879),l=o(6364);function g(i,u){if(1&i&&(t.ynx(0),t.TgZ(1,"div",4),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw(2);t.xp6(2),t.Oqu(n.header)}}function e(i,u){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",1),t.YNc(2,g,3,1,"ng-container",0),t.TgZ(3,"pre"),t._uU(4,"            "),t._UZ(5,"code",2),t._uU(6,"\n        "),t.qZA(),t.TgZ(7,"div",3),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.copyToClipBoard())}),t._uU(8," Copy "),t.qZA()(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(2),t.Q6J("ngIf",n.header),t.xp6(3),t.Q6J("highlight",n.codeString)("lineNumbers",!1)}}let m=(()=>{class i{constructor(n){this.notificationService=n}copyToClipBoard(){this.codeString&&navigator.clipboard&&(navigator.clipboard.writeText(this.codeString.toString().trim()),this.notificationService.showMessage("Copied!"))}static#t=this.\u0275fac=function(c){return new(c||i)(t.Y36(l.cw))};static#o=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-code-preview"]],inputs:{header:"header",codeString:"codeString"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"code-example"],[3,"highlight","lineNumbers"],[1,"copy-button","p-spacer-xmini","cursor-pointer","border-radius-6","dd-primary-50",3,"click"],[1,"code-title"]],template:function(c,r){1&c&&t.YNc(0,e,9,3,"ng-container",0),2&c&&t.Q6J("ngIf",r.codeString)},dependencies:[_.ez,_.O5,d._l,d.y$,p.hJ],styles:[".code-example[_ngcontent-%COMP%]{position:relative;overflow:auto}.code-example[_ngcontent-%COMP%]   .code-title[_ngcontent-%COMP%]{position:absolute;left:0;top:12px}.code-example[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;right:12px;top:48px;opacity:50%}"]})}return i})()},4322:(E,a,o)=>{o.r(a),o.d(a,{SortPipeDemoComponent:()=>u});var _=o(6814),p=o(4243),d=o(8008),t=o(9618),l=o(6382),g=o(870),e=o(5879),m=o(2733),i=o(9635);let u=(()=>{class n extends g.oE{constructor(){super("SortPipe")}static#t=this.\u0275fac=function(s){return new(s||n)};static#o=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-sort-pipe-demo"]],standalone:!0,features:[e.qOj,e.jDz],decls:8,vars:4,consts:[[3,"documentationData"],[1,"flex-row","flex-x-start","flex-y-center","g-spacer-basic"],[1,"w-200"],[1,"w-600",3,"codeString"]],template:function(s,P){1&s&&(e.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-pipe-documentation",0),e.ALo(3,"async"),e.TgZ(4,"div",1)(5,"div",2),e._uU(6," Sort "),e.qZA(),e._UZ(7,"app-code-preview",3),e.qZA()()()()),2&s&&(e.xp6(2),e.Q6J("documentationData",e.lcZ(3,2,P.documentationData$)),e.xp6(5),e.Q6J("codeString","{{[1,2,3,4] | ddsort: sortFunc}}"))},dependencies:[_.ez,_.Ov,d.qE,p.dT,m.A,i.e,l.p,t.I]})}return n})()}}]);