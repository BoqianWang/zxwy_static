webpackJsonp([15],{507:function(t,e,a){"use strict";function l(t){a(563)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(528),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var o=a(564),s=a(134),c=l,u=s(r.a,o.a,!1,c,null,null);e.default=u.exports},528:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(135),n=function(t){return t&&t.__esModule?t:{default:t}}(l);e.default={data:function(){return{citydata:"",times:"",pageNo:1,pageSize:20,totalPage:20,loading:!1,sqlists:[],businessCode:""}},mounted:function(){this.apirequest()},methods:{exportClick:function(){console.log("123"),window.location.href="http://operator.zhongxiang51.com/personalUserStatistics/downloadPlatIntegral?startDate="+this.times[0]+"&endDate="+this.times[1]},fenxiSearch:function(){this.apirequest()},apirequest:function(){var t=this;this.loading=!0,n.default.platIntegral(this.pageNo,this.times[0],this.times[1]).then(function(e){t.sqlists=e.data.params,t.loading=!1,t.totalPage=e.data.totalPage*t.pageNo}).catch(function(e){t.loading=!1})},onselected:function(t){console.log(t),this.citydata=t},handleCurrentChange:function(t){this.pageNo=t,this.loading=!0,this.apirequest()}}}},563:function(t,e){},564:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("数据分析")]),t._v(" "),a("el-breadcrumb-item",[t._v("平台积分统计")])],1),t._v(" "),a("div",{staticClass:"search_div"},[a("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.times,callback:function(e){t.times=e},expression:"times"}}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){t.fenxiSearch()}}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){t.exportClick()}}},[t._v("导出")]),t._v(" "),a("router-link",{staticStyle:{"margin-left":"50px","margin-top":"10px"},attrs:{to:"/sqintegral"}},[t._v("查看商圈使用积分>>")])],1),t._v(" "),a("div",{staticClass:"sqfenxi_body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass",border:""}},[a("el-table-column",{attrs:{prop:"countDateStr",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dayPlatIntegralPool",label:"资金池积分"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dayUsedPoolIntegral",label:"使用积分"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dayRemainPoolIntegral",label:"剩余积分"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countDayOrder",label:"订单数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countDayRetIntegralOrder",label:"领积分订单数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"countDayNewUser",label:"新用户数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sumDayNewUserRetIntegral",label:"新用户送积分"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":t.pageSize,total:t.totalPage},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},n=[],r={render:l,staticRenderFns:n};e.a=r}});