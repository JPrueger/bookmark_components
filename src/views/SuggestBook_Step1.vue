<template>

    <div class="whole_content_wrapper">

        <div class="wrapper_form_content_card">

            <h1>Suggest your Book!</h1>

            <p>Step 1 out of 2</p>

            <form action="#">

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
                    <input class="input" id="isbn" type="text" value="" name="isbn" placeholder="9780136019743">
                </div>

                <div>
                    <label for="author">Author</label> <br>
                    <input class="input" id="author" type="text" value="" name="author" placeholder="Jane Doe">
                </div>

                <div>
                    <label for="title">Title</label> <br>
                    <input class="input" id="title" type="text" value="" name="title" placeholder="Get together">
                </div>

                <ButtonCancel></ButtonCancel>
                <ButtonSubmit></ButtonSubmit>
      
            </form>

        </div>

    </div>

</template>

<script>
    import ButtonSubmit from '@/components/Button/ButtonSubmit.vue'
    import ButtonCancel from '@/components/Button/ButtonCancel.vue'

    export default {
        name: 'Register',
        components: {
            ButtonSubmit,
            ButtonCancel
        }
    }
</script>

<style lang="scss" scoped>

   #title {
       margin-bottom: 50px;
   }

</style>
