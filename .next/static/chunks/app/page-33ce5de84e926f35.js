(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{29422:function(e,s,l){Promise.resolve().then(l.bind(l,14713))},14713:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return I}});var a=l(57437),t=l(2265),r=l(5890),c=l(60603),n=l(40884),i=l(63663),d=l(8284),o=l(75945),x=l(55448),h=l(68937),j=l(38472),u=e=>{let{clients:s,onOrderClick:l,orderDetailsLoadedCallback:t}=e,r=async e=>{t(!1),l({dummy:"dummy"});try{let s=await j.Z.get("/api/getOrderDetail/".concat(e));l(s.data.orderDetail),t(!0)}catch(e){console.log(e)}},u=()=>{try{j.Z.get("/api/finishOrder/".concat(s[0].idorden))}catch(e){console.log(e)}};return 0===s.length?(0,a.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,a.jsx)(c.w,{className:"max-w-[600px] mx-auto mt-4",children:(0,a.jsx)(n.u,{className:"flex gap-3",children:(0,a.jsx)("b",{children:"No orders available"})})})}):(0,a.jsx)(a.Fragment,{children:s.map((e,s)=>(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)("button",{className:"focus:outline-none w-full",onClick:()=>r(e.idorden),children:(0,a.jsxs)(c.w,{className:"w-full",children:[(0,a.jsxs)(n.u,{className:"flex gap-3 justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(i.J,{alt:"nextui logo",height:40,radius:"sm",src:"https://avatars.githubusercontent.com/u/86160567?s=200&v=4",width:40}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsxs)("p",{className:"text-md",children:[(0,a.jsx)("b",{children:"Order id: "}),e.idorden]})})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(d.A,{color:"success",onClick:u,children:"Finish order"})})]}),(0,a.jsx)(o.j,{}),(0,a.jsxs)(x.G,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Client"}),": ",e.cliente]}),(0,a.jsx)(o.j,{}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Destination"}),": ",e.destino]})]}),(0,a.jsx)(o.j,{}),(0,a.jsx)(h.i,{children:(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Day departure"}),": ",e.fecha_despacho]})})]})})},s))})},m=l(51161),g=l(97209),p=l(18362),f=l(72635),b=l(21764),y=l(24077),w=l(95256),N=l(81887),v=l(27165),k=l(22053),S=l(28382),_=l(9100),C=l(67022),A=l(47971),D=l(51446),O=l(3445),P=l(8127),R=e=>{let{selectedOrder:s,orderNumber:l,orderDetailsLoaded:i}=e,[u,R]=(0,t.useState)(!1),[I,E]=(0,t.useState)(!1),[F,Z]=(0,t.useState)(!1),[X,L]=(0,t.useState)(!1),[W,z]=(0,t.useState)(""),[K,B]=(0,t.useState)({_total:0,_text:""}),[Y,G]=(0,t.useState)(!1),[M,J]=(0,t.useState)(""),[T,U]=(0,t.useState)(!1),q=()=>R(!0),H=()=>R(!1),V=()=>E(!0),Q=()=>E(!1),$=()=>Z(!0),ee=()=>Z(!1),es=()=>L(!0),el=()=>L(!1),[ea,et]=(0,t.useState)([]),[er,ec]=(0,t.useState)([]),[en,ei]=(0,t.useState)([]),[ed,eo]=(0,t.useState)({}),[ex,eh]=(0,t.useState)(""),[ej,eu]=(0,t.useState)({}),[em,eg]=(0,t.useState)([]),[ep,ef]=(0,t.useState)(""),[eb,ey]=(0,t.useState)(),[ew,eN]=(0,t.useState)(),[ev,ek]=(0,t.useState)(),[eS,e_]=(0,t.useState)(!1),[eC,eA]=(0,t.useState)(),eD=e=>{ej[ex]=e,ey(e)};console.log("Order details loaded from rightside: ",i),console.log("Selected order",s);let eO=async e=>{q();try{let s=await j.Z.get("/api/getDeliveryPallet/".concat(e));et(s.data)}catch(e){console.error("Error fetching delivery pallet",e)}},eP=async(e,s,l)=>{if(confirm("Do you want to start this delivery pallet number ".concat(l,"?"))&&(ek(!1),V(),200===(await j.Z.get("/api/updateDeliveryPalletState/".concat(s))).status))try{let a=await j.Z.get("/api/getReceptionAsociadosOrder/".concat(e));ek(!0),ec(a.data),eo({idorden_idpunnet:e,iddelivery:s}),eh(l)}catch(e){console.error("Error fetching row",e)}},eR=async()=>{if(console.log("select",eb),eb){if(0===eb.size)alert("Nothing selected");else{ej[ex]=eb,console.log("rowclick",ej);try{let e=await j.Z.get("/api/getLines");console.log(e.data),eg(e.data)}catch(e){console.log("Error at fetching lines from dbs",e)}$()}}else alert("Nothing selected")},eI=e=>{let s=e.state,l="primary";switch(e.state){case 1:s="Waiting",l="warning";break;case 2:s="Processing",l="success";break;case 3:s="Partially finished",l="warning";break;case 4:s="Finished",l="success";break;default:s=e.state,l="primary"}return(0,a.jsx)(m.X,{children:(0,a.jsx)(g.z,{className:"capitalize",color:l,size:"sm",variant:"flat",children:s})})},eE=(e,s)=>(0,a.jsx)(d.A,{color:"primary",onClick:()=>{eP(e.idorden+"_"+e.id,s.iddelivery,s.nrpallet)},children:"Select delivery"}),eF=async e=>{try{let s=await j.Z.get("/api/finishDeliverPallet/".concat(e));200===s.status&&console.log("ddd",s)}catch(e){console.log("ddd",e)}},eZ=(e,s)=>(0,a.jsxs)(p.g,{children:[(0,a.jsx)(d.A,{color:"primary",onClick:()=>{eP(e.idorden+"_"+e.id,s.iddelivery,s.nrpallet)},children:"Select delivery"}),(0,a.jsx)(d.A,{color:"success",onClick:()=>{eX(e.punnet,s.nrpallet,s.iddelivery)},children:"Add baxes"}),Number(s.bax_add)>0?(0,a.jsx)(d.A,{color:"warning",onClick:()=>{eF(s.iddelivery)},children:"Finish pallet"}):""]}),eX=async(e,s,l)=>{if(eN(s),eA(l),es(),console.log("pun",e,s),!Y){try{let s=await j.Z.get("/api/getProductWeight/".concat(e));G(!0),J(s.data.orderDetail.weight)}catch(e){G(!1),console.log("Cannot fetch getProductWeight",e)}G(!0)}},eL=e=>new Date(e).toLocaleDateString("en-GB"),eW=e=>{ef(e.target.value)},ez=async e=>{e_(!0);let s=!0,l=[ej[ex].currentKey],a=er.find(e=>e.id===Number(l[0]));if(""===ep&&(s=!1),s){let{idorden_idpunnet:e}=ed,s={idorden_idpunnet:e,selectedRows:l,workLine:"",nrPalletDelivery:ex,nropallet_recepcion:a.nropallet_recepcion};for(let e of(console.log("Payload before prompt:",s),s.workLine=ep,console.log(s),s.selectedRows)){let e=s.nropallet_recepcion;try{let s=await j.Z.get("/api/updateReceptionState/".concat(e));console.log("Updated reception state for ID:",e,"Response:",s.data)}catch(e){console.error("Error updating reception state:",e),alert("Can not update reception state");return}}try{let e=await j.Z.post("/api/deliveryReception/",{payload:s});if(200===e.status){alert("Success: Data added successfully");let s="";for(let e in ej)if(ej[e].anchorKey===l[0]){s=e;break}""!=s&&(ej[s].lastInsertedId=e.data.data),console.log("ROWCL",ej),ee(),Q()}else alert("Error: Incorrect number of lines or something went wrong")}catch(e){console.error("Error:",e)}}e_(!1),ee()},eK=async()=>{U(!0)},eB=async e=>{let l="",a=Number(ej[ew].currentKey);for(let e in er)console.log("secondaryModalData",er[e],Number(ej[ew].currentKey)),er[e].id===a&&(l=er[e].nropallet_recepcion);console.log("secondaryModalData _nropallet_recepcion",l);let t={numberBaxes:W,kgUsedBaxes:K._total,nropallet_recepcion:l,state:0,insertedId:ej[ew].lastInsertedId,idDeliveryClicked:eC,idOrder:s[0].idorden,idOrdenDetails:s[0].id};if(console.log("datatoinsert:",t),"no"===e){t.state=1;try{await j.Z.post("/api/updateTbReceptionNo/",t)}catch(e){}}else console.log("intru in yes"),t.state=3,await j.Z.post("/api/updateTbReceptionYes/",t);U(!1),L(!1)},eY=async()=>{try{await j.Z.get("/api/finsihOrder/".concat(s[0].id))}catch(e){console.log(e)}};return((0,t.useEffect)(()=>{if(X&&Y&&""!==M){let e=Number(M),s=0;s=e*Number(W),W&&"0"!==W?B({_total:s,_text:String(s)+"kg"}):B({_total:s,_text:""})}}),(0,t.useEffect)(()=>{if(u){let e=setInterval(async()=>{if(ed.idorden_idpunnet)try{let e=await j.Z.get("/api/getDeliveryPallet/".concat(ed.idorden_idpunnet));et(e.data)}catch(e){console.error("Error fetching delivery data",e)}},2e4);return()=>clearInterval(e)}},[u,ed]),(!s||0===s.length)&&l>0)?(0,a.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:(0,a.jsxs)(c.w,{className:"max-w-[600px] mx-auto mt-4",children:[(0,a.jsx)(n.u,{className:"flex gap-3",children:(0,a.jsx)("b",{children:"No order selected"})}),(0,a.jsx)(x.G,{children:(0,a.jsx)("p",{children:"Please select an order to view the details."})})]})}):s&&!i?(0,a.jsx)(r.W,{size:"sm",color:"success",isIndeterminate:!0,"aria-label":"Loading...",className:"max-w-md"}):l>0?(0,a.jsx)("div",{className:"space-y-4 px-4",children:s.map((e,s)=>(0,a.jsxs)(c.w,{className:"max-w-[600px] mx-auto",children:[(0,a.jsx)(n.u,{className:"flex gap-3",children:(0,a.jsx)("b",{children:"Order details"})}),(0,a.jsx)(o.j,{}),(0,a.jsxs)(x.G,{children:[(0,a.jsxs)("div",{className:"flex flex-wrap mb-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-3/12 flex items-center",children:(0,a.jsx)("b",{children:"Idorden"})}),(0,a.jsx)("div",{className:"w-full sm:w-9/12",children:(0,a.jsx)(f.Y,{type:"text",value:e.idorden,readOnly:!0,name:"idorden",fullWidth:!0})})]}),(0,a.jsxs)("div",{className:"flex flex-wrap mb-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-3/12 flex items-center",children:(0,a.jsx)("b",{children:"Punnet"})}),(0,a.jsx)("div",{className:"w-full sm:w-9/12",children:(0,a.jsx)(f.Y,{type:"text",value:e.punnet||"",readOnly:!0,name:"punnet",fullWidth:!0})})]}),(0,a.jsxs)("div",{className:"flex flex-wrap mb-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-3/12 flex items-center",children:(0,a.jsx)("b",{children:"Carton bax"})}),(0,a.jsx)("div",{className:"w-full sm:w-9/12",children:(0,a.jsx)(f.Y,{type:"text",value:e.carton_bax||"",readOnly:!0,name:"carton_bay",fullWidth:!0})})]}),(0,a.jsxs)("div",{className:"flex flex-wrap mb-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-3/12 flex items-center",children:(0,a.jsx)("b",{children:"Number pallet"})}),(0,a.jsx)("div",{className:"w-full sm:w-9/12",children:(0,a.jsx)(f.Y,{type:"text",value:e.can_pal||"",readOnly:!0,name:"number_pallet",fullWidth:!0})})]}),(0,a.jsx)("button",{onClick:()=>eO(e.idorden+"_"+e.id),className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Start processing"}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.R,{size:"full",isOpen:u,onClose:H,children:(0,a.jsx)(y.A,{children:s=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.k,{className:"flex flex-col gap-1",children:"Delivery Pallet"}),(0,a.jsx)(N.I,{style:{maxHeight:"80vh",overflow:"auto"},children:(0,a.jsxs)(v.b,{"aria-label":"Example static collection table",children:[(0,a.jsxs)(k.J,{children:[(0,a.jsx)(S.j,{children:"Nr Pallet"}),(0,a.jsx)(S.j,{children:"Nr Bax"}),(0,a.jsx)(S.j,{children:"KG"}),(0,a.jsx)(S.j,{children:"Bax Added"}),(0,a.jsx)(S.j,{children:"Kg Added"}),(0,a.jsx)(S.j,{children:"Status"}),(0,a.jsx)(S.j,{children:"Select"})]}),(0,a.jsx)(_.y,{children:ea.map(s=>(0,a.jsxs)(C.g,{children:[(0,a.jsx)(m.X,{children:s.nrpallet}),(0,a.jsx)(m.X,{children:s.nr_bax}),(0,a.jsx)(m.X,{children:s.kg}),(0,a.jsx)(m.X,{children:s.bax_add}),(0,a.jsx)(m.X,{children:s.kg_add}),eI(s),(0,a.jsxs)(m.X,{children:[2===s.state?eZ(e,s):"",1===s.state?eE(e,s):""]})]},s.iddelivery))})]})}),(0,a.jsxs)(A.R,{children:[(0,a.jsx)(d.A,{color:"danger",variant:"light",onPress:s,children:"Close"}),(0,a.jsx)(d.A,{color:"primary",onClick:()=>{eY()},children:"Finish the order"})]})]})})}),(0,a.jsx)(b.R,{isOpen:I,onClose:Q,backdrop:"blur",size:"5xl",children:(0,a.jsx)(y.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.k,{className:"flex flex-col gap-1",children:"Secondary Modal"}),(0,a.jsx)(N.I,{children:ev?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(v.b,{color:"success",selectionMode:"single",selectedKeys:ej[ex],onSelectionChange:e=>eD(e),children:[(0,a.jsxs)(k.J,{children:[(0,a.jsx)(S.j,{children:"fecha"}),(0,a.jsx)(S.j,{children:"Kg Availablle"}),(0,a.jsx)(S.j,{children:"Bax Available"}),(0,a.jsx)(S.j,{children:"nropallet_recepcion"}),(0,a.jsx)(S.j,{children:"estado"})]}),(0,a.jsx)(_.y,{children:er.map(e=>(0,a.jsxs)(C.g,{children:[(0,a.jsx)(m.X,{children:eL(e.fecha)}),(0,a.jsx)(m.X,{children:e.kg_disponible}),(0,a.jsx)(m.X,{children:e.box_disponible}),(0,a.jsx)(m.X,{children:e.nropallet_recepcion}),(0,a.jsx)(m.X,{children:e.estado})]},e.id))})]}),(0,a.jsx)(d.A,{onClick:eR,color:"success",children:"Use selected pallet"})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(D.c,{label:"Loading...",color:"warning",className:"flex justify-center"})})}),(0,a.jsx)(A.R,{children:(0,a.jsx)(d.A,{color:"danger",variant:"light",onPress:e,children:"Close"})})]})})}),(0,a.jsx)(b.R,{backdrop:"opaque",isOpen:F,onClose:ee,radius:"lg",className:"dark text-foreground bg-background",children:(0,a.jsx)(y.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.k,{className:"flex flex-col gap-1",children:"Select a line"}),eS?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.I,{children:(0,a.jsx)(D.c,{label:"Adding in dbs...",color:"success",className:"flex justify-center"})}),(0,a.jsxs)(A.R,{children:[(0,a.jsx)(d.A,{color:"success",variant:"light",onPress:e,isDisabled:!0,children:"Close"}),(0,a.jsx)(d.A,{className:"bg-[#6f4ef2] shadow-lg shadow-indigo-500/20",onClick:ez,isDisabled:!0,children:"Add"})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N.I,{children:(0,a.jsx)(O.g,{items:em,label:"Select",placeholder:"Select a line",className:"max-w-xs",onChange:eW,children:em.map(e=>(0,a.jsx)(P.R,{children:e.linea},e.id))})}),(0,a.jsxs)(A.R,{children:[(0,a.jsx)(d.A,{color:"success",variant:"light",onPress:e,children:"Close"}),(0,a.jsx)(d.A,{className:"bg-[#6f4ef2] shadow-lg shadow-indigo-500/20",onClick:ez,children:"Add"})]})]})]})})}),(0,a.jsx)(b.R,{backdrop:"opaque",isOpen:X,onClose:el,radius:"lg",className:"dark text-foreground bg-background",children:(0,a.jsx)(y.A,{children:e=>(0,a.jsx)(a.Fragment,{children:T?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.k,{className:"flex flex-col gap-1",children:"Is reception pallet partially finished?"}),(0,a.jsxs)(N.I,{className:"flex justify-center",children:[(0,a.jsx)(d.A,{className:"m-2",onClick:()=>eB("yes"),children:"Yes"}),(0,a.jsx)(d.A,{className:"m-2",onClick:()=>eB("no"),children:"No"})]}),(0,a.jsx)(A.R,{children:(0,a.jsx)(d.A,{color:"success",variant:"light",onPress:e,children:"Close"})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.k,{className:"flex flex-col gap-1",children:"Baxes"}),(0,a.jsxs)(N.I,{children:[(0,a.jsx)(f.Y,{label:"Enter baxes number",placeholder:"E.g.: 12",type:"number",value:W,onValueChange:z}),(0,a.jsx)("p",{children:"Total: "+K._text})]}),(0,a.jsxs)(A.R,{children:[(0,a.jsx)(d.A,{color:"success",variant:"light",onPress:e,children:"Close"}),(0,a.jsx)(d.A,{className:"bg-[#6f4ef2] shadow-lg shadow-indigo-500/20",onClick:eK,children:"Add"})]})]})})})})]})]}),(0,a.jsx)(o.j,{}),(0,a.jsx)(h.i,{})]},s))}):(0,a.jsx)(a.Fragment,{})},I=()=>{let[e,s]=(0,t.useState)(null),[l,c]=(0,t.useState)([]),[n,i]=(0,t.useState)(!1),[d,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{(async()=>{try{let e=(await j.Z.get("/api/getClientWithSixState")).data.map(e=>({...e,fecha_despacho:new Date(e.fecha_despacho).toLocaleDateString()}));c(e),i(!0)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,a.jsxs)("div",{className:"flex h-screen",children:[(0,a.jsx)("div",{className:"w-[35%] bg-gray-100",children:n?(0,a.jsx)(u,{clients:l,onOrderClick:e=>{s(e)},orderDetailsLoadedCallback:e=>{o(e),console.log("Order details loaded from leftside: ",e)}}):(0,a.jsx)("div",{className:"p-4 flex justify-center",children:(0,a.jsx)(r.W,{size:"sm",color:"primary",isIndeterminate:!0,"aria-label":"Loading...",className:"max-w-md"})})}),(0,a.jsx)("div",{className:"w-[65%] bg-white",children:(0,a.jsx)("div",{className:"p-4",children:(0,a.jsx)(R,{selectedOrder:e,orderNumber:l.length,orderDetailsLoaded:d})})})]})}}},function(e){e.O(0,[521,472,971,23,744],function(){return e(e.s=29422)}),_N_E=e.O()}]);