"use strict";(self.webpackChunklibrary_demo=self.webpackChunklibrary_demo||[]).push([[8509,7391],{4243:(m,n,t)=>{t.d(n,{dT:()=>i.d});var i=t(3732)},8509:(m,n,t)=>{t.r(n),t.d(n,{FormDatepickerFieldDemoComponent:()=>h});var i=t(6814),r=t(95),a=t(8584),c=t(8021),_=t(4243),u=t(8299),f=t(870),D=t(3350),e=t(5879),p=t(2733),P=t(9635),E=t(4492);const M=function(){return{max:!0}},L=function(){return{max:"Max error."}},v=function(){return{required:"Required error."}};let h=(()=>{class l extends f.Jo{constructor(){super("FormDatepickerFieldComponent");const o=new Date;this.daysWithSlots=[o,(0,a.Z)(o,1),(0,c.Z)((0,a.Z)(o,2),5),(0,a.Z)(o,3),(0,a.Z)(o,4),(0,a.Z)(o,5),(0,a.Z)(o,6),(0,a.Z)(o,7),(0,a.Z)(o,8),(0,a.Z)(o,9),(0,a.Z)(o,10)],this.selectedDate=this.daysWithSlots[2],this.selectedDateNoInitialValue=void 0,this.form=new r.cw({datePicker:new r.NI(this.selectedDate,{nonNullable:!0,validators:[r.kI.required]}),datePickerNoInitialValue:new r.NI(this.selectedDateNoInitialValue,{nonNullable:!0,validators:[r.kI.required]})}),this.codeDemos["Form datepicker"]='\n<dd-form-datepicker-field [formControlName]="\'datePicker\'"\n    [selectedDate]="form.controls[\'datePicker\'].value"\n    [errors]="form.controls[\'datePicker\'].errors"\n    [min]="9"\n    [max]="16"\n    [dateLabel]="\'Date\'"\n    [timeLabel]="\'From\'"\n    [submitted]="false">\n</dd-form-datepicker-field>'}static#e=this.\u0275fac=function(s){return new(s||l)};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-form-datepicker-field-demo"]],standalone:!0,features:[e.qOj,e.jDz],decls:18,vars:42,consts:[[3,"documentationData","codeDemos"],[1,"w-600","flex-column","g-spacer-mini",3,"formGroup"],[3,"formControlName","selectedDate","errors","min","max","dateLabel","timeLabel","submitted"],[3,"formControlName","selectedDate","showTimePicker","errors","errorMessages","min","max","dateLabel","timeLabel","submitted"],[1,"mb-spacer-large"]],template:function(s,d){1&s&&(e.TgZ(0,"dd-card")(1,"dd-card-row")(2,"app-component-documentation",0),e.ALo(3,"async"),e.TgZ(4,"div",1),e._UZ(5,"dd-form-datepicker-field",2)(6,"dd-form-datepicker-field",3),e.TgZ(7,"div",4)(8,"strong"),e._uU(9,"Selected date:"),e.qZA(),e._uU(10),e.ALo(11,"json"),e.qZA(),e._UZ(12,"dd-form-datepicker-field",3),e.TgZ(13,"div")(14,"strong"),e._uU(15,"Selected date (no initial value):"),e.qZA(),e._uU(16),e.ALo(17,"json"),e.qZA()()()()()),2&s&&(e.xp6(2),e.Q6J("documentationData",e.lcZ(3,33,d.documentationData$))("codeDemos",d.codeDemos),e.xp6(2),e.Q6J("formGroup",d.form),e.xp6(1),e.Q6J("formControlName","datePicker")("selectedDate",d.form.controls.datePicker.value)("errors",d.form.controls.datePicker.errors)("min",9)("max",16)("dateLabel","Date")("timeLabel","From")("submitted",!1),e.xp6(1),e.Q6J("formControlName","datePicker")("selectedDate",d.form.controls.datePicker.value)("showTimePicker",!1)("errors",e.DdM(39,M))("errorMessages",e.DdM(40,L))("min",9)("max",16)("dateLabel","Date")("timeLabel","From")("submitted",!0),e.xp6(4),e.hij(" ",e.lcZ(11,35,d.form.controls.datePicker.value)," "),e.xp6(2),e.Q6J("formControlName","datePickerNoInitialValue")("selectedDate",d.form.controls.datePickerNoInitialValue.value)("showTimePicker",!0)("errors",d.form.controls.datePickerNoInitialValue.errors)("errorMessages",e.DdM(41,v))("min",9)("max",16)("dateLabel","Date")("timeLabel","From")("submitted",!0),e.xp6(4),e.hij(" ",e.lcZ(17,37,d.form.controls.datePickerNoInitialValue.value)," "))},dependencies:[i.ez,i.Ov,i.Ts,r.u5,r.JJ,r.JL,D.Z,_.dT,p.A,P.e,u.pt,E.L,r.UX,r.sg,r.u]})}return l})()}}]);