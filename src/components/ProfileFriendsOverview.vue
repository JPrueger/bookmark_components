<template>

    <div class="wrapper_friends">
        <div class="friend">
            <svg viewBox="0 0 392.8 298.3" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round">
                <clipPath id="mask">
                    <path class="st0" d="M37.9,246.7c24.3,26.2,57.2,42.6,92.6,47.7c224.8,32.3,339.6-146.9,204.2-240.3 C192.2-44.2,34.3,8.4,11.8,78.3C-8.4,141-4.6,200.9,37.9,246.7z"/>      
                </clipPath>
                <image width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice" href="@/assets/images/Brook.jpg" />
            </svg>
            <a href="/friends">
                <p>Tom Johnson</p>
            </a>
        </div> 

        <div class="friend">
            <svg viewBox="0 0 392.8 298.3" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round">
                <clipPath id="mask">
                    <path class="st0" d="M37.9,246.7c24.3,26.2,57.2,42.6,92.6,47.7c224.8,32.3,339.6-146.9,204.2-240.3 C192.2-44.2,34.3,8.4,11.8,78.3C-8.4,141-4.6,200.9,37.9,246.7z"/>      
                </clipPath>
                <image width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice" href="@/assets/images/Megan.jpg" />
            </svg>
            <a href="#">
                <p>Lisa Stummer</p>
            </a>
        </div> 

        <div class="friend">
            <svg viewBox="0 0 392.8 298.3" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round">
                <clipPath id="mask">
                    <path class="st0" d="M37.9,246.7c24.3,26.2,57.2,42.6,92.6,47.7c224.8,32.3,339.6-146.9,204.2-240.3 C192.2-44.2,34.3,8.4,11.8,78.3C-8.4,141-4.6,200.9,37.9,246.7z"/>      
                </clipPath>
                <image width="100%" height="100%" clip-path="url(#mask)" preserveAspectRatio="xMidYMid slice" href="@/assets/images/Lauren.jpg" />
            </svg>
            <a href="#">
                <p>Lauren Watke</p>
            </a>
        </div> 
   </div>

</template>   

<style lang="scss">
    @import '@/assets/styles/variables.scss';

    .friend {
        svg {
            width: 100%;
        }
    }

    .wrapper_friends { 
        margin-bottom: $biggestMarginBottom;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .friend {
        margin-right: 10px;
        margin-bottom: 45px;
        flex-basis: 40%;
    }

    @media (min-width: 600px){

        .friend {
            flex-basis: 30%;
        }

    }

    @media (min-width: 1000px){

        .wrapper_friends { 
            justify-content: space-between;
        }

        .friend {
            flex-basis: 15%;
            margin-right: 10%;

            &:last-child {
                margin-right: 0;
            }
        }

    }
    
</style>