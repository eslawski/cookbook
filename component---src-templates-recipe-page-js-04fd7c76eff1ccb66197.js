(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,a,t){"use strict";t.r(a);t(168);var n=t(0),r=t.n(n),l=t(173),c=t(205),i=t(196),s=t(185),o=t(180),u=t.n(o),m=t(166),d=t(195),f=t.n(d),E=t(172),p=function(e){var a=e.name,t=e.image,n=e.serves,l=e.time;return r.a.createElement(c.a,{fluid:!0,className:f.a.container},r.a.createElement(i.a,null,r.a.createElement(s.a,{lg:5,md:6,sm:6,xs:6},r.a.createElement(u.a,{className:f.a.image,fluid:t})),r.a.createElement(s.a,{lg:7,md:6,sm:6,xs:6,style:{paddingTop:".5em"}},r.a.createElement("h2",null,a),r.a.createElement(E.a,{faIcon:m.b,label:n}),r.a.createElement(E.a,{faIcon:m.a,label:l}))))},v=t(206),g=t(186),b=t(197),h=t.n(b),y=function(e){var a=e.ingredients;return r.a.createElement(c.a,{fluid:!0,className:h.a.container},r.a.createElement("h3",{className:h.a.header},r.a.createElement(E.a,{faIcon:g.faListAlt,label:"Ingredients",iconColor:"#1f2a65",textColor:"#000000"})),r.a.createElement("div",{className:h.a.list},a.map(function(e){return r.a.createElement(v.a.Check,{label:e})})))},x=t(198),N=t.n(x),q=function(e){var a=e.directions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:N.a.header},r.a.createElement(E.a,{faIcon:g.faThList,label:"Directions",iconColor:"#1f2a65",textColor:"#000000"})),r.a.createElement("ol",{className:N.a.list},a.map(function(e){return r.a.createElement("li",null,r.a.createElement("p",null,e))})))};t.d(a,"query",function(){return C});a.default=function(e){var a=e.data.recipesJson,t=a.name,n=a.serves,o=a.time,u=a.ingredients,m=a.directions,d=a.image.childImageSharp.fluid;return r.a.createElement(l.a,null,r.a.createElement(c.a,{fluid:!0},r.a.createElement(i.a,null,r.a.createElement(s.a,{lg:6,md:6,s:6,xs:12},r.a.createElement(p,{name:t,image:d,serves:n,time:o}),r.a.createElement(y,{ingredients:u})),r.a.createElement(s.a,{lg:6,md:6,s:6,xs:12},r.a.createElement(q,{directions:m})))))};var C="3611385534"},164:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(5),c=t.n(l),i=t(40),s=t.n(i);t.d(a,"a",function(){return s.a});t(165);var o=r.a.createContext({});function u(e){var a=e.staticQueryData,t=e.data,n=e.query,l=e.render,c=t?t.data:a[n]&&a[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:a,query:t,render:n||l,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},165:function(e,a,t){var n;e.exports=(n=t(170))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Cookbook!"}}}}},170:function(e,a,t){"use strict";t.r(a);t(41);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),i=t(64),s=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},172:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(0),r=t.n(n),l=t(171),c=function(e){var a=e.faIcon,t=e.label,n=e.block,c=void 0===n||n,i=e.iconColor,s=void 0===i?"rgba(0,0,0,.6)":i,o=e.textColor,u=void 0===o?"rgba(0,0,0,.6)":o,m=c?"div":"span";return r.a.createElement(m,null,r.a.createElement(l.a,{icon:a,style:{color:s,marginRight:5}}),r.a.createElement("span",{style:{color:u}},t))}},173:function(e,a,t){"use strict";var n=t(169),r=t(0),l=t.n(r),c=t(5),i=t.n(c),s=t(164),o=t(205),u=(t(175),t(166)),m=t(171),d=t(176),f=t.n(d),E=function(e){var a=e.siteTitle;return l.a.createElement("header",{className:f.a.background},l.a.createElement("h1",{className:f.a.text},l.a.createElement(s.a,{to:"/",className:f.a.link},l.a.createElement(m.a,{icon:u.c,className:f.a.icon}),a)))};t(177),t(178);t(174).b.add(u.c);var p=function(e){var a=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(o.a,{fluid:!0},a))},data:n})};p.propTypes={children:i.a.node.isRequired};a.a=p}}]);
//# sourceMappingURL=component---src-templates-recipe-page-js-04fd7c76eff1ccb66197.js.map