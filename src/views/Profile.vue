<template>

    <div class="home whole_content_wrapper">

    <h1>Lisa’s profile!</h1>

    <h2>Edit Profile</h2>

    <h3>What Lisa has read last</h3>

    <OverviewHasReadIt class="added_margin_bottom"></OverviewHasReadIt>

    </div>

</template>

<script>
    import OverviewHasReadIt from '@/components/OverviewHasReadIt.vue'

    export default {
        name: 'Profile',
        components: {
            OverviewHasReadIt,
        }
    }
</script>