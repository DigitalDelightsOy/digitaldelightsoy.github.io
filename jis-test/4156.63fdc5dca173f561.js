"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[4156],{6914:(P,b,a)=>{a.d(b,{Y:()=>p});var e=a(5879),c=a(6814),v=a(4729);function C(r,g){if(1&r&&(e.ynx(0),e.TgZ(1,"div",4)(2,"span"),e._uU(3),e.qZA()(),e.BQk()),2&r){const s=e.oxw(2);e.xp6(1),e.Q6J("ngClass",s.notificationClasses),e.xp6(2),e.Oqu(s.notifications)}}const h=function(r){return{"accent-contrast":r}};function u(r,g){if(1&r&&(e.ynx(0),e.TgZ(1,"div",5),e._UZ(2,"dd-icon",6),e.qZA(),e.BQk()),2&r){const s=e.oxw(3);e.xp6(1),e.Gre("dd-chip-icon ml-spacer-xmini ",s.iconColor,""),e.Q6J("ngClass",e.VKq(6,h,s.selected&&"dd-accent-fg"===s.iconColor)),e.xp6(1),e.Q6J("icon",s.icon)("variant","mini")}}function M(r,g){if(1&r&&e.YNc(0,u,3,8,"ng-container",0),2&r){const s=e.oxw(2);e.Q6J("ngIf",s.icon)}}function t(r,g){if(1&r){const s=e.EpF();e.ynx(0),e.TgZ(1,"div",1),e.NdJ("click",function(x){e.CHM(s);const O=e.oxw();return e.KtG(O.onChipClick(x))}),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.YNc(4,C,4,2,"ng-container",2),e.YNc(5,M,1,1,"ng-template",null,3,e.W1O),e.qZA(),e.BQk()}if(2&r){const s=e.MAs(6),m=e.oxw();e.xp6(1),e.Q6J("ngClass",m.chipClasses),e.xp6(2),e.Oqu(m.chipText),e.xp6(1),e.Q6J("ngIf",m.notifications)("ngIfElse",s)}}let p=(()=>{class r{constructor(){this.selected=!1,this.chipVariant="removable",this.iconColor="dd-accent-fg",this.stopPropagation=!1,this.chipClick=new e.vpe}onChipClick(s){this.stopPropagation&&s.stopPropagation(),this.chipClick.emit()}get chipClasses(){return{"dd-accent dd-accent-border":this.selected,"dd-white":!this.selected,"dd-accent-darker-hover dd-accent-darkest-active":"tag"===this.chipVariant&&this.selected,"dd-primary-100-hover dd-primary-50-active":"tag"===this.chipVariant&&!this.selected,removable:"removable"===this.chipVariant,"pl-spacer-mini pr-spacer-xmini":!!this.icon,"px-spacer-mini":!this.icon}}get notificationClasses(){return{"dd-white":this.selected,"dd-primary-300":!this.selected,"px-spacer-solo":!0,"px-spacer-xmini":void 0!==this.notifications&&this.notifications>9}}static#t=this.\u0275fac=function(m){return new(m||r)};static#n=this.\u0275cmp=e.Xpm({type:r,selectors:[["dd-chip"]],inputs:{chipText:"chipText",selected:"selected",chipVariant:"chipVariant",icon:"icon",iconColor:"iconColor",notifications:"notifications",stopPropagation:"stopPropagation"},outputs:{chipClick:"chipClick"},decls:1,vars:1,consts:[[4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center",1,"dd-chip","h-32","py-spacer-solo","border","border-radius-4","cursor-pointer",3,"ngClass","click"],[4,"ngIf","ngIfElse"],["iconTemplate",""],[1,"ml-spacer-xmini","border-radius-16","h-20","min-w-20","chip-notification","subtitle-2",3,"ngClass"],[3,"ngClass"],[3,"icon","variant"]],template:function(m,x){1&m&&e.YNc(0,t,7,4,"ng-container",0),2&m&&e.Q6J("ngIf",x.chipText)},dependencies:[c.mk,c.O5,v.o],styles:[".hover-transition[_ngcontent-%COMP%], .hover-transition[_ngcontent-%COMP%]:hover{transition:all .2s linear}.dd-chip[_ngcontent-%COMP%]{display:inline-flex!important;white-space:nowrap;transition:all .2s linear}.jis-theme[_nghost-%COMP%]   .dd-chip.removable[_ngcontent-%COMP%]:hover, .jis-theme   [_nghost-%COMP%]   .dd-chip.removable[_ngcontent-%COMP%]:hover{background-color:#eb3b3b!important;border-color:#eb3b3b!important;color:#fff!important}.jis-theme[_nghost-%COMP%]   .dd-chip.removable[_ngcontent-%COMP%]:hover   .dd-chip-icon[_ngcontent-%COMP%], .jis-theme   [_nghost-%COMP%]   .dd-chip.removable[_ngcontent-%COMP%]:hover   .dd-chip-icon[_ngcontent-%COMP%]{color:#fff!important}.jis-theme[_nghost-%COMP%]   .dd-chip[_ngcontent-%COMP%]   .dd-chip-icon.accent-contrast[_ngcontent-%COMP%], .jis-theme   [_nghost-%COMP%]   .dd-chip[_ngcontent-%COMP%]   .dd-chip-icon.accent-contrast[_ngcontent-%COMP%]{color:#000!important}.dd-chip[_ngcontent-%COMP%]:hover{transition:all .2s linear}.chip-notification[_ngcontent-%COMP%]{display:grid;text-align:center;align-items:center}"],changeDetection:0})}return r})()},6828:(P,b,a)=>{a.d(b,{o:()=>C});var e=a(6814),c=a(6905),v=a(5879);let C=(()=>{class h{static#t=this.\u0275fac=function(t){return new(t||h)};static#n=this.\u0275mod=v.oAB({type:h});static#i=this.\u0275inj=v.cJS({imports:[e.ez,c.Q]})}return h})()},690:(P,b,a)=>{a.d(b,{i:()=>h});var e=a(5879),c=a(6814);function v(u,M){1&u&&(e.TgZ(0,"div"),e.Hsn(1),e.qZA())}const C=["*"];let h=(()=>{class u{constructor(){this.title="",this.icon="",this.active=!1,this.tabActivated=new e.vpe}static#t=this.\u0275fac=function(p){return new(p||u)};static#n=this.\u0275cmp=e.Xpm({type:u,selectors:[["dd-tab"]],inputs:{title:"title",icon:"icon",active:"active",notifications:"notifications"},outputs:{tabActivated:"tabActivated"},ngContentSelectors:C,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(p,r){1&p&&(e.F$t(),e.YNc(0,v,2,0,"div",0)),2&p&&e.Q6J("ngIf",r.active)},dependencies:[c.O5]})}return u})()},7030:(P,b,a)=>{a.d(b,{F:()=>t});var e=a(690),c=a(5879),v=a(6814),C=a(6914);function h(p,r){if(1&p){const g=c.EpF();c.ynx(0),c.TgZ(1,"dd-chip",3),c.NdJ("chipClick",function(){const x=c.CHM(g).$implicit,O=c.oxw(2);return c.KtG(O.selectTab(x))}),c.qZA(),c.BQk()}if(2&p){const g=r.$implicit;c.xp6(1),c.Q6J("chipText",g.title)("chipVariant","tag")("selected",g.active)("notifications",g.notifications)}}function u(p,r){if(1&p&&(c.ynx(0),c.TgZ(1,"div",1),c.YNc(2,h,2,4,"ng-container",2),c.qZA(),c.BQk()),2&p){const g=c.oxw();c.xp6(2),c.Q6J("ngForOf",g.tabs)}}const M=["*"];let t=(()=>{class p{constructor(){this.hideTabs=!1}ngAfterContentInit(){0===this.tabs.filter(s=>s.active).length&&this.selectTab(this.tabs.first)}selectTab(g){this.tabs.toArray().forEach(s=>s.active=!1),g&&(g.active=!0,g.tabActivated.emit())}static#t=this.\u0275fac=function(s){return new(s||p)};static#n=this.\u0275cmp=c.Xpm({type:p,selectors:[["dd-tabs-v2"]],contentQueries:function(s,m,x){if(1&s&&c.Suo(x,e.i,4),2&s){let O;c.iGM(O=c.CRH())&&(m.tabs=O)}},inputs:{hideTabs:"hideTabs"},ngContentSelectors:M,decls:2,vars:1,consts:[[4,"ngIf"],[1,"overflow-hidden","overflow-x-auto","overflow-y-auto","hide-scrollbar","navigation-container"],[4,"ngFor","ngForOf"],[1,"mr-spacer-xmini","mb-spacer-xmini",3,"chipText","chipVariant","selected","notifications","chipClick"]],template:function(s,m){1&s&&(c.F$t(),c.YNc(0,u,3,1,"ng-container",0),c.Hsn(1)),2&s&&c.Q6J("ngIf",!m.hideTabs)},dependencies:[v.sg,v.O5,C.Y],styles:[".navigation-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-auto-flow:column;justify-content:start}"]})}return p})()},4156:(P,b,a)=>{a.d(b,{Sw:()=>at});var e=a(9347),t=(a(8645),a(2438),a(3620),a(9773),a(8180),a(5177),a(5879)),r=(a(7059),a(4408)),g=a(6814);a(4729);var B=a(6828),D=a(6905),H=a(9146);a(6914),a(690),a(7030);let at=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[g.ez,D.Q,r.Bz,H.AG,e.An,B.o]})}return i})()}}]);