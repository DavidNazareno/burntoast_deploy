(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{9391:function(){},1516:function(e,t,s){Promise.resolve().then(s.bind(s,275))},275:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return U}});var a=s(8754),r=s(2123),l=s(4712),n=s(5987),o=()=>[,,,,,].fill(null).map(()=>({speed:l.ZP.utils.random(.5,2),delay:l.ZP.utils.random(.5,5),points:100}));let c=(e,t)=>{let[s,a]=(0,r.useState)(()=>{{let s=window.localStorage.getItem(e);return null!==s?JSON.parse(s):t}});return(0,r.useEffect)(()=>{window.localStorage.setItem(e,JSON.stringify(s))},[e,s]),[s,e=>{a(e instanceof Function?e(s):e)}]};var i=(e,t)=>{let[s,a]=c(e,t);return[s,e=>{a(e)}]},d=s(7275),u=s.n(d),_=s(1786),m=s(1522),h=s(4625),p=e=>{let{onStart:t,setName:s,setWallet:r}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-center",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("input",{className:"text-primary  p-2 rounded-lg h-12 transform transition duration-150 ease-in-out w-64 hover:scale-105",type:"text",id:"name",name:"name",placeholder:"Enter name",required:!0,onChange:e=>{s(e.target.value)}}),(0,a.jsx)("input",{className:"text-primary p-2 rounded-lg h-12 transform transition duration-150 ease-in-out w-64 hover:scale-105",type:"text",id:"wallet",name:"wallet",placeholder:"Solana wallet address",required:!0,onChange:e=>{(0,_.Q)(e.target.value)?r(e.target.value):(r(""),h.default.error("Invalid wallet address"))}})]}),(0,a.jsx)(m.Z,{onClick:t,children:"Punch!"})]})},x=e=>{let{onStart:t,setName:s,setWallet:r}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-6 justify-center items-center",children:[(0,a.jsxs)("h1",{className:"".concat(u().title," text-6xl md:text-8xl  "),children:[(0,a.jsx)("span",{children:"PUNCH"}),(0,a.jsx)("span",{children:"TOAST"})]}),(0,a.jsx)(p,{onStart:t,setName:s,setWallet:r})]})},f=e=>{let{value:t}=e;return(0,a.jsxs)("span",{className:"text-yellow text-2xl ",children:["Score: ",(0,a.jsx)("span",{className:"text-primary",children:t})," "]})},w=s(397),j=s.n(w),y=e=>{let{fx:t,onComplete:s}=e,n=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>(l.ZP.set([o.current,c.current,i.current],{display:"none"}),n.current=l.ZP.timeline({delay:.5,onComplete:s}).set(o.current,{display:"block"}).fromTo(o.current,{scale:1,rotate:l.ZP.utils.random(-30,30)},{scale:0,rotate:l.ZP.utils.random(-30,30),duration:1,onStart:()=>{t()}}).set(c.current,{display:"block"}).fromTo(c.current,{scale:1,rotate:l.ZP.utils.random(-30,30)},{scale:0,rotate:l.ZP.utils.random(-30,30),duration:1,onStart:()=>{t()}}).set(i.current,{display:"block"}).fromTo(i.current,{scale:1,rotate:l.ZP.utils.random(-30,30)},{scale:0,rotate:l.ZP.utils.random(-30,30),duration:1,onStart:()=>{t()}}),()=>{null!==n.current&&n.current.kill()}),[t,s]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("h2",{ref:o,className:j().countdown_number,style:{display:"none"},children:"3"}),(0,a.jsx)("h2",{ref:c,className:j().countdown_number,style:{display:"none"},children:"2"}),(0,a.jsx)("h2",{ref:i,className:j().countdown_number,style:{display:"none"},children:"1"})]})},g=e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:[(0,a.jsx)("title",{children:"bread_fill"}),(0,a.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,a.jsx)("path",{d:"M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z"}),(0,a.jsx)("path",{fill:"#f8ba00",d:"M14.194 2.885c2.3-.299 4.458.21 5.645 1.397.79.791 1.18 1.711 1.16 2.72-.017.961-.405 1.894-.938 2.764-.762 1.245-1.952 2.563-3.27 3.915l-.729.74-1.616 1.617-.691.682c-1.378 1.346-2.722 2.566-3.989 3.341-.87.533-1.803.92-2.764.939-1.009.02-1.929-.37-2.72-1.161-1.187-1.187-1.696-3.345-1.397-5.645.307-2.36 1.471-5.035 3.872-7.437 2.402-2.4 5.078-3.565 7.437-3.872Zm-8.503 8.78a9.822 9.822 0 0 0-.742 2.283c.42.36.919.638 1.492.83a1 1 0 0 0 .633-1.898c-.667-.222-1.112-.612-1.383-1.216Zm3-3.986a13.829 13.829 0 0 0-1.406 1.468c.194.251.406.489.621.704.585.584 1.333 1.145 2.07 1.39a1 1 0 0 0 .742-1.854l-.109-.043c-.323-.107-.812-.43-1.288-.907a5.096 5.096 0 0 1-.63-.758Zm4.42-2.53c-.618.178-1.259.43-1.907.768.52.847 1.299 1.452 2.308 1.789a1 1 0 1 0 .633-1.897c-.434-.145-.774-.36-1.034-.66Z"})]})]}),b=e=>{let{value:t}=e;return(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,a.jsx)(g,{className:"h-8 w-8 md:w-10 md:h-10"}),(0,a.jsx)("span",{className:"text-primary text-2xl ",children:t})]})},v=e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#f8ba00",viewBox:"0 0 48 48",...e,children:[(0,a.jsx)("title",{children:"time-stopwatch-solid"}),(0,a.jsxs)("g",{"data-name":"Layer 2",children:[(0,a.jsx)("path",{fill:"none",d:"M0 0h48v48H0z","data-name":"invisible box"}),(0,a.jsx)("path",{d:"m38.8 15.1 2.4-2.5a1.9 1.9 0 0 0 0-2.8 1.8 1.8 0 0 0-1.4-.6 2 2 0 0 0-1.4.6l-2.5 2.4A19.1 19.1 0 0 0 26 8.1V6h2a2 2 0 0 0 0-4h-8a2 2 0 0 0 0 4h2v2.1a19 19 0 1 0 16.8 7ZM39 27H24V12a15 15 0 0 1 15 15Z","data-name":"Q3 icons"})]})]}),N=e=>{let{time:t,interval:s=1e3,onEnd:l}=e,[n,o]=(0,r.useState)(t),c=(0,r.useRef)(null),i=(0,r.useRef)(t);return(0,r.useEffect)(()=>{0===n&&l()},[n,l]),(0,r.useEffect)(()=>(c.current=setInterval(()=>{o(i.current-=s)},s),()=>{null!=c.current&&clearInterval(c.current)}),[s]),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,a.jsx)(v,{className:"h-8 w-8 md:w-10 md:h-10"}),(0,a.jsx)("span",{className:"text-primary text-2xl ",children:"".concat(n/1e3,"s")})]})},Z=s(4295);let S=async e=>{let t=(0,Z.e)(),{data:s,error:a}=await t.from("punch_toast_scores").select("*").eq("address",e);if(null!=a)throw Error(a.message);return s.length>0?s[0]:{name:"",address:"",score:0}},k=async()=>{let e=(0,Z.e)(),{data:t,error:s}=await e.from("punch_toast_scores").select("*").order("score",{ascending:!1}).limit(10);if(null!=s)throw Error(s.message);return t},P=async e=>{let t=(0,Z.e)();if(""!==(await S(e.address)).address){await C(e);return}let{error:s}=await t.from("punch_toast_scores").insert([e]);if(null!=s)throw Error(s.message)},C=async e=>{let t=(0,Z.e)(),{error:s}=await t.from("punch_toast_scores").update(e).match({address:e.address});if(null!=s)throw Error(s.message)};var E=()=>{let[e,t]=(0,r.useState)([]),[s,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{(async()=>{t(await k()),l(!1)})()},[]),(0,a.jsx)("div",{className:"overflow-x-auto w-full",children:s?(0,a.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-b-2 border-white "})}):(0,a.jsx)("div",{className:"rounded-xl overflow-auto max-h-96",children:(0,a.jsxs)("table",{className:"table-auto w-full border-collapse border-4 border-white p-2 rounded-xl bg-secondary shadow-md",children:[(0,a.jsx)("thead",{className:"bg-primary rounded-xl",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"px-4 text-xl py-2 border-b rounded-tl-xl text-white border-white",children:"Rank"}),(0,a.jsx)("th",{className:"px-4 text-xl py-2 border-b  text-white border-white",children:"Name"}),(0,a.jsx)("th",{className:"px-4 text-xl py-2 border-b text-white border-white",children:"Address"}),(0,a.jsx)("th",{className:"px-4 text-xl py-2 border-b rounded-tr-xl text-white border-white",children:"Score"})]})}),(0,a.jsx)("tbody",{children:e.map((e,t)=>(0,a.jsxs)("tr",{className:"transition-all duration-300 hover:bg-gray-100",children:[(0,a.jsx)("td",{className:"px-4 py-2 border-b text-primary  border-white",children:t+1}),(0,a.jsx)("td",{className:"px-4 py-2 border-b text-primary border-white",children:e.name}),(0,a.jsxs)("td",{className:"px-4 py-2 border-b text-primary border-white",children:[e.address.slice(0,5)," ..."," ",e.address.slice(e.address.length-5,e.address.length)]}),(0,a.jsx)("td",{className:"px-4 py-2 border-b text-primary  border-white",children:e.score})]},e.address))})]})})})},M=e=>{let{newHigh:t,onRestart:s,onReset:r,result:l}=e;return(0,a.jsxs)("div",{className:j().info_screen+" gap-6",children:[(0,a.jsx)("div",{className:j().result,children:(0,a.jsxs)("div",{className:"flex justify-center flex-col gap-4",children:[(0,a.jsx)("h2",{className:"text-white  text-6xl text-center",children:"Your toast score "}),(0,a.jsx)("h2",{className:"  text-primary text-6xl text-center",children:l}),(0,a.jsx)(E,{})]})}),(0,a.jsxs)("div",{className:"flex md:flex-row  gap-4 justify-center items-center",children:[(0,a.jsx)(m.Z,{onClick:s,children:"Play Again"}),(0,a.jsx)(m.Z,{onClick:r,children:"Main Menu"})]})]})},R=s(4284),T=s(2547),A=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22ZM8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})}),Y=s(1597),B=s.n(Y),F=e=>{let{active:t=!1,loading:s=!1,onWhack:n,speed:o,delay:c,points:i,pointsMin:d=10,currentScore:u}=e,[_,m]=(0,r.useState)(!1),[h,p]=(0,r.useState)(),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{t&&null!=x.current&&f()},[t,x.current]);let f=()=>{null!==x.current&&setTimeout(()=>{p(l.ZP.fromTo(x.current,{y:0},{y:-80,duration:u<d?1.5*o:o,yoyo:!0,delay:c,repeatDelay:c,onComplete:()=>{l.ZP.fromTo(x.current,{y:l.ZP.getProperty(x.current,"y")},{y:0,duration:.5*o,yoyo:!0,onComplete:()=>{!_&&t&&(null==h||h.kill(),f()),m(!1)}})}}))},2e3*Math.random())};return(0,a.jsx)("div",{className:B().mole__hole,children:(0,a.jsxs)("div",{className:B().mole,children:[(0,a.jsx)("div",{className:B().mole__mole,children:(0,a.jsx)("img",{ref:x,src:"/assets-punchtoast/toast.png",alt:"Toast",onClick:()=>{!_&&null!=x.current&&null!=h&&-20>Number(l.ZP.getProperty(x.current,"y"))&&(null==h||h.kill(),m(!0),l.ZP.to(x.current,{y:0,duration:.2,onComplete:()=>{n(),m(!1),t&&f()}}))},style:{width:"60%",height:"auto",marginLeft:"20%",cursor:"pointer",position:"absolute",bottom:"10"}})}),(0,a.jsx)("img",{src:"/assets-punchtoast/toaster.png",alt:"Toaster",className:B().mole__ground,style:{width:"200px !important",height:"auto",position:"absolute"}})]})})},I=()=>{let{play:e}=(0,n.Z)("https://assets.codepen.io/605876/countdown-beep.mp3"),{play:t}=(0,n.Z)("https://assets.codepen.io/605876/pop.mp3"),{play:s}=(0,n.Z)("https://assets.codepen.io/605876/squeak-in.mp3"),{play:c}=(0,n.Z)("https://assets.codepen.io/605876/squeak-out.mp3"),{play:d}=(0,n.Z)("https://assets.codepen.io/605876/kids-cheering.mp3"),{play:u}=(0,n.Z)("https://assets.codepen.io/605876/thud--small.mp3",.65),{play:m}=(0,n.Z)("https://assets.codepen.io/605876/whistle.mp3",.65),{play:p}=(0,n.Z)("https://assets.codepen.io/605876/sparkle.mp3"),{play:w}=(0,n.Z)("https://assets.codepen.io/605876/click.mp3"),[g,v]=(0,r.useState)(o()),[Z,k]=(0,r.useState)(!1),[E,Y]=(0,r.useState)(!1),[B,I]=(0,r.useState)(!1),[L,U]=(0,r.useState)(0),[H,O]=(0,r.useState)(!1),[Q,z]=i("whac-muted",!0),q=(0,r.useRef)(null),[D,G]=(0,r.useState)(""),[J,V]=(0,r.useState)(""),[W,X]=(0,r.useState)({name:"",address:"",score:0}),K=async()=>{X(await S(J))},$=()=>{l.ZP.to(q.current,{yPercent:2,repeat:1,yoyo:!0,duration:.05});let e=Math.floor(20*Math.random());Q||(u(),e>19?p():[t,s,c][Math.floor(3*Math.random())]()),U(L+e)},ee=async()=>{let e={name:D,address:J,score:L};try{""===W.address?await P(e):await C(e)}catch(e){console.error(e),h.default.error("Error saving score")}},et=async()=>{Q||(w(),m()),Q||d(),(0,R.Z)(),L>W.score&&(await ee(),await K()),k(!1),I(!0)},es=async()=>{Q||w(),(0,_.Q)(J)&&""!==D?(await K(),U(0),O(!1),v(o()),Y(!0),I(!1)):h.default.error("Please enter a valid wallet address and name")};return(0,a.jsxs)("div",{className:"flex flex-col  mx-auto w-full p-2 relative max-w-[1000px] overflow-auto",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)("a",{href:"/games.html",children:(0,a.jsx)(T.default,{icon:(0,a.jsx)("img",{src:"/icons/back.png"})})})}),(0,a.jsxs)("div",{className:"grid grid-cols-3  w-full items-center   rounded-xl p-2",children:[(0,a.jsxs)("div",{className:"flex justify-start",children:[!E&&!Z&&!B&&(0,a.jsx)(f,{value:W.score}),Z&&(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)(b,{value:L}),(0,a.jsx)(N,{time:3e4,onEnd:et})]})]}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{className:"w-16",src:"/assets-punchtoast/toast.png",alt:""})}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)(T.default,{onClick:()=>{Q&&w(),z(!Q)},icon:Q?(0,a.jsx)("img",{src:"/icons/muted.png",alt:""}):(0,a.jsx)("img",{src:"/icons/volume.png",alt:""})}),Z&&(0,a.jsx)(T.default,{onClick:et,icon:(0,a.jsx)(A,{})})]})]}),(0,a.jsxs)("div",{className:"h-full flex flex-col justify-center items-center ",children:[!E&&!Z&&!B&&(0,a.jsx)(x,{onStart:es,setName:G,setWallet:V}),E&&(0,a.jsx)(y,{onComplete:()=>{Q||w(),Y(!1),k(!0),Q||m()},fx:()=>{Q||e()}}),(E||Z)&&(0,a.jsx)("div",{className:"w-full flex justify-center",ref:q,children:(0,a.jsx)("div",{className:j().toaster,children:g.map((e,t)=>{let{speed:s,delay:r,points:l}=e;return(0,a.jsx)(F,{onWhack:$,speed:s,active:Z,delay:r,points:l,currentScore:L,loading:2===t&&!E&&!Z&&!B},t)})})}),B&&(0,a.jsx)(M,{onRestart:es,onReset:()=>{Q||w(),U(0),V(""),G(""),O(!1),v(o()),Y(!1),k(!1),I(!1)},newHigh:H,result:L})]})]})},L=s(511),U=()=>((0,L.Z)(),(0,a.jsx)("div",{className:j().game_container,children:(0,a.jsx)(I,{})}))},1522:function(e,t,s){"use strict";var a=s(8754);s(2123),t.Z=e=>{let{onClick:t,children:s,disabled:r}=e;return(0,a.jsx)("button",{className:"bg-primary border-white border-4 rounded-xl text-2xl  p-4 w-44 text-white transform transition duration-150 ease-in-out hover:bg-yellow hover:scale-105 ",onClick:t,disabled:r,children:s})}},2547:function(e,t,s){"use strict";s.r(t);var a=s(8754);s(2123),t.default=e=>{let{icon:t,className:s,children:r,onClick:l}=e;return(0,a.jsxs)("button",{className:"bg-primary rounded-xl text-2xl p-2 h-12 w-12 md:w-14 md:h-14 text-white transform transition duration-150 ease-in-out hover:bg-yellow hover:scale-105 ".concat(s),onClick:l,children:[t,null!==r&&(0,a.jsx)("span",{className:"ml-2",children:r})]})}},5987:function(e,t,s){"use strict";var a=s(2123);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,[s,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let s=new Audio(e);return s.volume=t,r(s),()=>{s.pause(),s.currentTime=0}},[e,t]),{play:async()=>await (null==s?void 0:s.play()),pause:()=>null==s?void 0:s.pause(),stop:()=>{null==s||s.pause(),null!=s&&(s.currentTime=0)}}}},1786:function(e,t,s){"use strict";s.d(t,{Q:function(){return r}});var a=s(4642);let r=e=>{let t;try{return t=new a.nh(e),a.nh.isOnCurve(t.toBytes())}catch(e){return!1}}},4295:function(e,t,s){"use strict";s.d(t,{e:function(){return l}});var a=s(2242),r=s(2078);let l=()=>{var e,t;let s=null!==(e=r.env.NEXT_PUBLIC_SUPABASE_URL)&&void 0!==e?e:"",l=null!==(t=r.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)&&void 0!==t?t:"";return(0,a.AY)(s,l)}},511:function(e,t,s){"use strict";var a=s(4295),r=s(2123),l=s(4625);t.Z=()=>{let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=null;try{e=(0,a.e)(),t(e)}catch(e){l.default.error("Failed to initialize Burntoast  client. Contact the developer for more information."),console.error("Failed to initialize Burntoast  client. Contact the developer for more information.")}},[]),e}},7275:function(e){e.exports={title:"start-screen_title__suY7P",logo:"start-screen_logo__Qu2ae"}},1597:function(e){e.exports={hole:"toast_hole__02c_S",hole__lip:"toast_hole__lip__rYjNn",mole__feature:"toast_mole__feature__RX8E4","mole__eyes--crossed":"toast_mole__eyes--crossed__zdQht",mole__mole:"toast_mole__mole__TYZdX",specs__lens:"toast_specs__lens__F5E_F",cap__accent:"toast_cap__accent__t6e4U",cap__body:"toast_cap__body__FNMFH",specs__glare:"toast_specs__glare__zswc0",specs__bridge:"toast_specs__bridge__6v9C2",mole__hole:"toast_mole__hole__vsDMn",mole__body:"toast_mole__body__kgUx2",mole__white:"toast_mole__white__f7uNo",mole__whiskers:"toast_mole__whiskers__N48xW",mole__shadow:"toast_mole__shadow___jTXf",mole__nose:"toast_mole__nose__c_A6i",mole:"toast_mole__7C5eP",mole__whack:"toast_mole__whack__HNiS9","mole__points-holder":"toast_mole__points-holder__wDaks",mole__points:"toast_mole__points__uPMe7"}},397:function(e){e.exports={toaster:"punchtoast_toaster__6_QZA",game_container:"punchtoast_game_container__s_d9w",button:"punchtoast_button__Yhhdg",celebration:"punchtoast_celebration__CAhDJ",word:"punchtoast_word__w2vG6",char:"punchtoast_char__G5HY_",jump:"punchtoast_jump__TMcSj",countdown_number:"punchtoast_countdown_number__9aygh",icon_button:"punchtoast_icon_button__gbUVi",mute_button:"punchtoast_mute_button__ufyh4",mallet:"punchtoast_mallet__Gl3iu",end_button:"punchtoast_end_button__vG8dt",game_info:"punchtoast_game_info__IkiMu",info_screen:"punchtoast_info_screen__YwwI_",results:"punchtoast_results__iYzRR",icon:"punchtoast_icon___J7sW",sr_only:"punchtoast_sr_only__YbiYi",info__text:"punchtoast_info__text__7d02b","boring-text":"punchtoast_boring-text__2Yt07",footer:"punchtoast_footer__NNTVw","footer-container":"punchtoast_footer-container__kQFMc",github:"punchtoast_github__wlGfD",website:"punchtoast_website__YJssO"}}},function(e){e.O(0,[635,364,625,292,146,672,744],function(){return e(e.s=1516)}),_N_E=e.O()}]);