<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>旅游产品</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <div class="block">
        <el-input v-model="bizname" placeholder="请输入产品名"></el-input>
      </div>
      <p style="margin-left:10px;">状态：</p>
      <el-select v-model="upOrdown" placeholder="请选择状态">
       <el-option label="全部" value="0"></el-option>
       <el-option label="上架" value="1"></el-option>
       <el-option label="下架" value="2"></el-option>
     </el-select>
     <p style="margin-left:10px;">序号：</p>
     <el-select v-model="sorted" placeholder="请选择状态">
       <el-option label="全部" value=""></el-option>
      <el-option label="0" value="0"></el-option>
      <el-option label="1" value="1"></el-option>
      <el-option label="2" value="2"></el-option>
      <el-option label="3" value="3"></el-option>
      <el-option label="4" value="4"></el-option>
      <el-option label="5" value="5"></el-option>
    </el-select>
      <el-button @click="nameSearch()" type="primary" style="margin-left:20px;">查 询</el-button>
      <el-button @click="addproduct()"  style="margin-left:20px;">添加产品</el-button>
    </div>
    <div class="bizlist_body">
      <div class="bizcer_listTitle">
        <p>产品列表</p>
        <div class="">
          <el-button type="primary" @click="allSelectClick(1)">上 架</el-button>
          <el-button @click="allSelectClick(2)">下 架</el-button>
          <el-button @click="allsortSelectClick()">排 序</el-button>
        </div>
      </div>
      <el-table
      ref="multipleTable"
      v-loading="loading"
      :data="sqlists"
      tooltip-effect="dark"
      style="width: 100%"
      max-height="700"
      header-row-class-name="headerClass"
      @selection-change="handleSelectionChange"
      border>
      <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="platProduName"
        label="产品名称">
      </el-table-column>
      <el-table-column
        label="关联渠道">
        <template slot-scope="scope">
              <p>{{scope.row.relationWay==1?"驴妈妈":""}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="beginDate"
        label="关联日期">
        <template slot-scope="scope">
              <p v-if="scope.row.beginDate">{{scope.row.beginDate}}至{{scope.row.endDate}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="freeStatus"
        label="货架类型">
        <template slot-scope="scope">
              <p>{{scope.row.freeStatus==1?"免费":"未开通"}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        width="100"
        label="上下架状态">
        <template slot-scope="scope">
              <p v-if="scope.row.productStatus==1" style="color:#409EFF;">上架</p>
              <p v-if="scope.row.productStatus==0" style="color:#909399;">下架</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="sorted"
        width="100"
        label="排序等级">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">编辑</el-button>
              <el-button
                size="mini" @click="sortClick(scope.row)">排序</el-button>
              <el-button
                size="mini" @click="delClick(scope.row)">删除</el-button>
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

    <el-dialog
      title="编辑排序"
      :visible.sync="sortdialogVisible"
      width="30%">
      <el-form ref="form" :model="sortform" label-width="80px">
        <el-form-item label="产品名称">
          <el-select v-model="sortform.sorted" placeholder="请选择排序等级">
            <el-option label="0" value="0"></el-option>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sortdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sortSure()">确 定</el-button>
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
      upOrdown:'0',
      sorted:'',
      sqlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      totalPage:20,
      bizname:'',
      dialogVisible: false,
      sortdialogVisible:false,
      form:{
        name:''
      },
      sortform:{
        sorted:'',
        productId:''
      },
      selectArr:[]
    }
  },
  activated(){
    this.apirequest();
  },
  methods:{
    allsortSelectClick:function(){
      if(this.selectArr.length==0){
        this.$message({
           message: "请至少选择一个产品",
           type: 'error'
        });
        return;
      }
      var idArr   =  [];
      for (var i = 0; i < this.selectArr.length; i++) {
         var item =   this.selectArr[i];
         idArr.push(item.platProductId);
      }

      this.sortform.productId =  idArr.join(',');
      this.sortdialogVisible = true;
    },
    allSelectClick:function(val){
      if(this.selectArr.length==0){
        this.$message({
           message: "请至少选择一个产品",
           type: 'error'
        });
        return;
      }
      var idArr   =  [];
      for (var i = 0; i < this.selectArr.length; i++) {
         var item =   this.selectArr[i];
         idArr.push(item.platProductId);
      }
      api.updateProduct(idArr.join(','),val)
      .then(res=>{
        this.$message({
           message: res.msg,
           type: 'success'
        });
        this.apirequest();
      })
    },
    handleSelectionChange(val) {
        this.selectArr = val;
      },
    nameSearch:function(){
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.lvyouProductList(this.pageNo,this.bizname,this.upOrdown,this.sorted)
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
    },
    sortClick:function(item){
      this.sortform.productId =  item.platProductId;
      this.sortdialogVisible = true;
    },
    sortSure:function(){
      if(this.sortform.sorted.length==0){
        this.$message({
           message: "请至少选择一个等级",
           type: 'error'
        });
        return;
      }
      api.updateProduct(this.sortform.productId,4,this.sortform.sorted)
      .then(res=>{
        this.$message({
          message: res.msg,
          type: 'success'
        });
        this.sortdialogVisible = false;
        this.apirequest();
      })

    },
    delClick:function(item){

      this.$confirm('此操作将删除该产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          api.updateProduct(item.platProductId,3)
          .then(res=>{
            this.$message({
              message: res.msg,
              type: 'success'
            });
            this.apirequest();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });



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
  align-items: center;

}
</style>
