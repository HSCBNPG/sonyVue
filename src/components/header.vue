<template>
<div id="header">
    <div id="header_conten">
        <!-- 头部log -->
        <div id="log">
            <a href="https://www.sonystyle.com.cn/" target="blank">
                <img src="../assets/sony_images/sony-logo.jpg" alt="SONY">
            </a>
        </div>
        <!-- 二级列表,搜索框 -->
        <div id="header_nav_main">
            <div id="tbn">
                <ul>
                    <li id="list_l1" class="clearfix">
                        <a class="a" href="#">商品分类</a> 
                        <ul class="fenlei"></ul>
                    </li>
                    <li class="clearfix">
                        <a class="a" href="#">网站导航</a>
                    </li>
                    <li id="list_serch">
                        <input @focus="hidden(1)" @blur="hidden(0)" v-model="content" type="text" id="serch" placeholder="真无线降噪耳机WF-1000XM3">
                        <ul class="top10" @mouseenter="changeB(1)" @mouseleave="changeB(0)">
                            <li class="citiao" @click="sousuo()" v-for="(item,index) of top10" :key="index"><a :href="'https://www.baidu.com/s?wd='+item" target="_blank">{{item}}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 头部导航栏右侧 -->
        <div id="header_right">
            <div id="shopping_car">
                <div id="shuliang">
                    <span>0</span>
                </div>
            </div>
            <div id="server">
                <p>服务与支持</p>
            </div>
            <div>
                <p>My Sony</p>
            </div>
            <div>
                <div v-if="!$store.getters.getLogStatus" id="log_reg">
                    <span @click="denglu">登录</span>
                    <i>/</i>
                    <span><router-link to="reg">注册</router-link></span>
                </div>
                <img @click="zhuxiao" class="userimg" v-else :src="$store.getters.getUserimg" alt="">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            content: "",  //搜索框内容
            top10: [],    //百度top10列表
            b: 0,    //搜索列表显示/隐藏
        }
    },
    // 事件函数
    methods:{
        sousuo(e){
            this.top10 = []
        },
        changeB(num){
            this.b = num
        },
        hidden(bool){  //隐藏/显示搜索词条用
            if(bool){
                this.baidu()
            }else{
                if(this.b == 0){
                    this.top10 = []
                }
            }
        },
        bbb(json){   //工具函数，通过调用vue中的函数传值vue中
            console.log("我是vue的函数")
            console.log(json)
            this.top10.splice(0)
            for(var i=0;i<json.s.length;i++){
                this.top10.push(json.s[i])
            }
        },
        zhuxiao(){    
            sessionStorage.removeItem("user")
            this.$store.commit("setLogStatus",false);
        },
        denglu(){
            $(".backg").addClass("active")
            $("#login").addClass("active")
            // 将以记住的用户名填入
            $(".ipt")[0].value = localStorage.getItem("username")
        },
        baidu(){     //发送请求获取百度top10词条
            if(this.content != ""){
                $.ajax({
                    url:`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.content}&json=1`,
                    type:"get",
                    dataType:"jsonp"
                })
            }else{
                this.top10 = []
            }
        }
    },
    watch:{   
        content(){
            this.baidu()
        },
    },
    // 组件创建完但并未挂载dom树并未替换data中的变量  自动执行——第一阶段
    created(){
        let vm = this
        window.baidu = {}
        window.baidu.sug = (json)=>{
            vm.bbb(json)
        }
    },
    // DOM树第一次形成，data中的数据替换完成后  自动执行——第二阶段
    mounted(){
        $("#login .close").click(function(){
            $("#login").removeClass("active")
            $(".backg").removeClass("active")
        })
        $("#reg_img").click(function(){
            $("#login>div:first-child").removeClass("active")
            $("#login>div:nth-child(2)")
        })
    }
}
</script>
<style scoped>
.top10>li{
    background: #fff;
    text-align: left !important;
    color: #000;
    width: 100%;
    height: 26px;
    line-height: 26px;
    padding-left: 5px;
}
.top10>li:hover{background: #000;}
.top10>li:hover>a{color: #fff;}
.top10{
    display: flex;
    flex-direction: column;
    background:transparent;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    margin: 2px 10px 0px 10px;
    overflow: hidden;
    z-index: 9;
}
.userimg{
    width: 35px;
    border-radius:50%;
}
    /* 头部导航栏样式 */
#header{
    min-width: 1210px;
	/* width:1210px; */
    background: #000000;
    color:white;
}
/*顶部导航栏内容区域*/
#header_conten{
    min-width: 1210px;
    /* width:1210px; */
    background: #000000;
	height:65px;
    margin:0 auto;
}
#log{
    box-sizing: border-box;
    float:left;
   margin-top:25px;
   margin-left:25px;
}
#header_conten>#log>a{
    display:block;
    width:109px;
}
#log>a>img{
    width:100px;
    display:block;
}
/* 二级列表搜索框样式 */
#header_nav_main{
    float:left;
    height:100%;
    margin-left:9%;
}
#tbn ul li a.a{
    float:left;
    box-sizing:border-box;
    width:113px;
    line-height: 65px;
    color:white;
    font-size:16px;
    text-align:center;
    background:url(../assets/sony_images/dot_down_black.jpg) no-repeat 95px center;
}
#serch{
    float:left;
    width: 265px;
    height:25px;
    padding-right:35px;
    border-radius:25px;
    text-indent:12px;
    margin-top:21px;
    background:white url(../assets/sony_images/btn_search_03.jpg) no-repeat 239px center;
}
#list_serch{
    margin-left:20px;
}
#list_serch::after{
    content:"";
    display:block;
    clear:both;
}
/* 第一个二级列表 */
#tbn>ul>li>a.a:hover{
    background:white url(../assets/sony_images/dot_down_blue.jpg) no-repeat 90px center;
    color: #1fa8e2;
}
#tbn ul li{
    display: flex;
    flex-direction: column;
    float:left;
    text-align:center;
}
#list_l1{
    background: url("../assets/sony_images/nav_line.jpg") no-repeat right center;
    position: relative;
}
#list_l1>.fenlei{
    display:none;
    z-index: 999;
}
#list_l1:hover>.fenlei{
    display: block;
    width:200px;
    height:500px;
    position:absolute;
    top:65px;
    right:0px;
    border:2px solid #000;
}
/* 头部导航栏右侧样式 */
#header_right{
    float:right;
    height:65px;
    font-size:14px;
    font-weight: bold;
    line-height: 65px;
}
#shopping_car{
    float:right;
    position:relative;
    width:40px;
    height:65px;
    background:url(../assets/sony_images/icon_shopping_1.png) no-repeat center center;
}
#shuliang{
    width: 19px;
    height:19px;
    border-radius:50%;
    background-color:#e60000;
    line-height:19px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    font-weight: 500;
    color:#fff;
    position: absolute;
    top:19px;
    left:16px;
}
#header_right>div{
    float:right;
    margin-right:30px;
}
#header_right p{
    box-sizing:border-box;
    width:83px;
    background:url(../assets/sony_images/dot_down_black.jpg) no-repeat right center;
}
#log_reg{
    float:right;
    color:#1fa8e2;
}
#log_reg>span{
    cursor: pointer;
}
#log_reg>span>a{
    color:#1fa8e2;
}

</style>