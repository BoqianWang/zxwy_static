<template lang="html">
<div class="">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item @click.native="$router.back(-1)">旅游产品</el-breadcrumb-item>
    <el-breadcrumb-item>编辑产品</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="editProduct_page">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="产品名称">
        <el-input v-model="form.platProduName" style="width:350px;"></el-input>
      </el-form-item>
      <el-form-item label="关联渠道">
        <el-radio-group v-model="form.relationWay">
          <el-radio-button label="1">驴妈妈</el-radio-button>
          <el-radio-button label="2">直签</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="关联产品">
        <el-input v-model="currentRow.productName" style="width:350px;margin-right:10px;" :disabled="true"></el-input>
        <el-button type="primary" icon="el-icon-edit" circle @click="relationClick()"></el-button>
      </el-form-item>
      <el-form-item label="票种(商品)">
        <el-select v-model="form.goodsId" placeholder="请选择票种" style="width:350px;"  @change="selectChange">
          <el-option
              v-for="item in currentRow.list"
              :key="item.goodsId"
              :label="item.goodsName"
              :value="item.goodsId">
            </el-option>
        </el-select>
      </el-form-item>
        <el-form-item label="商品价格">
          <el-tag>驴妈妈官方价:{{priceList.sellPrice}}</el-tag>
          <el-tag>景区市场价:{{priceList.marketPrice}}</el-tag>
          <el-tag>结算价:{{priceList.b2bPrice}}</el-tag>
        </el-form-item>
        <el-form-item label="关联日期">
          <el-date-picker
            v-model="form.dates"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader" 
            :action="actionApi"
            name="imgFile"
            :data="params"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.imgUrl" :src="form.imgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-button style="margin-top:10px;" @click="changeImg()">查询驴妈妈图片</el-button>
        </el-form-item>

        <el-form-item label="免费货架">
          <el-switch v-model="form.freeStatus"></el-switch>
        </el-form-item>
        <div class="" v-show="form.freeStatus">
          <el-form-item label="提前预约">
              <el-input v-model="form.freeDays" style="width:350px;"></el-input>
          </el-form-item>
          <el-form-item label="活动日期">
            <el-date-picker
              v-model="form.freeDates"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="价格库存">
            <el-button type="primary" icon="el-icon-edit" circle @click="pricesClick()"></el-button>
          </el-form-item>
        </div>
        <el-form-item>
            <el-button type="primary" @click="onSubmit()">确 定</el-button>
            <el-button v-if="form.goodsStatus==1" @click="updateProduct(2)">下 架</el-button>
            <el-button v-if="form.goodsStatus==0" @click="updateProduct(1)">上 架</el-button>
        </el-form-item>
    </el-form>
  </div>


  <el-dialog
  title="关联产品"
  :visible.sync="dialogVisible"
  width="30%">
  <div class="inputBox">
    <el-input v-model="relationText" placeholder="请输入内容" style="width:70%;"></el-input>
    <el-button type="primary" @click="searchClick()">查询</el-button>
  </div>
  <el-table :data="productList" max-height="500" ref="singleTable" highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column property="productName" label="名称" width="200"></el-table-column>
    <el-table-column property="placeToAddr" label="地址" width="200"></el-table-column>
  </el-table>
</el-dialog>

<el-dialog
  title="出行日期"
  :visible.sync="TableDialogVisible"
  width="50%">
  <el-date-picker
    v-model="outDates"
    type="daterange"
    @change="outChange"
    value-format="yyyy-MM-dd"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期">
  </el-date-picker>
  <el-table :data="pricesList" max-height="500">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column  label="价格" width="150">
      <template slot-scope="scope">
        <el-input v-model="scope.row.freePrice" style="width:100px;"></el-input>
      </template>
    </el-table-column>
    <el-table-column  label="库存" width="150">
      <template slot-scope="scope">
        <el-input v-model="scope.row.freeStock" style="width:100px;"></el-input>
      </template>
    </el-table-column>
  </el-table>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="priceSure()">确 定</el-button>
  </span>
</el-dialog>


<el-dialog
  title="选择图片"
  :visible.sync="imgdialogVisible"
  width="50%">
  <el-table
    ref="singleTable"
    :data="imgLists"
    highlight-current-row
    @current-change="imghandleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
     label="图片">
     <template slot-scope="scope">
       <img :src="scope.row" alt="" height="150" width="375">
     </template>
   </el-table-column>
  </el-table>
</el-dialog>

</div>
</template>

<script>
import api from '../../config/api';
// import uploadImg from '../../components/uploadImg.vue÷'
export default {
  // components:{
  //   uploadImg
  // },
  data(){
    return{
      actionApi: apiServer['travleApi'] + 'tour/platproducts/uploadFile',
      imgdialogVisible:false,
      imgLists:[],
      params:{
        token:''
      },
      form:{
        platProductId:'',
        platProduName:"",
        relationWay:"1",
        dates:'',
        freeStatus:true,
        freeDays:'3',
        freeDates:["2018-08-01","2018-08-31"],
        goodsStatus:'',
        imgUrl:'',
        price:'',
        platGoodsId:'',
        goodsId:''
      },
      dialogVisible:false,
      TableDialogVisible:false,
      relationText:'',
      productList:[],
      currentRow: {
        productName:'',
        list:[]
      },
      priceList:{
      },
      outDates:'',
      pricesList:[],
      isaddGoods:false
    }
  },
  activated(){
   this.form.platProduName = this.$route.query.platProduName;
   this.form.platProductId = this.$route.query.platProductId;
   this.params['token'] = localStorage.token;
   this.getProductDetail();
  },
  methods:{
    imghandleCurrentChange(val) {
        this.imgdialogVisible = false;
        this.form.imgUrl = val;
      },
    changeImg:function(){
      this.imgdialogVisible = true;
      this.imgLists  = [];
      var imgObj = JSON.parse(this.currentRow.productImages);
      if (Array.isArray(imgObj.image)) {
          // Array
          this.imgLists = imgObj.image;
      }else{
        this.imgLists.push(imgObj.image);
      }

    },
    getProductDetail:function(){
      api.productDetail(this.form.platProductId)
      .then(res=>{
        this.isaddGoods = res.data.goods?false:true;
        this.currentRow.productName = res.data.productName;
        this.currentRow.productId = res.data.productId;
        this.form.imgUrl = res.data.productImages;
        this.form.goodsId = res.data.goods?res.data.goods.goodsId:"";
        this.currentRow.list=res.data.goods?[{goodsName:res.data.goods.goodsName,goodsId:res.data.goods.goodsId}]:[];
        this.priceList =res.data.goods?{sellPrice:res.data.goods.sellPrice,marketPrice:res.data.goods.marketPrice,b2bPrice:res.data.goods.b2bPrice}:'';
        this.form.dates = res.data.beginDate?[res.data.beginDate,res.data.endDate]:["2018-08-01","2018-08-31"];
        this.form.freeStatus = res.data.goods.freeStatus==1?true:false;
        this.form.freeDates = [res.data.goods.freeBeginDate,res.data.goods.freeEndDate];
        this.form.freeDays = res.data.goods.freeDays;
        this.pricesList = res.data.goods.priceList;
        this.form.goodsStatus = res.data.goods.goodsStatus;
        this.form.platGoodsId = res.data.goods.platGoodsId;
      })
    },
    relationClick:function(){
      this.dialogVisible = true;
    },
    updateProduct:function(val){
      api.updateProduct(this.form.platProductId,val)
      .then(res=>{
        this.$message({
          message: res.msg,
          type: 'success'
        });
        this.getProductDetail();
      })
    },
    pricesClick:function(){
      this.TableDialogVisible = true;
    },
    searchClick:function(){
      api.searchProduct(this.relationText)
      .then(res=>{
        this.productList = res.data.list;
      })
    },
    handleCurrentChange(val) {

        this.currentRow = val;
        this.dialogVisible = false;
    },
    selectChange(val){
      console.log(this.form.goodsId);
      this.priceList = "";
      for (var i = 0; i < this.currentRow.list.length; i++) {
        var item = this.currentRow.list[i];
        if(item.goodsId == val){
          if(item.priceList){
              this.priceList = item.priceList[0];
          }
        }
      }
    },
    outChange:function(val){
      this.pricesList = [];
      var dateArr =  this.getday(val[0],val[1]);
      for (var i = 0; i < dateArr.length; i++) {
       var dateItem = {date:dateArr[i],freePrice:'0',freeStock:'20'};
       this.pricesList.push(dateItem);
      }
    },
    priceSure:function(){
      console.log(this.pricesList);
      this.TableDialogVisible = false
    },
    onSubmit:function(){
      this.form.price = this.priceList.marketPrice;
      console.log(this.form.dates[0]);
      var freeDateArr = [];var freePriceArr = []; var freeStockArr  =  [];
      for (var i = 0; i < this.pricesList.length; i++) {
       var item =   this.pricesList[i];
       freeDateArr.push(item.date);
       freePriceArr.push(item.freePrice);
       freeStockArr.push(item.freeStock);
      }
      var goodName = "";
      for (var i = 0; i < this.currentRow.list.length; i++) {
       var item =   this.currentRow.list[i];
       if(item.goodsId == this.form.goodsId){
         goodName  = item.goodsName;
         break;
       }
      }

      if(this.form.goodsId.length==0){
         this.$message('请选择票种');
         return;
      }


      if(this.isaddGoods){
        api.lvyouaddProduct(this.form.platProductId,this.form.platProduName,"1",this.form.dates[0],this.form.dates[1],
                            this.currentRow.productId,this.form.goodsId,goodName,"1",this.form.freeDays,
                            this.form.freeDates[0],this.form.freeDates[1],freeDateArr.toString(),freePriceArr.toString(),
                            freeStockArr.toString(),"0",this.form.imgUrl,this.form.price)
        .then(res=>{
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.$router.back(-1);
        })
      }else{
        api.lvyoueditProduct(this.form.platProductId,this.form.platProduName,"1",this.form.dates[0],this.form.dates[1],
                            this.currentRow.productId,this.form.goodsId,goodName,"1",this.form.freeDays,
                            this.form.freeDates[0],this.form.freeDates[1],freeDateArr.toString(),freePriceArr.toString(),
                            freeStockArr.toString(),"0",this.form.imgUrl,this.form.price,this.form.platGoodsId)
        .then(res=>{
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.$router.back(-1);
        })
      }


    },
    handleAvatarSuccess(res, file) {
      this.$message({
        message: "上传成功",
        type: 'success'
      });
        this.form.imgUrl = res.data.url;
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type == 'image/*';
        const isLt2M = file.size / 1024 / 1024 < 5;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是图片格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return  isLt2M;
      },
    getday: function(day1, day2) {
       var getDate = function(str) {
             var tempDate = new Date();
             var list = str.split("-");
             tempDate.setFullYear(list[0]);
             tempDate.setMonth(list[1] - 1);
             tempDate.setDate(list[2]);
             return tempDate;
         }
         var date1 = getDate(day1);
         var date2 = getDate(day2);
         if (date1 > date2) {
             var tempDate = date1;
             date1 = date2;
             date2 = tempDate;
         }
         date1.setDate(date1.getDate() + 1);
         var dateArr = [];
         var i = 0;
         while (!(date1.getFullYear() == date2.getFullYear()
                 && date1.getMonth() == date2.getMonth() && date1.getDate() == date2
                 .getDate())) {
              var dayStr =date1.getDate().toString();
                 if(dayStr.length ==1){
                     dayStr="0"+dayStr;
                 }
             dateArr[i] = date1.getFullYear() + "-" +   ("0" + (date1.getMonth() + 1)).slice(-2) + "-"
                     + dayStr;
             i++;
             date1.setDate(date1.getDate() + 1);
         }
      dateArr.splice(0,0,day1)
      dateArr.push(day2);
         return dateArr;
      }
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 150px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 350px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 350px;
  height: 150px;
  display: block;
}
.editProduct_page{
  background-color: white;
  margin-top: 20px;
  padding: 10px 20px;
}
.inputBox{
  display: flex;
  justify-content:space-between;
}
</style>
