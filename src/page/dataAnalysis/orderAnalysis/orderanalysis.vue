<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>订单统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <div class="block">
        <el-date-picker
          v-model="times"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
      <el-button @click="timepick()" type="primary" style="margin-left:20px;">搜索</el-button>
      <el-button @click="exportClick()" style="margin-left:20px;">导出</el-button>
    </div>
    <div class="tixian_body">
      <div class="bizcer_listTitle">
        <p>订单列表</p>
      </div>
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
        prop="businessName"
        label="商圈名称">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="订单数">
      </el-table-column>
      <el-table-column
        prop="originalCost"
        label="订单原金额">
      </el-table-column>
      <el-table-column
        prop="deductedCost"
        label="积分抵扣金额">
      </el-table-column>
      <el-table-column
        prop="actualCost"
        label="订单实付金额">
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
     loading: false,
      sqlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      totalPage:20,
      citydata:'',
      times:''
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    exportClick:function(){

      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadOrderTotalDataExcel?startTime="+this.times[0]+"&endTime="+this.times[1];
    },
    timepick:function(){
      console.log(this.times);
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.orderfenxilist(this.pageNo,this.times[0],this.times[1])
    .then(res=>{
      this.sqlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.pages*this.pageSize;

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
.tixian_body{
  background-color: white;
  margin-top: 20px;
  .bizcer_listTitle{
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  .headerClass{
    background-color: rgba(238,238,238,1);
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 24%;
  }
}
.search_div{
  display: flex;
  padding: 10px;
  background-color: white;

}
</style>
