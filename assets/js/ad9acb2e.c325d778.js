"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[586],{1999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(4848),i=r(8453),a=r(1470),s=r(9365);const l={sidebar_position:3,sidebar_label:"Freezer (Solidifying)"},c="Freezer (Solidifying)",o={id:"crafttweaker/recipes/freezer_solidifying",title:"Freezer (Solidifying)",description:"Solidifying/Freezing is a feature of the Fridge in MrCrayfish's Furniture Mod: Refurbished. It can be used by the player to freeze an item, like converting water into ice. The Freezer requires electrical power in order for it to function.",source:"@site/docs/crafttweaker/recipes/freezer_solidifying.md",sourceDirName:"crafttweaker/recipes",slug:"/crafttweaker/recipes/freezer_solidifying",permalink:"/MrCrayfishFurnitureMod-Refurbished/docs/crafttweaker/recipes/freezer_solidifying",draft:!1,unlisted:!1,editUrl:"https://github.com/MrCrayfish/MrCrayfishFurnitureMod-Refurbished/tree/documentation/docs/crafttweaker/recipes/freezer_solidifying.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Freezer (Solidifying)"},sidebar:"crafttweakerSidebar",previous:{title:"Cutting Board (Slicing)",permalink:"/MrCrayfishFurnitureMod-Refurbished/docs/crafttweaker/recipes/cutting_board_slicing"},next:{title:"Frying Pan (Frying)",permalink:"/MrCrayfishFurnitureMod-Refurbished/docs/crafttweaker/recipes/frying_pan_frying"}},d={},u=[{value:"Recipe Manager",id:"recipe-manager",level:2},{value:"Custom Functions",id:"custom-functions",level:2},{value:"<code>addRecipe(name, ingredient, result[, time])</code>",id:"addrecipename-ingredient-result-time",level:3},{value:"Example",id:"example",level:4},{value:"Learn More",id:"learn-more",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"freezer-solidifying",children:"Freezer (Solidifying)"}),"\n",(0,n.jsx)(t.p,{children:"Solidifying/Freezing is a feature of the Fridge in MrCrayfish's Furniture Mod: Refurbished. It can be used by the player to freeze an item, like converting water into ice. The Freezer requires electrical power in order for it to function."}),"\n",(0,n.jsx)(t.h2,{id:"recipe-manager",children:"Recipe Manager"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"<recipetype:refurbished_furniture:freezer_solidifying>"})}),"\n",(0,n.jsx)(t.h2,{id:"custom-functions",children:"Custom Functions"}),"\n",(0,n.jsx)(t.h3,{id:"addrecipename-ingredient-result-time",children:(0,n.jsx)(t.code,{children:"addRecipe(name, ingredient, result[, time])"})}),"\n",(0,n.jsx)(t.p,{children:"Adds a new solidifying recipe to the freezer"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Paramater"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"The name of the recipe, must be unique."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"ingredient"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://docs.blamejared.com/1.20.4/en/vanilla/api/ingredient/IIngredient",children:"IIngredient"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"The ingredient to freeze"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"result"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.a,{href:"https://docs.blamejared.com/1.20.4/en/vanilla/api/item/IItemStack",children:"IItemStack"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["The resulting item from slicing the ",(0,n.jsx)(t.code,{children:"ingredient"}),", can have an amount."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"time"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"int"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"No"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["The duration in ticks to freeze the item. Default ",(0,n.jsx)(t.code,{children:"200"})]})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"zenscript",label:"ZenScript",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="%gamedir%/scripts/example.zs"',children:'<recipetype:refurbished_furniture:freezer_solidifying>.addRecipe(\n    "freezing/easy_diamonds",\n    <item:minecraft:apple> | <item:minecraft:potato>, \n    <item:minecraft:diamond> * 64,\n    500\n);\n'})})}),(0,n.jsx)(s.A,{value:"json",label:"Datapack Equivelant",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="(ZIP File) \ud83e\udc62 /data/[namespace]/recipes/freezing/easy_diamonds.json"',children:'{\n    "type": "refurbished_furniture:freezer_solidifying",\n    "ingredient": {\n        "item": [\n            "minecraft:apple",\n            "minecraft:potato"\n        ]\n    },\n    "result": {\n        "item": "minecraft:diamond",\n        "count": 64\n    },\n    "time": 500\n} \n'})})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.strong,{children:"Recipe Managers"})," on the CraftTweaker ",(0,n.jsx)(t.a,{href:"https://docs.blamejared.com/1.20.4/en/tutorial/Recipes/RecipeManagers",children:"documentation"})," for all inbuilt functions."]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(4164);const i={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),i=r(4164),a=r(3104),s=r(6347),l=r(205),c=r(7485),o=r(1682),d=r(9466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,a=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,u]=p({queryString:r,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),x=(()=>{const e=o??m;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),i=l[r].value;i!==n&&(o(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(6540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);