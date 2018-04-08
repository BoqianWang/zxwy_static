<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>商圈设置</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <v-distpicker @selected="onselected"></v-distpicker>
      <el-button @click="distpick()" type="primary" style="margin-left:20px;">搜索</el-button>
    </div>
    <div class="tixian_body">
      <div class="bizcer_listTitle">
        <p>商圈列表</p>
        <el-button type="primary" @click="addShangquan()" size="mini" >新增</el-button>
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
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="districtCode"
        label="商圈编码">
      </el-table-column>
      <el-table-column
        prop="districtName"
        label="商圈名称">
      </el-table-column>
      <el-table-column
        prop="shopNum"
        label="商圈店铺数量">
      </el-table-column>
      <!-- <el-table-column
        prop="wdTimeStr"
        label="商圈启用状态">
      </el-table-column> -->
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
    <el-dialog title="商圈编辑" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item label="商圈名称" label-width="80px" :model="select_shangquan">
          <el-input v-model="select_shangquan.districtName" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updataClick()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
import VDistpicker from 'v-distpicker';
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
      citydata:''
    }
  },
  components:{VDistpicker},
  mounted(){
    // this.apirequest();
  },
  methods:{
    onselected(data){
      console.log(data);
      this.citydata = data;
    },
    distpick:function(){
      if(this.citydata==''){
        this.$message.error('请填写省市区');
        return;
      }
      this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.shangquanlist(this.citydata.province.value,this.citydata.city.value,this.citydata.area.value,this.pageNo)
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
}
.search_div{
  display: flex;
  padding: 10px;
  background-color: white;

}
</style>
