"use strict";(self.webpackChunkbackend_website=self.webpackChunkbackend_website||[]).push([[6026],{26026:(Q,B,s)=>{s.d(B,{ProtectedEditView:()=>J,w:()=>V});var e=s(92132),D=s(21272),L=s(38413),I=s(4198),R=s(83997),W=s(94061),u=s(30893),T=s(90151),t=s(68074),M=s(55356),E=s(85963),a=s(55506),$=s(54514),Y=s(61535),y=s(54894),j=s(17703),g=s(12083),p=s(25009),x=s(53669),v=s(99831),O=s(25432),as=s(15126),rs=s(63299),os=s(67014),_s=s(59080),is=s(79275),Es=s(14718),ds=s(82437),ls=s(5790),Ts=s(35223),Ms=s(5409),Ps=s(74930),Ds=s(2600),Os=s(48940),ms=s(41286),fs=s(56336),cs=s(13426),gs=s(84624),vs=s(77965),hs=s(54257),As=s(71210),Cs=s(51187),Ls=s(39404),Is=s(58692),Rs=s(501),ps=s(57646),Ks=s(23120),Us=s(44414),Bs=s(25962),Ws=s(14664),us=s(42588),ys=s(90325),js=s(62785),xs=s(87443),ks=s(41032),Ss=s(22957),Vs=s(93179),Fs=s(73055),zs=s(15747),Ns=s(85306),Qs=s(26509),$s=s(32058),Ys=s(81185),Gs=s(82261);const G=g.Ik().shape({name:g.Yj().max(100).required(a.iW.required),description:g.Yj().nullable(),lifespan:g.ai().integer().min(0).nullable().defined(a.iW.required),permissions:g.Yj().required(a.iW.required)}),V=()=>{(0,a.L4)();const{formatMessage:o}=(0,y.A)(),{lockApp:_,unlockApp:h}=(0,a.MA)(),d=(0,a.hN)(),m=(0,j.W6)(),{state:A}=(0,j.zy)(),[r,f]=D.useState(A&&"accessKey"in A.transferToken?{...A.transferToken}:null),{trackUsage:P}=(0,a.z1)(),{setCurrentStep:Z}=(0,a.Cx)(),w=(0,p.j)(i=>i.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:b,canUpdate:q,canRegenerate:ss}}=(0,a.ec)(w),K=(0,j.W5)("/settings/transfer-tokens/:id")?.params?.id,l=K==="create",{_unstableFormatAPIError:U,_unstableFormatValidationErrors:F}=(0,a.wq)();D.useEffect(()=>{P(l?"didAddTokenFromList":"didEditTokenFromList",{tokenType:v.T})},[l,P]);const{data:k,error:S}=(0,x.u)(K,{skip:l||r!==null||!K});D.useEffect(()=>{S&&d({type:"warning",message:U(S)})},[S,U,d]),D.useEffect(()=>{k&&f(k)},[k]);const[es]=(0,x.a)(),[ts]=(0,x.b)(),ns=async(i,c)=>{P(l?"willCreateToken":"willEditToken",{tokenType:v.T}),_();const C=i.permissions.split("-");if((n=>n.length===1?n[0]==="push"||n[0]==="pull":n[0]==="push"&&n[1]==="pull")(C))try{if(l){const n=await es({...i,lifespan:i?.lifespan||null,permissions:C});if("error"in n){(0,p.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(F(n.error)):d({type:"warning",message:U(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),P("didCreateToken",{type:r?.permissions,tokenType:v.T}),m.push(`/settings/transfer-tokens/${n.data.id}`,{transferToken:n.data}),Z("transferTokens.success")}else{const n=await ts({id:K,name:i.name,description:i.description,permissions:C});if("error"in n){(0,p.x)(n.error)&&n.error.name==="ValidationError"?c.setErrors(F(n.error)):d({type:"warning",message:U(n.error)});return}f(n.data),d({type:"success",message:o({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),P("didEditToken",{type:r?.permissions,tokenType:v.T})}}catch{d({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{h()}},z=q&&!l||b&&l;return!l&&!r?(0,e.jsx)(X,{}):(0,e.jsxs)(L.g,{children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(Y.l1,{validationSchema:G,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",lifespan:r?.lifespan||null,permissions:r?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(i,c)=>ns(i,c),children:({errors:i,handleChange:c,isSubmitting:C,values:N})=>(0,e.jsxs)(a.lV,{children:[(0,e.jsx)(O.F,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:r,setToken:f,canEditInputs:z,canRegenerate:ss,isSubmitting:C,regenerateUrl:"/admin/transfer/tokens/"}),(0,e.jsx)(I.s,{children:(0,e.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:6,children:[r&&Boolean(r?.name)&&"accessKey"in r&&(0,e.jsx)(O.c,{token:r.accessKey,tokenType:v.T}),(0,e.jsx)(H,{errors:i,onChange:c,canEditInputs:z,isCreating:l,values:N,transferToken:r})]})})]})})]})},J=()=>{const o=(0,p.j)(_=>_.admin_app.permissions.settings?.["transfer-tokens"].read);return(0,e.jsx)(a.kz,{permissions:o,children:(0,e.jsx)(V,{})})},H=({errors:o={},onChange:_,canEditInputs:h,isCreating:d,values:m,transferToken:A={}})=>{const{formatMessage:r}=(0,y.A)(),f=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return(0,e.jsx)(W.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(R.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(u.o,{variant:"delta",as:"h2",children:r({id:"global.details",defaultMessage:"Details"})}),(0,e.jsxs)(T.x,{gap:5,children:[(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.T,{error:o.name,value:m.name,canEditInputs:h,onChange:_})},"name"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.a,{error:o.description,value:m.description,canEditInputs:h,onChange:_})},"description"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.L,{isCreating:d,error:o.lifespan,value:m.lifespan,onChange:_,token:A})},"lifespan"),(0,e.jsx)(t.E,{col:6,xs:12,children:(0,e.jsx)(O.b,{name:"permissions",value:m.permissions,error:o.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:P=>{_({target:{name:"permissions",value:P}})},options:f,canEditInputs:h})},"permissions")]})]})})},X=({transferTokenName:o})=>{const{formatMessage:_}=(0,y.A)();return(0,a.L4)(),(0,e.jsxs)(L.g,{"aria-busy":"true",children:[(0,e.jsx)(a.x7,{name:"Transfer Tokens"}),(0,e.jsx)(M.Q,{primaryAction:(0,e.jsx)(E.$,{disabled:!0,startIcon:(0,e.jsx)($.A,{}),type:"button",size:"L",children:_({id:"global.save",defaultMessage:"Save"})}),title:o||_({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),(0,e.jsx)(I.s,{children:(0,e.jsx)(a.Bl,{})})]})}},53669:(Q,B,s)=>{s.d(B,{a:()=>R,b:()=>u,c:()=>L,d:()=>W,u:()=>I});var e=s(25009);const D=e.n.injectEndpoints({endpoints:T=>({getTransferTokens:T.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:t=>t.data,providesTags:(t,M)=>[...t?.map(({id:E})=>({type:"TransferToken",id:E}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:T.query({query:t=>`/admin/transfer/tokens/${t}`,transformResponse:t=>t.data,providesTags:(t,M,E)=>[{type:"TransferToken",id:E}]}),createTransferToken:T.mutation({query:t=>({url:"/admin/transfer/tokens",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:T.mutation({query:t=>({url:`/admin/transfer/tokens/${t}`,method:"DELETE"}),transformResponse:t=>t.data,invalidatesTags:(t,M,E)=>[{type:"TransferToken",id:E}]}),updateTransferToken:T.mutation({query:({id:t,...M})=>({url:`/admin/transfer/tokens/${t}`,method:"PUT",data:M}),transformResponse:t=>t.data,invalidatesTags:(t,M,{id:E})=>[{type:"TransferToken",id:E}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:L,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:R,useDeleteTransferTokenMutation:W,useUpdateTransferTokenMutation:u}=D}}]);
