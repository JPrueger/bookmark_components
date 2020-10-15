<template> 

    <div class="whole_content_wrapper">

        <div class="wrapper_form_content_card">

            <h1>Register here!</h1>

            <RegisterForm></RegisterForm>

            <p>Already registered? Login <a href="#">here!</a></p> 

        </div>

    </div>

</template>

<script>
    import RegisterForm from '@/components/RegisterForm.vue'

    export default {
        name: 'Register',
        components: {
            RegisterForm
        }
    }
</script>

<style lang="scss">

    .wrapper_form_content_card {
        max-width: 500px;
        margin: 0 auto;
        margin-bottom: 100px;
    }

</style>