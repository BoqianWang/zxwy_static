webpackJsonp([13],{

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/dataAnalysis/integralAnalysis/platformData.vue
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


/* harmony default export */ var platformData = ({
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
    // this.apirequest();
  },
  methods: {
    exportClick: function () {
      console.log('123');
      window.location.href = "http://operator.zhongxiang51.com/personalUserStatistics/downloadPlatIntegral?startDate=" + this.times[0] + "&endDate=" + this.times[1];
    },
    fenxiSearch() {
      this.apirequest();
    },
    apirequest: function () {
      this.loading = true;
      api["a" /* default */].platIntegral(this.pageNo, this.times[0], this.times[1]).then(res => {
        this.sqlists = res.data.params;
        this.loading = false;
        this.totalPage = res.data.totalPage * this.pageNo;
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-43169a6b","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/dataAnalysis/integralAnalysis/platformData.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("数据分析")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("平台积分统计")])],1),_vm._v(" "),_c('div',{staticClass:"search_div"},[_c('el-date-picker',{staticStyle:{"margin-left":"10px"},attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.fenxiSearch()}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},on:{"click":function($event){_vm.exportClick()}}},[_vm._v("导出")]),_vm._v(" "),_c('router-link',{staticStyle:{"margin-left":"50px","margin-top":"10px"},attrs:{"to":"/sqintegral"}},[_vm._v("查看商圈使用积分>>")])],1),_vm._v(" "),_c('div',{staticClass:"sqfenxi_body"},[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"prop":"countDateStr","label":"时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"dayPlatIntegralPool","label":"资金池积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"dayUsedPoolIntegral","label":"使用积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"dayRemainPoolIntegral","label":"剩余积分"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countDayOrder","label":"订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countDayRetIntegralOrder","label":"领积分订单数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"countDayNewUser","label":"新用户数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"sumDayNewUserRetIntegral","label":"新用户送积分"}})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var integralAnalysis_platformData = (esExports);
// CONCATENATED MODULE: ./src/page/dataAnalysis/integralAnalysis/platformData.vue
function injectStyle (ssrContext) {
  __webpack_require__(175)
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
  platformData,
  integralAnalysis_platformData,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var dataAnalysis_integralAnalysis_platformData = __webpack_exports__["default"] = (Component.exports);


/***/ })

});