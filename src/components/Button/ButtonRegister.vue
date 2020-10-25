<template>
    <button type="button">Register</button>
</template>

<style lang="scss" scoped>
    @import '@/assets/styles/variables.scss';

    // border: 1.5px solid $primaryColor;


    button {
        display: inline-block;
        transition: all .3s;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &:after {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            z-index: -2;
        }
    
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: darken($primaryColor, 10%);
            transition: all .3s;
            border-radius: 10px;
            z-index: -1;
        }
    
        &:hover {

            &:before {
                width: 100%;
            }
            
        }
    }

</style>