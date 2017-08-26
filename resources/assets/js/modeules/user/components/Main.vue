<template>
    <div class="row">
        <div class="col-md-12">
            <list-users></list-users>
        </div>
    </div>
</template>

<script>
    import ListUsers from './ListUsers.vue';

    export default {
        components: { ListUsers }
    }
</script>