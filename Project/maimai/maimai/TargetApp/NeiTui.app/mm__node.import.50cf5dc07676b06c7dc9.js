webpackJsonp([159],{852:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var d=n(1),a=o(d),c=n(994),s=o(c),u=n(981),i=o(u),l=n(75),r=o(l),f=n(76),h=o(f),_=n(15),p=o(_),m=n(114),k=o(m),b=n(113),w=n(17),v=o(w);e.exports=a.default.createClass({displayName:"exports",contextTypes:{auth_info:a.default.PropTypes.object,fconf:a.default.PropTypes.object},componentDidMount:function(){document.body.style.background="#f9f9f9"},onLine1Clicked:function(){var e=this,t={feed_show_headline:1};this.doRequest(t,function(){e.props.cursor.select("feed_show_headline").set(1),(0,b.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,h.default)("修改成功")})},onLine3Clicked:function(){var e=this,t={feed_show_headline:0};this.doRequest(t,function(){e.props.cursor.select("feed_show_headline").set(0),(0,b.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,h.default)("修改成功")})},doRequest:function(e,t){var n=this.context,o=n.auth_info,d=n.fconf;v.default.extend(e,o);var a=d.online_url+"user/v3/update_config?"+p.default.stringify(e),c=fetch(a,{credentials:"same-origin"}).then(r.default.parse_online_json).then(function(){t()}).catch(r.default.toast_error_handler);(0,k.default)("设置中...",c)},render:function(){var e=this.props.feed_show_headline;return a.default.createElement("div",null,a.default.createElement(i.default,{title:"行业头条"}),a.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"行业头条"),a.default.createElement(s.default,{title:"显示",checked:1==e,checkRowClicked:this.onLine1Clicked}),a.default.createElement(s.default,{title:"关闭",checked:0==e,checkRowClicked:this.onLine3Clicked}))}})}});