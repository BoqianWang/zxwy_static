<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>会员管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search_div">
      <div class="block">
        <el-input v-model="bizname" placeholder="请输入手机号"></el-input>
      </div>
      <el-button @click="nameSearch()" type="primary" style="margin-left:20px;">查 询</el-button>
      <el-upload
        :action="importFileUrl"
        :data="params"
        name="excelFile"
        :onError="uploadError"
        :onSuccess="uploadSuccess"
        :beforeUpload="beforeAvatarUpload">
        <el-button style="margin-left:50px;">点击上传</el-button>
      </el-upload>
      <el-button  style="margin-left:20px;">单个导入</el-button>
    </div>
    <div class="bizlist_body">
      <div class="bizcer_listTitle">
        <p>会员列表</p>
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
        prop="phoneNo"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="realName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memberCard"
        label="会员卡">
      </el-table-column>
      <el-table-column
        prop="created"
        label="导入时间">
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
      importFileUrl: apiServer['travleApi'] + 'tour/member/importPlatMember',
     loading: false,
     params:{
       token:''
     },
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
    this.params['token'] = localStorage.token;
    this.apirequest();
  },
  methods:{
    nameSearch:function(){
     this.apirequest();
    },
    apirequest:function(){
      this.loading = true;
    api.memberList(this.pageNo,this.bizname)
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
    // 上传成功后的回调
    uploadSuccess (response, file, fileList) {
      this.$message({
         message: response.msg,
         type: 'success'
      });
      this.apirequest();
    },
    // 上传错误
    uploadError (response, file, fileList) {
      this.$message({
         message: response.msg,
         type: 'error'
      });
    },
    // 上传前对文件的大小的判断
    beforeAvatarUpload (file) {
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      // const isLt2M = file.size / 1024 / 1024 < 10
      if (!extension && !extension2) {
        this.$message({
           message: '上传模板只能是 xls、xlsx 格式!',
           type: 'error'
        });
      }
      // if (!isLt2M) {
      //   this.$message({
      //      message: '上传模板大小不能超过 10MB!',
      //      type: 'error'
      //   });
      // }
      return extension || extension2
    }
  }
}
</script>

<style lang="scss">
.el-upload-list{
  display: none;
}
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
