<template>
    <div class="wrapper_searchbar">
      
        <input type="text" class="searchTerm" placeholder="Search for book titles">
        <button type="submit" class="searchButton">
            <svg viewBox="0 0 24 24">
                <defs>
                    <clipPath id="a">
                        <path fill="none" d="M0 0h24v24H0z"/>
                    </clipPath>
                </defs>
                <g data-name="Icon - Search" clip-path="url(#a)">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path data-name="Icon - Search" d="M23.2 22.224c-1.687-1.871-3.31-3.854-5.1-5.635l.02-.02a9.919 9.919 0 00.962-11.51A10.336 10.336 0 007.818.25C3.037 1.279 1.042 5.334.999 9.911c-.015 4.091 2.026 7.948 6.03 9.382a10.837 10.837 0 009.92-1.639c1.806 1.792 3.442 3.792 5.143 5.678.677.75 1.782-.363 1.108-1.108zM8.853 18.151c-4.1-.7-6.3-4.306-6.287-8.24.03-3.207 1-6.442 4.234-7.719a8.9 8.9 0 0110.033 2.367 8.6 8.6 0 01.89 9.962 8.927 8.927 0 01-8.87 3.63z"/>
                </g>
            </svg>
        </button>
  
    </div>
</template>

<style lang="scss">
    @import '@/assets/styles/app.scss';

    .wrapper_searchbar {
        display: flex;
        padding: 0;
        margin: 0;
        border: 1px solid grey;
        border-radius: 10px;

        svg {
            transform: translateX(15px);
        }

        input, button {
            display: block;
            border: none;
            background-color: white;
            padding: 0;
            margin: 0;
            border-radius: 10px 0 0 10px;
        }

        button {
            border-radius: 0 10px 10px 0;
            // flex-direction: end;
        }

        .searchTerm {
            width: 80%;
        }

        .searchButton {
            width: 20%;
            height: 40px;
        }

        ::placeholder {
            padding-left: 10px;
        }

        svg {
            // fill: $primaryColor;
            fill: black;
            height: 55%;
            position: relative;
        }

        margin-bottom: $biggestMarginBottom;
    }


    @media (min-width: 1000px) {

        .wrapper_searchbar {
            max-width: 500px;
        }
        
    }

</style>