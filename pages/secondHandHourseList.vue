<template>
    <div>
        <headerOne></headerOne>
        <listRight></listRight>
        <headerWrapone></headerWrapone>
        <div class="secondHand">
            <div class="content">
                <div class="content-top">
                    <nuxt-link to="/">福居网>&nbsp</nuxt-link><nuxt-link to="/">二手房</nuxt-link>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import headerOne from '~/components/headerOne'
    import listRight from '~/components/listRight'
    import headerWrapone from '~/components/headerWrapone'
    export default {
        name: "secondHandHourseList",
        components:{
            headerOne,
            listRight,
            headerWrapone
        }
    }
</script>

<style scoped lang="scss">
.secondHand{
    background: #fff;
    .content{
        width: 1100px;
        height: 500px;
        margin: 20px auto 0;
        background: lightgray;
        .content-top{
            width: 1100px;
            font-size: 14px;
            color: #999;
            margin-top:20px;
        }
    }
}
</style>