(this.webpackJsonpcocktail=this.webpackJsonpcocktail||[]).push([[0],{32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var n=t(15),s=t.n(n),a=t(0),r=t(14),i=t(7),o=t(16),l=t(1),j=function(e){var c=e.Data;console.log(c.idDrink);return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{className:"card-img-top",src:c.strDrinkThumb,alt:c.strDrink}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h4",{className:"card-title",children:Object(l.jsx)("b",{children:c.strDrink})}),Object(l.jsxs)("div",{className:"drink-description",children:[Object(l.jsx)("p",{className:"card-text",style:"Alcoholic"===c.strAlcoholic?{color:"#F0A500"}:{color:"green"},children:c.strAlcoholic}),Object(l.jsx)("h5",{children:"Ingredients:"}),Object(l.jsx)("p",{children:function(){var e=[];return Object.keys(c).forEach((function(t){t.includes("strIngredient")&&null!=c[t]&&e.push(c[t])})),e}().join(", ")})]})]})]})},h=function(e){var c=e.Data;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)("div",{className:"col-6 col-sm-4 col-lg-3",children:Object(l.jsx)("a",{href:"#",className:"card-address",children:Object(l.jsx)(j,{Data:e})})},e.idDrink)}))})})},d=function(){var e=Object(a.useState)(""),c=Object(i.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)([]),j=Object(i.a)(s,2),d=j[0],u=j[1],b=Object(a.useState)([]),O=Object(i.a)(b,2),x=O[0],f=O[1],m=Object(a.useState)(!0),p=Object(i.a)(m,2),g=p[0],k=p[1];Object(o.useEffect)((function(){u([]),fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then((function(e){return e.json()})).then((function(e){f(Object(r.a)(e.drinks)),k(!1)})).catch((function(e){return console.log(e)}))}),[]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(e){return e.json()})).then((function(e){return u(Object(r.a)(e.drinks))})).catch((function(e){return console.log(e)})),console.log(d)},children:[Object(l.jsx)("input",{type:"text",value:t,name:"search",id:"search",className:"searchInput",autoComplete:"off",autoFocus:!0,placeholder:"Search",onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Search"})]}),Object(l.jsxs)("section",{className:"grid",children:[g&&Object(l.jsx)("h1",{children:"Loading..."}),d.length>0?Object(l.jsx)(h,{Data:d}):Object(l.jsx)(h,{Data:x})]})]})},u=t(13),b=t(2),O=function(){return Object(a.useEffect)((function(){document.title="Cocktail"}),[]),Object(l.jsx)(u.a,{basename:"/cocktail",children:Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(u.b,{to:"/",children:Object(l.jsx)("h1",{children:"Cocktail"})}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{exact:!0,path:"/",component:d}),Object(l.jsx)(b.a,{path:"*",children:Object(l.jsx)("h1",{className:"text-center",children:"404"})})]})]})})};t(32),t(33);s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d48b9c90.chunk.js.map