<template>
    <div>
        <!--友情链接开始-->
        <div class="top" style="background:#f4f4f4;">
            <div class="title-box">
                <div class="title">友情链接</div>
                <div class="link-list">
                    <a href="" class="title-xia">福居网咨询</a>
                    <a href="" class="title-xia">呼和浩特去114</a>
                    <a href="" class="title-xia">包头房产网</a>
                    <a href="" class="title-xia">天堂草原音乐网</a>
                </div>
            </div>
        </div>
        <!--友情链接结束-->
        <!--背景图片开始-->
        <div class="bdg">
            <div class="about">
                <a href="" class="item">关于我们</a>
                <a href="" class="item">联系方式</a>
                <a href="" class="item">隐私声明</a>
                <a href="" class="item">版权声明</a>
                <a href="" class="item">法律保障</a>
            </div>
            <div class="wenzibox">
                <div class="wenzi">温馨提示：呼和浩特房地产网最新购房信息请及时查看呼和浩特房地产业网官方网站【福居网】</div>
                <div class="wenzi">地 址： 呼和浩特市赛罕区恩和大厦1909室 电 话:400-898-1018</div>
                <div class="wenzi">北京福居网网络科技有限公司 Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有| 京ICP备13012924号-1</div>
            </div>
            <div class="tupianlianjie">
                <nuxt-link to=""><img class="img1"></nuxt-link>
                <nuxt-link to=""><img  class="img2"></nuxt-link>
            </div>
        </div>
        <!--背景图片结束-->
    </div>
</template>
<script>
    export default {
        name:"Footer"
    }
</script>
<style scoped>
    /*友情链接开始*/
    .top{
        height: 220px;
        margin: 0 auto;
    }
    .top .title-box{
        width: 1100px;
        height: 100px;
        margin: 0 auto;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .title{
        font-size: 30px;
        font-weight: bolder;
    }
    .link-list{
        width: 1100px;
        padding-top: 20px;
    }
    .link-list .title-xia{
        padding-right: 40px;
        font-size: 14px;
        color: #999;
    }
    /*友情链接结束*/
    /*背景开始*/
    .bdg{
        background: url("../static/imgs/footerBg.png") no-repeat;
        background-size: 100% 100%;
        height: 444px;
        align-items: center;
    }
    .bdg .about{
        margin: 0 auto;
        width: 1100px;
        text-align: center;
        padding-top: 60px;
    }
    .about .item{
        padding: 0 50px;
        font-size: 16px;
        color: #fff;
    }
    .wenzibox{
        width: 1100px;
        text-align: center;
        padding-top: 20px;
        margin: 0 auto;
    }
    .wenzi{
        font-size: 14px;
        color: #fff;
        margin-top: 20px;
    }
    .bdg .tupianlianjie{
        width: 1100px;
        height: 80px;
        text-align: center;
        vertical-align: center;
        line-height: 80px;
        margin: 0 auto;

    }
    .img1{
        padding-right: 6px;
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }
    .img2{
        width: 40px;
        height: 20px;
        padding-right: 6px;
        margin: 0 auto;
    }


    /*下面的网站开始*/


    /*下面的网站结束*/
    /*背景结束*/
</style>

