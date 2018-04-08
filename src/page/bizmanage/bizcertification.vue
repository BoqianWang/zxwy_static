<template lang="html">
  <div class="">
    <div class="">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>审核管理</el-breadcrumb-item>
        <el-breadcrumb-item>店铺资料审核</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bizcer_body">
      <div class="bizcer_listTitle">
        <div>
          <el-date-picker
            v-model="times"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-select v-model="cerStatus" placeholder="请选择审核状态">
            <el-option label="全部" value="3"></el-option>
            <el-option label="未审核" value="0"></el-option>
            <el-option label="审核通过" value="1"></el-option>
            <el-option label="审核未通过" value="2"></el-option>
          </el-select>
          <el-input v-model="shopName" placeholder="请输入店铺名" style="width:150px;"></el-input>
          <el-button type="primary" @click="searchClick()">确定</el-button>
        </div>
        <!-- <el-radio-group v-model="radio5" size="small">
          <el-radio-button :label="'待审核'+waitingAuditNumber" @click.native="changeListClick(0)"></el-radio-button>
          <el-radio-button :label="'审核未通过'+noAuditNumber" @click.native="changeListClick(2)"></el-radio-button>
          <el-radio-button :label="'审核已通过'+yesAuditNumber" @click.native="changeListClick(1)"></el-radio-button>
        </el-radio-group> -->
      </div>
      <el-table
      ref="multipleTable"
      v-loading="loading"
      :data="cerlists"
      tooltip-effect="dark"
      style="width: 100%"
      header-row-class-name="headerClass"
      max-height="600"
      border>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="bizUserName"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="店铺名称">
      </el-table-column>
      <el-table-column
        prop="legalPerson"
        label="法人">
      </el-table-column>
      <el-table-column
        prop="shopStreet"
        label="店铺地址">
      </el-table-column>
      <el-table-column
        prop="applyTime"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="checkStatus"
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
    <el-dialog title="审核资料" :visible.sync="dialogFormVisible">
      <el-row>
        <el-col :span="12">
          <el-form size="mini" label-width="80px" :model="select_bizcer">
            <el-form-item label="店铺名称">
              <el-input v-model="select_bizcer.shopName" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="select_bizcer.bizUserName" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="法人">
              <el-input v-model="select_bizcer.legalPerson" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="店铺地址">
              <el-input v-model="select_bizcer.shopStreet" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="申请时间">
              <el-input v-model="select_bizcer.applyTime" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="行业">
              <el-input v-model="select_bizcer.induName" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="店铺类型">
              <el-input v-model="select_bizcer.classifyName" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="商圈">
              <el-input v-model="select_bizcer.districtName" auto-complete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="审核状态">
              <el-input value="未审核" auto-complete="off" v-if="select_bizcer.checkStatus==0" :disabled="true"></el-input>
              <el-input value="审核通过" auto-complete="off" v-else-if="select_bizcer.checkStatus==1" :disabled="true"></el-input>
              <el-input value="资料未通过" auto-complete="off" v-else-if="select_bizcer.checkStatus==2" :disabled="true"></el-input>
              <el-input value="图片未通过" auto-complete="off" v-else-if="select_bizcer.checkStatus==3" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-popover
          ref="popover1"
          placement="left-start"
          trigger="hover">
          <img :src="select_bizcer.businessLicense" height="500" width="800">
        </el-popover>
        <el-popover
          ref="popover2"
          placement="left-start"
          trigger="hover">
          <img :src="select_bizcer.cateringLicence" height="500" width="800">
        </el-popover>
        <el-col :span="12">
          <div class="cer_img_div">
            <p>营业执照</p>
            <img :src="select_bizcer.businessLicense" alt="" v-popover:popover1>
            <p>餐饮许可证</p>
            <img :src="select_bizcer.cateringLicence" alt="" v-popover:popover2>
            <el-form ref="form" :model="form" style="margin-top:30px;">
              <el-form-item label="审核操作">
                <el-select v-model="form.region" placeholder="请选择审核状态">
                  <el-option label="资料审核失败" value="2"></el-option>
                  <el-option label="图片审核失败" value="3"></el-option>
                  <el-option label="审核成功" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="surecerClick(select_bizcer.shopAuthenticateId)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      noAuditNumber:0,
      waitingAuditNumber:0,
      yesAuditNumber:0,
      // radio5:'待审核',
      loading: true,
      cerlists:[],
      pageNo:1,
      pageSize:20,
      status:0,
      dialogFormVisible: false,
      select_bizcer:'',
      form:{
        region:''
      },
      totalPage:20,
      times:'',
      shopName:'',
      cerStatus:'3'
    }
  },
  mounted(){
    this.apirequest();
  },
  methods:{
    apirequest:function(){
      var startTime = '';
      var endTime  = '';
      console.log(this.times);
      if(this.times){
        startTime = this.times[0];
        endTime = this.times[1];
      }
      api.bizcerList(this.pageNo,this.pageSize,this.cerStatus,startTime,endTime,this.shopName)
      .then(res=>{
        this.cerlists = res.data.list;
        this.loading = false;
        this.totalPage = res.data.total;
        this.yesAuditNumber = res.data.yesAuditNumber;
        this.waitingAuditNumber = res.data.waitingAuditNumber;
        this.noAuditNumber = res.data.noAuditNumber;
        // if(this.status==0){
        //     this.radio5 = '待审核' + this.waitingAuditNumber;
        // }

      })
      .catch(error=>{
        this.loading = false;
      })
    },
    changeListClick:function(status){
      // this.status = status;
      // if(this.loading==true){
      //   return;
      // }
      // this.loading = true;
      // this.apirequest();
    },
    czClick:function(item){
      api.bizcerDetail(item.shopAuthenticateId)
      .then(res=>{
        this.select_bizcer = res.data;
        this.dialogFormVisible  = true;
      })
    },
    surecerClick:function(cerId){
      if(this.form.region==''){
        alert("请选择审核状态");
        return;
      }

      api.editbizcer(this.form.region,cerId)
      .then(res=>{
        this.dialogFormVisible  = false;
      })
    },
    handleCurrentChange:function(currentPage){
      this.pageNo = currentPage;
      this.loading = true;
      this.apirequest();
    },
    searchClick:function(){
      this.pageNo = 1;
      this.loading = true;
      this.apirequest();
    }
  }
}
</script>

<style lang="scss">
.bizcer_body{
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
.cer_img_div{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  img{
    width: 200px;
    height: 120px;
    background-color: #ddd;
  }
}
</style>
