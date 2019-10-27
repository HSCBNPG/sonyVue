<template>
    <!-- 整体页面 overfloe:hidden-->
    <div class="cont" ondragstart='return false;'>
        <!-- 超大页面 -->
        <div class="main" :style="top == 0?'top:0vh':top == 1?'top:-100vh':top == 2?'top:-200vh':top == 3?'top:-300vh':top == 4?'top:-400vh':''">
            <!-- 隐藏logo固定定位 -->
            <div class="daohang">
                <img src="../assets/sony_images/header.jpg" alt="">
            </div>
            <!-- 隐藏导航菜单 -->
            <div class="daohangMenu" :style="m?'top:0px;':''">
                <div @click="changePage" @mouseenter="menuHover" data-left="1"><img src="../assets/sony_images/tMenu_icon01.png" alt="">&nbsp;首页</div>
                <div @click="changePage" @mouseenter="menuHover" data-left="2"><img src="../assets/sony_images/tMenu_icon02.png" alt="">&nbsp;黑卡家族</div>
                <div @click="changePage" @mouseenter="menuHover" data-left="3"><img src="../assets/sony_images/tMenu_icon03.png" alt="">&nbsp;黑卡优势</div>
                <div @click="changePage" @mouseenter="menuHover" data-left="4"><img src="../assets/sony_images/tMenu_icon04.png" alt="">&nbsp;实拍欣赏</div>
                <div @click="changePage" @mouseenter="menuHover" data-left="5"><img src="../assets/sony_images/tMenu_icon05.png" alt="">&nbsp;影像课堂</div>
                <img @click="menuButton(0,$event)" @mouseenter="hoverOff" @mouseleave="hoverOn" src="../assets/sony_images/Off1.png" alt="">
                <span :class="spanHover"></span><!-- #关 -->
            </div>
            <!-- 导航菜单开关按钮固定定位  #开 -->
            <div @click="menuButton(1)" class="menu" :style="top == 0?'color:#fff;':'color:#000;'">
                MENU &nbsp;<img v-show="top == 0" src="../assets/sony_images/menu0.png" alt="">
                <img v-show="top == 1 || top == 2" src="../assets/sony_images/menu1.png" alt="">
            </div>
            <!-- 导航标题 -->
            <ul class="menushow" :style="top == 1||top == 2?'color:#000;':''">
                <li v-show="top == 0">首页</li>
                <li v-show="top == 1">黑卡家族</li>
                <li v-show="top == 2">黑卡优势</li>
                <li v-show="top == 3">实拍欣赏</li>
                <li v-show="top == 4">影像课堂</li>
            </ul>
            <!-- 第一页小页面 相对定位-->
            <div class="page page1">
                <!-- 大图列表 绝对定位 -->
                <ul class="boxul box1">
                    <!-- 图片容器弹性布局 -->
                    <li :style="a == 1?'opacity: 1 !important;':'opacity: 0;'"><img src="images/index_01.jpg" alt=""></li>
                    <li :style="a == 2?'opacity: 1 !important;':'opacity: 0;'"><img src="images/index_02.jpg" alt=""></li>
                    <li :style="a == 3?'opacity: 1 !important;':'opacity: 0;'"><img src="images/index_03.jpg" alt=""></li>
                    <li :style="a == 4?'opacity: 1 !important;':'opacity: 0;'"><img src="images/index_04.jpg" alt=""></li>
                </ul>
                <!-- 导航图列表绝对定位 -->
                <ul class="boxul box2">
                    <li v-show="a == 1"><img src="images/iMenuBg01.png" alt=""></li>
                    <li v-show="a == 2"><img src="images/iMenuBg02.png" alt=""></li>
                    <li v-show="a == 3"><img src="images/iMenuBg03.png" alt=""></li>
                    <li v-show="a == 4"><img src="images/iMenuBg04.png" alt=""></li>
                </ul>
                <!-- 移入事件触发元素 -->
                <ul class="box3">
                    <li @mouseover="yiru(1)"></li>
                    <li @mouseover="yiru(2)"></li>
                    <li @mouseover="yiru(3)"></li>
                    <li @mouseover="yiru(4)"></li>
                </ul>
            </div>
            <!-- 第二页 -->
            <div class="page">
                <!-- 第二页内容弹性布局内容居中 -->
                <div class="er">
                    <!-- 背景大图 -->
                    <div class="content">
                        <!-- 切换背景图 -->
                        <ul class="contul">
                            <li>
                                <img src="../assets/sony_images/fam_text01.png" alt="">
                            </li>
                            <li>
                                <img src="../assets/sony_images/fam_text02.png" alt="">
                            </li>
                            <li>
                                <img src="../assets/sony_images/fam_text03.png" alt="">
                            </li>
                            <li>
                                <img src="../assets/sony_images/fam_text04.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 第三页 -->
            <div class="page">
                <!-- 弹性布局内容竖直居中 -->
                <div class="san">
                    <!-- 内容 -->
                    <div class="cont3">
                        <ul class="contul3">
                            <li>
                                <img class="out" src="../assets/sony_images/advantage_01.png" alt="">
                                <img class="on" src="../assets/sony_images/advantage_01_on.png" alt="">
                                <div class="txt txt1">
                                    <h3>轻巧便捷<span>不妥协的画质</span></h3>
                                    <ul>
                                        <li><b>·</b> 大尺寸影像传感器</li>
                                        <li><b>·</b> 高质量镜头</li>
                                        <li><b>·</b> 口袋尺寸 性能优质</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <img class="out" src="../assets/sony_images/advantage_02.png" alt="">
                                <img class="on" src="../assets/sony_images/advantage_02_on.png" alt="">
                                <div class="txt txt2">
                                    <h3>高性能<span>高表现力</span></h3>
                                    <ul>
                                        <li><b>·</b> 快速、精准对焦</li>
                                        <li><b>·</b> 眼部对焦（眼部AF）</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <img class="out" src="../assets/sony_images/advantage_03.png" alt="">
                                <img class="on" src="../assets/sony_images/advantage_03_on.png" alt="">
                                <div class="txt txt3">
                                    <h3>出色<span>视频</span></h3>
                                    <ul>
                                        <li><b>·</b> 4K视频录制</li>
                                        <li><b>·</b> 超慢动作视频拍摄</li>
                                        <li><b>·</b> 文件配置格式（S-log）</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <img class="out" src="../assets/sony_images/advantage_04.png" alt="">
                                <img class="on" src="../assets/sony_images/advantage_04_on.png" alt="">
                                <div class="txt txt4">
                                    <h3>随拍<span>随分享</span></h3>
                                    <ul>
                                        <li><b>·</b> 一触分享</li>
                                        <li><b>·</b> 一触遥控</li>
                                    </ul>                                   
                                </div>
                            </li>
                        </ul>
                        <img class="footimg" src="../assets/sony_images/advantage_cp01.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 第四页 -->
            <div class="page">
            </div>
            <!-- 第五页 -->
            <div class="page">
                <!-- 弹性布局 -->
                <div class="wu">
                    <!-- 背景图片 -->
                    <div class="content5">
                        <div>
                            <!-- 导航 -->
                            <ul class="cards">
                                <li>RX100系列</li>
                                <li>RX10系列</li>
                                <li>RX1系列</li>
                                <li>RX0系列</li>
                            </ul>
                            <!-- 图片 -->
                            <div id="fu" class="images">
                                <div id="zi">
                                    <img src="../assets/sony_images/az_b01.jpg" alt="">
                                    <img src="../assets/sony_images/az_s02.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/hyk_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/wz_s01.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                    <img src="../assets/sony_images/az_s03.jpg" alt="">
                                </div>
                            </div>
                            <!-- 滚动条 -->
                            <div id="tiao" class="tiao">
                                <span :style="'top:'+tiao+'px;'">
                                    <img src="../assets/sony_images/yueliang.png" alt="">
                                </span>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("../assets/css/style1.css");
</style>
<script>
export default {
    data(){
        return {
            a : 1,
            top : 0,
            timerr : null,
            m:false,
            spanHover:{
                left1:false,
                left2:false,
                left3:false,
                left4:false,
                left5:false
            },
            // 函数：传入参数更改菜单底部span位置
            qiehuan(q){
                var span = this.spanHover
                for(var key in span){
                    span[key] = false;   //遍历所有属性值并设为false
                    // 截取属性的最后一个数字,如果和元素绑定数据相同,让此属性为true
                    if(/[0-9]$/.exec(key)[0] == q){    
                        span[key] = true;
                    }
                }
            },
            tiao:0,
            v:null,   //父元素距离
            i:null,    //子元素移动后距离
            fu: $("#fu")[0],
            zi: $("#zi")[0],
            tiaospan: $("#tiao")[0]
        }
    },
    methods:{
        tiao2(){
            setTimeout(()=>{
                this.v = this.fu.getBoundingClientRect().y
                this.i = this.zi.getBoundingClientRect().y
                var fuH = this.fu.offsetHeight;
                var ziH = this.zi.offsetHeight;
                var tH = this.tiaospan.offsetHeight;
                var cha = ziH - fuH
                var x = tH/cha
                var ch = this.i - this.v
                    this.tiao = -ch*x
                    console.log(333)
                },150)
            console.log(222)
        },
        // 点击菜单切换页面事件
        changePage(e){
            var p = e.target.dataset.left;
            this.top = p-1;
            if(this.top == 4){
                this.tiao2()
            }
        },
        // 菜单鼠标移入事件切换菜单
        menuHover(e){
            var a = e.target.dataset.left;
            this.qiehuan(a)
        },
        // 菜单开关点击事件  0:关  1:开
        menuButton(n,e){
            function abc(e,v){
                e.style.transition = "1s"
                e.style.transform = "rotate(360deg)";
                setTimeout(()=>{
                    e.style.transform = "rotate(0deg)";
                },700)
                setTimeout(()=>{
                    v.m=false;
                },400)                
            }
            // 是否调用函数abc关闭动画
            n ? this.m=true : abc(e.target,this)
            this.qiehuan(this.top+1)
        },
        hoverOff(e){
            e.target.style.transition = ".6s"
            e.target.style.transform = "rotate(-180deg)";
        },
        hoverOn(e){
            e.target.style.transform = "rotate(0deg)";
        },        
        // 定时器
        timer(){
            this.timerr = setInterval(()=>{
                if(this.a<4){
                    this.a++
                }else{
                    this.a = 1
                }
            },2500)
        },
        // 滚轮滚动事件
        gundong(e){
            if(this.top == 4){
                
            }else{
                // 0.1配置滚轮事件
                window.onmousewheel = null;
                window.removeEventListener('DOMMouseScroll',this.gundong)
                // ——————任务结束—————
                // 0.2配置滚轮事件
                setTimeout(()=>{
                    window.onmousewheel = this.gundong;
                    window.addEventListener('DOMMouseScroll', this.gundong);
                },200)
            }

            //120为向上，-120为向下 火狐和谷歌不同滚轮方向值不同保存的属性也不同
            // console.log(e.wheelDelta || -e.detail)
            // —————任务开始—————
            // 1.判断是向上滚动还是向下滚动
            if((e.wheelDelta > 0) || -e.detail > 0){
                // 2.向上滚动所执行的操作
                // 4.判断是否在第一页内
                if(this.top == 0){
                    // 5.如果在第一页内执行的操作
                    // 6.如果焦点在后三个 2 3 4
                    if(this.a>1){
                      this.a--
                    }
                }else{
                    // 6.不在第一页内执行的操作
                    // 如果在第五页执行
                    if(this.top==4){
                        if(this.tiao == 0){
                            this.top--
                        }else{
                            
                        }
                    }else{
                        this.top--
                    }
                }
            }
            // ##向下滚动触发
            else{
                // 3.向下滚动所执行的操作
                // 如果当前在第一页
                if(this.top == 0){
                    // 如果当前在第四个图片
                    if(this.a == 4){
                        this.top++
                    }
                    // 如果当前在前三个图片
                    if(this.a < 4){
                        // 清除原定时器启动新的定时器
                        clearInterval(this.timerr)
                        // a.启动定时器
                        this.timer()
                        this.a++
                    }
                }else
                // 如果当前在第二页
                if(this.top == 1){
                    this.top++
                }else
                // 如果当前在第三页
                if(this.top == 2){
                    this.top++
                }else
                // 如果当前在第四页
                if(this.top == 3){
                    this.top++
                }else 
                // 如果当前在第五页
                if(this.top == 4){
                    // console.log($("#b")[0].getBoundingClientRect().y)
                }
            }
            // 一次滚动后判断当前页面在第几页切换导航栏菜单底部边框
            this.qiehuan(this.top+1)
            // 一次滚动后判断当前是否在第五页，执行滚动条事件
            if(this.top == 4){
                this.tiao2()
            }
        },
        // 鼠标移入事件
        yiru(num){
            // 修改a的值e.target.data
            this.a = num;
            // 调用定时器
            clearInterval(this.timerr)
            this.timer()
        }
    },
    // 组件对象,data对象加载完,虚拟DOM树未生成
    created(){
    },
    // 组件对象,data对象,虚拟DOM树加载完
    mounted(){
        window.onmousewheel = this.gundong
        window.addEventListener('DOMMouseScroll', this.gundong);
        this.fu= $("#fu")[0],
        this.zi= $("#zi")[0],
        this.tiaospan= $("#tiao")[0]
    }
}
</script>
