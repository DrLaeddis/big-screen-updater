import{a as V}from"./chunk-TF2CSF5F.js";import{a as P}from"./chunk-7W76JT5L.js";import{a as k}from"./chunk-6HXTQR5D.js";import{a as F,b as U}from"./chunk-JWDGFI55.js";import{g as A,h as L,i as O,j as N}from"./chunk-PQNYVRMP.js";import{a as B}from"./chunk-K3YAW35H.js";import{Ba as b,Ca as s,Ea as _,Ha as l,Ia as a,Ja as c,Ma as T,N as C,Na as u,Oa as S,Ra as E,S as D,Sa as z,Ta as H,Va as g,W as f,Xa as M,Za as v,_a as j,ca as x,da as I,o as y,oa as d,ra as r,sa as h,x as w}from"./chunk-WH7RZBSH.js";var G=(()=>{let t=class t{constructor(){this.environmentLabel="",this.environmentIcon="",this.environmentColor="",this.information="information.svg"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=f({type:t,selectors:[["app-environment"]],inputs:{environmentLabel:"environmentLabel",environmentIcon:"environmentIcon",environmentColor:"environmentColor"},standalone:!0,features:[v],decls:5,vars:5,consts:[[1,"w-[35vw]","h-[35vw]","flex","flex-col","justify-center","items-center","border-4","border-secondary","rounded-full","gap-6","duration-300","active:border-primary","relative"],[1,"flex","flex-col","justify-center","items-center"],["alt","",1,"w-[15vw]","h-auto",3,"src"]],template:function(n,i){n&1&&(l(0,"button",0)(1,"div",1),c(2,"img",2),l(3,"h3"),g(4),a()()()),n&2&&(r(2),s("src",i.environmentIcon,d),r(),_("w-[70%] uppercase text-3xl text-center font-semibold ",i.environmentColor,""),r(),M(" ",i.environmentLabel," "))}});let o=t;return o})();var J=(()=>{let t=class t{constructor(e){this.http=e,this.headers=new F({"X-Authorization":"dfdsgfdgdfgdfgdfgdf"}),this.apiUrl="http://localhost:3000/mobile-api"}getselftdevelopment(){return this.http.get(`${this.apiUrl}/selftdevelopment`,{headers:this.headers}).pipe(w(e=>y(()=>e)))}};t.\u0275fac=function(n){return new(n||t)(D(U))},t.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var R=o=>({"col-span-2 place-self-center":o});function W(o,t){if(o&1&&(l(0,"div",14),c(1,"app-door",15),a()),o&2){let m=S();r(),s("isClose",m.doorClosed)}}function X(o,t){if(o&1){let m=T();l(0,"app-environment",16),u("click",function(){let n=x(m).$implicit;return I(n.clickHandler())}),a()}if(o&2){let m=t.$implicit,e=t.index,n=S();s("environmentLabel",m.label)("environmentIcon",m.icon)("environmentColor",m.color)("ngClass",j(4,R,n.isLastOdd(e)))}}var ae=(()=>{let t=class t{constructor(e,n){this.websocketService=e,this.selfDev=n,this.logo="logo-w-name.svg",this.matrix="matrix.svg",this.guidedMeditation="guided-meditation.svg",this.guidedBreathwork="guided-breathwork.svg",this.soundHealing="sound-healing.svg",this.information="information.svg",this.homeButton="home-button.svg",this.token="",this.doorClosed=!1,this.listSelfDef=[],this.selectedSelfDev="",this.defaultValue=0,this.doorStorage=localStorage.getItem("doorAnimation"),this.parseDoorStorage=this.doorStorage?JSON.parse(this.doorStorage):null,this.stopDoorAnimation=this.parseDoorStorage,this.environments=[{label:"Guided Meditation",icon:this.guidedMeditation,color:"text-[#008278]",clickHandler:()=>this.handleSelfDevelopment("GUIDED MEDITATION")},{label:"Guided Breathwork",icon:this.guidedBreathwork,color:"text-[#7B62E7]",clickHandler:()=>this.handleSelfDevelopment("GUIDED BREATHWORK")},{label:"Sound Healing",icon:this.soundHealing,color:"text-[#006ABA]",clickHandler:()=>this.handleSelfDevelopment("SOUND HEALING")}]}ngOnInit(){this.defaultValue=1,console.log("check default value: ",this.defaultValue),console.log("This is JWT Token: ",localStorage.getItem("Token")),this.selfDev.getselftdevelopment().subscribe({next:e=>{this.listSelfDef=e,console.log("getselftdevelopment",e)},error:e=>{console.error("Error fetching questions:",e)}}),this.websocketService.onMessage("gotoSelfDev").subscribe({next:e=>{}}),this.websocketService.onMessage("sendPresetData2").subscribe({next:e=>{localStorage.setItem("presetData",JSON.stringify(e))},error:e=>{console.log("error fetching",e)}}),this.token=localStorage.getItem("Token")||""}isLastOdd(e){return e===this.environments.length-1&&this.environments.length%2!==0}handleSelfDevelopment(e){if(!this.token){console.log("token not found");return}localStorage.setItem("doorAnimation",JSON.stringify(!1)),this.selectedSelfDev=this.listSelfDef.find(i=>i.self_development_name===e)?.id||"",this.selectedSelfDev!==""&&(localStorage.setItem("selectSelfDev",this.selectedSelfDev),this.websocketService.sendMessage("selectSelfDev",this.selectedSelfDev,this.token))}customizeYourEnvironment(){if(!this.token){console.log("token not found");return}this.doorClosed=!0,this.stopDoorAnimation=!0,setTimeout(()=>{this.doorComponent.transitionEnded.subscribe(e=>{e==="right"&&setTimeout(()=>{this.websocketService.sendMessage("gotoWorkrestPlay","",this.token)},500)})}),console.log("Click Customize Your Environment Clicked!")}gotoHome(){if(!this.token){console.log("token not found");return}this.stopDoorAnimation=!0,this.doorClosed=!0,setTimeout(()=>{if(!this.doorComponent){console.error("doorComponent is not initialized.");return}this.doorComponent.transitionEnded.subscribe(e=>{e==="right"&&setTimeout(()=>{this.websocketService.sendMessage("gotoHome","",this.token)},500)})})}};t.\u0275fac=function(n){return new(n||t)(h(B),h(J))},t.\u0275cmp=f({type:t,selectors:[["app-task55"]],viewQuery:function(n,i){if(n&1&&E(k,5),n&2){let p;z(p=H())&&(i.doorComponent=p.first)}},standalone:!0,features:[v],decls:16,vars:12,consts:[["class","w-screen h-screen bg-transparent absolute pointer-events-none z-50",4,"ngIf"],[3,"backgroundImage"],[1,"w-[85%]","h-full","flex","flex-col","items-center","justify-center","gap-10"],["alt","Regenesis Logo",1,"w-[70%]","mb-10",3,"src"],[1,"uppercase","text-6xl","tracking-widest","text-secondary","font-medium","mb-20"],[1,"relative","w-full","flex","flex-col","items-center","justify-center","z-0"],[1,"absolute","w-[60vw]","-translate-y-28","z-0",3,"src"],[1,"w-full","grid","grid-cols-2","items-center","justify-center","z-10","gap-6"],[3,"environmentLabel","environmentIcon","environmentColor","ngClass","click",4,"ngFor","ngForOf"],[1,"w-full","flex","flex-row","items-center","justify-center","gap-6","translate-x-4","mt-6"],[3,"click","buttonName","textSize","paddingX","paddingY","borderSize"],["alt","Preset Information",1,"w-12",3,"src"],[1,"w-32","h-32","flex","items-center","justify-center","border-4","border-secondary","rounded-full","duration-300","active:border-primary",3,"click"],["alt","",1,"w-[60%]",3,"src"],[1,"w-screen","h-screen","bg-transparent","absolute","pointer-events-none","z-50"],[3,"isClose"],[3,"click","environmentLabel","environmentIcon","environmentColor","ngClass"]],template:function(n,i){n&1&&(b(0,W,2,1,"div",0),l(1,"app-layout",1)(2,"div",2),c(3,"img",3),l(4,"h1",4),g(5," Self Development "),a(),l(6,"div",5),c(7,"img",6),l(8,"div",7),b(9,X,1,6,"app-environment",8),a()(),l(10,"div",9)(11,"app-button",10),u("click",function(){return i.customizeYourEnvironment()}),a(),l(12,"button"),c(13,"img",11),a()(),l(14,"button",12),u("click",function(){return i.gotoHome()}),c(15,"img",13),a()()()),n&2&&(s("ngIf",i.stopDoorAnimation),r(),s("backgroundImage","background-image"),r(2),s("src",i.logo,d),r(4),s("src",i.matrix,d),r(2),s("ngForOf",i.environments),r(2),s("buttonName","Customize Your Environment")("textSize","text-3xl")("paddingX","px-8")("paddingY","py-6")("borderSize","border-4"),r(2),s("src",i.information,d),r(2),s("src",i.homeButton,d))},dependencies:[P,N,A,L,O,G,V,k]});let o=t;return o})();export{ae as Task55Page};