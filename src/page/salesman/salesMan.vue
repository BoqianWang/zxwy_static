<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item>业务员管理</el-breadcrumb-item>
	    </el-breadcrumb>
	    <div class="hy_body p-10 bg-white m-t-10">
	    	<el-button class="m-b-10" type="primary" size="mini"  @click="Dialog('show', 'addSalesManDialog')">新增</el-button>
			<el-table :data="salesManList" border style="width: 100%" max-height="600">
				<el-table-column
			      prop="aId"
			      label="业务员ID">
			    </el-table-column>
			    <el-table-column
			      prop="username"
			      label="标识">
			    </el-table-column>
			    <el-table-column
			      prop="realName"
			      label="姓名">
			    </el-table-column>
			    <el-table-column
			      prop="phone"
			      label="手机号码">
			    </el-table-column>
			    <el-table-column
			      prop="regTime"
			      label="注册时间">
			      <template slot-scope="scope">
			      	  {{ scope.row.regTime | timeformat('yyyy-M-d hh:mm:ss') }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="登录时间">
			      <template slot-scope="scope">
			      	  {{ scope.row.lastLoginTime | timeformat('yyyy-M-d hh:mm:ss') }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			      	  <p>
			      	    <el-button type="primary" size="mini" @click="editSalesMan(1, scope.row)">编辑</el-button>
			      	  </p>
			      	  <!-- <p class="p-t-10">
			      	    <el-button type="primary" size="mini" @click="addSalesMan(scope.row)">删除</el-button>
			      	  </p> -->
			      </template>
			    </el-table-column>
			</el-table>
	    </div>
	    <div class="shop-code-container m-t-10">
				<div class="block">
			      <el-pagination
			        layout="prev, pager, next"
			        :page-size="params['pageSize']"
			        :total="params['total']"
			        @current-change="handleCurrentChange">
			      </el-pagination>
			    </div>
		</div>
	    <el-dialog
		  title="添加业务员"
		  :visible.sync="dialogStauts['addSalesManDialog']"
		  width="420px" class="dialog-title">
		   <el-form ref="form" label-width="80px" :model="formDate">
		  	    <el-form-item label="手机号">
		            <el-input auto-complete="off" v-model="formDate.phone"></el-input>
		        </el-form-item>
		        <el-form-item label="密码">
		            <el-input auto-complete="off" v-model="formDate.sysPassword"></el-input>
		        </el-form-item>
		        <el-form-item label="真实姓名">
		            <el-input auto-complete="off" v-model="formDate.realName"></el-input>
		        </el-form-item>
		   </el-form>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['addSalesManDialog'] = false">取 消</el-button>
			    <el-button type="primary" @click="addSalesMan">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
		<el-dialog
		  title="编辑业务员"
		  :visible.sync="dialogStauts['editSalesManDialog']"
		  width="420px" class="dialog-title">
		   <el-form ref="form" label-width="80px" :model="editSalesManFrom">
		  	    <el-form-item label="手机号">
		            <el-input auto-complete="off" v-model="editSalesManFrom.phone"></el-input>
		        </el-form-item>
		        <el-form-item label="密码">
		            <el-input auto-complete="off" placeholder='可以不填' v-model="editSalesManFrom.sysPassword"></el-input>
		        </el-form-item>
		        <el-form-item label="真实姓名">
		            <el-input auto-complete="off" v-model="editSalesManFrom.realName"></el-input>
		        </el-form-item>
		   </el-form>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['editSalesManDialog'] = false">取 消</el-button>
			    <el-button type="primary" @click="editSalesMan(2)">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
	</div>
</template>
<style>
	
</style>
<script>
	import fetch from '@/config/fetch';
	export default {
		data() {
			return {
				salesManList: [],
				params: {},
				formDate: {},
				dialogStauts: {
					addSalesManDialog: false,
					editSalesManDialog: false
				},
				editSalesManFrom: {},
				section: {}
			}
		},
		activated() {
			this.getSalesManList(this.params);
		},
		mounted() {

		},
		methods: {
			//显示弹框
			Dialog(stauts, type) {
				if(stauts == 'hide') {
					this.dialogStauts[type] = false;
				}
				else {
					this.dialogStauts[type] = true;
				}
			},
			//编辑业务员
			editSalesMan(type, info) {
				if(type == 1) {
					this.editSalesManFrom = {
						aId: info['aId'],
						phone: info['phone'],
						realName: info['realName'],
						sysPassword: info['sysPassword']
					};
					this.section = info;
					this.Dialog('show', 'editSalesManDialog');
				}
				else if(type == 2) {
					fetch.fetchPost('/sysAccount/eidtSalesman', this.editSalesManFrom).then(res => {
						for(let i in this.editSalesManFrom) {
							this.section[i] = this.editSalesManFrom[i];
						}
						this.$message({
				           message: res.msg,
				           type: 'success'
				        });
				        this.Dialog('hide', 'editSalesManDialog');
					}).catch(res => {

					})
				}
			},
			//分页
			handleCurrentChange(currentPage){
		      this.params['pageNo'] = currentPage;
		      this.getShopCodeList();
		    },
			//添加业务员
			addSalesMan() {
				fetch.fetchPost('/sysAccount/addSalesman', this.formDate).then(res => {
					this.$message({
			           message: res.msg,
			           type: 'success'
			        });
			        this.Dialog('hide', 'addSalesManDialog');
			        this.getSalesManList();
			        this.formDate = {};
				}).catch(res => {

				})
			},
			//获取业务员列表
			getSalesManList(params = {}) {
				fetch.fetchPost('/sysAccount/getByList', params).then(res => {
					let result = res.data;
					this.salesManList = result.list;
					this.params = {
						pageSize: result.pageSize,
						total: result.total
					};
				}).catch(res => {

				})
			}
		}
	}
</script>