(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(173),o=a(184);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},164:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(40),s=a.n(c);a.d(e,"a",function(){return s.a});a(165);var u=r.a.createContext({});function l(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,o=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement(l,{data:e,query:a,render:n||i,staticQueryData:t})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},165:function(t,e,a){var n;t.exports=(n=a(169))&&n.default||n},168:function(t){t.exports={data:{site:{siteMetadata:{title:"Cookbook!"}}}}},169:function(t,e,a){"use strict";a.r(e);a(41);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(64),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},173:function(t,e,a){"use strict";var n=a(168),r=(a(175),a(0)),i=a.n(r),o=a(5),c=a.n(o),s=a(164),u=a(206),l=(a(176),a(170)),d=a(171),p=a(177),m=a.n(p),f=function(t){var e=t.siteTitle;return i.a.createElement("header",{className:m.a.background},i.a.createElement("h1",{className:m.a.text},i.a.createElement(s.a,{to:"/",className:m.a.link},i.a.createElement(d.a,{icon:l.c,className:m.a.icon}),e)))};a(178),a(179);a(174).a.autoAddCss=!1;var g=function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),i.a.createElement(u.a,{fluid:!0},e),i.a.createElement("div",null,"Nice"))},data:n})};g.propTypes={children:c.a.node.isRequired};e.a=g},184:function(t,e,a){"use strict";var n=a(185),r=a(0),i=a.n(r),o=a(5),c=a.n(o),s=a(189),u=a.n(s);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=n.data.site,s=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=l},185:function(t){t.exports={data:{site:{siteMetadata:{title:"Cookbook!",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-8843779258ffaae20a29.js.map