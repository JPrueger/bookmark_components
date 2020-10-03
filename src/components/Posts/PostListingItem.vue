<template>
  <div class="item-wrapper">
    <h2>
        <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
            {{post.title}}
        </router-link>
    </h2>

    <div class="teaser">
        {{post.teaser}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostListingItem',
  props: {
      post: Object,
  },
}
</script>

<style lang="scss" scope>
    @import '@/assets/styles/variables.scss';

    .item-wrapper {
        background:$boxColor;
        box-shadow:0 0 7px rgba(0, 0, 0, 0.1);
        padding:20px 30px;
        border-radius:5px;
        margin-bottom:40px;

        h2 {
            margin:0;
            padding:0;
        }

        .teaser {
            padding:10px 0;
            font-size:0.9em;
            color:$fontColorLight1;
        }
    }

</style>
