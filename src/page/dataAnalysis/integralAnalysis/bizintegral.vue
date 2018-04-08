<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>积分数据分析</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="$router.back(-1)">商圈积分数据分析</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.query.sqName}}商圈</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <el-date-picker
        v-model="times"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd" style="margin-left:10px;">
      </el-date-picker>
      <el-button @click="fenxiSearch()" type="primary" style="margin-left:20px;">搜索</el-button>
      <el-button @click="exportClick()" style="margin-left:20px;">导出</el-button>
    </div>
    <div class="sqfenxi_body">
      <el-table
      ref="multipleTable"
      v-loading="loading"
      :data="sqlists"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="600"
      header-row-class-name="headerClass"
      border>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="deductedMoney"
        label="使用积分">
      </el-table-column>
      <el-table-column
        prop="countOrder"
        label="订单数">
      </el-table-column>
      <el-table-column
        prop="countRetIntegralOrder"
        label="领积分订单数">
      </el-table-column>
      <el-table-column
        prop="countNewUser"
        label="新用户数">
      </el-table-column>
      <el-table-column
        prop="sumNewUserRetIntegral"
        label="新用户赠送积分">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size='pageSize'
        :total="totalPage"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
import api from '../../../config/api';
export default {
  data(){
    return{
      times:'',
      pageNo:1,
      pageSize:20,
      totalPage:20,
      loading: false,
      sqlists:[],
      businessCode:''
    }
  },
  activated(){
    this.businessCode = this.$route.query.businessCode;
    this.times = this.$route.query.times;
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/personalUserStatistics/downloadBizIntegral?startDate="+this.times[0]+"&endDate="+this.times[1]+"&businessCode="+this.businessCode;
    },
    fenxiSearch(){
      this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.bizIntegral(this.pageNo,this.businessCode,this.times[0],this.times[1])
    .then(res=>{
      this.sqlists = res.data.params;
      this.loading = false;
      this.totalPage = res.data.totalPage*20;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    handleCurrentChange:function(currentPage){
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    }
  }
}
</script>

<style lang="scss">
.sqfenxi_body{
  background-color: white;
  margin-top: 20px;
  .headerClass{
    background-color: rgba(238,238,238,1);
  }
}
.search_div{
  display: flex;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
}
</style>
