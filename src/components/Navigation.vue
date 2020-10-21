<template>

    <nav id="nav" class="wrapper_navigation">
      <div>     
        <router-link class="nav_link" to="/">
            <img class="logo" src="@/assets/images/logo_bookmark.svg" alt="navigate back to homepage">
        </router-link>
      </div>

      <div class="hamburger hamburger_icon">
            <span></span>
            <span></span>
            <span></span>
      </div>

      <ul class="navigation_content">
            <li>
                <router-link class="nav_link" to="/my-bookmarks">my bookmarks</router-link>
            </li>

            <li>
                <router-link class="nav_link" to="/suggest-book-step-1">suggest book</router-link>
            </li>

            <li>
                <router-link class="nav_link" to="/register">register</router-link>
            </li>

            <li>
                <router-link class="nav_link" to="/login">login</router-link>
            </li>
      </ul>  
   </nav>

</template>

<script> 
    import { TimelineLite } from 'gsap'
    
    export default { 
        methods: {

        },
        
        mounted() { 

            // neue timeline erstellen, pausieren damit die Animation erst auf Click gestartet wird
            var timeline = new TimelineLite({paused: true})

            // Label hinzufügen (um Teile von Icon gleichzeitig zu animieren)
            timeline.add("StartAnimation")

            // navigation_content in var deklarieren
            var navigation_content = document.querySelector('.navigation_content')
            // console.log(navigation_content)

            // hamburger_button in var deklarieren
            var hamburger_button = document.querySelector('.hamburger');
            // console.log(hamburger_button)

            // erstes Span in var deklarieren
            var first_span = hamburger_button.getElementsByTagName('span') [0];
            // console.log(first_span)

            // erstes Span animieren
            timeline.to(first_span, 0.3, {
                delay: 0.1,
                rotation:"-45",
                transformOrigin: "right top",
                x: -3,
                ease: "Power1.easeInOut"
            }, "StartAnimation+0.3")

            // zweites Span in var deklarieren
            var second_span = hamburger_button.getElementsByTagName('span') [1];
            // console.log(second_span)

            // zweites Span animieren
            timeline.to(second_span, 0.2, {
                opacity: 0
            }, "StartAnimation")

            // drittes Span in var deklarieren
            var third_span = hamburger_button.getElementsByTagName('span') [2];
            // console.log(third_span)

            // drittes Span animieren
            timeline.to(third_span, 0.3, {
                rotation:"45",
                transformOrigin: "right top",
                x: 3,
                ease: "Power1.easeInOut"
            }, "StartAnimation+0.3")


            // navigation_content nach Click auf hamburger_icon final platziern
            timeline.to(navigation_content, 0.5, {
                left: 0,
                opacity: 1
            }, "StartAnimation")

            // click event auf hamburger_icon triggern
            document.querySelector('.hamburger_icon').addEventListener("click", function (event) {
                event.preventDefault();
                timeline.reversed() ? timeline.play() : timeline.reverse();            
            });

            // damit sich die Navigation auch nach einem Klick auf einen Menupunkt schließt, müssen alle Nav Punkte in einer var deklariert werden
            var all_navigation_points = document.querySelectorAll('.nav_link');

            // mittels for Schleife alle Nav Punkte durchgehen und Click event triggern
            for(var i = 0; i < all_navigation_points.length; i++){

                all_navigation_points[i].addEventListener("click", function (event) {
                    event.preventDefault();
                    // timeline.reversed() ? timeline.play() : timeline.reverse();  
                    timeline.play() ? timeline.reverse() : timeline.reversed();            
          
                });
            }

        },
            
    } 
</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

   #nav {

    padding-top: 20px;

    margin-bottom: 70px;

    img {
      width: 100px;
    } 


    ul {
        position: absolute;
        top: 100px;
        padding: 0 20px 0 20px;
        width: 100vw;
        left: -100%;
        height: 100vh;
        background-color: white;
        z-index: 3;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 4px 3px rgba(0, 0, 0, 0.24); 

        a {
            font-size: 25px;
            color: black;
            // padding: 0;
            padding: 10px 0 10px 0;

        }
        
        li {
            list-style: none;   
            color: white;
            border-bottom: 1px solid black;
        }
    }


    .navigation_content a {
        display: inline-block;
        padding: 15px 20px;
        text-decoration: none;
        margin-top: 20px;
        margin-bottom: 20px;

        &:hover,
        &.router-link-active {
            font-weight: 900;
            text-decoration: underline;
        }
    }

    .hamburger span {
        display: block;
        margin-bottom: 10px;
        height: 8px;
        width: 50px;
        color: red;
        background-color: black;
        border-radius: 5px;
    }
  }

</style>