webpackJsonp([11],{506:function(e,t,a){"use strict";function i(e){a(567)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(530),n=a.n(s);for(var l in s)"default"!==l&&function(e){a.d(t,e,function(){return s[e]})}(l);var o=a(568),r=a(134),c=i,u=r(n.a,o.a,!1,c,null,null);t.default=u.exports},530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(135),s=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{citydata:"",times:"",pageNo:1,pageSize:20,totalPage:20,loading:!1,sqlists:[],businessCode:""}},activated:function(){this.times=this.$route.query.times,this.businessCode=this.$route.query.businessCode,this.apirequest()},methods:{exportClick:function(){window.location.href="http://operator.zhongxiang51.com/bizUserStatistics/downloadBusinessTakeawayDetailExcel?startTime="+this.times[0]+"&endTime="+this.times[1]+"&businessCode="+this.businessCode},bizchangetime:function(e){this.$router.push({path:"/bizchangetime",query:{sqName:e.bussinessName,shopId:e.shopId,times:this.times,bizName:e.shopName}})},fenxiSearch:function(){this.apirequest()},apirequest:function(){var e=this;this.loading=!0,s.default.businessTakeawayDetail(this.pageNo,this.businessCode,this.times[0],this.times[1]).then(function(t){e.sqlists=t.data.list,e.loading=!1,e.totalPage=t.data.pages*e.pageSize}).catch(function(t){e.loading=!1})},onselected:function(e){console.log(e),this.citydata=e},handleCurrentChange:function(e){this.pageNo=e,this.loading=!0,this.apirequest()}}}},567:function(e,t){},568:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("数据分析")]),e._v(" "),a("el-breadcrumb-item",{nativeOn:{click:function(t){e.$router.back(-1)}}},[e._v("交易数据分析")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.query.sqName)+"商圈")])],1),e._v(" "),a("div",{staticClass:"search_div"},[a("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){e.fenxiSearch()}}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){e.exportClick()}}},[e._v("导出")])],1),e._v(" "),a("div",{staticClass:"sqfenxi_body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass",border:""}},[a("el-table-column",{attrs:{prop:"shopName",label:"商家名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNum",label:"订单数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"originalCost",label:"订单金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actualCost",label:"实际支付金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deductedCost",label:"积分抵扣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"retPlat",label:"营业收入"}}),e._v(" "),a("el-table-column",{attrs:{prop:"platSubsidy",label:"平台补贴"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.bizchangetime(t.row)}}},[e._v("店铺详情")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.totalPage},on:{"current-change":e.handleCurrentChange}})],1)],1)],1)},s=[],n={render:i,staticRenderFns:s};t.a=n}});