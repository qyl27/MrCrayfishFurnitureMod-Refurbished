"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[229],{8157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(4848),i=n(8453),a=n(1470),s=n(9365);const c={sidebar_position:11,sidebar_label:"Workbench (Constructing)"},l="Workbench (Constructing)",o={id:"crafttweaker/recipes/workbench_constructing",title:"Workbench (Constructing)",description:"The Workbench is a new crafting system introduced in MrCrayfish's Furniture Mod: Refurbished. It is the new method of constructing all furniture in the mod. Unlike the crafting table, the workbench doesn't work of a crafting grid, it instead simple requires materials be present in the player inventory. Materials can be any number of items with support for an amount. Recipes can also be the exact same without conflicting. The Workbench requires electrical power in order for it to function.",source:"@site/docs/crafttweaker/recipes/workbench_constructing.md",sourceDirName:"crafttweaker/recipes",slug:"/crafttweaker/recipes/workbench_constructing",permalink:"/MrCrayfishFurnitureMod-Refurbished/docs/crafttweaker/recipes/workbench_constructing",draft:!1,unlisted:!1,editUrl:"https://github.com/MrCrayfish/MrCrayfishFurnitureMod-Refurbished/tree/documentation/docs/crafttweaker/recipes/workbench_constructing.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Workbench (Constructing)"},sidebar:"crafttweakerSidebar",previous:{title:"Toaster (Heating)",permalink:"/MrCrayfishFurnitureMod-Refurbished/docs/crafttweaker/recipes/toaster_heating"}},u={},d=[{value:"Recipe Manager",id:"recipe-manager",level:2},{value:"Custom Functions",id:"custom-functions",level:2},{value:"<code>addRecipe(name, result, materials[][, notification])</code>",id:"addrecipename-result-materials-notification",level:3},{value:"Example",id:"example",level:4},{value:"Learn More",id:"learn-more",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"workbench-constructing",children:"Workbench (Constructing)"}),"\n",(0,r.jsx)(t.p,{children:"The Workbench is a new crafting system introduced in MrCrayfish's Furniture Mod: Refurbished. It is the new method of constructing all furniture in the mod. Unlike the crafting table, the workbench doesn't work of a crafting grid, it instead simple requires materials be present in the player inventory. Materials can be any number of items with support for an amount. Recipes can also be the exact same without conflicting. The Workbench requires electrical power in order for it to function."}),"\n",(0,r.jsx)(t.h2,{id:"recipe-manager",children:"Recipe Manager"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"<recipetype:refurbished_furniture:workbench_constructing>"})}),"\n",(0,r.jsx)(t.h2,{id:"custom-functions",children:"Custom Functions"}),"\n",(0,r.jsx)(t.h3,{id:"addrecipename-result-materials-notification",children:(0,r.jsx)(t.code,{children:"addRecipe(name, result, materials[][, notification])"})}),"\n",(0,r.jsx)(t.p,{children:"Adds a new constructing recipe to the workbench"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Paramater"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the recipe, must be unique."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"result"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.a,{href:"https://docs.blamejared.com/1.20.4/en/vanilla/api/item/IItemStack",children:"IItemStack"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The resulting item from constructing the recipe, can have an amount."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"materials"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"StackedIngredient[]"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["The ingredients required to construct the ",(0,r.jsx)(t.code,{children:"result"}),", can have a amount."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"notification"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["Show notifcation when player unlocks the recipe. ",(0,r.jsx)(t.strong,{children:"CURRENTLY UNUSED."})]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"zenscript",label:"ZenScript",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="%gamedir%/scripts/example.zs"',children:'<recipetype:refurbished_furniture:workbench_constructing>.addRecipe(\n    "heating/easy_diamonds",\n    <item:minecraft:diamond> * 64, \n    [<item:minecraft:apple> * 3, <item:minecraft:stick> * 4],\n    false\n);\n'})})}),(0,r.jsx)(s.A,{value:"json",label:"Datapack Equivelant",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="(ZIP File) \ud83e\udc62 /data/[namespace]/recipes/constructing/easy_diamonds.json"',children:'{\n    "type": "refurbished_furniture:workbench_constructing",\n    "materials": [\n        {\n            "ingredient": {\n                "item": "minecraft:apple"\n            },\n            "count": 3\n        },\n        {\n            "ingredient": {\n                "item": "minecraft:stick"\n            },\n            "count": 4\n        }\n    ],\n    "result": {\n        "item": "minecraft:diamond",\n        "count": 64\n    }\n}\n'})})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.strong,{children:"Recipe Managers"})," on the CraftTweaker ",(0,r.jsx)(t.a,{href:"https://docs.blamejared.com/1.20.4/en/tutorial/Recipes/RecipeManagers",children:"documentation"})," for all inbuilt functions."]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const i={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),i=n(4164),a=n(3104),s=n(6347),c=n(205),l=n(7485),o=n(1682),u=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,d]=f({queryString:n,groupId:i}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),g=(()=>{const e=o??p;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=c[n].value;i!==r&&(o(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);