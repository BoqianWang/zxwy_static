<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item>旅游订单列表</el-breadcrumb-item>
	    </el-breadcrumb>
	    <div class="hy_body p-10 bg-white m-t-10">
		    <el-form :inline="true" :model="params" class="demo-form-inline">
			  <el-form-item label="手机号">
			    <el-input v-model="params.phone" placeholder="手机号"></el-input>
			  </el-form-item>
			  <el-form-item label="店铺审核状态" >
           <el-select v-model="params.orderStatus" placeholder="请选择订单状态">
            <el-option label="已受理" value="1"></el-option>
            <el-option label="待出行" value="2"></el-option>
            <el-option label="已完成" value="3"></el-option>
            <el-option label="已过期" value="4"></el-option>
            <el-option label="已退款" value="5"></el-option>
          </el-select>
			  </el-form-item>
        <el-form-item label="下单日期">
        </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="search">查询</el-button>
			  </el-form-item>
			</el-form>
	    	<el-table :data="list" v-loading="loading" border style="width: 100%" max-height="600">
			    <el-table-column
			      prop="orderNo"
			      label="订单编号">
			    </el-table-column>
			    <el-table-column
			      prop="phone"
			      label="会员账号">
			    </el-table-column>
			    <el-table-column
			      prop="orderTime"
			      label="下单时间">
			    </el-table-column>
			    <el-table-column
            prop="platProduName"
			      label="景点名称">
			    </el-table-column>
			    <el-table-column
			      prop="visitDate"
			      label="出游日期">
			    </el-table-column>
			    <el-table-column
			      label="订单类型">
			      <template slot-scope="scope">
              {{scope.row.orderType=="FREE"?"免费":"折扣"}}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="订单状态">
			      <template slot-scope="scope">
              {{orderStatusDic[scope.row.orderStatus]}}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="渠道">
			      <template slot-scope="scope">
              {{scope.row.relationWay==1?"驴妈妈":"其他"}}
			      </template>
			    </el-table-column>
          <el-table-column
			      label="支付价/结算价">
			      <template slot-scope="scope">
              {{scope.row.orderPrice}}/{{scope.row.orderAmount}}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			      	<div v-show="scope.row.orderStatus==1">
                <el-button type="text" @click="xiadanClick(scope.row)">下单</el-button>
			      	</div>
              <div v-show="scope.row.orderStatus==2||scope.row.orderStatus==4">
                <el-button type="text" @click="tuikuanClick(scope.row)">退款</el-button>
              </div>
			      </template>
			    </el-table-column>
	    	</el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :page-size='params.pageSize'
            :total="totalPage"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
	    </div>
	</div>
</template>
<style>


</style>
<script>
	import api from '../../config/api';
	export default {
		data() {
			return {
        loading: false,
        totalPage:20,
				params: {
					pageNo: 1,
					pageSize: 20,
					phone: '',
					orderStatus: '',
          orderTime:'',
          orderType:''
				},
				list: [],
        orderStatusDic:{
          1: '已受理',
          2: '待出行',
          3: '已完成',
          4: '已过期',
          5: '已退款'
        }
			}
		},
		activated() {
			this.getAcountList();
		},
		methods: {
			search() {
		      this.params['pageNo'] = 1;
		      this.getAcountList();

			},
			//分页
			handleCurrentChange(currentPage){
		      this.params['pageNo'] = currentPage;
		      this.getAcountList();
		    },
			getAcountList() {
        this.loading = true;
        api.lyorderList(this.params.pageNo,this.params.phone,this.params.orderStatus,this.params.orderTime,this.params.orderType)
        .then(res=>{
          this.list = res.data.list;
          this.loading = false;
        })
			},
      xiadanClick:function(item){
        this.loading = true;
        api.xiadanProduct(item.orderId)
        .then(res=>{
          this.loading = false;
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.getAcountList();
        })
				.catch(error=>{
		      this.loading = false;
		    })
      },
      tuikuanClick:function(item){
        this.loading = true;
        api.cancelProduct(item.orderId)
        .then(res=>{
          this.loading = false;
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.getAcountList();
        })
				.catch(error=>{
		      this.loading = false;
		    })
      }
		},
	}
</script>
