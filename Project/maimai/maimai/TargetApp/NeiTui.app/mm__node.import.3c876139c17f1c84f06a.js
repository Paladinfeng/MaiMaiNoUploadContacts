webpackJsonp([61],{1566:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(275),a=r(o),i=n(46),s=r(i),c=n(15),l=(r(c),n(1)),p=n(166),u=(n(50),n(90),n(993),n(1004),n(1088)),d=(n(78),n(1567)),y=l.createClass({displayName:"hotCompany",mixins:[a.default,u],contextTypes:{auth_info:l.PropTypes.object,fconf:l.PropTypes.object,req:l.PropTypes.object},getInitialState:function(){return{}},open:function(e){e.stopPropagation(),(0,s.default)(this.props.url,"活动详情","fetch")},render:function(){var e=d(new Date(this.props.startdate),"MM/dd hh:mm"),t=d(new Date(this.props.enddate),"MM/dd hh:mm");return l.createElement("div",{style:h.row,onClick:this.open},l.createElement("img",{style:h.img,src:this.props.logo}),l.createElement("div",{style:h.content},l.createElement("h3",{style:h.title},this.props.title),l.createElement("p",{style:h.addr},this.props.address),l.createElement("div",{style:h.line3},e,"-",t)))}}),h={row:{padding:"10px",borderBottom:"1px solid #eee",height:"93px"},img:{marginTop:"3px",marginRight:"10px",width:"30%",flow:"left"},content:{overflow:"hidden",float:"right",width:"65%"},title:{marginBottom:"9px",height:"30px",maxHeight:"30px",fontSize:"14px",marginTop:"0px!important",overflow:"hidden"},addr:{marginBottom:"2px",overflow:"hidden",height:"16px",fontSize:"13px"},line3:{height:"16px",fontSize:"12px"},money:{float:"right",color:"#ffa620"}};e.exports=p(y)},1567:function(e,t,n){"use strict";(function(e){function t(e,t){t||(t="yyyy-MM-dd hh:mm:ss");var n=e.getFullYear(),r="0"+(e.getMonth()+1);r=r.substring(r.length-2);var o="0"+e.getDate();o=o.substring(o.length-2);var a="0"+e.getHours();a=a.substring(a.length-2);var i="0"+e.getMinutes();i=i.substring(i.length-2);var s="0"+e.getSeconds();return s=s.substring(s.length-2),t.replace("yyyy",n).replace("yy",(n+"").substring(2)).replace("MM",r).replace("dd",o).replace("hh",a).replace("mm",i).replace("ss",s)}e&&(e.exports=t)}).call(t,n(175)(e))},909:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(15),p=r(l),u=n(75),d=n(981),y=r(d),h=n(165),f=r(h),m=n(983),g=r(m),v=n(272),b=r(v),_=n(283),x=n(46),T=r(x),w=n(996),E=(r(w),n(1)),F=n(1566),M=n(50),D=n(982),P=(n(164).putCache,n(164).getCache,n(1009)),S=n(17),j=function(e){function t(){var e,n,r,i;o(this,t);for(var c=arguments.length,l=Array(c),u=0;u<c;u++)l[u]=arguments[u];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={initial:0,bannerIndex:0},r.loadMore=function(){var e=r.props.cursor;r.refs.loader.bindRequest(function(){return t.loadFilteredData(r.context,r.nextPage,r.province,r.city,r.day_type).then(function(t){r.nextPage++;var n=t.data;e.select("data").concat(n.data),e.select("remain").set(n.remain)})})},r.pub_event=function(){(0,T.default)(r.props.pub_url,"发活动","fetch")},r.toggleLocsFilter=function(){var e=r.props.cursor.select("locsFilter","close").get();r.props.cursor.select("locsFilter","close").set(!e),r.props.cursor.select("dayTypeFilter","close").set(!0)},r.onSelectLoc=function(e,t){e==r.selectedLoc.province&&t==r.selectedLoc.city||(r.selectedLoc.province=e,r.selectedLoc.city=t,r.province=e>=0?r.locs[e].name:"",r.city=t>=0?r.locs[e].items[t].name:"",r.reloadJobList())},r.onCancelSelectLoc=function(){r.props.cursor.select("locsFilter","parent").set(r.selectedLoc.province),r.props.cursor.select("locsFilter","child").set(r.selectedLoc.city)},r.toggleDayTypeFilter=function(){var e=r.props.cursor.select("dayTypeFilter","close").get();r.props.cursor.select("dayTypeFilter","close").set(!e),r.props.cursor.select("locsFilter","close").set(!0)},r.onSelectedDayType=function(e){e!=r.selectedDayType.day_type&&(r.selectedDayType.day_type=e,r.day_type=e-1,r.dayTypeName=r.dayTypes[0<=e<r.dayTypes.length?e:0].name,r.reloadJobList())},r.onCancelSelectDayType=function(){r.props.cursor.select("dayTypeFilter","parent").set(r.selectedDayType.day_type)},r.reloadJobList=function(){var e=r.props,n=e.cursor,o=e.skip_banner;return setTimeout(function(){window.scrollTo(0,1==o?100:0)},100),r.nextJobPage=0,t.loadFilteredData(r.context,r.nextJobPage,r.province,r.city,r.day_type).then(function(e){r.nextJobPage++;var t=e.data;n.select("data").set(t.data),n.select("remain").set(t.remain)})},r.renderFilter=function(){var e=r.province||"";"全部城市"!=r.city&&(e+=r.city||"");var t="right highlight";e&&"全部省份"!=r.province||(e="全部城市",t+="right");var n=r.dayTypeName||"",o="left highlight";return n&&"全部时段"!=r.dayTypeName||(n="全部时段",o+="left"),E.createElement("div",null,E.createElement("div",{className:"searchFilter"},E.createElement("div",{className:t,onClick:r.toggleLocsFilter},E.createElement("span",null,e)),E.createElement("div",{className:o,onClick:r.toggleDayTypeFilter},E.createElement("span",null,n))),E.createElement(P,{cursor:r.props.cursor.select("locsFilter"),items:r.locs,onSelect:r.onSelectLoc,onCancel:r.onCancelSelectLoc}),E.createElement(P,{cursor:r.props.cursor.select("dayTypeFilter"),items:r.dayTypes,single:!0,onSelect:r.onSelectedDayType,onCancel:r.onCancelSelectDayType}))},r.renderBanner=function(){var e=r.props.banner;if(r.hasBanner()){var t=e.banner_images,n=e.banner_urls,o=r.state.banner_index%Math.min(t.length,n.length);return E.createElement("div",{className:"clearfix"},E.createElement("img",{style:{width:"100%"},src:t[o],onClick:function(){M(n[o])}}))}},r.hasBanner=function(){var e=r.props.banner;return void 0!=e&&1==e.is_banner&&void 0!=e.banner_images&&e.banner_images.length>0&&void 0!=e.banner_urls&&e.banner_urls.length>0},r.showNextBanner=function(){var e=r.state.banner_index+1;r.setState({banner_index:e})},r.pingBanner=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r.context,o=n.auth_info,a=n.fconf,i=a.online_url+"tools/v3/banner_pingback?"+p.default.stringify(s({source:e.source,sid:e.sid,condid:e.condid,act:t?1:0},o));return fetch(i)},r.renderBanner=function(){r.state.initial>0&&r.timeoutId&&clearTimeout(r.timeoutId);var e=r.props.cursor,t=e.select("banner").get();if(t&&t.length>0){var n=r.state.bannerIndex%t.length,o=t[n];return t.length>1&&r.pingBanner(o),r.state.initial>0&&o.showTime>0&&(r.timeoutId=setTimeout("showNextBanner()",1e3*o.showTime)),E.createElement("div",{className:"clearfix",style:{position:"relative"}},E.createElement("img",{style:{width:"100%"},src:o.image,onClick:function(){M(o.target)}}),1==o.close&&E.createElement("img",{src:"/static/images/jobs/icon_banner_close.png",className:"banner_close",onClick:function(){r.pingBanner(o,!0),e.select("banner").set(t.filter(function(e,t){return t!=n}))}.bind(r)}))}},i=n,a(r,i)}return i(t,e),c(t,[{key:"componentWillMount",value:function(){if("undefined"!=typeof window){this.dayTypes=["今天","明天","本周","本周末","本月"].map(function(e){return{name:e,items:[]}}),this.dayTypes.unshift({name:"全部时段",items:[]}),this.locs=_.cst.loc.map(function(e){var t=e.cities.map(function(e){return{name:e.city}});return t.unshift({name:"全部城市"}),{name:e.province,items:t}}),this.locs.unshift({name:"全部省份",items:[{name:"全部城市"}]});var e=this.props.filters||{province:"全部省份",city:"全部城市",day_type:-1};this.province=e.province,this.city=e.city,this.day_type=e.day_type;var t=this.province&&S.findIndex(this.locs,{name:this.province}),n=this.city&&(t>0?S.findIndex(this.locs[t].items,{name:this.city}):-1);t>=0?n=n>0?n:0:(t=0,n=-1);var r=this.day_type+1;this.dayTypeName=this.dayTypes[0<=r<this.dayTypes.length?r:0].name,this.selectedLoc={province:t,city:n},this.selectedDayType={day_type:r},this.props.cursor.merge({locsFilter:{parent:t,child:n,close:!0},dayTypeFilter:{parent:r,child:0,close:!0}}),console.log("componentWillMount end")}}},{key:"componentDidMount",value:function(){this.nextPage=1,window.pub_event=this.pub_event,window.showNextBanner=function(){this.setState({bannerIndex:this.state.bannerIndex+1})}.bind(this),this.setState({initial:1})}},{key:"render",value:function(){var e=this.props.cursor,t=s({},b.default);return t.top_right_item={title:"发活动",callback:"pub_event()"},E.createElement("div",{style:{paddingTop:"40px"}},E.createElement(y.default,{title:"活动"}),E.createElement(g.default,{msg_to_app:t}),this.renderFilter(),E.createElement(D,{loadMore:this.loadMore,hasMore:this.props.remain>0,loader:E.createElement(f.default,{ref:"loader",reload:this.loadMore,cursor:e.select("loading_status")})},E.createElement("div",{className:"panel panel-default"},E.createElement("ul",{className:"list-group"},this.renderBanner(),this.props.data.map(function(e){return E.createElement(F,e)})))))}}],[{key:"loadData",value:function(e,n){return t.loadFilteredData(e,n,"","","")}},{key:"loadFilteredData",value:function(e,t,n,r,o){var a=e.req,i=a.query,c=s({page:t,province:n,city:r,day_type:o,jsononly:1},i),l=a.pathname+"?"+p.default.stringify(c);return fetch(l,{credentials:"same-origin"}).then(u.parse_online_json)}}]),t}(E.Component);j.contextTypes={auth_info:E.PropTypes.object,req:E.PropTypes.object,fconf:E.PropTypes.object},t.default=e.exports=j}});