<template>
    <div class="fu">
        <p class="mb-3">会员注册</p>
        <div class="ipt-fu ipt1"><input id="uname" type="text" placeholder="输入用户名"><span @click="clearIpt">×</span></div>
        <div class="ipt-fu ipt2"><input id="email" type="text" placeholder="输入邮箱地址"><span @click="clearIpt">×</span></div>
        <div class="ipt-fu ipt3"><input id="upwd" type="text" placeholder="密码由6-16位字符组成"><span @click="clearIpt">×</span></div>
        <div class="ipt-fu ipt4"><input id="upwds" type="text" placeholder="再次输入密码"><span @click="clearIpt">×</span></div>
        <!-- 验证码 -->
        <div class="suiji">
            <input type="text" placeholder="验证码">
        </div>
        <button @click="signIn" class="btn">注册</button>
        <div>
            <label><input type="checkbox">我已阅读并同意《用户注册协议》</label>
        </div>
    </div>
</template>
<style scoped>
    .suiji{
        width: 316px;
        height: 40px;
        border: 1px solid red;
        margin: 10px auto;
        clear: both;
    }
    .suiji>input{
        width: 80px;
        margin-right: 15px;
        height: 40px;
        border: 1px solid #ccc;
        color: #262e39;
        border-radius: 3px;
        line-height: 38px;
        padding: 0 10px;
        outline: none;
        float: left;
    }
    .btn{
        color:#fff;
        background-color:#4b95ff;
        width: 316px;
    }
    .fu{
        width: 350px;
    }
    .fu>p{
        font-size: 20px;
    }
    p,input{
        background: transparent !important;
    }
    .ipt-fu{
        width: 316px;
        height: 32px;
        margin:0 auto;
        margin-bottom: 18px;
        box-sizing: border-box;
        position: relative;
        padding-left: 46px;
        font-size: 12px;
    }
    .ipt-fu>input{
        font-size:14px;
        width: 100%;
        height: 100%;
    }
    .ipt-fu>span{
        position: absolute;
        right: 10px;
        font-size: 22px;
    }
    .ipt1{background: url("../assets/sony_images/phone.png")}
    .ipt2{background: url("../assets/sony_images/email.png")}
    .ipt3{background: url("../assets/sony_images/rpwd.png")}
    .ipt4{background: url("../assets/sony_images/rpwd.png")}
</style>
<script>
export default {
    methods:{
        clearIpt(e){
            var span = e.target;
            $(span).prev().val([""])
        },
        signIn(){
            var uname = $("#uname")[0];
            var email = $("#email")[0];
            var upwd = $("#upwd")[0];
            var upwds = $("#upwds")[0];
            console.log(uname,email,upwd,upwds)
            var emailReg =  /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if(!emailReg.test(email.value)){
                console.log("邮箱格式不正确")
                email.focus()
            }
            if(upwd.value != upwds.value){
                console.log("两次密码不一致")
                upwds.focus()
            }
        }
    }
}
</script>