import login from '../page/loginView/login.vue'
// import manage from '../page/manage/manage.vue'

// import manage from '../page/manage/manage'
// import home from '../page/home/home'
// import order from '../page/order/orderhome'
// import hangye from '../page/setting/hangye'
// import subhangye from '../page/setting/subhangye'
// import bizcertifi from '../page/bizmanage/bizcertification'
// import biztixian from '../page/bizcaiwu/biztixianlist'
// import shangquan from '../page/setting/shangquan'
// import appupdate from '../page/setting/appupdate'
// import sqfenxi from '../page/dataAnalysis/transaction/sqfenxi'
// import sqdetail from '../page/dataAnalysis/transaction/sqDetail'
// import bizoneday from '../page/dataAnalysis/transaction/bizOneDay'
// import sqbiztime from '../page/dataAnalysis/transaction/sqbiztime'
// import bizchangetime from '../page/dataAnalysis/transaction/bizchangetime'
// import ptfenxi from '../page/dataAnalysis/integralAnalysis/platformData'
// import sqintegral from '../page/dataAnalysis/integralAnalysis/sqintegral'
// import bizintegral from '../page/dataAnalysis/integralAnalysis/bizintegral'

const manage = r => require.ensure([], () => r(require('../page/manage/manage')), 'manage');
const home = r => require.ensure([],()=>r(require('../page/home/home')),'home');
const order = r => require.ensure([],()=>r(require('../page/order/orderhome')),'order');
const hangye = r => require.ensure([],()=>r(require('../page/setting/hangye')),'hangye');
const subhangye = r => require.ensure([],()=>r(require('../page/setting/subhangye')),'subhangye');
const hangye_biz = r => require.ensure([],()=>r(require('../page/setting/hangye_biz')),'hangye_biz');
//商家二维码
const shopCode = r => require.ensure([],()=>r(require('../page/setting/shopCode')),'hangye_biz');
const bizcertifi = r => require.ensure([],()=>r(require('../page/bizmanage/bizcertification')),'bizcertifi');
const biztixian = r => require.ensure([],()=>r(require('../page/bizcaiwu/biztixianlist')),'biztixian');
const shangquan = r => require.ensure([],()=>r(require('../page/setting/shangquan')),'shangquan');
const appupdate = r => require.ensure([],()=>r(require('../page/setting/appupdate')),'appupdate');
const sqfenxi = r => require.ensure([],()=>r(require('../page/dataAnalysis/transaction/sqfenxi')),'sqfenxi');
const sqdetail = r => require.ensure([],()=>r(require('../page/dataAnalysis/transaction/sqDetail')),'sqdetail');
const bizoneday = r => require.ensure([],()=>r(require('../page/dataAnalysis/transaction/bizOneDay')),'bizoneday');
const sqbiztime = r => require.ensure([],()=>r(require('../page/dataAnalysis/transaction/sqbiztime')),'sqbiztime');
const bizchangetime = r => require.ensure([],()=>r(require('../page/dataAnalysis/transaction/bizchangetime')),'bizchangetime');
const ptfenxi = r => require.ensure([],()=>r(require('../page/dataAnalysis/integralAnalysis/platformData')),'ptfenxi');
const sqintegral = r => require.ensure([],()=>r(require('../page/dataAnalysis/integralAnalysis/sqintegral')),'sqintegral');
const bizintegral = r => require.ensure([],()=>r(require('../page/dataAnalysis/integralAnalysis/bizintegral')),'bizintegral');
const aclist = r => require.ensure([],()=>r(require('../page/activity/acList')),'aclist');
const addfullgift = r => require.ensure([],()=>r(require('../page/activity/addFullGift')),'addfullgift');
const orderfenxi = r => require.ensure([],()=>r(require('../page/dataAnalysis/orderAnalysis/orderanalysis')),'orderfenxi');
const bizlist = r => require.ensure([],()=>r(require('../page/bizmanage/bizList.vue')),'bizlist');
const bizdetail = r => require.ensure([],()=>r(require('../page/bizmanage/bizDetail.vue')),'bizdetail');
//店铺详情审核
const shopAudit = r => require.ensure([],()=>r(require('../page/bizmanage/shopAudit.vue')),'shopAudit');
//业务员页面
const salesMan = r => require.ensure([],()=>r(require('../page/salesman/salesMan.vue')),'salesMan');
//达达账号
const accountList = r => require.ensure([],()=>r(require('../page/dada/accountList.vue')),'accountList');
//
const takeoutOrder = r => require.ensure([],()=>r(require('../page/order/takeoutOrder.vue')),'takeoutOrder');
const takeoutOrderDetail = r => require.ensure([],()=>r(require('../page/order/takeoutOrderDetail.vue')),'takeoutOrderDetail');

const dadaTips = r => require.ensure([],()=>r(require('../page/dada/dadaTips.vue')),'dadaTips');



// 旅游模块begin

const productlist = r => require.ensure([],()=>r(require('../page/lvyou/productList.vue')),'productlist');

const editproduct = r => require.ensure([],()=>r(require('../page/lvyou/editProduct.vue')),'editproduct');

const lyorderlist = r => require.ensure([],()=>r(require('../page/lvyou/lvyouOrder.vue')),'lyorderlist');

const huiyuanlist = r => require.ensure([],()=>r(require('../page/lvyou/huiyuanList.vue')),'huiyuanList');

const lvmmlist = r => require.ensure([],()=>r(require('../page/lvyou/lvmamaProductList.vue')),'lvmmlist');

// 旅游模块end

export default{
  routes:[
  {
    path:'/',
    component:login
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/manage',
    component:manage,
    children:[{
      path:'',
      component:home
    },{
      path:'order',
      component:order
    },
    {
      path:'hangye',
      component:hangye
    },
    {
      path:'subhangye',
      component:subhangye
    },
    {
      path:'hangye_biz',
      component:hangye_biz
    },
    {
      path:'bizcertifi',
      component:bizcertifi
    },
    {
      path:'biztixian',
      component:biztixian
    },
    {
      path:'shangquan',
      component:shangquan
    },{
      path:'appupdate',
      component:appupdate
    },{
      path:'sqfenxi',
      component:sqfenxi
    },{
      path:'sqdetail',
      component:sqdetail
    },{
      path:'bizoneday',
      component:bizoneday
    },{
      path:'sqbiztime',
      component:sqbiztime
    },{
      path:'bizchangetime',
      component:bizchangetime
    },{
      path:'ptfenxi',
      component:ptfenxi
    },{
      path:'sqintegral',
      component:sqintegral
    },{
      path:'bizintegral',
      component:bizintegral
    },{
      path:'aclist',
      component:aclist
    },{
      path:'addfullgift',
      component:addfullgift
    },{
      path:'orderfenxi',
      component:orderfenxi
    },{
      path:'bizlist',
      component:bizlist
    },{
      path:'bizdetail',
      component:bizdetail
    },
    {
      path: 'shopAudit',
      component: shopAudit
    },
    {
      path: 'shopCode',
      component: shopCode,
      meta: {
        title: '商家二维码'
      }
    },
    {
      path: 'salesMan',
      component: salesMan,
      meta: {
        title: '业务员管理'
      }
    },
    {
      path: 'accountList',
      component: accountList,
      meta: {
        title: '达达账号列表'
      }
    },
    {
      path: 'takeoutOrder',
      component: takeoutOrder,
      meta: {
        title: '外卖订单监控'
      }
    },
    {
      path: 'takeoutOrderDetail',
      component: takeoutOrderDetail,
      meta: {
        title: '外卖店铺详情'
      }
    },
    {
      path: 'dadaTips',
      component: dadaTips,
      meta: {
        title: '达达小费设置'
      }
    },
    // 旅游模块 begin
    {
      path: 'productlist',
      component: productlist,
      meta: {
        title: '旅游产品库'
      }
    },
    {
      path: 'editproduct',
      component: editproduct,
      meta: {
        title: '编辑产品'
      }
    },
    {
      path: 'lyorderlist',
      component: lyorderlist,
      meta: {
        title: '旅游订单管理'
      }
    },
    {
      path: 'huiyuanlist',
      component: huiyuanlist,
      meta: {
        title: '会员管理'
      }
    },
    {
      path: 'lvmmlist',
      component: lvmmlist,
      meta: {
        title: '驴妈妈商品管理'
      }
    }
    // 旅游模块 end
    ]
  }]
}
