<template>
<div>
    <headerOne></headerOne>
    <div class="content">
        <div class="ctop">
            <div class="ctop-wrap clearfix">
                <div class="fl img">
                    <img src="../static/imgs/logo.png">
                </div>
                <div class="ctop-wrap-title">
                    <nuxt-link to="/">百科</nuxt-link>
                    <nuxt-link to="/">专题</nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <!--主体-->
    <div class="cmiddle">
        <div class="m-top">福居网>&nbsp百科</div>
        <!--搜索-->
        <div class="search">
            <input type="text" placeholder="搜索">
            <span class="s-btn">搜索</span>
        </div>
        <!--主体-->
        <div class="wrap clearfix">
            <div class="wrap-l fl">
                <div class="title">
                    百科分类
                </div>
                <div class="line"></div>
            </div>
            <div class="wrap-r fr">
                <div class="title">
                    买房风险
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
    import headerOne from '~/components/headerOne'
    export default {
        components:{
            headerOne
        }

    }
</script>

<style scoped lang="scss">
    .content{
        background: #ffffff;
        .ctop{
            border-bottom: 1px solid #ccc;
            .ctop-wrap{
                width: 1100px;
                margin: 0 auto;
                height: 80px;
                line-height: 80px;
                img{
                    margin-top: 15px;
                    display:block;
                }
                .ctop-wrap-title{
                    display: inline-block;
                    margin-left: 140px;
                    a{
                        margin-left: 45px;
                    }
                    a:nth-child(1){
                        color:#c30d23;
                    }
                }
            }
        }
    }
    .cmiddle{
        width: 1100px;
        margin:20px auto 0 auto;
        .m-top{
            color:#999;
            font-size: 14px;
            cursor: pointer;
        }
        .search{
            margin:40px auto 0 auto;
            width: 1100px;
            input{
                width: 740px;
                height: 60px;
                border: none;
                padding-left: 20px;
                font-size: 14px;
                color: #999;
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
                background: #f4f4f4;
                outline: none;
            }
            span{
                display: inline-block;
                text-align: center;
                height: 60px;
                line-height: 60px;
                background: #c30d23;
                color: #fff;
                width: 160px;
                cursor: pointer;
            }
        }
        .wrap{
            width: 1100px;
            margin:80px auto 0 auto;
            background: #f00;
            height: 600px;
            .wrap-l{
                width: 300px;
                .title{
                    font-size: 30px;
                    font-weight: 700;
                }
                .line{
                    height: 1px;
                    background: #d5d5d5;
                    width: 100%;
                    margin:20px auto;
                }
            }
            .wrap-r{
                width: 700px;
                .title{
                    font-size: 30px;
                    font-weight: 700;
                }
                .line{
                    height: 1px;
                    background: #d5d5d5;
                    width: 100%;
                    margin:20px auto;
                }
            }
        }
    }

</style>