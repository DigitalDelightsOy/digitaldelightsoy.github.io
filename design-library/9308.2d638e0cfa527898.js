"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[9308],{4492:(O,f,i)=>{i.d(f,{L:()=>_});var e=i(5879),m=i(95),u=i(2200),g=i(6156),v=i(640),r=i(2816);function l(n,d){(0,r.Z)(2,arguments);var t=(0,g.Z)(d);return(0,v.Z)(n,6e4*t)}var p=i(581);function c(n){return(0,r.Z)(1,arguments),(0,p.Z)(n).getTime()}var C=i(2168),h=i(8645),T=i(9773),y=i(8180),D=i(5177),F=i(5947),P=i(7059),k=i(8008),A=i(6814),I=i(4729),Z=i(325),L=i(2434);const E=function(n){return{"dd-primary-500-fg":n}};function w(n,d){if(1&n&&(e.TgZ(0,"label",11)(1,"span"),e._uU(2),e.qZA()()),2&n){const t=e.oxw();e.Tol(t.backgroundColor),e.Q6J("ngClass",e.VKq(5,E,"dd-white"===t.backgroundColor)),e.xp6(2),e.Oqu(t.dateLabel)}}function S(n,d){if(1&n&&(e.ynx(0),e.TgZ(1,"div",12),e._uU(2),e.ALo(3,"dddate"),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,1,t.selectedDate)," ")}}function V(n,d){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.selectDateText," ")}}function J(n,d){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",13)(2,"dd-select-list",14),e.NdJ("itemClick",function(s){e.CHM(t);const a=e.oxw();return e.KtG(a.selectItemClick(s))}),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw();let o,s;e.xp6(2),e.Q6J("searchEnabled",!0)("icon","dd-icon-time")("label",null!==(o=t.timeLabel)&&void 0!==o?o:t.timeLabel)("selectText",null!==(s=t.selectedTimeString)&&void 0!==s?s:"")("items",t.selectableTimes)}}function j(n,d){if(1&n&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.Q6J("id","form-field-error-{{label}}"),e.xp6(1),e.hij(" ",t.errorMessage," ")}}const U=function(n,d,t){return{open:n,"w-50-p":d,"w-100-p":t}};let _=(()=>{class n{constructor(t,o,s){this.overlayService=t,this.cdr=o,this.showTimePicker=!0,this.min=0,this.max=24,this.interval=30,this.options={...u.vC,allSelectable:!0},this.submitted=!1,this.selectDateText="Select Date",this.backgroundColor="dd-white",this.itemClick=new e.vpe,this.value=new m.NI,this.selectableTimes=[],this.destroySubject=new h.x,this.genericError="Invalid field",this._unsubscribeAllSubject=new h.x,this.objectKeys=Object.keys,this._onChange=()=>{},this.onTouched=()=>{},s.getDateLocale$().pipe((0,T.R)(this._unsubscribeAllSubject)).subscribe(a=>{this.locale=a})}get errorMessage(){if(this.errors){const t=this.objectKeys(this.errors);if(this.errorMessages){const o=this.objectKeys(this.errorMessages).find(s=>t.includes(s));if(o&&this.errorMessages[o])return this.errorMessages[o]}return this.genericError}}ngOnInit(){const t=new Date,o=new Date(t.getFullYear(),t.getMonth(),t.getDate(),this.min,0,0),s=new Date(t.getFullYear(),t.getMonth(),t.getDate(),this.max,0,0);for(let a=o;a<=s;){if(this.locale?.code){const M=a.toLocaleTimeString([this.locale.code],{hour:"2-digit",minute:"2-digit"});this.selectableTimes.push({id:c(a),text:M,value:[a.getHours(),a.getMinutes()]})}a=l(a,this.interval)}}ngAfterViewInit(){setTimeout(()=>{if(this.selectableTimes?.length&&this.selectedDate){const t=[this.selectedDate?.getHours(),this.selectedDate?.getMinutes()],o=this.selectableTimes.map(a=>{if(a.value){const M=(new Date).setUTCHours(t[0],t[1]),b=(new Date).setUTCHours(a.value[0],a.value[1]);return Math.abs(M-b)}}),s=o.indexOf(Math.min(...o));this.selectedTimeValue=this.selectableTimes[s].value,this.selectedTimeString=this.selectableTimes[s].text,this.selectedTimeValue&&this.setDateValue(this.selectedTimeValue)}else this.selectableTimes[0]&&this.selectItemClick(this.selectableTimes[0])},0)}setDateValue(t){if(this.selectedDate){const o=this.selectedDate?.getFullYear(),s=this.selectedDate?.getMonth(),a=this.selectedDate?.getDate();this.selectedDate=new Date(o,s,a,t[0],t[1]),this.value.setValue(this.selectedDate)}}selectItemClick(t){this.selectedTimeString=t.text,this.selectedTimeValue=t.value,t.value&&this.setDateValue(t.value)}ngOnChanges(t){if(t.selectedDate&&!t.selectedDate.firstChange&&this.selectedTimeValue){const o=t.selectedDate.currentValue;this.selectableTimes[0].value&&(0,C.Z)(t.selectedDate.previousValue)!==(0,C.Z)(o)&&this.setDateValue(this.selectedTimeValue)}}onAnchorClick(t){if(this.overlayModel)return void this.closeMenu();const s=this.overlayService.getConnectedToConfig(t,".dd-datepicker-field",{options:this.options,selectedDate:this.selectedDate||new Date});s.overlayConfig&&(s.closeOnOutsidePointerEvents=!0),this.overlayModel=this.overlayService.open(F.J,s),this.overlayModel.component.itemClick.pipe((0,y.q)(1),(0,T.R)(this._unsubscribeAllSubject)).subscribe(a=>{this.selectedDate=a,this.closeMenu()}),this.overlayModel.overlayRef.detachments().pipe((0,D.g)(1),(0,y.q)(1),(0,T.R)(this._unsubscribeAllSubject)).subscribe(()=>{this.closeMenu()})}closeMenu(){this.value.setValue(this.selectedDate),this.overlayModel?.close(),delete this.overlayModel}markAsTouched(){this.onTouched(),this.value.markAsTouched(),this.cdr.detectChanges()}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete()}writeValue(t){t&&this.value.setValue(t)}registerOnChange(t){this.value.valueChanges.pipe((0,T.R)(this.destroySubject)).subscribe(t)}registerOnTouched(t){this.onTouched=t}registerOnValidatorChange(t){this._onChange=t}validate(){return!this.value.valid&&this.errors?this.errors:null}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(P.F0),e.Y36(e.sBO),e.Y36(k._k))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["dd-form-datepicker-field"]],inputs:{dateLabel:"dateLabel",showTimePicker:"showTimePicker",timeLabel:"timeLabel",selectedDate:"selectedDate",min:"min",max:"max",interval:"interval",options:"options",errors:"errors",errorMessages:"errorMessages",submitted:"submitted",selectDateText:"selectDateText",backgroundColor:"backgroundColor"},outputs:{itemClick:"itemClick"},features:[e._Bn([{provide:m.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0},{provide:m.Cf,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.TTD],decls:12,vars:17,consts:[[1,"form-field-container"],["fxLayout","row","fxLayout-lt-sm","column","fxLayoutAlign","space-between center","fxFlex","100","fxLayoutGap-gt-sm","16px"],["fxLayoutAlign","start center",1,"dd-select-anchor","dd-primary-200-border","border","border-radius-6","cursor-pointer",3,"ngClass","click"],["selectAnchor",""],[3,"class","ngClass",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center"],[4,"ngIf","ngIfElse"],["noInitialDateTemplate",""],[3,"ngClass","icon"],[4,"ngIf"],["class","error-text text-body-2 dd-danger-fg",3,"id",4,"ngIf"],[3,"ngClass"],[1,"mr-spacer-xmini"],[1,"time-picker"],[3,"searchEnabled","icon","label","selectText","items","itemClick"],[1,"error-text","text-body-2","dd-danger-fg",3,"id"]],template:function(o,s){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3),e.NdJ("click",function(){e.CHM(a);const b=e.MAs(3);return e.KtG(s.onAnchorClick(b))}),e.YNc(4,w,3,7,"label",4),e.TgZ(5,"div",5),e.YNc(6,S,4,3,"ng-container",6),e.YNc(7,V,2,1,"ng-template",null,7,e.W1O),e._UZ(9,"dd-icon",8),e.qZA()(),e.YNc(10,J,3,5,"ng-container",9),e.qZA(),e.YNc(11,j,2,2,"div",10),e.qZA()}if(2&o){const a=e.MAs(8);e.xp6(2),e.Q6J("ngClass",e.kEZ(11,U,!!s.overlayModel,s.showTimePicker,!s.showTimePicker)),e.xp6(2),e.Q6J("ngIf",s.dateLabel),e.xp6(1),e.Gre("",s.backgroundColor," w-100-p ml-spacer-mini mr-spacer-xmini subtitle"),e.xp6(1),e.Q6J("ngIf",s.selectedDate)("ngIfElse",a),e.xp6(3),e.Q6J("ngClass",e.VKq(15,E,"dd-white"===s.backgroundColor))("icon","dd-icon-calendar"),e.xp6(1),e.Q6J("ngIf",s.showTimePicker),e.xp6(1),e.Q6J("ngIf",s.errors&&s.errorMessage)}},dependencies:[A.mk,A.O5,I.o,Z.g,L.u],styles:["[_nghost-%COMP%]{width:100%;min-width:100%;max-width:100%}.form-field-container[_ngcontent-%COMP%]{min-height:70px}.form-field-container[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%]{width:50%;min-width:50%;max-width:50%}@media screen and (max-width: 599px){.form-field-container[_ngcontent-%COMP%]   .time-picker[_ngcontent-%COMP%]{width:100%;min-width:100%;max-width:100%}}.form-field-container[_ngcontent-%COMP%]   .dd-select-anchor[_ngcontent-%COMP%]{position:relative}.kamux-theme[_nghost-%COMP%]   .form-field-container[_ngcontent-%COMP%]   .dd-select-anchor[_ngcontent-%COMP%], .kamux-theme   [_nghost-%COMP%]   .form-field-container[_ngcontent-%COMP%]   .dd-select-anchor[_ngcontent-%COMP%]{height:36px!important}@media screen and (max-width: 599px){.form-field-container[_ngcontent-%COMP%]   .dd-select-anchor[_ngcontent-%COMP%]{width:100%;min-width:100%;max-width:100%}}.form-field-container[_ngcontent-%COMP%]   .dd-select-anchor[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;left:9px;z-index:2;font-size:12px;line-height:11px;background-color:inherit;padding:0 4px;height:6px;top:-1px;display:flex;align-items:flex-end}"]})}return n})()},5947:(O,f,i)=>{i.d(f,{J:()=>v});var e=i(5879),m=i(7059),u=i(95),g=i(1117);let v=(()=>{class r{constructor(l){this.data=l,this.itemClick=new e.vpe,this.date=new Date,this.selectableDates=[],this.date=l.selectedDate,l.selectableDates&&(this.selectableDates=l.selectableDates)}static#e=this.\u0275fac=function(p){return new(p||r)(e.Y36(m.Mw))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["dd-form-field-datepicker"]],outputs:{itemClick:"itemClick"},decls:2,vars:4,consts:[[1,"dd-form-field-datepicker","dd-white-bg","p-spacer-mini","elevation-04","border-radius-6","w-344"],[3,"options","selectableDates","date","ngModel","ngModelChange"]],template:function(p,c){1&p&&(e.TgZ(0,"div",0)(1,"dd-datepicker",1),e.NdJ("ngModelChange",function(h){return c.date=h})("ngModelChange",function(h){return c.itemClick.emit(h)}),e.qZA()()),2&p&&(e.xp6(1),e.Q6J("options",c.data.options)("selectableDates",c.selectableDates)("date",c.date)("ngModel",c.date))},dependencies:[u.JJ,g.Q,u.On]})}return r})()},8299:(O,f,i)=>{i.d(f,{pt:()=>y}),i(4492),i(5947);var u=i(6814),g=i(95),v=i(4177),r=i(2200),x=i(6905),l=i(2177),p=i(1207),c=i(8008),C=i(9347),h=i(5879);let y=(()=>{class D{static#e=this.\u0275fac=function(k){return new(k||D)};static#t=this.\u0275mod=h.oAB({type:D});static#i=this.\u0275inj=h.cJS({imports:[u.ez,g.UX,p.q,l.gP,r.ZU,x.Q,C.An,c.qE,g.u5,v.hJ]})}return D})()},8021:(O,f,i)=>{i.d(f,{Z:()=>v});var e=i(6156),m=i(640),u=i(2816),g=36e5;function v(r,x){(0,u.Z)(2,arguments);var l=(0,e.Z)(x);return(0,m.Z)(r,l*g)}}}]);