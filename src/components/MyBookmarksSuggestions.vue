<template>
  <div>

    <h3>Nina’s choice</h3>

    <form action="">
      <!-- <label for="categoy">Be faster with finding your new favourite book by sorting by category</label><br> -->

      <select name="categoy" class="categoy">
        <option value="" selected disabled hidden>Sort by category</option>
        <option value="biographies">Biographies</option>
        <option value="horror">Horror</option>
        <option value="fiction">Fiction</option>
        <option value="mysteries">Mysteries</option>
        <option value="romance">Romance</option>
        <option value="true crime">True crime</option>
        <option value="science">Science</option>
        <option value="travel">Travel</option>
        <option value="sports">Sports</option>
        <option value="kids">Kids</option>
        <option value="teen">Teen</option>
      </select>
    </form>

    <Card></Card>

  </div>
</template>

<script>
  import Card from '@/components/Card/Card.vue'

  export default {
      name: 'Mybookmarks', 

      components: {
          Card
      }, 
  }       
</script>

