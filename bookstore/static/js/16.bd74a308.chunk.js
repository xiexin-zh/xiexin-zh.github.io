(window.webpackJsonpbookstore=window.webpackJsonpbookstore||[]).push([[16],{246:function(e,t,n){"use strict";n.r(t),function(e,r){n.d(t,"default",(function(){return f}));var a=n(11),o=n(12),l=n(15),c=n(13),u=n(14),i=n(252),s=n(53),f=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.createElement("div",{style:{height:"100vh",backgroundColor:"#fff"}},r.createElement(s.a,{title:"\u516c\u544a\u7ba1\u7406"}),r.createElement("div",{style:{padding:"10px",boxSizing:"border-box"}},r.createElement("p",{style:{marginTop:"10px"}},"1. \u4e25\u7981\u5728\u56fe\u4e66\u9986\u5185\u5438\u70df\u3002"),r.createElement("p",{style:{marginTop:"10px"}},"2. \u4fdd\u6301\u5ba4\u5185\u6574\u6d01\uff0c\u7981\u6b62\u5c06\u98df\u7269\u53ca\u996e\u6599\u5e26\u5165\u9986\u5185\uff1b\u8bf7\u52ff\u968f\u610f\u642c\u62fd\u9605\u89c8\u684c\u6905\u3002"),r.createElement("p",{style:{marginTop:"10px"}},"3. \u4fdd\u6301\u5ba4\u5185\u5b89\u9759\uff1a\u5165\u9986\u8bf7\u5c06\u547c\u673a\u548c\u624b\u673a\u5173\u673a\u6216\u8c03\u4e3a\u9759\u97f3\u72b6\u6001\uff1b\u5728\u9986\u5185\u8bf7\u8f7b\u58f0\u4ea4\u8c08\uff0c\u4ee5\u514d\u5f71\u54cd\u4ed6\u4eba\u9605\u8bfb\u3002"),r.createElement("p",{style:{marginTop:"10px"}},"4. \u5c0a\u91cd\u7ba1\u7406\u4eba\u5458\uff0c\u505a\u4e2a\u6587\u660e\u8bfb\u8005\u3002"),r.createElement("p",{style:{marginTop:"10px"}},"5. \u7231\u62a4\u4e66\u520a\u8d44\u6599\u53ca\u4e00\u5207\u516c\u5171\u8d22\u7269\uff0c\u8bf7\u52ff\u6d82\u62b9\u3001\u6495\u6bc1\u3001\u79c1\u85cf\u4e66\u520a\u3002")),r.createElement(i.a,null))}}]),t}(e)}.call(this,n(0).Component,n(0))},252:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return d}));n(253);var a=n(255),o=n.n(a),l=n(11),c=n(12),u=n(15),i=n(13),s=n(14),f=(n(256),n(48)),p=[{txt:"\u7b80\u4ecb\u7ba1\u7406",path:"/super/store",name:"store",icon:"icon-gonggao1"},{txt:"\u516c\u544a\u7ba1\u7406",path:"/super/notice",name:"notice",icon:"icon-gonggao3"},{txt:"\u7528\u6237\u7ba1\u7406",path:"/super/user",name:"user",icon:"icon-yonhu"},{txt:"\u4e2a\u4eba\u4e2d\u5fc3",path:"/super/mine",name:"mine",icon:"icon-gerenzhongxin1"}],d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={foots:p},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement("footer",null,p.map((function(e,t){return r.createElement("div",{key:t},r.createElement(f.b,{to:e.path,activeClassName:"nav-active"},r.createElement("i",{className:"iconfont "+e.icon}),r.createElement("span",null,e.txt),2==t&&r.createElement(o.a,{className:"hot",hot:!0,style:{marginLeft:12}})))})))}}]),t}(e)}).call(this,n(0).Component,n(0))},253:function(e,t,n){"use strict";n(38),n(254)},254:function(e,t,n){},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(6)),a=f(n(19)),o=f(n(3)),l=f(n(5)),c=f(n(2)),u=f(n(4)),i=f(n(17)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},d=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t,n=this.props,o=n.className,l=n.prefixCls,c=n.children,u=n.text,f=n.size,d=n.overflowCount,m=n.dot,h=n.corner,g=n.hot,b=p(n,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);d=d,u="number"===typeof u&&u>d?d+"+":u,m&&(u="");var y=(0,i.default)((e={},(0,a.default)(e,l+"-dot",m),(0,a.default)(e,l+"-dot-large",m&&"large"===f),(0,a.default)(e,l+"-text",!m&&!h),(0,a.default)(e,l+"-corner",h),(0,a.default)(e,l+"-corner-large",h&&"large"===f),e)),v=(0,i.default)(l,o,(t={},(0,a.default)(t,l+"-not-a-wrapper",!c),(0,a.default)(t,l+"-corner-wrapper",h),(0,a.default)(t,l+"-hot",!!g),(0,a.default)(t,l+"-corner-wrapper-large",h&&"large"===f),t));return s.createElement("span",{className:v},c,(u||m)&&s.createElement("sup",(0,r.default)({className:y},b),u))}}]),t}(s.Component);t.default=d,d.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},e.exports=t.default},256:function(e,t,n){}}]);
//# sourceMappingURL=16.bd74a308.chunk.js.map