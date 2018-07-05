<template>
    <div class="header-box">
        <div class="wrap clearfix">
            <a href="/" target="_self" class="logo"></a>
            <div class="right clearfix">
                <span class="nav-item active"><a href="/" target="_self" >在售</a></span>
                <span class="nav-item"><a href="" target="_blank">小区</a></span>
                <span class="nav-item"><a href="" target="_blank">地图找房</a></span>
                <span class="nav-item"><a href="" target="_blank">计算器</a></span>
                <span class="nav-item"><a href="" target="_blank">去估价</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerWrap"
    }
</script>

<style scoped>
    .header-box{
        height: 80px;
        margin: 0 auto;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .wrap{
        width: 1100px;
        height: 80px;
        align-items: center;
        margin: 0 auto;
        position: relative;
    }
    .logo{
        float: left;
        margin-top: 20px;
        width: 128px;
        height: 40px;
        background: url("../static/imgs/logo.png") no-repeat;
        background-size: 100% 100%;
        display: block;
    }
    .wrap .right{
        line-height: 80px;
        float: left;
    }
    .wrap .right .nav-item{
        float: left;
        margin-left: 43px;
        padding: 0 5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    .wrap .right .nav-item:first-child{
        margin-left: 70px;
    }
    /*让首页下默认显示红线*/
    .right .active a {
        color: #c30d23;
    }
    /*鼠标指向哪个哪个就变色和显示下滑横线*/
    .nav-item a:hover{
        color: #c30d23;
    }
</style>