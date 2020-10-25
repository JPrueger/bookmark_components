<template>

  <div class="wrapper_all_blobs">
    <div class="label">
        <label class="get_all_blobs">
        <input type="radio">
        <svg class="blob blob_top" viewBox="0 0 224.8 229.3">
          <path d="M220.7 146.7C253.9-10 79-44.4 24.5 59.2-30 162.9 14.9 219 77.9 227.3c72.8 9.5 118.8-14.3 142.8-80.6z" fill="#c1004e"/>
        </svg>
      </label>
    </div>

    <div class="blob_top_text text">
      <p>
        May we introduce you <br>
        our favorite author <br>
        of the month instead? <br>
        <b> 
          <a href="/test">Brett Archibald</a>
        </b>
      </p>
    </div>
  </div>

</template>

<script>

  export default {
      name: 'NotFoundHiddenAuthor'
  }
   
</script>

<style lang="scss">
  @import '@/assets/styles/variables.scss';

  .wrapper_all_blobs {
    position: relative;
    height: 400px;
  }

  .blob {
    position: absolute;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    max-height: 400px;
  }

  .text {
    position: absolute;
    height: 200px;
    z-index: -1;
    text-align: center;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    top:0;
    bottom:0;
    margin-top:auto;
    margin-bottom:auto;
    width: 70%;
  }

  // TODO: LINK AUF FAV AUTOR


  input[type="radio"]{
    opacity:0.001; 
    
    &:checked{
      ~ .blob  {
        visibility: hidden;
        z-index: -500;
      }
    }
  }


@media (min-width: 650px) {

  .text {
      width: 50%;
    }
        
  }
 
</style>
