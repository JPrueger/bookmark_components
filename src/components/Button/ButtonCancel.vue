<template>
    <button type="button" class="cancel">Cancel</button>
</template>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    .cancel {
        background-color: white;
        border: 1.5px solid $primaryColor;
        color: $primaryColor;
        margin-top: $biggerMarginBottom;
    }

    button {  
        &:before {
            background-color: rgba(193,0,78,0.05);
        }
    }
</style>