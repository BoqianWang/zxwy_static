webpackJsonp([10],{

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/dataAnalysis/transaction/sqDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var sqDetail = ({
  data() {
    return {
      citydata: '',
      times: '',
      pageNo: 1,
      pageSize: 20,
      totalPage: 20,
      loading: false,
      sqlists: [],
      businessCode: ''
    };
  },
  mounted() {
    this.times = this.$route.query.times;
    this.businessCode = this.$route.query.businessCode;
    this.apirequest();
  },
  methods: {
    exportClick: function () {
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadBusinessDataExcel?startTime=" + this.times[0] + "&endTime=" + this.times[1] + "&businessCode=" + this.businessCode;
    },
    bizoneday: function (item) {
      var date = new Date(item.orderTime);
      var y = 1900 + date.getYear();
      var m = "0" + (date.getMonth() + 1);
      var d = "0" + date.getDate();
      var datatime = y + "-" + m.substring(m.length - 2, m.length) + "-" + d.substring(d.length - 2, d.length);
      this.$router.push({ path: '/bizoneday', query: { sqName: item.bussinessName, businessCode: item.bussinessCode, datatime: datatime } });
    },
    fenxiSearch() {
      this.apirequest();
    },
    apirequest: function () {
      this.loading = true;
      api["a" /* default */].businessData(this.pageNo, this.businessCode, this.times[0], this.times[1]).then(res => {
        this.sqlists = res.data.list;
        this.loading = false;
        this.totalPage = res.data.pages * this.pageSize;
      }).catch(error => {
        this.loading = false;
      });
    },
    onselected(data) {
      console.log(data);
      this.citydata = data;
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-40b1b9a7","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/dataAnalysis/transaction/sqDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',{nativeOn:{"click":function($event){_vm.$router.back(-1)}}},[_vm._v("交易数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(this.$route.query.sqName)+"商圈")])],1),_vm._v(" "),_c('div',{staticClass:"search_div"},[_c('el-date-picker',{staticStyle:{"margin-left":"10px"},attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.fenxiSearch()}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},on:{"click":function($event){_vm.exportClick()}}},[_vm._v("导出")])],1),_vm._v(" "),_c('div',{staticClass:"sqfenxi_body"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"prop":"orderTime","label":"时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n          "+_vm._s(new Date(parseInt(scope.row.orderTime)).toLocaleDateString())+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderNum","label":"订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"originalCost","label":"订单金额"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"actualCost","label":"实际支付金额"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"deductedCost","label":"积分抵扣"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"retPlat","label":"营业收入"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"platSubsidy","label":"平台补贴"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.bizoneday(scope.row)}}},[_vm._v("店铺详情")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var transaction_sqDetail = (esExports);
// CONCATENATED MODULE: ./src/page/dataAnalysis/transaction/sqDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__(171)
}
var normalizeComponent = __webpack_require__(43)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  sqDetail,
  transaction_sqDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var dataAnalysis_transaction_sqDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});