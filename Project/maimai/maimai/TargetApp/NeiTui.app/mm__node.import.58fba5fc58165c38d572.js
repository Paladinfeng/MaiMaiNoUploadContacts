webpackJsonp([249],{784:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,u,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),i=n(f),p=r(981),d=n(p),y=r(270),h=n(y),b=r(75),m=r(165),_=n(m),v=r(15),j=n(v),E=r(982);t.default=e.exports=(u=c=function(e){function t(){var e,r,n,l;o(this,t);for(var c=arguments.length,u=Array(c),s=0;s<c;s++)u[s]=arguments[s];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.loadMore=function(){var e=n.props.cursor,t=n.refs.loader,r=n.context.req;t&&t.bindRequest(function(){var t=n.start||20;return fetch(r.pathname+"?"+j.default.stringify({start:t,count:20,jsononly:1}),{credentials:"same-origin"}).then(b.parse_online_json).then(function(r){e.select("contacts").concat(r.data.contacts),e.select("more").set(r.data.more),n.start=t+20})})},l=r,a(n,l)}return l(t,e),s(t,[{key:"render",value:function(){var e=this.context.req;return i.default.createElement("div",null,i.default.createElement(d.default,{title:e.query.title}),i.default.createElement(E,{loadMore:this.loadMore,hasMore:this.props.more>0,loader:i.default.createElement(_.default,{ref:"loader",reload:this.loadMore,cursor:this.props.cursor.select("loading_status")})},i.default.createElement("div",{className:"panel panel-default"},i.default.createElement("ul",{className:"list-group"},this.props.contacts.map(function(e){return i.default.createElement(h.default,{key:e.mmid,contact:e})})))))}}]),t}(i.default.Component),c.contextTypes={auth_info:i.default.PropTypes.object,req:i.default.PropTypes.object,fconf:i.default.PropTypes.object},u)}});