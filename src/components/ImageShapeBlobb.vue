<template>

    <div class="floating-image">
        <svg viewBox="0 0 20 18" >
            <clipPath id="mask">
                <path
                    d='M1.17 -2c2.348 -90 3.1 -3 8.25 1 3.69 4 10.100.43 9.375 2.641 0 4.346-4.614 10.125-9.375 10.125-2.52 0-2.54-2.489-4.118-4.066-1.401-1.4-4.507-1.764-4.507-3.809C1.842 5.029-2.543 0 3.217 0z'/>
            </clipPath>
            <image href="@/assets/images/Megan.jpg" width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice"/>
        </svg>
    </div>

</template>   


<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .floating-image {
        svg {
            width: 100%;
        }

        img {
            width: 100vw;
        }
    }

</style>