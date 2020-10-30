<template>

    <div class="whole_content_wrapper">

        <div class="wrapper_form_content_card">

            <h1>Suggest your Book!</h1>

            <p>Step 1 out of 2</p>

            <form action="/suggest-book-step-2" v-on:submit="createSuggestion">

                <select name="find_friend" class="find_friend">
                    <option value="" selected disabled hidden>Find friend here</option>
                    <option value="friendId">Lisa</option>
                    <option value="friendId">Nina</option>
                    <option value="friendId">Tom</option>
                </select>

                <p class="">Tell us something about the book you’d like to recommend</p>

                <h2>The Basics!</h2>

                <p>By letting us know the ISBN of your book, we can fill out the base information quickly. If you don’t know the ISBN please just fill in a few information manually. 
                </p>

                <div>
                    <label for="isbn">Type in ISBN</label> <br>
                    <input class="input" v-model="newSuggestion.isbn" id="isbn" type="text" name="isbn" placeholder="9780136019743">
                </div>

                <div>
                    <label for="author">Author</label> <br>
                    <input class="input" v-model="newSuggestion.author" id="author" type="text" name="author" placeholder="Jane Doe">
                </div>

                <div>
                    <label for="title">Title</label> <br>
                    <input class="input" v-model="newSuggestion.title" id="title" type="text" name="title" placeholder="Get together">
                </div>

                <!-- <button class="cancel">Cancel</button> -->
                <button>Submit!</button>

                <!-- <ButtonCancel></ButtonCancel>
                <ButtonSubmit></ButtonSubmit> -->
      
            </form>

        </div>

    </div>

</template>

<script>

    import postDataService from '@/services/postDataService';

    export default {
        name: 'Register',
        data: () => ({
            newSuggestion: {
                author:'',
                title: '',
                isbn: '',
            },
            suggestions: [],
        }),
    
        props: {
            suggestion: Object,
        },

        methods: {
            createSuggestion: function() {

                postDataService.store(this.newSuggestion)
                    .then((newSuggestionList) => {
                        this.suggestions = newSuggestionList;
                    });
                this.newSuggestion = {
                    author: '',
                    title: '',
                };
            }
        },
    
        // created() {
        //     postDataService.index()

        //     .then((allSuggestions) => {
        //         this.suggestions = allSuggestions;
        //     });
        // }
    }

</script>

<style lang="scss" scoped>

   #title {
       margin-bottom: 50px;
   }

</style>
