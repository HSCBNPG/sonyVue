<template>
    <div class="cont">
        <div class="main">
            <ul class="boxul">
                <li><img src="images/index_01.jpg" alt=""></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    .cont{
        width:100%;
        height:100vh;
        /* overflow: hidden; */
    }

</style>
<script>
export default {
    // 组件对象,data对象加载完,虚拟DOM树未生成
    created(){

    },
    // 组件对象,data对象,虚拟DOM树加载完
    mounted(){
        window.onmousewheel = gundong;

        // 滚轮滚动事件
        function gundong(e){
            // 0.1配置滚轮事件
            window.onmousewheel = null;
            console.log(e.wheelDelta) //120为向上，-120为向下
            // —————任务开始—————
            // 1.1如果最后一个img有active则触发切换页面



            // ——————任务结束—————
            // 0.2配置滚轮事件
            setTimeout(function(){
                window.onmousewheel = gundong;
            },180)
        }
        // 鼠标移入事件
        function yiru(){

        }
        // 定时器切换下一张图片函数
        function qietu(){
            
        }
        // 切换页面函数
        function qieye(){
            // 判断滚动事件是向上或向下

        }
    }
}
</script>
