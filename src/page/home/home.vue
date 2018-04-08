<template lang="html">
<div class="home_body">
  <div class="section_order">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-dingdan"></i>
          <div class="right_p">
            <p>今日订单总数</p>
            <p>￥{{indexTop.toDayNumber}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-dingdan"></i>
          <div class="right_p">
            <p>今日交易总额</p>
            <p>￥{{indexTop.toDayMoney}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-dingdan"></i>
          <div class="right_p">
            <p>昨日交易总额</p>
            <p>￥{{indexTop.yesterdayMoney}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <i class="iconfont icon-dingdan"></i>
          <div class="right_p">
            <p>近七天交易总额</p>
            <p>￥{{indexTop.sevendayMoney}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="section_wating">
    <div class="section_title">待处理事项</div>
    <div class="wating_ct">
      <el-row :gutter="20" style="width:100%;">
        <el-col :span="6">
          <div class="wating_cell">
            <div class="name">待审核认证资料</div>
            <div class="num">({{indexWating.toAuditBizUserNumber}})</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="wating_cell">
            <div class="name">待提现</div>
            <div class="num">({{indexWating.toAuditWithdrawalNumber}})</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <!-- <div class="section_shortIn">
    <div class="section_title">运营快捷入口</div>
    <div class="shortIn_ct">
      <div class="shortIn_cell" v-for="cell in shortIn_arr">
        <i :class="cell.icon"></i>
        <p>{{cell.name}}</p>
      </div>
    </div>
  </div> -->
  <div class="section_whole">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="section_title">店铺总览</div>
        <div class="whole_ct">
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.toDayTakeawayNumber}}</p><p>今日活跃店铺</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.toAddTakeawayNumber}}</p><p>新增店铺</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.monthTakeawayNumber}}</p><p>本月新增</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.totalTakeawayNumber}}</p><p>商家总数</p>
          </div></el-col>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="section_title">用户总览</div>
        <div class="whole_ct">
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.toDayPersonalNumber}}</p><p>今日新增</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.yesterdayPersonalNumber}}</p><p>昨天新增</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.monthPersonalNumber}}</p><p>本月新增</p>
          </div></el-col>
          <el-col :span="6"><div class="whole_cell">
            <p>{{indexBiz_user.totalPersonalNumber}}</p><p>会员总数</p>
          </div></el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      shortIn_arr:[{
        name:'添加商品',
        icon:'iconfont icon-dingdan'
      },{
        name:'订单列表',
        icon:'iconfont icon-dingdan'
      }],
      indexTop:{
        toDayNumber:'',
        toDayMoney:'',
        yesterdayMoney:'',
        sevendayMoney:''
      },
      indexBiz_user:'',
      indexWating:''
    }
  },
  mounted(){
    api.indexTotalTop()
    .then(res=>{
      this.indexTop = res.data;
    })
    api.indexTakeawayPersonalList()
    .then(res=>{
      this.indexBiz_user = res.data;
    })
    api.indexUntreatedList()
    .then(res=>{
      this.indexWating = res.data;
    })
  }
}
</script>

<style lang="scss">
@import "../../style/mixin";
.home_body{
  .section_order{
    .el-row {
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple {
      background: #fff;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .grid-content {
      height: 140px;
      .iconfont{
        font-size: 50px;
        color: $mainColor;
        margin-right: 12px;
      }
      .right_p{
        p:first-child{
          @include sc(16px,#666);
        }
        p:last-child{
          @include sc(24px,#333);
          font-weight: bold;
        }
      }
    }
  }
  .section_title{
    margin-top: 20px;
    @include wh(100%,50px);
    background-color: #eee;
    line-height: 50px;
    padding-left: 20px;
    @include sc(16px,#333);
  }
  .section_wating{
    .wating_ct{
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 20px;
      .wating_cell{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        padding: 0 10px;
        .name{
          color: #555;
        }
        .num{
          color: #DE563B;
        }
      }
    }
  }
  .section_shortIn{
    .shortIn_ct{
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .shortIn_cell{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include wh(140px,170px);
        @include sc(14px,#555);
        .iconfont{
          font-size: 70px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .section_whole{
    .whole_ct{
      background-color: #fff;
      height: 150px;
      display: flex;
      align-items: center;
      .whole_cell{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p:first-child{
          @include sc(30px,$mainColor);
        }
        p:last-child{
          @include sc(14px,#555);
        }
      }
    }
  }
}
</style>
