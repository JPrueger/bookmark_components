<template>

    <div id="footer" class="whole_content_wrapper">
        <router-link class="nav_link" to="/login">
            login
        </router-link>

        <router-link class="nav_link" to="/terms-of-service">
            terms of service
        </router-link>

        <router-link class="nav_link" to="/privacy-policy">
            privacy policy
        </router-link>

        <p> © 2020 bookmark </p>
    </div>

</template>

<script> 
  
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    #nav, #footer {
        padding-right: 20px;
        padding-left: 20px;
    }

    #footer {

        margin-bottom: 30px;

        p {
            font-size: 22px;
        }

        a {
            font-size: 22px;
            text-decoration: none;
            color: black;
            display: block;
            margin-bottom: 50px;

            &:last-child {
                margin-bottom: 70px;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }
    

    @media (min-width: 750px){

        #footer {
            display: flex;
         
            a {
                height: 30px;
                padding: 0 50px 0 50px;
                border-right: 1px solid black;
                // transform: translateY(10px);           
            }

            a:first-child {
                padding-left: 0;
            }
            
            a:nth-child(3) {
                border-right: none;
            }

            p {
                margin-bottom: 0;
                border-right: none;
                margin-left: auto;
            }
        }
    }

</style>