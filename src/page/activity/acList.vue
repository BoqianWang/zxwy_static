<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tixian_body">
      <div class="bizcer_listTitle">
          <el-button type="primary" @click="newActivity()" size="mini" >发布新活动</el-button>
          <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="待开始" @click.native="changeListClick(1)"></el-radio-button>
            <el-radio-button label="进行中" @click.native="changeListClick(2)"></el-radio-button>
            <el-radio-button label="已结束" @click.native="changeListClick(3)"></el-radio-button>
          </el-radio-group>
      </div>
      <el-table
      ref="multipleTable"
      v-loading="loading"
      :data="tixianlists"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="600"
      header-row-class-name="headerClass"
      border>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="voucherTitle"
        label="活动名称">
      </el-table-column>
      <el-table-column
        label="活动时间">
        <template slot-scope="scope">
            {{scope.row.receiveBeginDate}}至{{scope.row.receiveEndDate}}
        </template>
      </el-table-column>
      <el-table-column
        prop="voucherContent"
        label="活动规则">
      </el-table-column>
      <el-table-column
        label="费用承担">
        <template slot-scope="scope">
            平台:{{scope.row.platAssume}}元，商家:{{scope.row.bizAssume}}元
        </template>
      </el-table-column>
      <el-table-column
        label="活动类型">
        <template slot-scope="scope">
            {{scope.row.type==1?"代金券":"平台活动"}}
        </template>
      </el-table-column>
      <!-- <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">查看</el-button>
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
      radio5:'进行中',
      status:2,//进行中
      loading: true,
      isbtnLoading:false,
      tixianlists:[],
      pageNo:1,
      pageSize:20,
      totalPage:20
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    changeListClick:function(status){
      this.status = status;
      if(this.loading==true){
        return;
      }
      this.loading = true;
      this.apirequest();
    },
    apirequest:function(){
    api.activityList(this.pageNo,this.pageSize,this.status)
    .then(res=>{
      this.tixianlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.total;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    newActivity:function(){
      this.$router.push({path:'addfullgift'});
    },
    czClick:function(item){
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
}
.dialogBody{
  display: flex;
  flex-direction: column;
  .dialogRow{
    display: flex;
    p:first-child{
      text-align: right;
      width: 100px;
    }
    p:last-child{
      margin-left: 20px;
    }
  }

}
</style>
