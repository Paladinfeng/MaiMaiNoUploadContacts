webpackJsonp([267],{878:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),f=n(u),m=a(46),_=n(m),p=a(981),h=n(p),g=a(15),w=n(g),y=a(983),v=n(y),b=a(172),k=n(b),E=a(113),x=a(75),N=a(167),M=a(277);t.default=e.exports=(l=r=function(e){function t(e){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.reloadData=function(){var e=a.context,t=e.req,n=e.auth_info,i=a.props.cursor,o=t.pathname+"?"+w.default.stringify(s({},t.query,n,{jsononly:1}));fetch(o,{credentials:"same-origin"}).then(x.parse_online_json).then(function(e){e.data&&i.set(e.data)}).catch(function(e){return(0,x.toast_error_handler)(e)})},a.renderMoreItem=function(){var e={share_info:{title:"10000+职场真相告诉你什么公司值得去",icon_url:"",desc:""},more_items:[{title:"分享给微信好友",callback:"share_wxf"},{title:"分享到朋友圈",callback:"share_wxc"}]};return f.default.createElement(v.default,{msg_to_app:e})},a.onClickItem=function(e){1==e.has_new&&k.default.set(e.webcid,"read",{path:"/",expires:"6h"}),(0,_.default)("/company/hot_company_gossip_list?"+w.default.stringify({webcid:e.webcid,cname:e.name}),"什么公司值得去-"+e.name,"fetch"),a.refs[e.webcid].style.display="none"},a.goToGossipDetail=function(e,t){e.stopPropagation();var n=a.context.env.from_pc;window.MaiMai_Native.native_gossip_detail&&!n?window.MaiMai_Native.native_gossip_detail(""+t.id):(0,_.default)("/web/gossip_detail?webid="+t.webid,t.text,"fetch"),(0,M.pingback)("hot_company_gossip","banner",t.id,a.context.auth_info)},a}return c(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;(0,E.bindBroadcast)("hot_company_gossip_list_reload",this.reloadData),this.props.company_list.map(function(t){1==t.has_new&&"read"!=k.default.get(t.webcid)&&(e.refs[t.webcid].style.display="block")});var t=this.props,a=t.remain_unlock,n=t.unlock_tip,i=t.forwomen;1==n&&1==i?(0,N.showModalForConfirm)({title:"今日为职场女神额外赠送2家公司解锁特权，祝早日实现做真我的职场女主角"}):1==n&&1!=i&&(0,N.showModalForConfirm)({title:"恭喜你获得解锁"+a+"家公司的特权，点击公司logo解锁"});var o=this.context.auth_info;window.share_wxf=function(){window.MaiMai_Native.native_share(4),(0,M.pingback)("hot_company_gossip","share","friends",o)},window.share_wxc=function(){window.MaiMai_Native.native_share(3),(0,M.pingback)("hot_company_gossip","share","circle",o)}}},{key:"componentWillReceiveProps",value:function(e,t){if(!this.props.wx_sdk_inited&&e.wx_sdk_inited){var a={title:"10000+职场真相告诉你什么公司值得去",desc:"10000+职场真相告诉你什么公司值得去",link:window.location.origin+window.location.pathname+"?fr=wx_share",imgUrl:"https://maimai.cn/static/images/mailogo.jpg",success:function(){},cancel:function(){}};t.wx_sdk.onMenuShareAppMessage(a),t.wx_sdk.onMenuShareTimeline(a),t.wx_sdk.onMenuShareQQ(a),t.wx_sdk.onMenuShareQZone(a)}}},{key:"componentWillUnmount",value:function(){(0,E.unbindBroadcast)("hot_company_gossip_list_reload")}},{key:"renderItem",value:function(e,t){var a=this;return f.default.createElement("div",{className:"hcg_company_item",key:t,onClick:function(){return a.onClickItem(e)}},f.default.createElement("div",{className:"hcg_company_item_img"},f.default.createElement("div",{ref:e.webcid,className:"hcg_company_item_unread"}),f.default.createElement("img",{className:"hcg_img",src:e.logo,alt:""}),0==e.unlocked&&f.default.createElement("div",{className:"hcg_img_lock_bg"}),0==e.unlocked&&f.default.createElement("img",{src:"/static/images/company/lock.png",className:"hcg_img_lock"})),f.default.createElement("p",null,e.name))}},{key:"render",value:function(){var e=this,t=this.props,a=t.company_list,n=t.headline_list,i=n;if(i.length<10){for(;i.length<10;)i=i.concat(n);i=i.slice(0,10).concat(n.slice(0,1))}else i=n.slice(0,10).concat(n.slice(0,1));return f.default.createElement("div",{className:"hcg_bg"},f.default.createElement("div",{className:"hcg_wrap"},f.default.createElement(h.default,{title:"什么公司值得去"}),this.renderMoreItem(),f.default.createElement("div",{className:"hcg_headline"},f.default.createElement("div",{className:"hcg_headline_icon"},f.default.createElement("img",{src:"/static/images/company/banner_icon.png",alt:""})),i.map(function(t,a){return f.default.createElement("div",{className:"hcg_headline_item",key:a,onClick:function(a){return e.goToGossipDetail(a,t)}},f.default.createElement("div",{className:"hcg_headline_item_wrap"},f.default.createElement("div",{className:"hcg_headline_item_icon"},f.default.createElement("img",{src:t.logo,alt:""})),f.default.createElement("div",{className:"hcg_headline_item_content"},f.default.createElement("div",{className:"hcg_headline_item_text"},t.text))))})),f.default.createElement("div",{className:"hcg_signboard"},f.default.createElement("img",{src:"/static/images/company/signboard.png",alt:""})),f.default.createElement("div",{className:"hcg_title_bg"},"热门公司内幕"),f.default.createElement("div",{className:"hcg_company_list"},a.map(function(t,a){return e.renderItem(t,a)}))))}}]),t}(f.default.Component),r.contextTypes={req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,auth_info:f.default.PropTypes.object,wx_sdk:f.default.PropTypes.object,env:f.default.PropTypes.object},l)}});