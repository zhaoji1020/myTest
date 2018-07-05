<template>
    <div>
        <div class="header-content clearfix">
            <h1 class="logo">
                <nuxt-link to="/">
                    <img src="../../static/imgs/logo.png">
                </nuxt-link>
            </h1>
            <div class="select-city">
                <span @click="changeMask">呼和浩特<i class="iconfont icon-jiantouxia"></i></span>
            </div>
            <div class="nav">
                <span class="nav-item active">
                    <nuxt-link to="/" class="def-a">首页</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">二手房</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">新房</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">租房</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">学区房</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">小区</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">经纪人</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">百科</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">在线委托</nuxt-link>
                    <p>
                        <nuxt-link to="/">我是业主</nuxt-link>
                        <nuxt-link to="/">帮我找房</nuxt-link>
                    </p>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">工具</nuxt-link>
                </span>
                <span class="nav-item">
                    <nuxt-link to="/" class="def-a">专题</nuxt-link>
                </span>
            </div>
        </div>


        <div class="mark" v-if="isShow">
            <div class="mark-content">
                <i class="iconfont icon-chahao" @click="changeMask" ></i>
                <div class="mark-header">
                    <span>选择县区</span>

                </div>
                <div class="content-top"><nuxt-link to="/">呼和浩特</nuxt-link></div>
                <div class="middle-item">
                    <span>H</span><nuxt-link to="/">回民区</nuxt-link>
                </div>
                <div class="middle-item">
                    <span>J</span><nuxt-link to="/">金桥开发区</nuxt-link>
                </div>
                <div class="middle-item">
                    <span>R</span><nuxt-link to="/">如意开发区</nuxt-link>
                </div>
                <div class="middle-item">
                    <span>S</span><nuxt-link to="/">赛罕区</nuxt-link>
                </div>
                <div class="middle-item">
                    <span>X</span><nuxt-link to="/">新城区</nuxt-link>
                </div>
                <div class="middle-item">
                    <span>Y</span><nuxt-link to="/">玉泉区</nuxt-link>
                </div>

            </div>


        </div>

    </div>
</template>

<script>
    export default {
        name: "linkNav",
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            changeMask(){
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/linkNav.scss";

</style>