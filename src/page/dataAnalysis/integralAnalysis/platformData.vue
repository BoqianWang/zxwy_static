<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>数据分析</el-breadcrumb-item>
      <el-breadcrumb-item>平台积分统计</el-breadcrumb-item>
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
      <router-link to='/sqintegral' style="margin-left:50px;margin-top:10px;">查看商圈使用积分>></router-link>
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
        prop="countDateStr"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="dayPlatIntegralPool"
        label="资金池积分">
      </el-table-column>
      <el-table-column
        prop="dayUsedPoolIntegral"
        label="使用积分">
      </el-table-column>
      <el-table-column
        prop="dayRemainPoolIntegral"
        label="剩余积分">
      </el-table-column>
      <el-table-column
        prop="countDayOrder"
        label="订单数">
      </el-table-column>
      <el-table-column
        prop="countDayRetIntegralOrder"
        label="领积分订单数">
      </el-table-column>
      <el-table-column
        prop="countDayNewUser"
        label="新用户数">
      </el-table-column>
      <el-table-column
        prop="sumDayNewUserRetIntegral"
        label="新用户送积分">
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
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      console.log('123');
      window.location.href = "http://operator.zhongxiang51.com/personalUserStatistics/downloadPlatIntegral?startDate="+this.times[0]+"&endDate="+this.times[1];
    },
    fenxiSearch(){
      this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.platIntegral(this.pageNo,this.times[0],this.times[1])
    .then(res=>{
      this.sqlists = res.data.params;
      this.loading = false;
      this.totalPage = res.data.totalPage*this.pageNo;

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
