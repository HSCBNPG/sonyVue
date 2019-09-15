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
                        <a href="#">商品分类</a> 
                        <ul class="fenlei"></ul>
                    </li>
                    <li class="clearfix">
                        <a href="#">网站导航</a>
                    </li>
                    <li id="list_serch">
                        <input type="text" id="serch" placeholder="真无线降噪耳机WF-1000XM3">
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
            <div id="log_reg">
                <span>登录</span>    
                <i>/</i>
                <span><router-link to="reg">注册</router-link></span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    // 事件函数
    methods:{
        add(){

        }
    },
    // 组件创建完但并未挂载dom树并未替换data中的变量  自动执行——第一阶段
    created(){

    },
    // DOM树第一次形成，data中的数据替换完成后  自动执行——第二阶段
    mounted(){
        // setTimeout(function(){
            // 为引入的header标签绑定事件
            $("#log_reg>span:first-child").click(function(){
                $(".backg").addClass("active")
                $("#login").addClass("active")
            });
            $("#login .close").click(function(){
                $("#login").removeClass("active")
                $(".backg").removeClass("active")
            })
            $("#reg_img").click(function(){
                $("#login>div:first-child").removeClass("active")
                $("#login>div:nth-child(2)")
            })
        // },1000)

    }
}
</script>
<style scoped>
    /* 头部导航栏样式 */
#header{
	width:100%;
    background: #000000;
    color:white;
}
/*顶部导航栏内容区域*/
#header_conten{
	width:1210px;
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
#tbn ul li a{
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
#tbn>ul>li>a:hover{
    background:white url(../assets/sony_images/dot_down_blue.jpg) no-repeat 90px center;
    color: #1fa8e2;
}
#tbn ul li{
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