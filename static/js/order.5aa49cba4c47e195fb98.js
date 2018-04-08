webpackJsonp([4],{

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/order/orderhome.vue
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
//
//
//
//
//


/* harmony default export */ var orderhome = ({
  data() {
    return {
      loading: false,
      sqlists: [],
      pageNo: 1,
      pageSize: 20,
      status: 0,
      dialogVisible: false,
      select_shangquan: {
        districtName: '',
        id: '',
        levels: ''
      },
      totalPage: 20,
      citydata: '',
      times: ''
    };
  },
  mounted() {
    // this.apirequest();
  },
  methods: {
    onselected(data) {
      console.log(data);
      this.citydata = data;
    },
    timepick: function () {
      console.log(this.times);
      this.apirequest();
    },
    apirequest: function () {
      this.loading = true;
      api["a" /* default */].orderlist(this.times[0], this.times[1], this.pageNo).then(res => {
        this.sqlists = res.data.lists;
        this.loading = false;
        this.totalPage = res.data.totalPage * this.pageSize;
      }).catch(error => {
        this.loading = false;
      });
    },
    czClick: function (item) {
      this.select_shangquan = item;
      this.dialogVisible = true;
    },
    tixiansure: function (wdId, status) {
      api["a" /* default */].bizWithDrawal(wdId, status).then(res => {
        this.dialogVisible = false;
        this.apirequest();
      });
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    },
    addShangquan: function () {
      if (this.citydata == '') {
        this.$message.error('请填写省市区');
        return;
      }
      this.select_shangquan.districtName = '';
      this.select_shangquan.id = '';
      this.select_shangquan.levels = '';
      this.dialogVisible = true;
    },
    updataClick: function () {
      api["a" /* default */].updateshangquan(this.select_shangquan.districtName, this.citydata.area.code, this.select_shangquan.levels, this.select_shangquan.id).then(res => {
        this.dialogVisible = false;
        this.apirequest();
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ce7d184","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/order/orderhome.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("系统设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("商圈设置")])],1),_vm._v(" "),_c('div',{staticClass:"search_div"},[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}})],1),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"20px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.timepick()}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('div',{staticClass:"tixian_body"},[_vm._m(0,false,false),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.sqlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderNo","label":"订单编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shopName","label":"店铺名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderTypeStr","label":"订单类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"orderTime","label":"下单时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"originalCost","label":"订单原价"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"actualCost","label":"用户实付"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"bizRealIncome","label":"商家实收"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.czClick(scope.row)}}},[_vm._v("操作")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bizcer_listTitle"},[_c('p',[_vm._v("订单列表")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var order_orderhome = (esExports);
// CONCATENATED MODULE: ./src/page/order/orderhome.vue
function injectStyle (ssrContext) {
  __webpack_require__(161)
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
  orderhome,
  order_orderhome,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_order_orderhome = __webpack_exports__["default"] = (Component.exports);


/***/ })

});