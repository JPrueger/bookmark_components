<template>
    <button type="button" class="cancel">Cancel</button>
    <button type="button">Submit</button>
</template>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    button {
        width: 100%;
        margin-bottom: $mainMarginBottom;
        height: 50px;
        font-weight: 400;
        font-size: calc(20px + (25 - 20) * ((100vw - 200px) / (1600 - 300)));
        line-height: calc(1em + (2.5 - 1) * ((100vw - 100px)/(1600 - 300)));  
        background-color: $primaryColor;
        color: white;
        font-weight: 900;
        border: none;
        border-radius: 10px;
        padding: 10px 25px 12px 25px;
        cursor: pointer;
    }

    .cancel {
        background-color: white;
        border: 1.5px solid $primaryColor;
        color: $primaryColor;
        margin-top: $biggerMarginBottom;
    }
</style>