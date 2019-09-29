<template>
    <div>
        <div id="header-fu">
            <my-header v-if="height<=900"></my-header>
            <div class="fixed"  v-else>
                <my-header></my-header>
            </div>
        </div>
        <!-- 首页轮播图 -->
        <div id="swiper-container">
            <!-- 轮播图整体 -->
            <div id="lunbo" class="carousel" data-ride="carousel">
                <!-- 图片轮播 -->
                <div class="carousel-inner h-100">
                    <div class="carousel-item active h-100">
                        <img class="w-100 h-100" src="../assets/sony_images/kv_sel35f18f_xpfb.jpg">
                    </div>
                    <div class="carousel-item h-100">
                        <img class="w-100 h-100" src="../assets/sony_images/kv_sel1655g_yskq906.jpg">
                    </div>
                    <div class="carousel-item h-100">
                        <img class="w-100 h-100" src="../assets/sony_images/kv_a7rm4_yskq.jpg">
                    </div>
                    <div class="carousel-item h-100">
                        <img class="w-100 h-100" src="../assets/sony_images/kv_alpha6600_yskq.jpg" alt="">
                    </div>
                </div>
                <!-- 左右箭头 -->
                <a href="#lunbo" class="carousel-control-prev" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a href="#lunbo" class="carousel-control-next" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
                <!-- 轮播指示器 -->
                <ul class="carousel-indicators" style="background:transparent">
                    <li data-slide-to="0" data-target="#lunbo" class="indicators active"></li>
                    <li data-slide-to="1" data-target="#lunbo" class="indicators"></li>
                    <li data-slide-to="2" data-target="#lunbo" class="indicators"></li>
                    <li data-slide-to="3" data-target="#lunbo" class="indicators"></li>
                </ul>
            </div>
        </div>
        <!-- 数码影像 -->
        <div id="MainB1">
            <!-- 商场大厦一楼标题 -->
            <div class="container">
                <div class="text-center py-5">
                    <h4 id="smyx_bg" class="d-inline pl-5 py-2">数码影像</h4>
                </div>
            </div>
            <!-- 商场大厦一楼标题下导航栏 -->
            <ul class="clearfix d-flex justify-content-center font-s text-center">
                <li class="float-left px-3 minw80"><a href="">微单™/单电数码相机</a></li>
                <li class="float-left px-3 minw80"><a href="">镜头</a></li>
                <li class="float-left px-3 minw80"><a href="">数码相机</a></li>
                <li class="float-left px-3 minw80"><a href="">数码摄像机</a></li>
                <li class="float-left px-3 minw80"><a href="">运动相机</a></li>
                <li class="float-left px-3 minw80"><a href="">配件</a></li>
                <li class="float-left px-3 minw80"><a href="">应用软件</a></li>
                <li class="float-left px-3 minw80"><a href="">线下体验</a></li>
                <li class="float-left px-3 minw80"><a href="">PRO</a></li>
                <li class="float-left px-3 minw80"><a href="">Support影像专业服务</a></li>
                <li class="float-left px-3 minw80"><a href="">微摄会 α Universe</a></li>
            </ul>
            <!-- 商场大厦商品区域 -->
            <div class="MainBlock1 px-1">
                <!-- 商场左区域 -->
                <div class="MainBlock_left pr-1 ">
                    <div class="mb-2 w-100">
                        <!-- 第一个轮播图开始 -->
                        <div class="carousel" data-ride="carousel">
                            <div class="carousel-inner fu">
                                <div class="carousel-item active">
                                    <img class="my_hover w-100"  src="../assets/sony_images/block_a7m3_600703.jpg">
                                </div>
                                <div class="carousel-item">
                                    <img class="my_hover w-100" src="../assets/sony_images/block_rx10m4_0906_600703.jpg">
                                </div>
                                <div class="zi">
                                    <p>Alpha 7R IV</p>
                                    <h3>数码影像新高度</h3>
                                    <span>RMB 26,999</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-2 w-100">
                        <!-- 第二个轮播图开始 -->
                        <div class="carousel" data-ride="carousel">
                            <!-- 轮播图片 -->
                            <div class="carousel-inner fu">
                                <div class="carousel-item">
                                    <img class="my_hover w-100" src="../assets/sony_images/block_rx10m4_0906_600295.jpg">
                                </div>
                                <div class="carousel-item active">
                                    <img class="my_hover w-100" src="../assets/sony_images/block_rx10m4_911_600295.jpg">
                                </div>
                                <div class="zi">
                                    <p>黑卡®超长焦旗舰 RX10IV</p>
                                    <h3>F2.4-F4大光圈<br>24-600mm超长焦</h3>
                                    <span>RMB 11,499 起</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mr-2 fu">
                        <img src="../assets/sony_images/block_sel135f18gm_1907_295398.jpg">
                        <div class="zi">
                            <p>SEL135F18GM</p>
                            <h3>大光圈<br>远摄定焦<br>G大师镜头</h3>
                            <span>RMB 13,500</span>
                        </div>
                    </div>
                    <div class="mb-2 fu">
                        <img class="r-12_b-10" src="../assets/sony_images/block_AX45.png">
                        <div class="zi">
                            <p style="color: #666666;">4K数码摄像机 FDR-AX45</p>
                            <h3 style="color: #333333">快捷编辑 轻松分享</h3>
                            <span>RMB 5,880</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/zeiss_40x40.png" alt="">
                                <img src="../assets/sony_images/4k_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="fu">
                        <img src="../assets/sony_images/block_rx100m5a_911_295194.jpg">
                        <div class="zi" style="top:30px;">
                            <p style="color: #666666;">4K黑卡® RX100M5A</p>
                            <h3 style="color:#333333;">高性价比的Vlog利器</h3>
                            <span>RMB 5,399 起</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/zeiss_40x40.png" alt="">
                                <img src="../assets/sony_images/1inch_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 商场右区域 -->
                <div class="MainBlock_right pl-1">
                    <div class="mr-2 mb-2">
                        <img src="../assets/sony_images/block_a9_ver5_295398.jpg">
                    </div>
                    <div class="mb-2 fu">
                        <img src="../assets/sony_images/block_rx100m7_911_295398.jpg">
                        <div class="zi">
                            <p>新一代旗舰黑卡® RX100 VII</p>
                            <h3>“口袋中的α9“</h3>
                            <span>RMB 8,699</span>
                        </div>
                    </div>
                    <div class="mr-2 fu mb-2">
                        <img src="../assets/sony_images/block_a7m3_295294.jpg">
                        <div class="zi">
                            <p>Alpha 7  III</p>
                            <h3>全画幅<br>新基准</h3>
                            <span>RMB 13,699 起</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/fullframe_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="mb-2 fu">
                        <img src="../assets/sony_images/block_a6400l_0906_295294.jpg">
                        <div class="zi">
                            <p style="color:#666666">Alpha 6400</p>
                            <h3 style="color:#333333;">轻松解锁<br>VLOG新玩法</h3>
                            <span>RMB 7,099</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/aps_c_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="fu">
                        <img src="../assets/sony_images/block_rx100m7g_600703.jpg">
                        <div class="zi">
                            <p style="color:#666666">新一代旗舰黑卡® RX100M7</p>
                            <h3 style="color:#333333;">新增实时追踪对焦<br>及麦克风接口</h3>
                            <span>RMB 9,299 起</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商场一楼底部装机必备 -->
            <div class="block_bottom clearfix pl-3">
                <span class="float-left d-inlineblock ">装机必备：</span>
                <ul class="float-left">
                    <li class="float-left px-2"><a href="">PlayMemories Mobile</a></li>
                    <li class="float-left px-2"><a href="">PlayMemories Home</a></li>
                    <li class="float-left px-2"><a href="">PlayMemories Camera Apps</a></li>
                    <li class="float-left px-2"><a href="">Capture One (For Sony)</a></li>
                    <li class="float-left px-2"><a href="">Action Cam APP</a></li>
                    <li class="float-left px-2"><a href="">Movie Creator</a></li>
                </ul>
            </div>
        </div>
        <!-- 便携音频 -->
        <div id="MainB2">
            <!-- 商场大厦二楼标题 -->
            <div class="container">
                <div class="text-center py-5">
                    <h4 id="bxyp_bg" class="d-inline pl-5 py-2">便携音频</h4>
                </div>
            </div>
            <!-- 商场大厦二楼标题下导航栏 -->
            <ul class="clearfix d-flex justify-content-center font-s text-center">
                <li class="float-left px-lg-3 mx-sm-0"><a href="">高解析度音频设备</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">MP4/MP3 播放器</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">数码录音棒</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">耳机</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">无线扬声器</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">专业麦克风</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">应用软件</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">热门活动</a></li>
                <li class="float-left px-lg-3 mx-sm-0"><a href="">音乐鉴赏</a></li>
            </ul>
            <!-- 商场大厦二楼商品区域 -->
            <div class="MainBlock2 px-1">
                <!-- 商场左区域 -->
                <div class="MainBlock_left pr-1">
                    <!-- 竖着第一张图片 -->
                    <div class="mb-2 w-100">
                        <img src="../assets/sony_images/block_wf_1000xm3_0723_600703.jpg">
                    </div>
                    <!-- 左，竖第二张 -->
                    <div class="mb-2 w-100 fu">
                        <img src="../assets/sony_images/srs_xb12_19082_600295.jpg">
                        <div class="zi">
                            <p>SRS-XB12</p>
                            <h3>小巧便携 随身享受</h3>
                            <span>RMB 479</span>
                        </div>
                    </div>
                    <div class="mr-2 fu">
                        <img src="../assets/sony_images/block_nw_zx300_295398 (1).jpg">
                        <div class="zi">
                            <p style="color:#666666;">NW-ZX300A</p>
                            <h3 style="color:#333333;">数字音乐播放器</h3>
                            <span>RMB 2,399</span>
                        </div>
                    </div>
                    <div class="mb-2 fu">
                        <img src="../assets/sony_images/block_nw_x99_295194.jpg">
                        <div class="zi">
                            <p style="color:#666666;">SRS-X99</p>
                            <h3 style="color:#333333;">高解析度无线扬声器</h3>
                            <span>RMB 4,999</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/hires_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="fu">
                        <img src="../assets/sony_images/block_xba_n3bp_295194.jpg">
                        <div class="zi" style="top:22px;">
                            <p style="color:#666666;">XBA-N3BP</p>
                            <h3 style="color:#333333;">高解析度<br>立体声耳机</h3>
                            <span>RMB 2,599</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/hires_40x40.png" alt="">
                                <img src="../assets/sony_images/44mm-40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 商场右区域 -->
                <div class="MainBlock_right pl-1">
                    <div class="mr-2 mb-2">
                        <div class="fu mb-2">
                            <img style="transition:1s;" src="../assets/sony_images/block_nw_a55_green.jpg">
                            <div class="zi" style="top:22px;left:22px;">
                                <p>NW-A55</p>
                                <h3>高解析度<br>音乐播放器</h3>
                                <span>RMB 1,199</span>
                                <div class="d-img">
                                    <img src="../assets/sony_images/hires_40x40.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="fu">
                            <img style="transition:1s;" src="../assets/sony_images/block_wh_h900n_blue_295194.jpg">
                            <div class="zi" style="top:22px;left:22px;">
                                <p>WH-H900N</p>
                                <h3>无线降噪<br>立体声耳机</h3>
                                <span>RMB 2,299</span>
                                <div class="d-img">
                                    <img src="../assets/sony_images/hires_40x40.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-2 fu">
                        <img src="../assets/sony_images/block_wi_1000x_1908_295398.jpg">
                        <div class="zi">
                            <p style="color:#666666;">WI-1000X</p>
                            <h3 style="color:#333333;">降噪静界 智能聆听</h3>
                            <span>RMB 2,299</span>
                        </div>
                    </div>
                    <div class="mr-2 fu mb-2">
                        <img src="../assets/sony_images/block_ier_z1r_295295.jpg">
                        <div class="zi">
                            <p>IER-Z1R</p>
                            <h3>旗舰入耳式立体声耳机</h3>
                            <span>RMB 12,999</span>
                            <div class="d-img">
                                <img src="../assets/sony_images/hires_40x40.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="mb-2 fu">
                        <img src="../assets/sony_images/block_nw_wm1a_295295.jpg">
                        <div class="zi" style="top:22px;left:22px;">
                            <p style="color:#666666;">NW-WM1A</p>
                            <h3 style="color:#333333;">高解析度<br>音乐播放器</h3>
                            <span>RMB 7,399</span>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/sony_images/block_wh_1000xm3_1908_600703.jpg">
                    </div>
                </div>
            </div>
            <!-- 商场一楼底部装机必备 -->
            <div class="block_bottom clearfix pl-3">
                <span class="float-left d-inlineblock ">装机必备：</span>
                <ul class="float-left">
                    <li class="float-left px-2"><a href="">PlayMemories Mobile</a></li>
                    <li class="float-left px-2"><a href="">PlayMemories Home</a></li>
                    <li class="float-left px-2"><a href="">PlayMemories Camera Apps</a></li>
                    <li class="float-left px-2"><a href="">Capture One (For Sony)</a></li>
                    <li class="float-left px-2"><a href="">Action Cam APP</a></li>
                    <li class="float-left px-2"><a href="">Movie Creator</a></li>
                </ul>
            </div>
        </div>
        <!-- 会员专区 -->
        <div id="MainBMySony">
            <h3 class="text-white">My Sony Cliub会员专区</h3>
            <!-- 导航 -->     
            <ul class="clearfix d-flex justify-content-center  text-center bg-transparent text-white mb-5 mt-3">
                <li class="float-left px-3">我的索尼</li>
                <li class="float-left px-3 border-left">最新动态</li>
                <li class="float-left px-3 border-left">产品注册</li>
                <li class="float-left px-3 border-left">α café 社区</li>
            </ul>
        </div>
        <my-footer></my-footer>
        <!-- 登陆框 -->
        <div id="login" class="">
            <div class="login_zones active pb-3">
                <div class="clearfix">
                    <div class="w-9 clearfix float-left">
                        <img class="float-left w-50" src="../assets/sony_images/login_btn_01.jpg" alt="">
                        <img id="reg_img" class="float-left w-50 cursor" src="../assets/sony_images/login_btn_02.jpg" alt="">
                    </div>
                    <img class="close float-left" src="../assets/sony_images/close228.jpg" alt="">
                </div>
                <div class="pads">
                    <div class="clearfix">
                        <span class="sp1"></span>
                        <input class="ipt" type="text" placeholder="邮箱/用户名/手机">
                    </div>
                    <div class="clearfix">
                        <span class="sp1 sp2"></span>
                        <input class="ipt" type="password" placeholder="密码">
                    </div>
                    <div class="border-0 clearfix">
                        <label class="remem">
                            <input id="jizhu" checked type="checkbox">记住用户名
                        </label>
                        <a href="javascript:;" class="float-right ">忘记密码</a>
                    </div>
                    <a @click="denglu" class="d-block w-100 text-center mb-3" href="javascript:;">登录</a>
                    <div class="bottom border-0">如果您的用户名密码无法登录，请联系 400-810-1228</div>
                </div>
            </div>
            <div class="register_zones">
            </div>
        </div>
        <div class="backg"></div>
        <!-- 固定定位楼层提示 -->
        <div v-show="top<=380" class="floor-menus">
            <ul>
                <li @click="menuButton(1)">
                    <img v-show="!(top<=380 && top>=-1080)" src="../assets/sony_images/RightFixNav_icon1.jpg" alt="">
                    <div class="f-menu">
                        数码<br>影像
                    </div>
                </li>
                <li @click="menuButton(2)">
                    <img  v-show="!(top<=-1080 && top >=-2700)" src="../assets/sony_images/RightFixNav_icon2.jpg" alt="">
                    <div class="f-menu">
                        便携<br>音频
                    </div>
                </li>
                <li @click="menuButton(3)">
                    <img  v-show="!(top<=-2700 && top >=-4000)" src="../assets/sony_images/RightFixNav_icon5.jpg" alt="">
                    <div class="f-menu">
                        会员<br>专区
                    </div>
                </li>
                <li @click="menuButton(0)">
                    <img src="../assets/sony_images/RightFixNav_icon6.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            height:0,
            sss:true,
            top:381,
            // 可以跳转至指定参数的位置(内容溢出的长度)
            tiao(h){
                var shijian = 300;   //总时间
                var juli = (document.body.scrollTop||document.documentElement.scrollTop) - h;
                var sudu = juli/shijian //每毫秒走多远
                if(juli > 0){
                    var timer = setInterval(()=>{
                        window.scrollBy(0,-sudu*10)
                        // sudu*10     //每步走多远
                        juli-=(sudu*10)
                        if(juli <= 0){
                            clearInterval(timer)
                        }
                    },10)
                }else{
                    var timer = setInterval(()=>{
                        window.scrollBy(0,-sudu*10)
                        // sudu*10     //每步走多远
                        juli-=(sudu*10)
                        if(juli >= 0){
                            clearInterval(timer)
                        }
                    },10)                    
                }
            }
        }
    },
    beforeUpdate(){
    },
    methods:{
        // 登录功能
        denglu(){
            var uname = $(".ipt")[0].value;
            var upwd = $(".ipt")[1].value;
            if(uname == "" || upwd == ""){
                alert("请输入用户名或密码")
                return;
            }
            this.axios.get("http://127.0.0.1:8081/user/log",{
                params:{
                    uname,
                    upwd
                }
            }).then(result=>{
                if(result.data.code == 1){
                    sessionStorage.setItem("user",uname);
                    sessionStorage.setItem("userimg",result.data.img);  //保存用户头像
                    if($("#jizhu")[0].checked){
                        localStorage.setItem("username",uname)       //永久保存用户名
                    }
                    this.$store.commit("setUserimg",sessionStorage.getItem("userimg")) //修改用户头像
                    this.$store.commit("setLogStatus",true);     //修改全局登录状态
                    console.log(this.$store.getters.getLogStatus)
                    $(".ipt")[0].value = $(".ipt")[1].value = "";
                    $("#login").removeClass("active")
                    $(".backg").removeClass("active")
                    alert("登陆成功")
                }else{
                    alert("账号或密码错误")
                }
            })
        },
        // 楼层跳转
        menuButton(a){
            var Hh = $("#header")[0].clientHeight;
            var Lh = $("#swiper-container")[0].clientHeight;
            var m1 = $("#MainB1")[0].clientHeight;
            if(a == 1){
                this.tiao((Hh+Lh)*0.7)
            }
            if(a == 2){
                this.tiao((Hh+Lh)*0.7+m1)
            }
            if(a == 3){
                this.tiao((Hh+Lh)*0.7+m1*2)
            }
            if(a == 0){
                this.tiao(0)
            }
        }
    },
    mounted(){
        this.height = document.body.scrollTop||document.documentElement.scrollTop;
        window.onscroll =()=>{
            this.height = document.body.scrollTop||document.documentElement.scrollTop;
            this.top = $("#MainB1")[0].getBoundingClientRect().y
        }
        if(sessionStorage.getItem("user") != null){
            this.$store.commit("setLogStatus",true);
            this.$store.commit("setUserimg",sessionStorage.getItem("userimg"))
        }
    }
}
</script>
<style>
    @import url("../assets/css/sony.css");
</style>