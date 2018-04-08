<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>设置</el-breadcrumb-item>
      <el-breadcrumb-item>app版本</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tixian_body">
      <div class="bizcer_listTitle">
          <el-button type="primary" @click="newApp()" size="mini" >发布新版本</el-button>
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
        prop="appVersion"
        label="版本号">
      </el-table-column>
      <el-table-column
        prop="appName"
        label="APP应用名称">
      </el-table-column>
      <el-table-column
        label="终端类型">
        <template slot-scope="scope">
            <p v-if="scope.row.terminalType==1">个人iOS</p>
            <p v-if="scope.row.terminalType==2">商户iOS</p>
            <p v-if="scope.row.terminalType==3">个人安卓</p>
            <p v-if="scope.row.terminalType==4">商户安卓</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="vLoadUrl"
        label="下载路径">
      </el-table-column>
      <el-table-column
        label="是否强制更新">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.vMustUpdate"></el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini" @click="czClick(scope.row)">查看</el-button>
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
  title="版本信息"
  :visible.sync="dialogVisible"
  width="30%">
  <el-form :model="form">
  <el-form-item label="版本号" :label-width="formLabelWidth">
    <el-input v-model="form.appVersion" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="APP名称" :label-width="formLabelWidth">
    <el-input v-model="form.appName" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="终端类型" :label-width="formLabelWidth">
    <el-select v-model="form.terminalType" placeholder="请选择终端类型">
      <el-option label="商户安卓" value="4"></el-option>
      <el-option label="商户iOS" value="2"></el-option>
      <el-option label="个人版安卓" value="3"></el-option>
      <el-option label="个人版iOS" value="1"></el-option>
    </el-select>
  </el-form-item>
  <!-- <el-form-item label="上传版本" :label-width="formLabelWidth">
    <input type="file" name="" ref="upfile" @change="getFile($event)">
  </el-form-item> -->
  <el-form-item label="链接地址" :label-width="formLabelWidth">
    <el-input v-model="form.vLoadUrl" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="强制更新" :label-width="formLabelWidth">
    <el-switch v-model="form.vMustUpdate"></el-switch>
  </el-form-item>
  <el-form-item label="版本说明" :label-width="formLabelWidth">
    <el-input type="textarea" v-model="form.updateRemark"></el-input>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer" v-if="isshow">
    <el-button type="primary" @click="appsure()" :loading="isbtnLoading">确定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      isshow:true,
      loading: true,
      isbtnLoading:false,
      tixianlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      dialogVisible: false,
      select_biztixian:'',
      totalPage:20,
      formLabelWidth: '80px',
      form:{
        appVersion:'',
        appName:'',
        terminalType:'',
        vLoadUrl:'',
        vMustUpdate:'',
        updateRemark:''
        // file:''
      }
    }
  },
  mounted(){
    this.apirequest();
  },
  methods:{
    // getFile(event) {
    //         this.form.file = event.target.files[0];
    //       },
    apirequest:function(){
    api.getAppByList(this.pageNo,this.pageSize)
    .then(res=>{
      this.tixianlists = res.data.list;
      this.loading = false;
      this.totalPage = res.data.total;

    })
    .catch(error=>{
      this.loading = false;
    })
    },
    newApp:function(){
      this.dialogVisible  = true;
      this.isshow = true;
      this.form={
        appVersion:'',
        appName:'',
        terminalType:'',
        vLoadUrl:'',
        vMustUpdate:'',
        updateRemark:''
        // file:''
      };
    },
    czClick:function(item){
      this.dialogVisible  = true;
      this.form = item;
      this.isshow = false;
    },
    appsure:function(){
      console.log(this.form);
      // console.log('111--'+this.$refs.upfile.value);
      var vMustUpdate  = this.form.vMustUpdate==true?"1":"0";
      api.uploadApp(this.form.appName,this.form.appVersion,16,this.form.terminalType,this.form.updateRemark,vMustUpdate,this.form.vLoadUrl)
      .then(res=>{
        this.dialogVisible  = false;
        this.apirequest();
      })
    //   let formData = new FormData();
    //         formData.append('appName', this.form.appName);
    //         formData.append('appVersion', this.form.appVersion);
    //         formData.append('appSize', '16');
    //         formData.append('terminalType', this.form.terminalType);
    //         formData.append('updateRemark', this.form.updateRemark);
    //         formData.append('vMustUpdate', this.form.vMustUpdate);
    //         formData.append('appFile', this.form.file);
    //   const instance=this.$http.create({
    //   withCredentials: true,
    //   headers: {'token':localStorage.token}
    // })
    // this.isbtnLoading = true;
    //   instance.post('version/uploadAPP',formData)
    //   .then(res=>{
    //     this.isbtnLoading = false;
    //     console.log(res.data);
    //     if(res.data.code==0){
    //       this.dialogVisible = false;
    //     }
    //   })
    //   .catch(error=>{
    //     this.isbtnLoading = false;
    //   })
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
