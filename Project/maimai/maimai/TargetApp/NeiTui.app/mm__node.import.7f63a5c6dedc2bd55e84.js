webpackJsonp([128],{1663:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),d=n(s),f=a(90),m=n(f),_=a(278),p=n(_),k=a(46),g=n(k),v=a(168),y=n(v),b=a(17),h=n(b);t.default=e.exports=(c=l=function(e){function t(){var e,a,n,o;i(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.gotoCmtPage=function(){var e=n.props.contact;(0,g.default)("/tag/user_tag?tagu="+e.encode_mmid,"","fetch")},n.onToCmtClicked=h.default.debounce(function(){return n.gotoCmtPage()},500,!0),o=a,r(n,o)}return o(t,e),u(t,[{key:"renderHeader",value:function(){var e=this.context.auth_info,t=this.props,a=t.contact,n=t.onDeleteLikeClicked,i=" "+(a.company?a.company:"")+(a.position?a.position:""),r=e.u==a.id,o=void 0,l=void 0,c=void 0,u=void 0,s=void 0;if(a.like.reason){switch(a.like.reason.split(",").forEach(function(e){1==e&&(o=!0),2==e&&(l=!0),3==e&&(c=!0),4==e&&(u=3),5==e&&(u=2),6==e&&(u=1)}),u){case 1:s="初识";break;case 2:s="相识";break;case 3:s="熟识"}}var f="和Ta共事",m=a.like.company;return m&&m.length<5&&(f="和Ta在"+m+"共事"),d.default.createElement("div",null,d.default.createElement("div",{className:"media-left p-l"},d.default.createElement("div",{className:"font-0"},d.default.createElement(y.default,{customClass:"avatar-37 radius-50",card:a}))),d.default.createElement("div",{className:"media-body"},d.default.createElement("div",{className:"m-b-5 m-t--2"},d.default.createElement("span",{className:"font-bold"},a.name),d.default.createElement("span",{className:"font-13"},i),d.default.createElement("div",{className:"comment_label_new_tag",style:{display:"none"}})),d.default.createElement("div",null,o&&d.default.createElement("div",{className:"domain_skill_tag_detail m-r-5"},f),l&&d.default.createElement("div",{className:"domain_skill_tag_detail m-r-5"},a.like.tag+(a.like.src_like_cnt>0?" "+a.like.src_like_cnt:"")),a.rank>100&&d.default.createElement("div",{className:"domain_skill_tag_detail m-r-5"},"影响力 "+a.rank),c&&d.default.createElement("div",{className:"domain_skill_tag_detail m-r-5"},"行业高管"),u>=1&&d.default.createElement("div",{className:"domain_skill_tag_detail m-r-5"},"lv",u+s,"好友"))),r&&d.default.createElement("div",{className:"media-right p-l-0",onClick:function(e){e.stopPropagation(),n()}},d.default.createElement("div",{className:"domain_skill_tag_comment_delete"},"x")))}},{key:"renderContent",value:function(){var e=this.props.contact;return d.default.createElement("div",{className:"text-info m-t-10 l-h-1-6 p-x"},d.default.createElement(m.default,{ref:"content",text:e.like.text?e.like.text:"认可了这个标签",support_dref:!0}))}},{key:"renderLikeCmt",value:function(){var e=this.props,t=e.contact,a=e.onLikeCmtClicked;if(t.like.text)return d.default.createElement("div",{className:"fr",onClick:function(){a(t)}},d.default.createElement("div",{className:1==t.like.my_like?"domain_skill_tag_comment_liked":"domain_skill_tag_comment_like"},d.default.createElement("span",{className:"m-r-5 "+(1==t.like.my_like?"good_blue":"good_solid")}),t.like.like_cnt>0?t.like.like_cnt:"有用"))}},{key:"renderToCmt",value:function(){return d.default.createElement("div",{className:"fr"},d.default.createElement("div",{className:"domain_skill_tag_to_comment",onClick:this.onToCmtClicked},"去认可Ta"))}},{key:"renderFooter",value:function(){var e=this.context.auth_info,t=this.props,a=t.contact,n=t.tag;return d.default.createElement("div",{className:"clearfix comment_tag_item_footer"},d.default.createElement("div",{className:"fl small m-t-5 text-gray-B7C3C9"},(0,p.default)(a.like.crtime).format("YYYY.MM.DD")),e.u==n.uid?this.renderToCmt():this.renderLikeCmt())}},{key:"render",value:function(){return d.default.createElement("div",{className:"gray-bg-f3f6f7 comment_tag_item"},this.renderHeader(),this.renderContent(),this.renderFooter())}}]),t}(d.default.Component),l.contextTypes={req:d.default.PropTypes.object,fconf:d.default.PropTypes.object,auth_info:d.default.PropTypes.object,env:d.default.PropTypes.object},c)},943:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),f=n(d),m=a(17),_=n(m),p=a(46),k=n(p),g=a(15),v=n(g),y=a(1116),b=n(y),h=a(1663),E=n(h),C=a(981),x=n(C),N=a(114),j=n(N),L=a(75),P=n(L),w=a(113),O=n(w),T=a(988),B=n(T),q=a(76),R=n(q);t.default=e.exports=(c=l=function(e){function t(){var e,a,n,o;i(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.onReceiveUpdateTag=function(e){e&&e.tag==n.props.tag.tag&&n.props.cursor.select("tag").set(e)},n.onReceiveDeleteLike=function(e){var t=n.context.auth_info,a={};if(Object.assign(a,n.props.tag),e.tagName!=a){a.my_like=0,a.my_cmt=0,a.like_cnt>0&&a.like_cnt--;var i=_.default.findIndex(a.contacts,function(e){return e.like.src_uid==t.u});if(i>=0){a.contacts[i].like.text&&a.cmt_cnt--,a.contacts.splice(i,1)}a.best_cmt&&a.best_cmt.src_uid==t.u&&(a.best_cmt=null),n.props.cursor.select("tag").set(a)}},n.onReceiveAddLike=function(e){var t=n.context.auth_info,a={};Object.assign(a,n.props.tag);var i=e.contact;if(a.tag==i.like.tag){if("add"==e.action)a.my_like=1,a.like_cnt++,a.contacts.unshift(i);else if("edit"==e.action||"edit_add_cmt"==e.action){a.my_cmt=1,a.cmt_cnt+="edit_add_cmt"==e.action?1:0,a.best_cmt?a.best_cmt&&a.best_cmt.src_uid==t.u&&(a.best_cmt.text=i.like.text):a.best_cmt=i.like;var r=_.default.find(a.contacts,function(e){return e.id==i.id});r.like.text=i.like.text}n.props.cursor.select("tag").set(a)}},n.deleteLike=function(e){var t=n.context,a=t.req,i=t.auth_info,r="/tag/unlike_user_tag?"+v.default.stringify(u({tag:e.tag,tagu:a.query.tagu},i,{jsononly:1})),o=fetch(r,{credentials:"same-origin"}).then(P.default.parse_online_json).then(function(t){O.default.sendWebViewBroadcast("broadcast_tag_delete_like",{tagName:e.tag}),console.log("unlike success")}).catch(P.default.toast_error_handler);(0,j.default)("发送中..",o)},n.onLikeClicked=_.default.debounce(function(){return n.gotoLikePage()},500,!0),n.onUnLikeClicked=_.default.debounce(function(){return n.deleteLike(n.props.tag)},500,!0),n.onLikeCmtClicked=_.default.debounce(function(e){var t=n.context,a=t.auth_info,i=t.fconf;if(a.u==e.mmid)return void(0,R.default)("不能给自己的点评点赞");var r=n.props,o=r.cursor,l=r.tag,c=0==e.like.my_like?1:0;e.like.my_like=c,e.like.like_cnt+=c?1:-1;var s=_.default.findIndex(l.contacts,function(t){return t.id==e.id});s>-1&&o.get("tag","contacts").splice(s,1,e);var d=i.online_url+"tag/v5/like_user_tag_comment?"+v.default.stringify(u({tag_comment_id:e.like.id,like:c},a)),f=fetch(d,{credentials:"same-origin"}).then(P.default.parse_online_json).then(function(){}).catch(function(){});(0,j.default)("发送中..",f),n.forceUpdate()},500,!0),n.gotoLikePage=function(){var e=n.context.req.query,t=n.props.tag,a={stat_frm:e.stat_frm,type:e.type,req:e.req,su:e.su,tag:t.tag,tagu:e.tagu};e.u&&e.u>0&&(a.u=e.u),(0,k.default)("/tag/like_user_tag?"+v.default.stringify(a),"认可成功","fetch")},n.isCanLike=function(e){var t=n.context.auth_info,a=n.props,i=a.same_workexp,r=a.u2_tags,o=a.entrepreneur,l=a.card,c=e.my_like||i||!!_.default.find(r,function(t){return e.tag==t})||o||l.lv>=1;return-1!=t.u&&t.u!=e.uid||(c=!1),c},n.renderHeader=function(){var e=n.props.tag,t=n.isCanLike(e);return f.default.createElement(b.default,{key:e.tag,tag:e,title:"只有拥有相同标签或共事过的人才能认可",canLike:t,hideCmt:!0,onLikeClicked:t?function(){n.onLikeClicked(e)}:function(){}})},n.renderBottomBtns=function(){var e=n.context.auth_info,t=n.props,a=t.tag,i=t.card;if(n.isCanLike(a)){if(0==a.my_like)return f.default.createElement(B.default,{btns:["去认可"],actions:[n.onLikeClicked]});var r=1==a.my_cmt?"已点评,去编辑":"去点评";return f.default.createElement(B.default,{btns:[r,"取消认可"],actions:[n.onLikeClicked,n.onUnLikeClicked]})}if(i.mmid!=e.u)return f.default.createElement("div",null,f.default.createElement("div",{style:{height:80}}),f.default.createElement("div",{className:"p-y p-x-20 w-100 btn_fixed_center_bottom"},f.default.createElement("div",{className:"gray-bg-f2f6f7 font-16 p-y-12 text-center btn-radius-26"},"无认可权限")))},o=a,r(n,o)}return o(t,e),s(t,[{key:"componentDidMount",value:function(){O.default.bindBroadcast("broadcast_tag_delete_like",this.onReceiveDeleteLike),O.default.bindBroadcast("broadcast_tag_add_like",this.onReceiveAddLike),O.default.bindBroadcast("broadcast_tag_update",this.onReceiveUpdateTag)}},{key:"renderCell",value:function(e){var t=this.props.tag;return f.default.createElement(E.default,{key:e.id,contact:e,tag:t,onDeleteLikeClicked:this.onUnLikeClicked,onLikeCmtClicked:this.onLikeCmtClicked})}},{key:"render",value:function(){var e=this,t=this.props,a=t.card,n=t.tag;return f.default.createElement("div",{className:"bg_grey"},f.default.createElement(x.default,{title:a.name+"的职业标签"}),this.renderHeader(),f.default.createElement("div",{className:"gray-bg-f2f6f7 text-info comment_tag_title"},f.default.createElement("div",{className:"icon_comment_grey"})," 这些同事/同行评价了这个标签"),0==n.contacts.length&&f.default.createElement("div",{className:"text-info p-y-20 m-t-lg text-center"},"还没有人认可过这个标签"),n.contacts.sort(function(e,t){return e.like.id>t.like.id?-1:e.like.id<t.like.id?1:0}).map(function(t){return e.renderCell(t)}),this.renderBottomBtns())}}]),t}(f.default.Component),l.contextTypes={req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,auth_info:f.default.PropTypes.object,env:f.default.PropTypes.object},c)}});