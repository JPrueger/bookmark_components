<template>
    <div class="home whole_content_wrapper">

        <h1>Lisa’s profile!</h1>

        <a href="">
            <div class="wrapper_edit_profile">
                <svg viewBox="0 0 25.973 25.973">
                    <path d="M25.362 10.029l-2-.434a10.865 10.865 0 00-.642-1.549l1.105-1.719a.776.776 0 00-.1-.968l-3.11-3.11a.776.776 0 00-.968-.1l-1.72 1.101a10.864 10.864 0 00-1.549-.642l-.434-2A.776.776 0 0015.185 0h-4.4a.776.776 0 00-.758.611l-.434 2a10.864 10.864 0 00-1.549.642L6.327 2.145a.776.776 0 00-.968.1l-3.11 3.11a.776.776 0 00-.1.968L3.25 8.046A10.864 10.864 0 002.607 9.6l-2 .434a.776.776 0 00-.607.753v4.4a.776.776 0 00.611.758l2 .434a10.864 10.864 0 00.642 1.549l-1.108 1.718a.776.776 0 00.1.968l3.11 3.11a.776.776 0 00.968.1l1.719-1.105a10.865 10.865 0 001.549.642l.434 2a.776.776 0 00.758.611h4.4a.776.776 0 00.758-.611l.434-2a10.865 10.865 0 001.549-.642l1.719 1.105a.776.776 0 00.968-.1l3.11-3.11a.776.776 0 00.1-.968l-1.105-1.719a10.865 10.865 0 00.642-1.549l2-.434a.776.776 0 00.611-.758v-4.4a.776.776 0 00-.607-.757zm-7.719 2.957a4.656 4.656 0 11-4.657-4.656 4.662 4.662 0 014.657 4.656zm0 0"/>
                </svg>
        
                <h2>Edit Profile</h2>
            </div>
        </a>

        <h3>What Lisa has read last</h3>

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
        name: 'Profile',
        components: {
            ProfileHasReadIt,
            ProfileFriendsOverview
        }
    }
</script>
