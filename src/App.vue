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

    <Footer></Footer>

  </div>
</template>

<script>

    import Navigation from '@/components/Navigation.vue'
    import Footer from '@/components/Footer.vue'


    export default {
        name: 'App',
        components: {
            Navigation,
            Footer
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

  @media (min-width: 750px){
    #nav ul {
        top: 13%;
    }
  }

</style>