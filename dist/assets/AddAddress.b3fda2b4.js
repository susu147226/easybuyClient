import{_ as D,v as I,r as g,J as k,a as n,o as q,c as w,w as r,d as a,h as f,A,E as F}from"./index.165355ae.js";const U={__name:"AddAddress",emits:["closeDialog"],setup(h,{emit:i}){const e=I({address_name:"",address_tel:"",area:"",city:"",province:"",address_detail:"",address_tag:"",selectedAddress:[]}),p=g({}),V={address_name:[{required:!0,message:"\u6536\u4EF6\u4EBA\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],address_tel:[{required:!0,message:"\u8054\u7CFB\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],selectedAddress:[{required:!0,message:"\u8BF7\u9009\u62E9\u5730\u5740",trigger:"change"}],address_detail:[{required:!0,message:"\u8BE6\u7EC6\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],address_tag:[{required:!0,message:"\u5730\u5740\u6807\u7B7E\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]};k(()=>e.selectedAddress,t=>{e.province=t[0],e.city=t[1],e.area=t[2]},{deep:!0});const v={lazy:!0,async lazyLoad(t,d){let{level:o,data:l}=t,_=l.id?l.id:-1;const m=(await A.areaInfo.getListByParentId(_)).map(s=>({value:s.areaName,label:s.areaName,id:s.id,leaf:o>=2}));d(m)}},y=()=>{p.value.validate(t=>{if(t)b();else return!1})},u=g(!1),b=()=>{u.value=!0,A.addressInfo.addMyAddressInfo({...e,selectedAddress:null}).then(()=>{F.success("\u4FDD\u5B58\u6210\u529F"),i("closeDialog")}).finally(()=>{u.value=!1})},x=()=>{i("closeDialog")};return(t,d)=>{const o=n("el-input"),l=n("el-form-item"),_=n("el-cascader"),c=n("el-button"),m=n("el-form");return q(),w(m,{model:e,rules:V,ref_key:"addressFormEl",ref:p},{default:r(()=>[a(l,{prop:"address_name"},{default:r(()=>[a(o,{modelValue:e.address_name,"onUpdate:modelValue":d[0]||(d[0]=s=>e.address_name=s),placeholder:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1}),a(l,{prop:"address_tel"},{default:r(()=>[a(o,{modelValue:e.address_tel,"onUpdate:modelValue":d[1]||(d[1]=s=>e.address_tel=s),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD"},null,8,["modelValue"])]),_:1}),a(l,{prop:"selectedAddress"},{default:r(()=>[a(_,{props:v,style:{width:"100%"},separator:" ",placeholder:"\u8BF7\u70B9\u51FB\u9009\u62E9\u5730\u5740",modelValue:e.selectedAddress,"onUpdate:modelValue":d[2]||(d[2]=s=>e.selectedAddress=s)},null,8,["modelValue"])]),_:1}),a(l,{prop:"address_detail"},{default:r(()=>[a(o,{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",modelValue:e.address_detail,"onUpdate:modelValue":d[3]||(d[3]=s=>e.address_detail=s)},null,8,["modelValue"])]),_:1}),a(l,{prop:"address_tag"},{default:r(()=>[a(o,{placeholder:"\u8BF7\u8F93\u5165\u5730\u5740\u6807\u7B7E",modelValue:e.address_tag,"onUpdate:modelValue":d[4]||(d[4]=s=>e.address_tag=s)},null,8,["modelValue"])]),_:1}),a(l,null,{default:r(()=>[a(c,{class:"btn-save",onClick:y,loading:u.value},{default:r(()=>[f("\u4FDD\u5B58")]),_:1},8,["loading"]),a(c,{type:"info",onClick:x},{default:r(()=>[f("\u5173\u95ED")]),_:1})]),_:1})]),_:1},8,["model"])}}},E=D(U,[["__scopeId","data-v-5c3d8301"]]);export{E as A};
