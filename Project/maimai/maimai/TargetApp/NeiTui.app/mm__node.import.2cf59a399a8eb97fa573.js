webpackJsonp([162],{842:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=o(1),n=r(s),c=o(994),l=r(c),i=o(981),d=r(i),f=o(75),a=r(f),u=o(76),p=r(u),h=o(15),_=r(h),k=o(114),m=r(k),y=o(113),C=o(17),v=r(C);e.exports=n.default.createClass({displayName:"exports",contextTypes:{auth_info:n.default.PropTypes.object,fconf:n.default.PropTypes.object},componentDidMount:function(){document.body.style.background="#f9f9f9"},onLine1Clicked:function(){var e=this,t={fr_reconly:1,fr_d2only:0};this.doRequest(t,function(){e.props.cursor.select("fr_reconly").set(1),e.props.cursor.select("fr_d2only").set(0),(0,y.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,p.default)("修改成功")})},onLine2Clicked:function(){var e=this,t={fr_reconly:0,fr_d2only:1};this.doRequest(t,function(){e.props.cursor.select("fr_reconly").set(0),e.props.cursor.select("fr_d2only").set(1),(0,y.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,p.default)("修改成功")})},onLine3Clicked:function(){var e=this,t={fr_reconly:0,fr_d2only:0};this.doRequest(t,function(){e.props.cursor.select("fr_reconly").set(0),e.props.cursor.select("fr_d2only").set(0),(0,y.sendWebViewBroadcast)("broadcast_update_user_conf",e.props.cursor.get()),(0,p.default)("修改成功")})},onLine11Clicked:function(){var e=this,t=1==this.props.fr_profonly?0:1,o={fr_profonly:t};this.doRequest(o,function(){e.props.cursor.select("fr_profonly").set(t),(0,p.default)("修改成功")})},onLine12Clicked:function(){var e=this,t=1==this.props.fr_nohr?0:1,o={fr_nohr:t};this.doRequest(o,function(){e.props.cursor.select("fr_nohr").set(t),(0,p.default)("修改成功")})},onLine13Clicked:function(){var e=this,t=1==this.props.fr_nosale?0:1,o={fr_nosale:t};this.doRequest(o,function(){e.props.cursor.select("fr_nosale").set(t),(0,p.default)("修改成功")})},onLine14Clicked:function(){var e=this,t=1==this.props.fr_limrank?0:1,o={fr_limrank:t};this.doRequest(o,function(){e.props.cursor.select("fr_limrank").set(t),(0,p.default)("修改成功")})},onLine15Clicked:function(){var e=this,t=1==this.props.fr_vonly?0:1,o={fr_vonly:t};this.doRequest(o,function(){e.props.cursor.select("fr_vonly").set(t),(0,p.default)("修改成功")})},onLine16Clicked:function(){var e=this,t=1==this.props.no_mb_search?0:1,o={no_mb_search:t};this.doRequest(o,function(){e.props.cursor.select("no_mb_search").set(t),(0,p.default)("修改成功")})},doRequest:function(e,t){var o=this.context,r=o.auth_info,s=o.fconf;v.default.extend(e,r);var n=s.online_url+"user/v3/update_config?"+_.default.stringify(e),c=fetch(n,{credentials:"same-origin"}).then(a.default.parse_online_json).then(function(){t()}).catch(a.default.toast_error_handler);(0,m.default)("设置中...",c)},render:function(){return n.default.createElement("div",null,n.default.createElement(d.default,{title:"防打扰设置"}),n.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"哪些人申请好友时提醒我"),n.default.createElement(l.default,{title:"我的好友点评过的人",checked:1==this.props.fr_reconly,checkRowClicked:this.onLine1Clicked}),n.default.createElement(l.default,{title:"我的人脉（同事、校友、同乡等）",checked:0==this.props.fr_reconly&&1==this.props.fr_d2only,checkRowClicked:this.onLine2Clicked}),n.default.createElement(l.default,{title:"所有人",checked:0==this.props.fr_reconly&&0==this.props.fr_d2only,checkRowClicked:this.onLine3Clicked}),n.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"不接受以下用户添加我为好友（多选）"),n.default.createElement(l.default,{title:"非“"+this.props.profession+"”行业的",checked:1==this.props.fr_profonly,checkRowClicked:this.onLine11Clicked}),n.default.createElement(l.default,{title:"猎头",checked:1==this.props.fr_nohr,checkRowClicked:this.onLine12Clicked}),n.default.createElement(l.default,{title:"销售、理财、保险",checked:1==this.props.fr_nosale,checkRowClicked:this.onLine13Clicked}),n.default.createElement(l.default,{title:"影响力小于"+this.props.rank+"的",checked:1==this.props.fr_limrank,checkRowClicked:this.onLine14Clicked}),n.default.createElement(l.default,{title:"未认证用户",checked:1==this.props.fr_vonly,checkRowClicked:this.onLine15Clicked}),n.default.createElement("div",{className:"m-t-md m-b m-l text-muted"},"搜索"),n.default.createElement(l.default,{title:"不允许通过手机号搜索到我",checked:1==this.props.no_mb_search,checkRowClicked:this.onLine16Clicked}))}})}});