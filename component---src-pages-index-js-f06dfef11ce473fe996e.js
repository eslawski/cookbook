(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(173),s=a(183),o=(a(168),a(205)),l=a(196),c=a(164),d=a(180),u=a.n(d),f=a(185),p=a(160),m=a(162),g=a(161),h=a.n(g),b=a(163),v=a(181),y=function(e){return n.a.forwardRef(function(t,a){return n.a.createElement("div",Object(p.a)({},t,{ref:a,className:h()(t.className,e)}))})},E=n.a.createContext(null),S=n.a.forwardRef(function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,s=e.as,o=void 0===s?"img":s,l=Object(m.a)(e,["bsPrefix","className","variant","as"]),c=Object(b.b)(a,"card-img");return n.a.createElement(o,Object(p.a)({ref:t,className:h()(i?c+"-"+i:c,r)},l))});S.displayName="CardImg",S.defaultProps={variant:null};var w=S,O=y("h5"),j=y("h6"),N=Object(v.a)("card-body"),x=n.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.className,s=e.bg,o=e.text,l=e.border,c=e.body,d=e.children,u=e.as,f=void 0===u?"div":u,g=Object(m.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(b.b)(a,"card"),y=Object(r.useMemo)(function(){return{cardHeaderBsPrefix:v+"-header"}},[v]);return n.a.createElement(E.Provider,{value:y},n.a.createElement(f,Object(p.a)({ref:t},g,{className:h()(i,v,s&&"bg-"+s,o&&"text-"+o,l&&"border-"+l)}),c?n.a.createElement(N,null,d):d))});x.displayName="Card",x.defaultProps={body:!1},x.Img=w,x.Title=Object(v.a)("card-title",{Component:O}),x.Subtitle=Object(v.a)("card-subtitle",{Component:j}),x.Body=N,x.Link=Object(v.a)("card-link",{Component:"a"}),x.Text=Object(v.a)("card-text",{Component:"p"}),x.Header=Object(v.a)("card-header"),x.Footer=Object(v.a)("card-footer"),x.ImgOverlay=Object(v.a)("card-img-overlay");var R=x,L=a(166),I=a(204),C=a.n(I),P=function(){return n.a.createElement("span",{style:{margin:"0 5px",height:"100%",borderRight:"1px solid rgba(0,0,0,.6)"}})},T=a(172),k=function(e){var t=e.slug,a=e.name,r=e.image,i=e.serves,s=e.time;return n.a.createElement(f.a,{lg:3,md:3,sm:4,xs:6,className:C.a.cardColumn},n.a.createElement(c.a,{to:t},n.a.createElement(R,{className:C.a.card},n.a.createElement(u.a,{className:C.a.image,fluid:r}),n.a.createElement(R.Body,{className:C.a.cardBody},n.a.createElement("h5",null,a),n.a.createElement(R.Text,{className:C.a.cardText},n.a.createElement(T.a,{faIcon:L.b,label:i,block:!1}),n.a.createElement(P,null),n.a.createElement(T.a,{faIcon:L.a,label:s,block:!1}))))))},z=function(e){var t=e.recipes;return n.a.createElement(o.a,null,n.a.createElement(l.a,null,function(e){return e.map(function(e,t){var a=e.node,r=(a.id,a.fields.slug),i=a.name,s=a.serves,o=a.time,l=a.image.childImageSharp.fluid;return n.a.createElement(k,{key:t,slug:r,name:i,image:l,serves:s,time:o})})}(t)))};a.d(t,"query",function(){return q});t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Home"}),n.a.createElement(z,{recipes:t.allRecipesJson.edges}))};var q="1409748120"},164:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(165);var c=n.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(c.Consumer,null,function(e){return n.a.createElement(d,{data:t,query:a,render:r||i,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},165:function(e,t,a){var r;e.exports=(r=a(170))&&r.default||r},168:function(e,t,a){var r=a(12).f,n=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in n||a(10)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Cookbook!"}}}}},170:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),o=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},172:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(0),n=a.n(r),i=a(171),s=function(e){var t=e.faIcon,a=e.label,r=e.block,s=void 0===r||r,o=e.iconColor,l=void 0===o?"rgba(0,0,0,.6)":o,c=e.textColor,d=void 0===c?"rgba(0,0,0,.6)":c,u=s?"div":"span";return n.a.createElement(u,null,n.a.createElement(i.a,{icon:t,style:{color:l,marginRight:5}}),n.a.createElement("span",{style:{color:d}},a))}},173:function(e,t,a){"use strict";var r=a(169),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(164),c=a(205),d=(a(175),a(166)),u=a(171),f=a(176),p=a.n(f),m=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:p.a.background},i.a.createElement("h1",{className:p.a.text},i.a.createElement(l.a,{to:"/",className:p.a.link},i.a.createElement(u.a,{icon:d.c,className:p.a.icon}),t)))};a(177),a(178);a(174).b.add(d.c);var g=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(c.a,{fluid:!0},t))},data:r})};g.propTypes={children:o.a.node.isRequired};t.a=g},180:function(e,t,a){"use strict";var r=a(11);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),s=r(a(42)),o=r(a(97)),l=r(a(98)),c=r(a(0)),d=r(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var v=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+n+t+s+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},f,{onLoad:s,onError:d,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});E.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,O=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:O?1:0,transition:j?"opacity "+b+"ms":"none"},o),x="boolean"==typeof h?"lightgray":h,R={transitionDelay:b+"ms"},L=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&R,o,f),I={title:t,alt:this.state.isVisible?"":a,style:L,className:p};if(m){var C=m;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),x&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&R)}),C.base64&&c.default.createElement(E,(0,l.default)({src:C.base64},I)),C.tracedSVG&&c.default.createElement(E,(0,l.default)({src:C.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(E,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:w},C))}}))}if(g){var P=g,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},x&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:x,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&R)}),P.base64&&c.default.createElement(E,(0,l.default)({src:P.base64},I)),P.tracedSVG&&c.default.createElement(E,(0,l.default)({src:P.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,P.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),c.default.createElement(E,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:w},P))}}))}return null},t}(c.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});S.propTypes={resolutions:w,sizes:O,fixed:w,fluid:O,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var j=S;t.default=j},181:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(160),n=a(162),i=a(161),s=a.n(i),o=a(0),l=a.n(o),c=a(182),d=a.n(c),u=a(163),f=function(e){return e[0].toUpperCase()+d()(e).slice(1)};function p(e,t){var a=void 0===t?{}:t,i=a.displayName,o=void 0===i?f(e):i,c=a.Component,d=void 0===c?"div":c,p=a.defaultProps,m=l.a.forwardRef(function(t,a){var i=t.className,o=t.bsPrefix,c=t.as,f=void 0===c?d:c,p=Object(n.a)(t,["className","bsPrefix","as"]),m=Object(u.b)(o,e);return l.a.createElement(f,Object(r.a)({ref:a,className:s()(i,m)},p))});return m.defaultProps=p,m.displayName=o,m}},182:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,function(e,t){return t.toUpperCase()})};var r=/-(.)/g;e.exports=t.default},183:function(e,t,a){"use strict";var r=a(184),n=a(0),i=a.n(n),s=a(5),o=a.n(s),l=a(188),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,o=r.data.site,l=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(n)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=d},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Cookbook!",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},185:function(e,t,a){"use strict";var r=a(160),n=a(162),i=a(161),s=a.n(i),o=a(0),l=a.n(o),c=a(163),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef(function(e,t){var a=e.bsPrefix,i=e.className,o=e.as,u=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(c.b)(a,"col"),m=[],g=[];return d.forEach(function(e){var t,a,r,n=f[e];if(delete f[e],null!=n&&"object"==typeof n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=a&&g.push("offset"+s+"-"+a)}),m.length||m.push(p),l.a.createElement(u,Object(r.a)({},f,{ref:t,className:s.a.apply(void 0,[i].concat(m,g))}))});u.displayName="Col",t.a=u},196:function(e,t,a){"use strict";var r=a(160),n=a(162),i=a(179),s=a(161),o=a.n(s),l=a(0),c=a.n(l),d=a(163),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.noGutters,i=e.as,s=void 0===i?"div":i,l=e.className,d=Object(n.a)(e,["bsPrefix","noGutters","as","className"]);return c.a.createElement(s,Object(r.a)({},d,{className:o()(l,t,a&&"no-gutters")}))},t}(c.a.Component);u.defaultProps={noGutters:!1},t.a=Object(d.a)(u,"row")}}]);
//# sourceMappingURL=component---src-pages-index-js-f06dfef11ce473fe996e.js.map