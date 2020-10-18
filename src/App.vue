<template>
  <div>

    <Navigation></Navigation>

    <div class="blob_bg">

      <div class="bg_blob_right">
          <img src="@/assets/images/bg_blob_right.svg" alt="background_blob">
      </div> 

      <div class="bg_blob_left">
          <img src="@/assets/images/bg_blob_left.svg" alt="background_blob">
      </div> 

    </div>

    <router-view/>

    <div id="footer" class="whole_content_wrapper">
      <a href="#">login</a>
      <a href="#">terms of service</a>
      <a href="#">privacy policy</a>
      <a href="#">© 2020 bookmark</a>
    </div>

  </div>
</template>

<script>

    import Navigation from '@/components/Navigation.vue'

    export default {
        name: 'App',
        components: {
            Navigation
        }
    }
</script>

<style lang="scss" src="@/assets/styles/app.scss"></style>
<style lang="scss">
  @import '@/assets/styles/variables.scss';
  
  .wrapper_navigation {
    display: flex;
    justify-content: space-between;
  }

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

</style>