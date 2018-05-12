<template>
	<div v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
		<el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item>设置管理</el-breadcrumb-item>
	      <el-breadcrumb-item>商家二维码</el-breadcrumb-item>
	    </el-breadcrumb>
	    <div class="hy_body p-10 bg-white m-t-10">
	        <!-- <p>商家二维码</p> -->

			<el-button class="m-b-10" type="primary" size="mini" @click="dialogStauts['createCode'] = true">新增</el-button>
			<el-table :data="shopCodeList" border style="width: 100%" max-height="600">
			    <!-- <el-table-column
			      prop="qrCodeId"
			      label="ID">
			    </el-table-column> -->
			    <el-table-column
			      type="index">
			    </el-table-column>
			    <el-table-column
			      prop="merchantNo"
			      label="二维码编号">
			    </el-table-column>
			    <el-table-column
			      label="店铺名称">
			      <template slot-scope="scope">
			      	 {{scope.row.shopName || '未填写'}}
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="qrCodeUrl"
			      label="二维码链接">
			    </el-table-column>
			    <el-table-column
			      prop="materialUrl"
			      label="物料链接">
			    </el-table-column>
			    <el-table-column
			      label="更新时间">
			      <template slot-scope="scope">
			      	{{ scope.row.updated | timeformat('yyyy-M-d hh:mm:ss') }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="创建时间">
			      <template slot-scope="scope">
			      	{{ scope.row.created | timeformat('yyyy-M-d hh:mm:ss') }}
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			      	  <p>
			      	    <el-button type="primary" size="mini" @click="createMaterial(scope.row)">生成物料</el-button>
			      	  	
			      	  </p>
			      	  <p class="p-t-10" v-show="scope.row.materialUrl">
			      	    <el-button type="primary" size="mini" @click="showMaterial(scope.row)">查看物料</el-button>
			      	  </p>
			      </template>
			    </el-table-column>
			</el-table>
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
	    </div>

	    <el-dialog
		  title="批量生产二维码"
		  :visible.sync="dialogStauts['createCode']"
		  width="420px" class="dialog-title">
		   <el-form ref="form" label-width="120px" :model="formDate">
		  	    <el-form-item label="输入生产数量">
		            <el-input auto-complete="off" v-model="formDate.num"></el-input>
		        </el-form-item>
		  </el-form>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['createCode'] = false">取 消</el-button>
			    <el-button type="primary" @click="createQRcode()">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
		<el-dialog
		  title="查看物料"
		  :visible.sync="dialogStauts['showCode']"
		  width="420px" class="dialog-title">
		   <div>
		   	   <img :src="showCodeImage" width="100%">
		   	   <!-- <div class="show-code-con" :style="{backgroundImage: 'url(' + showCodeImage + ')'}"></div> -->
		   </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['showCode'] = false">取 消</el-button>
			    <!-- <el-button type="primary" @click="createQRcode()">确 定</el-button> -->
			    <down-image :src="showCodeImage"></down-image>
			  </span>
		  </div>
		</el-dialog>
	</div>
</template>
<style>

</style>
<script>
	import fetch from '@/config/fetch';
	import downImage from '@/components/downImage';
	export default {
		components: {
			downImage
		},
		data() {
			return {
				params: {},
				shopCodeList: [],
				dialogStauts: {
					createCode: false,
					showCode: false
				},
				formDate: {
					num: ''
				},
				loading: false,
				showCodeImage: '',
			}
		},
		activated() {
			this.getShopCodeList();
		},
		mounted() {
		},
		methods: {
			// showDialog(type) {
			// 	this.dialogStauts[type] = true;
			// },
			//创建物料
			createMaterial(info) {
				this.loading = true;
				fetch.fetchPost('/material/v3.0/createMaterial',{
					type: 1,
					merNo: info.merchantNo
				}).then(res => {
					this.loading = false;
					this.$message({
			           message: res.msg,
			           type: 'success'
			        });
					this.params = {};
			        this.getShopCodeList();
				}).catch(res => {

				})
			},
			//显示物料
			showMaterial(info) {
				this.dialogStauts['showCode'] = true;
				this.showCodeImage = info['materialUrl']; 
			},
			//创建二维码
			createQRcode() {
				if(this.loading) {
					return;
				}
				this.loading = true;
				fetch.fetchPost('/businessmanage/v3.0/createQRcode',{
					num: this.formDate['num']
				}).then(res => {
					this.loading = false;
					this.$message({
			           message: res.msg,
			           type: 'success'
			        });
			        this.dialogStauts['createCode'] = false;
			        this.params = {};
			        this.getShopCodeList();
				}).catch(res => {

				})
			},
			//分页
			handleCurrentChange(currentPage){
		      this.params['pageNo'] = currentPage;
		      this.getShopCodeList();
		    },
			//获取商家二维码列表
			getShopCodeList() {
				this.loading = true;
				fetch.fetchPost('/businessmanage/v3.0/qRcodeList', this.params).then(res => {
					let result = res.data;
					this.shopCodeList = result.list;
					this.params = {
						pageSize: result.pageSize,
						total: result.total
					};
					setTimeout(() => {
						this.loading = false;
					}, 500)
				}).catch(res => {

				})
			}
		}
	}
</script>