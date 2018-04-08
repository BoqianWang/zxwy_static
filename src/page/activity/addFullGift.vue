<template lang="html">
  <div class="">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item @click.native="$router.back(-1)">活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>新增满赠活动</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addfullgift_page">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name" style="width:350px;"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="date1">
          <el-col>
            <el-date-picker
              v-model="form.date1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="券有效期">
          <div class="">
            <el-radio-group v-model="form.choiceDateRule">
              <el-radio label="1">发出后天数</el-radio>
              <el-radio label="0">时间段</el-radio>
            </el-radio-group>
            <div class="" v-if="form.choiceDateRule==1">
              <el-input v-model="form.effectiveDate" style="width:300px;">
                <template slot="prepend">用户领取后</template>
                <template slot="append">天可用</template>
              </el-input>
            </div>
            <div class="" v-if="form.choiceDateRule==0">
              <el-col>
                <el-date-picker
                  v-model="form.date2"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-col>
            </div>
          </div>
        </el-form-item>
        <!-- <el-form-item label="劵有效期" prop="date2">
          <el-col>
            <el-date-picker
              v-model="form.date2"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
        </el-form-item> -->
        <el-form-item label="领取条件" prop="fullMoney">
          <el-input v-model="form.fullMoney" style="width:300px;">
            <template slot="prepend">用户消费满￥</template>
            <template slot="append">可领</template>
          </el-input>
        </el-form-item>
        <el-form-item label="使用条件" prop="fullSubtract">
          满￥
          <el-input v-model="form.fullSubtract" style="width:150px;"></el-input>
          减￥
          <el-input v-model="form.discount" style="width:150px;"></el-input>
        </el-form-item>
        <el-form-item label="费用承担" prop="platAssume">
          平台
          <el-input v-model="form.platAssume" style="width:150px;"></el-input>
          商家
          <el-input v-model="form.bizAssume" style="width:150px;"></el-input>
        </el-form-item>
        <el-form-item label="发放数量" prop="amount">
          <el-input v-model="form.amount" style="width:150px;">
            <template slot="append">张</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商家参与">
          <el-radio-group v-model="form.isCommonUse">
            <el-radio label="1">否</el-radio>
            <el-radio label="0">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="领取限制">
          <el-radio-group v-model="form.limitNum">
            <el-radio label="1">一天一张</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="使用限制">
          <el-radio-group v-model="form.limitUse">
            <el-radio label="1">一天一张</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="使用规则">
          <el-radio-group v-model="form.usedDate">
            <el-radio label="0">领后即可使用</el-radio>
            <el-radio label="1">领后次日可用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="领券方">
          <div class="">
            <el-radio-group v-model="form.activityLevel">
              <el-radio label="0" >全平台</el-radio>
              <el-radio label="4">商圈</el-radio>
              <el-radio label="5">商家</el-radio>
            </el-radio-group>
            <div class="" v-if="form.activityLevel==4">
              <el-tag
                v-for="tag in tags"
                :key="tag.name"
                style="">
                {{tag.districtName}}
              </el-tag>
              <el-button size="small" @click="sqRadio('get')">添加商圈</el-button>
            </div>
            <div class="" v-if="form.activityLevel==5">
              <el-tag
                v-for="tag in biztags"
                :key="tag.name"
                style="">
                {{tag.shopName}}
              </el-tag>
              <el-button size="small" @click="sqRadio('get')">添加店铺</el-button>
            </div>
          </div>
        </el-form-item>

        <el-form-item label="用券方">
          <div class="">
            <el-radio-group v-model="form.useActivityLevel">
              <el-radio label="0">全平台</el-radio>
              <el-radio label="4">商圈</el-radio>
              <el-radio label="5">商家</el-radio>
            </el-radio-group>
            <div class="" v-if="form.useActivityLevel==4">
              <el-tag
                v-for="tag in usetags"
                :key="tag.name"
                style="">
                {{tag.districtName}}
              </el-tag>
              <el-button size="small" @click="sqRadio('use')">添加商圈</el-button>
            </div>
            <div class="" v-if="form.useActivityLevel==5">
              <el-tag
                v-for="tag in usebiztags"
                :key="tag.name"
                style="">
                {{tag.shopName}}
              </el-tag>
              <el-button size="small" @click="sqRadio('use')">添加店铺</el-button>
            </div>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button>取消</el-button>
          <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog title="选择商圈" :visible.sync="dialogTableVisible">
      <div class="sqtable">
        <v-distpicker @selected="onselected"></v-distpicker>
        <el-button type="primary" @click="onAddsq()">确认添加</el-button>
      </div>
      <el-table v-loading="sqloading" :data="gridData" @selection-change="handleSelectionChange" max-height="500" ref="multipleTable">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column property="districtName" label="商圈名称" width="200"></el-table-column>
        <el-table-column property="shopNum" label="商家数量" width="200"></el-table-column>
      </el-table>
      <el-tag
        v-if="nowTags=='get'"
        v-for="tag in tags"
        :key="tag.name"
        closable
        @close="handleClose(tag)" style="margin-top:20px;">
        {{tag.districtName}}
      </el-tag>
      <el-tag
        v-if="nowTags=='use'"
        v-for="tag in usetags"
        :key="tag.name"
        closable
        @close="handleClose(tag)" style="margin-top:20px;">
        {{tag.districtName}}
      </el-tag>
    </el-dialog>
    <el-dialog title="选择商家" :visible.sync="bizdialogTableVisible">
      <div class="biztable">
        <v-distpicker @selected="onselected"></v-distpicker>
        <div class="section_biz">
          <el-select v-model="sqvalue" placeholder="请选择" @change="sqselectChange">
          <el-option
              v-for="item in gridData"
              :key="item.districtCode"
              :label="item.districtName"
              :value="item.districtCode">
            </el-option>
          </el-select>
          <el-button type="primary" @click="onAddbiz()">确认添加</el-button>
        </div>
      </div>
      <el-table v-loading="sqloading" :data="bizData" @selection-change="bizhandleSelectionChange" max-height="500" ref="bizmultipleTable">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column property="shopName" label="商家名称" width="200"></el-table-column>
      </el-table>
      <el-tag
        v-if="nowTags=='get'"
        v-for="tag in biztags"
        :key="tag.name"
        closable
        @close="bizhandleClose(tag)" style="margin-top:20px;">
        {{tag.shopName}}
      </el-tag>
      <el-tag
        v-if="nowTags=='use'"
        v-for="tag in usebiztags"
        :key="tag.name"
        closable
        @close="bizhandleClose(tag)" style="margin-top:20px;">
        {{tag.shopName}}
      </el-tag>
    </el-dialog>
  </div>
</template>

<script>
import api from '../../config/api';
import VDistpicker from 'v-distpicker';
export default {
  components:{VDistpicker},
   data() {
     return {
       sqloading: false,
       form: {
         name: '',
         isCommonUse:'1',
         fullMoney:'',
         fullSubtract:'',
         discount:'',
         platAssume:'',
         bizAssume:'',
         amount:'',
         date1: '',
         date2: '',
         activityLevel:'0',
         useActivityLevel:'0',
         choiceDateRule:'1',
         limitNum:'1',
         limitUse:'1',
         usedDate:'1',
         effectiveDate:''
       },
       dialogTableVisible: false,
       bizdialogTableVisible:false,
       gridData: [],//商圈
       bizData:[],//店铺数组
       sqtags:[],
       tags:[],//领券商圈
       biztags:[],//领券店铺
       usetags:[],//用券商圈
       usebiztags:[],//用券店铺
       nowTags:'',
       sqvalue:'',
       rules:{
         name:[{required:true,message:'请输入活动名称',trigger:'blur'}],
         fullMoney:[{required:true,message:'请输入领取条件',trigger:'blur'}],
         fullSubtract:[{required:true,message:'请输入使用条件',trigger:'blur'}],
         discount:[{required:true,message:'请输入满减金额',trigger:'blur'}],
         platAssume:[{required:true,message:'请输入平台承担金额',trigger:'blur'}],
         bizAssume:[{required:true,message:'请输入商家承担金额',trigger:'blur'}],
         amount:[{required:true,message:'请输入发放数量',trigger:'blur'}],
         date1:[{required:true,message:'请选择领取时间',trigger:'blur'}],
        //  date2:[{required:true,message:'请选择使用时间',trigger:'blur'}]
       }
     }
   },
   methods: {
     onSubmit(formName) {
       this.$refs[formName].validate((valid) => {
         if(valid){
           var chengdan =parseFloat(this.form.platAssume) +parseFloat(this.form.bizAssume);
           if(this.form.discount!=chengdan){
             this.$message('金额不相等');
             return;
           }
           var codes = [];
           var bizIds = [];
           var usecodes = [];
           var usebizIds = [];
           if(this.form.activityLevel==0){
             codes = ['0'];
           }
           if(this.form.activityLevel==4){
             for (var tag in this.tags) {
               codes.push(this.tags[tag].districtCode);
             }
             if(codes.length==0){
               this.$message('请选择领券商圈');
               return;
             }
           }
           if(this.form.activityLevel==5){
             for (var tag in this.biztags) {
               bizIds.push(this.biztags[tag].bizId);
             }
             if(bizIds.length==0){
               this.$message('请选择领券商家');
               return;
             }
           }
           if(this.form.useActivityLevel==0){
             usecodes = ['0'];
           }
           if(this.form.useActivityLevel==4){
             for (var tag in this.usetags) {
               usecodes.push(this.usetags[tag].districtCode);
             }
             if(usecodes.length==0){
               this.$message('请选择用券商圈');
               return;
             }
           }
           if(this.form.useActivityLevel==5){
             for (var tag in this.usebiztags) {
               usebizIds.push(this.usebiztags[tag].bizId);
             }
             if(usebizIds.length==0){
               this.$message('请选择用券商家');
               return;
             }
           }
           api.addPlatVouchar(this.form.name,this.form.isCommonUse,this.form.fullMoney,this.form.fullSubtract,
                              this.form.discount,this.form.date1[0],this.form.date1[1],this.form.platAssume,
                              this.form.bizAssume,this.form.date2[0],this.form.date2[1],this.form.amount,
                              this.form.limitNum,this.form.activityLevel,codes.join(','),bizIds.join(','),
                              this.form.useActivityLevel,usecodes.join(','),usebizIds.join(','),this.form.limitUse,
                              this.form.usedDate,this.form.choiceDateRule,this.form.effectiveDate)
                              .then(res=>{
                                this.$message({
                                  message: res.msg,
                                  type: 'success'
                                });
                                this.$router.back(-1);
                              })
         }else{
           console.log('error submit!!');
           return false;
         }
       });
     },
     sqRadio(item){
       this.nowTags = item;
       if(this.nowTags == "get"){
         if(this.form.activityLevel==4){
           this.dialogTableVisible = true;
         }else if (this.form.activityLevel==5) {
           this.bizdialogTableVisible = true;
         }
       }else{
         if(this.form.useActivityLevel==4){
           this.dialogTableVisible = true;
         }else if (this.form.useActivityLevel==5) {
           this.bizdialogTableVisible = true;
         }
       }
     },
     handleSelectionChange(val){
       console.log(val);
       this.sqtags = val;
     },
     bizhandleSelectionChange(val){
       this.sqtags = val;
     },
     onselected(data){
       console.log(JSON.stringify(data));
       this.sqloading = true;
       api.getByDistrictCode(data.area.code)
       .then(res=>{
         this.gridData = res.data;
         this.sqloading = false;
       })
     },
     handleClose(tag) {
       if(this.nowTags == "get"){
         this.tags.splice(this.tags.indexOf(tag), 1);
       }else{
         this.usetags.splice(this.usetags.indexOf(tag), 1);
       }

     },
     bizhandleClose(tag) {
       if(this.nowTags == "get"){
         this.biztags.splice(this.biztags.indexOf(tag), 1);
       }else{
         this.usebiztags.splice(this.usebiztags.indexOf(tag), 1);
       }

     },
     onAddsq:function(){
       if(this.nowTags == "get"){
         this.tags = this.tags.concat(this.sqtags);
       }else{
         this.usetags = this.usetags.concat(this.sqtags);
       }
       this.$refs.multipleTable.clearSelection();
       this.dialogTableVisible = false;
     },
     onAddbiz:function(){
       if(this.nowTags == "get"){
         this.biztags = this.biztags.concat(this.sqtags);
       }else{
         this.usebiztags = this.usebiztags.concat(this.sqtags);
       }
       this.$refs.bizmultipleTable.clearSelection();
       this.bizdialogTableVisible = false;
     },
     sqselectChange(val){
       this.sqloading = true;
       api.findByTakeaway(val)
       .then(res=>{
         this.bizData = res.data;
         this.sqloading = false;
       })
     }
   }
 }
</script>

<style lang="scss">
.addfullgift_page{
  background-color: white;
  margin-top: 20px;
  // width: 800px;
  padding: 10px 20px;
}
.sqtable{
  display: flex;
  justify-content: space-around;
}
.biztable{
  .section_biz{
    margin-top: 10px;
    display: flex;
    justify-content:space-between;
  }
}
</style>
