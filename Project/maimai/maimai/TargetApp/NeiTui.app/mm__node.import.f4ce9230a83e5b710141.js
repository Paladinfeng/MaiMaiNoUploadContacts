webpackJsonp([109],{1483:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(c);t.default=e.exports=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.checkClick,n=e.contact,r=e.hasRightCheck;return i.default.createElement("div",{className:"p-x-25",onClick:t},i.default.createElement("div",{className:"media-left font-0 media-middle p-y"},i.default.createElement("img",{src:n.avatar,className:"avatar-50 radius-50"})),i.default.createElement("div",{className:"media-body media-middle border-bottom-e0"},i.default.createElement("div",{className:"font-15"},n.name),i.default.createElement("div",{className:"font-13 text-gray-6b777c m-t-2"},n.mobile)),i.default.createElement("div",{className:"media-right media-middle font-13 border-bottom-e0 text-gray-909DA3"},!n.invited&&i.default.createElement("span",{className:r?"checked_78":"check_78"}),1==n.invited&&i.default.createElement("span",{className:"invited-txt"},"已邀请")))}}]),t}(i.default.Component)},814:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,i,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),d=r(s),m=n(1483),p=r(m),b=n(17),h=r(b),v=n(114),y=r(v),_=n(76),g=r(_),E=n(75),w=r(E),j=n(15),k=r(j),O=n(981),N=r(O);t.default=e.exports=(i=c=function(e){function t(){var e,n,r,l;a(this,t);for(var c=arguments.length,i=Array(c),f=0;f<c;f++)i[f]=arguments[f];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.renderCell=function(e,t){var n=r.props,a=n.cursor,o=(n.contacts,h.default.debounce(function(){a.select("contacts",t).set("uncheck",e.uncheck?0:1)},500,!0));return d.default.createElement(p.default,{contact:e,key:e.mobile,hasRightCheck:!e.uncheck,checkClick:o})},r.sendMsg=h.default.debounce(function(){var e=r.context,t=e.fconf,n=e.auth_info,a=e.req,o=r.props,l=o.cursor,c=o.contacts,i=h.default.filter(c,function(e){return!e.uncheck&&!e.invited}).map(function(e){return e.mobile});if(0==i.length){var f=h.default.findIndex(c,function(e){return!e.invited});return void(0,g.default)(-1==f?"已邀请,无需重复邀请":"请选择邀请好友")}var s=t.online_url+"msg/v4/send_inv_sms?"+k.default.stringify(u({tels:i.join(","),from:a.query.from?a.query.from:"none"},n)),d=fetch(s,{credentials:"same-origin"}).then(w.default.parse_online_json).then(function(){(0,g.default)("邀请成功"),c.forEach(function(e,t){h.default.findIndex(i,function(t){return e.mobile==t})>-1&&l.select("contacts",t,"invited").set(1)}),window.MaiMai_Native.close_native&&window.MaiMai_Native.close_native(null,!0)}).catch(w.default.toast_error_handler);(0,y.default)("发送中..",d)},500,!0),l=n,o(r,l)}return l(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.props.contacts;return d.default.createElement("div",null,d.default.createElement(N.default,{title:"邀请好友"}),d.default.createElement("div",{className:"p-x-25 border-bottom-e0 blue-bg-018be6"},d.default.createElement("div",{className:"media-body media-middle font-20 text-white"},"选择最关键的职场人脉",d.default.createElement("br",null),"邀请加入脉脉"),d.default.createElement("div",{className:"media-right media-middle p-l-0"},d.default.createElement("div",{className:"rank_medal_size"},d.default.createElement("img",{className:"mw-100",src:"/static/images/rank_medal.png"})))),d.default.createElement("div",null,t.map(function(t,n){return e.renderCell(t,n)})),d.default.createElement("div",{style:{height:116}}),d.default.createElement("div",{className:"add_friends_btn_fixed p-y blue-bg-018be6",onClick:this.sendMsg},d.default.createElement("div",{className:"text-center text-white"},"每成功邀请1个，奖励3影响力"),d.default.createElement("div",{className:"add_friends_btn m-y-10"},"一键邀请")))}}]),t}(d.default.Component),c.contextTypes={req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,auth_info:d.default.PropTypes.object,env:d.default.PropTypes.object},i)}});