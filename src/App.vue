<template>
  <div>

    <div id="nav" class="whole_content_wrapper wrapper_navigation">
      <div>     
        <img src="@/assets/images/logo_bookmark.svg" alt="navigate back to homepage">
      </div>

      <svg class="burger_icon" enable-background="new 0 0 45.3 38.2" viewBox="0 0 45.3 38.2" xmlns="http://www.w3.org/2000/svg"> 
          <path d="m2.6 5.4h40.1c1.5 0 2.6-1.2 2.6-2.7s-1.2-2.7-2.6-2.7h-40.1c-1.4 0-2.6 1.2-2.6 2.7s1.2 2.7 2.6 2.7zm40.1 11h-40.1c-1.5 0-2.6 1.2-2.6 2.7s1.2 2.7 2.6 2.7h40.1c1.5 0 2.6-1.2 2.6-2.7s-1.1-2.7-2.6-2.7zm0 16.4h-40.1c-1.4 0-2.6 1.2-2.6 2.7s1.2 2.7 2.6 2.7h40.1c1.5 0 2.6-1.2 2.6-2.7s-1.1-2.7-2.6-2.7z"/>
      </svg>   
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/my-bookmarks">MyBookmarks</router-link> -->
    </div>

    <div class="blob_bg">

      <!-- <div class="bg_blob_left">
          <img src="@/assets/images/bg_blob_left.svg" alt="background_blob">
      </div> -->

      <div class="bg_blob_right">
          <img src="@/assets/images/bg_blob_right.svg" alt="background_blob">
      </div> 

    </div>

    <router-view/>

    <div id="footer" class="whole_content_wrapper">
      <a href="#">login</a>
      <a href="#">terms of service</a>
      <a href="#">privacy policy</a>
      <a href="#">© 2020 bookmark.</a>
    </div>

  </div>
</template>

<style lang="scss" src="@/assets/styles/app.scss"></style>
<style lang="scss">
  @import '@/assets/styles/variables.scss';
  
  .wrapper_navigation {
    display: flex;
    justify-content: space-between;
  }

  #nav {

    padding-top: 20px;

    margin-bottom: $headlineMarginBottom;

    img {
      width: 100px;
    }

    a {
      display:inline-block;
      padding:15px 20px;
      color:$fontColor1;
      text-decoration:none;
      text-transform:uppercase;

      &:hover,
      &.router-link-active {
        font-weight: 900;
        text-decoration: underline;
      }
    }

    .burger_icon {
      width: 50px;
    }
  }

  #footer a {
    text-decoration: none;
    color: black;
    display: block;
    margin-bottom: 50px;
    

    &:last-child {
      margin-bottom: 70px;
    }
  }

</style>
