<template>
    <div class="home whole_content_wrapper">
      <h1>Error, 404!</h1>
      <p>Sorry, we could not find the page you where looking for!</p>

      <p>But you can look for our author of the month beneath one of the shapes below. Just click on them to reveal whats behind!</p>

      <div></div>
      <Game></Game>

    </div>
</template>

<script>
  import Game from '@/components/Game.vue'

  export default {
        name: 'NotFound',
        components: {
            Game
        }
    }
</script>