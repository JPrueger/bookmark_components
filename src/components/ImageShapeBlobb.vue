<template>

    <div class="floating-image">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round">
            <clipPath id="mask">
                <path d="M63.1,-20C69,-2.2,52.4,23.4,32.6,35.6C12.8,47.8,-10,46.5,-27,34.8C-43.9,23,-54.9,0.8,-49.4,-16.4C-43.9,-33.6,-22,-45.8,3.3,-46.8C28.6,-47.9,57.2,-37.9,63.1,-20Z" transform="translate(100 100)" />
            </clipPath>
            <image src="./assets/images/Megan.png" width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice"/>
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