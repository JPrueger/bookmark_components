<template>
    <div class="book_of_the_month">
        <img class="bg_blob_book_of_the_month" src="@/assets/images/bg_blob_book_of_the_month.svg" alt="pink background of cover of the current book of the month!">
        <img class="cover_book_of_the_month" src="@/assets/images/extremely_loud.jpg" alt="cover of the current book of the month!">
    </div>

    <div class="container_book_description">  
        <h3>Author</h3>
        <p>Jonathan Safran Foer</p>

        <h3>Title</h3>
        <p>Extremely Loud and Incredibly Close</p>

        <h3>Description</h3>
        <p>Oskar Schell, a nine-year-old boy, has not been happy since his dad died in the 9/11 terrorist attacks. Unbeknownst to anyone except for Oskar, on the day of the attacks, Oskar’s dad called the house five times. Oskar was home for the fifth call but couldn’t bring himself to pick up the phone. They never recovered his dad’s body and buried an empty casket at his funeral. Oskar is furious that his mom has started to spend time with a man named Ron and worries that she has begun to move on. Oskar suffers from extreme anxiety and imagines whimsical inventions in order to cope. 
        </p>
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .container_book_description {
        flex-basis: 50%;
    }

    .book_of_the_month {
        position: relative;
    }

    .bg_blob_book_of_the_month {
        width: 85%;
        margin: 0 auto;
        display: block;
        z-index: -1;
        left: 10%;
        margin-bottom: 50px;
    }

    .cover_book_of_the_month {
        width: 60%;
        position: absolute;
        margin: 0 auto;
        display: block;
        top: 20px;
        left: 20%;
        margin-bottom: 30%;
    }

    @media (min-width: 650px){

        .bg_blob_book_of_the_month {
            width: 55%;
            margin: 0;
            margin-bottom: 100px;
        }

        .cover_book_of_the_month {
            width: 40%;
            left: 10%;
            top: 10%;
            // margin: 0;
            margin-bottom: 20%;
            // left: 5%;
        }
    }

    @media (min-width: 1200px){
    
        .bg_blob_book_of_the_month {
            width: 430px;
            position: absolute;
        }

        .cover_book_of_the_month {
            width: 310px;
            margin: 0;
            left: 50px;
            top: 20px;
        }

    }

</style>