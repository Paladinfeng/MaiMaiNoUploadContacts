webpackJsonp([298],{944:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a(1),f=n(p),d=a(46),m=n(d),h=a(274),_=n(h),b=a(75),v=n(b),y=a(76),g=n(y),E=a(47),w=(n(E),a(981)),N=n(w),j=a(983),x=n(j),T=a(272),O=n(T),P=a(15),k=a(114),M=(c=l=function(e){function t(){var e,a,n,i;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.goTopic=function(e){e&&e.stopPropagation();var t=n.props.topic;(0,m.default)("/article/topic?id="+t.topicid+"&from=meitu","话题","fetch")},n.publish=function(e){e&&e.stopPropagation();var t=n.props,a=t.topic,r=t.pic,o=n.context,i=(o.fconf,o.auth_info),l={};l.pic=r,l.text=n.refs.input.value,l.topicid=a.topicid;var c="/sdk/activity/publish_meitu?"+P.stringify(u({},i)),s=fetch(c,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:P.stringify(l)}).then(v.default.parse_online_json).then(function(e){(0,g.default)("发布成功")}).catch(v.default.toast_error_handler);k("发布中...",s)},i=a,o(n,i)}return i(t,e),s(t,[{key:"componentDidMount",value:function(){_.default.isSupportTansShowTitleMenuBar(this.context)&&_.default.setMenuBarStyle({banner_trans:!0}),window.publish=this.publish}},{key:"render",value:function(){var e=u({},O.default);e.top_right_item={title:"发布",callback:"publish()"};var t=_.default.isSupportTansShowTitleMenuBar(this.context);return f.default.createElement("div",null,f.default.createElement(N.default,{title:"参与话题"}),f.default.createElement(x.default,{msg_to_app:e}),f.default.createElement("div",{className:"p-relative"+(t?" mpf_trans_banner_wrap":" mpf_normal_banner_wrap")},!t&&f.default.createElement("div",{className:"mpf_normal_banner"}),t&&f.default.createElement("div",{className:"mpf_banner"},f.default.createElement("img",{className:"mw-100",src:"/static/images/activity/meitu/meitu_pub_bg.png"})),f.default.createElement("div",{className:"mpf_img_wrap"},f.default.createElement("div",{className:"mpf_img_box"},f.default.createElement("div",{className:"mpf_img"},f.default.createElement("img",{className:"mw-100",src:this.props.pic}))))),f.default.createElement("div",{className:"mfp_saysomething"},f.default.createElement("textarea",{ref:"input",placeholder:"关于这次活动的发布文案。。。"})),f.default.createElement("div",{className:"p-x-10 p-y-10 border-gray-e6 gray-bg-f9 m-x-20 m-b",onClick:this.goTopic},f.default.createElement("div",{className:"media-left media-middle"},f.default.createElement("div",{className:"font-0",style:{minHeight:50}},f.default.createElement("img",{className:"avatar-50",src:this.props.topic.author_card.avatar}),"}")),f.default.createElement("div",{className:"media-body media-middle"},f.default.createElement("div",null,f.default.createElement("div",{className:"font-15 l-h-1-6 lineClamp2"},this.props.topic.tag_datas.text)))))}}]),t}(f.default.Component),l.contextTypes={auth_info:f.default.PropTypes.object,env:f.default.PropTypes.object,req:f.default.PropTypes.object},c);t.default=e.exports=M}});