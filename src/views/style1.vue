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
    /* 第五页 */
    .wu{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .content5{
        width: 100%;
        height: 56.25vw;
        background: url("../assets/sony_images/index_sample.jpg") no-repeat;
        background-size:100%;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .content5>div{
        width: 77%;
        height: 71.5%;
        box-sizing: border-box;
        transform: translateY(6%);
        transition: relative;
    }
    .cards{
        background:transparent;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10%;
    }
    .cards>li{
        font-size: 1.3em;
        color:white;
    }
    .images{
        width: 100%;
        height: 90%;
        overflow: auto;
    }
    .images::-webkit-scrollbar{
        width: 0px;
    }
    .images>div>img{
        width: 25%;
    }
    /* 滑动条 */
    .tiao{
        width: 1px;
        height: 100%;
        position: absolute;
        right: -30px;
        background: #ffe05b;
        top:0px;
    }
    .tiao>span{
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        transform: translateX(-50%);
        transition: all .3s
    }
    .tiao>span>img{
        position: relative;
        left: -30%;
    }
    /* 导航菜单 */
    .daohangMenu{
        position: fixed;
        top:-8%;
        left: 0px;
        width: 100%;
        height: 8%;
        background: #000;
        display: flex;
        align-items: center;
        z-index: 119;
        transition: all .4s;
        cursor: pointer;
    }
    .daohangMenu>div{
        width: 18.7%;
        height: 40%;
        display: flex;
        font-size: 1.4em;
        color:#ccc;
        align-items: center;
        justify-content: center;
        border-right:1px solid #575757;
    }
    .daohangMenu>div>img{
        height: 85%;
    }
    .daohangMenu>img{
        display:block;
        height: 40%;
        margin:0 auto;
        transition: all 1s;
    }
    .daohangMenu>span{
        position:absolute;
        width: 18.7%;
        background:#e92124;
        height:2px;
        top:85%;
        left:0%;
        transition: all .3s;
    }
    .left1{left:0% !important;}
    .left2{left:18.7% !important;}
    .left3{left:37.4% !important;}
    .left4{left:56.1% !important;}
    .left5{left:74.8% !important;}
    /* 导航菜单开关 */
    .menushow{
        border-bottom:1px solid;
        background: transparent;
        width: 2.3vw;
        position:fixed;
        right: 2%;
        top:8%;
        z-index: 110;
        line-height: 2.1em;
        color: #fff;
        padding: .8vw 0vw;
    }
    .menushow1{
        color: #000;
    }
    .menushow>li{
        line-height: inherit;
        font-size: 1vw;
        color:inherit;
    }
    /* 菜单开关 */
    .menu{
        position: fixed;
        right: 2%;
        top:3%;
        width: 6%;
        z-index: 110;
        font-size: 1.05vw;
        color:#ffffff;
        cursor: pointer;
    }
    .menu>img{
        width: 35%;
    }
    /* 导航 */
    .daohang{
        position: fixed;
        width:100%;
        height: 8%;
        top:0px;
        left: 0px;
        z-index: 100;
        display: flex;
        justify-content: center;
    }
    .daohang:hover>img{
        top: 0%;
    }
    .daohang>img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: -100%;
        transition: all .3s
    }
    /* 第一页 */
    .act1{
        opacity: 1 !important;
    }
    .act{
        display: block;
    }
    .box2>.act{
        display: flex !important;
    }
    .cont{
        width:100%;
        height:100vh;
        position:relative;
        overflow: hidden;
        background-color: #000;
    }
    /* 超大页面 */
    .main{
        width: 100%;
        height:3000px;
        position: relative;
        transition: all .7s;
    }
    .page{
        width:100%;
        height: 100vh;
        position:relative;
        overflow: hidden;
    }
    .boxul>li>img{
        max-width: 100%;
    }
    .boxul{
        width: 100%;
        position:absolute;
    }
    .boxul>li{
        width: 100%;
        height:100vh;
        position:absolute;
        top:0px;
        display: none;
        opacity: 0;
        display:flex;
        align-items: center;
        position:absolute;
        transition: all .3s;
    }
    .box1{
        top:0px;
    }
    .box2{
        bottom:0px;
    }
    .box1>li{
        overflow: hidden;
    }
    .box2>li{
        height: auto;
        bottom: 0px;
        opacity: 1;
        align-items: flex-end;
    }
    .box3{
        position:absolute;
        bottom:0px;
        width: 100%;
    }
    .box3>li{
        position:absolute;
        bottom: 0%;
    }
    .box3>li:first-child{
        width: 10.78%;
        left: 21.35%;
        height:17vw;
    }
    .box3>li:nth-child(2){
        width:14.43%;
        left: 35.78%;
        height: 15vw;
    }
    .box3>li:nth-child(3){
        width: 12.86%;
        left:53.07%;
        height: 13vw;
    }
    .box3>li:nth-child(4){
        width:6.15%;
        left:68.91%;
        height: 10vw;
    }
    /* 第二页样式 */
    .er{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
    }
    .content{
        width: 100%;
        height: 60.5vw;
        background: url("../assets/sony_images/index_family_190725 (1).jpg");
        background-size: 100%;
    }
    .contul{
        width: 100%;
        height: 100%;
        background-size:100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
    .contul>li{
        width: 100%;
        height: 9.5vw;
        background: url("../assets/sony_images/family_190725.jpg") no-repeat;
        background-size:100vw;
        transition:all .3s linear;
    }
    .contul>li:hover{
        background:url("../assets/sony_images/family_on_190725.jpg") no-repeat;
        background-size:100vw;
    }
    .contul>li:first-child{
        height: 13.54vw;
    }
    .contul>li:first-child:hover>img{
        display: inline-block;
        left:9.375vw;
    }
    .contul>li:nth-child(2){
        background-position: 0 -13.54vw;
    }
    .contul>li:nth-child(2):hover>img{
        display: inline-block;
        left:9.375vw;
    }
    .contul>li:nth-child(3){
        background-position: 0 -22.915vw;
    }
    .contul>li:nth-child(3):hover>img{
        display: inline-block;
        left:9.375vw;
    }
    .contul>li:nth-child(4){
        background-position: 0 -32.29vw;
    }
    .contul>li:nth-child(4):hover>img{
        display: inline-block;
        left:9.375vw;
    }
    .contul>li>img{
        width: 27.1875vw;
        position:absolute;
        top:7.1875vw;
        left: 25vw;
        display: none;
        transition:all 3s;
    }
    /* 第三页 */
    .san{
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cont3{
        width:100%;
        height:56.25vw;
        background:url("../assets/sony_images/index_advantage.jpg") no-repeat;
        background-size: 100%;
        background-position-x: center;
        position: absolute;
    }
    .contul3{
        width: 83%;
        height: 100%;
        background:transparent;
        margin: 0 auto;
        transform: translateX(2.8%);
        clear:both;
    }
    .contul3>li{
        width: 25%;
        height: 70%;
        float: left;
        position:relative;
        overflow: hidden;
    }
    .contul3>li>img{
        width: 100%;
        position: absolute;
        left: 0%;
        z-index: 1;
        transition: all .4s ease;
    }
    .contul3>li>img.on{z-index: 0;}
    .contul3>li:nth-child(1)>img{top: -70%;}    
    .contul3>li:nth-child(2)>img{top: -70%;}
    .contul3>li:nth-child(3)>img{top: -65%;}
    .contul3>li:nth-child(4)>img{top: -70%;}
    /* hover---on */
    .contul3>li:nth-child(1):hover>img.on{
        top: 0%;
        z-index: 55;
    }    
    .contul3>li:nth-child(2):hover>img.on{
        top: 0%;
        z-index: 55;
    }
    .contul3>li:nth-child(3):hover>img.on{
        top: 0%;
        z-index: 55;
    }
    .contul3>li:nth-child(4):hover>img.on{
        top: 0%;
        z-index: 55;
    }
    /* hover---text */
    .contul3>li:nth-child(1):hover>div,.contul3>li:nth-child(1):hover .txt span{color:#fff;z-index: 99999;}
    .contul3>li:nth-child(2):hover>div,.contul3>li:nth-child(2):hover .txt span{color:#fff;z-index: 99999;}
    .contul3>li:nth-child(3):hover>div,.contul3>li:nth-child(3):hover .txt span{color:#fff;z-index: 99999;}
    .contul3>li:nth-child(4):hover>div,.contul3>li:nth-child(4):hover .txt span{color:#fff;z-index: 99999;}
    .footimg{
        max-width: 100%;
        position: absolute;
        bottom:0px;
        left: 0px;
    }
    .txt{
        position: absolute;
        left:8%;
        width: 80%;
        background: transparent;
        text-align: left;
        font-family: "Microsoft YaHei";
    }
    .txt h3{
        font-size: 180%;
    }
    .txt span{
        display: block;
        color: #333;
        font-weight: bold;
    }
    .txt ul{
        background: transparent;
        margin-top:3.5%;
    }
    .txt1{top:48%;}
    .txt2{top:34%;}
    .txt3{top:46%;}
    .txt4{top:35%;}
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
            tiao2(){
                this.v = $("#fu")[0].getBoundingClientRect().y
                this.i = $("#zi")[0].getBoundingClientRect().y
                var fuH = $("#fu")[0].offsetHeight;
                var ziH = $("#zi")[0].offsetHeight;
                var tH = $("#tiao")[0].offsetHeight;
                var cha = ziH - fuH
                var x = tH/cha
                var ch = this.i - this.v
                this.tiao = -ch*x
            }
        }
    },
    methods:{
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
            // 0.1配置滚轮事件
            window.onmousewheel = null;
            window.removeEventListener('DOMMouseScroll',this.gundong)
            //120为向上，-120为向下 火狐和谷歌不同滚轮方向值不同保存的属性也不同
            // console.log(e.wheelDelta || -e.detail)
            // —————任务开始—————
            // 1.判断是向上滚动还是向下滚动
            if(e.wheelDelta || -e.detail >0){
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
            
            // ——————任务结束—————
            // 0.2配置滚轮事件
            setTimeout(()=>{
                window.onmousewheel = this.gundong;
                window.addEventListener('DOMMouseScroll', this.gundong);
            },300)
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
    }
}
</script>
