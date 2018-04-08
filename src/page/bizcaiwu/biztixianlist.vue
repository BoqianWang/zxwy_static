<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>审核管理</el-breadcrumb-item>
      <el-breadcrumb-item>提现审核</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tixian_body">
      <div class="bizcer_listTitle">
        <div class="" style="display:flex;align-items: center;">
          <p>提现列表</p>
          <el-button @click="exportClick()" style="margin-left:20px;">待提现导出</el-button>
        </div>
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="待审核" @click.native="changeListClick(0)"></el-radio-button>
          <el-radio-button label="审核未通过" @click.native="changeListClick(2)"></el-radio-button>
          <el-radio-button label="审核已通过" @click.native="changeListClick(1)"></el-radio-button>
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
        type="index">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="wdMoney"
        label="提现金额">
      </el-table-column>
      <el-table-column
        prop="wdTimeStr"
        label="申请时间" v-if="status!=1">
      </el-table-column>
      <el-table-column
        prop="auditTimeStr"
        label="审核时间" v-if="status==1">
      </el-table-column>
      <el-table-column
        prop="auditStatusStr"
        label="审核状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">操作</el-button>
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
    <el-dialog
  title="提现查看"
  :visible.sync="dialogVisible"
  width="30%">
  <div class="dialogBody">
    <div class="dialogRow">
      <p>提现时间</p>
      <p>{{select_biztixian.wdTimeStr}}</p>
    </div>
    <div class="dialogRow">
      <p>店铺名称</p>
      <p>{{select_biztixian.shopName}}</p>
    </div>
    <div class="dialogRow">
      <p>店铺账户</p>
      <p>{{select_biztixian.username}}</p>
    </div>
    <div class="dialogRow">
      <p>提现金额</p>
      <p>{{select_biztixian.wdMoney}}</p>
    </div>
    <div class="dialogRow">
      <p>开户人</p>
      <p>{{select_biztixian.bankAccount}}</p>
    </div>
    <div class="dialogRow">
      <p>开户行</p>
      <p>{{select_biztixian.bankId}}-{{select_biztixian.bankAddress}}</p>
    </div>
    <div class="dialogRow">
      <p>卡号</p>
      <p>{{select_biztixian.bankCard}}</p>
    </div>
    <div class="dialogRow" v-show="select_biztixian.auditStatus!=0">
      <p>审核状态</p>
      <p>{{select_biztixian.auditStatusStr}}</p>
    </div>
  </div>
  <span slot="footer" class="dialog-footer" v-if="select_biztixian.auditStatus==0">
    <el-button @click="tixiansure(select_biztixian.wdId,2)">拒绝</el-button>
    <el-button type="primary" @click="tixiansure(select_biztixian.wdId,1)">通过</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      radio5:'待审核',
      loading: true,
      tixianlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      dialogVisible: false,
      select_biztixian:'',
      totalPage:20
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    exportClick:function(){
      window.location.href = "http://operator.zhongxiang51.com/bizWithDrawal/downloadExportWithdrawalExcel";
    },
    apirequest:function(){
    api.biztixianlist(this.pageNo,this.status)
    .then(res=>{

      this.tixianlists = res.data.lists;
      this.loading = false;
      this.totalPage = res.data.totalPage*this.pageSize;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    changeListClick:function(status){
      this.status = status;
      if(this.loading==true){
        return;
      }
      this.loading = true;
      this.apirequest();
    },
    czClick:function(item){
      this.select_biztixian = item;
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
    align-items: center;
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
