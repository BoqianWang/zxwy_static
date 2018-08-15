import fetch from './fetch'

export default{


    /**
     * 用户登录
     */
     telLogin:function(username,password){
        return fetch.fetchPost('sysAccount/login', {username:username,sysPassword:password});
    },
  /**
   * 首页统计头部
   */
    indexTotalTop(){
      return fetch.fetchPost('operatorStatistics/indexTotalTop');
    },
    /**
     * 首页待办统计
     */
      indexUntreatedList(){
        return fetch.fetchPost('operatorStatistics/indexUntreatedList');
      },
    /**
     * 首页统计店铺和用户数据
     */
      indexTakeawayPersonalList(){
        return fetch.fetchPost('operatorStatistics/indexTakeawayPersonalList');
      },

    /**
     * 行业列表
     */
     hangyeList:function(pageNo,induLevel,parentId){
       return fetch.fetchPost('industryManage/list',{pageNo:pageNo,induLevel:induLevel,parentId:parentId});
     },
     /**
      *编辑抽点
      */
    editRate:function(serviceRateId,induId,beginSum,endSum,bizAwardRate,serviceTotalRate,bizRate,platRate,personalRate){
      return fetch.fetchPost('industryServiceRateManage/saveOrUpdateOrDelete',{
        serviceRateId:serviceRateId,
        induId:induId,
        beginSum:beginSum,
        endSum:endSum,
        bizAwardRate:bizAwardRate,
        serviceTotalRate:serviceTotalRate,
        bizRate:bizRate,
        platRate:platRate,
        personalRate:personalRate
      });
    },
    /**
     * 删除抽点
     */
    deleteRate:function(serviceRateId){
      return fetch.fetchPost('industryServiceRateManage/saveOrUpdateOrDelete',{serviceRateId:serviceRateId,dealType:1});
    },
    /**
     * 查询行业抽点列表
     */
    getRate:function(induId){
      return fetch.fetchGet('industryServiceRateManage/getbyInduId',{induId:induId});
    },
    /**
     * 行业编辑接口
     */
    editIndustry:function(induId,induName,induLevel,parentId){
      return fetch.fetchPost('industryManage/saveOrUpdate',{induId:induId,induName:induName,induLevel:induLevel,parentId:parentId});
    },
    /**
     * 商户-认证资料列表
     */
    bizcerList:function(pageNo,pageSize,status,startTime,endTime,keyword){
      return fetch.fetchPost('businessmanage/bizCertificationList',{pageNo:pageNo,pageSize:pageSize,status:status,startTime:startTime,endTime:endTime,keyword:keyword});
    },
    /**
     * 商户-认证资料详情
     */
    bizcerDetail:function(shopAuthenticateId){
      return fetch.fetchPost('businessmanage/seeCertification',{shopAuthenticateId:shopAuthenticateId});
    },
    /**
     * 审核认证资料
     */
    editbizcer:function(type,shopAuthenticateId){
      return fetch.fetchPost('businessmanage/auditCertification',{type:type,shopAuthenticateId:shopAuthenticateId,beginTime:"",endTime:""});
    },
    /**
     * 商家提现列表
     */
    biztixianlist:function(pageNo,auditStatus){
      return fetch.fetchPost('bizWithDrawal/list',{pageNo:pageNo,auditStatus:auditStatus,beginTime:"",endTime:""});
    },
    /**
     * 提现审核
     */
    bizWithDrawal:function(wdId,auditStatus){
      return fetch.fetchPost('bizWithDrawal/audit',{wdId:wdId,auditStatus:auditStatus});
    },
    /**
     * 地区商圈管理
     */
    shangquanlist:function(provinceName,cityName,areaName,pageNo,businessName){
      return fetch.fetchPost('sysDistrictManage/list',{provinceName:provinceName,cityName:cityName,areaName:areaName,pageNo:pageNo,businessName:businessName});
    },
    /**
     * 新增和更新商圈
     */
    updateshangquan:function(districtName,parentCode,levels,Id){
      return fetch.fetchPost('sysDistrictManage/saveOrUpdate',{districtName:districtName,parentCode:parentCode,levels:levels,id:Id});
    },
    /**
     * 查询订单列表
     */
    orderlist:function(startTime,endTime,pageNo){
      return fetch.fetchPost('orderManage/list',{startTime:startTime,endTime:endTime,pageNo:pageNo});
    },
    /**
     * 版本更新列表
     */
    getAppByList:function(pageNo,pageSize){
      return fetch.fetchPost('version/getByList',{pageNo:pageNo,pageSize:pageSize});
    },
    /**
     * 发布新版本
     */
    uploadApp:function(appName,appVersion,appSize,terminalType,updateRemark,vMustUpdate,vLoadUrl){
      return fetch.fetchPost('version/uploadAPP',{
        appName:appName,
        appVersion:appVersion,
        appSize:appSize,
        terminalType:terminalType,
        updateRemark:updateRemark,
        vMustUpdate:vMustUpdate,
        vLoadUrl:vLoadUrl
      });
    },
    /**
     * 交易数据统计
     */
    transactionTrading:function(pageNo,provincesCode,cityCode,districtCode,startTime,endTime){
      return fetch.fetchPost('bizUserStatistics/trading',{
        pageNo:pageNo,
        provincesCode:provincesCode,
        cityCode:cityCode,
        districtCode:districtCode,
        startTime:startTime,
        endTime:endTime
      })
    },
    /**
     * 商圈时间段内交易统计
     */
    businessData:function(pageNo,businessCode,startTime,endTime){
      return fetch.fetchPost('bizUserStatistics/businessData',{
        pageNo:pageNo,
        businessCode:businessCode,
        startTime:startTime,
        endTime:endTime
      })
    },
    /**
     * 店铺明细1
     */
    businessTakeawayDetail1:function(pageNo,businessCode,dateTime){
      return fetch.fetchPost('bizUserStatistics/businessTakeawayDetail1',{
        pageNo:pageNo,
        businessCode:businessCode,
        dateTime:dateTime,
      })
    },
    /**
     * 指定商圈内店铺明细
     */
    businessTakeawayDetail:function(pageNo,businessCode,startTime,endTime){
      return fetch.fetchPost('bizUserStatistics/businessTakeawayDetail',{
        pageNo:pageNo,
        businessCode:businessCode,
        startTime:startTime,
        endTime:endTime
      })
    },
    /**
     * 指定商家时间筛选交易统计
     */
    businessTakeawayDetail2:function(pageNo,shopId,startTime,endTime){
      return fetch.fetchPost('bizUserStatistics/businessTakeawayDetail2',{
        pageNo:pageNo,
        shopId:shopId,
        startTime:startTime,
        endTime:endTime
      })
    },
    /**
     * 平台积分数据分析
     */
    platIntegral:function(pageNo,startTime,endTime){
      return fetch.fetchPost('personalUserStatistics/platIntegral',{
        pageNo:pageNo,
        startDate:startTime,
        endDate:endTime
      })
    },
    /**
     * 商圈积分数据分析
     */
    businessIntegral:function(pageNo,districtCode,startDate,endDate){
      return fetch.fetchPost('personalUserStatistics/businessIntegral',{
        pageNo:pageNo,
        districtCode:districtCode,
        startDate:startDate,
        endDate:endDate
      })
    },
    /**
     * 商家积分数据分析
     */
    bizIntegral:function(pageNo,businessCode,startDate,endDate){
      return fetch.fetchPost('personalUserStatistics/bizIntegral',{
        pageNo:pageNo,
        businessCode:businessCode,
        startDate:startDate,
        endDate:endDate
      })
    },
    /**
     * 下载平台积分数据分析
     */
    downLoadPlatIntegral:function(startDate,endDate){
      return fetch.fetchGet("personalUserStatistics/downloadPlatIntegral",{
        startDate:startDate,
        endDate:endDate
      })
    },
    /**
     * 根据区域编码查询商圈
     */
    getByDistrictCode(districtCode){
      return fetch.fetchPost('sysDistrictManage/getByDistrictCode',{districtCode:districtCode});
    },
    /**
     * 根据商圈查询店铺
     */
    findByTakeaway(businessCode){
      return fetch.fetchPost('businessmanage/findByTakeaway',{businessCode:businessCode});
    },
    /**
     * 平台发布满赠代金券
     */
    addPlatVouchar(voucherTitle,isCommonUse,fullMoney,fullSubtract,discount,receiveBeginDate,receiveEndDate,platAssume,bizAssume,beginDate,endDate,amount,limitNum,activityLevel,joinDistrictCode,joinBizId,voucherUseLevel,useDistrictCode,useBizId,limitUse,usedDate,choiceDateRule,effectiveDate){
      return fetch.fetchPost('platActivityManage/addPlatVouchar',{
        voucherTitle:voucherTitle,
        isCommonUse:isCommonUse,
        conditions:fullMoney,
        fullSubtract:fullSubtract,
        discount:discount,
        receiveBeginDate:receiveBeginDate,
        receiveEndDate:receiveEndDate,
        platAssume:platAssume,
        bizAssume:bizAssume,
        beginDate:beginDate,
        endDate:endDate,
        amount:amount,
        limitNum:limitNum,
        joinDistrictCode:joinDistrictCode,
        voucherLevel:activityLevel,
        joinBizId:joinBizId,
        voucherUseLevel:voucherUseLevel,
        useDistrictCode:useDistrictCode,
        useBizId:useBizId,
        limitUse:limitUse,
        usedDate:usedDate,
        choiceDateRule:choiceDateRule,
        effectiveDate:effectiveDate
      });
    },
    /**
     * 平台活动列表
     */
    activityList(pageNo,pageSize,status){
      return fetch.fetchPost('platActivityManage/findPlatActivityList',{pageNo:pageNo,pageSize:pageSize,status:status});
    },
    /**
     * 订单统计
     */
    orderfenxilist(pageNo,startTime,endTime){
      return fetch.fetchPost('bizUserStatistics/orderTotalData',{pageNo:pageNo,startTime:startTime,endTime:endTime});
    },
    /**
     * 商家列表
     */
    bizShopTakeawayList(pageNo,keyword){
      return fetch.fetchPost('shopTakeaway/bizShopTakeawayList',{pageNo:pageNo,keyword:keyword});
    },
    /**
     * 查看店铺详情
     */
    shopTakeawayDetail(bizid){
      return fetch.fetchPost('shopTakeaway/shopTakeawayDetail',{bizId:bizid});
    },
    /**
     * 查看业务员
     */
    getByList(){
      return fetch.fetchPost('sysAccount/getByList');
    },
    /**
     * 查看业务员
     */
    updateTakeaway(bizId,aId){
      return fetch.fetchPost('shopTakeaway/updateTakeaway',{bizId:bizId,aId:aId,status:0});
    },
    /**
     * 商户二维码物料生成
     */
    createMaterial(bizId){
      return fetch.fetchPost('material/createMaterial',{bizId:bizId});
    },
    /**
     * 商户二维码物料生成
     */
    bizServiceRateManage(pageNo,shopName){
      return fetch.fetchPost('bizServiceRateManage/list',{pageNo:pageNo,shopName:shopName});
    },
    /**
     *编辑抽点
     */
   bizeditRate:function(serviceRateId,bizId,beginSum,endSum,bizAwardRate,serviceTotalRate,bizRate,platRate,personalRate){
     return fetch.fetchPost('bizServiceRateManage/updateOrdelete',{
       serviceRateId:serviceRateId,
       bizId:bizId,
       beginSum:beginSum,
       endSum:endSum,
       bizAwardRate:bizAwardRate,
       serviceTotalRate:serviceTotalRate,
       bizRate:bizRate,
       platRate:platRate,
       personalRate:personalRate
     });
   },
   /**
    * 删除抽点
    */
   bizdeleteRate:function(serviceRateId){
     return fetch.fetchPost('bizServiceRateManage/updateOrdelete',{serviceRateId:serviceRateId,isValid:1});
   },
   bizgetRate:function(bizId){
     return fetch.fetchPost('bizServiceRateManage/getById',{bizId:bizId});
   },

// 旅游 begin
/**
 * 平台产品列表
 */
lvyouProductList:function(pageNo,keyword,status,sorted){
  return fetch.fetchPost('tour/platproducts/platProductInfoList',{pageNo:pageNo,keyword:keyword,status:status,sorted:sorted}, 'travleApi');
},
/**
 * 新增产品
 */
lvyouCrealeProduct:function(name){
  return fetch.fetchPost('tour/platproducts/createProduct',{platProduName:name}, 'travleApi');
},
/**
 * 搜索产品
 */
searchProduct:function(keyword){
  return fetch.fetchPost('tour/platproducts/searchProductInfo',{keyword:keyword}, 'travleApi');
},
/**
 * 编辑平台商品
 */
lvyoueditProduct:function(platProductId,platProduName,relationWay,beginDate,endDate,productId,
  goodsId,goodsName,freeStatus,freeDays,freeBeginDate,freeEndDate,freeDate,freePrice,freeStock,
  disStatus,productImages,marketPrice,platGoodsId){
  return fetch.fetchPost('tour/platgoods/editPlatGoods',{
    platProductId:platProductId,
    platProduName:platProduName,
    relationWay:relationWay,
    beginDate:beginDate,
    endDate:endDate,
    productId:productId,
    goodsId:goodsId,
    goodsName:goodsName,
    freeStatus:freeStatus,
    freeDays:freeDays,
    freeBeginDate:freeBeginDate,
    freeEndDate:freeEndDate,
    freeDate:freeDate,
    freePrice:freePrice,
    freeStock:freeStock,
    disStatus:disStatus,
    productImages:productImages,
    marketPrice:marketPrice,
    platGoodsId:platGoodsId
  }, 'travleApi');
},
/**
 * 新增平台商品
 */
lvyouaddProduct:function(platProductId,platProduName,relationWay,beginDate,endDate,productId,goodsId
,goodsName,freeStatus,freeDays,freeBeginDate,freeEndDate,freeDate,freePrice,freeStock,disStatus,productImages,marketPrice){
  return fetch.fetchPost('tour/platgoods/createPlatGoods',{
    platProductId:platProductId,
    platProduName:platProduName,
    relationWay:relationWay,
    beginDate:beginDate,
    endDate:endDate,
    productId:productId,
    goodsId:goodsId,
    goodsName:goodsName,
    freeStatus:freeStatus,
    freeDays:freeDays,
    freeBeginDate:freeBeginDate,
    freeEndDate:freeEndDate,
    freeDate:freeDate,
    freePrice:freePrice,
    freeStock:freeStock,
    disStatus:disStatus,
    productImages:productImages,
    marketPrice:marketPrice
  }, 'travleApi');
},
/**
 * 查询产品详情
 */
productDetail:function(platProductId){
  return fetch.fetchPost('tour/platproducts/getProductById',{platProductId:platProductId}, 'travleApi');
},
/**
 * 上下架 。删除
 */
updateProduct:function(platProductId,status,sorted){
  return fetch.fetchPost('tour/platproducts/updateProduct',{platProductId:platProductId,status:status,sorted:sorted}, 'travleApi');
},
/**
 * 订单列表
 */
lyorderList:function(pageNo,phone,orderStatus,orderTime,orderType){
  return fetch.fetchPost('tour/order/orderList',{pageNo:pageNo,
                          phone:phone,orderStatus:orderStatus,
                          orderTime:orderTime,orderType:orderType}, 'travleApi');
},
/**
 * 下单
 */
xiadanProduct:function(platOrderId){
  return fetch.fetchPost('tour/order/readyToCreateLvmamaOrder',{platOrderId:platOrderId}, 'travleApi');
},
/**
 * 下单
 */
cancelProduct:function(platOrderId){
  return fetch.fetchPost('tour/order/readyToLvmamaOrderCancel',{platOrderId:platOrderId}, 'travleApi');
},
/**
 * 会员列表
 */
memberList:function(pageNo,keyword){
  return fetch.fetchPost('tour/member/memberList',{pageNo:pageNo,keyword:keyword}, 'travleApi');
},
/**
 * 驴妈妈商品列表
 */
lvmmList:function(pageNo,keyword){
  return fetch.fetchPost('tour/platproducts/getProductList',{pageNo:pageNo,keyword:keyword}, 'travleApi');
}
// 旅游 end


}
