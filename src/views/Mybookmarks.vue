<template>
  <div class="Mybookmarks whole_content_wrapper">

    <h1>Five more pages, please.</h1>

    <h2>Looking for a specific recommendation?</h2>

    <p>Find the recommendation you are looking for even faster by searching for the book!
    </p>

    <Searchbar></Searchbar>

    <h2>Your friends suggestions:</h2>

    <MyBookmarksSuggestions class="last_added_margin_bottom"></MyBookmarksSuggestions>
    
  </div>
</template>

<script>
  import MyBookmarksSuggestions from '@/components/MyBookmarksSuggestions.vue'
  import Searchbar from '@/components/Searchbar.vue'

  export default {
    name: 'MyBookmarks',
    components: {
      MyBookmarksSuggestions,
      Searchbar
    }
  }
</script>
