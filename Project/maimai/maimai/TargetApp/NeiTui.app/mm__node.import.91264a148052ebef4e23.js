webpackJsonp([95],{1177:function(e,t,r){"use strict";var n=r(1),o=n.createClass({displayName:"PayIntro",render:function(){return n.createElement("div",{className:"headInfo"},n.createElement("img",{src:this.props.service_ucard.avatar}),n.createElement("em",{className:"callPrice"},this.props.service.price,"元/分钟"),n.createElement("em",{className:"callInfo"},"(通话费将支付给",this.props.service_ucard.name,")"))}});e.exports=o},894:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),d=n(f),p=r(981),m=n(p),_=r(1176),h=n(_),y=r(1177),v=(n(y),r(988)),b=n(v),g=r(75),w=r(115),P=r(113),O=r(50),j=n(O),E=r(167),k=r(15),x=n(k),C=r(164),q=r(46),N=n(q),T=r(76);t.default=e.exports=(s=c=function(e){function t(){var e,r,n,i;o(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return r=n=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.changeCount=function(e){console.log("count="+e),n.setState({count:e})},n.pay=function(e){e.stopPropagation();var t=n.context.auth_info;if(t.u>0)try{var r=n.props,o=r.service,a=r.msg,i=n.context,t=i.auth_info,c=i.req,s=1==o.call?5:1;if(t.u==o.uid)T("不要自己给自己付钱哦！");else if(n.state.count<s)T("购买数量不能少于"+s+"哦！");else if(a.length<5)T("附言至少5个字哦~");else if(a.length>300)T("附言不能超过300字哦~");else{var l="/sdk/service/pre_pay?"+x.default.stringify(u({_id:o._id,count:n.state.count,dstu:o.uid,from:c.query.hasOwnProperty("from")?c.query.from:"",msg:n.props.msg},t));fetch(l,{credentials:"same-origin"}).then(g.parse_online_json).then(function(e){(0,P.bindBroadcast)("broadcast_web_pay_suc",function(t){t=JSON.parse(t),t.orderid==e.orderid&&n.onPay()});var t="/pay/pay_cm?"+x.default.stringify({orderid:e.orderid,mmtype:31003,mmextra:"购买服务",paytype:"购买服务",mmuid2:o.uid});(0,j.default)(t,"购买服务")}).catch(g.toast_error_handler)}}catch(e){alert(e)}else t.u<0&&(0,w.launch_webview)()},n.appoint=function(e){e.stopPropagation();var t=n.context,r=t.auth_info;t.conf;if(r.u>0)try{var o=n.props,a=o.service,i=o.msg,c=n.context,r=c.auth_info,s=c.req,l=c.fconf,f=1==a.call?5:1,d=1==a.for_member?1:0;if(r.u==a.uid)T("不能购买自己的服务哦！");else if(n.state.count<f)T("购买数量不能少于"+f+"哦！");else if(i.length<5)T("附言至少5个字哦~");else if(i.length>300)T("附言不能超过300字哦~");else{var p="/sdk/service/pre_pay?"+x.default.stringify(u({_id:a._id,count:n.state.count,dstu:a.uid,from:s.query.hasOwnProperty("from")?s.query.from:"",msg:n.props.msg,for_member:d},r));fetch(p,{credentials:"same-origin"}).then(g.parse_online_json).then(function(e){(0,P.bindBroadcast)("broadcast_web_pay_suc",function(t){t=JSON.parse(t),t.orderid==e.orderid&&n.onPay()});var t=l.online_url+"talent/v3/uh/member_srv_consume?"+x.default.stringify(u({orderid:e.orderid},r));fetch(t,{credentials:"same-origin"}).then(g.parse_online_json).then(function(e){1==e.consume_ok?(0,P.sendWebViewBroadcast)("broadcast_web_pay_suc",JSON.stringify({orderid:e.orderid})):(0,E.showModalForConfirm)({title:e.consume_msg,ok_text:"成为会员",ok:function(){(0,N.default)("/uh_memlist?"+x.default.stringify({tpl:"show",fr:"service"}),"会员中心","fetch")},cancel_text:"取消"})}).catch(g.toast_error_handler)}).catch(g.toast_error_handler)}}catch(e){alert(e)}else r.u<0&&(0,w.launch_webview)()},n.onPay=function(){n.props.service;setTimeout(function(){(0,N.default)("/service/pay_success?"+x.default.stringify({for_member:1}),"支付成功","fetch"),(0,C.closePage)("",!0)},100)},i=r,a(n,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.service,r=e.cursor,n=(t._id,d.default.createElement(b.default,{btns:["去支付"],actions:[this.pay]}));1==t.for_member&&(n=d.default.createElement(b.default,{btns:["立即预约"],actions:[this.appoint]}));var o="提交订单";return 1==t.for_member&&(o="预约企业家"),d.default.createElement("div",{style:B.Bg},d.default.createElement(m.default,{title:o}),d.default.createElement(h.default,{service:t,changeCount:this.changeCount,minCount:1==t.call?5:1,showCount:!1,editable:!0,cursor:r,notcall:!0}),n)}}]),t}(d.default.Component),c.contextTypes={auth_info:d.default.PropTypes.object,req:d.default.PropTypes.object,fconf:d.default.PropTypes.object},s);var B={Bg:{backgroundColor:"#f9f9f9"}}}});