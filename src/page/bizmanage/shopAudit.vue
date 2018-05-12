<template>
	<div v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    	<!-- 加载高德地图 -->
    	<router-script @loadFinsh="mapFinsh" src='http://webapi.amap.com/maps?v=1.4.6&key=5bffe31c75ddac4470b6104b67a7e872'></router-script>
		<!-- 基本信息 -->
		<el-row :gutter="20" class="base-info audit-block-h">
		  <el-col :span="14" class="bg-white">
		  	<div class="grid-content">
	  			<div class="base-info-title flex-wrap">
		  			<h4>基本信息</h4>
		  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('baseInfo')">编 辑</el-button>
		  		</div>
		  		<div class="base-info-content">
			  		<el-row :gutter="10" class="font-14 color-3">
			  			 <el-col :span="6">
			  			 	<div class="base-shop-img rel">
			  			 		<div class="abs height-100 width-100" style="top: 0; left: 0;">
				  			 		<uploadImg :imgParams="{type: 1, bizId: bizId}" v-model="shopInfo.shopLogo"></uploadImg>
			  			 		</div>
			  			 	</div>
			  			 </el-col>
			  			 <el-col :span="9">
			  			 	<div class="shop-detail">
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">店铺简称:</span>
				  					<span class="flex-1">{{shopInfo.shopName || '未填写'}}<!-- 三只小猪 --></span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">二维码编号:</span>
				  					<span class="flex-1 break-word"><!-- 156544851135232 -->{{shopInfo.merchantNo || '未填写'}}</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">店铺全称:</span>
				  					<span class="flex-1"><!-- 三只小猪服装外贸店 -->{{shopInfo.merFullName || '未填写'}}</span>
				  				</p>
				  				<p class="flex-wrap">
				  					<span class="d-left">联系地址:</span>
				  					<span class="flex-1">
				  						<!-- 广州省深圳市罗湖区某某路某某街13132号 -->
				  						{{shopInfo.shopStreet || '未填写'}}		
				  					</span>
				  				</p>
				  			</div>
			  			 </el-col>
			  			 <el-col :span="9">
			  			 	<div class="shop-detail">
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">联系手机:</span>
				  					<span class="flex-1 break-word">
				  						<!-- 18924298775 -->
				  						{{shopInfo.tel || '未填写'}}
				  					</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">联系邮箱:</span>
				  					<span class="flex-1 break-word">
				  						<!-- 1475014716@qq.com -->
				  						{{shopInfo.merEmail || '未填写'}}	
				  					</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">支付宝号:</span>
				  					<span class="flex-1 break-word">
				  						<!-- 18924298776 -->
				  						{{shopInfo.alipay || '未填写'}}	
				  					</span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">商&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;圈:</span>
				  					<span class="flex-1">
				  						{{shopInfo.businessName || '未填写'}}<!-- 笋岗商圈 -->
				  							
				  				    </span>
				  				</p>
				  				<p class="flex-wrap p-b-10">
				  					<span class="d-left">行业类型:</span>
				  					<span>
				  						{{shopInfo.induName || '未填写'}}<!-- 川菜 -->
				  							
				  					</span>
				  				</p>
				  				<p class="flex-wrap">
				  					<span class="d-left">店铺类型:</span>
				  					<span>
				  						{{shopInfo.classifyName || '未填写'}}<!-- 川菜 -->
				  							
				  					</span>
				  				</p>
				  			</div>
			  			 </el-col>
			  		</el-row>
		  		</div>
		  	</div>
		  </el-col>

			
		  <el-col :span="5" class="audit-block-h">
		  	<div class="grid-content p-l-10 p-r-10 bg-white height-100">
		  		<div class="base-info-title flex-wrap">
		  			<h4>审核状态</h4>
		  			<el-button type="text" size="medium" style="color: #FF4715;">{{checkStatus[shopInfo.checkStatus]}}<!-- 审核未通过 --></el-button>
		  		</div>
		  		<div class="audit-block font-14 color-3 p-t-10 height-140">
		  			<p class="flex-wrap p-b-10">
		  				<span>申请时间:</span>
		  				<span class="flex-1">
		  					<span v-if="shopInfo.applyTime">
		  						{{shopInfo.applyTime | timeformat('yyyy-M-d hh:mm:ss')}}
		  					</span>
		  					<span v-else>
			  					未填写
		  					</span>
		  				</span>
		  			</p>
		  			<p class="flex-wrap p-b-10">
		  				<span>审核时间:</span>
		  				<span class="flex-1">
		  					<span v-if="shopInfo.checkTime">
		  						{{shopInfo.checkTime | timeformat('yyyy-M-d hh:mm:ss')}}
		  					</span>
		  					<span v-else>
		  						未填写
		  					</span>
		  					<!-- 2017-02-27 -->
		  				</span>
		  			</p>
		  			<!-- <p class="flex-wrap">
		  				<span>失败原因</span>
		  				<span class="flex-1">
		  					<p>店铺信息失败</p>
			  				<p>法人信息失败</p>
			  				<p>店铺信息失败</p>
		  				</span>
		  			</p> -->
		  		</div>
		  		<div class="text-center p-t-10 p-b-10">
		  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('auditInfo')">编 辑</el-button>
		  		</div>
		  	</div>
		  </el-col>
		  <el-col :span="5" class="audit-block-h bg-white">
		  	<div class="grid-content">
		  		<div class="base-info-title flex-wrap">
		  			<h4>平台抽点</h4>
		  			<el-button type="text" size="medium" style="color: #FF4715;">{{marketTypeStatus[shopInfo.marketType]}}</el-button>
		  		</div>
		  		<div class="commission-block p-t-10 height-140">
		  			<div class="flex-wrap text-center">
		  				<p class="flex-1">
		  					<span class="font-24">
		  						{{(shopInfo.cashRate * 100).toFixed(2)}}
		  						<span>%</span>
		  					</span><br>
		  					<span class="font-12 color-7">手续费</span>	
		  				</p>
		  				<p class="flex-1">
		  					<span class="font-24">
		  					  {{shopInfo.marketType == 1 ? (shopInfo.serviceRate * 100).toFixed(2) : shopInfo.serviceRate}}
		  					  <span v-show="shopInfo.marketType == 1">%</span>
		  				    </span><br>
		  					<span class="font-12 color-7">清分费用</span>
		  				</p>
		  			</div>
		  			<div class="flex-wrap text-center p-t-10">
		  				<p class="flex-1">
		  					<span class="font-24">
		  					{{(shopInfo.alipayRate * 100).toFixed(2)}}
		  					<span>%</span>
		  					</span><br>
		  					<span class="font-12 color-7">支付宝费率</span>	
		  				</p>
		  				<p class="flex-1">
		  					<span class="font-24">
		  					  {{(shopInfo.wxRate * 100).toFixed(2)}}
		  					  <span>%</span>
		  					</span><br>
		  					<span class="font-12 color-7">微信费率</span>
		  				</p>
		  			</div>
		  			<!-- <div class="text-center p-10">
		  				<p class="font-24">{{shopInfo.cashRate}}%</p>
		  				<p class="font-12 color-7">手续费</p>
		  			</div>
		  			<div class="text-center p-b-10">
		  				<p class="font-24">{{shopInfo.serviceRate}}%</p>
		  				<p class="font-12 color-7">清分费用</p>
		  			</div> -->
		  		</div>
		  		<div class="text-center p-10">
		  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('commissionInfo')">编 辑</el-button>
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
			  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('legalPersonInfo')">编 辑</el-button>
			  		</div>
			  		<div class="legal-person-con p-t-10 p-b-10">
			  			<el-row>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p> -->
									<!-- 身份证正面 -->
									<uploadImg :imgParams="{type: 4, bizId: bizId}" v-model="shopInfo.idcardUpward"></uploadImg>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- 身份证反面 -->
						  			<uploadImg :imgParams="{type: 5, bizId: bizId}" v-model="shopInfo.idcardDown"></uploadImg>
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p> -->
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- 手持身份证 -->
						  			<uploadImg :imgParams="{type: 6, bizId: bizId}" v-model="shopInfo.handheldIdcard"></uploadImg>
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p> -->
						  		</div>
						  	</div>
						  </el-col>
						  <el-col :span="6" class="p-l-10">
						  	<div class="add-person-img rel" style="background: #fff;">
						  		<div class="p-t-10 font-14 abs legal-per-detail color-3">
						  			<p class="flex-wrap p-b-10">
						  				<span>法人姓名:&nbsp;&nbsp;</span>
						  				<span class="flex-1">
						  					<!-- 陈法人 -->
						  					{{shopInfo.legalPerson || '未填写'}}	
						  				</span>
						  			</p>
						  			<p class="flex-wrap">
						  				<span>身份证名:&nbsp;&nbsp;</span>
						  				<span class="flex-1 break-word">
						  					{{shopInfo.idcardNo || '未填写'}}
						  					<!-- 4409824524652586315 --></span>
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
			  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('settleInfo')">编 辑</el-button>
			  		</div>
			  		<div class="account-info p-t-10 p-b-10">
			  			<el-row>
						  <el-col :span="10" class="p-r-10">
						  	<div class="add-person-img rel p-r-10">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">店铺头像</p> -->
									<!-- 银行卡照片 -->
						  			<uploadImg :imgParams="{type: 9, bizId: bizId}" v-model="shopInfo.bankCard"></uploadImg>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="14">
						  	<div class="font-14 color-3 p-t-10">
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span class="d-left">开户银行:</span>
						  			<span class="flex-1">
						  				<!-- 中国银行 -->
						  				{{shopInfo.bankName || '未填写'}}	
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span class="d-left">卡号:</span>
						  			<span class="break-word">
						  				<!-- 62145621234123442321 -->
						  				{{shopInfo.bankCode || '未填写'}}		
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span class="d-left">开户地址:</span>
						  			<span class="flex-1">
						  				<span v-if="shopInfo.bankProvincesName">
							  				{{shopInfo.bankProvincesName}}
							  				{{shopInfo.bankCityName}}
						  				</span>
						  				<span v-else>未填写</span>
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span class="d-left">开户支行:</span>
						  			<span class="flex-1">
						  				<!-- 深圳市罗湖区笋岗支行 -->
						  				{{shopInfo.bankAddress || '未填写'}}		
						  			</span>
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
		  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('aptitudeInfo')">编 辑</el-button>
		  		</div>
		  		<div class="intell-certify p-t-10 p-b-10">
		  			<el-row>
		  				<el-col :span="4" class="p-l-10">
		  					<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">行业许可证</p> -->
									<uploadImg :imgParams="{type: 2, bizId: bizId}" v-model="shopInfo.businessLicense"></uploadImg>
						  		</div>
						  	</div>
		  				</el-col>
						<el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">营业执照</p> -->
									<uploadImg :imgParams="{type: 3, bizId: bizId}" v-model="shopInfo.cateringLicence"></uploadImg>
						  		</div>
						  	</div>
						</el-col>
						<el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<!-- <p class="color-legal-per">+添加</p>
									<p class="color-6">店内景照1</p> -->
									<uploadImg :imgParams="{type: 7, bizId: bizId}" v-model="shopInfo.shopInterio1Pic"></uploadImg>
						  		</div>
						  	</div>
						</el-col>
						<!-- <el-col :span="4" class="p-l-10">
							<div class="add-intell-certify rel">
						  		<div class="abs add-legal-per font-18 text-center">
									<p class="color-6">店内景照2</p>
									<uploadImg :imgParams="{type: 8, bizId: bizId}" v-model="shopInfo.shopInterio2Pic"></uploadImg>
						  		</div>
						  	</div>
						</el-col> -->
						<el-col :span="12" class="p-l-10 p-t-10">
							<div class="p-t-10 font-14 p-l-10">
								<p class="flex-wrap p-b-10">
									<span class="d-left">营业执照编号:</span>
									<span class="flex-1 break-word">
										<!-- 635589541215568522335 -->
										{{shopInfo.businessNo || '未填写'}}		
									</span>
								</p>
								<p class="flex-wrap p-b-10">
									<span class="d-left">有效期:</span>
									<span class="flex-1">
										<span v-if="shopInfo.beginTime">
											{{shopInfo.beginTime | timeformat('yyyy-M-d hh:mm:ss')}}
										</span>
										<span v-else>
											未填写
										</span>
										<!-- 2017-12-26 -->至
										<span v-if="shopInfo.endTime">
											{{shopInfo.endTime | timeformat('yyyy-M-d hh:mm:ss')}}
										</span>
										<span v-else>
											未填写
										</span>
										<!-- 2018-12-26 -->
									</span>
								</p>
								<!-- <p class="flex-wrap">
									<span class="d-left">营业执照地址:</span>
									<span class="flex-1">广东省深圳市罗湖区中民时代广场</span>
								</p> -->
							</div>
						</el-col>
		  			</el-row>
		  		</div>
			</div>
		</el-row>

		<!-- 经营场景 -->
		<el-row :gutter="20" class="legal-person p-t-10 m-t-10" style="height: 312px;">
			<el-col :span="14" class="bg-white height-100">
				<div class="grid-content">
					<div class="base-info-title flex-wrap">
			  			<h4>经营场景</h4>
			  			<!-- <el-button class="audit-edit" type="primary" size="mini" @click="showDialog('legalPersonInfo')">编 辑</el-button> -->
			  		</div>
			  		<div class="legal-person-con p-t-10 p-b-10">
			  			<el-row>
						  <el-col :span="7" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
									<uploadImg :imgParams="{type: 8, bizId: bizId}" v-model="shopInfo.shopInterio2Pic"></uploadImg>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="7" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<uploadImg :imgParams="{type: 10, bizId: bizId}" v-model="shopInfo.shopInterio3Pic"></uploadImg>
						  		</div>
						    </div>
						  </el-col>
						  <el-col :span="7" class="p-l-10">
						  	<div class="add-person-img rel">
						  		<div class="abs add-legal-per font-18 text-center">
						  			<uploadImg :imgParams="{type: 11, bizId: bizId}" v-model="shopInfo.shopInterio4Pic"></uploadImg>
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
			  			<h4>支付场景</h4>
			  			<el-button class="audit-edit" type="primary" size="mini" @click="showDialog('payInfo')">编 辑</el-button>
			  		</div>
			  		<div class="account-info p-t-10 p-b-10">
			  			<el-row>
						  <el-col>
						  	<div class="font-14 color-3 p-t-10">
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span style="width: 120px;">支付宝授权token:</span>
						  			<span class="flex-1 break-word">
						  				<!-- 支付宝授权token -->
						  				{{ shopInfo.alipayAuthToken || '未填写'}}	
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span style="width: 120px;">支付宝PID:</span>
						  			<span class="flex-1 break-word">
						  				<!-- 支付宝授权token -->
						  				{{ shopInfo.aliPid || '未填写'}}	
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span style="width: 120px;">支付宝AppID:</span>
						  			<span class="flex-1 break-word">
						  				<!-- 支付宝授权token -->
						  				{{ shopInfo.aliAuthAppId || '不必填写'}}	
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10 p-t-10">
						  			<span style="width: 120px;">支付宝刷新令牌:</span>
						  			<span class="flex-1 break-word">
						  				<!-- 支付宝授权token -->
						  				{{ shopInfo.alipayAppRefreshToken || '不必填写'}}	
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span style="width: 120px;">微信商户号:</span>
						  			<span class="flex-1">
						  				<!-- 微信商户号 -->
						  				{{shopInfo.wxMchId || '未填写'}}		
						  			</span>
						  		</p>
						  		<p class="flex-wrap p-b-10">
						  			<span style="width: 120px;">微信APPID:</span>
						  			<span class="flex-1">
						  				<!-- 微信APPID -->
						  				{{ shopInfo.wxAppId || '不必填写'}}		
						  			</span>
						  		</p>
						  	</div>
						  </el-col>
						</el-row>
			  		</div>
				</div>
			</el-col>
		</el-row>

		<!-- 基本信息编辑 -->
		<el-dialog
		  title="基本信息"
		  :visible.sync="dialogStauts['baseInfo']"
		  width="820px" class="dialog-title">
		  <div>
		  	<el-row>
			  <el-col :span="10">
			  	<div class="grid-conten">
			  	  <el-form ref="form" label-width="90px" :model="baseInfoDetail">
			  		<el-form-item label="店铺简称" class="m-b-10">
			          <el-input v-model="baseInfoDetail.shopName" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="二维码编号" class="m-b-10">
			          <el-input v-model="baseInfoDetail.merchantNo" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="店铺全称" class="m-b-10">
			          <el-input v-model="baseInfoDetail.merFullName" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="省市区" class="m-b-10">
			          <el-input disabled v-model="baseInfoDetail.address" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="详细地址" class="m-b-10">
			          <el-input v-model="baseInfoDetail.shopStreet" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="联系手机" class="m-b-10">
			          <el-input v-model="baseInfoDetail.tel" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="联系邮箱" class="m-b-10">
			          <el-input v-model="baseInfoDetail.merEmail" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="支付宝号" class="m-b-10">
			          <el-input v-model="baseInfoDetail.alipay" auto-complete="off"></el-input>
			        </el-form-item>
			        <el-form-item label="商圈选择" class="m-b-10">
			        	<el-select v-model="baseInfoDetail.businessCode" placeholder="商圈选择">
						  <el-option v-for="item in businessNameList" 
						  :label="item.districtName" :value="item.districtCode">
						  </el-option>
					    </el-select>
			          <!-- <el-input v-model="baseInfoDetail.businessName" auto-complete="off"></el-input> -->
			        </el-form-item>
			        <el-form-item label="行业类型" class="m-b-10">
			        	<el-select @change="induIdChange" v-model="baseInfoDetail.induId" placeholder="商圈选择">
						  <el-option v-for="item in industryList" 
						  :label="item.induName" :value="item.induId">
						  </el-option>
					    </el-select>
			          <!-- <el-input v-model="baseInfoDetail.induName" auto-complete="off"></el-input> -->
			        </el-form-item>
			        <el-form-item label="店铺类型" class="m-b-10">
			           <el-select v-model="baseInfoDetail.classifyId" placeholder="商圈选择">
						  <el-option v-for="item in classifyNameListComputed" 
						  :label="item.induName" :value="item.induId">
						  </el-option>
					    </el-select>
			          <!-- <el-input v-model="baseInfoDetail.classifyId" auto-complete="off"></el-input> -->
			        </el-form-item>
			      </el-form>
			  	</div>
			  </el-col>
			  <el-col :span="14">
			  	<div class="grid-content p-10" style="height: 500px;">
			  		<div id="location" class="width-100 height-100">
			  			
			  		</div>
			  	</div>
			  </el-col>
			</el-row>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['baseInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="editShopInfo('baseInfo')">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>

		<!-- 法人信息编辑 -->
		<el-dialog
		  title="法人信息编辑"
		  :visible.sync="dialogStauts['legalPersonInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="100px" :model="baseInfoDetail">
		  		 <el-form-item label="法人姓名">
		            <el-input auto-complete="off" v-model="baseInfoDetail.legalPerson"></el-input>
		         </el-form-item>
		         <el-form-item label="法人身份证">
		            <el-input auto-complete="off" v-model="baseInfoDetail.idcardNo"></el-input>
		         </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['legalPersonInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="editShopInfo('legalPersonInfo')">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
		
		<!-- 结算信息编辑 -->
		<el-dialog
		  title="结算信息编辑"
		  :visible.sync="dialogStauts['settleInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="80px" :model="baseInfoDetail">
		  		 <el-form-item label="开户银行">
		            <el-input auto-complete="off" v-model="baseInfoDetail.bankName"></el-input>
		         </el-form-item>
		         <el-form-item label="卡号">
		            <el-input auto-complete="off" v-model="baseInfoDetail.bankCode"></el-input>
		         </el-form-item>
		         <el-form-item label="开户省级">
		            <el-input auto-complete="off" v-model="baseInfoDetail.bankProvincesName"></el-input>
		         </el-form-item>
		         <el-form-item label="开户市级">
		            <el-input auto-complete="off" v-model="baseInfoDetail.bankCityName"></el-input>
		         </el-form-item>
		         <el-form-item label="开户支行">
		            <el-input auto-complete="off" v-model="baseInfoDetail.bankAddress"></el-input>
		         </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['settleInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="editShopInfo('settleInfo')">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>

		<!-- 资质证明编辑 -->
		<el-dialog
		  title="资质证明编辑"
		  :visible.sync="dialogStauts['aptitudeInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="112px">
		  		 <el-form-item label="营业执照注册号">
		            <el-input auto-complete="off"></el-input>
		         </el-form-item>
		         <el-form-item label="有效期">
		            <el-input auto-complete="off"></el-input>
		         </el-form-item>
		         <el-form-item label="营业执照地址">
		            <el-input auto-complete="off"></el-input>
		         </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['aptitudeInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="dialogStauts['aptitudeInfo'] = false">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
		<!-- 审核状态编辑 -->
		<el-dialog
		  title="审核状态编辑"
		  :visible.sync="dialogStauts['auditInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="80px">
		  	  	<el-form-item label="审核状态">
			  		 <el-radio-group v-model="baseInfoDetail.auditType" size="medium">
				      <el-radio border label="审核成功" value="1"></el-radio>
				      <el-radio border label="审核失败" value="2"></el-radio>
				    </el-radio-group>
			    </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['auditInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="auditShopInfo()">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>

		<!-- 支付场景编辑 -->
		<el-dialog
		  title="支付场景"
		  :visible.sync="dialogStauts['payInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="110px" :model="baseInfoDetail">
		  		 <el-form-item label="支付宝token">
		            <el-input auto-complete="off" v-model="baseInfoDetail.alipayAuthToken"></el-input>
		         </el-form-item>
		         <el-form-item label="支付宝PID">
		            <el-input auto-complete="off" v-model="baseInfoDetail.aliPid"></el-input>
		         </el-form-item>
		         <!-- <el-form-item label="支付宝AppID">
		            <el-input auto-complete="off" v-model="baseInfoDetail.aliAuthAppId"></el-input>
		         </el-form-item> -->
		         <!-- <el-form-item label="支付宝刷新令牌">
		            <el-input auto-complete="off" v-model="baseInfoDetail.alipayAppRefreshToken"></el-input>
		         </el-form-item> -->
		         <el-form-item label="微信商户号">
		            <el-input auto-complete="off" v-model="baseInfoDetail.wxMchId"></el-input>
		         </el-form-item>
		         <!-- <el-form-item label="微信APPID">
		            <el-input auto-complete="off" v-model="baseInfoDetail.wxAppId"></el-input>
		         </el-form-item> -->
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['payInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="editShopInfo('payInfo')">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
		<!-- 平台抽成编辑 -->
		<el-dialog
		  title="平台抽成编辑"
		  :visible.sync="dialogStauts['commissionInfo']"
		  width="420px" class="dialog-title">
		  <div>
		  	  <el-form ref="form" label-width="100px" :model="baseInfoDetail">
		  		 <el-form-item label="手续费用">
		            <el-input auto-complete="off" v-model="baseInfoDetail.cashRate"></el-input>
		         </el-form-item>
		         <el-form-item label="清分费用">
		            <el-input auto-complete="off" v-model="baseInfoDetail.serviceRate"></el-input>
		         </el-form-item>
		         <el-form-item label="支付宝费率">
		            <el-input auto-complete="off" v-model="baseInfoDetail.alipayRate"></el-input>
		         </el-form-item>
		         <el-form-item label="微信费率">
		            <el-input auto-complete="off" v-model="baseInfoDetail.wxRate"></el-input>
		         </el-form-item>
		         <el-form-item label="营销费率类型">
		            <el-input placeholder="0为固定值,1为百分比" auto-complete="off" v-model="baseInfoDetail.marketType"></el-input>
		         </el-form-item>
		      </el-form>
		  </div>
		  <div class="text-center">
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogStauts['commissionInfo'] = false">取 消</el-button>
			    <el-button type="primary" @click="editShopInfo('commissionInfo')">确 定</el-button>
			  </span>
		  </div>
		</el-dialog>
	</div>
</template>
<style lang="scss">

  .l-height-26 {
  	 line-height: 26px;
  }
  .audit-block-h {
  	height: 270px;
  }
  .base-info .base-shop-img {
  	width: 100%;
  	padding-top: 78%;
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
		width: 76px;
  }
  .audit-block > p > span:first-child {
	 width: 74px;
  }

  .legal-person .add-person-img,.add-intell-certify {
	 width: 100%;
	 padding-top: 78%;
	 background: #F6F6F6;
	 max-width: 200px;
  }
  .color-legal-per {
  	color: #409eff;
  }
  .add-legal-per {
  	left: 0px;
  	top: 0px;
  	width: 100%;
  	height: 100%;

  	/*left: 50%;
  	top: 50%;
  	transform: translate3d(-50%, -50%, 0);*/
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
  .dialog-title .el-dialog__title {
  	 font-weight: bold;
  }
  .dialog-title .el-dialog__header {
  	 border-bottom: 1px solid #eee;
  }
</style>
<script>
	import fetch from '../../config/fetch';
	import uploadImg from '@/components/uploadImg';
	import routerScript from '@/components/routerScript';

	export default {
		components: {
			uploadImg,
			routerScript
		},
		data() {
			return {
				bizId: this.$route.query.bizId,
				shopAuthenticateId: this.$route.query.shopAuthenticateId,
				shopInfo: {},
				checkStatus: {
					"0": "未审核",
					"1": "审核",
					"2": '审核未通过'
				},
				marketTypeStatus: {
					"0": '固定值',
					"1": '百分比'
				},
				dialogStauts: {
					//基本信息弹框
					baseInfo: false,
					// 法人信息弹框
					legalPersonInfo: false,
					//结算信息弹框
					settleInfo: false,
					//资质证明编辑
					aptitudeInfo: false,
					//审核信息
					auditInfo: false,
					//支付宝微信配置
					payInfo: false,
					//平台抽成
					commissionInfo: false
				},

				//基本信息详情
				baseInfoDetail: {},
				dialogType: '',
				//商圈列表
				businessNameList: [],
				//行业列表
				industryList:[],
				//行业数据
				industryData:[],
				//店铺类型
				classifyNameList:[],
				//页面加载
				loading: true,
				//加载地图
				mapLoading: true,
			}
		},
		activated() {
			this.shopInfo = {};
			this.bizId = this.$route.query.bizId;
			this.shopAuthenticateId = this.$route.query.shopAuthenticateId;
			this.loading = true;
			this.getInfo();
		},
		mounted() {
			// console.log(AMap)
			// this.getInfo();
			// console.log('mounted');
		},
		computed: {
			//监听行业列表变化,更新店铺类型
			classifyNameListComputed() {
				var json = [];
				for(let item of this.industryData) {
					if(this.baseInfoDetail.induId == item.parentId) {
						json.push(item);
					}
				}
				return json;
			}
		},
		methods: {
			//当行业改变的时候,清空classifyId
			induIdChange() {
				this.baseInfoDetail.classifyId = '';
			},
			//地图加载完成回掉函数
			mapFinsh() {
				this.mapLoading = true;
			},
			//显示弹层
			showDialog(type) {
				this.baseInfoDetail = {};
				this.dialogType = type;
				//商店基本信息
				if(type == 'baseInfo') {
					if(!this.mapLoading) {
						this.$message({
				          message: '地图加载中,请稍等!',
				          type: 'error'
				        });
				        return;
					}
					this.baseInfoDetail = {
						shopName: this.shopInfo['shopName'],
						merFullName: this.shopInfo['merFullName'],
						merchantNo: this.shopInfo['merchantNo'],
						shopStreet: this.shopInfo['shopStreet'],
						tel: this.shopInfo['tel'],
						merEmail: this.shopInfo['merEmail'],
						alipay: this.shopInfo['alipay'],
						businessCode: this.shopInfo['businessCode'],
						// 店铺类型
						classifyId: this.shopInfo['classifyId'],
						// 行业类型
						induId: this.shopInfo['induId'],
						//省市区
						address: this.shopInfo['provincesName'] + this.shopInfo['cityName'] + this.shopInfo['districtName'],
						longitude: this.shopInfo['longitude'],
						latitude: this.shopInfo['latitude'],
						provincesCode: this.shopInfo['provincesCode'],
						cityCode: this.shopInfo['cityCode'],
						districtCode: this.shopInfo['districtCode'],
					};
					//地图初始化
					setTimeout(() => {
						this.locationMap(this.baseInfoDetail['longitude'], this.baseInfoDetail['latitude']);
					}, 200);
					//获取商圈
					this.getBusiness(this.shopInfo['districtCode']);
					//获取行业列表
					this.getIndustry();
				} 
				else if(type == 'legalPersonInfo') {
					this.baseInfoDetail = {
						legalPerson: this.shopInfo['legalPerson'],
						idcardNo: this.shopInfo['idcardNo']
					}

				}
				else if(type == 'settleInfo') {
					this.baseInfoDetail = {
						bankName: this.shopInfo['bankName'],
						bankCode: this.shopInfo['bankCode'],
						bankAddress: this.shopInfo['bankAddress'],
						bankCityName: this.shopInfo['bankCityName'],
						bankProvincesName: this.shopInfo['bankProvincesName']
					};
				}
				//资质证明
				else if(type == 'aptitudeInfo') {

				} 
				else if(type == 'payInfo') {
					this.baseInfoDetail = {
						alipayAuthToken: this.shopInfo['alipayAuthToken'],
						aliPid: this.shopInfo['aliPid'],
						// aliAuthAppId: this.shopInfo['aliAuthAppId'],
						// alipayAppRefreshToken: this.shopInfo['alipayAppRefreshToken'],
						// wxAppId: this.shopInfo['wxAppId'],
						wxMchId: this.shopInfo['wxMchId']
					};
				}
				else if(type == 'commissionInfo') {
					let serviceRate = this.shopInfo['marketType'] == 1 ? Tools.ToCurrency(this.shopInfo['serviceRate'] * 100) : this.shopInfo['serviceRate'];
					this.baseInfoDetail = {
						serviceRate: serviceRate,
						cashRate: Tools.ToCurrency(this.shopInfo['cashRate'] * 100),
						alipayRate: Tools.ToCurrency(this.shopInfo['alipayRate'] * 100),
						wxRate: Tools.ToCurrency(this.shopInfo['wxRate'] * 100),
						marketType: this.shopInfo['marketType']
					};
				}

				this.dialogStauts[type] = true;
			},
			//关闭弹层
			hideDialog() {
				this.dialogStauts[this.dialogType] = false;
			},
			//确定审核状态
			auditShopInfo() {
				let params = {
					bizId: this.bizId
				}
				if(this.baseInfoDetail.auditType == '审核成功') {
					params['type'] = 1;
				} else {
					params['type'] = 2;
				}
				fetch.fetchPost('/businessmanage/v3.0/auditMerchantData', params)
				.then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
			        this.shopInfo.checkStatus = params['type'];
			        this.shopInfo.checkTime = +new Date();
			        this.hideDialog();

				})

			},
			//确认编辑信息
			editShopInfo(type) {

				this.baseInfoDetail['bizId'] = this.bizId;
				//基本信息资料
				if(type == 'baseInfo') {
					this.baseInfoDetail['type'] = 1;
					this.shopInfo['induName'] = this.searchInduIdForName(this.baseInfoDetail['induId']);
					this.shopInfo['classifyName'] = this.searchInduIdForName(this.baseInfoDetail['classifyId']);
					this.shopInfo['businessName'] = this.shearCodeForName(this.baseInfoDetail['businessCode'])
				}
				//法人信息
				else if(type == 'legalPersonInfo') {
					this.baseInfoDetail['type'] = 2;
				} 
				//结算信息
				else if(type == 'settleInfo') {
					this.baseInfoDetail['type'] = 3;
				}
				// 资质证明编辑
				else if(type == 'aptitudeInfo') {

				}
				//平台抽成
				else if(type == 'commissionInfo') {
					this.baseInfoDetail['type'] = 4;
					// if(this.shopInfo['marketType'] == 1)
					this.baseInfoDetail['serviceRate'] = this.baseInfoDetail['marketType'] == 1 ? this.baseInfoDetail['serviceRate'] / 100 : this.baseInfoDetail['serviceRate'];
					
					this.baseInfoDetail['cashRate'] /= 100;
					this.baseInfoDetail['alipayRate'] /= 100;
					this.baseInfoDetail['wxRate'] /= 100;
				} 
				// 修改支付宝微信配置
				else if(type == 'payInfo') {
					this.baseInfoDetail['type'] = 5;
				}
				this.commitShopInfo(this.baseInfoDetail);
				
			},
			//提交编辑信息接口
			commitShopInfo(params) {
				fetch.fetchPost('/businessmanage/v3.0/editMerchantData', params)
				.then(res => {
					this.$message({
			          message: res.msg,
			          type: 'success'
			        });
			        for(let item in params) {
			        	this.shopInfo[item] = params[item];
			        }
			        this.hideDialog();
				})
			},
			// 根据id获取行业名词
			searchInduIdForName(induId) {
				for(let item of this.industryData) {
					if(item.induId == induId) {
						return item.induName;
					}
				}
			},
			// 根据code获取商圈名词
			shearCodeForName(businessCode) {
				for(let item of this.businessNameList) {
					if(item.districtCode == businessCode) {
						return item.districtName;
					}
				}
			},
			// 根据经纬度显示地理位置
			locationMap(longitude, latitude) {
				var map = new AMap.Map('location',{
		            resizeEnable: true,
		            zoom: 16,
		            center: [longitude, latitude]
		        });
		        var marker = new AMap.Marker({
		                position: [longitude, latitude],
		                draggable: true,
		                raiseOnDrag: false,
		                visible: true,
		                topWhenMouseOver: true
		        });

		        marker.setMap(map);

		        AMap.event.addListener(marker, 'mouseup', () => {
		        	//获取经纬度
		        	let xy = marker.getPosition();
		        	this.geocoder(xy.lng, xy.lat);
		        }); 
			},
			//逆地理编码
			geocoder(longitude, latitude) {
				var lnglatXY = [longitude, latitude];
				 AMap.service('AMap.Geocoder', () => {
				 	var geocoder = new AMap.Geocoder({
		                  city: "010",
		                  radius: 1000,
		                  // extensions: "all"
		            });

				 	geocoder.getAddress(lnglatXY, (status, result) => {
		                  if (status === 'complete' && result.info === 'OK') {
		                      //拖拽地图中的点标注后处理函数
		                      this.dragEndMark(longitude, latitude, result)
		                  }
		            });
				 });
			},
			// 拖拽地图中的点标注后
			dragEndMark(longitude, latitude, result) {
				let address = result.regeocode.addressComponent;
                this.baseInfoDetail['districtCode'] = address.adcode;
                this.baseInfoDetail['longitude'] = longitude;
                this.baseInfoDetail['latitude'] = latitude;
                this.baseInfoDetail['shopStreet'] = result.regeocode.formattedAddress;
                this.baseInfoDetail['businessCode'] = '';
                this.getBusiness(address.adcode);
                // 根据区编码查询省市编码
                this.getProvinceCityCode(address.adcode);
                this.baseInfoDetail['address'] = `${address['province']}${address['city']}${address['district']}`;
			},
			// 根据区编码查询 省市编码
			getProvinceCityCode(districtCode) {
				fetch.fetchPost('/businessmanage/toDistrictCode', {
					districtCode: districtCode
				}).then(res => {
					let  data = res.data;
					this.baseInfoDetail['provincesCode'] = data['provinceCode'];
					this.baseInfoDetail['cityCode'] = data['cityCode'];
				}).catch(res => {

				})
			},
			//根据区域编码查询商圈
			getBusiness(districtCode) {
				fetch.fetchPost('/sysDistrictManage/getByDistrictCode', {
					districtCode: districtCode
				}).then(res => {
					this.businessNameList = res.data;
				}).catch(res => {

				})
			},
			//获取行业类型
			getIndustry() {
				fetch.fetchPost('/industryManage/industryList',{}).
				then(res => {
					this.industryData = res.data;
					for(let item of res.data) {
						if(!item.parentId) {
							this.industryList.push(item)
						}
					}
					// this.industryList = res.data;

					//筛选店铺类型
					this.classifyName(this.baseInfoDetail['induId']);
				}).catch(res => {

				})
			},
			//筛选店铺类型
			classifyName(induId) {
				this.classifyNameList = [];
				for(let item of this.industryData) {
					if(induId == item.parentId) {
						this.classifyNameList.push(item);
					}
				}
			},
			// 获取店铺资料
			getInfo() {
				fetch.fetchPost('/businessmanage/seeCertification', {
					shopAuthenticateId: this.shopAuthenticateId
				}).then(res => {
					this.shopInfo = res.data;
					// this.shopInfo['alipayRate'] = Tools.ToCurrency(this.shopInfo['alipayRate'] * 100);
					// this.shopInfo['cashRate'] = Tools.ToCurrency(this.shopInfo['cashRate'] * 100);
					// this.shopInfo['wxRate'] = Tools.ToCurrency(this.shopInfo['wxRate'] * 100);
					this.loading = false;
				}).catch(res => {
					console.log(res);
				})
			},

		}
	}
</script>