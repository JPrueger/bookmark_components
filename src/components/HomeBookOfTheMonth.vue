<template>
    <div class="book_of_the_month">
        <img class="bg_blob_book_of_the_month" src="@/assets/images/bg_blob_book_of_the_month.svg" alt="pink background of cover of the current book of the month!">
        <img class="cover_book_of_the_month" src="@/assets/images/extremely_loud.jpg" alt="cover of the current book of the month!">
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

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

            // left: 5%;
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
            // width: 600px;
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