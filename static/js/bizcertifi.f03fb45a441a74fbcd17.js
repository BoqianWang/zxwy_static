webpackJsonp([7],{

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/bizmanage/bizcertification.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var bizcertification = ({
  data() {
    return {
      radio5: '待审核',
      loading: true,
      cerlists: [],
      pageNo: 1,
      pageSize: 20,
      status: 0,
      dialogFormVisible: false,
      select_bizcer: '',
      form: {
        region: ''
      },
      totalPage: 20
    };
  },
  mounted() {
    this.apirequest();
  },
  methods: {
    apirequest: function () {
      api["a" /* default */].bizcerList(this.pageNo, this.pageSize, this.status).then(res => {
        this.cerlists = res.data.list;
        this.loading = false;
        this.totalPage = res.data.total;
      }).catch(error => {
        this.loading = false;
      });
    },
    changeListClick: function (status) {
      this.status = status;
      if (this.loading == true) {
        return;
      }
      this.loading = true;
      this.apirequest();
    },
    czClick: function (item) {
      api["a" /* default */].bizcerDetail(item.shopAuthenticateId).then(res => {
        this.select_bizcer = res.data;
        this.dialogFormVisible = true;
      });
    },
    surecerClick: function (cerId) {
      if (this.form.region == '') {
        alert("请选择审核状态");
        return;
      }

      api["a" /* default */].editbizcer(this.form.region, cerId).then(res => {
        this.dialogFormVisible = false;
      });
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-299b5cf0","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/bizmanage/bizcertification.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("审核管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("店铺审核")])],1),_vm._v(" "),_c('div',{staticClass:"bizcer_body"},[_c('div',{staticClass:"bizcer_listTitle"},[_c('p',[_vm._v("资料列表")]),_vm._v(" "),_c('el-radio-group',{attrs:{"size":"small"},model:{value:(_vm.radio5),callback:function ($$v) {_vm.radio5=$$v},expression:"radio5"}},[_c('el-radio-button',{attrs:{"label":"待审核"},nativeOn:{"click":function($event){_vm.changeListClick(0)}}}),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"审核未通过"},nativeOn:{"click":function($event){_vm.changeListClick(2)}}}),_vm._v(" "),_c('el-radio-button',{attrs:{"label":"审核已通过"},nativeOn:{"click":function($event){_vm.changeListClick(1)}}})],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.cerlists,"tooltip-effect":"dark","header-row-class-name":"headerClass","max-height":"600","border":""}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"bizUserName","label":"账号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shopName","label":"店铺名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"legalPerson","label":"法人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shopStreet","label":"店铺地址"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"applyTime","label":"申请时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"checkStatus","label":"审核状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.czClick(scope.row)}}},[_vm._v("操作")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"审核资料","visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form',{attrs:{"size":"mini","label-width":"80px","model":_vm.select_bizcer}},[_c('el-form-item',{attrs:{"label":"店铺名称"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.shopName),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "shopName", $$v)},expression:"select_bizcer.shopName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"账号"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.bizUserName),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "bizUserName", $$v)},expression:"select_bizcer.bizUserName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"法人"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.legalPerson),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "legalPerson", $$v)},expression:"select_bizcer.legalPerson"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"店铺地址"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.shopStreet),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "shopStreet", $$v)},expression:"select_bizcer.shopStreet"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"申请时间"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.applyTime),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "applyTime", $$v)},expression:"select_bizcer.applyTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"行业"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.induName),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "induName", $$v)},expression:"select_bizcer.induName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"店铺类型"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.classifyName),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "classifyName", $$v)},expression:"select_bizcer.classifyName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商圈"}},[_c('el-input',{attrs:{"auto-complete":"off","disabled":true},model:{value:(_vm.select_bizcer.districtName),callback:function ($$v) {_vm.$set(_vm.select_bizcer, "districtName", $$v)},expression:"select_bizcer.districtName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[(_vm.select_bizcer.checkStatus==0)?_c('el-input',{attrs:{"value":"未审核","auto-complete":"off","disabled":true}}):(_vm.select_bizcer.checkStatus==1)?_c('el-input',{attrs:{"value":"审核通过","auto-complete":"off","disabled":true}}):(_vm.select_bizcer.checkStatus==2)?_c('el-input',{attrs:{"value":"资料未通过","auto-complete":"off","disabled":true}}):(_vm.select_bizcer.checkStatus==3)?_c('el-input',{attrs:{"value":"图片未通过","auto-complete":"off","disabled":true}}):_vm._e()],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"cer_img_div"},[_c('p',[_vm._v("营业执照")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.select_bizcer.businessLicense,"alt":""}}),_vm._v(" "),_c('p',[_vm._v("餐饮许可证")]),_vm._v(" "),_c('img',{attrs:{"src":_vm.select_bizcer.cateringLicence,"alt":""}}),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"margin-top":"30px"},attrs:{"model":_vm.form}},[_c('el-form-item',{attrs:{"label":"审核操作"}},[_c('el-select',{attrs:{"placeholder":"请选择审核状态"},model:{value:(_vm.form.region),callback:function ($$v) {_vm.$set(_vm.form, "region", $$v)},expression:"form.region"}},[_c('el-option',{attrs:{"label":"资料审核失败","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"图片审核失败","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"审核成功","value":"1"}})],1)],1)],1)],1)])],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.surecerClick(_vm.select_bizcer.shopAuthenticateId)}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var bizmanage_bizcertification = (esExports);
// CONCATENATED MODULE: ./src/page/bizmanage/bizcertification.vue
function injectStyle (ssrContext) {
  __webpack_require__(165)
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
  bizcertification,
  bizmanage_bizcertification,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_bizmanage_bizcertification = __webpack_exports__["default"] = (Component.exports);


/***/ })

});