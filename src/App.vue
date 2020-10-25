<template>
  <div>

    <div class="test">

      <Navigation></Navigation>

      <div class="blob_bg">

        <div class="bg_blob_right">
            <img src="@/assets/images/bg_blob_right.svg" alt="background_blob">
        </div> 

        <div class="bg_blob_left">
            <img src="@/assets/images/bg_blob_left.svg" alt="background_blob">
        </div> 

      </div>

      <main>
        <router-view/>
      </main>
    
    </div>

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

  .test {
    min-height: calc(100vh - 70px);
  }

  #footer {
    height: 50px;
  }

</style>