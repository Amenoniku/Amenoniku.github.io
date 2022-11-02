(function(t){function e(e){for(var a,o,u=e[0],l=e[1],i=e[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("WithoutVuex"),e("WithVuex")],1)},s=[],o=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("C Vuex")]),e("Form",{ref:"form",attrs:{inputs:t.inputs},on:{send:t.send,input:function(e){return t.$store.commit("addEvent",e)}}}),e("br"),e("h3",[t._v("События")]),e("Events",{attrs:{events:t.events}})],1)},u=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form"},[e("div",{staticClass:"form__inputs"},[t._l(t.inputs,(function(n){return e("input",{directives:[{name:"model",rawName:"v-model",value:n.value,expression:"input.value"}],key:n.label,staticClass:"form__input",attrs:{placeholder:n.label,type:"number"},domProps:{value:n.value},on:{input:[function(e){e.target.composing||t.$set(n,"value",e.target.value)},function(e){return t.changeForm(n.label,n.value)}]}})})),e("button",{on:{click:t.send}},[t._v("Отправить")])],2),e("br"),e("div",{staticClass:"form__labels"},[t._l(t.inputs,(function(n){return e("span",{key:n.label,staticClass:"form__label"},[t._v(" "+t._s(`${n.label}: ${n.value}`)+" ")])})),e("br"),e("br"),e("div",{staticClass:"form__label"},[t._v(" "+t._s("localStorage: "+t.allStorage)+" ")])],2)])},i=[],c=n("b012"),d={name:"Form",props:{inputs:{type:Array,default:()=>[]}},data:()=>({allStorage:[]}),methods:{updateStorage(){this.allStorage=Object.keys(localStorage).map(t=>localStorage.getItem(t))},changeForm:Object(c["debounce"])((function(t,e){const n=this.inputs.find(t=>"Сумма"===t.label),a=this.inputs.find(t=>"Цена"===t.label),r=this.inputs.find(t=>"Кол-во"===t.label);switch(t){case"Цена":n.value=e*r.value;break;case"Кол-во":n.value=e*a.value;break;case"Сумма":a.value=e/r.value;break}this.$emit("input",`Изменен инпут: "${t}", со значением: ${e}`)}),300),send(){+this.inputs[2].value%2===0?this.$emit("send",this.inputs):this.$emit("input","Сумма не четное число, отправка данных запрещена!"),this.updateStorage()}},mounted(){this.updateStorage()}},p=d,v=(n("63a6"),n("2877")),f=Object(v["a"])(p,l,i,!1,null,"07378244",null),h=f.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"events"},t._l(t.events,(function(n){return e("div",{key:n.id},[t._v(t._s(n.text))])})),0)},b=[],g={name:"Events",props:{events:{type:Array,default:()=>[]}}},_=g,y=Object(v["a"])(_,m,b,!1,null,"4d0d7b48",null),S=y.exports,O={name:"WithoutVuex",components:{Form:h,Events:S},data:()=>({inputs:[{label:"Цена",value:null},{label:"Кол-во",value:null},{label:"Сумма",value:null}]}),computed:{sendedData(){return this.$store.state.data},events(){return this.$store.state.events}},watch:{sendedData(){this.$refs.form.updateStorage()}},methods:{send(t){this.$store.dispatch("sendData",t)}}},x=O,j=Object(v["a"])(x,o,u,!1,null,"1be99831",null),$=j.exports,w=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Без Vuex")]),e("Form",{ref:"form",attrs:{inputs:t.inputs},on:{send:t.send,input:t.addEvent}}),e("br"),e("h3",[t._v("События")]),e("Events",{attrs:{events:t.events}})],1)},E=[],k=(n("13d5"),n("14d9"),n("3c65"),{name:"WithoutVuex",components:{Form:h,Events:S},data:()=>({inputs:[{label:"Цена",value:null},{label:"Кол-во",value:null},{label:"Сумма",value:null}],events:[]}),methods:{send(t){const e=Object.keys(localStorage),n=e.reduce((t,e)=>(e.match(/#+\d+/g)&&t.push(+e.split("#")[1]),t),[]),a=Math.max(...n.length?n:[0])+1,r=JSON.stringify({price:t[0].value,qty:t[1].value,amount:t[2].value,nonce:a});this.addEvent(`Данные готовы к отправке: ${r}. Текущий LocalStorage: ${JSON.stringify(e.map(t=>localStorage.getItem(t)))}`),setTimeout(()=>{1===Math.round(1*Math.random())?(localStorage.setItem("sended#"+a,r),this.addEvent("Данные успешно сохранены. Data: "+r),this.$refs.form.updateStorage()):(this.addEvent("Ошибка сервера."),alert("Упс, не повезло. Сервер отвалился"))},1e3)},addEvent(t){this.events.unshift({text:t,id:Math.random()})}}}),M=k,C=Object(v["a"])(M,w,E,!1,null,"5a5b91b6",null),D=C.exports,P={name:"App",components:{WithoutVuex:D,WithVuex:$}},V=P,F=(n("8968"),Object(v["a"])(V,r,s,!1,null,null,null)),J=F.exports,N=n("2f62"),W=n("0e44");a["a"].use(N["a"]);const T=new N["a"].Store({state:{data:[],events:[],nonce:0},mutations:{addData(t,e){t.data.push(e)},addEvent(t,e){t.events.unshift({text:e,id:Math.random()})},upNonce(t){t.nonce++}},actions:{async sendData({commit:t,state:e},n){const a={price:n[0].value,qty:n[1].value,amount:n[2].value,nonce:e.nonce};t("addEvent",`Данные готовы к отправке: ${JSON.stringify(a)}. Текущий LocalStorage: ${JSON.stringify(Object.keys(localStorage).map(t=>localStorage.getItem(t)))}`),setTimeout(()=>{1===Math.round(1*Math.random())?(t("addData",a),t("addEvent","Данные успешно сохранены. Data: "+JSON.stringify(a))):(t("addEvent","Ошибка сервера."),alert("Упс, не повезло. Сервер отвалился"))},1e3)}},plugins:[Object(W["a"])({key:"vuexStore",paths:["data"]})]});a["a"].config.productionTip=!1,new a["a"]({store:T,render:t=>t(J)}).$mount("#app")},"63a6":function(t,e,n){"use strict";n("c44e")},"7baf":function(t,e,n){},8968:function(t,e,n){"use strict";n("7baf")},c44e:function(t,e,n){}});
//# sourceMappingURL=app.e392de58.js.map