import{_ as ee,i as te,s as oe,u as se,z as ae,I as ne,v as B,r as _,J as le,G as P,a as c,b as de,o as h,g as y,f as re,e,K as ce,d as a,w as l,F as G,A as I,L as w,h as i,t as d,j as p,M as ie,l as pe,N as _e,m as ue,p as ge,q as me,n as xe}from"./index.e864a81d.js";import{A as fe}from"./AddAddress.ac84f0d1.js";const r=v=>(ge("data-v-a535058a"),v=v(),me(),v),he={class:"py-6 border-b-2 border-solid my-shop-car-header","element-loading-text":"\u6B63\u5728\u63D0\u4EA4\u8BA2\u5355"},ye={class:"w-[1226px] m-auto flex flex-row items-center py-20"},ve=r(()=>e("div",{class:"text-[22px] ml-10 flex-1"},"\u786E\u8BA4\u8BA2\u5355",-1)),be={class:"self-end flex flex-row items-center"},Ce={class:"el-dropdown-link text-gray-500 font-bold"},Ie={class:"ml-4"},we=r(()=>e("span",{class:"mx-4 text-gray-400"},"|",-1)),ke={class:"bg-gray-100 overflow-auto"},Le={class:"w-[1226px] m-auto mt-[40px] p-[20px] bg-white"},Oe=r(()=>e("h2",{class:"text-gray-700 text-[18px] my-[10px]"},"\u6536\u8D27\u5730\u5740",-1)),Ae={class:"address-list"},Se=["onClick"],De={class:"text-[18px]"},Ee={class:"text-gray-600"},$e={class:"address-all"},Ne={class:"h-[200px] flex flex-row justify-center items-center border border-solid border-gray-400 p-6 box-border leading-7"},Ve=r(()=>e("h2",{class:"text-gray-700 text-[18px] my-[10px]"},"\u5546\u54C1\u53CA\u4F18\u60E0\u5377",-1)),Be={class:"text-[12px]"},Pe={class:"text-primary"},Ge=r(()=>e("div",{class:"flex flex-row h-[80px] items-center border-b border-solid border-gray-200"},[e("h2",{class:"text-gray-700 text-[18px] my-[10px]"},"\u914D\u9001\u65B9\u5F0F"),e("span",{class:"text-primary ml-10 text-[14px]"},"\u5305\u90AE")],-1)),Me=r(()=>e("div",{class:"flex flex-row h-[80px] items-center border-b border-solid border-gray-200"},[e("h2",{class:"text-gray-700 text-[18px] my-[10px]"},"\u53D1\u7968"),e("span",{class:"text-primary ml-10 text-[14px]"},"\u7535\u5B50\u666E\u901A\u53D1\u7968\u4E2A\u4EBA\u5546\u54C1\u660E\u7EC6\u4FEE\u6539 >")],-1)),Te={class:"total-info-ul"},je=r(()=>e("span",null,"\u5546\u54C1\u603B\u4EF6\u6570\uFF1A",-1)),Re={class:"text-primary"},Ue=r(()=>e("span",null,"\u5546\u54C1\u603B\u4EF7\uFF1A",-1)),qe={class:"text-primary"},ze=r(()=>e("li",null,[e("span",null,"\u6D3B\u52A8\u4F18\u60E0\uFF1A"),e("span",{class:"text-primary"},"-0\u5143")],-1)),Fe=r(()=>e("li",null,[e("span",null,"\u4F18\u60E0\u5238\u62B5\u6263\uFF1A"),e("span",{class:"text-primary"},"-0\u5143")],-1)),He=r(()=>e("li",null,[e("span",null,"\u8FD0\u8D39\uFF1A"),e("span",{class:"text-primary"},"0\u5143")],-1)),Je={class:"flex flex-row items-end"},Ke=r(()=>e("span",null,"\u5E94\u4ED8\u603B\u989D\uFF1A",-1)),Qe={class:"text-primary text-[28px]"},We={class:"flex flex-row justify-end mt-[20px] box-border"},Xe=r(()=>e("div",{class:"h-[10px] bg-gray-100"},null,-1)),Ye={__name:"CheckoutOrder",setup(v){const M=te("baseURL"),A=oe(),k=se(),T=ae(),{loginClientInfo:j}=ne(A),u=B({pageIndex:1}),n=B({listData:[],pageCount:0,pageEnd:0,pageIndex:1,pageStart:1,totalCount:0}),g=_(!1),S=o=>{g.value=!0,I.addressInfo.getMyAddressInfoList(u.pageIndex).then(t=>{n.listData=t.listData,n.pageCount=t.pageCount,n.pageEnd=t.pageEnd,n.pageIndex=t.pageIndex,n.pageStart=t.pageStart,n.totalCount=t.totalCount}).finally(()=>{g.value=!1})};S(u.pageIndex);const m=_(!1);le(m,(o,t)=>{o===!1&&S(u.pageIndex)});const b=_(-1),R=()=>{n.pageIndex<n.pageCount&&(u.pageIndex++,g.value=!0,I.addressInfo.getMyAddressInfoList(u.pageIndex).then(o=>{n.listData=o.listData,n.pageCount=o.pageCount,n.pageEnd=o.pageEnd,n.pageIndex=o.pageIndex,n.pageStart=o.pageStart,n.totalCount=o.totalCount}).finally(()=>{g.value=!1}))},L=_(!1),x=_([]);(()=>{L.value=!0;let o=T.params.Ids;I.shopCarInfo.getMyCheckoutShopCarList(o).then(t=>{t.forEach(C=>{C.goodsInfo.goods_photo=JSON.parse(C.goodsInfo.goods_photo)}),x.value=t}).catch(()=>{w.alert("\u83B7\u53D6\u786E\u8BA4\u8BA2\u5355\u7684\u5546\u54C1\u6570\u636E\u5931\u8D25")}).finally(()=>{L.value=!1})})();const U=P(()=>{let o=0;return x.value.forEach(t=>{o+=t.car_goods_num}),o}),D=P(()=>{let o=0;return x.value.forEach(t=>{o+=t.car_goods_num*t.goodsInfo.goods_sale_price}),o}),O=_(!1),q=()=>{if(b.value===-1){w.alert("\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740","\u63D0\u793A");return}O.value=!0;let o={address_id:n.listData[b.value].id,order_pay_type:1,goodsList:x.value.map(t=>({goods_id:t.goods_id,goods_num:t.car_goods_num}))};I.orderInfo.submitOrder(o).then(t=>{k.replace({name:"ConfirmOrder",params:{id:t}})}).catch(()=>{w.alert("\u63D0\u4EA4\u8BA2\u5355\u5931\u8D25","\u63D0\u793A",{type:"error"})}).finally(()=>{O.value=!1})},z=o=>{o==="CustomCenter"?k.push({name:"CustomInfo"}):o==="logOut"&&F()},F=()=>{w.confirm("\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417\uFF1F","\u8BE2\u95EE",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{A.logOut(),k.replace({name:"HomePage"})}).catch(()=>{console.log("\u53D6\u6D88\u9000\u51FA\u767B\u5F55")})};return(o,t)=>{const C=c("el-icon"),E=c("el-dropdown-item"),H=c("el-dropdown-menu"),J=c("el-dropdown"),K=c("el-tag"),$=c("el-button"),N=c("el-skeleton"),f=c("el-table-column"),Q=c("el-image"),W=c("el-table"),X=c("foot-bar"),Y=c("el-dialog"),Z=de("loading");return h(),y(G,null,[re((h(),y("div",he,[e("div",ye,[e("img",{src:ce,class:"w-[56px] h-[56px] cursor-pointer",alt:"",onClick:t[0]||(t[0]=s=>o.$router.replace({name:"HomePage"}))}),ve,e("div",be,[a(J,{onCommand:z},{dropdown:l(()=>[a(H,null,{default:l(()=>[a(E,{command:"CustomCenter"},{default:l(()=>[i("\u4EBA\u4E2A\u4E2D\u5FC3")]),_:1}),a(E,{divided:"",command:"logOut"},{default:l(()=>[i("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1})]),default:l(()=>[e("span",Ce,[i(d(p(j).custom_realName)+" ",1),a(C,{class:"el-icon--right"},{default:l(()=>[a(p(ie))]),_:1})])]),_:1}),e("div",Ie,[we,e("span",{onClick:t[1]||(t[1]=s=>o.$router.replace({name:"OrderInfoList"})),class:"text-[14px] text-gray-600 hover:text-primaryColor cursor-pointer"},"\u6211\u7684\u8BA2\u5355")])])])])),[[Z,O.value]]),e("div",ke,[e("div",Le,[Oe,a(N,{animated:"",loading:g.value},{default:l(()=>[e("div",Ae,[(h(!0),y(G,null,pe(n.listData,(s,V)=>(h(),y("div",{class:xe(["address-item",{selected:b.value===V}]),onClick:et=>b.value=V,key:s.id},[e("div",De,d(s.address_name),1),e("p",Ee,d(s.address_tel.substr(0,3)+"****"+s.address_tel.slice(-4)),1),e("p",$e,d(s.province)+" "+d(s.city)+" "+d(s.area)+" "+d(s.address_detail),1),a(K,{type:"primary",class:"absolute right-6 bottom-2"},{default:l(()=>[i("\u4FEE\u6539")]),_:1})],10,Se))),128)),e("div",Ne,[a($,{icon:p(_e),type:"primary",plain:"",onClick:t[2]||(t[2]=s=>m.value=!0)},{default:l(()=>[i(" \u65B0\u589E\u5730\u5740 ")]),_:1},8,["icon"])])]),n.pageIndex<n.pageCount?(h(),y("div",{key:0,class:"flex flex-row h-[40px] justify-center items-center my-5 bg-gray-100 cursor-pointer text-gray-500",onClick:R}," \u52A0\u8F7D\u4E0B\u4E00\u9875\u5730\u5740\u6570\u636E ")):ue("",!0)]),_:1},8,["loading"]),a(N,{animated:"",loading:L.value},{default:l(()=>[Ve,a(W,{data:x.value,class:"w-full"},{default:l(()=>[a(f,{label:"\u7F16\u53F7",width:"60",align:"center"},{default:l(({$index:s})=>[i(d(s+1),1)]),_:1}),a(f,{label:"\u56FE\u7247",width:"100",align:"center"},{default:l(({row:s})=>[a(Q,{src:p(M)+s.goodsInfo.goods_photo[0],class:"w-[60px] h-[60px]"},null,8,["src"])]),_:1}),a(f,{prop:"goodsInfo.goods_name",label:"\u5546\u54C1\u540D\u79F0"}),a(f,{label:"\u4EF7\u683C\u6570\u91CF",width:"200",align:"center"},{default:l(({row:s})=>[e("span",Be,d(s.goodsInfo.goods_sale_price)+"\u5143 x "+d(s.car_goods_num),1)]),_:1}),a(f,{label:"\u603B\u4EF7",width:"120"},{default:l(({row:s})=>[e("span",Pe,d(s.goodsInfo.goods_sale_price*s.car_goods_num),1)]),_:1})]),_:1},8,["data"]),Ge,Me,e("ul",Te,[e("li",null,[je,e("span",Re,d(p(U))+"\u4EF6",1)]),e("li",null,[Ue,e("span",qe,d(p(D))+"\u5143",1)]),ze,Fe,He,e("li",Je,[Ke,e("span",Qe,d(p(D))+"\u5143",1)])]),e("div",We,[e("button",{type:"button",class:"w-[180px] h-[40px] border border-solid border-gray-400 text-gray-400",onClick:t[3]||(t[3]=s=>o.$router.back())},"\u8FD4\u56DE\u8D2D\u7269\u8F66 "),a($,{type:"danger",onClick:q},{default:l(()=>[i("\u53BB\u7ED3\u7B97 ")]),_:1})])]),_:1},8,["loading"])])]),Xe,a(X),a(Y,{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=s=>m.value=s),width:"700px",title:"\u65B0\u589E\u6536\u8D27\u5730\u5740","close-on-press-escape":!1,"close-on-click-modal":!1,"destroy-on-close":!0},{default:l(()=>[a(fe,{onCloseDialog:t[4]||(t[4]=s=>m.value=!1)})]),_:1},8,["modelValue"])],64)}}},st=ee(Ye,[["__scopeId","data-v-a535058a"]]);export{st as default};