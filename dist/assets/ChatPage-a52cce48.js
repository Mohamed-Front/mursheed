import{z as C,B as H,A as I,r as B,d as i,e as c,f as p,I as K,j as f,a8 as b,F as z,k as A,K as F,h as S,t as x,i as d,ai as L,w as g,m as M,G as O,C as T}from"./index-a963b12f.js";const U={mounted:(e,n)=>{const l=n.value.duration||500,_=n.value.animate,u=a=>{const h=e.scrollTop,s=e.scrollHeight-h,y=20;function N(t,v,V,D){return t/=D/2,t<1?V/2*t*t+v:(t-=1,-V/2*(t*(t-2)-1)+v)}function k(t){t+=y;const v=N(t,h,s,a);e.scrollTop=v,t<a&&setTimeout(()=>{k(t)},y)}k(0)},o=()=>{_?u(l):e.scrollTop=e.scrollHeight},r=new MutationObserver(o),m={childList:!0};r.observe(e,m)}},Y={class:"va-chat"},$={class:"va-chat__message-text"},j={class:"va-chat__controls"},E=C({props:{modelValue:{default:()=>[{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]},height:{default:"20rem"}},emits:["update:modelValue"],setup(e,{emit:n}){const l=e,{colors:_}=H(),{t:u}=I(),o=B("");function r(){o.value&&(n("update:modelValue",l.modelValue.concat({text:o.value,yours:!0})),o.value="")}return(m,a)=>{const h=i("va-input"),w=i("va-button");return c(),p("div",Y,[K((c(),p("div",{class:"va-chat__body",style:b({height:e.height})},[(c(!0),p(z,null,A(e.modelValue,(s,y)=>(c(),p("div",{key:y,class:F(["va-chat__message",{"va-chat__message--yours":s.yours}]),style:b({backgroundColor:s.yours?f(_).primary:void 0})},[S("span",$,x(s.text),1)],6))),128))],4)),[[f(U),{animate:!0,duration:500}]]),S("div",j,[d(h,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),placeholder:"Type your message...",class:"va-chat__input mr-2",onKeypress:L(r,["enter"])},null,8,["modelValue","onKeypress"]),d(w,{onClick:a[1]||(a[1]=s=>r())},{default:g(()=>[M(x(f(u)("chat.sendButton")),1)]),_:1})])])}}});const G=O(E,[["__scopeId","data-v-5905f034"]]),J=C({setup(e){const{t:n}=I(),l=B([{text:"Hello! So glad you liked my work. Do you want me to shoot you?",yours:!1},{text:"Yeah, that would be cool. Maybe this Sunday at 3 pm?",yours:!0},{text:"Sounds great! See you later!",yours:!1},{text:"Should I bring a lightbox with me?",yours:!0},{text:"No, thanks. There is no need. Can we set up a meeting earlier?",yours:!1},{text:"I'm working on Vuestic, so let's meet at 3pm. Thanks!",yours:!0}]);return(_,u)=>{const o=i("va-card-title"),r=i("va-card-content"),m=i("va-card");return c(),T(m,{class:"chat w-full"},{default:g(()=>[d(o,null,{default:g(()=>[M(x(f(n)("chat.title")),1)]),_:1}),d(r,null,{default:g(()=>[d(G,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=a=>l.value=a)},null,8,["modelValue"])]),_:1})]),_:1})}}});export{J as default};
