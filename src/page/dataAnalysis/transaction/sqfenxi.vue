<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>数据分析</el-breadcrumb-item>
      <el-breadcrumb-item>交易数据分析</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <v-distpicker @selected="onselected" @province="provinceClick" @city="cityClick"></v-distpicker>
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
        prop="bussinessName"
        label="商圈名称(总商家数)">
        <template slot-scope="scope">
            {{scope.row.bussinessName+'('+scope.row.countBizNumber+')'}}
        </template>
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
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button type="text" @click="sqDetailClick(scope.row)">时间详情</el-button>
            <el-button type="text" @click="bizDetailClick(scope.row)">店铺详情</el-button>
        </template>
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
import VDistpicker from 'v-distpicker';
export default {
  components:{VDistpicker},
  data(){
    return{
      citydata:{"province":{"code":"","value":""},"city":{"code":"","value":""},"area":{"code":"","value":""}},
      times:'',
      pageNo:1,
      pageSize:20,
      totalPage:20,
      loading: false,
      sqlists:[]
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadExportTradingExcel?startTime="+this.times[0]+"&endTime="+this.times[1]+"&provincesCode="+this.citydata.province.code+"&cityCode="+this.citydata.city.code+"&districtCode="+this.citydata.area.code;
    },
    sqDetailClick:function(item){
      this.$router.push({path:'/sqdetail',query:{times:this.times,sqName:item.bussinessName,businessCode:item.bussinessCode}});
    },
    bizDetailClick:function(item){
      this.$router.push({path:'/sqbiztime',query:{times:this.times,sqName:item.bussinessName,businessCode:item.bussinessCode}});
    },
    fenxiSearch(){
      this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.transactionTrading(this.pageNo,this.citydata.province.code,this.citydata.city.code,this.citydata.area.code,this.times[0],this.times[1])
    .then(res=>{
      this.sqlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.pages*this.pageSize;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    provinceClick(province){
      console.log(province);
      this.citydata.province = province;
      this.citydata.city = {"code":"","value":""};
      this.citydata.area = {"code":"","value":""};
    },
    cityClick(city){
      this.citydata.city = city;
      this.citydata.area = {"code":"","value":""};
    },
    onselected(data){
      console.log(JSON.stringify(data));
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
