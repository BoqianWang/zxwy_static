webpackJsonp([6],{501:function(e,t,a){"use strict";function l(e){a(545)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(519),o=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);var s=a(546),n=a(134),p=l,u=n(o.a,s.a,!1,p,null,null);t.default=u.exports},519:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(135),i=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={data:function(){return{isshow:!0,loading:!0,isbtnLoading:!1,tixianlists:[],pageNo:1,pageSize:20,status:0,dialogVisible:!1,select_biztixian:"",totalPage:20,formLabelWidth:"80px",form:{appVersion:"",appName:"",terminalType:"",vLoadUrl:"",vMustUpdate:"",updateRemark:""}}},mounted:function(){this.apirequest()},methods:{apirequest:function(){var e=this;i.default.getAppByList(this.pageNo,this.pageSize).then(function(t){e.tixianlists=t.data.list,e.loading=!1,e.totalPage=t.data.total}).catch(function(t){e.loading=!1})},newApp:function(){this.dialogVisible=!0,this.isshow=!0,this.form={appVersion:"",appName:"",terminalType:"",vLoadUrl:"",vMustUpdate:"",updateRemark:""}},czClick:function(e){this.dialogVisible=!0,this.form=e,this.isshow=!1},appsure:function(){var e=this;console.log(this.form);var t=1==this.form.vMustUpdate?"1":"0";i.default.uploadApp(this.form.appName,this.form.appVersion,16,this.form.terminalType,this.form.updateRemark,t,this.form.vLoadUrl).then(function(t){e.dialogVisible=!1,e.apirequest()})},handleCurrentChange:function(e){this.pageNo=e,this.loading=!0,this.apirequest()}}}},545:function(e,t){},546:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[e._v("设置")]),e._v(" "),a("el-breadcrumb-item",[e._v("app版本")])],1),e._v(" "),a("div",{staticClass:"tixian_body"},[a("div",{staticClass:"bizcer_listTitle"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.newApp()}}},[e._v("发布新版本")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tixianlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass",border:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appVersion",label:"版本号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"appName",label:"APP应用名称"}}),e._v(" "),a("el-table-column",{attrs:{label:"终端类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.terminalType?a("p",[e._v("个人iOS")]):e._e(),e._v(" "),2==t.row.terminalType?a("p",[e._v("商户iOS")]):e._e(),e._v(" "),3==t.row.terminalType?a("p",[e._v("个人安卓")]):e._e(),e._v(" "),4==t.row.terminalType?a("p",[e._v("商户安卓")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"vLoadUrl",label:"下载路径"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否强制更新"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{model:{value:t.row.vMustUpdate,callback:function(a){e.$set(t.row,"vMustUpdate",a)},expression:"scope.row.vMustUpdate"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.czClick(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.totalPage},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"版本信息",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"版本号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.appVersion,callback:function(t){e.$set(e.form,"appVersion",t)},expression:"form.appVersion"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"APP名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.appName,callback:function(t){e.$set(e.form,"appName",t)},expression:"form.appName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"终端类型","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择终端类型"},model:{value:e.form.terminalType,callback:function(t){e.$set(e.form,"terminalType",t)},expression:"form.terminalType"}},[a("el-option",{attrs:{label:"商户安卓",value:"4"}}),e._v(" "),a("el-option",{attrs:{label:"商户iOS",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"个人版安卓",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"个人版iOS",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"链接地址","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.vLoadUrl,callback:function(t){e.$set(e.form,"vLoadUrl",t)},expression:"form.vLoadUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"强制更新","label-width":e.formLabelWidth}},[a("el-switch",{model:{value:e.form.vMustUpdate,callback:function(t){e.$set(e.form,"vMustUpdate",t)},expression:"form.vMustUpdate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"版本说明","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.updateRemark,callback:function(t){e.$set(e.form,"updateRemark",t)},expression:"form.updateRemark"}})],1)],1),e._v(" "),e.isshow?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.isbtnLoading},on:{click:function(t){e.appsure()}}},[e._v("确定")])],1):e._e()],1)],1)},i=[],o={render:l,staticRenderFns:i};t.a=o}});