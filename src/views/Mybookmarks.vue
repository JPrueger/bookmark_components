<template>
  <div class="Mybookmarks whole_content_wrapper">

    <h1>Five more pages, please.</h1>

    <h2>Looking for a specific recommendation?</h2>

    <p>Find the recommendation you are looking for even faster by searching for the book!
    </p>

    <Searchbar></Searchbar>

    <h2>Your friends suggestions:</h2>

    <OverviewChoice class="added_margin_bottom"></OverviewChoice>
    
    <OverviewChoice class="last_added_margin_bottom"></OverviewChoice>

  </div>
</template>

<script>
  import OverviewChoice from '@/components/OverviewChoice.vue'
  import Searchbar from '@/components/Searchbar.vue'


  export default {
    name: 'Mybookmarks',
    components: {
      OverviewChoice,
      Searchbar
    }
  }
</script>
