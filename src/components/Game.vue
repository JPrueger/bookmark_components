<template>

  <div class="wrapper_all_blobs">

    <label class="get_all_blobs">
      <input type="radio">
      <svg class="blob blob_top" viewBox="0 0 224.8 229.3">
        <path d="M220.7 146.7C253.9-10 79-44.4 24.5 59.2-30 162.9 14.9 219 77.9 227.3c72.8 9.5 118.8-14.3 142.8-80.6z" fill="#c1004e"/>
      </svg>
    </label>
    
    <p class="blob_top_text">
      May we introduce you <br>
      our favorite author <br>
      of the month instead? <br>
      <b> 
        <a href="/test">Brett Archibald</a>
      </b>
    </p>

  </div>

</template>

<style lang="scss">
  @import '@/assets/styles/variables.scss';

  // TODO: LINK AUF FAV AUTOR
  
  .wrapper_all_blobs {

    .blob {
      width: 80%;
      position: relative;
      display: block;
      margin: 0 auto;
      margin-bottom: 70px;
    }

    p {
      position: absolute;
      text-align: center;
      width: 100%;
      top: 90%;
      z-index: -1;
    }

  }

  input[type="radio"]{
    opacity:0.001; 
    
    &:checked{
      ~ .blob  {
        visibility: hidden;
        z-index: -500;
      }
    }
  }
  
</style>

<script>

  export default {
      name: 'Game'
  }
   
</script>