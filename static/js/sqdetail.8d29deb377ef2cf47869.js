webpackJsonp([10],{503:function(e,t,a){"use strict";function s(e){a(549)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(521),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var l=a(550),o=a(134),u=s,c=o(n.a,l.a,!1,u,null,null);t.default=c.exports},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(135),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){return{citydata:"",times:"",pageNo:1,pageSize:20,totalPage:20,loading:!1,sqlists:[],businessCode:""}},mounted:function(){this.times=this.$route.query.times,this.businessCode=this.$route.query.businessCode,this.apirequest()},methods:{exportClick:function(){window.location.href="http://operator.zhongxiang51.com/bizUserStatistics/downloadBusinessDataExcel?startTime="+this.times[0]+"&endTime="+this.times[1]+"&businessCode="+this.businessCode},bizoneday:function(e){var t=new Date(e.orderTime),a=1900+t.getYear(),s="0"+(t.getMonth()+1),i="0"+t.getDate(),n=a+"-"+s.substring(s.length-2,s.length)+"-"+i.substring(i.length-2,i.length);this.$router.push({path:"/bizoneday",query:{sqName:e.bussinessName,businessCode:e.bussinessCode,datatime:n}})},fenxiSearch:function(){this.apirequest()},apirequest:function(){var e=this;this.loading=!0,i.default.businessData(this.pageNo,this.businessCode,this.times[0],this.times[1]).then(function(t){e.sqlists=t.data.list,e.loading=!1,e.totalPage=t.data.pages*e.pageSize}).catch(function(t){e.loading=!1})},onselected:function(e){console.log(e),this.citydata=e},handleCurrentChange:function(e){this.pageNo=e,this.loading=!0,this.apirequest()}}}},549:function(e,t){},550:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("数据分析")]),e._v(" "),a("el-breadcrumb-item",{nativeOn:{click:function(t){e.$router.back(-1)}}},[e._v("交易数据分析")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.query.sqName)+"商圈")])],1),e._v(" "),a("div",{staticClass:"search_div"},[a("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}}),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){e.fenxiSearch()}}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){e.exportClick()}}},[e._v("导出")])],1),e._v(" "),a("div",{staticClass:"sqfenxi_body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass",border:""}},[a("el-table-column",{attrs:{prop:"orderTime",label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(new Date(parseInt(t.row.orderTime)).toLocaleDateString())+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNum",label:"订单数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"originalCost",label:"订单金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actualCost",label:"实际支付金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deductedCost",label:"积分抵扣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"retPlat",label:"营业收入"}}),e._v(" "),a("el-table-column",{attrs:{prop:"platSubsidy",label:"平台补贴"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.bizoneday(t.row)}}},[e._v("店铺详情")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.totalPage},on:{"current-change":e.handleCurrentChange}})],1)],1)],1)},i=[],n={render:s,staticRenderFns:i};t.a=n}});