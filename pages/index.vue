<template>
  <div class="index">
    <!--顶部-->
    <header>
      <userTop></userTop>
      <linkNav></linkNav>
    </header>
    <!--轮波图-->
    <div class="banner-swiper" >
      <div v-swiper:mySwiper="swiperOption" style="height: 100%;overflow: hidden;">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <img :src="'http://www.fooju.cn/'+banner.picurl" style="display: block">
          </div>
        </div>
      </div>
    </div>

    <!--搜索栏-->
    <div class="search">
      <div class="search-nav">
        <span class="search-nav-item" :class="{active:selectedIndex==0}" @click="selectedIndex=0"><nuxt-link to="/">找二手房</nuxt-link></span>
        <span class="search-nav-item" :class="{active:selectedIndex==1}" @click="selectedIndex=1"><nuxt-link to="/">找新房</nuxt-link></span>
        <span class="search-nav-item" :class="{active:selectedIndex==2}" @click="selectedIndex=2"><nuxt-link to="/">找租房</nuxt-link></span>
        <span class="search-nav-item" :class="{active:selectedIndex==3}" @click="selectedIndex=3"><nuxt-link to="/">找学区房</nuxt-link></span>
        <span class="search-nav-item" :class="{active:selectedIndex==4}" @click="selectedIndex=4"><nuxt-link to="/">找小区</nuxt-link></span>
      </div>

        <div class="search-input">
            <input type="text" :placeholder="placeholderText"/>
            <span class="search-btn"><nuxt-link to="/">搜索</nuxt-link></span>
            <span class="search-map">
                <nuxt-link to="/"><img src="../static/imgs/mapSearch.png">地图找房</nuxt-link>
            </span>
        </div>
        <!--福居头条-->
        <div class="search-bottom">
            <img src="../static/imgs/toutiao.png">
        </div>
    </div>
      <!--主体-->
      <div class="content">
          <div class="content-top">
              <div class="content-top-item">
                  <div  class="btn-item">
                      <nuxt-link to="/">
                          <img src="../static/imgs/store.png">
                          <div style="font-size: 20px" class="btn-item-top">查门店</div>
                          <div style="font-size: 14px" class="btn-item-bottom">查优质门店</div>
                      </nuxt-link>
                  </div>
                  <div class="btn-item">
                      <nuxt-link to="/">
                          <img src="../static/imgs/entrust.png">
                          <div style="font-size: 20px" class="btn-item-top">在线委托</div>
                          <div style="font-size: 14px" class="btn-item-bottom">有问题我们帮你</div>
                      </nuxt-link>
                  </div>
                  <div class="btn-item">
                      <nuxt-link to="/">
                          <img src="../static/imgs/mapBlue.png">
                          <div style="font-size: 20px" class="btn-item-top">地图找房</div>
                          <div style="font-size: 14px" class="btn-item-bottom">地图找房</div>
                      </nuxt-link>
                  </div>
                  <div class="btn-item">
                      <nuxt-link to="/">
                          <img src="../static/imgs/encyclopedias.png">
                          <div style="font-size: 20px" class="btn-item-top">福居百科</div>
                          <div style="font-size: 14px" class="btn-item-bottom">看百科了解更多</div>
                      </nuxt-link>
                  </div>
              </div>
          </div>
          <div class="content-pic clearfix">
              <div class="pic-item pic-item-1">
                  <nuxt-link to="/">
                      <img src="../static/imgs/zsfy.png" >
                  </nuxt-link>
              </div>
              <div class="pic-item pic-item-2">
                  <nuxt-link to="/">
                      <img src="../static/imgs/dbf.png" >
                  </nuxt-link>
              </div>
              <div class="pic-item pic-item-3">
                  <nuxt-link to="/">
                      <img src="../static/imgs/feature.png" >
                  </nuxt-link>
              </div>
          </div>
          <!--新房-->
          <div class="content-hourse">
              <div class="title clearfix">
                  <div class="title-l fl">精品新房</div>
                  <div class="title-r fr"><nuxt-link to="/">更多新房<i class="iconfont icon-mjiantou"></i></nuxt-link></div>
              </div>
              <div class="hourse-tag">
                  在这里为您寻觅一个新家
              </div>
              <div class="hourse clearfix">
                  <div class="hourse-item hourse-item1">
                      <div class="hourse-item-content">
                          <nuxt-link to="/"><img src="http://www.fooju.cn/fjw/uploads/house/20180525/s_5b07aef6953c5.jpg"></nuxt-link>
                          <div class="hourse-bottom clearfix">
                              <div class="hourse-bottom-l fl">呼和浩特亿利生态城</div>
                              <div class="hourse-bottom-r fr">0元/平</div>
                          </div>
                      </div>
                  </div>

                  <div class="hourse-item hourse-item2">
                      <div class="hourse-item-content">
                          <nuxt-link to="/"><img src="http://www.fooju.cn/fjw/uploads/house/20170828/s_59a41d26771de.jpg"></nuxt-link>
                          <div class="hourse-bottom">
                              <div class="hourse-bottom-l fl">盛世国际</div>
                              <div class="hourse-bottom-r fr">8800元/平</div>
                          </div>
                      </div>
                  </div>

                  <div class="hourse-item hourse-item3">
                      <div class="hourse-item-content">
                          <nuxt-link to="/"><img src="http://www.fooju.cn/fjw/uploads/newHouse/s_LP0410102.jpg"></nuxt-link>
                          <div class="hourse-bottom">
                              <div class="hourse-bottom-l fl">荷塘月色</div>
                              <div class="hourse-bottom-r fr">8500元/平</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <!--二手房-->
          <div class="content-hourse-middle">
              <div class="title clearfix">
                  <div class="tile-l fl">二手优品</div>
                  <div class="title-r fr"><nuxt-link to="/">更多二手房<i class="iconfont icon-mjiantou"></i></nuxt-link></div>
              </div>
              <div class="hourse-tag">
                  生活因为宽广，才会不断延伸
              </div>
              <div class="hourse-content">
                  <div class="hourse-content-pic clearfix">
                      <div class="pic-item-1 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15292325049121.png">
                          </nuxt-link>
                          <div class="pic-tag">120万</div>
                          <div class="b1">阳光馨苑小区 出售</div>
                          <div class="b2 clearfix"><span>1室1厅1卫</span><span>45.00㎡</span></div>
                      </div>
                      <div class="pic-item-2 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15292325992830.png">
                          </nuxt-link>
                          <div class="pic-tag">100万</div>
                          <div class="b1">学府花园精装 出售</div>
                          <div class="b2 clearfix"><span>3室22厅2卫</span><span>148.00㎡</span></div>
                      </div>
                      <div class="pic-item-3 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15292232315190.png">
                          </nuxt-link>
                          <div class="pic-tag">70万</div>
                          <div class="b1">京能蓝色理想 精装修</div>
                          <div class="b2 clearfix"><span>2室2厅1卫</span><span>97.00㎡</span></div>
                      </div>
                  </div>

              </div>
          </div>

          <!--升级信息-->
          <div class="ad">

          </div>
          <!--升级信息结束-->
          <!--精品租房-->

          <div class="content-hourse-middle">
              <div class="title clearfix">
                  <div class="tile-l fl">精品租房</div>
                  <div class="title-r fr"><nuxt-link to="/">更多租房<i class="iconfont icon-mjiantou"></i></nuxt-link></div>
              </div>
              <div class="hourse-tag">
                  与其等待，不如坐享繁华
              </div>
              <div class="hourse-content">
                  <div class="hourse-content-pic clearfix">
                      <div class="pic-item-1 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15274121157654.png">
                          </nuxt-link>
                          <div class="b1">阳光馨苑小区 出售</div>
                          <div class="b2 clearfix"><span>1室1厅1卫</span>45.00㎡<span></span><span class="fr">1100元/月</span></div>
                      </div>
                      <div class="pic-item-2 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15273259981432.png">
                          </nuxt-link>
                          <div class="b1">学府花园精装 出售</div>
                          <div class="b2 clearfix"><span>3室22厅2卫</span>148.00㎡<span></span><span class="fr">2500元/月</span></div>
                      </div>
                      <div class="pic-item-3 fl">
                          <nuxt-link to="/">
                              <img src="http://www.fooju.cn/fjw/uploads/base64/s_basepic_15271540827645.png">
                          </nuxt-link>
                          <div class="b1">京能蓝色理想 精装修</div>
                          <div class="b2 clearfix"><span>2室2厅1卫</span>97.00㎡<span></span><span class="fr">2600元/月</span></div>
                      </div>
                  </div>

              </div>
          </div>
          <!--结束-->
      </div>
  </div>

</template>
<script>
  import userTop from '~/components/index/userTop'
  import linkNav from '~/components/index/linkNav'
  import axios from '~/plugins/axios'
  import api from '~/mainApi/index'



export default {
      async asyncData(){
          let bannerData = await axios.get(api.parmToUrl(api.adLists,{type:0,position:0}))
          return{
              banners:bannerData.data.data
          }
      },
      components:{
          userTop,
          linkNav,
      },
    data(){
          return{
              selectedIndex:0,
              placeholderText:"输入小区名查找二手房",
              swiperOption:{
                  autoplay:true

              },
          }
    },
    // mounted(){
    //       axios.get(api.parmToUrl(api.adLists))
    // },
    watch:{
        selectedIndex(newVal,oldVal){
            switch (newVal){
                case 0:
                    this.placeholderText="输入小区名查找二手房";
                    break;
                case 1:
                    this.placeholderText="输入楼盘名进行搜索";
                    break;
                case 2:
                    this.placeholderText="输入小区名可以查找出租的房屋";
                    break;
                case 3:
                    this.placeholderText="输入小区名搜索学区房";
                    break;
                case 4:
                    this.placeholderText="找小区要输入小区名"
                    break;
            }
        }
    }
  // async asyncData () {
  //   let { data } = await axios.get('/api/users')
  //   return { users: data }
  // },
  //   mounted(){
  //     console.log(this.users)
  //   },
  // head () {
  //   return {
  //     title: 'Users'
  //   }
  // }
}
</script>

<style scoped lang="scss">
.index{
  background: rgb(242,242,242);
  position: relative;
  .banner-swiper{

  }
  header{
    background: #ffffff;
  }
  .banner-swiper{
    margin-top: 2px;
    img{
      display: block;
      width: 100%;
      z-index: 99;
    }
  }
  .search{
    position: absolute;
    width: 1100px;
    z-index: 998;
    left: 50%;
    margin-left: -550px;
    top: 362px;
    .search-nav{
        position: relative;
        .active::after{
            content: "";
            display: block;
            color: #fff;
            position: absolute;
            border: 10px solid transparent;
            border-bottom: 10px solid #fff;
            top:31px;
            transform: translateX(100%);
        }
        span{
            display: inline-block;
        }
        span:nth-child(1){
            a{
                font-weight: 700;
            }
        }
      .search-nav-item{
        margin-right: 30px;
        a{
          color: #ffffff;
          font-size: 16px;
        }
          a:hover{
              font-weight: 700;
          }
      }
    }
      .search-input{
          input{
              width: 740px;
              height: 60px;
              padding:0 0 0 10px;
              border-top-left-radius: 3px;
              font-size: 100%;
              border-width: 0;
              margin-top: 30px;
              outline: none;
          }
          .search-btn{
              display: inline-block;
              width: 160px;
              height: 60px;
              line-height: 60px;
              text-align: center;
              background: #c30d23;
              color: #ffffff;
              margin-right: 10px;
              a{
                  color: #ffffff;
              }
          }
          .search-map{
              display: inline-block;
              width: 160px;
              height: 60px;
              line-height: 60px;
              text-align: center;
              background: #5f1985;
              color: #ffffff;
              a{
                  color: #ffffff;
                  img{
                      text-align: center;
                      vertical-align: middle;
                      margin-right: 10px;
                  }
              }
          }
      }
      .search-bottom{
          margin-top:60px;
          margin-bottom: 8px;
      }
  }
    .content{
        background: #fff;
        .content-top{
            width: 1100px;
            margin: 0 auto;
            .content-top-item{
                display: flex;
                .btn-item{
                    padding-left: 40px;
                    padding-right: 40px;
                    padding-top:30px;
                    flex: 1;
                    text-align: center;
                    a{
                        width: 100%;
                        display: block;
                    }
                    .btn-item-top{
                        padding-top:24px;

                    }
                    .btn-item-bottom{
                        padding-top: 12px;
                    }
                }
            }
        }
        .content-pic{
            padding-top:40px;
            width: 1100px;
            margin: 0 auto;
            position: relative;
            .pic-item{
                float: left;
            }
            .pic-item-2{
                margin-left: 100px;
            }
            .pic-item-3{
                position: absolute;
                right: 0;
            }
        }
        .content-hourse{
            width: 1100px;
            margin:0 auto;
            margin-top: 40px;
            .title{
                margin-bottom: 10px;
                .title-l{
                    font-size: 30px;
                    font-weight: bolder;
                    color: #333;
                }
                .title-r{
                    font-size: 16px;
                    a{
                        color:#999;
                    }
                    i{
                        padding-left: 6px;
                    }
                }
            }
            .hourse-tag{
                margin-bottom: 40px;
                color: #666;
            }
        }
        .ad{
            width: 1100px;
            height: 110px;
            margin:10px auto 10px auto;
            background: #000;
            background:url("../static/imgs/ad1.png");
        }
        .content-hourse-middle{
            width: 1100px;
            margin:50px auto;
            .title{
                margin-bottom: 20px;
                .tile-l{
                    font-size: 30px;
                    font-weight: bolder;
                    color: #333;
                }
                .title-r{
                    a{
                        font-size: 16px;
                        color: #999;
                        i{
                            margin-left: 4px;
                        }
                    }
                }
            }

            .hourse-tag{
                width: 1100px;
                margin: 0 auto 40px auto;
                color: #666;
            }
            .hourse-content{
                width: 1100px;
                margin: 0 auto;
                .hourse-content-pic{
                    position: relative;
                    .pic-tag{
                        position: absolute;
                        top: 10px;
                        left: 0;
                        background:url("../static/imgs/pricetag.png");
                        height: 50px;
                        line-height: 50px;
                        background-size:100% 100%;
                        font-size:20px;
                        min-width: 70px;
                        padding-left: 10px;
                        color: #fff;
                        z-index:2;
                    }
                    .b1{
                        font-size: 16px;
                        color: #333;
                        margin-top: 24px;
                        margin-bottom: 16px;
                    }
                    .b2{
                        color: #666;
                        font-size: 14px;
                        span:nth-child(1){
                            margin-right:10px;
                        }
                        span:nth-child(3){
                            color: #c30d23;
                            font-size: 14px;
                        }
                    }
                    .pic-item-1{
                        img{
                            display: block;
                            width: 342px;
                            height: 257px;
                            overflow: hidden;
                        }
                    }
                    .pic-item-2{
                        margin-left:38px;
                        position: relative;
                        .pic-tag{
                            position: absolute;
                            top: 10px;
                            left: 0;
                            background:url("../static/imgs/pricetag.png");
                            height: 50px;
                            line-height: 50px;
                            background-size:100% 100%;
                            font-size:20px;
                            min-width: 70px;
                            padding-left: 10px;
                            color: #fff;
                            z-index:2;

                        }
                        img{
                            display: block;
                            width: 342px;
                            height: 257px;
                            overflow: hidden;
                        }
                    }
                    .pic-item-3{
                        position: absolute;
                        right: 0;
                        img{
                            display: block;
                            width: 342px;
                            height: 257px;
                            overflow: hidden;
                        }
                    }

                }

            }

        }
    }
    .hourse{
        width: 1100px;
        margin:0 auto;
        position: relative;
        .hourse-item2{
            margin-left: 38px;
        }
        .hourse-item3{
            position: absolute;
            right: 0;
        }
        .hourse-item{
            float: left;
            width: 342px;
            height: 257px;
            img{
                display: block;
                width: 342px;
                height: 257px;
            }
            .hourse-item-content{
                position: relative;
                .hourse-bottom{
                    background: rgba(0,0,0,.5);
                    position: absolute;
                    width: 322px;
                    bottom:0;
                    padding:5px 10px;
                    font-size: 16px;
                    color: #fff;
                }
            }
        }


    }
}
</style>
