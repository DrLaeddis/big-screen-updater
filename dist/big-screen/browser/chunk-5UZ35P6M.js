import{a as m}from"./chunk-K3YAW35H.js";import{Ha as c,Ia as l,Ja as d,Ra as v,Sa as f,Ta as p,W as r,Za as u,sa as a}from"./chunk-WH7RZBSH.js";var h=["videoPlayer"],w=(()=>{let t=class t{constructor(i){this.websocketService=i}ngOnInit(){this.websocketService.onMessage("big-screen").subscribe(i=>{let{event:e,data:o}=i;e==="start-session"?this.videoPlayer.nativeElement.play():e==="stop-session"?this.videoPlayer.nativeElement.pause():e==="change-duration-session"&&(this.videoPlayer.nativeElement.currentTime=o)})}};t.\u0275fac=function(e){return new(e||t)(a(m))},t.\u0275cmp=r({type:t,selectors:[["app-session"]],viewQuery:function(e,o){if(e&1&&v(h,7),e&2){let s;f(s=p())&&(o.videoPlayer=s.first)}},standalone:!0,features:[u],decls:4,vars:0,consts:[["videoPlayer",""],[1,"w-screen","h-screen","fixed"],["loop","","autoplay","",1,"video","video-full"],["src","sample.mp4","type","video/mp4"]],template:function(e,o){e&1&&(c(0,"div",1)(1,"video",2,0),d(3,"source",3),l()())},styles:[".video-full[_ngcontent-%COMP%]{width:100vw;height:100vh;overflow:hidden;position:fixed;z-index:-1}.video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"]});let n=t;return n})();export{w as SessionPage};