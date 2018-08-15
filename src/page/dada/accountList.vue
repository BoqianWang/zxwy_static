<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item>账号列表</el-breadcrumb-item>
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
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			      	<p>
			      	  <el-button type="primary" @click="getAccoutDetial(scope.row)">编辑</el-button>
			      	</p>
					<p class="p-t-10">
			      	  <el-button v-if="scope.row.isAccount == 0" type="primary" @click="registerAccount(scope.row)">注册</el-button>
					</p>
					<p class="p-t-10">
			      	  <el-button v-if="scope.row.isStore == 0" type="primary" @click="openAccount(scope.row)">开通</el-button>
					</p>
			      </template>
			    </el-table-column>
	    	</el-table>
	    </div>
	    <el-dialog
		  title="编辑资料"
		  :visible.sync="dialogStauts['editDetail']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="100px" :model="accoutDetial">
		  		 <el-form-item label="达达Id">
		            <el-input disabled auto-complete="off" v-model="accoutDetial.dadaId"></el-input>
		         </el-form-item>
		         <el-form-item label="商户Id">
		            <el-input disabled auto-complete="off" v-model="accoutDetial.bizId"></el-input>
		         </el-form-item>
		         <el-form-item label="业务类型">
		            <el-input auto-complete="off" v-model="accoutDetial.business" placeholder="不要问,直接填: 1"></el-input>
		         </el-form-item>
		         <el-form-item label="城市名称">
		            <el-input auto-complete="off" v-model="accoutDetial.cityName" placeholder="不要问,直接填: 深圳"></el-input>
		         </el-form-item>
		         <el-form-item label="城市编码">
		            <el-input auto-complete="off" v-model="accoutDetial.cityCode" placeholder="不要问,直接填: 0755"></el-input>
		         </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['editDetail'] = false">取 消</el-button>
			    <el-button type="primary" @click="saveAccountDetail">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
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
				dialogStauts: {
					editDetail: false
				},
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

				],
				accoutDetial: {}
			}
		},
		activated() {
			this.getAcountList();
		},
		methods: {
			//保存达达账号资料
			saveAccountDetail() {
				fetch.fetchPost('/dadaConfig/editDada', {
					dadaId: this.accoutDetial.dadaId,
					bizId: this.accoutDetial.bizId,
					business: this.accoutDetial.business,
					cityName: this.accoutDetial.cityName,
					cityCode: this.accoutDetial.cityCode
				}).then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
			        this.dialogStauts['editDetail'] = false;
				}).catch(res => {

				})
			},
			//开通门店
			openAccount(info) {
				let bizId = info.bizId;
				fetch.fetchPost('dadaConfig/openDadaStore', {
					bizId: bizId
				}).then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
					info.isStore = 1;
				}).catch(res => {

				})
			},
			//注册达达商户
			registerAccount(info) {
				let bizId = info.bizId;
				fetch.fetchPost('dadaConfig/auditDada', {
					bizId: bizId,
					type: 1
				}).then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
					info.isStore = 1;
				}).catch(res => {

				})
			},
			//获取账号详情
			getAccoutDetial(info) {
				let dadaId = info.dadaId;
				this.dialogStauts['editDetail'] = true;
				fetch.fetchPost('dadaConfig/dadaDetail', {
					dadaId: dadaId
				}).then(res => {
					this.accoutDetial = res.data;
				}).catch(res => {

				})
			},
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
				fetch.fetchPost('dadaConfig/dadaList', this.params).then(res => {
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