<template>
	<div class="width-100 height-100">
		<div class="width-100 height-100 rel upload-wrap" :style="'background-image: url(' + uploadSrc + '); background-size: cover;'">
			<div class="abs option-wrap">
				<el-button class="width-100" type="primary">{{'预览'}}</el-button>
				<el-upload class="upload-img m-t-10" 
				:show-file-list="false" 
				:action="uploadUrl" 
				:data="imgParams" 
				:auto-upload="true" 
				:on-progress="progress" 
				:on-success="success"
				:before-upload="beforeUpload">
					<el-button type="primary">{{'点击上传'}}</el-button>
				</el-upload>
			</div>
			<el-progress v-show="progressShow" 
			:text-inside="true" 
			:show-text="true" 
			:stroke-width="20" 
			:percentage="percent" 
			:status="successType"></el-progress>
		</div>
	</div>
</template>
<style>
    .option-wrap {
    	bottom: 0;
    	left: 50%;
    	transform: translate3d(-50%, 0, 0);
    }
    .upload-wrap {

    }
	.width-100,.option-wrap .el-upload {
		width: 100%;
	}
</style>
<script>
	// import fetch from '@/config/fetch.js';
	export default {
		props: ['imgParams', 'uploadSrc'],
		data() {
			return {
				uploadUrl: 'http://192.169.18.88:9001/zxwy-operator' + '/businessmanage/v3.0/file',
				params: {},
				percent: 50,
				progressShow: false,
				successType: 'success'
			}
		},
		mounted() {
			// console.log(fetch);
			this.imgParams['token'] = localStorage.token;
			console.log(this.uploadSrc);
		},
		methods: {
			// 上传之前
			beforeUpload() {
				this.progressShow = true;
			},
			// 上传中
			progress(res) {
				this.percent = res.percent;
				console.log(res);
			},
			// 上传成功
			success(res) {
				console.log(res);
				if(res.code == 0) {
					this.successType = 'success';
					this.uploadSrc = res.data.url;
					this.$emit('input', res.data.url);
				} else {
					Message.error(res.data.msg);
				}
			},
			// 上传失败
			error(res) {
				this.successType = 'exception'
			}
		}

	}
</script>