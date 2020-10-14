<template>
    <img class="bg_blob_book_of_the_month" src="@/assets/images/bg_blob_book_of_the_month.svg" alt="pink background of cover of the current book of the month!">
    <img class="book_of_the_month" src="@/assets/images/extremely_loud.jpg" alt="cover of the current book of the month!">
</template>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .bg_blob_book_of_the_month {
        width: 80%;
        margin: 0 auto;
        display: block;
        position: absolute;
        z-index: -1;
        left: 10%;
    }

    .book_of_the_month {
        width: 60%;
        position: relative;
        margin: 0 auto;
        display: block;
        top: 30px;
        margin-bottom: 30%;
    }
</style>