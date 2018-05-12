<template>
	<div class="download-img">
		<el-button type="primary" @click="downLoadIamge(src)">下载图片</el-button>
	</div>
</template>
<style>
	.download-img {
		display: inline-block;
	}
</style>
<script>
	/**
	 * 
	 */
	export default {
		props: ['src'],
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			downLoadIamge(url) {
				if (this.myBrowser()==="IE"||this.myBrowser()==="Edge"){
		            this.SaveAs5(url);
		        }else{
		            this.download(url);
		        }
			},
			//判断浏览器类型
			myBrowser() {
				let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		        let isOpera = userAgent.indexOf("Opera") > -1;
		        if (isOpera) {
		            return "Opera"
		        }; //判断是否Opera浏览器
		        if (userAgent.indexOf("Firefox") > -1) {
		            return "FF";
		        } //判断是否Firefox浏览器
		        if (userAgent.indexOf("Chrome") > -1){
		            return "Chrome";
		        }
		        if (userAgent.indexOf("Safari") > -1) {
		            return "Safari";
		        } //判断是否Safari浏览器
		        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		            return "IE";
		        }; //判断是否IE浏览器
		        if (userAgent.indexOf("Trident") > -1) {
		            return "Edge";
		        } //判断是否Edge浏览器
			},
		    //IE浏览器图片保存本地
		    SaveAs5(imgUrl) {
		    	var oPop = window.open(imgURL,"","width=1, height=1, top=5000, left=5000");
		        for(; oPop.document.readyState != "complete"; )
		        {
		            if (oPop.document.readyState == "complete")break;
		        }
		        oPop.document.execCommand("SaveAs");
		        oPop.close();
		    },
		    //谷歌，360极速等浏览器下载
		    download(src) {
		    	var $a = document.createElement('a');
		        $a.setAttribute("href", src);
		        $a.setAttribute("download", "");

		        var evObj = document.createEvent('MouseEvents');
		        evObj.initMouseEvent( 'click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
		        $a.dispatchEvent(evObj);
		    }
		}
	}
</script>