"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[8727,7391],{4243:(v,s,i)=>{i.d(s,{dT:()=>c.d});var c=i(3732)},8727:(v,s,i)=>{i.r(s),i.d(s,{OverlayServiceDemoComponent:()=>I});var c=i(6814),u=i(4177),y=i(4243),m=i(7059),O=i(2475),f=i(774),g=i(9620),h=i(5127),x=i(870),d=i(8180),p=i(9773),T=i(2096),e=i(5879),Z=i(2733),C=i(9635),D=i(4499);function S(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1," width: "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e._uU(5," height: "),e.TgZ(6,"strong"),e._uU(7),e.qZA()()),2&n){const o=l.ngIf;e.xp6(3),e.Oqu(o[0]),e.xp6(4),e.Oqu(o[1])}}function b(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1," width: "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e._uU(5," height: "),e.TgZ(6,"strong"),e._uU(7),e.qZA()()),2&n){const o=l.ngIf;e.xp6(3),e.Oqu(o[0]),e.xp6(4),e.Oqu(o[1])}}function A(n,l){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"div",2)(3,"span")(4,"code"),e._uU(5),e.qZA(),e._uU(6," centered "),e.qZA(),e.YNc(7,b,8,2,"span",5),e.qZA(),e.TgZ(8,"dd-button",3),e.NdJ("click",function(){const a=e.CHM(o).$implicit,_=e.oxw();return e.KtG(_.openCenteredOverlay(a))}),e.qZA()(),e.BQk()}if(2&n){const o=l.$implicit,t=e.oxw();e.xp6(5),e.Oqu(o),e.xp6(2),e.Q6J("ngIf",t.overlayVariantSizes[o]),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay")}}function E(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1," max-width: "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e._uU(5," max-height: "),e.TgZ(6,"strong"),e._uU(7),e.qZA()()),2&n){const o=l.ngIf;e.xp6(3),e.Oqu(o[0]),e.xp6(4),e.Oqu(o[1])}}function U(n,l){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"div",2)(3,"span")(4,"code"),e._uU(5),e.qZA(),e._uU(6," flex centered "),e.qZA(),e.YNc(7,E,8,2,"span",5),e.qZA(),e.TgZ(8,"dd-button",3),e.NdJ("click",function(){const a=e.CHM(o).$implicit,_=e.oxw();return e.KtG(_.openCenteredOverlay(a,!0))}),e.qZA()(),e.BQk()}if(2&n){const o=l.$implicit,t=e.oxw();e.xp6(5),e.Oqu(o),e.xp6(2),e.Q6J("ngIf",t.overlayVariantSizes[o]),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay")}}function M(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1," width: "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._UZ(4,"br"),e._uU(5," height: "),e.TgZ(6,"strong"),e._uU(7),e.qZA()()),2&n){const o=l.ngIf;e.xp6(3),e.Oqu(o[0]),e.xp6(4),e.Oqu(o[1])}}function q(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1," width: "),e.TgZ(2,"strong"),e._uU(3),e.qZA()()),2&n){const o=l.ngIf;e.xp6(3),e.Oqu(o)}}function P(n,l){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",4)(2,"div",2)(3,"span")(4,"code"),e._uU(5),e.qZA(),e._uU(6," dialog overlay "),e.qZA(),e.YNc(7,q,4,1,"span",5),e.qZA(),e.TgZ(8,"dd-button",3),e.NdJ("click",function(){const a=e.CHM(o).$implicit,_=e.oxw();return e.KtG(_.openDialogOverlay(a))}),e.qZA()(),e.BQk()}if(2&n){const o=l.$implicit,t=e.oxw();e.xp6(5),e.Oqu(o),e.xp6(2),e.Q6J("ngIf",t.dialogVariantSizes[o]),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay")}}let I=(()=>{class n extends x.$T{constructor(o){super("OverlayService"),this.overlayService=o,this.overlayVariantSizes={},this.dialogVariantSizes={},this.overlayVariants=["small","medium","large"],this.dialogOverlayVariants=["dialog-wide","dialog-narrow","dialog-mega"],this.overlayVariants.forEach(t=>{this.overlayVariantSizes[t]=this.overlayService.getOverlaySizes(t)}),this.dialogOverlayVariants.forEach(t=>{this.dialogVariantSizes[t]=this.overlayService.getDialogOverlaySizes(t)})}openScrollableOverlay(o){let t;t="small"!==o;const a=this.overlayService.getGlobalScrollableCenterConfig(o,{title:"This overlay is fully scrollable",padding:t}),_=this.overlayService.open(h.z,a);_.component.closeOverlay.pipe((0,d.q)(1),(0,p.R)(this._unsubscribeAllSubject)).subscribe(()=>_.close())}openConfirmSelectionOverlay(){const t=this.overlayService.getConfirmSelectionOverlayConfig({heading:"Testing things out",bodyText:"Testing text.",cancelButtonText:"Cancel",confirmButtonText:"Confirm",useAnimation:!0,confirmSelection$:()=>(0,T.of)(!0)}),r=this.overlayService.open(m.KM,t);r.component.closeOverlay.pipe((0,d.q)(1),(0,p.R)(this._unsubscribeAllSubject)).subscribe(()=>r.close())}openCenteredOverlay(o,t=!1){let r;r="small"!==o;const a={title:"Testing things out",padding:r},_=t?this.overlayService.getFlexGlobalCenterConfig(o,a):this.overlayService.getGlobalCenterConfig(o,a);this.overlayService.open(g.T,_)}openOverlayWithCloseButton(){const t=this.overlayService.getGlobalCenterConfig("medium",{title:"This modal can be closed with header button.",padding:!1,hasCloseButton:!0}),r=this.overlayService.open(g.T,t);r.component.closeOverlay.pipe((0,d.q)(1),(0,p.R)(this._unsubscribeAllSubject)).subscribe(()=>r.close())}openDialogOverlay(o){const r=this.overlayService.getDialogOverlayConfig(o,{heading:"Testing things out",variant:o}),a=this.overlayService.open(f.A,r);a.component.closeOverlay.pipe((0,d.q)(1),(0,p.R)(this._unsubscribeAllSubject)).subscribe(()=>{a.close()})}static#e=this.\u0275fac=function(t){return new(t||n)(e.Y36(m.F0))};static#o=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-overlay-service-demo"]],standalone:!0,features:[e._Bn([m.F0]),e.qOj,e.jDz],decls:32,vars:16,consts:[[3,"documentationData"],[1,"flex-row","flex-x-start","flex-y-center","g-spacer-basic"],[1,"w-400"],[3,"color","text","click"],[1,"mt-spacer-basic","flex-row","flex-x-start","flex-y-center","g-spacer-basic"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(t,r){1&t&&(e.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-service-documentation",0),e.ALo(3,"async"),e.TgZ(4,"div",1)(5,"div",2)(6,"span"),e._uU(7," Confirm selection centered "),e.qZA(),e.TgZ(8,"span"),e._uU(9," width: "),e.TgZ(10,"strong"),e._uU(11),e.qZA(),e._UZ(12,"br"),e._uU(13," height: "),e.TgZ(14,"strong"),e._uU(15),e.qZA()()(),e.TgZ(16,"dd-button",3),e.NdJ("click",function(){return r.openConfirmSelectionOverlay()}),e.qZA()(),e.TgZ(17,"div",4)(18,"div",2)(19,"span"),e._uU(20," Fully scrollable overlay "),e.qZA(),e.YNc(21,S,8,2,"span",5),e.qZA(),e.TgZ(22,"dd-button",3),e.NdJ("click",function(){return r.openScrollableOverlay("medium")}),e.qZA()(),e.YNc(23,A,9,4,"ng-container",6),e.YNc(24,U,9,4,"ng-container",6),e.TgZ(25,"div",4)(26,"div",2)(27,"span"),e._uU(28," Overlay with close button "),e.qZA(),e.YNc(29,M,8,2,"span",5),e.qZA(),e.TgZ(30,"dd-button",3),e.NdJ("click",function(){return r.openOverlayWithCloseButton()}),e.qZA()(),e.YNc(31,P,9,4,"ng-container",6),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("documentationData",e.lcZ(3,14,r.documentationData$)),e.xp6(9),e.Oqu("365px"),e.xp6(4),e.Oqu("220px"),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay"),e.xp6(5),e.Q6J("ngIf",r.overlayVariantSizes.medium),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay"),e.xp6(1),e.Q6J("ngForOf",r.overlayVariants),e.xp6(1),e.Q6J("ngForOf",r.overlayVariants),e.xp6(5),e.Q6J("ngIf",r.overlayVariantSizes.medium),e.xp6(1),e.Q6J("color","primary-light")("text","Open overlay"),e.xp6(1),e.Q6J("ngForOf",r.dialogOverlayVariants))},dependencies:[c.ez,c.sg,c.O5,c.Ov,O.k,y.dT,Z.A,C.e,u.hJ,D.r]})}return n})()}}]);