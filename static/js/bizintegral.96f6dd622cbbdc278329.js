webpackJsonp([14],{

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/dataAnalysis/integralAnalysis/bizintegral.vue
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


/* harmony default export */ var bizintegral = ({
  data() {
    return {
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
    this.businessCode = this.$route.query.businessCode;
    this.times = this.$route.query.times;
    this.apirequest();
  },
  methods: {
    exportClick: function () {
      console.log('123');
      window.location.href = "http://operator.zhongxiang51.com/personalUserStatistics/downloadBizIntegral?startDate=" + this.times[0] + "&endDate=" + this.times[1] + "&businessCode=" + this.businessCode;
    },
    fenxiSearch() {
      this.apirequest();
    },
    apirequest: function () {
      this.loading = true;
      api["a" /* default */].bizIntegral(this.pageNo, this.businessCode, this.times[0], this.times[1]).then(res => {
        this.sqlists = res.data.params;
        this.loading = false;
        this.totalPage = res.data.totalPage * 20;
      }).catch(error => {
        this.loading = false;
      });
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ff2367a2","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/dataAnalysis/integralAnalysis/bizintegral.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("积分数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',{nativeOn:{"click":function($event){_vm.$router.back(-1)}}},[_vm._v("商圈积分数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.$route.query.sqName)+"商圈")])],1),_vm._v(" "),_c('div',{staticClass:"search_div"},[_c('el-date-picker',{staticStyle:{"margin-left":"10px"},attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.fenxiSearch()}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},on:{"click":function($event){_vm.exportClick()}}},[_vm._v("导出")])],1),_vm._v(" "),_c('div',{staticClass:"sqfenxi_body"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"prop":"shopName","label":"店铺名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"deductedMoney","label":"使用积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countOrder","label":"订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countRetIntegralOrder","label":"领积分订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countNewUser","label":"新用户数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sumNewUserRetIntegral","label":"新用户赠送积分"}})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var integralAnalysis_bizintegral = (esExports);
// CONCATENATED MODULE: ./src/page/dataAnalysis/integralAnalysis/bizintegral.vue
function injectStyle (ssrContext) {
  __webpack_require__(177)
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
  bizintegral,
  integralAnalysis_bizintegral,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var dataAnalysis_integralAnalysis_bizintegral = __webpack_exports__["default"] = (Component.exports);


/***/ })

});