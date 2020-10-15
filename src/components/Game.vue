<template>

  <div class="wrapper_all_blobs">

    <label class="get_all_blobs">
      <input type="radio">
      <svg class="blob blob_top" viewBox="0 0 224.8 229.3">
        <path d="M220.7 146.7C253.9-10 79-44.4 24.5 59.2-30 162.9 14.9 219 77.9 227.3c72.8 9.5 118.8-14.3 142.8-80.6z" fill="#c1004e"/>
      </svg>
      <p class="blob_top_text"> <b>Sorry.</b> <br> Try another one!</p>
    </label>

    <label class="get_all_blobs">
      <input type="radio">
      <svg class="blob blob_center" viewBox="0 0 206.8 233.8">
        <path d="M204.2 153.3C228.1 93.4 82.7-64.6 28.2 29c-54.5 93.7-22.5 176.6 33.2 197.1 68 24.9 118.8-12.9 142.8-72.8z" fill="#c1004e"/>
      </svg>
      <p class="blob_center_text">Still not!</p>
    </label>

    <label class="get_all_blobs">
      <input type="radio">
      <svg class="blob blob_right" viewBox="0 0 206.8 233.8">
        <path d="M204.2 153.3C228.1 93.4 82.7-64.6 28.2 29c-54.5 93.7-22.5 176.6 33.2 197.1 68 24.9 118.8-12.9 142.8-72.8z" fill="#c1004e"/>
      </svg>
      <p class="blob_right_text"><b>You got it! </b> <br> Our Fav: <br> Brett Archibald
      </p>
    </label>

    <!-- <label class="get_all_blobs">
      <input type="radio">
      <svg class="blob blob_left" viewBox="0 0 222.4 265.4">
        <path d="M132.9 265.1c63.7 11 144.2-216.2 37.4-254.4S-27.5 44.2 7.7 111.9 69.2 254 132.9 265.1z" fill="#c1004e"/>
      </svg>
      <p class="blob_left_text">It's not here!</p>
    </label> -->
  </div>

</template>

<style lang="scss">

  // .blob_top {
  //   right: 0;
  //   left: 0;
  //   top: 10px;
  // }

  // .blob_top_text {
  //   position: absolute;
  //   top: 50%;
  //   left: 0;
  //   z-index: -1;
  // }

  // .blob_center {
  //   right: -60%;
  //   top: -20px;
  // }

  // .blob_center_text {
  //   position: absolute;
  //   top: 40%;
  //   left: 0;
  //   right: -100%;
  //   z-index: -1;
  // }

  // .blob_right {
  //   right: -30%;
  //   top: -20px;
  // }

  // .blob_right_text {
  //   position: absolute;
  //   top: 20%;
  //   left: 20%;
  //   right: -50%;
  //   z-index: -1;
  // }

  // .blob_left {
  //   right: -50%;
  //   top: -20px;
  // }


  // .blob_left_text {
  //   position: absolute;
  //   top: 40%;
  //   left: 20%;
  //   right: -100%;
  //   z-index: -1;
  // }

  // svg {
  //   width: 200px;
  // }

  // .get_all_blobs {
  //     text-align: center;
  //     position: relative;
  //     display: inline-block;
  //     margin-bottom: 100px;
      
  //     .blob {
  //       position: relative;
  //     }
      
  //     input[type="radio"]{
  //         position:absolute;
  //         opacity:0.001; 
          
  //         &:checked{
  //         ~ .blob {
  //           visibility:hidden;
  //         }
  //       }
  //     }
  //   }


  @media (min-width: 1200px){


  // .get_all_blobs, .blog {
  //   position: static;
  // }
    
    .blob {
      position: static;
    }

    .wrapper_all_blobs {
      display: flex;
      justify-content: space-between;
    }

    .blob_top {
      right: -20%;
    }

    .blob_top_text {
      top: 35%;
      left: -15px;
    }

    .blob_center {
      right: -60%;
      top: -20px;
    }

    .blob_right {
      right: -90%;
      top: -20px;
    }

    .blob_right_text {
      top: 20%;
      // left: -100%;
      right: -100%;
    }

    .blob_left {
      right: -50%;
      top: -20px;
    }

    .blob_left_text {
      position: absolute;
      top: 40%;
      left: 20%;
      right: -100%;
      z-index: -1;
    }

  }
</style>

<script>

  export default {
      name: 'Game'
  }
   
</script>