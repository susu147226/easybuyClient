import{_ as d,i as _,s as i,I as p,o as u,g as x,e as s,j as t,t as l,h as r,p as m,q as f}from"./index.e864a81d.js";const h=e=>e?e.replace(new RegExp("(?<=\\d{3})\\d{4}(?=\\d{4})"),"****"):"",v=e=>e?e.replace(new RegExp("(?<=.{2}).+(?=.@)"),"****"):"";const o=e=>(m("data-v-8c43e2d9"),e=e(),f(),e),b={class:"box-border p-[20px]"},g={class:"flex flex-row items-center border-b border-solid border-gray-200 py-[20px]"},I={class:"flex-1 flex flex-row items-center pl-10"},y=["src"],C={class:"text-[12px] leading-8 ml-20"},S={class:"text-[22px]"},k=o(()=>s("div",{class:"text-gray-500"},"\u60A8\u597D~",-1)),w=o(()=>s("div",{class:"text-primaryColor"},"\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F",-1)),B={class:"flex-1 right-info"},N=o(()=>s("li",null,[s("div",null,"\u8D26\u53F7\u5B89\u5168\uFF1A"),s("span",{class:"text-green-600"},"\u8F83\u9AD8")],-1)),R=o(()=>s("div",null,"\u7ED1\u5B9A\u624B\u673A\uFF1A",-1)),T=o(()=>s("div",null,"\u7ED1\u5B9A\u90AE\u7BB1\uFF1A",-1)),j={__name:"CustomInfo",setup(e){const n=_("baseURL"),a=i(),{loginClientInfo:c}=p(a);return(E,L)=>(u(),x("div",b,[s("div",g,[s("div",I,[s("img",{src:t(n)+t(c).custom_photo,class:"w-[140px] h-[140px] rounded-full border border-solid border-gray-200 p-1",alt:""},null,8,y),s("div",C,[s("div",S,l(t(c).custom_realName),1),k,w])]),s("ul",B,[N,s("li",null,[R,r(" "+l(t(h)(t(c).custom_tel)),1)]),s("li",null,[T,r(" "+l(t(v)(t(c).custom_email)),1)])])])]))}},V=d(j,[["__scopeId","data-v-8c43e2d9"]]);export{V as default};