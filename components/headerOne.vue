<template>
<div class="content">
    <div class="nav clearfix">
        <div class="nav-item fl">
            <span><nuxt-link to="/">首页</nuxt-link></span>
            <span><nuxt-link to="/">二手房</nuxt-link></span>
            <span><nuxt-link to="/">新房</nuxt-link></span>
            <span><nuxt-link to="/">租房</nuxt-link></span>
            <span><nuxt-link to="/">学区房</nuxt-link></span>
            <span><nuxt-link to="/">小区</nuxt-link></span>
            <span><nuxt-link to="/">经纪人</nuxt-link></span>
            <span><nuxt-link to="/">百科</nuxt-link></span>
            <span>
                <nuxt-link to="/">在线委托</nuxt-link>
                <div class="spinner-content" style="z-index: 998">
                    <p><nuxt-link to="/">我是业主</nuxt-link></p>
                    <p><nuxt-link to="/">帮我找房</nuxt-link></p>
                </div>
            </span>
            <span><nuxt-link to="/">工具</nuxt-link></span>
            <span><nuxt-link to="/">专题</nuxt-link></span>
        </div>
        <div class="nav-r fr">
            <span><nuxt-link to="/">请登录</nuxt-link></span>
            <span><nuxt-link to="/">立即注册</nuxt-link></span>
        </div>
        
    </div>
</div>
</template>

<script>
    export default {
        name: "headerOne"
    }
</script>

<style scoped lang="scss">
    .content{
        background: #f4f4f4;
        .nav{
            width: 1100px;
            margin:0 auto;
            height: 60px;
            .nav-item{
                padding-top:10px;
            }
            .nav-item span{
                display: inline-block;
                padding-right: 35px;
                a{
                    display: inline-block;
                    padding:10px 0 20px;
                }
            }
            .nav-item{
                span:nth-child(9){
                    position: relative;
                    .spinner-content{
                        position: absolute;
                        display: none;
                        p{
                            padding:10px 0 5px;
                            a{
                                padding: 0;
                            }
                        }
                        a:hover{
                            border: none;
                            color: #c30d23;
                        }
                    }
                }
                span:nth-child(9):hover{
                    .spinner-content{
                        display: block;
                        border-top: 2px solid #c30d23;
                    }
                }
            }
            .nav-item span a:hover{
                    color: #c30d23;
                    border-bottom: 2px solid #c30d23;
            }
            .nav-item span:nth-child(9) a:hover{
                border: none;
            }
            .nav-r{
                font-size: 12px;
                color:#333;
                padding-top: 15px;
                span{
                    padding:0 10px;
                }
                span:nth-child(1){
                    a{
                        display: inline-block;
                        padding:10px 0;
                        display: inline-block;
                    }
                    border-right: 1px solid #000000;
                }
            }
        }
    }

</style>