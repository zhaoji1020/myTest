<template>
    <div class="user-top">
        <span class="login">请登录</span>
        <span class="register">立即注册</span>
    </div>
</template>

<script>
    export default {
        name: "userTop"
    }
</script>

<style scoped lang="scss">
    .user-top{
        width: 1100px;
        margin: 0 auto;
        text-align: right;
        padding:15px 0 5px;
        .login{
            border-right: 1px solid #000000;
        }
        span{
            padding: 0 10px;
            font-size: 12px;
        }
        span:hover{
            cursor: pointer;
        }
        span:nth-child(2){
            padding-right: 0;
        }
    }
</style>