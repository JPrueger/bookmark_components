<template>

    <div class="whole_content_wrapper">

        <div class="wrapper_form_content_card">

            <h1>Suggest your Book!</h1>

            <p>Step 2 out of 2</p>

            <h2>Add your personal touch!</h2>

            <form action="#" v-on:submit="createSuggestion">

                <select name="chooseCategoy" class="categoy">
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

                <div>
                    <label for="fastThree">What three words describe your book the best?</label> <br>
                    <input class="input" v-model="newSuggestion.fastThree" id="fastThree" type="text" name="fastThree" placeholder="Surprising, loud, intense">
                </div>

                <label for="bookReview">Tell your friend something about it</label>
                <textarea class="input" v-model="newSuggestion.bookReview" id="bookReview" name="bookReview" rows="4" cols="50" placeholder="What did you like the best?">
                </textarea>

                <label for="uploadImage" class="file_upload">What does the book look like?</label>
                <input class="input" type="file" id="uploadImage" name="uploadImage">

                <!-- <ButtonCancel></ButtonCancel>
                <ButtonSubmit></ButtonSubmit> -->

                <!-- <button class="cancel">Cancel</button> -->
                <button>Submit!</button>

            </form>

        </div>

    </div>

</template>

<script>
    // import ButtonSubmit from '@/components/Button/ButtonSubmit.vue'
    // import ButtonCancel from '@/components/Button/ButtonCancel.vue'

    import postDataService from '@/services/postDataService';

    export default {
        name: 'Register2',
        components: {
            // ButtonSubmit,
            // ButtonCancel
        },

        data: () => ({
            newSuggestion: {
                fastThree: '',
                bookReview: '',  
            },
            suggestions: [],

        }),

        // props: {
        //     suggestion: Object
        // },

        methods: {
            // TODO: zwei Objects zusammenfügen (const returnedTarget = Object.assign(#1, #2))
            createSuggestion: function() {
                // e.preventDefault();

                postDataService.store(this.newSuggestion)
                    .then((newSuggestionList) => {
                        this.suggestions = newSuggestionList;
                    });
                this.newSuggestion = {
                    fastThree: '',
                    bookReview: '',
                };
            },

            // created() {
            //     postDataService.index()

            //     .then((allSuggestions) => {
            //         this.suggestions = allSuggestions;
            //     });
            // }
        }


        
    }
</script>

<style lang="scss" scoped>

   #uploadImage {
       margin-bottom: 50px;
   }

</style>