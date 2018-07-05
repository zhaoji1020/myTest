<template>
    <div class="reg-content">
        <div class="main-content">
            <div class="main-content-top">
                <span class="fl">创建账号</span>
                <nuxt-link class="fr" to="/">已有账号，立即登录</nuxt-link>
                <p class="clearfix"></p>
            </div>
            <div class="main-content-middle">
                <form @submit.prevent>
                    <div class="middle-phone">
                        <i class="iconfont icon-z-phone"></i>
                        <input type="text" placeholder="请输入手机号">
                    </div>
                    <div class="err-msg" v-show=""></div>

                    <div class="verify">
                        <i class="iconfont icon-mima"></i>
                        <input type="text" placeholder="请输入短信验证码">
                        <button>获取验证码</button>
                    </div>
                    <div class="error-msg" v-text="" v-show="" ></div>

                    <div class="password">
                        <i class="iconfont icon-mima"></i>
                        <input type="text" placeholder="请输6-18位密码">
                    </div>
                    <div class="error-msg" v-text="" v-show="" ></div>

                    <div class="password">
                        <i class="iconfont icon-nicheng"></i>
                        <input type="text" placeholder="请输昵称">
                    </div>
                    <div class="error-msg" v-text="" v-show="" ></div>

                    <div class="reg-button">
                        <button>立即注册</button>
                    </div>

                    <div class="agree-link">
                        <span>点击立即注册，则表示您阅读并同意遵守</span>
                        <nuxt-link to="">福居网平台服务协议</nuxt-link>
                    </div>



                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "regContent"
    }
</script>

<style scoped lang="scss">
    @import "../../style/regContent.scss";
</style>