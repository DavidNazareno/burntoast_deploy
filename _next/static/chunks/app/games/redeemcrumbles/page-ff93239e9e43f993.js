(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{9391:function(){},7330:function(t,e,n){Promise.resolve().then(n.bind(n,5175))},5175:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return j}});var a=n(8754),r=n(2123),s=n(397),o=n.n(s),i=n(7275),u=n.n(i),l=n(511),c=n(1522),d=n(4712),_=n(4295);let h=async t=>{let e=(0,_.e)(),{data:n,error:a}=await e.from("burn_toast_scores").select("*").eq("address",t);if(null!=a)throw Error(a.message);let r=n.length>0?n[0]:{address:"",cant:0,last_burn_at:""};if(""!==r.last_burn_at){let t=await fetch("https://worldtimeapi.org/api/ip"),{unixtime:e}=await t.json(),n=new Date(new Date(1e3*e));if(n.setDate(n.getDate()-1),new Date(r.last_burn_at)>n)return{...r,isBurned:!0}}return{...r,isBurned:!1}},f=async t=>{let e=(0,_.e)(),{error:n}=await e.from("burn_toast_scores").insert([t]);if(null!=n)throw Error(n.message)},p=async t=>{let e=(0,_.e)(),{error:n}=await e.from("burn_toast_scores").update(t).match({address:t.address});if(null!=n)throw Error(n.message)};var m=n(4284),w=n(4625),b=n(5987),x=(t,e,n)=>{(0,r.useEffect)(()=>{let n=setTimeout(()=>{t()},e);return()=>{clearTimeout(n)}},n)},g=n(1786),y=n(2547),v=n(8603),j=()=>{(0,l.Z)();let[t,e]=(0,r.useState)({address:"",cant:0,last_burn_at:"",isBurned:!1}),{play:n}=(0,b.Z)("https://assets.codepen.io/605876/kids-cheering.mp3"),[s,i]=(0,r.useState)(""),[_,j]=(0,r.useState)("t-idle"),[N,Z]=(0,r.useState)("p-t-idle"),E=(0,r.useRef)(null),I=(0,r.useRef)(null),C=(0,r.useRef)(null),[T,k]=(0,r.useState)(!1),[Y,B]=(0,r.useState)(0);x(()=>{M()},500,[s]);let M=async()=>{e(await h(s))};(0,r.useEffect)(()=>{if("t-start"===_){let t=setTimeout(()=>{j("t-end"),Z("p-t-end"),d.ZP.to(E.current,{duration:2,y:-45}),P()},3e3),e=d.ZP.fromTo(I.current,{x:-5},{duration:.1,x:5,repeat:-1,yoyo:!0});return()=>{clearTimeout(t),e.kill()}}},[_]),(0,r.useEffect)(()=>{T&&(0,m.Z)({particleCount:100,spread:70,origin:{y:.6}})},[T]),(0,r.useEffect)(()=>{if("t-end"===_){(0,m.Z)({particleCount:200,spread:160,origin:{y:.6}}),n(),d.ZP.timeline().fromTo(C.current,{opacity:1},{opacity:1,duration:1}).to(C.current,{textContent:"You burnt ".concat(Y," bread crumbs!"),duration:1});let t=[d.ZP.to(C.current,{rotation:"-5deg",duration:1,repeat:-1,yoyo:!0,ease:"power1.inOut"}),d.ZP.to(C.current,{rotation:"5deg",duration:1,repeat:-1,yoyo:!0,ease:"power1.inOut"}),d.ZP.to(C.current,{scale:1.1,duration:.5,repeat:-1,yoyo:!0,ease:"power1.inOut"}),d.ZP.to(C.current,{y:"+=10",duration:.5,repeat:-1,yoyo:!0,ease:"power1.inOut"}),d.ZP.to(C.current,{opacity:.5,duration:.5,repeat:-1,yoyo:!0,ease:"power1.inOut"})];return()=>{t.forEach(t=>t.kill())}}},[_,Y]);let P=async()=>{try{let e={address:s,cant:t.cant+(Math.floor(200*Math.random())+1),last_burn_at:new Date().toISOString()};B(e.cant),k(!0),t.isBurned||(""===t.address?await f(e):await p(e),await M())}catch(t){console.error(t),w.default.error("Error saving score")}};return(0,a.jsx)("div",{className:o().game_container,children:(0,a.jsxs)("div",{className:"flex flex-col items-center mx-auto w-full p-2 relative max-w-[1000px] gap-6 overflow-auto",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(v.default,{href:"/games",children:(0,a.jsx)(y.default,{icon:(0,a.jsx)("img",{src:"/icons/back.png"})})})}),(0,a.jsxs)("h1",{className:"".concat(u().title," text-6xl md:text-8xl  "),children:[(0,a.jsx)("span",{children:"REDEEM"}),(0,a.jsx)("span",{children:"CRUMBLES"})]}),(0,a.jsxs)("div",{className:"relative flex flex-col justify-center h-full mt-6 items-center gap-2",children:[T&&(0,a.jsx)("canvas",{id:"confetti-canvas"}),(0,a.jsxs)("div",{ref:I,className:"relative z-10 flex justify-center",children:[(0,a.jsx)("img",{src:"/assets-burntoast/".concat(_,".png"),alt:"Toaster",className:"toaster w-64 z-10"}),(0,a.jsx)("img",{ref:E,src:"/assets-burntoast/".concat(N,".png"),alt:"Bread",className:"bread absolute bottom-36 w-32"})]}),(0,a.jsx)("input",{className:"text-primary p-2 rounded-lg h-12 transform transition duration-150  ease-in-out w-64 hover:scale-105",type:"text",id:"wallet",name:"wallet",placeholder:"Wallet address",required:!0,onChange:t=>{(0,g.Q)(t.target.value)?i(t.target.value):(i(""),w.default.error("Invalid wallet address"))}}),""!==s&&(0,a.jsxs)("span",{className:"text-white",children:["Bread crumbs : ",t.cant]}),""!==t.last_burn_at&&(0,a.jsxs)("span",{className:"text-white",children:["Next burn available in: ",(()=>{if(""!==t.last_burn_at&&t.isBurned){let e=new Date(t.last_burn_at),n=864e5-(new Date().getTime()-e.getTime());return"".concat(Math.floor(n/36e5),"h ").concat(Math.floor(n%36e5/6e4),"m ").concat(Math.floor(n%6e4/1e3),"s")}return"Now!"})()]}),(0,a.jsx)(c.Z,{onClick:()=>{""===s||t.isBurned?w.default.error("Please enter a wallet address"):(j("t-start"),Z("p-t-idle"),d.ZP.to(E.current,{duration:2,y:100}))},disabled:"t-start"===_||t.isBurned,children:"Redeem!"})]})]})})}},1522:function(t,e,n){"use strict";var a=n(8754);n(2123),e.Z=t=>{let{onClick:e,children:n,disabled:r}=t;return(0,a.jsx)("button",{className:"bg-primary border-white border-4 rounded-xl text-2xl  p-4 w-44 text-white transform transition duration-150 ease-in-out hover:bg-yellow hover:scale-105 ",onClick:e,disabled:r,children:n})}},2547:function(t,e,n){"use strict";n.r(e);var a=n(8754);n(2123),e.default=t=>{let{icon:e,className:n,children:r,onClick:s}=t;return(0,a.jsxs)("button",{className:"bg-primary rounded-xl text-2xl p-2 h-12 w-12 md:w-14 md:h-14 text-white transform transition duration-150 ease-in-out hover:bg-yellow hover:scale-105 ".concat(n),onClick:s,children:[e,null!==r&&(0,a.jsx)("span",{className:"ml-2",children:r})]})}},5987:function(t,e,n){"use strict";var a=n(2123);e.Z=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,[n,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let n=new Audio(t);return n.volume=e,r(n),()=>{n.pause(),n.currentTime=0}},[t,e]),{play:async()=>await (null==n?void 0:n.play()),pause:()=>null==n?void 0:n.pause(),stop:()=>{null==n||n.pause(),null!=n&&(n.currentTime=0)}}}},1786:function(t,e,n){"use strict";n.d(e,{Q:function(){return r}});var a=n(4642);let r=t=>{let e;try{return e=new a.nh(t),a.nh.isOnCurve(e.toBytes())}catch(t){return!1}}},4295:function(t,e,n){"use strict";n.d(e,{e:function(){return r}});var a=n(2242);let r=()=>(0,a.AY)("https://xcnojfccikqoqevmraho.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjbm9qZmNjaWtxb3Fldm1yYWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTk3NDUsImV4cCI6MjAyNzI5NTc0NX0.ZzgsRR1PQ56qTYuzr97T_RkP8YZ2_sgwu68hKnJ4K7E")},511:function(t,e,n){"use strict";var a=n(4295),r=n(2123),s=n(4625);e.Z=()=>{let[t,e]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let t=null;try{t=(0,a.e)(),e(t)}catch(t){s.default.error("Failed to initialize Burntoast  client. Contact the developer for more information."),console.error("Failed to initialize Burntoast  client. Contact the developer for more information.")}},[]),t}},7275:function(t){t.exports={title:"start-screen_title__suY7P",logo:"start-screen_logo__Qu2ae"}},397:function(t){t.exports={toaster:"punchtoast_toaster__6_QZA",game_container:"punchtoast_game_container__s_d9w",button:"punchtoast_button__Yhhdg",celebration:"punchtoast_celebration__CAhDJ",word:"punchtoast_word__w2vG6",char:"punchtoast_char__G5HY_",jump:"punchtoast_jump__TMcSj",countdown_number:"punchtoast_countdown_number__9aygh",icon_button:"punchtoast_icon_button__gbUVi",mute_button:"punchtoast_mute_button__ufyh4",mallet:"punchtoast_mallet__Gl3iu",end_button:"punchtoast_end_button__vG8dt",game_info:"punchtoast_game_info__IkiMu",info_screen:"punchtoast_info_screen__YwwI_",results:"punchtoast_results__iYzRR",icon:"punchtoast_icon___J7sW",sr_only:"punchtoast_sr_only__YbiYi",info__text:"punchtoast_info__text__7d02b","boring-text":"punchtoast_boring-text__2Yt07",footer:"punchtoast_footer__NNTVw","footer-container":"punchtoast_footer-container__kQFMc",github:"punchtoast_github__wlGfD",website:"punchtoast_website__YJssO"}}},function(t){t.O(0,[635,364,254,625,324,146,672,744],function(){return t(t.s=7330)}),_N_E=t.O()}]);