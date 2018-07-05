<template>
    <div class="reg-content">
        <div class="main-content">
            <div class="main-content-top">
                <span class="fl">登录</span>
                <nuxt-link class="fr" to="/">没有账号，立即注册</nuxt-link>
                <p class="clearfix"></p>
            </div>
            <div class="main-content-middle">
                <form @submit.prevent>
                    <div class="middle-phone">
                        <i class="iconfont icon-z-phone"></i>
                        <input type="text" placeholder="请输入手机号">
                    </div>
                    <div class="err-msg" v-show=""></div>


                    <div class="password">
                        <i class="iconfont icon-mima"></i>
                        <input type="text" placeholder="请输6-18位密码">
                    </div>
                    <div class="error-msg" v-text="" v-show="" ></div>

                    <div class="reg-button">
                        <button>登录</button>
                    </div>

                    <div class="forget-link">
                        <nuxt-link to="/">忘记密码</nuxt-link>
                    </div>
                </form>
                <div class="third-login clearfix">
                    <a href="#" class="fl">
                        <img src="../../static/imgs/u336.png">
                        <div>qq登录</div>
                    </a>
                    <a href="#" class="fl">
                        <img src="../../static/imgs/u326.png">
                        <div>微信登录</div>
                    </a>
                    <a href="#" class="fl">
                        <img src="../../static/imgs/u331.png">
                        <div>微博登录</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginBox"
    }
</script>

<style scoped lang="scss">
    @import "../../style/regContent.scss";
    .forget-link{
        width: 360px;
        text-align: center;
        font-size: 14px;
        margin-top: 30px;
        a{
            color: #666666;
        }
    }
    .third-login{
        width: 300px;
        margin:30px auto;
        text-align: center;
        font-size: 14px;
        color:#666;
        a{
            text-align: center;
            margin:0 20px;
            width: 60px;
            height: 65px;
            img{
                height: 40px;
                width: 40px;
                margin-bottom: 6px;
                text-align: center;
            }
        }
    }

</style>