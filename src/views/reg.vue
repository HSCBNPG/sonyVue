<template>
    <div>
		<!-- 详情页导航栏 -->
		<div class="nav">
			<div class="w1210">
				<a href="javascript:;" class="d-block float-left">
					<img src="sony_images/club_logo.jpg" alt="">
				</a>
				<ul class="float-left ml280">
					<li><a href="javascript:;">会员权益</a></li>
					<li><a href="javascript:;">产品注册</a></li>
					<li><a href="javascript:;">α café 社区</a></li>
					<li><a href="javascript:;">我的账户</a></li>
				</ul>
				<a href="javascript:;" class="d-block float-right">
					<img src="sony_images/mysony_logo.jpg" alt="">
				</a>
			</div>
		</div>
		<!-- 登陆区域 -->
		<div id="loginArea">
			<div class="w1210 clearfix">
				<!-- 登陆 -->
				<div class="log float-left dropup">
					<div class="log-top dropup">
						<p class="pt-3 pb-2 mb-4">会员登陆与注册</p>
						<div class="dropup mb-4">
							<input type="text" class="ipt ipt_user" placeholder="邮箱/用户名/手机">
							<span class="del_input">×</span>
						</div>
						<div class="dropup mb-4">
							<input type="password" class="ipt ipt_pwd" placeholder="密码">
							<span class="del_input">×</span>
						</div>
						<!-- 滑动框 -->
						<div id="move" class="alive">
							<div class="bgcolor"></div>
							<div class="lang slide">
								<!-- <span class="iconfont icon-cs-xy-1" style="font-size:24px;"></span> -->
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-cs-xy-1"></use>
								</svg>
							</div>
							<div class="txt">
								<span ondragstart='return false' onselect="return false">请按住滑块，拖到最右边</span>
							</div>
						</div>
						<!-- 忘记密码 -->
						<div class="text-right py-2">
							<a href="javascript:;"  ondragstart='return false' onselect="return false" class="font14">忘记密码?</a>
						</div>
						<!-- 登录按钮 -->
						<a href="javascript:;" ondragstart='return false' id="login_1" onselect="return false" class="a-btn">登陆</a>
						<a href="javascript:;" class="a-btn">会员注册</a>
					</div>
					<div class="log-btm">
						<div class="info">
							<span class="font14">会员权益</span>
							<a href="javascript:;" class="">
								会员可享受更多活动优惠 赶快来看看>
							</a>
						</div>
						<div class="help">
							<span class="font14">帮助中心</span>
							<a href="javascript:;">
								Sony小助手在线帮你答题解忧？
							</a>
						</div>
					</div>
				</div>
				<!-- 登录区域右侧图片 -->
				<div class="float-left pl-4 r-pho">
					<a href="javascript:;" class="d-block float-left mr-2 mb-10">
						<img src="sony_images/apho24_385x258.jpg" alt="">
					</a>
					<a href="javascript:;" class="d-block float-left mr-2 mb-10">
						<img src="sony_images/top_huashu_0724.jpg" alt="">
					</a>
					<a href="javascript:;" class="d-block float-left mb-10">
						<img src="sony_images/top_fuli.jpg" alt="">
					</a>
					<a href="javascript:;" class="d-block float-left">
						<img src="sony_images/top_msdp_837x258.jpg" alt="">
					</a>
					
				</div>
			</div>
		</div>
		<!-- 中部大厦 -->
		<div id="ActiveKvArea">
			<!-- 我的特权 -->
			<div class="My-privilege w1210 mb-5">
				<h3>我的▪特权</h3>
				<!-- 选项卡内容 -->
				<div class="clearfix px-3 tab-Control dropup">
					<a href="" class="arrow-left"></a>
					<a href="" class="arrow-right"></a>
					<div>
					<div>
						<a href="javascript:;" class="d-block">
							<img class="a-h_border" src="sony_images/tequan_huiyuanjia.jpg" alt="">
						</a>
					</div>
					<div>
						<a href="javascript:;" class="d-block">
							<img class="a-h_border" src="sony_images/tequan_yanbao.jpg" alt="">
						</a>
					</div>
					<div>
						<a href="javascript:;" class="d-block">
							<img  class="a-h_border" src="sony_images/tequan_chengzhangzhi.jpg" alt="">
						</a>
					</div>
					<div>
						<a href="javascript:;" class="d-block">
							<img class="a-h_border" src="sony_images/tequan_zhucefuli.jpg" alt="">
						</a>
					</div>
					<div>
						<a href="javascript:;" class="d-block">
							<img class="a-h_border" src="sony_images/tequan_shenghuo.jpg" alt="">
						</a>	
					</div>
					</div>

				</div>
			</div>
			<!-- 最新活动 -->
			<div class="New-activity w1210">
				<h3><img src="sony_images/icon_camera.png" alt="" style="vertical-align:text-top">最新活动</h3>
				<div class="clearfix mt-5 mb-3">
					<!-- 左 -->
					<a href="javascript:;" class="float-left d-block modal-open mr-2 a-hover"><img src="sony_images/campaign740_600x703.jpg" alt=""></a>
					<!-- 右 -->
					<div class="clearfix float-left w-600">
						<!-- 右上 -->
						<div class="clearfix mb-2 ">
							<a href="javascript:;" class="float-left d-block modal-open mr-2 a-hover"><img src="sony_images/campaign719_295x398.jpg" alt=""></a>
							<a href="javascript:;" class="float-left d-block modal-open mb-2 a-hover"><img src="sony_images/hd_bravia_zc.jpg" alt=""></a>
							<a href="javascript:;" class="float-left d-block modal-open a-hover"><img src="sony_images/hd_yanbao.jpg" alt=""></a>
						</div>
						<!-- 右下 -->
						<a href="javascript:;" class="float-left d-block modal-open mr-2 a-hover"><img src="sony_images/hd_lecture.jpg" alt=""></a>
						<a href="javascript:;" class="float-left d-block modal-open a-hover"><img src="sony_images/lvzuan_banner_190604.jpg" alt=""></a>
					</div>
				</div>
			</div>
		</div>
		<!-- 活动大厅 -->
		<div id="acafe">
			<!-- 标题 -->
			<div class="acafe_title text-center">
				<img src="sony_images/acafe.png" alt="">
				<div class="title_line"></div>
			</div>
			<!-- 图片展示区 -->
			<div class="w1210 clearfix">
				<div class="float-left mr-2 mb-2"><a href="javascript:;" class="d-block"><img src="sony_images/mysony_acafe_banner_01.jpg" alt=""></a></div>
				<div class="float-left mb-2"><a href="javascript:;" class="d-block"><img src="sony_images/mysony_acafe_banner_shipin_190429.jpg" alt=""></a></div>
				<div class="float-left mr-2"><a href="javascript:;" class="d-block"><img src="sony_images/campaign740_mysony_acafe_banner.jpg" alt=""></a></div>
				<div class="float-left"><a href="javascript:;" class="d-block"><img src="sony_images/mysony_acafe_banner_youxuan.jpg" alt=""></a></div>
			</div>
		</div>
    </div>
</template>
<style>
    @import url("../assets/css/reg.css");
</style>
<script>
export default {
	methods:{
		
	},
	created(){
		setTimeout(function(){
			// 功能一: 滑块验证
    var move=document.getElementById("move");
    var div=move.getElementsByTagName("div");
    var lang=div[1];
    var bgcolor=div[0];
    var txt=div[2];
    var icon = move.querySelector(".lang svg use");
        
    var span = txt.getElementsByTagName("span")[0]
    var curtain = txt.getElementsByTagName("div")[0]
        // 滑块需要滑动的长度
    var Lengths = (txt.clientWidth - lang.clientWidth)
    // 鼠标按下绑定事件
    
    lang.onmousedown=function(e){
        bgcolor.style.transition = "";
        lang.style.transition = "";
        

        // 按下时绑定鼠标移动事件
        var origin = e.clientX
        // console.log(origin)
        window.onmousemove = function(e){
            var left = e.clientX - origin;
            // console.log(left)
            if(left<Lengths && left>0){
                lang.style.left = left + "px";
                bgcolor.style.width = left + "px";
            }
            if(left >= (Lengths-13)){
                span.innerHTML = "验证通过";
                icon.setAttribute("xlink:href","#icon-jiazai");
                span.style.color = "white";
                lang.style.left = Lengths + "px";
                bgcolor.style.width = Lengths + "px";
                icon.setAttribute("xlink:href","#icon-chenggong");
                lang.onmousedown = null;
                window.onmousemove = null;
                return ;
            }
        }
        // 鼠标抬起
        window.onmouseup = function(){
            if(parseInt(lang.style.left) < Lengths){
                bgcolor.style.transition = ".5s";
                lang.style.transition = ".5s";
                bgcolor.style.width = 0 + "px";
                lang.style.left = 0 + "px";
            }
            window.onmousemove = null;
        }
    };


    // 功能二: 登录按钮ajax请求
    var login = document.getElementById("login_1");
    // 鼠标点击：
	login.onclick = loginJs;
	function loginJs(){
        // var reg = /^$/
        var uname = $(".ipt_user")[0].value;
        var upwd = $(".ipt_pwd")[0].value;
        if(uname == "" || upwd == ""){
            alert("请输入用户名和密码")
            return ;
        }
        if(parseInt(lang.style.left) != Lengths){
            alert("请完成验证");
            return ;
        }
        $.ajax({
            url:`http://127.0.0.1:8088/login?uname=${uname}&upwd=${upwd}`,
            type:"get",
            data:{},
            success:function(res){
                if(res.code == -1){
                    alert("用户名密码有误");
                }
                if(res.code == 1){
                    alert("登录成功")
                    // .then(
                        // ()=>{
                            location.href="http://127.0.0.1:8081/sony.html"
                        // }
                    // )
                }
            }
        })		
	};
    // 键盘按下：
    document.onkeydown = function(e){
        if(e.keyCode == 13){
            loginJs();
        }
    }

    // 功能三: 清空输入框
    var delInput = document.querySelectorAll(".del_input");
    // console.log(delInput[0]);
    delInput[0].addEventListener("click",deleteInput);
    delInput[1].addEventListener("click",deleteInput);

    function deleteInput(){
        $(".ipt_user")[0].value = "";
        $(".ipt_pwd")[0].value = "";
    }
		},1000)
	}
}
</script>