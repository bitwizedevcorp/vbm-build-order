"use strict";(()=>{var e={};e.id=812,e.ids=[812],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},10255:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>b,staticGenerationAsyncStorage:()=>l});var r={};o.r(r),o.d(r,{POST:()=>u});var a=o(49303),i=o(88716),n=o(60670),s=o(87070),p=o(83493);async function u(e){let t=await e.json();try{let e=await p.Z.tb_recepcion.findFirst({where:{nropallet:t.nropallet_recepcion},select:{box_disponible:!0,kg_disponible:!0,codigo:!0}});if(e){let o=e.box_disponible,r=e.kg_disponible.toNumber();if(0!==r&&0!==o)try{let a=await p.Z.tb_recepcion.update({where:{nropallet:t.nropallet_recepcion,codigo:e.codigo},data:{box_disponible:o-Number(t.numberBaxes),kg_disponible:r-Number(t.kgUsedBaxes),state:t.state}});console.log(a)}catch(e){console.log(e)}}return s.NextResponse.json({message:"Success",status:200})}catch(e){return console.log(e),s.NextResponse.json({message:"Error updating data",error:e},{status:500})}}let c=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/updateTbReceptionNo/route",pathname:"/api/updateTbReceptionNo",filename:"route",bundlePath:"app/api/updateTbReceptionNo/route"},resolvedPagePath:"/Users/bogdanvoicu/Desktop/vbm-order-tracking/src/app/api/updateTbReceptionNo/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:b}=c,g="/api/updateTbReceptionNo/route";function m(){return(0,n.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:l})}},83493:(e,t,o)=>{o.d(t,{Z:()=>r});let r=new(require("@prisma/client")).PrismaClient}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[948,972],()=>o(10255));module.exports=r})();