webpackJsonp([261],{865:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(15),f=n(p),d=r(75),h=r(981),y=n(h),b=r(165),m=n(b),v=r(1),_=r(1168),j=(r(1170),r(982));t.default=e.exports=(c=l=function(e){function t(){var e,r,n,i;o(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.loadMore=function(){var e=n.props.cursor;n.refs.loader.bindRequest(function(){return t.loadData(n.context,n.nextPage).then(function(t){n.nextPage++;var r=t.data;e.select("data").concat(r.data),e.select("remain").set(r.remain),e.select("title").set(r.title)})})},i=r,a(n,i)}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.nextPage=1}},{key:"render",value:function(){var e=this,t=this.props.cursor;return v.createElement("div",null,v.createElement(y.default,{title:this.props.title?this.props.title:"列表页"}),v.createElement(j,{loadMore:this.loadMore,hasMore:this.props.remain>0,loader:v.createElement(m.default,{ref:"loader",reload:this.loadMore,cursor:t.select("loading_status")})},v.createElement("div",{className:"panel panel-default"},v.createElement("ul",{className:"list-group"},this.props.data.map(function(t){return v.createElement("div",null,v.createElement(_,{item:t,from:"jintent",from_id:e.props.job.id}))})))))}}],[{key:"loadData",value:function(e,t){var r=e.req,n=r.query,o=r.pathname+"?"+f.default.stringify(s({page:t,jsononly:1},n));return fetch(o,{credentials:"same-origin"}).then(d.parse_online_json)}}]),t}(v.Component),l.contextTypes={auth_info:v.PropTypes.object,req:v.PropTypes.object,fconf:v.PropTypes.object},c)}});