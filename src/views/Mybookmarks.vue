<template>
  <div class="Mybookmarks whole_content_wrapper">

    <h1>Five more pages, please.</h1>

    <h2>Add your personal touch!</h2>

    <OverviewChoice class="added_margin_bottom"></OverviewChoice>
    
    <OverviewChoice class="last_added_margin_bottom"></OverviewChoice>

  </div>
</template>

<script>
  import OverviewChoice from '@/components/OverviewChoice.vue'

  export default {
    name: 'Mybookmarks',
    components: {
      OverviewChoice,
    }
  }
</script>
