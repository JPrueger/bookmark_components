<template>
    <div class="whole_content_wrapper">
        
        <div class="wrapper_form_content_card">
            <h1>Login here!</h1>

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
    
