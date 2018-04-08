webpackJsonp([2],{

/***/ 163:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/config/api.js + 1 modules
var api = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/setting/subhangye.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var subhangye = ({
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入行业抽点'));
      } else if (parseFloat(value) !== parseFloat(this.select_cd.bizRate) + parseFloat(this.select_cd.personalRate) + parseFloat(this.select_cd.platRate)) {
        console.log(parseFloat(this.select_cd.bizRate) + parseFloat(this.select_cd.personalRate) + parseFloat(this.select_cd.platRate));
        callback(new Error('平台抽点和返点不相等!'));
      } else {
        callback();
      }
    };
    return {
      list: [],
      dialogFormVisible: false,
      innerVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '80px',
      select_hy: '', //弹出行业编辑的数据
      select_cd: {
        beginSum: '',
        endSum: '',
        bizAwardRate: '',
        serviceTotalRate: '',
        bizRate: '',
        personalRate: '',
        platRate: '',
        induId: '',
        serviceRateId: ''
      },
      rules: {
        beginSum: [{ required: true, message: '请输入限制开始金额' }],
        endSum: [{ required: true, message: '请输入限制结束金额' }],
        bizAwardRate: [{ required: true, message: '请输入商家奖励' }],
        serviceTotalRate: [{ validator: validatePass2 }],
        bizRate: [{ required: true, message: '请输入商家返点' }],
        personalRate: [{ required: true, message: '请输入用户返点' }],
        platRate: [{ required: true, message: '请输入平台返点' }]
      }
    };
  },
  mounted() {
    api["a" /* default */].hangyeList(1, this.$route.query.Id).then(res => {
      this.list = res.data.lists;
    });
  },
  methods: {
    findsubClick: function (name, industroyId) {
      // this.$router.push({path:'/subhangye',query:{name:name,Id:industroyId}});
    },
    addIndustroy: function () {
      this.dialogFormVisible = true;
      this.select_hy = '';
      this.form.name = '';
    },
    surehyClick: function () {
      api["a" /* default */].editIndustry(this.select_hy.induId, this.form.name, this.$route.query.Id).then(res => {
        if (this.select_hy.induName) {
          this.select_hy.induName = this.form.name;
        } else {
          api["a" /* default */].hangyeList(1, this.$route.query.Id).then(res => {
            this.list = res.data.lists;
          });
        }

        this.dialogFormVisible = false;
      });
    },
    hyEditClick: function (hydata) {
      this.select_hy = hydata;
      this.dialogFormVisible = true;
      this.form.name = hydata.induName;
    },
    pointEditClick: function (item) {
      this.innerVisible = true;
      this.select_cd = item;
    },
    addruleClick: function () {
      this.innerVisible = true;
      this.select_cd = {
        beginSum: '',
        endSum: '',
        bizAwardRate: '',
        serviceTotalRate: '',
        bizRate: '',
        personalRate: '',
        platRate: '',
        induId: this.select_hy.induId,
        serviceRateId: ''
      };
    },
    deleteRate: function () {
      api["a" /* default */].deleteRate(this.select_cd.serviceRateId).then(res => {
        this.innerVisible = false;
        api["a" /* default */].getRate(this.select_hy.induId).then(sres => {
          this.select_hy.rateLists = sres.data;
        });
      });
    },
    submitForm(formName) {
      console.log(this.select_cd);
      this.$refs[formName].validate(valid => {
        if (valid) {
          api["a" /* default */].editRate(this.select_cd.serviceRateId, this.select_cd.induId, this.select_cd.beginSum, this.select_cd.endSum, this.select_cd.bizAwardRate, this.select_cd.serviceTotalRate, this.select_cd.bizRate, this.select_cd.platRate, this.select_cd.personalRate).then(res => {
            this.innerVisible = false;
            api["a" /* default */].getRate(this.select_hy.induId).then(sres => {
              this.select_hy.rateLists = sres.data;
            });
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b5e50e86","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/setting/subhangye.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',[_vm._v("设置管理")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("行业列表")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v(_vm._s(_vm.$route.query.name))])],1),_vm._v(" "),_c('div',{staticClass:"hy_body"},[_c('div',{staticClass:"hy_listTitle"},[_c('p',[_vm._v(_vm._s(_vm.$route.query.name)+"列表")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){_vm.addIndustroy()}}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%","margin-top":"20px"},attrs:{"data":_vm.list,"border":"","header-row-class-name":"headerClass"}},[_c('el-table-column',{attrs:{"prop":"induName","label":"行业","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"商家奖励","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"table_ul"},_vm._l((scope.row.rateLists),function(item){return _c('li',{staticClass:"table_li"},[_vm._v("\n            "+_vm._s(item.bizAwardRate)+"\n          ")])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"用户返点","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"table_ul"},_vm._l((scope.row.rateLists),function(item){return _c('li',{staticClass:"table_li"},[_vm._v("\n            "+_vm._s(item.personalRate)+"\n          ")])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"商家返点","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"table_ul"},_vm._l((scope.row.rateLists),function(item){return _c('li',{staticClass:"table_li"},[_vm._v("\n            "+_vm._s(item.bizRate)+"\n          ")])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"平台返点","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"table_ul"},_vm._l((scope.row.rateLists),function(item){return _c('li',{staticClass:"table_li"},[_vm._v("\n            "+_vm._s(item.platRate)+"\n          ")])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"限制金额","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"table_ul"},_vm._l((scope.row.rateLists),function(item){return _c('li',{staticClass:"table_li"},[_vm._v("\n            "+_vm._s(item.beginSum)+" - "+_vm._s(item.endSum)+"\n          ")])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.hyEditClick(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.findsubClick(scope.row.induName,scope.row.induId)}}},[_vm._v("查看")])]}}])})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"行业编辑","visible":_vm.dialogFormVisible,"width":"700px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.form}},[_c('el-form-item',{attrs:{"label":"行业名称","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.select_hy.induId),expression:"select_hy.induId"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.addruleClick()}}},[_vm._v("新增规则")])],1),_vm._v(" "),_vm._l((_vm.select_hy.rateLists),function(item){return _c('div',{staticStyle:{"margin-bottom":"15px"}},[_c('el-row',{attrs:{"gutter":10}},[_c('el-col',{attrs:{"span":5}},[_c('div',{staticClass:"sub-title"},[_vm._v("限制金额(￥)")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.beginSum)+" - "+_vm._s(item.endSum))])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"sub-title"},[_vm._v("商家奖励")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.bizAwardRate)+"%")])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"sub-title"},[_vm._v("行业抽点")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.serviceTotalRate)+"%")])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"sub-title"},[_vm._v("商家返点")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.bizRate)+"%")])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"sub-title"},[_vm._v("用户返点")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.personalRate)+"%")])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('div',{staticClass:"sub-title"},[_vm._v("平台返点")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.platRate)+"%")])]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-button',{staticStyle:{"margin-top":"10px"},attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.pointEditClick(item)}}},[_vm._v("编辑")])],1)],1)],1)})],2),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.surehyClick()}}},[_vm._v("确 定")])],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"30%","title":"限制编辑","visible":_vm.innerVisible,"append-to-body":""},on:{"update:visible":function($event){_vm.innerVisible=$event}}},[_c('el-form',{ref:"cdForm",attrs:{"label-position":"left","label-width":"80px","model":_vm.select_cd,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"起始金额","prop":"beginSum"}},[_c('el-input',{model:{value:(_vm.select_cd.beginSum),callback:function ($$v) {_vm.$set(_vm.select_cd, "beginSum", $$v)},expression:"select_cd.beginSum"}},[_c('template',{slot:"prepend"},[_vm._v("￥")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"结束金额","prop":"endSum"}},[_c('el-input',{model:{value:(_vm.select_cd.endSum),callback:function ($$v) {_vm.$set(_vm.select_cd, "endSum", $$v)},expression:"select_cd.endSum"}},[_c('template',{slot:"prepend"},[_vm._v("￥")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商家奖励","prop":"bizAwardRate"}},[_c('el-input',{model:{value:(_vm.select_cd.bizAwardRate),callback:function ($$v) {_vm.$set(_vm.select_cd, "bizAwardRate", $$v)},expression:"select_cd.bizAwardRate"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"行业抽点","prop":"serviceTotalRate"}},[_c('el-input',{model:{value:(_vm.select_cd.serviceTotalRate),callback:function ($$v) {_vm.$set(_vm.select_cd, "serviceTotalRate", $$v)},expression:"select_cd.serviceTotalRate"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商家返点","prop":"bizRate"}},[_c('el-input',{model:{value:(_vm.select_cd.bizRate),callback:function ($$v) {_vm.$set(_vm.select_cd, "bizRate", $$v)},expression:"select_cd.bizRate"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户返点","prop":"personalRate"}},[_c('el-input',{model:{value:(_vm.select_cd.personalRate),callback:function ($$v) {_vm.$set(_vm.select_cd, "personalRate", $$v)},expression:"select_cd.personalRate"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"平台返点","prop":"platRate"}},[_c('el-input',{model:{value:(_vm.select_cd.platRate),callback:function ($$v) {_vm.$set(_vm.select_cd, "platRate", $$v)},expression:"select_cd.platRate"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(this.select_cd.serviceRateId),expression:"this.select_cd.serviceRateId"}],attrs:{"type":"warning"},on:{"click":function($event){_vm.deleteRate()}}},[_vm._v("删除")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('cdForm')}}},[_vm._v("确定")])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var setting_subhangye = (esExports);
// CONCATENATED MODULE: ./src/page/setting/subhangye.vue
function injectStyle (ssrContext) {
  __webpack_require__(163)
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
  subhangye,
  setting_subhangye,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_setting_subhangye = __webpack_exports__["default"] = (Component.exports);


/***/ })

});