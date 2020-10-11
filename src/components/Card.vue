<template>

    <div class="all_cards">

        <div class="card"> 

            <div class="shadow">

                <div class="collapsible">

                    <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                    <p class="card-booktitle">Get together</p>
                    <p class="card-author">by Jane Doe</p>
                    <p class="card-headline">Nina's fast three</p>
                    <p class="card-content">surprising, loud, intense</p>
                
                    <button v-on:click="expandButton">Read more!</button>
                
                    <div class="content">
                        <p class="card-teaser">Nina wants you to know</p>

                        <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                        </p>
                    </div>
                </div>

            </div>
        
        </div>
        
        <!-- <div class="card"> 

        <div class="shadow">

            <div class="collapsible">

                <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                <p class="card-booktitle">Get together</p>
                <p class="card-author">by Jane Doe</p>
                <p class="card-fast-three-headline">Nina's fast three</p>
                <p class="card-fast-three-content">surprising, loud, intense</p>
                
                <button v-on:click="expandButton">See personal recommendation</button>
            
                <div class="content">
                    <p class="card-recommendation-teaser">Nina wants you to know</p>

                    <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                    </p>
                </div>
            </div>

        </div>
        
        </div>

        <div class="card"> 

        <div class="shadow">

            <div class="collapsible">

                <img src="@/assets/images/little_dragon_cover.jpg" alt="cover of current book the little dragon">

                <p class="card-booktitle">Get together</p>
                <p class="card-author">by Jane Doe</p>
                <p class="card-fast-three-headline">Nina's fast three</p>
                <p class="card-fast-three-content">surprising, loud, intense</p>
                
                <button v-on:click="expandButton">See personal recommendation</button>
            
                <div class="content">
                    <p class="card-recommendation-teaser">Nina wants you to know</p>

                    <p>Hi Lisa! When I read the book I totally thought about you, and I am pretty sure you’d like it. It takes place in the South of England in 1960. It is about getting to know your neighbors and inviting them to a get together in the upper district of St. Kilda. Definitely worth a read!
                    </p>
                </div>
            </div>

        </div>
        
        </div> -->

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

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .shadow {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); 
        width: 100%;
        border-radius: 10px;
        background-color: white;
    }

    .collapsible {
        color: black;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        border-radius: 10px 10px 0 0; 
    }

    .content {
        margin-top: 10px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 300ms cubic-bezier(0.605, 0.250, 0.320, 0.820);
    }

    .card-booktitle {
        font-weight: 900;
        font-size: calc(30px + (50 - 30) * ((100vw - 200px) / (1600 - 300)));
        line-height: calc(1em + (1.5 - 1) * ((100vw - 100px)/(1600 - 300)));
        margin-bottom: $mainMarginBottom;
    }

    .card-author {
        font-weight: 400;
        margin-bottom: $biggerMarginBottom;
    }

    .card-content {
        margin-bottom: $biggerMarginBottom;
    }

    .card-teaser, .card-headline {
        margin-bottom: $mainMarginBottom;
    }

    .card-headline, .card-teaser {
        font-weight: 900;
        margin-bottom: $lowerMarginBottom;
    }

    .collapsible img {
        width: 100%;
        margin-bottom: $mainMarginBottom;
    }
</style>