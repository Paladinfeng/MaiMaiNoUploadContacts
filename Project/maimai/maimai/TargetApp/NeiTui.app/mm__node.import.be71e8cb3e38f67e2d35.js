webpackJsonp([4],{178:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),d=o(s),p=n(75),h=n(15),y=o(h),m=n(273),v=(o(m),n(165)),b=o(v),_=n(271),g=(o(_),n(1185)),j=o(g),E=n(981),q=(n(50),n(46)),O=n(982),P=(n(63),n(990));n(17),n(116),n(983),n(1095);t.default=e.exports=(u=i=function(e){function t(){var e,n,o,l;r(this,t);for(var i=arguments.length,u=Array(i),f=0;f<i;f++)u[f]=arguments[f];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.loadMore=function(e){var t=o.context,n=t.fconf,r=(t.req,t.auth_info),a=o.props,l=a.cursor,i=(a.searchTokens,a.data_api),u=o.refs.loader;u&&u.bindRequest(function(){var e=20*o.nextPage,t=n.online_url+i+"?"+y.default.stringify(c({limit:20,offset:e,jsononly:1},r));return fetch(t,{credentials:"same-origin"}).then(p.parse_online_json).then(function(e){l.select("list").concat(e.list),l.select("more").set(e.more),o.nextPage++})})},o.openDetail=function(e){var t=this.context.req;q("/service/detail?"+y.default.stringify({id:e,from:"srvlist_"+t.query.type}),"服务详情","fetch")},o.openQDetail=function(e){q("/zd/question?"+y.default.stringify({qid:e}),"","fetch")},l=n,a(o,l)}return l(t,e),f(t,[{key:"componentDidMount",value:function(){this.nextPage=1}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,o=t.more,r=t.cursor,a=t.page_title,l=this.context;l.req,l.auth_info;return this.props.loading||this.props.failed?d.default.createElement(b.default,{ref:"loading",reload:this.onReload,failed:this.props.failed}):d.default.createElement("div",null,d.default.createElement(E,{title:a}),0==n.length&&d.default.createElement("div",{className:"searchList",style:P.empty},"暂无内容"),d.default.createElement(O,{loadMore:function(){e.loadMore(1)},hasMore:1==o,loader:d.default.createElement(b.default,{ref:"loader",reload:function(){e.loadMore(2)},cursor:r.select("loading_status")})},d.default.createElement("div",{className:"panel panel-default"},d.default.createElement("ul",{className:"list-group"},n.map(function(t,n){return d.default.createElement("div",{onClick:function(){e.openQDetail(t.question.id)}},d.default.createElement(j.default,{qucard:t.qucard,question:t.question,aucard:t.aucard,noanswer:!0}),d.default.createElement("div",{className:"clear"}))})))))}}]),t}(d.default.Component),i.contextTypes={req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,auth_info:d.default.PropTypes.object},u)}});