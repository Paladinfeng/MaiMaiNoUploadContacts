webpackJsonp([307],{939:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,m,u=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),s=a(983),p=i(s),r=a(981),d=i(r),_=a(1),f=i(_),v=a(17),h=i(v);a(276),a(76);t.default=e.exports=(m=l=function(e){function t(e){c(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.renderMoreItem=function(){var e={share_info:{title:"可怕！73%的职场人患有上班恐惧症",icon_url:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_icon.jpg",desc:""},more_items:[{title:"分享",callback:"MaiMai_Native.native_share(1)"}]};return f.default.createElement(p.default,{msg_to_app:e})},a.getCoupon=function(){var e=a.props.couponCode;a.setState({coupon_page:!0,coupon_code:e})},a.onShareWX=h.default.debounce(function(){window.MaiMai_Native&&window.MaiMai_Native.native_share&&window.MaiMai_Native.native_share(1)},500),a.state={coupon_page:!1,coupon_code:""},a}return o(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e,t){if(!this.props.wx_sdk_inited&&e.wx_sdk_inited){var a={title:"可怕！73%的职场人患有上班恐惧症",link:window.location.href,imgUrl:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_icon.jpg",desc:"",success:function(){},cancel:function(){}};t.wx_sdk.onMenuShareAppMessage(a),t.wx_sdk.onMenuShareTimeline(a),t.wx_sdk.onMenuShareQQ(a),t.wx_sdk.onMenuShareQZone(a)}}},{key:"render",value:function(){var e=this.state,t=e.coupon_page,a=e.coupon_code;return f.default.createElement("div",{style:{maxWidth:750,margin:"0 auto"}},f.default.createElement(d.default,{title:"职场人厌班情绪调查——拯救丧班族 报告"}),this.renderMoreItem(),t?f.default.createElement("div",{className:"ap_coupon"},f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_coupon_01.png"})),f.default.createElement("div",{className:"font-0 ap_coupon_code_frame"},f.default.createElement("div",{className:"ap_coupon_code"},a),f.default.createElement("img",{className:"mw-100 ap_coupon_code_img",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_coupon_02.png"})),f.default.createElement("div",{className:"ap_coupon_text"},f.default.createElement("div",{className:"ap_coupon_usage"},f.default.createElement("div",{className:"ap_coupon_usage_item"},f.default.createElement("div",null,"使用方式："),f.default.createElement("div",null,"截图保存本券码，点必胜客工作日特惠午餐一份，即可获得免费外带拿铁一杯")),f.default.createElement("div",{className:"ap_coupon_usage_item"},f.default.createElement("div",null,"有  效  期："),f.default.createElement("div",null,"2017年11月27日-2017年12月31日")),f.default.createElement("div",{className:"ap_coupon_usage_item"},f.default.createElement("div",null,"地        点："),f.default.createElement("div",null,"仅限深圳、珠海、海南、广西"))),f.default.createElement("div",{className:"ap_coupon_notice"},f.default.createElement("div",{className:"ap_coupon_notice_item"},"注："),f.default.createElement("div",{className:"ap_coupon_notice_item"},"1. 请在点单前服务员明示使用本券；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"2. 本券不适用于机场，火车站，旅游度假，游乐场，展览馆以及LTZ等特殊餐厅；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"3. 本活动仅限深圳、珠海、海南、广西指定必胜客欢乐餐厅使用，详冾餐厅；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"4. 本活动不能与任何未标明“可与其他优惠共享”的优惠（包括但不限于各种优惠券，赠券、打折卡及学生证）同时使用；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"5. 产品及包装以实物为准，具体产品及价格以餐厅菜单为准；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"6. 如遇该产品售罄，可替换为同类价格相近产品，敬请谅解；"),f.default.createElement("div",{className:"ap_coupon_notice_item"},"7. 本次活动解释权归必胜客所有。")))):f.default.createElement("div",{className:"ap_content"},f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_01.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_02.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_03.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_04.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_05.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_06.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_07.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_08.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_09.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_10.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_11.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_12.png"})),f.default.createElement("div",{className:"font-0"},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_coupon_13.png"}))),f.default.createElement("div",{className:"font-0 p-x p-y-30 ap_buttton_top"}),t?this.props.inApp&&f.default.createElement("div",{className:"font-0 p-x p-y-20 ap_buttton_bg",onClick:this.onShareWX},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_share_btn.png"})):f.default.createElement("div",{className:"font-0 p-x p-y-20 ap_buttton_bg",onClick:this.getCoupon},f.default.createElement("img",{className:"mw-100",src:"https://i9.taou.com/maimai/p/activities/pizzahut/activity_pizzahut_coupon_btn.png"})))}}]),t}(f.default.Component),l.contextTypes={req:f.default.PropTypes.object,fconf:f.default.PropTypes.object,auth_info:f.default.PropTypes.object,wx_sdk:f.default.PropTypes.object},m)}});