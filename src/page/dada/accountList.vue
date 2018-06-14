<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item>业务员管理</el-breadcrumb-item>
	    </el-breadcrumb>
	    <div class="hy_body p-10 bg-white m-t-10">
		    <el-form :inline="true" :model="params" class="demo-form-inline">
			  <el-form-item label="店铺名称">
			    <el-input v-model="params.keyword" placeholder="店铺名称"></el-input>
			  </el-form-item>
			  <el-form-item label="店铺审核状态">
			    <el-select v-model="params.type" placeholder="活动区域">
			      <el-option v-for="item in type" :label="item.name" :value="item.value"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="search">查询</el-button>
			  </el-form-item>
			</el-form>
	    	<el-table :data="list" border style="width: 100%" max-height="600">
	    		<el-table-column
			      prop="bizId"
			      label="bizId">
			    </el-table-column>
			    <el-table-column
			      prop="shopName"
			      label="店铺名称">
			    </el-table-column>
			    <el-table-column
			      prop="mobile"
			      label="达达账号">
			    </el-table-column>
			    <el-table-column
			      prop="passwd"
			      label="达达账号密码">
			    </el-table-column>
			    <el-table-column
			      label="商家账号">
			      <template slot-scope="scope">
			      	  {{ isDada[scope.row.isDada] }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="businessType"
			      label="业务类型">
			    </el-table-column>
			    <el-table-column
			      label="是否开通达达">
			      <template slot-scope="scope">
			      	  {{ isAccount[scope.row.isAccount] }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="创建时间">
			      <template slot-scope="scope">
			      	  {{ scope.row.created | timeformat('yyyy-M-d hh:mm:ss') }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="申请状态">
			      <template slot-scope="scope">
			      	  {{ status[scope.row.status] }}
			      </template>
			    </el-table-column>
	    	</el-table>
	    </div>
	    <el-pagination
		layout="prev, pager, next"
        :page-size="params['pageSize']"
        :total="params['total']"
        @current-change="handleCurrentChange">
      </el-pagination>
	</div>
</template>
<style>
	

</style>
<script>
	import fetch from '@/config/fetch';
	export default {
		data() {
			return {
				params: {
					pageNo: 1,
					pageSize: 20,
					keyword: '',
					type: 0
				},
				list: [],
				isDada: {
					0: '否',
					1: '是'
				},
				isAccount: {
					0: '否',
					1: '是'
				},
				isStore: {
					0: '否',
					1: '是'
				},
				status: {
					0: '已提交申请',
					1: '申请通过',
					2: '申请不通过'
				},
				type: [
					{value: 0, name: '全部'},
					{value: 1, name: '待审核'},
					{value: 2, name: '申请通过'},
					{value: 3, name: '申请不通过'},

				]
			}
		},
		activated() {
			this.getAcountList();
		},
		monuted() {

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
				fetch.fetchPost('/dadaConfig/dadaList', this.params).then(res => {
					let result = res.data;
					this.list = result['list'];
					this.params['pageSize'] = result.pageSize;
					this.params['total'] = result.total;
				}).catch(res => {

				})
			}
		},
	}
</script>