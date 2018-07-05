<template>
    <ul class="listRight-box">
        <li href="" class="box-item">
            <i class="iconfont icon-rili"></i>
            <p class="icon-desc">日程</p>
            <div class="hidden-box">我的关注</div>
        </li>
        <li href="" class="box-item">
            <i class="iconfont icon-shoucang1"></i>
            <p class="icon-desc">关注</p>
            <div class="hidden-box">我的关注</div>
        </li>
        <li href="" class="box-item">
            <i class="iconfont icon-fangzi"></i>
            <p class="icon-desc">卖房</p>
            <div class="hidden-box">我的关注</div>
        </li>
        <li href="" class="box-item">
            <i class="iconfont icon-toolsbar"></i>
            <p class="icon-desc">工具</p>
            <div class="hidden-box">我的关注</div>
        </li>
        <li href="" class="box-item">
            <i class="iconfont icon-z-phone"></i>
            <p class="icon-desc">APP</p>
            <div class="hidden-box1">
                <img src="../static/imgs/app.png" style="width: 100%;height: 100%;z-index: 9999">
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "listRight"
    }
</script>

<style scoped>
    .listRight-box{
        width: 40px;
        position: fixed;
        right: 0;
        top: 0;
        background: #fff;
        color: #333;
        font-size: 14px;
        text-align: center;
        z-index: 998;
    }
    .listRight-box li{
        position: relative;
        width: 40px;
        height: 50px;
        margin-bottom: 40px;
        cursor: pointer;
    }
    .listRight-box li:hover{
        color: #fff;
        background: #5f1985;
    }
    .listRight-box li:last-child{
        margin-bottom: 10px;
    }
    .listRight-box .box-item i{
        font-size: 25px;
    }
    .hidden-box{
        display: none;
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 10px;
        background: #5f1985;
        color: #fff;
        border-radius: 4px;
    }
    .listRight-box li:hover .hidden-box{
        display: block;
    }
    .hidden-box::after{
        content: "";
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
        border: 8px solid transparent;
        border-left: 8px solid #5f1985;
    }
    .hidden-box1{
        z-index: 9999;
        display: none;
        width: 200px;
        height: 200px;
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
    }
    .listRight-box li:hover .hidden-box1{
        display: block;
    }
</style>