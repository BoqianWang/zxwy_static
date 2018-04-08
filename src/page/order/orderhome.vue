<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
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
      <el-button @click="NopayexportClick()" style="margin-left:20px;">无交易店铺导出</el-button>
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
      <el-table-column type="expand">
       <template slot-scope="props">
         <el-form label-position="left" inline class="demo-table-expand">
           <el-form-item label="用户昵称">
             <span>{{ props.row.username }}</span>
           </el-form-item>
           <el-form-item label="积分抵扣">
             <span>{{ props.row.deductedCost }}</span>
           </el-form-item>
           <el-form-item label="订单来源">
             <span>{{ props.row.orderSourceStr }}</span>
           </el-form-item>
           <el-form-item label="支付方式">
             <span>{{ props.row.paymentModeStr}}</span>
           </el-form-item>
           <el-form-item label="平台优惠">
             <span>{{ props.row.platSubsidy }}</span>
           </el-form-item>
           <el-form-item label="商家优惠">
             <span>{{ props.row.bizSubsidy }}</span>
           </el-form-item>
           <el-form-item label="平台营收">
             <span>{{ props.row.retPlat }}</span>
           </el-form-item>
         </el-form>
       </template>
     </el-table-column>
      <el-table-column
        prop="orderNo"
        label="订单编号">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="orderTypeStr"
        label="订单类型">
      </el-table-column>
      <el-table-column
        prop="orderTime"
        label="下单时间">
      </el-table-column>
      <el-table-column
        prop="originalCost"
        label="订单原价">
      </el-table-column>
      <el-table-column
        prop="actualCost"
        label="用户实付">
      </el-table-column>
      <el-table-column
        prop="bizRealIncome"
        label="商家实收">
      </el-table-column>
      <el-table-column
        prop="orderStatusStr"
        label="订单状态">
      </el-table-column>
      <!-- <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">操作</el-button>
        </template>
      </el-table-column> -->
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
import api from '../../config/api';
export default {
  data(){
    return{
     loading: false,
      sqlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      dialogVisible: false,
      select_shangquan:{
        districtName:'',
        id:'',
        levels:''
      },
      totalPage:20,
      citydata:'',
      times:''
    }
  },
  mounted(){
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadOrderListDataExcel?startTime="+this.times[0]+"&endTime="+this.times[1];
    },
    NopayexportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/bizUserStatistics/downloadNoDealDataExcel?startTime="+this.times[0]+"&endTime="+this.times[1];
    },
    onselected(data){
      console.log(data);
      this.citydata = data;
    },
    timepick:function(){
      console.log(this.times);
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.orderlist(this.times[0],this.times[1],this.pageNo)
    .then(res=>{
      this.sqlists = res.data.lists;
      this.loading = false;
      this.totalPage = res.data.totalPage*this.pageSize;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    czClick:function(item){
      this.select_shangquan = item;
      this.dialogVisible  = true;
    },
    tixiansure:function(wdId,status){
      api.bizWithDrawal(wdId,status)
      .then(res=>{
        this.dialogVisible  = false;
        this.apirequest();
      })
    },
    handleCurrentChange:function(currentPage){
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    },
    addShangquan:function(){
      if(this.citydata==''){
        this.$message.error('请填写省市区');
        return;
      }
      this.select_shangquan.districtName = '';
      this.select_shangquan.id='';
      this.select_shangquan.levels = '';
      this.dialogVisible = true;
    },
    updataClick:function(){
      api.updateshangquan(this.select_shangquan.districtName,this.citydata.area.code,this.select_shangquan.levels,this.select_shangquan.id)
      .then(res=>{
        this.dialogVisible = false;
        this.apirequest();
      })
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
