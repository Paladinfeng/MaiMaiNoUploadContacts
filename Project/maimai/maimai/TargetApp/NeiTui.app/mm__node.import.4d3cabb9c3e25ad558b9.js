webpackJsonp([66],{1159:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),u=a(s),f=n(46),d=a(f),p=n(168),m=a(p),h=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,s=Array(l),f=0;f<l;f++)s[f]=arguments[f];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.openMyMember=function(e){e&&e.stopPropagation(),(0,d.default)("/uh_memlist?tpl=show&fr=batch_addfr","会员中心","fetch")},a.renderMember=function(){return 1==a.props.contact.mem_id||2==a.props.contact.mem_id?u.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img1",onClick:a.props.openMyMember}):3==a.props.contact.mem_id||5==a.props.contact.mem_id||6==a.props.contact.mem_id?u.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img2",onClick:a.props.openMyMember}):4==a.props.contact.mem_id?u.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img3",onClick:a.props.openMyMember}):void 0},a.checkUser=function(e){e.stopPropagation();var t=a.props,n=t.uids,r=t.contact,o=t.handleChange,i=""!=n?n.split(","):[],c=a.hasCheck();-1!=c?i.splice(c,1):i.push(r.id),o(i)},a.hasCheck=function(){var e=a.props,t=e.uids,n=e.contact,r=-1,o=""!=t?t.split(","):[];if(o.length){var i=!0,l=!1,s=void 0;try{for(var u,f=o.entries()[Symbol.iterator]();!(i=(u=f.next()).done);i=!0){var d=c(u.value,2),p=d[0],m=d[1];if(n.id==m){r=p;break}r=-1}}catch(e){l=!0,s=e}finally{try{!i&&f.return&&f.return()}finally{if(l)throw s}}}return r},a.gotoDetail=function(e){a.refs.avatar.gotoDetail(e)},i=n,o(a,i)}return i(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"p-x-25"},u.default.createElement("div",{className:"media-left font-0 media-middle p-y ",onClick:this.gotoDetail},u.default.createElement(m.default,{ref:"avatar",card:this.props.contact,customClass:"avatar-50 radius-50",notBlockImg:!0})),u.default.createElement("div",{className:"media-body media-middle "+(this.props.lastItem?"":"border-bottom-e0"),onClick:this.gotoDetail},u.default.createElement("div",{className:"font-15"},this.props.contact.name,this.props.contact.relation&&this.props.contact.relation.detail&&u.default.createElement("span",{className:"font-12 text-gray-bc"},"（",this.props.contact.relation.detail,"）")),u.default.createElement("div",{className:"font-13 text-gray-6b777c m-t-2"},this.props.contact.company,this.props.contact.position,1==this.props.contact.judge&&u.default.createElement("span",{className:"add_v_img"}),this.renderMember())),this.props.hasRightCheck&&u.default.createElement("div",{className:"media-right media-middle font-0 p-l "+(this.props.lastItem?"":"border-bottom-e0")},u.default.createElement("span",{className:-1==this.hasCheck()?"check_77":"checked_77",onClick:this.checkUser})))}}]),t}(u.default.Component);t.default=e.exports=h},813:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(1),d=a(f),p=n(981),m=a(p),h=n(15),y=a(h),b=n(1159),_=a(b),v=n(114),g=a(v),w=n(167),k=n(76),E=a(k),j=n(75),C=a(j);t.default=e.exports=(l=c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.sendRequire=function(e){var t=n.context,a=t.fconf,r=t.auth_info,o=n.props,i=o.type,c=o.token,l="fraternity"==i?"已发送动态评论“很希望和你交流”给选中的同行。":"已发送消息“你好！我加入脉脉了。”给选中的好友。",u="fraternity"==i?"contact/v4/quick_welcome?":"contact/v4/quick_greeting?";try{var f=a.online_url+u+y.default.stringify(s({type:i},r)),d=new FormData;if(d.append("uids",n.state.uids),d.append("jtk",c),"fraternity"!=i){(n.state.uids?n.state.uids.split(",").length:0)>0?(0,w.showModalForConfirm)({title:"已选"+n.state.uids.split(",").length+"位好友，确认发送问候消息？",ok_text:"确定",cancel_text:"取消",ok:function(){var e=this,t=fetch(f,{method:"post",body:d,credentials:"same-origin"}).then(j.parse_online_json).then(function(t){(0,w.showModalForConfirm)({title:l,ok_text:"知道了",ok:function(){window.MaiMai_Native.close_native("",!0)}.bind(e)})}).catch(C.default.toast_error_handler);(0,g.default)("发送中..",t)}.bind(n)}):(0,E.default)("请选择好友")}else{var p=fetch(f,{method:"post",body:d,credentials:"same-origin"}).then(j.parse_online_json).then(function(e){(0,w.showModalForConfirm)({title:l,ok_text:"知道了",ok:function(){window.MaiMai_Native.close_native("",!0)}.bind(n)})}).catch(C.default.toast_error_handler);(0,g.default)("发送中..",p)}}catch(e){(0,E.default)(e)}},n.handleChange=function(e){n.setState({uids:e.join(",")})},n.state={uids:n.props.uids},n}return i(t,e),u(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.userInfo,a=t.type;return d.default.createElement("div",null,d.default.createElement(m.default,{title:"fraternity"==a?"同行交流":"好友问候"}),d.default.createElement("div",{className:"p-y border-bottom-e0"},d.default.createElement("div",{className:"font-0 m-x-auto m-b-10 "+("fraternity"==a?"w-70":"w-60")},d.default.createElement("img",{className:"mw-100",src:"/static/images/"+("fraternity"==a?"welcome_friend_banner_2.png":"welcome_friend_banner_3.png")})),d.default.createElement("div",{className:"text-center font-17 text-color-4d3d6a"},"成功需要主动结交人脉",d.default.createElement("br",null),"1个好友平均能带来200+有用人脉")),d.default.createElement("div",null,n.map(function(t,a){return d.default.createElement(_.default,{contact:t,key:a,hasRightCheck:!0,lastItem:a==n.length-1,handleChange:e.handleChange,uids:e.state.uids})})),d.default.createElement("div",{style:{height:116}}),d.default.createElement("div",{className:"add_friends_btn_fixed p-y blue-bg-018be6"},d.default.createElement("div",{className:"text-center text-white"},"fraternity"==a?"立即欢迎，扩充5000+人脉":"不要让上一次联系成为成为最后一次"),d.default.createElement("div",{className:"add_friends_btn m-y-10",onClick:this.sendRequire},d.default.createElement("div",{className:"d-i-b"},d.default.createElement("span",{className:"shake_hand_icon m-r-5"}),d.default.createElement("span",{className:"d-i-b media-middle"},"fraternity"==a?"一键交流":"一键问候")))))}}]),t}(d.default.Component),c.contextTypes={auth_info:d.default.PropTypes.object,req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,env:d.default.PropTypes.object,wx_sdk:d.default.PropTypes.object},l)}});