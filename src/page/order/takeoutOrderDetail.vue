<template>
	<div>
		<h2 class="text-center">商家待接单订单界面</h2>
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
			      prop="recipientName"
			      label="用户昵称" align="center">
			    </el-table-column>
				<el-table-column
			      prop="recipientPhone"
			      label="用户电话" align="center">
			    </el-table-column>
				<el-table-column
			      prop="address"
			      label="用户地址" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="actualCost"
			      label="订单金额(元)" align="center">
			    </el-table-column>
			    <el-table-column
			      prop="payTime"
			      label="下单时间" align="center">
			      <template slot-scope="scope">
			      	  <span>
			      	  	 {{ scope.row.payTime | timeformat('yyyy-M-d hh:mm:ss') }}
			      	  </span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="orderStatus"
			      label="订单状态" align="center">
			      <template slot-scope="scope">
			      	  <span>
			      	  	 {{ orderStatus[scope.row.orderStatus] }}
			      	  </span>
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
				list: [],
				params: {
					bizId: this.$route.query.bizId,
					minutes: 5
				},
				orderStatus: {
					1: '订单待支付',
					2: '已支付',
					3: '已接单',
					4: '已拒单',
					5: '已发货',
					6: '已完成',
					7: '申请退款',
					8: '退款成功',
					9: '拒退款',
					10: '订单已关闭',
					0: '订单已取消',
					//达达
					31: '等待骑手接单',
					32: '骑手已接单',
					33: '配送中',
					34: '已完成',
					35: '骑手接单已取消',
					37: '已过期',
					38: '指派单',
					39: '妥投异常之物品返回中',
					310: '妥投物品异常之返回完成',
					1000: '创建达达运单失败'
				},
				minutes: [
					{value: 2, desc: '2分钟'},
					{value: 4, desc: '4分钟'},
					{value: 5, desc: '5分钟'},
					{value: 6, desc: '6分钟'},
					{value: 8, desc: '8分钟'},
					{value: 10, desc: '10分钟'},
					{value: 15, desc: '15分钟'}
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
				fetch.fetchPost('/orderManage/waitingOrdrerList', this.params).then(res => {
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