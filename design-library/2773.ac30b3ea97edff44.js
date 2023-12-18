"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[2773,7391,3350,9097,3019,2754,8789],{4243:(Z,l,a)=>{a.d(l,{dT:()=>s.d});var s=a(3732)},9618:(Z,l,a)=>{a.d(l,{I:()=>x});var s=a(6814),u=a(4177),m=a(7326),e=a(5879),C=a(6364);function i(c,D){if(1&c&&(e.ynx(0),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.BQk()),2&c){const _=e.oxw(2);e.xp6(2),e.Oqu(_.header)}}function t(c,D){if(1&c){const _=e.EpF();e.ynx(0),e.TgZ(1,"div",1),e.YNc(2,i,3,1,"ng-container",0),e.TgZ(3,"pre"),e._uU(4,"            "),e._UZ(5,"code",2),e._uU(6,"\n        "),e.qZA(),e.TgZ(7,"div",3),e.NdJ("click",function(){e.CHM(_);const p=e.oxw();return e.KtG(p.copyToClipBoard())}),e._uU(8," Copy "),e.qZA()(),e.BQk()}if(2&c){const _=e.oxw();e.xp6(2),e.Q6J("ngIf",_.header),e.xp6(3),e.Q6J("highlight",_.codeString)("lineNumbers",!1)}}let x=(()=>{class c{constructor(_){this.notificationService=_}copyToClipBoard(){this.codeString&&navigator.clipboard&&(navigator.clipboard.writeText(this.codeString.toString().trim()),this.notificationService.showMessage("Copied!"))}static#t=this.\u0275fac=function(g){return new(g||c)(e.Y36(C.cw))};static#n=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-code-preview"]],inputs:{header:"header",codeString:"codeString"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"code-example"],[3,"highlight","lineNumbers"],[1,"copy-button","p-spacer-xmini","cursor-pointer","border-radius-6","dd-primary-50",3,"click"],[1,"code-title"]],template:function(g,p){1&g&&e.YNc(0,t,9,3,"ng-container",0),2&g&&e.Q6J("ngIf",p.codeString)},dependencies:[s.ez,s.O5,m._l,m.y$,u.hJ],styles:[".code-example[_ngcontent-%COMP%]{position:relative;overflow:auto}.code-example[_ngcontent-%COMP%]   .code-title[_ngcontent-%COMP%]{position:absolute;left:0;top:12px}.code-example[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;right:12px;top:48px;opacity:50%}"]})}return c})()},3350:(Z,l,a)=>{a.d(l,{Z:()=>b});var s=a(6814),u=a(7326),m=a(8008),e=a(4156),C=a(9618),i=a(870),t=a(5879),x=a(4974),c=a(690),D=a(7030);function _(o,r){if(1&o&&(t.ynx(0),t._UZ(1,"app-code-preview",12),t.BQk()),2&o){const n=r.$implicit,d=t.oxw(3);t.xp6(1),t.Q6J("header",n)("codeString",d.trimmedCodes[n])}}function g(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",10),t.YNc(2,_,2,2,"ng-container",11),t.qZA(),t.BQk()),2&o){const n=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",n.ObjectKeys(n.trimmedCodes))}}function p(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"span",9),t._uU(2),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",n.defaultValue," ")}}function h(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td",14)(2,"span",16),t._uU(3),t.qZA()(),t.TgZ(4,"td",15)(5,"span",9),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t.YNc(8,p,3,1,"ng-container",0),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"div",6),t.ALo(11,"safe"),t.qZA()()),2&o){const n=r.$implicit;let d;t.xp6(3),t.hij(" ",n.name," "),t.xp6(3),t.hij(" ",n.type," "),t.xp6(2),t.Q6J("ngIf",n.defaultValue),t.xp6(2),t.Q6J("innerHtml",t.xi3(11,4,null!==(d=n.description)&&void 0!==d?d:"","html"),t.oJD)}}function T(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h6"),t._uU(3,"Inputs"),t.qZA(),t.TgZ(4,"table",5)(5,"thead",13)(6,"tr")(7,"th",14),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",15),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Default"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Description"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,h,12,7,"tr",11),t.qZA()()(),t.BQk()),2&o){const n=t.oxw(2);t.xp6(16),t.Q6J("ngForOf",n.documentationData.inputsClass)}}function v(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td",14)(2,"span",16),t._uU(3),t.qZA()(),t.TgZ(4,"td",15)(5,"span",9),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._UZ(8,"div",6),t.ALo(9,"safe"),t.qZA()()),2&o){const n=r.$implicit;let d;t.xp6(3),t.hij(" ",n.name," "),t.xp6(3),t.hij(" ",n.type," "),t.xp6(2),t.Q6J("innerHtml",t.xi3(9,3,null!==(d=n.description)&&void 0!==d?d:"","html"),t.oJD)}}function f(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h6"),t._uU(3,"Outputs"),t.qZA(),t.TgZ(4,"table",5)(5,"thead",13)(6,"tr")(7,"th",14),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",15),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Description"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,v,10,6,"tr",11),t.qZA()()(),t.BQk()),2&o){const n=t.oxw(2);t.xp6(14),t.Q6J("ngForOf",n.documentationData.outputsClass)}}const E=function(){return["css"]};function y(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"pre"),t._uU(2,"                        "),t._UZ(3,"code",20),t._uU(4,"\n                    "),t.qZA(),t.BQk()),2&o){const n=r.$implicit;t.xp6(3),t.Q6J("highlight",n.data)("languages",t.DdM(3,E))("lineNumbers",!0)}}const A=function(){return["typescript"]};function P(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",17)(2,"dd-tabs-v2")(3,"dd-tab",18)(4,"div",19)(5,"pre"),t._uU(6,"                        "),t._UZ(7,"code",20),t._uU(8,"\n                    "),t.qZA()()(),t.TgZ(9,"dd-tab",18)(10,"pre"),t._uU(11,"                    "),t._UZ(12,"code",21),t._uU(13,"\n                "),t.qZA()(),t.TgZ(14,"dd-tab",18),t.YNc(15,y,5,4,"ng-container",11),t.qZA()()(),t.BQk()),2&o){const n=t.oxw(2);t.xp6(3),t.Q6J("title","TS")("active",!0),t.xp6(4),t.Q6J("highlight",n.documentationData.sourceCode)("languages",t.DdM(12,A))("lineNumbers",!0),t.xp6(2),t.Q6J("title","HTML")("active",!1),t.xp6(3),t.Q6J("highlight",n.documentationData.templateData)("lineNumbers",!0),t.xp6(2),t.Q6J("title","CSS")("active",!1),t.xp6(1),t.Q6J("ngForOf",n.documentationData.styleUrlsData)}}function M(o,r){if(1&o&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Component"),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"div",6),t.ALo(9,"safe"),t.qZA()(),t.TgZ(10,"div",7)(11,"h6"),t._uU(12,"Demo"),t.qZA(),t.Hsn(13),t.YNc(14,g,3,1,"ng-container",0),t.qZA(),t.TgZ(15,"div",7)(16,"h6"),t._uU(17,"Component"),t.qZA(),t.TgZ(18,"table",5)(19,"tbody")(20,"tr")(21,"td",8),t._uU(22,"Name"),t.qZA(),t.TgZ(23,"td")(24,"span",9),t._uU(25),t.qZA()()(),t.TgZ(26,"tr")(27,"td",8),t._uU(28,"Selector"),t.qZA(),t.TgZ(29,"td")(30,"span",9),t._uU(31),t.qZA()()(),t.TgZ(32,"tr")(33,"td",8),t._uU(34,"Import"),t.qZA(),t.TgZ(35,"td")(36,"span",9),t._uU(37),t.qZA()()(),t.TgZ(38,"tr")(39,"td",8),t._uU(40,"ChangeDetection"),t.qZA(),t.TgZ(41,"td")(42,"span",9),t._uU(43),t.qZA()()()()()(),t.YNc(44,T,17,1,"ng-container",0),t.YNc(45,f,15,1,"ng-container",0),t.YNc(46,P,16,13,"ng-container",0),t.ALo(47,"async"),t.BQk()),2&o){const n=t.oxw();t.xp6(4),t.Oqu(n.readableName),t.xp6(4),t.Q6J("innerHtml",t.xi3(9,10,n.documentationData.description,"html"),t.oJD),t.xp6(6),t.Q6J("ngIf",n.trimmedCodes),t.xp6(11),t.hij(" ",n.documentationData.name," "),t.xp6(6),t.hij(" ",n.documentationData.selector," "),t.xp6(6),t.hij(" ",n.importPath," "),t.xp6(6),t.hij(" ",n.documentationData.changeDetection?n.documentationData.changeDetection:"ChangeDetectionStrategy.Default"," "),t.xp6(1),t.Q6J("ngIf",null==n.documentationData.inputsClass?null:n.documentationData.inputsClass.length),t.xp6(1),t.Q6J("ngIf",null==n.documentationData.outputsClass?null:n.documentationData.outputsClass.length),t.xp6(1),t.Q6J("ngIf",t.lcZ(47,13,n.showCode$))}}const U=["*"];let b=(()=>{class o extends i.Kr{static#t=this.\u0275fac=function(){let n;return function(O){return(n||(n=t.n5z(o)))(O||o)}}();static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-component-documentation"]],standalone:!0,features:[t.qOj,t.jDz],ngContentSelectors:U,decls:1,vars:1,consts:[[4,"ngIf"],[1,"mt-spacer-basic"],[1,"flex-row","flex-x-start","flex-y-center"],[1,"h6","bold","mr-spacer-large"],[1,"text-body-1","dd-primary-400-fg"],[1,"text-body-2"],[3,"innerHtml"],[1,"my-spacer-large"],[1,"strong"],[1,"code"],[1,"my-spacer-large","flex-column","g-spacer-basic"],[4,"ngFor","ngForOf"],[3,"header","codeString"],[1,"caption"],[1,"name"],[1,"type"],[1,"text-truncate","strong"],[1,"mt-spacer-large"],[3,"title","active"],[1,"code-container"],[3,"highlight","languages","lineNumbers"],[3,"highlight","lineNumbers"]],template:function(d,O){1&d&&(t.F$t(),t.YNc(0,M,48,15,"ng-container",0)),2&d&&t.Q6J("ngIf",O.documentationData)},dependencies:[s.ez,s.sg,s.O5,s.Ov,m.qE,x.M,u._l,u.y$,e.Sw,c.i,D.F,C.I],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;border-spacing:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{border-bottom:1px solid #e8edeb}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;border-bottom:1px solid #e8edeb;padding:5px 8px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 8px;border:none}table[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:240px;max-width:240px}table[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{width:280px;max-width:280px}"]})}return o})()},2773:(Z,l,a)=>{a.r(l),a.d(l,{SearchInputDemoComponent:()=>D});var s=a(6814),u=a(4243),m=a(2177),e=a(870),C=a(3350),i=a(5879),t=a(2733),x=a(9635),c=a(2618);let D=(()=>{class _ extends e.Jo{constructor(){super("SearchInputComponent"),this.codeDemos["Search input"]='\n        <dd-search-input [icon]="\'dd-icon-search\'"\n            [currentValue]="\'Initial value\'"\n            [placeHolder]="\'Type something\'"\n            [debounceTime]="200"\n            (inputValueChanged)="onSearchTermChanged($event)">\n</dd-search-input>'}onSearchTermChanged(p){console.log("search input test",p)}static#t=this.\u0275fac=function(h){return new(h||_)};static#n=this.\u0275cmp=i.Xpm({type:_,selectors:[["app-search-input-demo"]],standalone:!0,features:[i.qOj,i.jDz],decls:6,vars:8,consts:[[3,"documentationData","codeDemos"],[1,"w-400"],[3,"icon","currentValue","placeHolder","debounceTime","inputValueChanged"]],template:function(h,T){1&h&&(i.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-component-documentation",0),i.ALo(3,"async"),i.TgZ(4,"div",1)(5,"dd-search-input",2),i.NdJ("inputValueChanged",function(f){return T.onSearchTermChanged(f)}),i.qZA()()()()()),2&h&&(i.xp6(2),i.Q6J("documentationData",i.lcZ(3,6,T.documentationData$))("codeDemos",T.codeDemos),i.xp6(3),i.Q6J("icon","dd-icon-search")("currentValue","Initial value")("placeHolder","Type something")("debounceTime",200))},dependencies:[C.Z,u.dT,t.A,x.e,s.ez,s.Ov,m.gP,c.J]})}return _})()}}]);