<template>
  	<div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<p>众享无忧后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"  @keyup.enter.native="submitForm('loginForm')"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click.enter.native="submitForm('loginForm')" class="submit_btn" :loading="isloading">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<!-- <p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
				<p class="tip">注册过的用户可凭账号密码登录</p> -->
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
import api from '../../config/api';
	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				isloading: false,
			}
		},
		mounted(){
		},
    methods:{
      keyupenter:function(){
        console.log('111');
      },
      submitForm(formName){
        this.$refs[formName].validate((valid)=>{
          if(valid){
            this.isloading  = true;
            api.telLogin(this.loginForm.username,this.loginForm.password)
            .then(res=>{
              this.isloading  = false;
              localStorage.token = res.data.aId;
              this.$router.push('manage');
            })
            .catch(error=>{
              this.isloading  = false;
            })
          }else {
            this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
            return false;
          }
        })
      }
    }
	}
</script>

<style lang="scss">
	 @import "../../style/mixin";
	.login_page{
		// background-color: #324057;
    @include wh(100%,100%);
    background: url('../../images/pic-bg@2x.png') no-repeat center;
    background-size: 100% 100%;
    .manage_tip{
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      p{
        font-size: 32px;
        color: #fff;
      }
    }
    .form_contianer{
      @include wh(350px, 240px);
      @include center;
      padding: 25px;
      border-radius: 5px;
      text-align: center;
      background-color: #fff;
      .submit_btn{
        width: 100%;
        font-size: 16px;
      }
    }
    .tip{
      font-size: 12px;
      color: red;
    }
    .form-fade-enter-active, .form-fade-leave-active {
        transition: all 1s;
    }
    .form-fade-enter, .form-fade-leave-active {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
	}

</style>
