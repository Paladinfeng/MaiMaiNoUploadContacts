webpackJsonp([75],{1125:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(984),i=r(116),c=o(i),s=r(63),l=o(s),u=r(1),p=r(17),f=r(15),d=(r(985)("app"),r(117),r(991),r(90)),h=(r(75),r(41)),m=r(50);e.exports=u.createClass({displayName:"exports",mixins:[h],contextTypes:{auth_info:u.PropTypes.object,fconf:u.PropTypes.object,highlight_keys:u.PropTypes.arrayOf(u.PropTypes.string)},showTopicDetail:p.debounce(function(){var e=this.props.topic;m("/article/topic?id="+e.topic.id,"话题");var t=this.context,r=t.auth_info,o=t.fconf;if(e.topic.search_qs&&e.topic.search_order&&r.u>0){var a=o.online_url+"search/web/s_pb?"+f.stringify(n({srcu:r.u,type:"topic",targetid:e.topic.id,order:e.topic.search_order,qs:e.topic.search_qs},r));fetch(a)}},1e3,!0),renderFooter:function(){var e=this.props.topic,t="";if(t+=e.topic.feeds_count>0?e.topic.feeds_count+"个观点 ":"",t+=e.topic.feeds_active_count>0?e.topic.feeds_active_count+"个赞同 ":"",!e.contact)return u.createElement("div",{className:"text-muted small"},t&&u.createElement("span",{className:"pull-right"},t));var r=c.default.getCareer(e.contact);return r.length>=12&&(r=r.substr(0,11)+"..."),u.createElement("div",{className:"text-muted small"},e.contact&&l.default.mark(this,e.contact.name),e.contact&&u.createElement("span",null," · ",l.default.mark(this,r)),e.contact&&1==e.contact.judge&&u.createElement("span",{className:"add_v_img"}),t&&u.createElement("span",{className:"pull-right"},t))},render:function(){var e=this.props.topic;return u.createElement("li",{className:"list-group-item clearfix "+(this.props.xSpace?"p-x-"+this.props.xSpace:""),onClick:this.showTopicDetail},u.createElement("div",{className:"d-t-c"},u.createElement("div",{className:"list-group-item-text font-15 clearfix p-t-10"},u.createElement("div",{className:"media-heading"},u.createElement("p",{style:(0,a.textOverflow)(3)},u.createElement(d,{text:e.topic.title,support_dref:!0}))))),u.createElement("div",{className:"topicSearch"},u.createElement("div",{className:"media-body media-middle"},this.renderFooter())))}})},744:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,s,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),p=o(u),f=r(75),d=r(981),h=(o(d),r(15)),m=o(h),y=r(1125),g=o(y),v=r(46),_=(o(v),r(165)),b=o(_),x=r(982),E=r(63),q=r(990),w=r(17);t.default=e.exports=(s=c=function(e){function t(){var e,r,o,i;n(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.getChildContext=function(){return E.getChildContext(o)},o.loadMore=function(){var e=o.context,t=(e.fconf,e.req),r=(e.auth_info,o.props),n=r.cursor,a=r.searchTokens,i=o.refs.loader;i&&i.bindRequest(function(){var e=20*o.nextPage,r="/search/topics?"+m.default.stringify({query:o.query||t.query.query,limit:20,offset:e,searchTokens:JSON.stringify(a),highlight:"true",jsononly:1});return fetch(r,{credentials:"same-origin"}).then(f.parse_online_json).then(function(e){n.select("topics").concat(e.data.topics),n.select("more").set(e.data.more),o.nextPage++})})},o.onReload=function(){o.query&&o.query.length>0&&o.searchContent(o.query)},o.searchContent=w.throttle(function(e){var t=this,r=this.props.cursor;this.context.req;if(!e||0==e.length)return void r.merge({topics:void 0,loading:null});if(!this.query||this.query==e){r.merge({loading:"loading",failed:!1,topics:[],more:0});var o="/search/topics?"+m.default.stringify({query:e,limit:20,offset:0,highlight:"true",jsononly:1});return fetch(o,{credentials:"same-origin"}).then(f.parse_online_json).then(function(o){t.query==e&&r.merge(w.extend(o.data,{loading:null}))}).catch(function(o){t.query==e&&r.merge({failed:!0})})}},1e3),o.searchCallback=function(e){var t=JSON.parse(e);this.nextPage=1,this.query&&this.query==t.keyword||(this.query=t.keyword,0==t.keyword.length&&this.props.cursor.merge({topics:void 0,loading:null,hotwords:void 0}),this.searchContent(this.query))},i=r,a(o,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){this.nextPage=1,window.search_callback=this.searchCallback.bind(this)}},{key:"componentWillUnmount",value:function(){window.search_callback=null}},{key:"render",value:function(){var e=this.props,t=e.topics,r=e.more,o=e.cursor,n=this.context;n.req,n.auth_info;return void 0===t?p.default.createElement("div",null):this.props.loading||this.props.failed?p.default.createElement(b.default,{ref:"loading",reload:this.onReload,failed:this.props.failed}):0==t.length?p.default.createElement("div",{style:q.empty},"没有找到相关结果"):p.default.createElement("div",null,p.default.createElement(x,{loadMore:this.loadMore,hasMore:1==r,loader:p.default.createElement(b.default,{ref:"loader",reload:this.loadMore,cursor:o.select("loading_status")})},p.default.createElement("div",{className:"panel panel-default cursor-pointer"},p.default.createElement("ul",{className:"list-group"},t.map(function(e,t){return p.default.createElement(g.default,{key:e.topicid,topic:e,searchItem:!0})})))))}}]),t}(p.default.Component),c.contextTypes={req:p.default.PropTypes.object,fconf:p.default.PropTypes.object,auth_info:p.default.PropTypes.object},c.childContextTypes=E.contentTypes,s)}});