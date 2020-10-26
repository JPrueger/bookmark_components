<template>
<!-- VueJS -->
    <form action="#" v-on:submit="createRegistration" >

        <div>
            <label for="email">E-Mail Address (will be your username)</label> <br>
            <input class="input" v-model="newRegistration.email" id="email" type="email" name="email" placeholder="john.doe@gmail.com">
        </div>

        <div>
            <label for="firstname">First Name:</label> <br>
            <input class="input" v-model="newRegistration.firstname" id="firstname" type="text" name="firstname" placeholder="John">
        </div>

        <div>
            <label for="lastname">Last Name:</label> <br>
            <input class="input" v-model="newRegistration.lastname" id="lastname" type="text" name="firstname" placeholder="Doe">
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

        <button type="submit">Submit!</button>

        <!-- <ButtonCancel></ButtonCancel>
        <ButtonRegister></ButtonRegister> -->

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
    // import ButtonCancel from '@/components/Button/ButtonCancel.vue'
    // import ButtonRegister from '@/components/Button/ButtonRegister.vue'

    import postDataService from '@/services/postDataService';


    export default {
        name: 'RegisterForm',

        data: () => ({
            newRegistration: {
                email: '',
                firstname: '',
                lastname: '',
            },
            registrations: [],
        }),

        props: {
            registration: Object,
        },

        components: {
            // ButtonRegister,
            // ButtonCancel
        },

        methods: {
            createRegistration: function (e) {
                e.preventDefault();
                // console.log("test");

                postDataService.storeRegistration(this.newRegistration)
                .then((newRegistrationList) => {
                    this.registrations = newRegistrationList;
                });
                this.newRegistration = {
                    email: '',
                    firstname: '',
                    lastname: '', 
                };
            } 
        },

        createdRegistration () {
            postDataService.indexRegistration()

            .then((allRegistrations) => {
                this.registrations = allRegistrations;
            });
        }
    }
</script>

<style lang="scss" scoped>

   #repeatpassword, #checkbox_hide_bookcovers {
       margin-bottom: 50px;
   }

</style>


