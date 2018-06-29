<template>
	<div>
		<h2 class="text-center">待接单商家</h2>
		<div class="hy_body bg-white p-10 m-t-10">
			<el-form ref="form" :inline="true" class="demo-form-inline">
			  <el-form-item label="时间范围">
			    <el-select v-model="params.minutes">
			      <el-option v-for="item in minutes" :label="item.desc" :value="item.value"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
			</el-form>
			<el-table :data="list" border style="width: 100%" max-height="600">
				<el-table-column
			      prop="bizId"
			      label="店铺id" align="center">
			    </el-table-column>
				<el-table-column
			      prop="shopName"
			      label="商家名称" align="center">
			    </el-table-column>
				<el-table-column
			      prop="isOnline"
			      label="在线状态" align="center">
			      <template slot-scope="scope">
			      	  <span>
			      	  	 {{ scope.row.isOnline }}
			      	  </span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="num"
			      label="待接单数量" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="tel"
			      label="联系电话" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="shopStreet"
			      label="商家地址" align="center">
			    </el-table-column>
			    <el-table-column
			      label="操作" align="center">
			      <template slot-scope="scope">
			      	  <a :href="'#/manage/takeoutOrderDetail?bizId=' + scope.row.bizId">
			      	    <el-button type="danger" size="mini">查看</el-button>
			      	  </a>
			      </template>
			    </el-table-column>
			</el-table>
			<div class="block" v-if="list.length">
		      <el-pagination
		        layout="prev, pager, next"
		        :page-size="params['pageSize']"
		        :total="params['total']"
		        @current-change="handleCurrentChange">
		      </el-pagination>
		    </div>
		</div>
	</div>
</template>
<style>
	
</style>
<script>
	import fetch from '@/config/fetch.js';
	export default {
		data() {
			return {
				onLineStatus: {
					0: '未登录',
					1: '已登录'
				},
				list: [],
				params: {
					minutes: 5
				},
				minutes: [
					{value: 2, desc: '2分钟之外'},
					{value: 4, desc: '4分钟之外'},
					{value: 5, desc: '5分钟之外'},
					{value: 6, desc: '6分钟之外'},
					{value: 8, desc: '8分钟之外'},
					{value: 10, desc: '10分钟之外'},
					{value: 15, desc: '15分钟之外'}
				]
			}
		},
		activated() {
			this.getList();
		},
		methods: {
			onSubmit() {
				// console.log(this.params['minutes']);
				this.getList();
			},
			getList() {
				fetch.fetchPost('/orderManage/waitingMerchantList', this.params).then(res => {
					let result = res.data;
					this.list = result.list;
					this.setPage(result);
				}).catch(res => {

				})
			},
			setPage(data) {
				this.params['pageSize'] = data.pageSize;
				this.params['total'] = data.total;
				// this.$set(this.params, 'pageSize', data.pageSize);
				// this.$set(this.params, 'total', data.total);
			},
			//分页
			handleCurrentChange(currentPage){
		      this.params['pageNo'] = currentPage;
		      this.getShopCodeList();
		    },
		}
	}
</script>