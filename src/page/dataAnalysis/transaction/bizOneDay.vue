<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>数据分析</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="$router.back(-2)">交易数据分析</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="$router.back(-1)">{{$route.query.sqName}}商圈</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.query.datatime}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <el-button @click="exportClick()" style="margin-left:20px;">导出</el-button>
    </div>
    <div class="bizOneDay_body">
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
        label="商家名">
      </el-table-column>
      <el-table-column
        prop="orderNum"
        label="订单数">
      </el-table-column>
      <el-table-column
        prop="originalCost"
        label="订单金额">
      </el-table-column>
      <el-table-column
        prop="actualCost"
        label="实际支付金额">
      </el-table-column>
      <el-table-column
        prop="deductedCost"
        label="积分抵扣">
      </el-table-column>
      <el-table-column
        prop="retPlat"
        label="营业收入">
      </el-table-column>
      <el-table-column
        prop="platSubsidy"
        label="平台补贴">
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
      citydata:'',
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
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadBusinessTakeawayDetail1Excel?dateTime="+this.$route.query.datatime+"&businessCode="+this.businessCode;
    },
    apirequest:function(){
      this.loading = true;
    api.businessTakeawayDetail1(this.pageNo,this.businessCode,this.$route.query.datatime)
    .then(res=>{
      this.sqlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.pages*this.pageSize;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    onselected(data){
      console.log(data);
      this.citydata = data;
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
.bizOneDay_body{
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
