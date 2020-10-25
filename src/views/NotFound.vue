<template>
    <div class="home whole_content_wrapper">
      <div>
        <h1>Oops!</h1>
        <h2>404 - page not found!</h2>

        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailbale.</p>
      </div>

      <!-- <div></div> -->
      <NotFoundHiddenAuthor></NotFoundHiddenAuthor>
    </div>
</template>

<script>
  import NotFoundHiddenAuthor from '@/components/NotFoundHiddenAuthor.vue'

  export default {
        name: 'NotFound',
        components: {
            NotFoundHiddenAuthor
        }
    }
</script>

<style style="scss" scoped>

  .whole_content_wrapper {
    margin-bottom: 150px;
  }

</style>
