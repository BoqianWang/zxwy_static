<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>积分数据分析</el-breadcrumb-item>
      <el-breadcrumb-item>商圈积分数据分析</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <v-distpicker @selected="onselected" :province="select.province" :city="select.city" :area="select.area"></v-distpicker>
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
        prop="businessName"
        label="商圈名称">
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
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button type="text" @click="bizDetailClick(scope.row)">店铺积分明细</el-button>
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
      select: { province: '广东省', city: '深圳市', area: '福田区' },
      citydata:{"province":{"code":"440000","value":"广东省"},"city":{"code":"440300","value":"深圳市"},"area":{"code":"440304","value":"福田区"}},
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

      window.location.href = "http://operator.zhongxiang51.com/personalUserStatistics/downloadBusinessIntegral?startDate="+this.times[0]+"&endDate="+this.times[1]+"&districtCode="+this.citydata.area.code;
    },
    bizDetailClick:function(item){
      this.$router.push({path:'/bizintegral',query:{times:this.times,sqName:item.businessName,businessCode:item.businessCode}});
    },
    fenxiSearch(){
      this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.businessIntegral(this.pageNo,this.citydata.area.code,this.times[0],this.times[1])
    .then(res=>{
      this.sqlists = res.data.params;
      this.loading = false;
      this.totalPage = res.data.totalPage*20;

    })
    .catch(error=>{
      this.loading = false;
    })
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
