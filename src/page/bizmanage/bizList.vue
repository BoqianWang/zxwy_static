<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商家管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <div class="block">
        <el-input v-model="bizname" placeholder="请输入店铺名"></el-input>
      </div>
      <el-button @click="nameSearch()" type="primary" style="margin-left:20px;">搜索</el-button>
    </div>
    <div class="bizlist_body">
      <div class="bizcer_listTitle">
        <p>商家列表</p>
      </div>
      <el-table
      ref="multipleTable"
      v-loading="loading"
      :data="sqlists"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="700"
      header-row-class-name="headerClass"
      border>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="username"
        label="店铺账户">
      </el-table-column>
      <el-table-column
        prop="businessName"
        label="店铺所属商圈">
      </el-table-column>
      <el-table-column
        prop="regTime"
        label="店铺注册时间">
      </el-table-column>
      <el-table-column
        prop="classifyName"
        label="行业类型">
      </el-table-column>
      <el-table-column
        prop="legalPerson"
        label="店铺法人">
      </el-table-column>
      <el-table-column
        prop="checkStatus"
        label="店铺审核状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">明细</el-button>
              <el-button
                size="mini" @click="imgClick(scope.row)">物料</el-button>
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
      title="物料图片"
      :visible.sync="dialogVisible"
      width="450px" height="500px">
      <img :src="bizImg" alt="" width="300px" height="400px" style="margin-left:50px;border:1px solid #ddd;">
      <span slot="footer" class="dialog-footer">
      <a :href="bizImg" :download="bizImg">保 存</a>
      </span>
    </el-dialog>


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
      totalPage:20,
      citydata:'',
      bizname:'',
      dialogVisible: false,
      bizImg:''
    }
  },
  mounted(){
    this.apirequest();
  },
  methods:{
    nameSearch:function(){
      console.log(this.times);
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.bizShopTakeawayList(this.pageNo,this.bizname)
    .then(res=>{
      this.sqlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.pages*this.pageSize;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    czClick:function(item){
      this.$router.push({path:'/bizdetail',query:{bizId:item.bizId}});
    },
    imgClick:function(item){
      api.createMaterial(item.bizId)
      .then(res=>{
        this.bizImg = res.data;
        this.dialogVisible = true;
      })
    },
    saveImg:function(){

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
.bizlist_body{
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
