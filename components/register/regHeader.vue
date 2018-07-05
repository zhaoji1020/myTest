<template>
    <header class="reg-header-top">
        <div class="header-wrap">
            <h1 class="logo fl">
                <nuxt-link to="/" style="display:block;height: 100%;width: 100%;"></nuxt-link>
            </h1>
            <nuxt-link to="/" class="header-right fr">
                返回福居网首页
                <img src="../../static/imgs/return.png">
            </nuxt-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "regHeader"
    }
</script>

<style scoped lang="scss">
    .reg-header-top{
        width: 100%;
        background: #ffffff;
        .header-wrap{
            width: 1100px;
            height: 80px;
            margin: 0 auto;
            line-height: 80px;
            .logo{
                height: 60px;
                width: 128px;
                background-size: 128px auto;
                background: url("../../static/imgs/logo.png") center no-repeat;
                margin-top: 10px;
            }
            .header-right{
                height: 80px;
                line-height: 80px;
                color: #666;
                font-size: 14px;
                img{
                    vertical-align: middle;
                }
            }
        }
    }
</style>