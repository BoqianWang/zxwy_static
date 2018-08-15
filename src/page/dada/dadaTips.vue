<template>
	<div>
		<div class="tips-wrap bg-white p-10">
			<h3 class="text-center">达达小费设置</h3>
			<div class="flex-wrap justify-s-b  p-t-10">
				<div>
					<el-button type="primary" size="small" @click="addTime(1)">添加</el-button>
				</div>
				<div>
					<span>达达小费</span>
					<el-switch
					  v-model="open"
					  active-color="#13ce66"
					  inactive-color="#ff4949"
					  @change="onOffDadaTips">
					</el-switch>
				</div>
			</div>
			<div class="p-t-10">
				<el-table
				    :data="list"
				    border
				    style="width: 100%">
				    <el-table-column
				      prop="startTime"
				      label="开始时间">
				      <template slot-scope="scope">
				      	  <span>
				      	  	{{ scope.row.startTime }}
				      	  	<!-- <el-time-picker
							    v-model="scope.row.startTime"
							    range-separator="至"
							    value-format="HH:mm:ss"
							    start-placeholder="开始时间"
							    end-placeholder="结束时间"
							    placeholder="选择时间范围">
							 </el-time-picker> -->
				      	  	 <!-- <el-time-picker
							    :value="stampToTime(scope.row.startTime)"
							    range-separator="至"
							    value-format="HH:mm:ss"
							    start-placeholder="开始时间"
							    end-placeholder="结束时间"
							    placeholder="选择时间范围">
							 </el-time-picker> -->
				      	  </span>
				      </template>
				    </el-table-column>

				    <el-table-column
				      prop="endTime"
				      label="结束时间">
				      <template slot-scope="scope">
				      	  <span>
				      	  	{{ scope.row.endTime }}
				      	  	<!-- <el-time-picker
							    v-model="scope.row.endTime"
							    range-separator="至"
							    value-format="HH:mm:ss"
							    start-placeholder="开始时间"
							    end-placeholder="结束时间"
							    placeholder="选择时间范围">
							 </el-time-picker> -->
				      	  	<!-- <el-time-picker
							    :value="stampToTime(scope.row.endTime)"
							    range-separator="至"
							    value-format="HH:mm:ss"
							    start-placeholder="开始时间"
							    end-placeholder="结束时间"
							    placeholder="选择时间范围">
							 </el-time-picker> -->
				      	  </span>
				      </template>
				    </el-table-column>

				    <el-table-column
				      prop="tips"
				      label="小费金额">
						<template slot-scope="scope">
							¥ {{ scope.row.tips }}<!-- <el-input class="tips-input" v-model="scope.row.tips" placeholder="小数点后一位"></el-input> -->
						</template>
				    </el-table-column>
				    <el-table-column
				      prop="created"
				      label="创建时间">
						<template slot-scope="scope">
							<span>
								{{ scope.row.created | timeformat('yyyy-M-d hh:mm:ss') }}
							</span>
						</template>
				    </el-table-column>
				    <el-table-column
				      prop="status"
				      label="操作">
						<template slot-scope="scope">
				      	  <span>
				      	  	 <!-- {{ tipsStatus[scope.row.status] }} -->
						     <!-- <p class="p-b-10">
						     	<el-switch
								  v-model="scope.row.status"
								  active-color="#13ce66"
								  inactive-color="#ff4949">
								</el-switch>
						     </p> -->
						     <p class="p-b-10">
						     	<el-button type="primary" size="small" @click="updateTime(1, scope.row)">编辑</el-button>
						     </p>
						     <p>
						     	<el-button type="danger" size="small" @click="deleteDadaTip(scope.row)">删除</el-button>
						     </p>

				      	  </span>
				      </template>
				    </el-table-column>
				</el-table>
			</div>
		</div>
		<!-- 修改 -->
		<el-dialog
		  title="修改达达小费"
		  :visible.sync="dialogStauts['update']" class="dialog-title text-center">
		  <div>
		  	  <span>
		  	  	  <el-time-picker
				    v-model="section.startTime"
				    range-separator="至"
				    value-format="HH:mm:ss"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				  </el-time-picker>
				  至
				  <el-time-picker
				    v-model="section.endTime"
				    value-format="HH:mm:ss"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				  </el-time-picker>
		  	  </span>
			  <span class="p-l-10">
				  自动添加小费: 
				  <el-input class="tips-input"
				    placeholder="¥小数点后一位"
				    v-model="section.tips">
				  </el-input>
			  </span>
		  </div>
		  <div class="text-center p-t-10 m-t-10">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['update'] = false">取 消</el-button>
			    <el-button type="primary" @click="updateTime(2, section)">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>

		<!-- 添加设置达达小费 -->
		<el-dialog
		  title="添加时间段"
		  :visible.sync="dialogStauts['tips']" class="dialog-title text-center">
		  <div>
		  	  <div>
		  	  	<!-- <el-time-picker
				    is-range
				    v-model="addTimeLine"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				</el-time-picker> -->
		  	  </div>
		  	  <span>
		  	  	  <el-time-picker
				    v-model="addTimeLine.startTime"
				    range-separator="至"
				    value-format="HH:mm:ss"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				  </el-time-picker>
				  至
				  <el-time-picker
				    v-model="addTimeLine.endTime"
				    value-format="HH:mm:ss"
				    range-separator="至"
				    start-placeholder="开始时间"
				    end-placeholder="结束时间"
				    placeholder="选择时间范围">
				  </el-time-picker>
		  	  </span>
			  <span class="p-l-10">
				  自动添加小费: 
				  <el-input class="tips-input"
				    placeholder="¥小数点后一位"
				    v-model="addTimeLine.tips">
				  </el-input>
			  </span>
		  </div>
		  <div class="text-center p-t-10 m-t-10">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['tips'] = false">取 消</el-button>
			    <el-button type="primary" @click="addTime(2)">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
	</div>
</template>
<style scoped>
	.tips-wrap {
		/*max-width: 740px;*/
	}
	.tips-input {
		width: auto;
	}
</style>
<script>
	import fetch from '@/config/fetch.js';
	export default {
		data() {
			return {
				open: false,
				list: [],
				dialogStauts: {
					tips: false,
					update: false
				},
				addTimeLine: {
					startTime: '',
					endTime: '',
					tips: ''
				},
				tipsStatus: {
					0: '关闭',
					1: '开启'
				},
				section: {}
			}
		},
		activated() {
			this.getList();
		},
		methods: {
			//更新时间
			updateTime(type, info) {
				if(type == 1) {
					this.dialogStauts.update = true;
					this.section = {
						id: info.id,
						startTime: info.startTime,
						endTime: info.endTime,
						tips: info.tips
					};
				} else {
					this.saveDadaTip(info);
				}
			},
			//保存达达配置
			saveDadaTip(info) {
				fetch.fetchPost('dadaConfig/updateDadaTip', {
					dId: info.id,
					startTime: info.startTime,
					endTime: info.endTime,
					tips: info.tips
				}).then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
			        this.dialogStauts.update = false;
			        this.getList();
				}).catch(res => {

				})
			},
			//开启关闭达达配送
			onOffDadaTips() {
				let status = this.open === true ? 1 : 0;
				fetch.fetchPost('dadaConfig/updateDadaTipSet', {
					status: status,
				}).then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
				}).catch(res => {

				})
			},
			//删除
			deleteDadaTip(info) {
				var res = confirm('你确定要删除吗?');
				if(res) {
					fetch.fetchPost('dadaConfig/deleteDadaTip', {
						dId: info.id
					}).then(res => {
						if(res.code == 0) {
							this.$message({
					          message: res.msg,
					          type: 'success'
					        });
					        this.getList();
						}
					}).catch(res => {

					})
				}
			},
			//添加时间段
			addTime(type, info) {
				if(type == 1) {
					this.dialogStauts['tips'] = true;
					this.addTimeLine = {}
				} else if(type == 2) {
					this.addDadaTips();
				}	
			},
			//添加小费
			addDadaTips() {
				// console.log(this.addTimeLine);
				fetch.fetchPost('dadaConfig/insertDadaTip', {
					startTime: this.addTimeLine.startTime,
					endTime: this.addTimeLine.endTime,
					tips: this.addTimeLine.tips	
				}).then(res => {
					if(res.code == 0) {
						this.$message({
				          message: res.msg,
				          type: 'success'
				        });
				        this.dialogStauts['tips'] = false;
				        this.getList();
					}
				}).catch(res => {

				})
			},
			//获取时间段列表
			getList() {
				fetch.fetchPost('dadaConfig/dadaTipSet', {

				}).then(res => {
					this.list = res.data;
					this.formatTime(this.list);
					if(this.list.length) {
						this.open = this.list[0].status == 0 ? false : true;
					}
				}).catch(res => {

				})
			},
			formatTime(data) {
				for(let item of data) {
					item['endTime'] = this.stampToTime(item['endTime']);
					item['startTime'] = this.stampToTime(item['startTime']);
				}

			}, 
			//时间戳
			stampToTime(stamp) {
				return Tools.TimestampToDate('hh:mm:ss', stamp / 1000);
			}
		}	
	}
</script>