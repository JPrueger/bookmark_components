<template>

    <div class="whole_content_wrapper">

        <div class="wrapper_form_content_card">

            <h1>Suggest your Book!</h1>

            <p>Step 2 out of 2</p>

            <h2>Add your personal touch!</h2>

            <form action="#">

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
                    <input id="fastThree" type="text" value="" name="fastThree" placeholder="Surprising, loud, intense">
                </div>

                <label for="bookReview">Tell your friend something about it</label>
                <textarea id="bookReview" name="bookReview" rows="4" cols="50" placeholder="What did you like the best?">
                </textarea>

                <label for="uploadImage" class="file_upload">What does the book look like?</label>
                <input type="file" id="uploadImage" name="uploadImage">

                <button type="button" class="cancel">Cancel</button>

                <button type="button">Submit</button>

            </form>

        </div>

    </div>

</template>