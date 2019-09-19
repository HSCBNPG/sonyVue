<template>
    <!-- 整体页面 overfloe:hidden-->
    <div class="cont">
        <!-- 超大页面 -->
        <div class="main" :style="top == 0?'top:0vh':top == 1?'top:-100vh':top == 2?'top:-200vh':'top:0vh'">
            <!-- 导航固定定位 -->
            <div class="daohang">
                <img src="../assets/sony_images/header.jpg" alt="">
            </div>
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
        </div>
    </div>
</template>
<style scoped>
    /* 导航 */
    .daohang{
        position: fixed;
        width:100%;
        height: 8%;
        top:0px;
        left: 0px;
        z-index: 999999;
        display: flex;
        justify-content: center;
    }
    .daohang:hover img{
        top: 0%;
    }
    .daohang img{
        position: absolute;
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
        /* top:-200vh; */
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
        /* display: none; */
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
        border:1px solid red;
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
            timerr : null
        }
    },
    methods:{
        // 定时器
        timer(){
            this.timerr = setInterval(()=>{
                if(this.a<4){
                    this.a++
                }else{
                    this.a = 1
                }
            },2400)
        },
        // 滚轮滚动事件
        gundong(e){
            // 0.1配置滚轮事件
            window.onmousewheel = null;
            console.log(e.wheelDelta) //120为向上，-120为向下

            // —————任务开始—————
            // 1.判断是向上滚动还是向下滚动
            if(e.wheelDelta>0){
                // 2.向上滚动所执行的操作
                // 4.判断是否在第一页内
                if(this.top == 0){
                    // 5.如果在第一页内执行的操作
                    // 6.如果焦点在后三个 2 3 4
                    if(this.a>1){
                      this.a--
                      console.log(this.a)
                    }
                }else{
                    // 6.不在第一页内执行的操作
                    if(this.top>0){
                        this.top--
                    }
                }
            }
            // ##向上滚动触发
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
                        clearInterval(this.timerr)
                        // a.启动定时器
                        this.timer()
                        // this.timer = null;
                        this.a++
                    }
                }else
                // 如果当前在第二页
                if(this.top == 1){
                    this.top++
                }else
                // 如果当前在第三页
                if(this.top == 2){
                    
                }
            }

            // ——————任务结束—————
            // 0.2配置滚轮事件
            setTimeout(()=>{
                window.onmousewheel = this.gundong;
            },180)
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
    }
}
</script>
