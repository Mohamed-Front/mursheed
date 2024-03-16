/*!
 * FilePondPluginFileEncode 2.1.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const D=function(){self.onmessage=r=>{o(r.data.message,E=>{self.postMessage({id:r.data.id,message:E})})};const o=(r,E)=>{const{file:l}=r,c=new FileReader;c.onloadend=()=>{E(c.result.replace("data:","").replace(/^.+,/,""))},c.readAsDataURL(l)}},P=({addFilter:o,utils:r})=>{const{Type:E,createWorker:l,createRoute:c,isFile:T}=r,f=({name:e,file:a})=>new Promise(d=>{const t=l(D);t.post({file:a},n=>{d({name:e,data:n}),t.terminate()})}),s=[];return o("DID_CREATE_ITEM",(e,{query:a})=>{a("GET_ALLOW_FILE_ENCODE")&&(e.extend("getFileEncodeBase64String",()=>s[e.id]&&s[e.id].data),e.extend("getFileEncodeDataURL",()=>`data:${e.fileType};base64,${s[e.id].data}`))}),o("SHOULD_PREPARE_OUTPUT",(e,{query:a})=>new Promise(d=>{d(a("GET_ALLOW_FILE_ENCODE"))})),o("COMPLETE_PREPARE_OUTPUT",(e,{item:a,query:d})=>new Promise(t=>{if(!d("GET_ALLOW_FILE_ENCODE")||!T(e)&&!Array.isArray(e))return t(e);s[a.id]={metadata:a.getMetadata(),data:null},Promise.all((e instanceof Blob?[{name:null,file:e}]:e).map(f)).then(n=>{s[a.id].data=e instanceof Blob?n[0].data:n,t(e)})})),o("CREATE_VIEW",e=>{const{is:a,view:d,query:t}=e;!a("file-wrapper")||!t("GET_ALLOW_FILE_ENCODE")||d.registerWriter(c({DID_PREPARE_OUTPUT:({root:n,action:_})=>{if(t("IS_ASYNC"))return;const i=t("GET_ITEM",_.id);if(!i)return;const u=s[i.id],L=u.metadata,O=u.data,p=JSON.stringify({id:i.id,name:i.file.name,type:i.file.type,size:i.file.size,metadata:L,data:O});n.ref.data?n.ref.data.value=p:n.dispatch("DID_DEFINE_VALUE",{id:i.id,value:p})},DID_REMOVE_ITEM:({action:n})=>{const _=t("GET_ITEM",n.id);_&&delete s[_.id]}}))}),{options:{allowFileEncode:[!0,E.BOOLEAN]}}},A=typeof window<"u"&&typeof window.document<"u";A&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:P}));export{P as p};