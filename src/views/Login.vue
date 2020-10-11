<template>

    <div class="whole_content_wrapper">

        <h1>Login here!</h1>

        <div class="wrapper_form_content_card">

            <form action="">
           
                <div>
                    <label for="email">E-Mail Address (will be your username)</label> <br>
                    <input id="email" type="email" value="" name="email" placeholder="john.doe@gmail.com">
                </div>

                <div>
                    <label for="password">Password:</label> <br>
                    <input id="password" type="password" value="" name="password" placeholder="********">
                </div>

                <ButtonLogin></ButtonLogin>

                <p>No account yet? Register <a href="">here!</a></p> 
                
            </form>

        </div>
    </div>

</template>

<script>
    import ButtonLogin from '@/components/ButtonLogin.vue'

    export default {
        name: 'Login',
        components: {
            ButtonLogin,
        }
    }
</script>
    
