"use strict";(()=>{var e={};e.id=550,e.ids=[550],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},71102:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>g,patchFetch:()=>_,requestAsyncStorage:()=>u,routeModule:()=>l,serverHooks:()=>b,staticGenerationAsyncStorage:()=>c});var i={};r.r(i),r.d(i,{POST:()=>p});var a=r(49303),o=r(88716),n=r(60670),d=r(87070),s=r(83493);async function p(e){let t=await e.json();try{let e=await s.Z.tb_recepcion.findFirst({where:{nropallet:t.nropallet_recepcion},select:{box_disponible:!0,kg_disponible:!0,codigo:!0}});if(e){let r=e.box_disponible,i=e.kg_disponible.toNumber();if(0!==i&&0!==r)try{await s.Z.tb_recepcion.update({where:{nropallet:t.nropallet_recepcion,codigo:e.codigo},data:{box_disponible:r-Number(t.numberBaxes),kg_disponible:i-Number(t.kgUsedBaxes),state:t.state}})}catch(e){console.log(e)}}let r=await s.Z.tb_delivery_pallet.findUnique({where:{iddelivery:t.idDeliveryClicked},select:{nrpallet:!0}});await s.Z.tb_delivery_pallet.update({where:{iddelivery:t.idDeliveryClicked},data:{bax_add:Number(t.numberBaxes),kg_add:t.kgUsedBaxes}});let i=await s.Z.tb_delivery_reception.findFirst({where:{idorden:t.idOrder,idpunnet:t.idOrdenDetails,nropallet_delivery:r?.nrpallet,nropallet_recepcion:t.nropallet_recepcion},select:{id:!0}});return i?.id&&await s.Z.tb_delivery_reception.update({where:{id:i?.id},data:{bax:Number(t.numberBaxes),kg_used:t.kgUsedBaxes}}),d.NextResponse.json({message:"Success",status:200})}catch(e){return console.log(e),d.NextResponse.json({message:"Error updating data",error:e},{status:500})}}let l=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/updateTbReceptionYes/route",pathname:"/api/updateTbReceptionYes",filename:"route",bundlePath:"app/api/updateTbReceptionYes/route"},resolvedPagePath:"/Users/bogdanvoicu/Desktop/vbm-order-tracking/src/app/api/updateTbReceptionYes/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:b}=l,g="/api/updateTbReceptionYes/route";function _(){return(0,n.patchFetch)({serverHooks:b,staticGenerationAsyncStorage:c})}},83493:(e,t,r)=>{r.d(t,{Z:()=>i});let i=new(require("@prisma/client")).PrismaClient}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,972],()=>r(71102));module.exports=i})();