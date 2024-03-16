import{z as T,B as S,O as z,e as $,f as M,h as d,K as b,a8 as x,j as t,G as q,A,r as V,d as m,i as e,w as s,m as u,t as c}from"./index-a963b12f.js";import{u as D}from"./useToast-28d879a9-b3079bf8.js";const I={class:"toast-position-picker mr-8"},L={class:"position-boxes-row flex"},j={class:"position-boxes-row flex"},E=T({props:{modelValue:{default:"bottom-center"}},emits:["update:modelValue"],setup(y,{emit:l}){const P=y,{colors:n}=S(),r=z(()=>({backgroundColor:n.primary}));function f(v){l("update:modelValue",v)}function p(v){return P.modelValue===v}return(v,i)=>($(),M("div",I,[d("div",L,[d("div",{class:b(["position-box",{selected:p("top-left")}]),style:x(t(r)),onClick:i[0]||(i[0]=o=>f("top-left"))},null,6),d("div",{class:b(["position-box",{selected:p("top-right")}]),style:x(t(r)),onClick:i[1]||(i[1]=o=>f("top-right"))},null,6)]),d("div",j,[d("div",{class:b(["position-box",{selected:p("bottom-left")}]),style:x(t(r)),onClick:i[2]||(i[2]=o=>f("bottom-left"))},null,6),d("div",{class:b(["position-box",{selected:p("bottom-right")}]),style:x(t(r)),onClick:i[3]||(i[3]=o=>f("bottom-right"))},null,6)])]))}});const G=q(E,[["__scopeId","data-v-da69079b"]]),K={class:"notifications grid grid-cols-12 gap-6"},O={class:"py-3 col-span-12 md:col-span-6 flex flex-col gap-4"},F={class:"flex items-center col-span-12 md:col-span-6"},H={class:"flex col-span-12"},R=T({setup(y){const{t:l}=A(),{init:P}=D(),n=V(!0),r=V("This toast is awesome!"),f=V(2500),p=V("bottom-right");function v(){P({message:r.value,position:p.value,duration:Number(f.value)})}return(i,o)=>{const k=m("va-card-title"),B=m("va-checkbox"),g=m("va-badge"),_=m("va-alert"),w=m("va-card-content"),C=m("va-card"),U=m("va-input"),N=m("va-button");return $(),M("div",K,[e(C,{class:"col-span-12"},{default:s(()=>[e(k,null,{default:s(()=>[u(c(t(l)("notificationsPage.notifications.title")),1)]),_:1}),e(w,{class:"flex flex-col gap-4"},{default:s(()=>[e(B,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),label:"Toggle visibility"},null,8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a),class:"w-full",closeable:""},{icon:s(()=>[e(g,{text:t(l)("notificationsPage.notifications.success")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.successMessage")),1)]),_:1},8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[2]||(o[2]=a=>n.value=a),class:"w-full",color:"info",closeable:""},{icon:s(()=>[e(g,{color:"info",text:t(l)("notificationsPage.notifications.info")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.infoMessage")),1)]),_:1},8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=a=>n.value=a),class:"w-full",color:"warning",closeable:""},{icon:s(()=>[e(g,{color:"warning",text:t(l)("notificationsPage.notifications.warning")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[4]||(o[4]=a=>n.value=a),class:"w-full",color:"danger",closeable:""},{icon:s(()=>[e(g,{color:"danger",text:t(l)("notificationsPage.notifications.danger")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[5]||(o[5]=a=>n.value=a),class:"w-full",color:"gray",closeable:""},{icon:s(()=>[e(g,{color:"gray",text:t(l)("notificationsPage.notifications.gray")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.warningMessage")),1)]),_:1},8,["modelValue"]),e(_,{modelValue:n.value,"onUpdate:modelValue":o[6]||(o[6]=a=>n.value=a),class:"w-full",color:"dark",closeable:""},{icon:s(()=>[e(g,{color:"dark",text:t(l)("notificationsPage.notifications.dark")},null,8,["text"])]),default:s(()=>[u(" "+c(t(l)("notificationsPage.notifications.dangerMessage")),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(C,{class:"col-span-12"},{default:s(()=>[e(k,null,{default:s(()=>[u(c(t(l)("notificationsPage.toasts.title")),1)]),_:1}),e(w,{class:"grid grid-cols-12 gap-6"},{default:s(()=>[d("div",O,[e(U,{modelValue:r.value,"onUpdate:modelValue":o[7]||(o[7]=a=>r.value=a),label:t(l)("notificationsPage.toasts.textLabel"),class:"control-input",required:""},null,8,["modelValue","label"]),e(U,{modelValue:f.value,"onUpdate:modelValue":o[8]||(o[8]=a=>f.value=a),type:"number",label:t(l)("notificationsPage.toasts.durationLabel"),class:"control-input",required:""},null,8,["modelValue","label"])]),d("div",F,[e(G,{modelValue:p.value,"onUpdate:modelValue":o[9]||(o[9]=a=>p.value=a)},null,8,["modelValue"])]),d("div",H,[e(N,{color:"primary",onClick:v},{default:s(()=>[u(c(t(l)("notificationsPage.toasts.launchToast")),1)]),_:1})])]),_:1})]),_:1})])}}});export{R as default};
