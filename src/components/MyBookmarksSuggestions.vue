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

    <div class="wrapper_cards"> 
      <Card
        v-for="suggestion in suggestions"
        v-bind:key="suggestion.id"
        v-bind:suggestion="suggestion"
      />
    </div>

  </div>
</template>

<script>
  import Card from '@/components/Card/Card.vue'
  import postDataService from '@/services/postDataService';

  export default {
    name: 'MyBookmarksSuggestions',

    data: () => ({
      newSuggestion: {
          author:'',
          title: '',
          isbn: '', 
          // fastThree: '',
          // bookReview: ''
      },
      suggestions: [],
    }),

    components: {
      Card
    }, 

    // methods: {
    //   createSuggestion: function(e) {
    //     e.preventDefault();

    //     postDataService.store(this.newSuggestion)
    //       .then((newSuggestionList) => {
    //         this.suggestions = newSuggestionList;
    //       });
    //     this.newSuggestion = {
    //       author: '',
    //       title: '',
    //       isbn: ''
    //     };
    //   }
    // },

    created() {
      postDataService.index()

      .then((allSuggestions) => {
        this.suggestions = allSuggestions;
      });
    }

  }       
</script>

<style lang="scss">

  .wrapper_cards {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 30%;
    justify-content: space-between;
  }

</style>

