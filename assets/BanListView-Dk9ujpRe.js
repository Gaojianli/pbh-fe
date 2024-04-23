import{r as N,i as k,c as y,d as B,t as ge,g as J,a as ve,b as _e,o as me,e as he,f as t,S as be,m as j,F as Pe,h as Se,j as ne,G as H,k as R,_ as ye,l as I,n as z,p as M,q as U,s as O,u as v,v as _,w as $e,x as Ce,y as Ie,z as Le,A as we,B as xe,C as ze,D as se,E as i,H as re,T as Me,I as Be,J as ke,K as ie,L as je,M as He,N as Oe,O as Re,P as Ve,Q as Ne}from"./index-awY7-8I3.js";import{u as Te,a as Ae,S as De,P as Ee,V as Fe,E as Ge}from"./index-mplLqeDv.js";import{f as le,I as Ue,a as qe}from"./file-DpQbJ1iH.js";const Ke=(e,{emit:l})=>{var a,f;const n=N(k(e.paginationProps)&&(a=e.paginationProps.defaultCurrent)!=null?a:1),u=N(k(e.paginationProps)&&(f=e.paginationProps.defaultPageSize)!=null?f:10),$=y(()=>{var s;return k(e.paginationProps)&&(s=e.paginationProps.current)!=null?s:n.value}),b=y(()=>{var s;return k(e.paginationProps)&&(s=e.paginationProps.pageSize)!=null?s:u.value});return{current:$,pageSize:b,handlePageChange:s=>{n.value=s,l("pageChange",s)},handlePageSizeChange:s=>{u.value=s,l("pageSizeChange",s)}}};function oe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!R(e)}var q=B({name:"List",props:{data:{type:Array},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},split:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},paginationProps:{type:Object},gridProps:{type:Object},maxHeight:{type:[String,Number],default:0},bottomOffset:{type:Number,default:0},virtualListProps:{type:Object},scrollbar:{type:[Object,Boolean],default:!0}},emits:{scroll:()=>!0,reachBottom:()=>!0,pageChange:e=>!0,pageSizeChange:e=>!0},setup(e,{emit:l,slots:a}){const{scrollbar:f}=ge(e),n=J("list"),u=ve(_e,void 0),{componentRef:$,elementRef:b}=Te("containerRef"),C=y(()=>e.virtualListProps),{displayScrollbar:L,scrollbarProps:s}=Ae(f);let h=0;const P=r=>{const{scrollTop:o,scrollHeight:d,offsetHeight:p}=r.target,c=Math.floor(d-(o+p));o>h&&c<=e.bottomOffset&&l("reachBottom"),l("scroll"),h=o};me(()=>{if(b.value){const{scrollTop:r,scrollHeight:o,offsetHeight:d}=b.value;o<=r+d&&l("reachBottom")}});const{current:w,pageSize:m,handlePageChange:T,handlePageSizeChange:A}=Ke(e,{emit:l}),x=r=>{if(!e.paginationProps)return r;if(e.paginationProps&&r.length>m.value){const o=(w.value-1)*m.value;return r.slice(o,o+m.value)}return r},D=r=>{let o;if(!e.gridProps)return null;const d=x(r);if(e.gridProps.span){const p=[],c=24/e.gridProps.span;for(let S=0;S<d.length;S+=c){let F;const fe=S+c,Z=Math.floor(S/c);p.push(t(H.Row,{key:Z,class:`${n}-row`,gutter:e.gridProps.gutter},oe(F=d.slice(S,fe).map((G,ee)=>{var te;return t(H.Col,{key:`${Z}-${ee}`,class:`${n}-col`,span:(te=e.gridProps)==null?void 0:te.span},{default:()=>{var ae;return[R(G)?G:(ae=a.item)==null?void 0:ae.call(a,{item:G,index:ee})]}})}))?F:{default:()=>[F]}))}return p}return t(H.Row,{class:`${n}-row`,gutter:e.gridProps.gutter},oe(o=d.map((p,c)=>t(H.Col,j({key:c,class:`${n}-col`},ne(e.gridProps,["gutter"])),{default:()=>{var S;return[R(p)?p:(S=a.item)==null?void 0:S.call(a,{item:p,index:c})]}})))?o:{default:()=>[o]})},E=r=>x(r).map((d,p)=>{var c;return R(d)?d:(c=a.item)==null?void 0:c.call(a,{item:d,index:p})}),g=()=>{const r=a.default?Se(a.default()):e.data;return r&&r.length>0?e.gridProps?D(r):E(r):X()},ce=()=>{if(!e.paginationProps)return null;const r=ne(e.paginationProps,["current","pageSize","defaultCurrent","defaultPageSize"]);return t(Ee,j({class:`${n}-pagination`},r,{current:w.value,pageSize:m.value,onChange:T,onPageSizeChange:A}),null)},ue=y(()=>[n,`${n}-${e.size}`,{[`${n}-bordered`]:e.bordered,[`${n}-split`]:e.split,[`${n}-hover`]:e.hoverable}]),de=y(()=>{if(e.maxHeight)return{maxHeight:he(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight,overflowY:"auto"}}),Q=y(()=>[`${n}-content`,{[`${n}-virtual`]:C.value}]),Y=N(),pe=()=>{var r;const o=x((r=e.data)!=null?r:[]);return o.length?t(Fe,j({ref:Y,class:Q.value,data:o},e.virtualListProps,{onScroll:P}),{item:({item:d,index:p})=>{var c;return(c=a.item)==null?void 0:c.call(a,{item:d,index:p})}}):X()},W=()=>a["scroll-loading"]?t("div",{class:[`${n}-item`,`${n}-scroll-loading`]},[a["scroll-loading"]()]):null,X=()=>{var r,o,d,p,c;return a["scroll-loading"]?null:(c=(p=(r=a.empty)==null?void 0:r.call(a))!=null?p:(d=u==null?void 0:(o=u.slots).empty)==null?void 0:d.call(o,{component:"list"}))!=null?c:t(Ge,null,null)};return{virtualListRef:Y,render:()=>{const r=L.value?De:"div";return t("div",{class:`${n}-wrapper`},[t(be,{class:`${n}-spin`,loading:e.loading},{default:()=>[t(r,j({ref:$,class:ue.value,style:de.value},s.value,{onScroll:P}),{default:()=>[t("div",{class:`${n}-content-wrapper`},[a.header&&t("div",{class:`${n}-header`},[a.header()]),C.value&&!e.gridProps?t(Pe,null,[pe(),W()]):t("div",{role:"list",class:Q.value},[g(),W()]),a.footer&&t("div",{class:`${n}-footer`},[a.footer()])])]}),ce()]})])}}},methods:{scrollIntoView(e){this.virtualListRef&&this.virtualListRef.scrollTo(e)}},render(){return this.render()}}),V=B({name:"ListItem",props:{actionLayout:{type:String,default:"horizontal"}},setup(e,{slots:l}){const a=J("list-item"),f=()=>{var n;const u=(n=l.actions)==null?void 0:n.call(l);return!u||!u.length?null:t("ul",{class:`${a}-action`},[u.map(($,b)=>t("li",{key:`${a}-action-${b}`},[$]))])};return()=>{var n,u;return t("div",{role:"listitem",class:a},[t("div",{class:`${a}-main`},[(n=l.meta)==null?void 0:n.call(l),t("div",{class:`${a}-content`},[(u=l.default)==null?void 0:u.call(l)]),e.actionLayout==="vertical"&&f()]),e.actionLayout==="horizontal"&&f(),l.extra&&t("div",{class:`${a}-extra`},[l.extra()])])}}});const Je=B({name:"ListItemMeta",props:{title:String,description:String},setup(e,{slots:l}){const a=J("list-item-meta"),f=!!(e.title||e.description||l.title||l.description);return{prefixCls:a,hasContent:f}}});function Qe(e,l,a,f,n,u){return I(),z("div",{class:M(e.prefixCls)},[e.$slots.avatar?(I(),z("div",{key:0,class:M(`${e.prefixCls}-avatar`)},[U(e.$slots,"avatar")],2)):O("v-if",!0),e.hasContent?(I(),z("div",{key:1,class:M(`${e.prefixCls}-content`)},[e.$slots.title||e.title?(I(),z("div",{key:0,class:M(`${e.prefixCls}-title`)},[U(e.$slots,"title",{},()=>[v(_(e.title),1)])],2)):O("v-if",!0),e.$slots.description||e.description?(I(),z("div",{key:1,class:M(`${e.prefixCls}-description`)},[U(e.$slots,"description",{},()=>[v(_(e.description),1)])],2)):O("v-if",!0)],2)):O("v-if",!0)],2)}var K=ye(Je,[["render",Qe]]);const Ye=Object.assign(q,{Item:Object.assign(V,{Meta:K}),install:(e,l)=>{$e(e,l);const a=Ce(l);e.component(a+q.name,q),e.component(a+V.name,V),e.component(a+K.name,K)}}),We=e=>(Oe("data-v-7f6213fa"),e=e(),Re(),e),Xe=We(()=>Ve("br",null,null,-1)),Ze=B({__name:"banList",setup(e){const l=N(),a=Ie(),f=Le(),{data:n,refresh:u}=we(xe,{pollingInterval:y(()=>a.pollingInterval),onSuccess:a.renewLastUpdate}),$=C=>{var L,s;if(C){const h=(L=n.value)==null?void 0:L.map(P=>P.address).findIndex(P=>P.includes(C));h!==-1&&((s=l.value)==null||s.scrollIntoView({index:h,align:"auto"}))}};ze(()=>f.endpoint,u,{immediate:!0});const b=y(()=>n.value??[]);return(C,L)=>{const s=Me,h=Be,P=ke,w=ie,m=je,T=Ue,A=qe,x=He,D=V,E=Ye;return I(),se(w,{direction:"vertical",fill:""},{default:i(()=>[t(s,{heading:3},{default:i(()=>[v("封禁名单")]),_:1}),Xe,t(w,{class:"list-header",wrap:""},{default:i(()=>[t(h,null,{default:i(()=>[v("以下是封禁列表（按时间倒序排列）")]),_:1}),t(P,{style:{width:"250px"},placeholder:"搜索 IP 地址",onSearch:$,"allow-clear":"","search-button":""})]),_:1}),t(E,{virtualListProps:{height:500},ref_key:"banlist",ref:l,"max-height":"1000",data:b.value},{item:i(({item:g})=>[t(D,null,{default:i(()=>[t(x,{column:{xs:1,md:2,xl:3}},{title:i(()=>[t(w,{wrap:""},{default:i(()=>[t(h,{bold:"",copyable:""},{default:i(()=>[v(_(g.banMetadata.peer.address.ip)+":"+_(g.banMetadata.peer.address.port),1)]),_:2},1024),t(h,{code:""},{default:i(()=>[v(_(g.banMetadata.peer.clientName),1)]),_:2},1024)]),_:2},1024)]),default:i(()=>[t(m,{label:"反向 DNS 解析",span:1},{default:i(()=>[v(_(g.banMetadata.reverseLookup),1)]),_:2},1024),t(m,{label:"封禁时间",span:1},{default:i(()=>[v(_(new Date(g.banMetadata.banAt).toLocaleString("zh-cn")),1)]),_:2},1024),t(m,{label:"预计解封时间",span:1},{default:i(()=>[v(_(new Date(g.banMetadata.unbanAt).toLocaleString("zh-cn")),1)]),_:2},1024),t(m,{label:"发现位置",span:2},{default:i(()=>[v(_(g.banMetadata.torrent.name),1)]),_:2},1024),t(m,{label:"封禁快照",span:1},{default:i(()=>[t(T,{class:"green"}),v(" "+_(re(le)(g.banMetadata.peer.uploaded))+" ",1),t(A,{class:"red"}),v(" "+_(re(le)(g.banMetadata.peer.downloaded))+" - "+_((g.banMetadata.peer.progress*100).toFixed(2))+"% ",1)]),_:2},1024),t(m,{label:"封禁原因",span:3},{default:i(()=>[v(_(g.banMetadata.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1},8,["data"])]),_:1})}}}),et=Ne(Ze,[["__scopeId","data-v-7f6213fa"]]),lt=B({__name:"BanListView",setup(e){return(l,a)=>{const f=ie;return I(),se(f,{direction:"vertical",fill:""},{default:i(()=>[t(et)]),_:1})}}});export{lt as default};