<template>

    <div class="all_cards">

        <div class="card"> 

            <div class="shadow">

                <div class="collapsible">

                    <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                    <p class="card-booktitle">Get together</p>
                    <p class="card-author">by Jane Doe</p>
                    
                    <button v-on:click="expandButton">See Details</button>

                    <div class="content">

                        <p class="card-teaser">Description</p>
                        <p class="card-content">Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                        <p class="card-teaser">Want to say something about it? </p>
                        <textarea id="bookReview" name="bookReview" rows="4" cols="50" placeholder="What did you like the best?">
                        </textarea>
                        <button class="added_margin_bottom">Post Comment!</button>

                        <div class="wrapper_comments_has_read_it">
                            <div class="comment_has_read_it"> <p class="card-teaser">Cory said:</p>
                                <p class="card-content">I read this book last week I really enjoyed it as well! Worth a read! 
                                </p>
                            </div>

                            <div class="comment_has_read_it"> <p class="card-teaser">Liam said:</p>
                                <p class="card-content">Well, that story did not surprise me, but I didn’t come up empty-handed. 
                                </p>
                            </div>
                        </div> 
                    </div>
                    <!-- <p class="card-fast-three-headline">Nina's fast three</p>
                    <p class="card-fast-three-content">surprising, loud, intense</p> -->
                                
                    <!-- <div class="content">
                        <p class="card-recommendation-teaser">Nina wants you to know</p>

                        <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                    </div> -->
                </div>

            </div>
        
        </div>

        <div class="card"> 

            <div class="shadow">

                <div class="collapsible">

                    <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                    <p class="card-booktitle">Get together</p>
                    <p class="card-author">by Jane Doe</p>
                    
                    <button v-on:click="expandButton">See Details</button>

                    <div class="content">

                        <p class="card-teaser">Description</p>
                        <p class="card-content">Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                        <p class="card-teaser">Want to say something about it? </p>
                        <textarea id="bookReview" name="bookReview" rows="4" cols="50" placeholder="What did you like the best?">
                        </textarea>

                        <div class="wrapper_comments_has_read_it">
                            <div class="comment_has_read_it"> <p class="card-teaser">Cory said:</p>
                                <p class="card-content">I read this book last week I really enjoyed it as well! Worth a read! 
                                </p>
                            </div>

                            <div class="comment_has_read_it"> <p class="card-teaser">Liam said:</p>
                                <p class="card-content">Well, that story did not surprise me, but I didn’t come up empty-handed. 
                                </p>
                            </div>
                        </div> 
                    </div>
                    <!-- <p class="card-fast-three-headline">Nina's fast three</p>
                    <p class="card-fast-three-content">surprising, loud, intense</p> -->
                                
                    <!-- <div class="content">
                        <p class="card-recommendation-teaser">Nina wants you to know</p>

                        <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                    </div> -->
                </div>

            </div>
        
        </div>

        <div class="card"> 

            <div class="shadow">

                <div class="collapsible">

                    <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                    <p class="card-booktitle">Get together</p>
                    <p class="card-author">by Jane Doe</p>
                    
                    <button v-on:click="expandButton">See Details</button>

                    <div class="content">

                        <p class="card-teaser">Description</p>
                        <p class="card-content">Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                        <p class="card-teaser">Want to say something about it? </p>
                        <textarea id="bookReview" name="bookReview" rows="4" cols="50" placeholder="What did you like the best?">
                        </textarea>

                        <div class="wrapper_comments_has_read_it">
                            <div class="comment_has_read_it"> <p class="card-teaser">Cory said:</p>
                                <p class="card-content">I read this book last week I really enjoyed it as well! Worth a read! 
                                </p>
                            </div>

                            <div class="comment_has_read_it"> <p class="card-teaser">Liam said:</p>
                                <p class="card-content">Well, that story did not surprise me, but I didn’t come up empty-handed. 
                                </p>
                            </div>
                        </div> 
                    </div>
                    <!-- <p class="card-fast-three-headline">Nina's fast three</p>
                    <p class="card-fast-three-content">surprising, loud, intense</p> -->
                                
                    <!-- <div class="content">
                        <p class="card-recommendation-teaser">Nina wants you to know</p>

                        <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                    </div> -->
                </div>

            </div>
        
        </div>
    
    </div>

</template>


<script>
    export default {
        name: 'Card',
        methods: {
            expandButton() {
                let button = document.querySelectorAll(".collapsible");
                let i;

                for (i = 0; i < button.length; i++) {
                    button[i].addEventListener("click", function(_e) {
                    
                    _e.target.parentNode.classList.toggle("active");

                    var content = _e.target.nextElementSibling;
                    console.log(content);

                    if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    textarea {
        width: 100%;
        border: 1px solid grey;
        border-radius: 10px;
        margin-bottom: $biggestMarginBottom;

        &::placeholder {
            padding: 10px 0 0 10px;
        }
    }   
</style>