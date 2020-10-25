<template>
  <div class="home whole_content_wrapper">
    <div class="wrapper_floating_girl">

      <div>
        <h1>Looking for a new book?</h1>

        <p>We’ve got you covered! Well, actually your friends do. Get yourself an overview of all recommendations your friends gave you about the book you need to read next. Keep your list clear and tick off each book you’ve read!
        </p>

        <p>All you need to do is register <a href="/register">here!</a></p>
      </div>

      <HomeIllustrationFloatingGirl></HomeIllustrationFloatingGirl>

    </div>

    <h2>Our book of the month!</h2> 
    
    <p>Just in case you are a fast-reader (as our co-worker Tim is) and you ran out of recommendations! As you do the whole team behind bookmark loves to read, and we will shout out our favorites each month! 
    </p> 

    <div class="wrapper_book_of_the_month">
      <HomeBookOfTheMonth></HomeBookOfTheMonth>
    </div>

  </div>
</template>

<script>
  import HomeIllustrationFloatingGirl from '@/components/HomeIllustrationFloatingGirl.vue'
  import HomeBookOfTheMonth from '@/components/HomeBookOfTheMonth.vue'

  export default {
    name: 'Home',
    components: {
      HomeIllustrationFloatingGirl,
      HomeBookOfTheMonth
    }
  }
</script>

<style lang="scss">

  .wrapper_book_of_the_month {
    margin-bottom: 15%;
    max-width: 1500px;
  }

  @media (min-width: 650px){
    
    .floating_illu  {
      display: block;
      width: 90%;
    }
      
    .illustration_floating_girl {
      transform: translateX(30px);
    }

  }

  @media (min-width: 1200px){
    
    .wrapper_book_of_the_month {
      display: flex;
      justify-content: space-between;
      margin-top: 10%;
    }

    .illustration_floating_girl {
      width: 75%;
      // transform: translateY(10%);
      // top: 20%;
    }

    .wrapper_floating_girl {
      display: flex;
      margin-bottom: 80px;
    }

  }

</style>
