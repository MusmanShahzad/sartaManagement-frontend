(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{C7ym:function(e,t,i){"use strict";i.r(t),i.d(t,"BuildingModule",(function(){return me}));var r=i("ofXK"),n=i("QQEI"),d=i("fXoL"),o=i("xJkR"),s=i("5eHb"),c=i("tyNb");function b(e,t){if(1&e&&(d.Qb(0,"p",5),d.qc(1),d.Pb()),2&e){const e=d.ac();d.zb(1),d.sc("Agent:",e.item.agentId.userId.name,"")}}function a(e,t){if(1&e&&(d.Qb(0,"p",5),d.qc(1),d.Pb()),2&e){const e=d.ac();d.zb(1),d.sc("Rooms:",e.item.rooms.length,"")}}function u(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",10),d.Yb("click",(function(){d.kc(e);const t=d.ac();return t.editRedirect(t.item._id)})),d.qc(1," edit"),d.Pb()}}function l(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",11),d.Yb("click",(function(){d.kc(e);const t=d.ac();return t.removeAgentBtn(t.item._id)})),d.qc(1,"Remove agent"),d.Pb()}}const g=function(e){return["../../../userView",e]};let m=(()=>{class e{constructor(e,t,i){this.RemoveAgent=e,this.toastr=t,this.router=i}ngOnInit(){this.type=localStorage.getItem("type"),console.log(this.item)}editRedirect(e){this.router.navigate(["/building/manage/edit",e])}viewRedirect(e){this.router.navigate(["/building",e])}removeAgentBtn(e){this.RemoveAgent.mutate({buildingId:e}).subscribe(e=>{e.data.RemoveAgent.Errors&&e.data.RemoveAgent.Errors.length>0?e.data.RemoveAgent.Errors.forEach(e=>{this.toastr.error(e.message,"Unsuccessfully")}):this.item.agentId=null})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(n.x),d.Lb(s.b),d.Lb(c.c))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-myBuildingCard"]],inputs:{item:"item"},decls:16,vars:10,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"card-text"],["class","card-text",4,"ngIf"],[1,"btn","btn-primary",3,"click"],["class","btn btn-warning",3,"click",4,"ngIf"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.qc(2),d.Pb(),d.Qb(3,"div",2),d.Qb(4,"h5",3),d.qc(5,"Owner Name:"),d.Qb(6,"a",4),d.qc(7),d.Pb(),d.Pb(),d.Qb(8,"p",5),d.qc(9),d.Pb(),d.pc(10,b,2,1,"p",6),d.pc(11,a,2,1,"p",6),d.Qb(12,"button",7),d.Yb("click",(function(){return t.viewRedirect(t.item._id)})),d.qc(13,"View More"),d.Pb(),d.pc(14,u,2,0,"button",8),d.pc(15,l,2,0,"button",9),d.Pb(),d.Pb()),2&e&&(d.zb(2),d.sc(" ",t.item.name," "),d.zb(4),d.dc("routerLink",d.gc(8,g,null==t.item||null==t.item.ownersId?null:t.item.ownersId.userId._id)),d.zb(1),d.rc(t.item.ownersId.userId.name),d.zb(2),d.sc("Adresss:",t.item.address,""),d.zb(1),d.dc("ngIf",t.item.agentId),d.zb(1),d.dc("ngIf",t.item.rooms),d.zb(3),d.dc("ngIf",2==t.type),d.zb(1),d.dc("ngIf",t.item.agentId))},directives:[c.f,r.j],styles:[""]}),e})();const f=function(){return{"border-radius":"2px",width:"25%",height:"25px"}},h=function(){return{"border-radius":"2px",width:"50%",height:"25px"}},p=function(){return{"border-radius":"2px",width:"10%",height:"25px"}},v=function(){return{"border-radius":"2px",width:"10%",height:"50px"}};function P(e,t){1&e&&(d.Qb(0,"div",4),d.Qb(1,"div",5),d.Qb(2,"div",6),d.Mb(3,"ngx-skeleton-loader",7),d.Pb(),d.Qb(4,"div",8),d.Qb(5,"h5",9),d.Mb(6,"ngx-skeleton-loader",7),d.Pb(),d.Qb(7,"p",10),d.Mb(8,"ngx-skeleton-loader",7),d.Pb(),d.Qb(9,"p",10),d.Mb(10,"ngx-skeleton-loader",7),d.Pb(),d.Qb(11,"a",11),d.Mb(12,"ngx-skeleton-loader",7),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.zb(3),d.dc("theme",d.fc(5,f)),d.zb(3),d.dc("theme",d.fc(6,f)),d.zb(2),d.dc("theme",d.fc(7,h)),d.zb(2),d.dc("theme",d.fc(8,p)),d.zb(2),d.dc("theme",d.fc(9,v)))}const Q=function(){return[1,2,3,4,5,6,7]};function I(e,t){1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.pc(2,P,13,10,"div",3),d.Pb(),d.Pb()),2&e&&(d.zb(2),d.dc("ngForOf",d.fc(1,Q)))}function q(e,t){1&e&&(d.Qb(0,"div",4),d.Qb(1,"div",13),d.qc(2," No Record To Show "),d.Pb(),d.Pb())}function B(e,t){if(1&e&&(d.Qb(0,"div",4),d.Mb(1,"app-myBuildingCard",14),d.Pb()),2&e){const e=t.$implicit;d.zb(1),d.dc("item",e)}}function x(e,t){if(1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.pc(2,q,3,0,"div",12),d.pc(3,B,2,1,"div",3),d.Pb(),d.Pb()),2&e){const e=d.ac();d.zb(2),d.dc("ngIf",e.buildings&&0==e.buildings.length),d.zb(1),d.dc("ngForOf",e.buildings)}}let z=(()=>{class e{constructor(e){this.GetAllBuildingOfOwner=e,this.isLoading=!1}ngOnInit(){this.type=localStorage.getItem("type"),this.isLoading=!0,this.GetAllBuildingOfOwner.watch({},{fetchPolicy:"network-only"}).valueChanges.subscribe(e=>{this.buildings=e.data.GetAllBuildingOfOwner,this.isLoading=!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(n.k))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-myBuilding"]],decls:2,vars:2,consts:[["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],["class","col-12 col-md-12 col-sm-12",4,"ngFor","ngForOf"],[1,"col-12","col-md-12","col-sm-12"],[1,"card"],[1,"card-header"],["count","1",3,"theme"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[2,"widows","500px","height","50px"],["class","col-12 col-md-12 col-sm-12",4,"ngIf"],["role","alert",1,"alert","alert-warning"],[3,"item"]],template:function(e,t){1&e&&(d.pc(0,I,3,2,"div",0),d.pc(1,x,4,2,"div",0)),2&e&&(d.dc("ngIf",t.isLoading&&!t.buildings),d.zb(1),d.dc("ngIf",!t.isLoading&&t.buildings))},directives:[r.j,r.i,o.a,m],styles:[""]}),e})();function A(e,t){if(1&e&&(d.Qb(0,"p",5),d.qc(1),d.Pb()),2&e){const e=d.ac();d.zb(1),d.sc("Agent:",e.item.agentId.userId.name,"")}}function k(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",10),d.Yb("click",(function(){d.kc(e);const t=d.ac();return t.CreateRequest(t.item._id)})),d.qc(1),d.Pb()}if(2&e){const e=d.ac();d.dc("disabled",e.requestLoading),d.zb(1),d.rc(e.requestLoading?"Loading":"Send Request")}}const w=function(e){return["../userView",e]};let y=(()=>{class e{constructor(e,t){this.toastr=e,this.CreateRequests=t,this.requestLoading=!1,this.requestVisible=!0}ngOnInit(){console.log(this.item)}CreateRequest(e){this.requestLoading=!0,this.CreateRequests.mutate({building:e}).subscribe(e=>{e.data.CreateRequest.Errors&&e.data.CreateRequest.Errors.length>0?e.data.CreateRequest.Errors.forEach(e=>{this.toastr.error(e.message,e.error)}):(this.toastr.success("request sended Successfully"),this.requestVisible=!1),this.requestLoading=!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(s.b),d.Lb(n.i))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-buildingCard"]],inputs:{item:"item"},decls:17,vars:10,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"card-text"],["class","card-text",4,"ngIf"],[1,"card-footer"],[1,"btn","btn-primary","m-2",3,"routerLink"],["class","btn btn-warning",3,"disabled","click",4,"ngIf"],[1,"btn","btn-warning",3,"disabled","click"]],template:function(e,t){1&e&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.qc(2),d.Pb(),d.Qb(3,"div",2),d.Qb(4,"h5",3),d.qc(5,"Owner Name:"),d.Qb(6,"a",4),d.qc(7),d.Pb(),d.Pb(),d.Qb(8,"p",5),d.qc(9),d.Pb(),d.Qb(10,"p",5),d.qc(11),d.Pb(),d.pc(12,A,2,1,"p",6),d.Pb(),d.Qb(13,"div",7),d.Qb(14,"button",8),d.qc(15,"View More"),d.Pb(),d.pc(16,k,2,2,"button",9),d.Pb(),d.Pb()),2&e&&(d.zb(2),d.sc(" ",t.item.name," "),d.zb(4),d.dc("routerLink",d.gc(8,w,null==t.item||null==t.item.ownersId?null:t.item.ownersId.userId._id)),d.zb(1),d.rc(t.item.ownersId.userId.name),d.zb(2),d.sc("Adresss:",t.item.address,""),d.zb(2),d.sc("Rooms:",t.item.rooms.length,""),d.zb(1),d.dc("ngIf",t.item.agentId),d.zb(2),d.dc("routerLink",t.item._id),d.zb(2),d.dc("ngIf",t.requestVisible))},directives:[c.f,r.j,c.d],styles:[""]}),e})();const R=function(){return{"border-radius":"2px",width:"25%",height:"25px"}},L=function(){return{"border-radius":"2px",width:"50%",height:"25px"}},F=function(){return{"border-radius":"2px",width:"10%",height:"25px"}},M=function(){return{"border-radius":"2px",width:"10%",height:"50px"}};function C(e,t){1&e&&(d.Qb(0,"div",4),d.Qb(1,"div",5),d.Qb(2,"div",6),d.Mb(3,"ngx-skeleton-loader",7),d.Pb(),d.Qb(4,"div",8),d.Qb(5,"h5",9),d.Mb(6,"ngx-skeleton-loader",7),d.Pb(),d.Qb(7,"p",10),d.Mb(8,"ngx-skeleton-loader",7),d.Pb(),d.Qb(9,"p",10),d.Mb(10,"ngx-skeleton-loader",7),d.Pb(),d.Qb(11,"a",11),d.Mb(12,"ngx-skeleton-loader",7),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.zb(3),d.dc("theme",d.fc(5,R)),d.zb(3),d.dc("theme",d.fc(6,R)),d.zb(2),d.dc("theme",d.fc(7,L)),d.zb(2),d.dc("theme",d.fc(8,F)),d.zb(2),d.dc("theme",d.fc(9,M)))}const N=function(){return[1,2,3,4,5,6,7]};function O(e,t){1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.pc(2,C,13,10,"div",3),d.Pb(),d.Pb()),2&e&&(d.zb(2),d.dc("ngForOf",d.fc(1,N)))}function E(e,t){1&e&&(d.Qb(0,"div",4),d.Qb(1,"div",13),d.qc(2," No Record To Show "),d.Pb(),d.Pb())}function S(e,t){if(1&e&&(d.Qb(0,"div",4),d.Mb(1,"app-buildingCard",14),d.Pb()),2&e){const e=t.$implicit;d.zb(1),d.dc("item",e)}}function G(e,t){if(1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.pc(2,E,3,0,"div",12),d.pc(3,S,2,1,"div",3),d.Pb(),d.Pb()),2&e){const e=d.ac();d.zb(2),d.dc("ngIf",e.buildings&&0==e.buildings.length),d.zb(1),d.dc("ngForOf",e.buildings)}}let U=(()=>{class e{constructor(e,t){this.GetAllBuilding=e,this.router=t,this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.GetAllBuilding.watch().valueChanges.subscribe(e=>{this.buildings=e.data.GetAllBuilding,this.isLoading=!1})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(n.j),d.Lb(c.c))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-building"]],decls:2,vars:2,consts:[["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],["class","col-12 col-md-12 col-sm-12",4,"ngFor","ngForOf"],[1,"col-12","col-md-12","col-sm-12"],[1,"card"],[1,"card-header"],["count","1",3,"theme"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[2,"widows","500px","height","50px"],["class","col-12 col-md-12 col-sm-12",4,"ngIf"],["role","alert",1,"alert","alert-warning"],[3,"item"]],template:function(e,t){1&e&&(d.pc(0,O,3,2,"div",0),d.pc(1,G,4,2,"div",0)),2&e&&(d.dc("ngIf",t.isLoading&&!t.buildings),d.zb(1),d.dc("ngIf",!t.isLoading&&t.buildings))},directives:[r.j,r.i,o.a,y],styles:[""]}),e})();const Y=function(){return{"border-radius":"2px",width:"25%",height:"25px"}},j=function(){return{"border-radius":"2px",width:"50%",height:"25px"}},_=function(){return{"border-radius":"2px",width:"30%",height:"25px"}},V=function(){return{"border-radius":"2px",width:"23%",height:"25px"}};function D(e,t){1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.Qb(2,"div",3),d.Qb(3,"div",4),d.Qb(4,"div",5),d.Qb(5,"h5",6),d.Mb(6,"ngx-skeleton-loader",7),d.Pb(),d.Qb(7,"p",8),d.Mb(8,"ngx-skeleton-loader",7),d.Pb(),d.Pb(),d.Qb(9,"ul",9),d.Qb(10,"li",10),d.Mb(11,"ngx-skeleton-loader",7),d.Pb(),d.Qb(12,"li",10),d.Mb(13,"ngx-skeleton-loader",7),d.Pb(),d.Qb(14,"li",10),d.Mb(15,"ngx-skeleton-loader",7),d.Pb(),d.Pb(),d.Qb(16,"div",5),d.Qb(17,"a",11),d.Mb(18,"ngx-skeleton-loader",7),d.Pb(),d.Qb(19,"a",11),d.Mb(20,"ngx-skeleton-loader",7),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.zb(6),d.dc("theme",d.fc(7,Y)),d.zb(2),d.dc("theme",d.fc(8,j)),d.zb(3),d.dc("theme",d.fc(9,Y)),d.zb(2),d.dc("theme",d.fc(10,_)),d.zb(2),d.dc("theme",d.fc(11,V)),d.zb(3),d.dc("theme",d.fc(12,Y)),d.zb(2),d.dc("theme",d.fc(13,Y)))}function J(e,t){if(1&e&&(d.Qb(0,"p",8),d.qc(1),d.Pb()),2&e){const e=d.ac(2);d.zb(1),d.sc("Agent: ",e.building.agentId.userId.name,"")}}const $=function(e){return["../../room/view",e]};function T(e,t){if(1&e&&(d.Qb(0,"li",10),d.Qb(1,"a",15),d.qc(2),d.Pb(),d.Pb()),2&e){const e=t.$implicit;d.zb(1),d.dc("routerLink",d.gc(2,$,null==e||null==e.roomId?null:e.roomId._id)),d.zb(1),d.sc("Room:",null==e||null==e.roomId?null:e.roomId.name,"")}}function X(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",18),d.Yb("click",(function(){return d.kc(e),d.ac(3).statusChange()})),d.qc(1,"Block"),d.Pb()}}function H(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",18),d.Yb("click",(function(){return d.kc(e),d.ac(3).statusChange()})),d.qc(1,"UnBlock"),d.Pb()}}function K(e,t){if(1&e&&(d.Qb(0,"div",16),d.pc(1,X,2,0,"button",17),d.pc(2,H,2,0,"button",17),d.Pb()),2&e){const e=d.ac(2);d.zb(1),d.dc("ngIf",e.building.status),d.zb(1),d.dc("ngIf",!e.building.status)}}function W(e,t){if(1&e&&(d.Qb(0,"div",1),d.Qb(1,"div",2),d.Qb(2,"div",3),d.Qb(3,"div",4),d.Qb(4,"div",5),d.Qb(5,"h5",6),d.qc(6),d.Pb(),d.Qb(7,"p",8),d.qc(8),d.Pb(),d.Qb(9,"p",8),d.qc(10),d.Pb(),d.pc(11,J,2,1,"p",12),d.Pb(),d.Qb(12,"ul",9),d.pc(13,T,3,4,"li",13),d.Pb(),d.pc(14,K,3,2,"div",14),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e){const e=d.ac();d.zb(6),d.rc(e.building.name),d.zb(2),d.sc("Address:",e.building.address,""),d.zb(2),d.sc("owner:",e.building.ownersId.userId.name,""),d.zb(1),d.dc("ngIf",e.building.agentId),d.zb(2),d.dc("ngForOf",e.building.rooms),d.zb(1),d.dc("ngIf",0==e.type)}}let Z=(()=>{class e{constructor(e,t,i,r,n){this.route=e,this.GetBuildingById=t,this.CreateRequests=i,this.toastr=r,this.BuildingStatusUpdate=n,this.isLoading=!1}ngOnInit(){this.type=localStorage.getItem("type"),this.isLoading=!0,this.route.paramMap.subscribe(e=>{this.GetBuildingById.watch({buildingId:e.get("id")}).valueChanges.subscribe(e=>{setTimeout(()=>{this.building=e.data.GetBuildingById,this.isLoading=!1},5e3)})})}statusChange(){this.BuildingStatusUpdate.mutate({buildingId:this.building._id}).subscribe(e=>{e.data.BuildingStatusUpdate.Errors&&e.data.BuildingStatusUpdate.Errors.length>0?e.data.BuildingStatusUpdate.Errors.forEach(e=>{this.toastr.error(e.message,e.error)}):(this.toastr.success("Building Status Change Success","Success"),this.building.status=e.data.BuildingStatusUpdate.Data.status)})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(c.a),d.Lb(n.n),d.Lb(n.i),d.Lb(s.b),d.Lb(n.e))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-view"]],decls:2,vars:2,consts:[["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-12","col-md-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"card-title"],["count","1",3,"theme"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["href","#",1,"card-link"],["class","card-text",4,"ngIf"],["class","list-group-item",4,"ngFor","ngForOf"],["class","card-footer",4,"ngIf"],[3,"routerLink"],[1,"card-footer"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(d.pc(0,D,21,14,"div",0),d.pc(1,W,15,6,"div",0)),2&e&&(d.dc("ngIf",!t.building&&t.isLoading),d.zb(1),d.dc("ngIf",t.building&&!t.isLoading))},directives:[r.j,o.a,r.i,c.f],styles:[""]}),e})();var ee=i("3Pt+");function te(e,t){1&e&&(d.Qb(0,"div",12),d.qc(1," Name is required "),d.Pb())}function ie(e,t){1&e&&(d.Qb(0,"div",12),d.qc(1," Address is required "),d.Pb())}function re(e,t){1&e&&(d.Qb(0,"div",12),d.qc(1," Name is required "),d.Pb())}function ne(e,t){1&e&&(d.Qb(0,"div",12),d.qc(1," Address is required "),d.Pb())}function de(e,t){if(1&e){const e=d.Rb();d.Qb(0,"div",13),d.Qb(1,"div",14),d.Mb(2,"hr",15),d.Qb(3,"div",16),d.Mb(4,"input",17),d.pc(5,re,2,0,"div",6),d.Pb(),d.Qb(6,"div",16),d.Mb(7,"textarea",18),d.qc(8),d.pc(9,ne,2,0,"div",6),d.Pb(),d.Qb(10,"div",4),d.Qb(11,"button",19),d.Yb("click",(function(){d.kc(e);const i=t.index;return d.ac().RemoveRoom(i)})),d.qc(12,"Remove Room"),d.Pb(),d.Pb(),d.Mb(13,"hr",15),d.Pb(),d.Pb()}if(2&e){const e=t.$implicit,i=t.index;d.zb(1),d.dc("formGroupName",i),d.zb(4),d.dc("ngIf",e.get("name").touched&&(null==e.get("name").errors?null:e.get("name").errors.required)),d.zb(3),d.sc(" ",e.get("address").valid," "),d.zb(1),d.dc("ngIf",e.get("address").touched&&(null==e.get("address").errors?null:e.get("address").errors.required))}}function oe(e,t){if(1&e){const e=d.Rb();d.Qb(0,"button",20),d.Yb("click",(function(){d.kc(e);const t=d.ac();return t.removeAgentBtn(null==t.building?null:t.building._id)})),d.qc(1,"Remove Agent"),d.Pb()}}function se(e,t){1&e&&(d.Qb(0,"div",11),d.qc(1," Name is required "),d.Pb())}function ce(e,t){1&e&&(d.Qb(0,"div",11),d.qc(1," Address is required "),d.Pb())}function be(e,t){1&e&&(d.Qb(0,"div",11),d.qc(1," Name is required "),d.Pb())}function ae(e,t){1&e&&(d.Qb(0,"div",11),d.qc(1," Address is required "),d.Pb())}function ue(e,t){if(1&e){const e=d.Rb();d.Qb(0,"div",12),d.Qb(1,"div",13),d.Mb(2,"hr",14),d.Qb(3,"div",15),d.Mb(4,"input",16),d.pc(5,be,2,0,"div",6),d.Pb(),d.Qb(6,"div",15),d.Mb(7,"textarea",17),d.qc(8),d.pc(9,ae,2,0,"div",6),d.Pb(),d.Qb(10,"div",4),d.Qb(11,"button",18),d.Yb("click",(function(){d.kc(e);const i=t.index;return d.ac().RemoveRoom(i)})),d.qc(12,"Remove Room"),d.Pb(),d.Pb(),d.Mb(13,"hr",14),d.Pb(),d.Pb()}if(2&e){const e=t.$implicit,i=t.index;d.zb(1),d.dc("formGroupName",i),d.zb(4),d.dc("ngIf",e.get("name").touched&&(null==e.get("name").errors?null:e.get("name").errors.required)),d.zb(3),d.sc(" ",e.get("address").valid," "),d.zb(1),d.dc("ngIf",e.get("address").touched&&(null==e.get("address").errors?null:e.get("address").errors.required))}}const le=[{path:"",component:U},{path:":id",component:Z},{path:"manage",children:[{path:"edit",component:z},{path:"edit/:id",component:(()=>{class e{constructor(e,t,i,r,n,d,o){this.fb=e,this.AddBuilding=t,this.toastr=i,this.GetBuildingById=r,this.UpdateBuilding=n,this.route=d,this.RemoveAgent=o,this.isLoading=!1}get rooms(){return this.AddBuildingForm.controls.rooms}get name(){return this.AddBuildingForm.controls.name}get address(){return this.AddBuildingForm.controls.address}get room(){return this.fb.group({name:["",ee.n.required],address:["",ee.n.required]})}ngOnInit(){this.route.paramMap.subscribe(e=>{this.id=e.get("id"),this.GetBuildingById.watch({buildingId:e.get("id")},{fetchPolicy:"network-only"}).valueChanges.subscribe(e=>{this.building=e.data.GetBuildingById,this.AddBuildingForm=this.fb.group({name:[e.data.GetBuildingById.name,ee.n.required],address:[e.data.GetBuildingById.address,ee.n.required],rooms:this.fb.array([])})})}),this.AddBuildingForm=this.fb.group({name:["",ee.n.required],address:["",ee.n.required],rooms:this.fb.array([])})}AddRoom(){this.rooms.push(this.room)}RemoveRoom(e){this.rooms.removeAt(e)}onSubmit(e){this.UpdateBuilding.mutate(Object.assign(Object.assign({},e.value),{id:this.id})).subscribe(e=>{e.errors&&e.errors.length>0?e.errors.forEach(e=>{this.toastr.error(e.message,"server error")}):e.data.UpdateBuilding.Errors&&e.data.UpdateBuilding.Errors.length>0?e.data.UpdateBuilding.Errors.forEach(e=>{this.toastr.error(e.message,"server error")}):(this.AddBuildingForm=this.fb.group({name:[e.data.UpdateBuilding.Data.name,ee.n.required],address:[e.data.UpdateBuilding.Data.address,ee.n.required],rooms:this.fb.array([])}),this.toastr.success("Successfully added Building","Success"))})}removeAgentBtn(e){this.RemoveAgent.mutate({buildingId:e}).subscribe(e=>{e.data.RemoveAgent.Errors&&e.data.RemoveAgent.Errors.length>0?e.data.RemoveAgent.Errors.forEach(e=>{this.toastr.error(e.message,"Unsuccessfully")}):this.building.agentId=null})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(ee.c),d.Lb(n.a),d.Lb(s.b),d.Lb(n.n),d.Lb(n.A),d.Lb(c.a),d.Lb(n.x))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-edit"]],decls:18,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[3,"formGroup"],[1,"col"],["type","text","formControlName","name","placeholder","Building Name",1,"form-control"],["class","text text-danger mt-1",4,"ngIf"],["placeholder","Address","formControlName","address",1,"form-control"],["class","row","formArrayName","rooms",4,"ngFor","ngForOf"],[1,"btn","btn-primary","m-5",3,"click"],["class","btn btn-danger m-5",3,"click",4,"ngIf"],[1,"btn","btn-primary","btn-block","btn-lg","m-5",3,"disabled","click"],[1,"text","text-danger","mt-1"],["formArrayName","rooms",1,"row"],[3,"formGroupName"],[2,"border-top","1px solid #8c8b8b"],[1,"col","m-5"],["type","text","formControlName","name","placeholder","Room Name",1,"form-control"],["formControlName","address","placeholder","Room Address",1,"form-control"],[1,"btn","btn-danger",3,"click"],[1,"btn","btn-danger","m-5",3,"click"]],template:function(e,t){1&e&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.Qb(2,"div",2),d.Qb(3,"form",3),d.Qb(4,"div",1),d.Qb(5,"div",4),d.Mb(6,"input",5),d.pc(7,te,2,0,"div",6),d.Pb(),d.Qb(8,"div",4),d.Mb(9,"textarea",7),d.pc(10,ie,2,0,"div",6),d.Pb(),d.Pb(),d.pc(11,de,14,4,"div",8),d.Qb(12,"button",9),d.Yb("click",(function(){return t.AddRoom()})),d.qc(13,"add Room"),d.Pb(),d.pc(14,oe,2,0,"button",10),d.Qb(15,"button",11),d.Yb("click",(function(){return t.onSubmit(t.AddBuildingForm)})),d.Qb(16,"span"),d.qc(17),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.zb(3),d.dc("formGroup",t.AddBuildingForm),d.zb(4),d.dc("ngIf",t.AddBuildingForm.get("name").touched&&(null==t.AddBuildingForm.get("name").errors?null:t.AddBuildingForm.get("name").errors.required)),d.zb(3),d.dc("ngIf",t.address.touched&&(null==t.address.errors?null:t.address.errors.required)),d.zb(1),d.dc("ngForOf",t.AddBuildingForm.get("rooms").controls),d.zb(3),d.dc("ngIf",null==t.building?null:t.building.agentId),d.zb(1),d.Db("loader--text",t.isLoading),d.dc("disabled",!t.AddBuildingForm.valid&&!t.AddBuildingForm.dirty),d.zb(2),d.rc(t.isLoading?"":"Update Building"))},directives:[ee.p,ee.i,ee.e,ee.a,ee.h,ee.d,r.j,r.i,ee.b,ee.f],styles:[""]}),e})()},{path:"my",component:z},{path:"add",component:(()=>{class e{constructor(e,t,i){this.fb=e,this.AddBuilding=t,this.toastr=i,this.isLoading=!1}get rooms(){return this.AddBuildingForm.controls.rooms}get name(){return this.AddBuildingForm.controls.name}get address(){return this.AddBuildingForm.controls.address}get room(){return this.fb.group({name:[[""],ee.n.required],address:[[""],ee.n.required]})}ngOnInit(){this.AddBuildingForm=this.fb.group({name:[[""],ee.n.required],address:[[""],ee.n.required],rooms:this.fb.array([])})}AddRoom(){this.rooms.push(this.room)}RemoveRoom(e){this.rooms.removeAt(e)}onSubmit(e){this.AddBuilding.mutate(e.value).subscribe(e=>{e.errors&&e.errors.length>0?e.errors.forEach(e=>{this.toastr.error(e.message,"server error")}):e.data.AddBuilding.Errors&&e.data.AddBuilding.Errors.length>0?e.data.AddBuilding.Errors.forEach(e=>{this.toastr.error(e.message,"server error")}):this.toastr.success("Successfully added Building","Success")})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(ee.c),d.Lb(n.a),d.Lb(s.b))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-add"]],decls:17,vars:8,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[3,"formGroup"],[1,"col"],["type","text","formControlName","name","placeholder","Building Name",1,"form-control"],["class","text text-danger mt-1",4,"ngIf"],["placeholder","Address","formControlName","address",1,"form-control"],["class","row","formArrayName","rooms",4,"ngFor","ngForOf"],[1,"btn","btn-primary","m-5",3,"click"],[1,"btn","btn-primary","btn-block","btn-lg","m-5",3,"disabled","click"],[1,"text","text-danger","mt-1"],["formArrayName","rooms",1,"row"],[3,"formGroupName"],[2,"border-top","1px solid #8c8b8b"],[1,"col","m-5"],["type","text","formControlName","name","placeholder","Room Name",1,"form-control"],["formControlName","address","placeholder","Room Address",1,"form-control"],[1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.Qb(2,"div",2),d.Qb(3,"form",3),d.Qb(4,"div",1),d.Qb(5,"div",4),d.Mb(6,"input",5),d.pc(7,se,2,0,"div",6),d.Pb(),d.Qb(8,"div",4),d.Mb(9,"textarea",7),d.pc(10,ce,2,0,"div",6),d.Pb(),d.Pb(),d.pc(11,ue,14,4,"div",8),d.Qb(12,"button",9),d.Yb("click",(function(){return t.AddRoom()})),d.qc(13,"add Room"),d.Pb(),d.Qb(14,"button",10),d.Yb("click",(function(){return t.onSubmit(t.AddBuildingForm)})),d.Qb(15,"span"),d.qc(16),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.zb(3),d.dc("formGroup",t.AddBuildingForm),d.zb(4),d.dc("ngIf",t.AddBuildingForm.get("name").touched&&(null==t.AddBuildingForm.get("name").errors?null:t.AddBuildingForm.get("name").errors.required)),d.zb(3),d.dc("ngIf",t.address.touched&&(null==t.address.errors?null:t.address.errors.required)),d.zb(1),d.dc("ngForOf",t.AddBuildingForm.get("rooms").controls),d.zb(3),d.Db("loader--text",t.isLoading),d.dc("disabled",!t.AddBuildingForm.valid),d.zb(2),d.rc(t.isLoading?"":"Add Building"))},directives:[ee.p,ee.i,ee.e,ee.a,ee.h,ee.d,r.j,r.i,ee.b,ee.f],styles:[""]}),e})()}]}];let ge=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[c.g.forChild(le)],c.g]}),e})(),me=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[r.b,ge,ee.k,ee.g,o.b]]}),e})()}}]);