<template>

    <div class="home whole_content_wrapper">

        <h1>Tom's profile!</h1>

        <h3>What Tom has read last</h3>

        <ProfileHasReadIt class="added_margin_bottom"></ProfileHasReadIt>

        <h3>Friends</h3>

        <div class="friends">
            <ProfileFriendsOverview></ProfileFriendsOverview>
        </div>

    </div>

</template>

<script>
    import ProfileHasReadIt from '@/components/ProfileHasReadIt.vue'
    import ProfileFriendsOverview from '@/components/ProfileFriendsOverview.vue'


    export default {
        name: 'Friends',
        components: {
            ProfileHasReadIt,
            ProfileFriendsOverview
        }
    }

</script>

<style lang="scss">
    @import '@/assets/styles/variables.scss';

</style>
