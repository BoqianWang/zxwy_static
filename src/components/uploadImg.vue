<template>
	<div class="width-100 height-100">
		<div class="width-100 height-100 rel upload-wrap" :style="'background-image: url(' + imgSrc + '); background-size: cover;'">
			<div class="abs option-wrap">
				<el-button size="small" class="width-100" type="primary" @click="viewImage">{{'预览'}}</el-button>
				<el-upload class="upload-img m-t-10" 
				:show-file-list="false" 
				:action="uploadUrl" 
				:data="imgParams" 
				:auto-upload="true" 
				:on-progress="progress" 
				:on-success="success"
				:before-upload="beforeUpload">
					<el-button type="primary" size="small">{{'点击上传'}}</el-button>
				</el-upload>
			</div>
			<el-progress class='width-100 abs upload-progress' v-show="progressShow" 
			:text-inside="true" 
			:show-text="true" 
			:stroke-width="20" 
			:percentage="percent" 
			:status="successType"></el-progress>
		</div>
		<el-dialog
		  title="图片详情"
		  :visible.sync="imageInfo"
		  width="720px" class="dialog-title">
		  <div>
		  	  <img :src="imgSrc" width="100%">
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="imageInfo = false">取 消</el-button>
			    <el-button type="primary" @click="imageInfo = false">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
	</div>
</template>
<style>
    .option-wrap {
    	bottom: 20px;
    	left: 50%;
    	transform: translate3d(-50%, 0, 0);
    }
	.width-100,.option-wrap .el-upload {
		width: 100%;
	}
	.upload-progress {
		left: 0;
		bottom: 0;
	}
	/*.upload-wrap .el-progress.is-success .el-progress-bar__inner {
		background: rgba(103, 103, 58, .9);
	}*/
</style>
<script>
	/**
	 * 图片上传组件
	 * <uploadImg :imgParams="{...}" v-model='...' url=".."></uploadImg>
	 * imgParams  上传图片的参数
	 * src		  当前图片路径
	 * url        上传图片地址   可填
	 */
	import api from '../config/fetch.js';
	export default {
		props: ['imgParams', 'value'],
		data() {
			return {
				//请求地址
				uploadUrl: this.url || api.baseURL + '/businessmanage/v3.0/file',
				percent: 50,
				//是否显示进度条
				progressShow: false,
				// 进度条颜色
				successType: 'exception',

				// 是否正在上传
				isUpload: false,
				imageInfo: false,
				imageDefaltUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524629017039&di=f4953414b1f45510e76b52ce65e0aec9&imgtype=0&src=http%3A%2F%2Fwww.pptok.com%2Fd%2Ffile%2Fp%2F20151229%2F5c9a3491df3102de0dcaa36b37b5157d.jpg',
			}
		},
		computed: {
			//监听路径是否已经改变
			imgSrc() {
				return this.value ? this.value : this.imageDefaltUrl;
			}
		},
		mounted() {
			this.imgParams['token'] = localStorage.token;
		},
		methods: {
			//预览图片
			viewImage() {
				this.imageInfo = true;
			},
			// 上传之前
			beforeUpload() {
				if(this.isUpload) {
					Message.error('图片正在上传');
					return false;
				}
				this.progressShow = true;
				this.isUpload = true;
			},
			// 上传中
			progress(res) {
				this.percent = res.percent;
			},
			// 上传成功
			success(res) {
				if(res.code == 0) {
					this.successType = 'success';
					this.isUpload = false;

					this.$message({
			          message: '图片上传成功',
			          type: 'success'
			        });

					this.$emit('input', res.data.url);
					this.hideProgress();
				} else {
					this.$message({
			          message: res.msg,
			          type: 'error'
			        });
				}
			},
			// 上传失败
			error(res) {
				this.successType = 'exception';
				this.isUpload = false;
				this.hideProgress();
			},
			// 隐藏进度条
			hideProgress() {
				setTimeout(() => {
						this.progressShow = false;
				}, 2000)
			}
		}

	}
</script>