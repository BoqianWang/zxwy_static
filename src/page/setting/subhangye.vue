<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>设置管理</el-breadcrumb-item>
      <el-breadcrumb-item>行业列表</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="hy_body">
      <div class="hy_listTitle">
        <p>{{$route.query.name}}列表</p>
        <el-button type="primary" @click="addIndustroy()" size="mini" >新增</el-button>
      </div>
      <el-table
      :data="list"
      border
      style="width: 100%; margin-top: 20px"
      header-row-class-name="headerClass">
      <el-table-column
        prop="induName"
        label="行业"
        align="center">
      </el-table-column>
      <el-table-column label="商家奖励" align="center">
        <template slot-scope="scope">
          <ul class="table_ul">
            <li v-for="item in scope.row.rateLists" class="table_li">
              {{item.bizAwardRate}}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column label="用户返点" align="center">
        <template slot-scope="scope">
          <ul class="table_ul">
            <li v-for="item in scope.row.rateLists" class="table_li">
              {{item.personalRate}}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column label="商家返点" align="center">
        <template slot-scope="scope">
          <ul class="table_ul">
            <li v-for="item in scope.row.rateLists" class="table_li">
              {{item.bizRate}}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column
        label="平台返点" align="center">
        <template slot-scope="scope">
          <ul class="table_ul">
            <li v-for="item in scope.row.rateLists" class="table_li">
              {{item.platRate}}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column
        label="限制金额" align="center">
        <template slot-scope="scope">
          <ul class="table_ul">
            <li v-for="item in scope.row.rateLists" class="table_li">
              {{item.beginSum}} - {{item.endSum}}
            </li>
          </ul>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
      <template slot-scope="scope">
          <el-button
            size="mini" @click="hyEditClick(scope.row)">编辑</el-button>
            <!-- <el-button
              size="mini"
              type="danger"
              @click="findbizClick(scope.row.induName,scope.row.induId)">查看</el-button> -->
      </template>
    </el-table-column>
    </el-table>
    </div>

    <el-dialog title="行业编辑" :visible.sync="dialogFormVisible" width="700px">
      <el-form :model="form">
        <el-form-item label="行业名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addruleClick()" v-show="select_hy.induId">新增规则</el-button>
        </el-form-item>
        <div class="" v-for="item in select_hy.rateLists" style="margin-bottom:15px;">
          <el-row :gutter="10">
            <el-col :span="5">
              <div class="sub-title">限制金额(￥)</div>
              <p>{{item.beginSum}} - {{item.endSum}}</p>
            </el-col>
            <el-col :span="3">
              <div class="sub-title">商家奖励</div>
              <p>{{item.bizAwardRate}}%</p>
            </el-col>
            <el-col :span="3">
              <div class="sub-title">行业抽点</div>
              <p>{{item.serviceTotalRate}}%</p>
            </el-col>
            <el-col :span="3">
              <div class="sub-title">商家返点</div>
              <p>{{item.bizRate}}%</p>
            </el-col>
            <el-col :span="3">
              <div class="sub-title">用户返点</div>
              <p>{{item.personalRate}}%</p>
            </el-col>
            <el-col :span="3">
              <div class="sub-title">平台返点</div>
              <p>{{item.platRate}}%</p>
            </el-col>
            <el-col :span="3">
              <el-button type="warning" size="mini" style="margin-top:10px;" @click="pointEditClick(item)">编辑</el-button>
            </el-col>
          </el-row>
        </div>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="surehyClick()">确 定</el-button>
      </div>
      <el-dialog
      width="30%"
      title="限制编辑"
      :visible.sync="innerVisible"
      append-to-body>
      <el-form label-position="left" label-width="80px" :model="select_cd" :rules="rules" ref="cdForm">
      <el-form-item label="起始金额" prop="beginSum">
        <el-input v-model="select_cd.beginSum"><template slot="prepend">￥</template></el-input>
      </el-form-item>
      <el-form-item label="结束金额" prop="endSum">
        <el-input v-model="select_cd.endSum"><template slot="prepend">￥</template></el-input>
      </el-form-item>
      <el-form-item label="商家奖励" prop="bizAwardRate">
        <el-input v-model="select_cd.bizAwardRate"><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item label="行业抽点" prop="serviceTotalRate">
        <el-input v-model="select_cd.serviceTotalRate"><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item label="商家返点" prop="bizRate">
        <el-input v-model="select_cd.bizRate"><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item label="用户返点" prop="personalRate">
        <el-input v-model="select_cd.personalRate"><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item label="平台返点" prop="platRate">
        <el-input v-model="select_cd.platRate"><template slot="append">%</template></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="warning" @click="deleteRate()" v-show="this.select_cd.serviceRateId">删除</el-button>
      <el-button type="primary" @click="submitForm('cdForm')">确定</el-button>
  </el-form-item>
      </el-form>
    </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    var validatePass2 = (rule, value, callback) => {
       if (value === '') {
         callback(new Error('请输入行业抽点'));
       } else if (parseFloat(value) !== parseFloat(this.select_cd.bizRate)+parseFloat(this.select_cd.personalRate)+parseFloat(this.select_cd.platRate)) {
         console.log(parseFloat(this.select_cd.bizRate)+parseFloat(this.select_cd.personalRate)+parseFloat(this.select_cd.platRate));
         callback(new Error('平台抽点和返点不相等!'));
       } else {
         callback();
       }
     };
    return{
      list:[],
      dialogFormVisible: false,
      innerVisible:false,
      form: {
          name: ''
        },
      formLabelWidth: '80px',
      select_hy:'', //弹出行业编辑的数据
      select_cd:{
        beginSum:'',
        endSum:'',
        bizAwardRate:'',
        serviceTotalRate:'',
        bizRate:'',
        personalRate:'',
        platRate:'',
        induId:'',
        serviceRateId:''
      },
      rules: {
        beginSum: [
                { required: true, message: '请输入限制开始金额' },
            ],
        endSum: [
          { required: true, message: '请输入限制结束金额' }
        ],
        bizAwardRate: [
          { required: true, message: '请输入商家奖励' }
        ],
        serviceTotalRate: [
          {  validator: validatePass2}
        ],
        bizRate: [
          { required: true, message: '请输入商家返点' }
        ],
        personalRate: [
          { required: true, message: '请输入用户返点'}
        ],
        platRate: [
          { required: true, message: '请输入平台返点'}
        ],
      }
    }
  },
  mounted(){
    api.hangyeList(1,1,this.$route.query.Id)
    .then(res=>{
      this.list = res.data.lists;
    })
  },
  methods:{
    findbizClick:function(name,industroyId){
      // this.$router.push({path:'/hangye_biz',query:{name:name,Id:industroyId}});
    },
    addIndustroy:function(){
      this.dialogFormVisible = true;
      this.select_hy = '';
      this.form.name = '';
    },
    surehyClick:function(){
      api.editIndustry(this.select_hy.induId,this.form.name,1,this.$route.query.Id)
      .then(res=>{
        if(this.select_hy.induName){
          this.select_hy.induName = this.form.name;
        }else{
          api.hangyeList(1,1,this.$route.query.Id)
          .then(res=>{
            this.list = res.data.lists;
          })
        }

        this.dialogFormVisible = false;
      })

    },
    hyEditClick:function(hydata){
      this.select_hy = hydata;
      this.dialogFormVisible = true;
      this.form.name = hydata.induName;
    },
    pointEditClick:function(item){
      this.innerVisible = true;
      this.select_cd = item;
    },
    addruleClick:function(){
      this.innerVisible = true;
      this.select_cd = {
        beginSum:'',
        endSum:'',
        bizAwardRate:'',
        serviceTotalRate:'',
        bizRate:'',
        personalRate:'',
        platRate:'',
        induId:this.select_hy.induId,
        serviceRateId:''
      };
    },
    deleteRate:function(){
      api.deleteRate(this.select_cd.serviceRateId)
      .then(res=>{
        this.innerVisible = false;
        api.getRate(this.select_hy.induId)
        .then(sres=>{
          this.select_hy.rateLists = sres.data;
        })
      })
    },
    submitForm(formName){
      console.log(this.select_cd);
      this.$refs[formName].validate((valid) => {
          if (valid) {
              api.editRate(
                this.select_cd.serviceRateId,
                this.select_cd.induId,
                this.select_cd.beginSum,
                this.select_cd.endSum,
                this.select_cd.bizAwardRate,
                this.select_cd.serviceTotalRate,
                this.select_cd.bizRate,
                this.select_cd.platRate,
                this.select_cd.personalRate
              )
              .then(res=>{
                this.innerVisible = false;
                api.getRate(this.select_hy.induId)
                .then(sres=>{
                  this.select_hy.rateLists = sres.data;
                })
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }

}
</script>

<style lang="scss">
.hy_body{
  background-color: white;
  margin-top: 20px;
  .hy_listTitle{
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
  }
.headerClass{
  background-color: rgba(238,238,238,1);
}
  .table_li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }
  .table_ul{
    li:last-child{
      border-bottom: 0px;
    }
  }
  .el-table_1_column_2,.el-table_1_column_3,.el-table_1_column_4,.el-table_1_column_5,.el-table_1_column_6{
    padding: 0px;
    .cell{
      padding: 0px;
    }
  }
}
</style>
