"use strict";(()=>{var e={};e.id=486,e.ids=[486],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},73962:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>O,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>h,staticGenerationAsyncStorage:()=>c});var i={};t.r(i),t.d(i,{GET:()=>u});var a=t(49303),n=t(88716),s=t(60670),d=t(87070),o=t(83493);async function u(e,{params:r}){let t=r.idOrderDetail;try{let e=await o.Z.tb_orden_detail.update({where:{id:Number(t)},data:{state:4}});return d.NextResponse.json(e)}catch(e){return console.error("Error fetching data:",e),d.NextResponse.json({message:"Error fetching data",error:e},{status:500})}}let p=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/finsihOrder/[idOrderDetail]/route",pathname:"/api/finsihOrder/[idOrderDetail]",filename:"route",bundlePath:"app/api/finsihOrder/[idOrderDetail]/route"},resolvedPagePath:"/Users/bogdanvoicu/Desktop/vbm-order-tracking/src/app/api/finsihOrder/[idOrderDetail]/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:h}=p,m="/api/finsihOrder/[idOrderDetail]/route";function O(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:c})}},83493:(e,r,t)=>{t.d(r,{Z:()=>i});let i=new(require("@prisma/client")).PrismaClient}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[948,972],()=>t(73962));module.exports=i})();