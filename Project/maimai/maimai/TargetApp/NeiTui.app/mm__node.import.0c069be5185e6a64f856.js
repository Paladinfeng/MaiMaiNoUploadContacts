webpackJsonp([259],{765:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(1),d=l(n),r=a(166),u=l(r),o=a(1060),s=l(o),c=a(981),f=l(c),p=a(46),_=l(p),h=a(76),m=l(h),v=a(15),b=l(v),y=a(275),w=l(y),x=a(114),E=l(x),g=a(75),M=l(g),N=a(1028),k=a(41),B=a(47);e.exports=(0,u.default)(d.default.createClass({displayName:"exports",mixins:[w.default,k],contextTypes:{auth_info:d.default.PropTypes.object,fconf:d.default.PropTypes.object},getInitialState:function(){return{}},componentDidMount:function(){this.props.dpvalue&&(this.refs.deposit_value.value=this.props.dpvalue),window.MaiMai_Native.native_on_imei_read&&(window.on_imei_read=function(e){this.setState({imei:e})}.bind(this),window.MaiMai_Native.native_on_imei_read("on_imei_read")),window.MaiMai_Native.native_on_location_read&&(window.on_location_read=function(e){var t=JSON.parse(e);t&&this.setState({latitude:t.latitude,longitude:t.longitude})}.bind(this),window.MaiMai_Native.native_on_location_read("on_location_read"))},process_deposit:function(){var e=this.context,t=e.fconf,a=e.auth_info,l=B.findDOMNode(this.refs.deposit_value).value;if((0,N.checkStrEmpty)(l))return void(0,m.default)("请输入充值金额");var n=parseFloat(l);if(n<1)return(0,m.default)("单次充值金额必须大于1元");if(n>2e3)return(0,m.default)("单次充值金额不得超过2000元");var d=i({value:n,bind_id:this.props.card.id,web_callback:t.web_url+"contact/account/web_callback?type=deposit",return_url:t.web_url+"contact/account/return_close",fail_callback:t.web_url+"contact/account/web_callback?type=deposit_fail"},a);this.state.imei&&(d.imei=this.state.imei),this.state.latitude&&this.state.longitude&&(d.latitude=this.state.latitude,d.longitude=this.state.longitude);var r=t.online_url+"mmpay/v4/deposit_url?"+b.default.stringify(d),u=fetch(r).then(M.default.parse_online_json).then(function(e){void 0!=e.redirectUrl&&e.redirectUrl.length>0?((0,_.default)(e.redirectUrl,"银行卡充值","fetch"),window.MaiMai_Native.close_native(null,!0)):(0,m.default)("请求失败,请稍后再试")}).catch(M.default.alert_error_handler);(0,E.default)("请求充值页面中",u)},render:function(){return d.default.createElement("div",null,d.default.createElement(f.default,{title:"银行卡充值"}),d.default.createElement("div",{style:s.default.cashBankCardWrap},d.default.createElement("div",{className:"clearfix",style:[s.default.cashBox,s.default.borderBottom]},d.default.createElement("label",{style:s.default.cashLabel},"银行卡"),d.default.createElement("p",{style:s.default.cashBoxP},d.default.createElement("input",{style:[s.default.cashInput,s.default.rightInput,s.default.disableBg],type:"text",placeholder:"",ref:"mobile",disabled:"disabled",value:this.props.card.bank+" (****"+this.props.card.subfix+")"}))),d.default.createElement("div",{className:"clearfix",style:[s.default.cashBox,s.default.borderBottom]},d.default.createElement("label",{style:s.default.cashLabel},"充值金额"),d.default.createElement("p",{style:s.default.cashBoxP},d.default.createElement("input",{style:[s.default.cashInput,s.default.rightInput],type:"number",placeholder:"",ref:"deposit_value"}))),d.default.createElement("div",{className:"m-t m-l small text-muted"},"单次充值至少1元,最多2000元,每日累计10000元")),d.default.createElement("div",{style:s.default.nextBtn,onClick:this.process_deposit},"去充值"))}}))}});