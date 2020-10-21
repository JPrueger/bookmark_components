<template>

    <div id="footer" class="whole_content_wrapper">
      <a href="#">login</a>
      <a href="#">terms of service</a>
      <a href="#">privacy policy</a>
      <a href="#">© 2020 bookmark</a>
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

    #footer a {
        text-decoration: none;
        color: black;
        display: block;
        margin-bottom: 50px;

        &:last-child {
            margin-bottom: 70px;
        }
    }

    @media (min-width: 750px){

        #footer {
            display: flex;
         
            a {
                height: 40px;
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

            a:last-child {
                margin-bottom: 0;
                border-right: none;
                margin-left: auto;
            }
        }
    }

</style>