webpackJsonp([1],{

/***/ 160:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/assets/css/font/iconfont.css
var iconfont = __webpack_require__(161);
var iconfont_default = /*#__PURE__*/__webpack_require__.n(iconfont);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/manage/manage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var manage = ({
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49042d8e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/manage/manage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"manage_body"},[_c('el-container',[_c('div',{staticClass:"aside",class:{iswidth:!_vm.isCollapse}},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"default-active":_vm.defaultActive,"collapse":_vm.isCollapse,"background-color":"#494D54","text-color":"#999","active-text-color":"#fff","router":""},on:{"open":_vm.handleOpen,"close":_vm.handleClose}},[_c('el-menu-item',{attrs:{"index":"manage"}},[_c('i',{staticClass:"iconfont icon-home"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("首页")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"order"}},[_c('i',{staticClass:"iconfont icon-dingdan"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("订单管理")])]),_vm._v(" "),_c('el-submenu',{attrs:{"index":"3"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"iconfont icon-sitting"}),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("设置")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"hangye"}},[_vm._v("行业列表")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"shangquan"}},[_vm._v("商圈列表")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"appupdate"}},[_vm._v("app版本")])],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"4"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"iconfont icon-sitting"}),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("审核管理")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"biztixian"}},[_vm._v("\n           提现审核\n           ")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"bizcertifi"}},[_vm._v("店铺审核")])],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"5"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"iconfont icon-sitting"}),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("数据分析")])]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"sqfenxi"}},[_vm._v("交易数据分析")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"ptfenxi"}},[_vm._v("积分数据分析")])],2)],1)],1),_vm._v(" "),_c('el-container',[_c('el-header'),_vm._v(" "),_c('el-main',[_c('keep-alive',[_c('router-view')],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var manage_manage = (esExports);
// CONCATENATED MODULE: ./src/page/manage/manage.vue
function injectStyle (ssrContext) {
  __webpack_require__(160)
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
  manage,
  manage_manage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_manage_manage = __webpack_exports__["default"] = (Component.exports);


/***/ })

});