webpackJsonp([104],{1479:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),d=a(1),f=r(d),p=a(168),_=r(p),m=a(50),g=r(m),h=a(15),y=r(h),v=a(75),b=r(v),E=a(76),N=r(E),w=a(115);t.default=e.exports=(s=o=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.openMyMember=function(e){e&&e.stopPropagation(),(0,g.default)("/uh_memlist?tpl=show&fr=batch_tagfr","会员中心","fetch")},a.renderMember=function(){return 1==a.props.friend.mem_id||2==a.props.friend.mem_id?f.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img1",onClick:a.openMyMember}):3==a.props.friend.mem_id||5==a.props.friend.mem_id||6==a.props.friend.mem_id?f.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img2",onClick:a.openMyMember}):4==a.props.friend.mem_id?f.default.createElement("span",{className:"cursor-pointer  add_huiyuan_img3",onClick:a.openMyMember}):void 0},a.lightTag=function(){if(!a.props.overdue&&!a.state.add_one){a.setState({add_one:!a.state.add_one});var e=a.context,t=e.fconf,r=e.auth_info,n=e.req,l=[],i={},o=a.props.friend;i.type=o.tag.type,i.tag=o.tag.tag,i.uid=o.tag.uid,l.push(i),l=JSON.stringify(l);var s=n&&n.query.fr?n.query.fr+"one":"clicktagone",c=void 0;if(a.props.outapp){if(!n.query||!n.query.token)return;c=t.online_url+"growth/outside/user_recall_tag_like?"+y.default.stringify({uid:a.props.mycard.id,token:n.query.token,fr:s,tag:l})}else c=t.online_url+"growth/user_recall_tag_like?"+y.default.stringify(u({fr:s,tag:l},r));fetch(c).then(b.default.parse_online_json).catch(function(e){(0,N.default)(e.error_msg?e.error_msg:"请求失败")})}a.props.outapp&&setTimeout(function(){(0,w.launch)()},200)},a.state={add_one:!!a.props.light_all},a}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.friend,a=e.classNumber,r=void 0,n=void 0;return n=0==a?"light_tag_blue":1==a?"light_tag_orange":"light_tag_purple",r=this.props.light_all||this.state.add_one?"+"+(t.tag.likes+1):t.tag.likes>0?"+"+t.tag.likes:"",f.default.createElement("div",{className:"light_tag_item"},f.default.createElement("div",{className:"d-t-c media-top"},f.default.createElement("div",{className:"font-0 avatar-48 radius-50"},f.default.createElement(_.default,{card:t,customClass:"w-100 radius-50",notBlockImg:!0}))),f.default.createElement("div",{className:"d-t-c media-top p-l"},f.default.createElement("div",{className:"light_tag_user_info"},f.default.createElement("div",{className:"light_tag_user_name"},t.name),f.default.createElement("div",{className:"light_tag_user_position"},t.career),1==t.judge&&f.default.createElement("span",{className:"add_v_img"}),this.renderMember(),f.default.createElement("div",{className:n,onClick:this.lightTag},f.default.createElement("div",{className:"light_tag_name"},f.default.createElement("span",{className:"light_tag_name_text"},t.tag.tag),f.default.createElement("span",{className:"d-i-b media-middle"},r)),(this.props.light_all||this.state.add_one)&&f.default.createElement("div",{className:"light_tag_add_one"},f.default.createElement("span",{className:"light_tag_blue_good m-r-5"}),f.default.createElement("span",{className:"light_tag_add_number"},"+1")))),f.default.createElement("div",null,f.default.createElement("div",{className:"light_tag_text_wrap"},t.content))))}}]),t}(f.default.Component),o.contextTypes={auth_info:f.default.PropTypes.object,fconf:f.default.PropTypes.object,req:f.default.PropTypes.object},s)},803:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),d=a(1),f=r(d),p=a(168),_=r(p),m=a(1479),g=r(m),h=a(15),y=r(h),v=a(75),b=r(v),E=a(76),N=r(E),w=a(274),k=r(w),j=a(981),O=r(j),M=a(115),T=(s=o=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.light_tag_btn=function(){if(!a.props.overdue){a.setState({light_all:!a.state.light_all});var e=a.props.datas.friends,t=a.context,r=t.fconf,n=t.auth_info,l=t.req,i=[],o=l&&l.query.fr?l.query.fr:"clicktags";e.forEach(function(e,t){var a={};a.type=e.tag.type,a.tag=e.tag.tag,a.uid=e.tag.uid,i.push(a)}),i=JSON.stringify(i);var s=void 0,c=new FormData;if(a.props.outapp){if(!l.query||!l.query.token)return;s=r.online_url+"growth/outside/user_recall_tag_like?"+y.default.stringify({uid:a.props.mycard.id,token:l.query.token,fr:o})}else s=r.online_url+"growth/user_recall_tag_like?"+y.default.stringify(u({fr:o},n));c.append("tags",i),fetch(s,{method:"post",body:c,credentials:"same-origin"}).then(b.default.parse_online_json).then(function(){a.close_native()}).catch(function(e){(0,N.default)(e.error_msg?e.error_msg:"请求失败"),a.close_native()})}a.props.outapp&&setTimeout(function(){(0,M.launch)()},200)},a.close_native=function(){window.MaiMai_Native&&window.MaiMai_Native.close_native&&window.MaiMai_Native.close_native("",!0)},a.state={light_all:!1},a}return i(t,e),c(t,[{key:"componentDidMount",value:function(){k.default.isSupportTansShowTitleMenuBar(this.context)&&k.default.setMenuBarStyle({banner_trans:!0,banner_color:"",banner_lightstyle:"",hideTitle:!0})}},{key:"render",value:function(){var e=this,t=this.props.datas,a=t.count,r=t.friends,n=this.props.mycard,l=k.default.isSupportTansShowTitleMenuBar(this.context);return f.default.createElement("div",null,f.default.createElement(O.default,{title:"欢迎回来"}),f.default.createElement("div",{className:"light_tag_bg"},l&&f.default.createElement("span",{className:"light_tag_close_position",onClick:this.close_native}),f.default.createElement("div",{className:"light_tag_title",style:{paddingTop:l?57:37}},f.default.createElement("div",{className:"font-18 m-b-7"},"你有",a<30?"":"超",a,"位好友/同事有新职业动向"),f.default.createElement("div",{className:"font-15"},"升职加薪、创业、加入大公司...")),f.default.createElement("div",{className:"light_tag_list",style:{top:l?121:101}},r.map(function(t,a){var r=a%3;return f.default.createElement(g.default,{key:"light_tag_item_"+a,light_all:e.state.light_all,friend:t,overdue:e.props.overdue,outapp:e.props.outapp,mycard:e.props.mycard,classNumber:r})}))),f.default.createElement("div",{className:"light_tag_btn_wrap"},f.default.createElement("div",{className:"d-t w-100 text-right"},f.default.createElement("div",{className:"d-t-c media-top p-r"},f.default.createElement("div",{className:"light_my_name"},n.name),f.default.createElement("div",{className:"text-right"},f.default.createElement("div",{className:"light_batch_btn d-i-b",onClick:this.light_tag_btn},f.default.createElement("span",{className:"light_tag_finger light_tag_finger_move"}),f.default.createElement("span",{className:"d-i-b media-middle m-l-5"},"一键点赞并关注"),f.default.createElement("div",{className:"light_tag_blue_triangle"})))),f.default.createElement("div",{className:"d-t-c media-top"},f.default.createElement("div",{className:"font-0 avatar-48 radius-50"},f.default.createElement(_.default,{card:n,customClass:"w-100 radius-50",notBlockImg:!0}))))))}}]),t}(f.default.Component),o.contextTypes={auth_info:f.default.PropTypes.object,fconf:f.default.PropTypes.object,req:f.default.PropTypes.object},s);T.isHideHeader=function(e,t){return!0},t.default=e.exports=T}});