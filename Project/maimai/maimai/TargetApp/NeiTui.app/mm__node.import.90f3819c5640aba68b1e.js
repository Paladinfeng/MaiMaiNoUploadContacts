webpackJsonp([246],{693:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),u=r(o),d=n(981),i=r(d),l=n(15),s=(r(l),n(113)),c=n(164),f=n(1076),p=r(f),m=n(271),h=r(m);e.exports=u.default.createClass({displayName:"exports",reloadData:function(e){this.props.cursor.select("uinfo").merge((0,c.formatUserV3ToUInfo)(e))},componentDidMount:function(){(0,s.bindBroadcast)("User_Info_Changed",this.reloadData)},componentWillUnmount:function(){(0,s.unbindBroadcast)("User_Info_Changed",this.reloadData)},render:function(){var e=this;return u.default.createElement("div",null,u.default.createElement(i.default,{title:"编辑工作经历"}),u.default.createElement(h.default,{onClick:c.addWorkExp,title:"工作经历",btn:"添加"},this.props.uinfo.work_exp.map(function(t){return u.default.createElement(p.default,a({key:t.id},t,{me:!0,uid:e.props.card.id,userName:e.props.card.name}))})))}})}});