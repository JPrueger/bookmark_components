<template>
    <div class="home whole_content_wrapper">
      <h1>Oops!</h1>
      <h2>404 - page not found!</h2>

      <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailbale.</p>

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