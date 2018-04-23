<template>
	<div>
		<!-- 基本信息 -->
		<el-row :gutter="20" class="base-info audit-block-h">
		  <el-col :span="14" class="bg-white">
		  	<div class="grid-content">
	  			<div class="base-info-title flex-wrap">
		  			<h4>基本信息</h4>
		  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
		  		</div>
		  		<div class="base-info-content">
			  		<el-row :gutter="10" class="font-14 color-3">
			  			 <el-col :span="6">
			  			 	<div class="base-shop-img"></div>
			  			 </el-col>
			  			 <el-col :span="9">
			  			 	<div class="shop-detail">
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">店铺简称:</span>
				  					<span class="flex-1">三只小猪</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">店铺账号:</span>
				  					<span class="flex-1 break-word">156544851135232</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">店铺全称:</span>
				  					<span class="flex-1">三只小猪服装外贸店</span>
				  				</p>
				  				<p class="flex-wrap">
				  					<span class="d-left">联系地址:</span>
				  					<span class="flex-1">广州省深圳市罗湖区某某路某某街13132号</span>
				  				</p>
				  			</div>
			  			 </el-col>
			  			 <el-col :span="9">
			  			 	<div class="shop-detail">
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">联系手机:</span>
				  					<span class="flex-1 break-word">18924298775</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">联系邮箱:</span>
				  					<span class="flex-1 break-word">1475014716@qq.com</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">支付宝号:</span>
				  					<span class="flex-1 break-word">18924298776</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圈:</span>
				  					<span class="flex-1">笋岗商圈</span>
				  				</p>
				  				<p class="flex-wrap">
				  					<span class="d-left">行业类型:</span>
				  					<span>川菜</span>
				  				</p>
				  			</div>
			  			 </el-col>
			  		</el-row>
		  		</div>
		  	</div>
		  </el-col>

			
		  <el-col :span="5" class="audit-block-h">
		  	<div class="grid-content p-l-10 p-r-10 bg-white">
		  		<div class="base-info-title flex-wrap">
		  			<h4>审核状态</h4>
		  			<el-button type="text" size="medium" style="color: #FF4715;">审核未通过</el-button>
		  		</div>
		  		<div class="audit-block font-14 color-3 p-t-10 height-140">
		  			<p class="flex-wrap p-b-10">
		  				<span>申请时间</span>
		  				<span class="flex-1">2017-02-27</span>
		  			</p>
		  			<p class="flex-wrap p-b-10">
		  				<span>审核时间</span>
		  				<span class="flex-1">2017-02-27</span>
		  			</p>
		  			<p class="flex-wrap">
		  				<span>失败原因</span>
		  				<span class="flex-1">
		  					<p>店铺信息失败</p>
			  				<p>法人信息失败</p>
			  				<p>店铺信息失败</p>
		  				</span>
		  			</p>
		  		</div>
		  		<div class="text-center p-t-10 p-b-10">
		  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
		  		</div>
		  	</div>
		  </el-col>
		  <el-col :span="5" class="audit-block-h bg-white">
		  	<div class="grid-content">
		  		<div class="base-info-title flex-wrap">
		  			<h4>平台抽点</h4>
		  		</div>
		  		<div class="commission-block p-t-10 height-140">
		  			<div class="text-center p-10">
		  				<p class="font-24">0.35%</p>
		  				<p class="font-12 color-7">手续费</p>
		  			</div>
		  			<div class="text-center p-b-10">
		  				<p class="font-24">14</p>
		  				<p class="font-12 color-7">清分费用</p>
		  			</div>
		  		</div>
		  		<div class="text-center p-10">
		  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
		  		</div>
		  	</div>
		  </el-col>
		</el-row>

		<!-- 法人信息 -->
		<el-row :gutter="20" class="legal-person p-t-10 m-t-10 height-248">
			<el-col :span="14" class="bg-white height-100">
				<div class="grid-content">
					<div class="base-info-title flex-wrap">
			  			<h4>法人信息</h4>
			  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
			  		</div>
			  		<div class="legal-person-con p-t-10 p-b-10">
			  			<el-row>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						  	</div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel" style="background: #fff;">
						  		<div class="p-t-10 font-14 abs legal-per-detail color-3">
						  			<p class="flex-wrap p-b-10">
						  				<span>法人姓名:&nbsp;&nbsp;</span>
						  				<span class="flex-1">陈法人</span>
						  			</p>
						  			<p class="flex-wrap">
						  				<span>身份证名:&nbsp;&nbsp;</span>
						  				<span class="flex-1 break-word">4409824524652586315</span>
						  			</p>
						  		</div>
						  	</div>
						  </el-col>
						</el-row>
			  		</div>
				</div>
			</el-col>
			<el-col :span="10" class="height-100">
				<div class="grid-content bg-white p-l-10 p-r-10 height-100">
					<div class="base-info-title flex-wrap">
			  			<h4>结算信息</h4>
			  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
			  		</div>
			  		<div class="account-info p-t-10 p-b-10">
			  			<el-row>
						  <el-col :span="10" class="p-r-10">
						  	<div class="add-person-img rel p-r-10">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="14">
						  	<div class="font-14 color-3 p-t-10">
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span class="d-left">开户银行</span>
						  			<span class="flex-1">中国银行</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span class="d-left break-word">卡号</span>
						  			<span>62145621234123442321</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span class="d-left">开户支行</span>
						  			<span class="flex-1">深圳市罗湖区笋岗支行</span>
						  		</p>
						  	</div>
						  </el-col>
						</el-row>
			  		</div>
				</div>
			</el-col>
		</el-row>

		<!-- 资质证明 -->
		<el-row :gutter="20" class="m-t-10 bg-white">
			<div class="p-l-10 p-r-10">
				<div class="base-info-title flex-wrap">
		  			<h4>资质证明</h4>
		  			<el-button class="audit-edit" type="primary" size="mini">编 辑</el-button>
		  		</div>
		  		<div class="intell-certify p-t-10 p-b-10">
		  			<el-row>
		  				<el-col :span="4" class="p-l-10">
		  					<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						  	</div>
		  				</el-col>
						<el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						  	</div>
						</el-col>
						<el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						  	</div>
						</el-col>
						<el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p>
						  		</div>
						  	</div>
						</el-col>
						<el-col :span="8" class="p-l-10 p-t-10">
							<div class="p-t-10 font-14 p-l-10">
								<p class="flex-wrap p-b-10">
									<span class="d-left">营业执照偏号</span>
									<span class="flex-1 break-word">635589541215568522335</span>
								</p>
								<p class="flex-wrap p-b-10">
									<span class="d-left">有效期</span>
									<span class="flex-1">2017-12-26至2018-12-26</span>
								</p>
								<p class="flex-wrap">
									<span class="d-left">营业执照地址</span>
									<span class="flex-1">广东省深圳市罗湖区中民时代广场</span>
								</p>
							</div>
						</el-col>
		  			</el-row>
		  		</div>
			</div>
		</el-row>
		<div style="width: 200px; height: 200px;">
			<uploadImg :imgParams="imgParams" :uploadSrc="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4113086453,167913650&fm=27&gp=0.jpg'"></uploadImg>
		</div>
	</div>
</template>
<style lang="scss">

  .l-height-26 {
  	 line-height: 26px;
  }
  .audit-block-h {
  	height: 254px;
  }
  .base-info .base-shop-img {
  	width: 100%;
  	padding-top: 78%;
  	background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4113086453,167913650&fm=27&gp=0.jpg');
  	background-size: cover;
  }
  .audit-edit {
  	height: 34px;
  	width: 100px;
  }
  .height-140 {
  	height: 140px;
  }
  .color-7 {
  	color: #777;
  }
  .base-info-title {
  	height: 60px;
  	justify-content: space-between;
  	align-items: center;
  	border-bottom: 1px solid #eee;
  }
  .base-info .el-col {
  	height: 100%;
  }
  .grid-content .base-info-content {
	 padding: 20px 0;
  }
  .d-left {
		width: 74px;
  }
  .audit-block > p > span:first-child {
	 width: 74px;
  }

  .legal-person .add-person-img,.add-intell-certify {
	 width: 100%;
	 padding-top: 78%;
	 background: #F6F6F6;
  }
  .color-legal-per {
  	color: #409eff;
  }
  .add-legal-per {
  	left: 50%;
  	top: 50%;
  	transform: translate3d(-50%, -50%, 0);
  }
  .legal-per-detail {
  	top: 10px;
  }

  .account-info .d-left {
  	 width: 76px;
  }
  .height-248 {
  	 height: 248px;
  }
  .intell-certify .d-left {
  	 width: 112px;
  }
</style>
<script>
	const uploadImg = r => require.ensure([], () => r(require('@/components/uploadImg')), 'uploadImg'); 
	export default {
		components: {
			uploadImg
		},
		data() {
			return {
				imgParams: {
					type: 1,
					bizId: this.$route.query.bizId
				}
			}
		},
		mounted() {
		},
		methods: {

		}
	}
</script>