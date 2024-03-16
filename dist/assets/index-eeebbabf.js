import{p as Z,q as ee,r as o,s as le,o as te,v as ae,d as r,e as c,f as m,h as s,i as t,w as i,b as S,m as g,t as N,K as h,n as v}from"./index-a963b12f.js";const se={class:"grid"},oe={class:"col-12"},ie={class:"my-2"},ne={class:"flex flex-column md:flex-row md:justify-between md:align-items-center"},ue=s("h5",{class:"m-0"},"Manage Flight Reservations",-1),de={class:"block mt-2 md:mt-0 p-input-icon-left"},re=s("i",{class:"pi pi-search"},null,-1),ce={class:"field mb-5"},me=s("label",{for:"first"},"first name ",-1),ve={key:0,class:"p-invalid"},pe={class:"field mb-5"},fe=s("label",{for:"last"},"last name ",-1),_e={key:0,class:"p-invalid"},be={class:"field mb-5"},he=s("label",{for:"email",class:"mb-3"},"email ",-1),ge={key:0,class:"p-invalid"},ye={class:"field mb-5"},ke=s("label",{for:"password",class:"mb-3"},"password ",-1),we={key:0,class:"p-invalid"},Ce={class:"field mb-5"},xe=s("label",{for:"mobile",class:"mb-3"},"mobile",-1),Ve={key:0,class:"p-invalid"},De={class:"flex align-items-center justify-content-center"},Se=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Ne={key:0},Te=g("Are you sure you want to delete "),Pe=g("?"),Ue={class:"flex align-items-center justify-content-center"},qe=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),Le={key:0},$e={setup(Me){const f=Z(),P=ee(),U=o(null),q=o(null),L=o(null),$=o([{name:"English",value:"gb"},{name:"Arabic",value:"sa"},{name:"Azerbaijan",value:"az"},{name:"Georgia",value:"ge"},{name:"Russia",value:"ru"},{name:"Turkey",value:"tr"}]),y=o("gb"),M=o(!0),l=o({}),k=o(!1),_=o(!1),w=o(!1),A=o({}),C=o(null),O=o(null),x=o({}),u=o(!1);o([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]),le(()=>{G()});const V=()=>{S.get("/api/flights").then(n=>{M.value=!1,q.value=n.data.flights})};te(()=>{V()});const B=()=>{console.log(y.value)},F=()=>{P.push({name:"flight-create"})},R=()=>{k.value=!1,u.value=!1},z=()=>{u.value=!0,!(!l.value.first_name||!l.value.last_name||!l.value.email||!l.value.mobile_number)&&(l.value.id?(S.post(`/api/accommodition/${accommodition.value.id}/update`,l.value).then(n=>{console.log(n.data),V(),f.add({severity:"success",summary:"Successful",detail:"user updated",life:3e3})}).catch(()=>{}),f.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):S.post("/api/users/create",l.value).then(n=>{console.log(n.data),V(),f.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}).catch(()=>{}),k.value=!1,l.value={})},j=n=>{l.value={...n},P.push({name:"flight-update",params:{id:l.value.id}})},E=n=>{L.value=n,_.value=!0},I=()=>{S.delete(`/api/flights/${L.value.id}/delete`).then(n=>{console.log(n.data),_.value=!1,V(),f.add({severity:"success",summary:"Successful",detail:"user deleted",life:3e3})}).catch(()=>{})},K=()=>{O.value.exportCSV()},Y=()=>{U.value=U.value.filter(n=>!C.value.includes(n)),w.value=!1,C.value=null,f.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},G=()=>{x.value={global:{value:null,matchMode:ae.CONTAINS}}};return(n,a)=>{const d=r("Button"),W=r("Dropdown"),H=r("Toolbar"),J=r("Toast"),p=r("InputText"),b=r("Column"),Q=r("DataTable"),T=r("Dialog"),X=r("va-card");return c(),m("div",se,[s("div",oe,[t(X,{class:"card"},{default:i(()=>[t(H,{class:"mb-4"},{start:i(()=>[s("div",ie,[t(d,{label:"New",icon:"pi pi-plus",class:"new mr-2",onClick:F})])]),end:i(()=>[t(d,{label:"Export",icon:"pi pi-upload",class:"new",onClick:a[0]||(a[0]=e=>K())}),t(W,{modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),onClick:B,editable:"",options:$.value,optionLabel:"name","option-value":"value",class:"w-48 mx-3"},null,8,["modelValue","options"])]),_:1}),t(J),t(Q,{ref_key:"dt",ref:O,selection:C.value,"onUpdate:selection":a[3]||(a[3]=e=>C.value=e),value:q.value,loading:M.value,"data-key":"id",paginator:!0,rows:10,filters:x.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:i(()=>[s("div",ne,[ue,s("span",de,[re,t(p,{modelValue:x.value.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value.global.value=e),placeholder:"Search..."},null,8,["modelValue"])])])]),default:i(()=>[t(b,{"selection-mode":"multiple","header-style":"width: 3rem"}),t(b,{field:"Name",header:"Name",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:i(e=>{var D;return[g(N((D=e.data)==null?void 0:D.name[y.value]),1)]}),_:1}),t(b,{field:"Link",header:"Link",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:i(e=>[g(N(e.data.link),1)]),_:1}),t(b,{field:"Discount",header:" Discount",sortable:!0,"header-style":"width:14%; min-width:10rem;"},{body:i(e=>[g(N(e.data.discount),1)]),_:1}),t(b,{"header-style":"min-width:10rem;"},{body:i(e=>[t(d,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:D=>j(e.data)},null,8,["onClick"]),t(d,{icon:"pi pi-trash",class:"delete mt-2",onClick:D=>E(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","loading","filters"]),t(T,{visible:k.value,"onUpdate:visible":a[9]||(a[9]=e=>k.value=e),style:{width:"450px"},header:"users form",modal:!0,class:"p-fluid"},{footer:i(()=>[t(d,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:R}),t(d,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:z})]),default:i(()=>[s("div",ce,[me,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.first_name}]),id:"first",modelValue:l.value.first_name,"onUpdate:modelValue":a[4]||(a[4]=e=>l.value.first_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.first_name?(c(),m("small",ve,"First Name is required.")):v("",!0)]),s("div",pe,[fe,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.last_name}]),id:"last",modelValue:l.value.last_name,"onUpdate:modelValue":a[5]||(a[5]=e=>l.value.last_name=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.last_name?(c(),m("small",_e,"Last Name is required.")):v("",!0)]),s("div",be,[he,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.email}]),id:"email",modelValue:l.value.email,"onUpdate:modelValue":a[6]||(a[6]=e=>l.value.email=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.email?(c(),m("small",ge,"Email is required.")):v("",!0)]),s("div",ye,[ke,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.password}]),id:"password",modelValue:l.value.password,"onUpdate:modelValue":a[7]||(a[7]=e=>l.value.password=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.password?(c(),m("small",we,"password is required.")):v("",!0)]),s("div",Ce,[xe,t(p,{class:h(["mt-3",{"p-invalid":u.value&&!l.value.mobile_number}]),id:"mobile",modelValue:l.value.mobile_number,"onUpdate:modelValue":a[8]||(a[8]=e=>l.value.mobile_number=e),modelModifiers:{trim:!0},required:"true",autofocus:""},null,8,["modelValue","class"]),u.value&&!l.value.mobile_number?(c(),m("small",Ve,"mobile is required.")):v("",!0)])]),_:1},8,["visible"]),t(T,{visible:_.value,"onUpdate:visible":a[11]||(a[11]=e=>_.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[t(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[10]||(a[10]=e=>_.value=!1)}),t(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:I})]),default:i(()=>[s("div",De,[Se,l.value?(c(),m("span",Ne,[Te,s("b",null,N(l.value.first_name),1),Pe])):v("",!0)])]),_:1},8,["visible"]),t(T,{visible:w.value,"onUpdate:visible":a[13]||(a[13]=e=>w.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:i(()=>[t(d,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[12]||(a[12]=e=>w.value=!1)}),t(d,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:Y})]),default:i(()=>[s("div",Ue,[qe,A.value?(c(),m("span",Le,"Are you sure you want to delete the selected products?")):v("",!0)])]),_:1},8,["visible"])]),_:1})])])}}};export{$e as default};
