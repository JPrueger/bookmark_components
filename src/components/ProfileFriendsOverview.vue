<template>
    <div class="floating-image">
        <svg viewBox="0 0 392.8 298.3" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round">
            <clipPath id="mask">
                <path id="Pfad_619" class="st0" d="M37.9,246.7c24.3,26.2,57.2,42.6,92.6,47.7c224.8,32.3,339.6-146.9,204.2-240.3 C192.2-44.2,34.3,8.4,11.8,78.3C-8.4,141-4.6,200.9,37.9,246.7z"/>        </clipPath>
            <image width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice" href="@/assets/images/Megan.jpg" />
        </svg>
    </div> 
</template>   


<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .floating-image {
        svg {
            width: 100%;
        }
    }
</style>