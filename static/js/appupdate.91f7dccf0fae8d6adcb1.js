webpackJsonp([4],{

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/setting/appupdate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var appupdate = ({
  data() {
    return {
      loading: true,
      isbtnLoading: false,
      tixianlists: [],
      pageNo: 1,
      pageSize: 20,
      status: 0,
      dialogVisible: false,
      select_biztixian: '',
      totalPage: 20,
      formLabelWidth: '80px',
      form: {
        appVersion: '',
        appName: '',
        terminalType: '',
        vLoadUrl: '',
        vMustUpdate: '',
        updateRemark: ''
        // file:''
      }
    };
  },
  mounted() {
    this.apirequest();
  },
  methods: {
    // getFile(event) {
    //         this.form.file = event.target.files[0];
    //       },
    apirequest: function () {
      api["a" /* default */].getAppByList(this.pageNo, this.pageSize).then(res => {
        this.tixianlists = res.data.list;
        this.loading = false;
        this.totalPage = res.data.total;
      }).catch(error => {
        this.loading = false;
      });
    },
    newApp: function () {
      this.dialogVisible = true;
    },
    czClick: function (item) {
      this.dialogVisible = true;
    },
    appsure: function () {
      console.log(this.form);
      // console.log('111--'+this.$refs.upfile.value);
      var vMustUpdate = this.form.vMustUpdate == true ? "1" : "0";
      api["a" /* default */].uploadApp(this.form.appName, this.form.appVersion, 16, this.form.terminalType, this.form.updateRemark, vMustUpdate, this.form.vLoadUrl).then(res => {
        this.dialogVisible = false;
        this.apirequest();
      });
      //   let formData = new FormData();
      //         formData.append('appName', this.form.appName);
      //         formData.append('appVersion', this.form.appVersion);
      //         formData.append('appSize', '16');
      //         formData.append('terminalType', this.form.terminalType);
      //         formData.append('updateRemark', this.form.updateRemark);
      //         formData.append('vMustUpdate', this.form.vMustUpdate);
      //         formData.append('appFile', this.form.file);
      //   const instance=this.$http.create({
      //   withCredentials: true,
      //   headers: {'token':localStorage.token}
      // })
      // this.isbtnLoading = true;
      //   instance.post('version/uploadAPP',formData)
      //   .then(res=>{
      //     this.isbtnLoading = false;
      //     console.log(res.data);
      //     if(res.data.code==0){
      //       this.dialogVisible = false;
      //     }
      //   })
      //   .catch(error=>{
      //     this.isbtnLoading = false;
      //   })
    },
    handleCurrentChange: function (currentPage) {
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a4fcb6ec","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/setting/appupdate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("设置")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("app版本")])],1),_vm._v(" "),_c('div',{staticClass:"tixian_body"},[_c('div',{staticClass:"bizcer_listTitle"},[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){_vm.newApp()}}},[_vm._v("发布新版本")])],1),_vm._v(" "),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"multipleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tixianlists,"tooltip-effect":"dark","max-height":"600","header-row-class-name":"headerClass","border":""}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"appVersion","label":"版本号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"appName","label":"APP应用名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"终端类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.terminalType==1)?_c('p',[_vm._v("个人iOS")]):_vm._e(),_vm._v(" "),(scope.row.terminalType==2)?_c('p',[_vm._v("商户iOS")]):_vm._e(),_vm._v(" "),(scope.row.terminalType==3)?_c('p',[_vm._v("个人安卓")]):_vm._e(),_vm._v(" "),(scope.row.terminalType==4)?_c('p',[_vm._v("商户安卓")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"vLoadUrl","label":"下载路径"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否强制更新"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-switch',{model:{value:(scope.row.vMustUpdate),callback:function ($$v) {_vm.$set(scope.row, "vMustUpdate", $$v)},expression:"scope.row.vMustUpdate"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.czClick(scope.row)}}},[_vm._v("查看")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"layout":"prev, pager, next","page-size":_vm.pageSize,"total":_vm.totalPage},on:{"current-change":_vm.handleCurrentChange}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"版本信息","visible":_vm.dialogVisible,"width":"30%"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.form}},[_c('el-form-item',{attrs:{"label":"版本号","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.form.appVersion),callback:function ($$v) {_vm.$set(_vm.form, "appVersion", $$v)},expression:"form.appVersion"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"APP名称","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.form.appName),callback:function ($$v) {_vm.$set(_vm.form, "appName", $$v)},expression:"form.appName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"终端类型","label-width":_vm.formLabelWidth}},[_c('el-select',{attrs:{"placeholder":"请选择终端类型"},model:{value:(_vm.form.terminalType),callback:function ($$v) {_vm.$set(_vm.form, "terminalType", $$v)},expression:"form.terminalType"}},[_c('el-option',{attrs:{"label":"商户安卓","value":"4"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"商户iOS","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"个人版安卓","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"个人版iOS","value":"1"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"链接地址","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.form.vLoadUrl),callback:function ($$v) {_vm.$set(_vm.form, "vLoadUrl", $$v)},expression:"form.vLoadUrl"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"强制更新","label-width":_vm.formLabelWidth}},[_c('el-switch',{model:{value:(_vm.form.vMustUpdate),callback:function ($$v) {_vm.$set(_vm.form, "vMustUpdate", $$v)},expression:"form.vMustUpdate"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"版本说明","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.form.updateRemark),callback:function ($$v) {_vm.$set(_vm.form, "updateRemark", $$v)},expression:"form.updateRemark"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary","loading":_vm.isbtnLoading},on:{"click":function($event){_vm.appsure()}}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setting_appupdate = (esExports);
// CONCATENATED MODULE: ./src/page/setting/appupdate.vue
function injectStyle (ssrContext) {
  __webpack_require__(169)
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
  appupdate,
  setting_appupdate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_setting_appupdate = __webpack_exports__["default"] = (Component.exports);


/***/ })

});