<template>
    <div class="whole_content_wrapper">
        <h1>Login here!</h1>
        
        <div class="wrapper_form_content_card">

            <LoginForm></LoginForm>

        </div>
    </div>
</template>

<script>
    import LoginForm from '@/components/LoginForm.vue'

    export default {
        name: 'Login',
        components: {
            LoginForm
        }
    }
</script>
    
