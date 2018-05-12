<template lang="html">
<div class="manage_body">
  <el-container>
    <div :class="{iswidth:!isCollapse}" class="aside">
      <el-menu
       :default-active="defaultActive"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
       :collapse="isCollapse"
       background-color="#494D54"
       text-color="#999"
       active-text-color="#fff"
       router>
       <el-menu-item index="/manage">
         <i class="iconfont icon-home"></i>
         <span slot="title">首页</span>
       </el-menu-item>
       <el-menu-item index="/manage/order">
         <i class="iconfont icon-dingdan"></i>
         <span slot="title">订单管理</span>
       </el-menu-item>
       <el-menu-item index="/manage/bizlist">
         <i class="iconfont icon-dingdan"></i>
         <span slot="title">商家管理</span>
       </el-menu-item>
       <el-menu-item index="/manage/aclist">
         <i class="iconfont icon-dingdan"></i>
         <span slot="title">活动管理</span>
       </el-menu-item>
       <el-menu-item index="/manage/salesMan">
         <i class="iconfont icon-dingdan"></i>
         <span slot="title">业务员管理</span>
       </el-menu-item>
       <el-submenu index="3">
         <template slot="title"><i class="iconfont icon-sitting"></i><span slot="title">设置</span></template>
         <el-menu-item index="/manage/hangye">行业列表</el-menu-item>
         <el-menu-item index="/manage/hangye_biz">商家抽点列表</el-menu-item>
         <el-menu-item index="/manage/shangquan">商圈列表</el-menu-item>
         <el-menu-item index="/manage/appupdate">app版本</el-menu-item>
         <el-menu-item index="/manage/shopCode">商家二维码</el-menu-item>
       </el-submenu>
       <el-submenu index="4">
         <template slot="title"><i class="iconfont icon-sitting"></i><span slot="title">审核管理</span></template>
         <el-menu-item index="/manage/biztixian">
           提现审核
           <!-- <el-badge class="mark" :value="12" /> -->
          </el-menu-item>
         <el-menu-item index="/manage/bizcertifi">店铺审核</el-menu-item>
       </el-submenu>
       <el-submenu index="5">
         <template slot="title"><i class="iconfont icon-sitting"></i><span slot="title">数据分析</span></template>
         <el-menu-item index="/manage/sqfenxi">交易数据分析</el-menu-item>
         <el-menu-item index="/manage/ptfenxi">积分数据分析</el-menu-item>
         <el-menu-item index="/manage/orderfenxi">订单数据分析</el-menu-item>
       </el-submenu>
     </el-menu>
   </div>
    <el-container>
      <el-header>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
      </el-header>
      <el-main>
        <keep-alive>
				    <router-view></router-view>
				</keep-alive>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import '../../assets/css/font/iconfont.css'
export default {
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
     defaultActive: function(){
       return this.$route.path.replace('/', '');
     }
   }
}
</script>

<style lang="scss">
.manage_body{
  height: 100%;
  .el-container{
    height: 100%;
    .aside{
      height: 100%;
      background-color: rgba(73,77,84,1);
      .el-menu{
        border-right: 0;
      }
    }
    .el-header{
      background-color: rgba(0,195,255,1);
    }
  }
  .iswidth{
    width: 250px;
  }
}
</style>
