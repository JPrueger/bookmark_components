<template>
  <div class="home whole_content_wrapper">
   
    <h1>Need a new book?</h1>

    <p>We’ve got you covered … well, actually your friends do. See all their recommendations about all kind of books what you have to read next. Keep your list clear and tick off each book you’ve read!
    </p>

    <HomeIllustrationFloatingGirl></HomeIllustrationFloatingGirl>

    <h2>Our book of the month!</h2>  

    <HomeBookOfTheMonth></HomeBookOfTheMonth>

    <p>Just in case you are a fast-reader (as our co-worker Tim is) and you ran out of recommendations! As you do the whole team behind bookmark loves to read, and we will shout out our favorites each month! 
    </p>

    <h3>Author</h3>
    <p>Alexandria LeCarpentier</p>

    <h3>Title</h3>
    <p>Morning</p>

    <h3>Description</h3>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ipsum diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ipsum sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ipsum magna ipsumaliquyam erat, sed diam voluptua.
    </p>

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
