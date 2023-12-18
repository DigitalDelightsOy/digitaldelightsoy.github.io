"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[9145,7391,3350,9097,3019,2754,8789],{4243:(O,u,_)=>{_.d(u,{dT:()=>d.d});var d=_(3732)},9145:(O,u,_)=>{_.r(u),_.d(u,{ButtonDemoComponent:()=>p});var d=_(6814),C=_(4177),h=_(4243),o=_(870),D=_(3350),e=_(5879),t=_(2733),Z=_(9635),c=_(4499);function T(a,f){if(1&a){const g=e.EpF();e.ynx(0),e.TgZ(1,"div")(2,"dd-button",4),e.NdJ("buttonClick",function(){e.CHM(g);const x=e.oxw(2);return e.KtG(x.onClick())}),e.qZA()(),e.BQk()}if(2&a){const g=f.$implicit,m=e.oxw().$implicit;e.xp6(2),e.Q6J("size",m)("color",g)("text","Normal button")}}function r(a,f){if(1&a&&(e.ynx(0),e.TgZ(1,"div",3),e.YNc(2,T,3,3,"ng-container",2),e.qZA(),e.BQk()),2&a){const g=e.oxw();e.xp6(2),e.Q6J("ngForOf",g.buttonColor)}}let p=(()=>{class a extends o.Jo{constructor(){super("ButtonComponent"),this.buttonColor=["primary-light","primary-dark","secondary","green","gray","yellow","red"],this.buttonSize=["large","normal","mini"],this.codeDemos["Basic button"]='\n        <dd-button [size]="\'normal\'"\n        [color]="\'primary-light\'"\n        [text]="\'Basic button\'"\n        (buttonClick)="onClick()">\n</dd-button>',this.codeDemos["Large dark button"]='\n        <dd-button [size]="\'large\'"\n        [color]="\'primary-dark\'"\n        [text]="\'Button text\'"\n        (buttonClick)="onClick()">\n</dd-button>'}static#t=this.\u0275fac=function(m){return new(m||a)};static#n=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-button-demo"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:5,consts:[[3,"documentationData","codeDemos"],[1,"mr-spacer-large","flex-row","g-spacer-large"],[4,"ngFor","ngForOf"],[1,"flex-column","g-spacer-mini"],[3,"size","color","text","buttonClick"]],template:function(m,x){1&m&&(e.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-component-documentation",0),e.ALo(3,"async"),e.TgZ(4,"div",1),e.YNc(5,r,3,1,"ng-container",2),e.qZA()()()()),2&m&&(e.xp6(2),e.Q6J("documentationData",e.lcZ(3,3,x.documentationData$))("codeDemos",x.codeDemos),e.xp6(3),e.Q6J("ngForOf",x.buttonSize))},dependencies:[d.ez,d.sg,d.Ov,D.Z,h.dT,t.A,Z.e,C.hJ,c.r]})}return a})()},9618:(O,u,_)=>{_.d(u,{I:()=>Z});var d=_(6814),C=_(4177),h=_(7326),o=_(5879),D=_(6364);function e(c,T){if(1&c&&(o.ynx(0),o.TgZ(1,"div",4),o._uU(2),o.qZA(),o.BQk()),2&c){const r=o.oxw(2);o.xp6(2),o.Oqu(r.header)}}function t(c,T){if(1&c){const r=o.EpF();o.ynx(0),o.TgZ(1,"div",1),o.YNc(2,e,3,1,"ng-container",0),o.TgZ(3,"pre"),o._uU(4,"            "),o._UZ(5,"code",2),o._uU(6,"\n        "),o.qZA(),o.TgZ(7,"div",3),o.NdJ("click",function(){o.CHM(r);const a=o.oxw();return o.KtG(a.copyToClipBoard())}),o._uU(8," Copy "),o.qZA()(),o.BQk()}if(2&c){const r=o.oxw();o.xp6(2),o.Q6J("ngIf",r.header),o.xp6(3),o.Q6J("highlight",r.codeString)("lineNumbers",!1)}}let Z=(()=>{class c{constructor(r){this.notificationService=r}copyToClipBoard(){this.codeString&&navigator.clipboard&&(navigator.clipboard.writeText(this.codeString.toString().trim()),this.notificationService.showMessage("Copied!"))}static#t=this.\u0275fac=function(p){return new(p||c)(o.Y36(D.cw))};static#n=this.\u0275cmp=o.Xpm({type:c,selectors:[["app-code-preview"]],inputs:{header:"header",codeString:"codeString"},standalone:!0,features:[o.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"code-example"],[3,"highlight","lineNumbers"],[1,"copy-button","p-spacer-xmini","cursor-pointer","border-radius-6","dd-primary-50",3,"click"],[1,"code-title"]],template:function(p,a){1&p&&o.YNc(0,t,9,3,"ng-container",0),2&p&&o.Q6J("ngIf",a.codeString)},dependencies:[d.ez,d.O5,h._l,h.y$,C.hJ],styles:[".code-example[_ngcontent-%COMP%]{position:relative;overflow:auto}.code-example[_ngcontent-%COMP%]   .code-title[_ngcontent-%COMP%]{position:absolute;left:0;top:12px}.code-example[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{position:absolute;right:12px;top:48px;opacity:50%}"]})}return c})()},3350:(O,u,_)=>{_.d(u,{Z:()=>U});var d=_(6814),C=_(7326),h=_(8008),o=_(4156),D=_(9618),e=_(870),t=_(5879),Z=_(4974),c=_(690),T=_(7030);function r(i,s){if(1&i&&(t.ynx(0),t._UZ(1,"app-code-preview",12),t.BQk()),2&i){const n=s.$implicit,l=t.oxw(3);t.xp6(1),t.Q6J("header",n)("codeString",l.trimmedCodes[n])}}function p(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",10),t.YNc(2,r,2,2,"ng-container",11),t.qZA(),t.BQk()),2&i){const n=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",n.ObjectKeys(n.trimmedCodes))}}function a(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"span",9),t._uU(2),t.qZA(),t.BQk()),2&i){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",n.defaultValue," ")}}function f(i,s){if(1&i&&(t.TgZ(0,"tr")(1,"td",14)(2,"span",16),t._uU(3),t.qZA()(),t.TgZ(4,"td",15)(5,"span",9),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t.YNc(8,a,3,1,"ng-container",0),t.qZA(),t.TgZ(9,"td"),t._UZ(10,"div",6),t.ALo(11,"safe"),t.qZA()()),2&i){const n=s.$implicit;let l;t.xp6(3),t.hij(" ",n.name," "),t.xp6(3),t.hij(" ",n.type," "),t.xp6(2),t.Q6J("ngIf",n.defaultValue),t.xp6(2),t.Q6J("innerHtml",t.xi3(11,4,null!==(l=n.description)&&void 0!==l?l:"","html"),t.oJD)}}function g(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h6"),t._uU(3,"Inputs"),t.qZA(),t.TgZ(4,"table",5)(5,"thead",13)(6,"tr")(7,"th",14),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",15),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Default"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Description"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,f,12,7,"tr",11),t.qZA()()(),t.BQk()),2&i){const n=t.oxw(2);t.xp6(16),t.Q6J("ngForOf",n.documentationData.inputsClass)}}function m(i,s){if(1&i&&(t.TgZ(0,"tr")(1,"td",14)(2,"span",16),t._uU(3),t.qZA()(),t.TgZ(4,"td",15)(5,"span",9),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._UZ(8,"div",6),t.ALo(9,"safe"),t.qZA()()),2&i){const n=s.$implicit;let l;t.xp6(3),t.hij(" ",n.name," "),t.xp6(3),t.hij(" ",n.type," "),t.xp6(2),t.Q6J("innerHtml",t.xi3(9,3,null!==(l=n.description)&&void 0!==l?l:"","html"),t.oJD)}}function x(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h6"),t._uU(3,"Outputs"),t.qZA(),t.TgZ(4,"table",5)(5,"thead",13)(6,"tr")(7,"th",14),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th",15),t._uU(10,"Type"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Description"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,m,10,6,"tr",11),t.qZA()()(),t.BQk()),2&i){const n=t.oxw(2);t.xp6(14),t.Q6J("ngForOf",n.documentationData.outputsClass)}}const v=function(){return["css"]};function E(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"pre"),t._uU(2,"                        "),t._UZ(3,"code",20),t._uU(4,"\n                    "),t.qZA(),t.BQk()),2&i){const n=s.$implicit;t.xp6(3),t.Q6J("highlight",n.data)("languages",t.DdM(3,v))("lineNumbers",!0)}}const b=function(){return["typescript"]};function A(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",17)(2,"dd-tabs-v2")(3,"dd-tab",18)(4,"div",19)(5,"pre"),t._uU(6,"                        "),t._UZ(7,"code",20),t._uU(8,"\n                    "),t.qZA()()(),t.TgZ(9,"dd-tab",18)(10,"pre"),t._uU(11,"                    "),t._UZ(12,"code",21),t._uU(13,"\n                "),t.qZA()(),t.TgZ(14,"dd-tab",18),t.YNc(15,E,5,4,"ng-container",11),t.qZA()()(),t.BQk()),2&i){const n=t.oxw(2);t.xp6(3),t.Q6J("title","TS")("active",!0),t.xp6(4),t.Q6J("highlight",n.documentationData.sourceCode)("languages",t.DdM(12,b))("lineNumbers",!0),t.xp6(2),t.Q6J("title","HTML")("active",!1),t.xp6(3),t.Q6J("highlight",n.documentationData.templateData)("lineNumbers",!0),t.xp6(2),t.Q6J("title","CSS")("active",!1),t.xp6(1),t.Q6J("ngForOf",n.documentationData.styleUrlsData)}}function M(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t._uU(6,"Component"),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"div",6),t.ALo(9,"safe"),t.qZA()(),t.TgZ(10,"div",7)(11,"h6"),t._uU(12,"Demo"),t.qZA(),t.Hsn(13),t.YNc(14,p,3,1,"ng-container",0),t.qZA(),t.TgZ(15,"div",7)(16,"h6"),t._uU(17,"Component"),t.qZA(),t.TgZ(18,"table",5)(19,"tbody")(20,"tr")(21,"td",8),t._uU(22,"Name"),t.qZA(),t.TgZ(23,"td")(24,"span",9),t._uU(25),t.qZA()()(),t.TgZ(26,"tr")(27,"td",8),t._uU(28,"Selector"),t.qZA(),t.TgZ(29,"td")(30,"span",9),t._uU(31),t.qZA()()(),t.TgZ(32,"tr")(33,"td",8),t._uU(34,"Import"),t.qZA(),t.TgZ(35,"td")(36,"span",9),t._uU(37),t.qZA()()(),t.TgZ(38,"tr")(39,"td",8),t._uU(40,"ChangeDetection"),t.qZA(),t.TgZ(41,"td")(42,"span",9),t._uU(43),t.qZA()()()()()(),t.YNc(44,g,17,1,"ng-container",0),t.YNc(45,x,15,1,"ng-container",0),t.YNc(46,A,16,13,"ng-container",0),t.ALo(47,"async"),t.BQk()),2&i){const n=t.oxw();t.xp6(4),t.Oqu(n.readableName),t.xp6(4),t.Q6J("innerHtml",t.xi3(9,10,n.documentationData.description,"html"),t.oJD),t.xp6(6),t.Q6J("ngIf",n.trimmedCodes),t.xp6(11),t.hij(" ",n.documentationData.name," "),t.xp6(6),t.hij(" ",n.documentationData.selector," "),t.xp6(6),t.hij(" ",n.importPath," "),t.xp6(6),t.hij(" ",n.documentationData.changeDetection?n.documentationData.changeDetection:"ChangeDetectionStrategy.Default"," "),t.xp6(1),t.Q6J("ngIf",null==n.documentationData.inputsClass?null:n.documentationData.inputsClass.length),t.xp6(1),t.Q6J("ngIf",null==n.documentationData.outputsClass?null:n.documentationData.outputsClass.length),t.xp6(1),t.Q6J("ngIf",t.lcZ(47,13,n.showCode$))}}const P=["*"];let U=(()=>{class i extends e.Kr{static#t=this.\u0275fac=function(){let n;return function(y){return(n||(n=t.n5z(i)))(y||i)}}();static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-component-documentation"]],standalone:!0,features:[t.qOj,t.jDz],ngContentSelectors:P,decls:1,vars:1,consts:[[4,"ngIf"],[1,"mt-spacer-basic"],[1,"flex-row","flex-x-start","flex-y-center"],[1,"h6","bold","mr-spacer-large"],[1,"text-body-1","dd-primary-400-fg"],[1,"text-body-2"],[3,"innerHtml"],[1,"my-spacer-large"],[1,"strong"],[1,"code"],[1,"my-spacer-large","flex-column","g-spacer-basic"],[4,"ngFor","ngForOf"],[3,"header","codeString"],[1,"caption"],[1,"name"],[1,"type"],[1,"text-truncate","strong"],[1,"mt-spacer-large"],[3,"title","active"],[1,"code-container"],[3,"highlight","languages","lineNumbers"],[3,"highlight","lineNumbers"]],template:function(l,y){1&l&&(t.F$t(),t.YNc(0,M,48,15,"ng-container",0)),2&l&&t.Q6J("ngIf",y.documentationData)},dependencies:[d.ez,d.sg,d.O5,d.Ov,h.qE,Z.M,C._l,C.y$,o.Sw,c.i,T.F,D.I],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;border-spacing:0}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]{border-bottom:1px solid #e8edeb}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;border-bottom:1px solid #e8edeb;padding:5px 8px}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 8px;border:none}table[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{width:240px;max-width:240px}table[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{width:280px;max-width:280px}"]})}return i})()}}]);