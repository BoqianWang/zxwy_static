<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>商家管理</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="$router.back(-1)">商家列表</el-breadcrumb-item>
      <el-breadcrumb-item>商家详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="bizdetail_page">
      <div class="bizdata_row">
        <div class="title_edit">
          <p>店铺资料</p>
          <el-button type="primary" @click="saveData()">保存</el-button>
        </div>
          <img :src="bizdata.shopImgs" alt="">
          <el-row>
            <el-col :span="8">
              业务员:
              <el-select v-model="yewu_id">
                <el-option
                  v-for="item in yewu_options"
                  :key="item.aId"
                  :label="item.realName"
                  :value="item.aId">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">店铺名称:{{bizdata.shopName}}</el-col>
            <el-col :span="8">店铺账户:{{bizdata.username}}</el-col>
            <el-col :span="8">店铺法人:{{bizdata.legalPerson}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="8">商圈:{{bizdata.businessName}}</el-col>
            <el-col :span="8">行业:{{bizdata.induName}}</el-col>
            <el-col :span="8">类型:{{bizdata.classifyName}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="8">注册日期:{{bizdata.applyTime}}</el-col>
            <el-col :span="8">店铺状态:{{bizdata.shopStatus}}</el-col>
            <el-col :span="8">营业时间:</el-col>
          </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../config/api';
export default {
  data(){
    return{
      bizId:'',
      bizdata:'',
      yewu_options:[],
      yewu_id:''

    }
  },
  activated(){
    this.bizId = this.$route.query.bizId;
    api.shopTakeawayDetail(this.bizId)
    .then(res=>{
      this.bizdata = res.data;
      this.yewu_id = res.data.aName;
    })

    api.getByList()
    .then(res=>{
      this.yewu_options  = res.data.list;
    })
  },
  methods:{
    saveData(){
      console.log(this.yewu_id);
      api.updateTakeaway(this.bizId,this.yewu_id)
      .then(res=>{
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../style/mixin";
.bizdetail_page{
  background-color: white;
  margin-top: 20px;
  // width: 800px;
  padding: 10px 20px;
  .bizdata_row{
    img{
      @include wh(80px,80px);
    }
    .title_edit{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .el-col{
      display: flex;
      align-items: center;
    }
  }
}
</style>
