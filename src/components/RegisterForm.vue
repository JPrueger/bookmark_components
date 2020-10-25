<template>
    <form action="">

        <div>
            <label for="email">E-Mail Address (will be your username)</label> <br>
            <input class="input" id="email" type="email" value="" name="email" placeholder="john.doe@gmail.com">
        </div>

        <div>
            <label for="firstname">First Name:</label> <br>
            <input class="input" id="firstname" type="text" value="" name="firstname" placeholder="John">
        </div>

        <div>
            <label for="lastname">Last Name:</label> <br>
            <input class="input" id="lastname" type="text" value="" name="firstname" placeholder="Doe">
        </div>

        <div>
            <label for="password">Password:</label> <br>
            <input class="input" id="password" type="password" value="" name="password" placeholder="********">
        </div>

        <div>
            <label for="repeatpassword">Please repeat Password:</label> <br>
            <input class="input" id="repeatpassword" type="password" value="" name="repeatpassword" placeholder="********">
        </div>

        <h2>Frankly speaking!</h2>

        <p>Have you been judging books by it’s cover too? We all know we shouldn’t do so. To prevent you from doing this we’ll give you the opportunity to hide all covers. No worries, you can always change it in your setting!
        </p>

        <div>
            <label class="label_hide_all_bookcovers" for="checkbox_hide_bookcovers">Yes, I want to hide all book covers.</label>
            <input type="checkbox" id="checkbox_hide_bookcovers" name="checkbox_hide_bookcovers" value="">
        </div>

        <ButtonCancel></ButtonCancel>
        <ButtonRegister></ButtonRegister>

        <p>Already registered? Login 
            <a href="">
                <router-link class="nav_link" to="/login">
                    <b>here!</b>
                </router-link>
            </a>
        </p>  

    </form>
</template>

<script>
    import ButtonCancel from '@/components/Button/ButtonCancel.vue'
    import ButtonRegister from '@/components/Button/ButtonRegister.vue'

    export default {
        name: 'RegisterForm',
        components: {
            ButtonRegister,
            ButtonCancel
        }
    }
</script>

<style lang="scss" scoped>

   #repeatpassword, #checkbox_hide_bookcovers {
       margin-bottom: 50px;
   }

</style>


