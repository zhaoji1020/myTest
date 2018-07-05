<template>
    <div class="login">
        <regHeader></regHeader>
        <div class="login-content">
            <loginBox></loginBox>
        </div>
        <copyRight></copyRight>
    </div>
</template>

<script>
    import regHeader from '~/components/register/regHeader'
    import copyRight from '~/components/copyRight'
    import loginBox from '~/components/login/loginBox'
    export default {
        name: "login",
        components:{
            regHeader,
            copyRight,
            loginBox
        }
    }
</script>

<style scoped lang="scss">
    .login{
        background: rgb(242,242,242);
        padding-bottom: 30px;
    }

</style>