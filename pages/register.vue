<template>
    <div class="reg-index">
        <regHeader></regHeader>
        <regContent></regContent>
        <copyRight></copyRight>
    </div>
</template>

<script>
    import regHeader from '~/components/register/regHeader'
    import regContent from '~/components/register/regContent'
    import copyRight from '~/components/copyRight'
    export default {
        name: "register",
        components:{
            regHeader,
            regContent,
            copyRight

        }
    }
</script>

<style scoped>
.reg-index{
    background: rgb(242, 242, 242);
    padding-bottom: 30px;
}
</style>