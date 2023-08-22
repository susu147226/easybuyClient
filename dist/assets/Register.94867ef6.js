import{_ as F,r as c,s as T,i as G,u as H,v as J,a as n,b as K,o as g,c as E,w as s,d as t,e as m,h as V,f as O,j as v,g as C,y as Q,F as W,A as b,E as _,p as X,q as ee}from"./index.e864a81d.js";const x=f=>(X("data-v-0861c471"),f=f(),ee(),f),te={class:"flex flex-1 justify-center items-center"},oe={class:"w-[500px] bg-white shadow-2xl"},le={class:"m-[20px]"},se={class:"flex justify-between items-center"},ae=x(()=>m("h2",{class:"h2"},"\u6B22\u8FCE\u6CE8\u518C",-1)),re=["src"],ue=x(()=>m("div",{class:"el-upload__text"},[V(" \u62D6\u5165\u56FE\u7247 \u6216 "),m("em",null,"\u70B9\u51FB\u9009\u62E9\u56FE\u7247\u4E0A\u4F20"),V(",\u4E0D\u8D85\u8FC710M ")],-1)),ne=x(()=>m("span",{class:"text-white font-bold"},"\u6CE8\u518C",-1)),de={__name:"Register",setup(f){c(!1),c(!0),c("");const U=T(),j=G("baseURL"),q=H(),o=J({custom_realName:"",custom_pwd:"",custom_tel:"",custom_email:"",custom_sex:"",custom_birthday:"",custom_addr:"",custom_photo:""}),N={custom_realName:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:"blur"}],custom_pwd:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}],confirm_pwd:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:(l,e,r)=>{e===o.custom_pwd?r():r(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"))},trigger:"blur"}],custom_tel:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:async(l,e,r)=>{if(e.length===11&&/^1[3-9]\d{9}$/.test(e)){let{data:d}=await b.customInfo.validateCustomTelExists(e);d===!0?r(new Error("\u624B\u673A\u53F7\u5DF2\u5B58\u5728")):r()}else r(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},trigger:"blur"}],custom_email:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:async(l,e,r)=>{if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)){let{data:u}=await b.customInfo.validateCustomEmailExists(e);u===!0?r(new Error("\u90AE\u7BB1\u5DF2\u5B58\u5728")):r()}else r(new Error("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))},trigger:"blur"}],custom_sex:[{required:!0,message:"\u8BF7\u9009\u62E9\u6027\u522B",trigger:"blur"}],custom_birthday:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u65E5",trigger:"blur"}],custom_addr:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u5740",trigger:"blur"}],custom_photo:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u5934\u50CF",trigger:"blur"}]},k={lazy:!0,async lazyLoad(l,e){let{level:r,data:d}=l,u=d.id?d.id:-1,i=await b.areaInfo.getListByParentId(u);console.log(i);const y=i.map(p=>({value:p.areaName,label:p.areaName,id:p.id,leaf:r>=2}));e(y)}},w=c(!1),R=()=>{w.value=!0,b.customInfo.register(o).then(l=>{_({showClose:!0,message:"\u767B\u5F55\u6CE8\u518C\u6210\u529F",type:"success"}),q.replace({name:"Login"})}).catch(l=>{_({showClose:!0,message:"\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u60C5\u51B5\u6216\u8054\u7CFB\u5BA2\u670D",type:"warning"}),console.log(l)}).finally(()=>{w.value=!1})},h=c(!1),z=l=>{if(/^image\/(jpe?g|png|webp|gif|bmp)$/.test(l.type)){if(l.size/1024/1024>10)return _({showClose:!0,message:"\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u5927\u4E8E10M",type:"error"}),!1;h.value=!0}else return _({showClose:!0,message:"\u8BF7\u91CD\u65B0\u9009\u62E9\u56FE\u7247\uFF0C\u683C\u5F0F\u5FC5\u987B\u662Fjpg\uFF0Cjpeg\uFF0Cpng\uFF0Cwebp\uFF0Cgif\uFF0Cbmp\u683C\u5F0F",type:"error"}),!1},D=l=>{console.log(l),o.custom_photo=l.data,h.value=!1},I=c(null),L=()=>{I.value.validate(l=>{l?R():_({showClose:!0,message:"\u8BF7\u6B63\u786E\u586B\u5199\u8868\u5355\u5185\u5BB9\u3002",type:"error"})})};return(l,e)=>{const r=n("el-link"),d=n("el-input"),u=n("el-form-item"),i=n("el-option"),y=n("el-select"),p=n("el-date-picker"),S=n("el-cascader"),A=n("el-icon"),B=n("el-upload"),M=n("el-button"),Y=n("el-form"),$=n("page-view"),P=n("page-login"),Z=K("loading");return g(),E(P,null,{default:s(()=>[t($,null,{default:s(()=>[m("div",te,[m("div",oe,[m("div",le,[m("div",se,[ae,t(r,{type:"primary",onClick:e[0]||(e[0]=a=>l.$router.push(l.name="Login"))},{default:s(()=>[V("\u53BB\u767B\u5F55")]),_:1})]),t(Y,{model:o,rules:N,class:"mt-[15px]","label-width":"80px",ref_key:"formEl",ref:I},{default:s(()=>[t(u,{label:"\u7528\u6237\u6635\u79F0",prop:"custom_realName"},{default:s(()=>[t(d,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0",modelValue:o.custom_realName,"onUpdate:modelValue":e[1]||(e[1]=a=>o.custom_realName=a)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u5BC6\u7801",prop:"custom_pwd"},{default:s(()=>[t(d,{type:"password",modelValue:o.custom_pwd,"onUpdate:modelValue":e[2]||(e[2]=a=>o.custom_pwd=a),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"confirm_pwd"},{default:s(()=>[t(d,{type:"password",modelValue:o.confirm_pwd,"onUpdate:modelValue":e[3]||(e[3]=a=>o.confirm_pwd=a),placeholder:"\u8BF7\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u624B\u673A\u53F7\u7801",prop:"custom_tel"},{default:s(()=>[t(d,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",modelValue:o.custom_tel,"onUpdate:modelValue":e[4]||(e[4]=a=>o.custom_tel=a)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7535\u5B50\u90AE\u7BB1",prop:"custom_email"},{default:s(()=>[t(d,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",modelValue:o.custom_email,"onUpdate:modelValue":e[5]||(e[5]=a=>o.custom_email=a)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u6027\u522B",prop:"custom_sex"},{default:s(()=>[t(y,{placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",modelValue:o.custom_sex,"onUpdate:modelValue":e[6]||(e[6]=a=>o.custom_sex=a),class:"w-full"},{default:s(()=>[t(i,{label:"\u7537",value:"\u7537"}),t(i,{label:"\u5973",value:"\u5973"})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"\u751F\u65E5",prop:"custom_birthday"},{default:s(()=>[t(p,{modelValue:o.custom_birthday,"onUpdate:modelValue":e[7]||(e[7]=a=>o.custom_birthday=a),type:"date",placeholder:"\u751F\u65E5\u5F53\u5929\u4F1A\u6709\u610F\u5916\u5C0F\u60CA\u559C\u54E6~","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u5730\u5740",prop:"custom_addr"},{default:s(()=>[t(S,{props:k,style:{width:"100%"},separator:" ",placeholder:"\u70B9\u51FB\u9009\u62E9\u5730\u5740\uFF0C\u60A8\u540E\u671F\u8D2D\u7269\u4F1A\u5C31\u8FD1\u4ED3\u5E93\u53D1\u9001\u8D27\u7269\u54E6",modelValue:o.custom_addr,"onUpdate:modelValue":e[8]||(e[8]=a=>o.custom_addr=a)},null,8,["modelValue"])]),_:1}),t(u,{label:"\u7528\u6237\u5934\u50CF",prop:"custom_photo"},{default:s(()=>[O((g(),E(B,{"element-loading-text":"\u6B63\u5728\u4E0A\u4F20\u56FE\u7247",name:"custom_photo",headers:{easybuy_client_token:v(U).token},class:"w-full h-[100px] border border-dashed border-gray-200 flex flex-row justify-center items-center","before-upload":z,"show-file-list":!1,"on-success":D},{default:s(()=>[o.custom_photo?(g(),C("img",{key:0,src:v(j)+o.custom_photo,class:"object-contain w-full h-full object-center",alt:""},null,8,re)):(g(),C(W,{key:1},[t(A,{class:"el-icon--upload"},{default:s(()=>[t(v(Q))]),_:1}),ue],64))]),_:1},8,["headers"])),[[Z,h.value]])]),_:1}),t(u,null,{default:s(()=>[t(M,{class:"w-full",color:"#409eff",onClick:L,loading:w.value},{default:s(()=>[ne]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])])]),_:1})]),_:1})}}},ce=F(de,[["__scopeId","data-v-0861c471"]]);export{ce as default};