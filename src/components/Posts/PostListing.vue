<template>
    <div>
        <div class="container post-listing-wrapper">
            <h1>Meine Posts</h1>

            <PostListingItem 
                v-for="post in posts"
                v-bind:key="post.id" 
                v-bind:post="post"
            />
        </div>

        <div class="container new-form">
            <h2>Neuer Post</h2>

            <form action="#" v-on:submit="createPost">
                <input type="text" class="input" v-model="newPost.title" placeholder="Titel" />
                <input type="text" class="input" v-model="newPost.teaser" placeholder="Teaser" />

                <textarea v-model="newPost.content" class="input" placeholder="Content"></textarea>

                <input type="submit" class="btn btn-success" value="Speichern" />
            </form>
        </div>
  </div>
</template>

<script>
import PostListingItem from '@/components/Posts/PostListingItem';
import postDataService from '@/services/postDataService';

export default {
  name: 'PostListing',
  data: () => ({
      newPost: {
          title: '',
          teaser: '',
          content: '',
      },
      posts: [],
  }),
  components: {
    PostListingItem
  },
  methods: {
      createPost: function(e) {
          // das "Standardverhalten" von form-submit verhindern (sonst würde die Seite neu laden)
          e.preventDefault();

          // nun speichern wir hier die Funktion über unseren abstrahierten Service (postDataService)
          postDataService.store(this.newPost)
                         .then((newPostList) => {
                             // nun, da wir das erfolgreiche Ergebnis von der API erhalten haben, aktualisieren wir unsere Komponenten Variable
                             this.posts = newPostList;
                         });

          // Formulardaten auf leere zurücksetzen
          this.newPost = {
              title: '',
              teaser: '',
              content: '',
          };
      },
  },
  // wenn die Komponente lädt, sollen alle Einträge von der API geladen werden
  created() {
      postDataService.index()
                     .then((allPosts) => {
                         // jetzt, da das Versprechen eingelöst wird und wir alle Posts haben, übergeben wir diese an unsere Komponeten Variable "this.posts", damit es gerendered wird.
                         this.posts = allPosts;
                     });
  }
}
</script>

<style lang="scss" scope>
    @import '@/assets/styles/variables.scss';

    .post-listing-wrapper {
        margin-top:40px;
        margin-bottom:40px;
    }

    .new-form {
        margin-top:60px;
        box-sizing: border-box;
        margin-bottom:60px;
        background-color:$secondaryColor;
        padding:20px 30px;
        border-radius:7px;
        box-shadow:0 0 7px rgba(0, 0, 0, 0.1);

        h2 {
            color:#fff;
            margin:0 0 15px 0;
        }

    }
</style>
