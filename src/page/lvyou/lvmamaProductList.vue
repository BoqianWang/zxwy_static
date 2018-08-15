<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>驴妈妈商品库</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <div class="block">
        <el-input v-model="bizname" placeholder="请输入商品信息"></el-input>
      </div>
      <el-button @click="nameSearch()" type="primary" style="margin-left:20px;">查 询</el-button>
    </div>
    <div class="bizlist_body">
      <div class="bizcer_listTitle">
        <p>商品列表</p>
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
        prop="productName"
        label="产品名称">
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名称">
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
      title="添加产品"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="产品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSure()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      importFileUrl: 'tour/member/importPlatMember',
     loading: false,
      sqlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      totalPage:20,
      bizname:'',
      dialogVisible: false,
      form:{
        name:''
      }
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    nameSearch:function(){
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.lvmmList(this.pageNo,this.bizname)
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
      this.$router.push({path:'editproduct',query:{platProductId:item.platProductId,platProduName:item.platProduName}});
    },
    addproduct:function(){
        this.dialogVisible = true;
    },
    addSure:function(){
      api.lvyouCrealeProduct(this.form.name)
      .then(res=>{
            this.$message({
               message: res.msg,
               type: 'success'
            });
            this.dialogVisible = false;
            this.apirequest();
      })
      .catch(error=>{

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
