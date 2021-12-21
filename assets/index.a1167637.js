var C=Object.defineProperty;var I=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var u=(i,e,t)=>(I(i,typeof e!="symbol"?e+"":e,t),t);import{a as k,c as j,h as D,d as g,r as A,o as M,b as h,e as l,p as v,f as w,g as c,i as N,F as $,j as F,u as L,t as O,k as E,l as T}from"./vendor.d49d3df2.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};G();class d{}class p extends d{constructor(e,t,s){super();u(this,"size",{width:3,height:6});u(this,"icon");this.position=e,this.moving=t,this.shooter=s;const o={x:152,y:65},n={x:157,y:65};switch(s){case"Player":this.icon=n;break;case"Enemy":this.icon=o;break}}update(){switch(this.moving.direction){case"up":this.position.y-=this.moving.speed;break;case"down":this.position.y+=this.moving.speed;break}}}class x extends d{constructor(e){super();u(this,"screenWidth");u(this,"position");u(this,"size",{width:28,height:12});u(this,"icon",{x:138.5,y:75});u(this,"shoot",e=>{e.preventDefault(),this.data.gameObjects.push(new p({x:this.position.x+this.size.width/2,y:this.position.y-12},{speed:4,direction:"up"},"Player"))});u(this,"move",e=>{let t=e.offsetX-this.size.width/2;t<10&&(t=10),t>this.screenWidth&&(t=this.screenWidth),this.position.x=t});this.data=e,this.screenWidth=e.screenBox.x-40,this.position={x:e.screenBox.x/2-this.size.width/2,y:e.screenBox.y-30},this.data.screen.addEventListener("mousemove",this.move),this.data.screen.addEventListener("click",this.shoot)}update(){}}class r extends d{constructor(e,t,s,o){super();u(this,"speed",1+Math.random()*3);u(this,"icon");this.data=e,this.position=t,this.size=s,this.colNumber=o;const n=[{x:57,y:0},{x:98.5,y:0},{x:139,y:0},{x:9,y:30},{x:57,y:30},{x:98.5,y:30},{x:139,y:30}];this.icon=n[Math.floor(Math.random()*n.length)]}update(){this.move(),this.shoot()}move(){(this.position.x<3||this.position.x+this.size.width>this.data.screenBox.x-3)&&(this.speed=-this.speed);const e=this.position.x+this.speed;this.position.x=e}shoot(){const e=this.data.gameObjects.filter(t=>t instanceof r).length;if(Math.random()<.2/e){const t={x:this.position.x+this.size.width/2,y:this.position.y+this.size.height/2+this.size.height/2+1},s=new p(t,{speed:3,direction:"down"},"Enemy");this.data.gameObjects.push(s)}}isLower(){const e=this.data.gameObjects.filter(s=>s instanceof r&&s.colNumber===this.colNumber),t=Math.max.apply(Math,e.map(s=>s.position.y));return this.position.y===t}}class y{}class P extends y{constructor(e){super();u(this,"score",0);u(this,"size",{width:28,height:12});u(this,"position");u(this,"font",`bold ${this.size.height}px Arial`);u(this,"text",`Score: ${this.score}`);this.data=e,this.position={x:0,y:e.screenBox.y-this.size.height+9}}up(){this.text=`Score: ${++this.score}`}}var W="/assets/icons.4fec0796.png";const Y={scores:[]},q={addScore(i,e){i.scores.unshift(e),i.scores.length>17&&i.scores.pop()}},R={addNewScore({commit:i},e){console.debug("ADD NEW SCORE",e),i("addScore",e)}},V={state:Y,mutations:q,actions:R},b=[];b.push(k({storage:window.localStorage}));const _=j({plugins:b,modules:{scores:V}});function B(){return _}const K=B();class X{constructor(e){u(this,"ctx");u(this,"screenBox");u(this,"gameObjects",[]);u(this,"gameStop",!1);u(this,"logicCycle",0);u(this,"icons",new Image);u(this,"notCollision",e=>this.isInterfaceObject(e)?!0:this.gameObjects.filter(t=>{if(e instanceof r&&t instanceof r||(e instanceof r||t instanceof r)&&(e instanceof p||t instanceof p)&&(e.shooter==="Enemy"||t.shooter==="Enemy"))return!1;const s=this.collision(e,t);return s&&e instanceof r&&this.gameObjects[0].up(),s&&e instanceof x&&this.screen.removeEventListener("click",e.shoot),s}).length===0);this.screen=e,this.ctx=this.screen.getContext("2d"),this.screenBox={x:this.screen.width,y:this.screen.height},this.icons.src=W}start(){this.icons.onload=()=>{this.addObjects(),this.renderTick(),this.logicTick()}}addObjects(){this.gameObjects.push(new P(this)),this.gameObjects.push(new x(this)),this.addEnemies()}addEnemies(){const e={width:29,height:25};let t=3,s=3;const o=8,n=5;let a=0;for(let m=0;m<o;m++){m===0?t=t:t+=e.height+e.height/3,a++;for(let f=0;f<n;f++)f===0?s=s:s+=e.width+e.width/3,this.gameObjects.push(new r(this,{x:t,y:s},e,a));s=3}}renderTick(){this.gameStop?setTimeout(()=>{this.renderTick()},100):(this.draw(),requestAnimationFrame(this.renderTick.bind(this)))}logicTick(){this.logicCycle=setInterval(()=>{this.update()},1e3/60)}update(){this.gameObjects.forEach((s,o)=>{this.isInterfaceObject(s)||(s.position.y<0||s.position.y>=this.screenBox.y?this.gameObjects.splice(o,1):s.update())}),this.gameObjects=this.gameObjects.filter(this.notCollision);const e=this.gameObjects.some(s=>s instanceof r),t=this.gameObjects.some(s=>s instanceof x);this.endGame(e,t)}isInterfaceObject(e){return e instanceof y}endGame(e,t){e||(alert('\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E!!! \u0412\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438 \u0418\u043D\u043E\u043F\u043B\u0430\u043D\u0435\u0442\u043D\u044B\u0445 \u0417\u0430\u0445\u0432\u0430\u0442\u0447\u0438\u043A\u043E\u0432! \u041D\u043E \u0440\u0430\u0434\u0430\u0440\u044B \u0437\u0430\u0441\u0435\u043A\u043B\u0438 \u0435\u0449\u0435 \u043E\u0434\u043D\u0443 \u0432\u043E\u043B\u043D\u0443! \u041D\u0430\u0436\u043C\u0438 "Ok" \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0433\u0440\u043E\u043C\u0438\u0442\u044C \u0432\u0440\u0430\u0433\u0430!'),this.gameObjects=[],this.addEnemies()),t||(this.gameStop=!0,this.gameObjects[0].score,this.gameObjects[0].score>0&&K.dispatch("addNewScore",{data:D().format("MMMM Do YYYY, h:mm:ss"),score:this.gameObjects[0].score}),this.gameObjects=[],this.addObjects(),this.gameStop=!1)}collision(e,t){return!(e===t||e.position.x+e.size.width<t.position.x||e.position.y+e.size.height<t.position.y||e.position.x>t.position.x+t.size.width||e.position.y>t.position.y+t.size.height)}clean(){this.ctx.clearRect(0,0,this.screenBox.x,this.screenBox.y)}draw(){this.clean(),this.gameObjects.forEach(e=>{e instanceof y&&(this.ctx.fillStyle="rgba(255, 255, 255, 1)",this.ctx.font=e.font,this.ctx.fillText(e.text,e.position.x,e.position.y)),e instanceof d&&this.ctx.drawImage(this.icons,e.icon.x,e.icon.y,e.size.width,e.size.height,e.position.x,e.position.y,e.size.width,e.size.height)})}}var S=(i,e)=>{for(const[t,s]of e)i[t]=s;return i};const H=i=>(v("data-v-10d358dc"),i=i(),w(),i),J=H(()=>c("p",null,"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Canvas",-1)),Q=[J],U=g({setup(i){const e=A(null);return M(()=>{new X(e.value).start()}),(t,s)=>(h(),l("canvas",{class:"game-screen",ref:(o,n)=>{n.GameScreen=o,e.value=o},width:"400",height:"480"},Q,512))}});var Z=S(U,[["__scopeId","data-v-10d358dc"]]);const z=i=>(v("data-v-75c1d906"),i=i(),w(),i),ee={class:"flex"},te=z(()=>c("h3",null,"\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432",-1)),se=z(()=>c("div",{class:"scores"},[c("span",null,"\u0414\u0430\u0442\u0430"),c("span",null,"\u041E\u0447\u043A\u0438")],-1)),ie={class:"scores"},oe=g({setup(i){const e=B(),t=N(()=>e.state.scores.scores);return(s,o)=>(h(),l("div",ee,[te,se,(h(!0),l($,null,F(L(t),n=>(h(),l("div",ie,[c("span",null,O(n.data),1),c("span",null,O(n.score),1)]))),256))]))}});var ne=S(oe,[["__scopeId","data-v-75c1d906"]]);const ue={class:"flex"},ce=c("div",{class:"game-rule"},[c("h3",null,"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),c("span",null,"\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435: \u041A\u0443\u0440\u0441\u043E\u0440"),c("span",null,"\u0412\u044B\u0441\u0442\u0440\u0435\u043B: \u041A\u043B\u0438\u043A \u043C\u044B\u0448\u043A\u043E\u0439")],-1),re=g({setup(i){return(e,t)=>(h(),l("div",ue,[ce,E(Z),E(ne)]))}});T(re).use(_).mount("#app");console.debug("mounted store",_);
