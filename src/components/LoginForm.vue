<template>
    <form action="">
        <div>
            <label for="email">E-Mail Address (will be your username)</label> <br>
            <input class="input" id="email" type="email" value="" name="email" placeholder="john.doe@gmail.com">
        </div>

        <div>
            <label for="password">Password:</label> <br>
            <input class="input" id="password" type="password" value="" name="password" placeholder="********">
        </div>

        <ButtonLogin></ButtonLogin>

        <p>No account yet? Register <a href="">here!</a></p>  
    </form>
</template>

<script>
    import ButtonLogin from '@/components/Button/ButtonLogin.vue'

    export default {
        name: 'LoginForm',
        components: {
            ButtonLogin,
        }
    }
</script>

<style lang="scss" scoped>

   #password {
       margin-bottom: 50px;
   }

</style>

