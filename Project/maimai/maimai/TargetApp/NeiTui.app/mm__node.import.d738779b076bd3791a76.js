webpackJsonp([272],{867:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i,u,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=n(1),d=o(f),p=n(75),y=n(981),h=o(y),m=n(15),g=o(m),_=n(46),b=o(_),v=n(50),q=(o(v),n(165)),k=o(q),E=n(996),P=o(E),w=n(115),C=n(1020),j=o(C),O=n(270),x=n(982),M=n(63),T=n(986);e.default=t.exports=(u=i=function(t){function e(){var t,n,o,r;a(this,e);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=o=c(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),o.openOutApp=function(){(0,w.launch_webview)()},o.getChildContext=function(){var t=o.context.req;return t.query.school?{from:"dist2_school"}:t.query.company&&2==t.query.dist?{from:"dist2_company"}:M.getChildContext(o)},o.loadMore=function(){var t=o.context,e=(t.fconf,t.req),n=(t.auth_info,o.props.cursor),a=o.refs.loader;a&&a.bindRequest(function(){var t="/company/contacts?"+g.default.stringify({count:20,page:o.nextPage||1,query:e.query.query,dist:e.query.dist||0,cid:e.query.cid,company:e.query.company,forcomp:e.query.forcomp||"0",searchTokens:e.query.searchTokens,highlight:e.query.highlight||"false",school:e.query.school,me:e.query.me,webcname:e.query.webcname,webcid:e.query.webcid,jsononly:1});return fetch(t,{credentials:"same-origin"}).then(p.parse_online_json).then(function(t){n.select("contacts").concat(t.data.contacts),n.select("more").set(t.data.more),o.nextPage++})})},o.gotoDetail=function(t,e){(0,b.default)(e.contact.share_url,"人脉详情"),t.stopPropagation()},o.goUhchat=function(t,e){t.stopPropagation(),(0,b.default)("/uh_chat?"+g.default.stringify({u2:e,from:"company_ulist"}),"极速联系","fetch")},o.goChat=function(t,e){t.stopPropagation(),MaiMai_Native.native_chat?MaiMai_Native.native_chat("",e):alert("您的APP版本太低, 请升级新版!")},r=n,c(o,r)}return r(e,t),s(e,[{key:"componentDidMount",value:function(){this.nextPage=1}},{key:"render",value:function(){var t=this,e=this.props,n=e.contacts,o=e.cursor,a=e.more,c=e.outapp,r=this.context,i=r.req,u=r.auth_info,l=i.query.title||(1==i.query.dist?"更多好友":"更多人脉");return d.default.createElement("div",null,d.default.createElement(h.default,{title:l}),n.length>0||d.default.createElement(P.default,{tips:"暂时没有相关"+i.query.dist==1?"好友":"人脉",onClick:function(){}}),d.default.createElement(x,{loadMore:this.loadMore,hasMore:a>0&&u.u>0,loader:d.default.createElement(k.default,{ref:"loader",reload:this.loadMore,cursor:o.select("loading_status")})},d.default.createElement("div",{className:"panel panel-default"},d.default.createElement("ul",{className:"list-group"},n.map(function(e,n){return c?d.default.createElement(O,{key:e.contact.mmid,contact:e.contact,onClick:function(n){t.gotoDetail(n,e)}}):e.contact.outofrel?d.default.createElement(j.default,{contact:e.contact,key:e.contact.id,from:"company_contacts",cursor:o.select("contacts",n,"contact"),search:!0,mycard:t.props.mycard,cusClassName:"voidBlueBtnFC"}):0==e.contact.dist?d.default.createElement(O,{key:e.contact.mmid,contact:e.contact}):1==e.contact.dist?d.default.createElement(O,{key:e.contact.mmid,contact:e.contact},d.default.createElement("div",{className:"fast_click_btn no_padding_right",onClick:function(n){t.goChat(n,e.contact.id)}},"发消息")):d.default.createElement(O,{key:e.contact.mmid,contact:e.contact},d.default.createElement("div",{className:"fast_click_btn no_padding_right",onClick:function(n){t.goUhchat(n,e.contact.id)}},"极速联系"))})))),c&&d.default.createElement(T,{onClick:this.openOutApp,title:"注册脉脉查看更多员工"}))}}]),e}(d.default.Component),i.contextTypes={req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,auth_info:d.default.PropTypes.object},i.childContextTypes=l({from:d.default.PropTypes.string},M.contentTypes),u)}});