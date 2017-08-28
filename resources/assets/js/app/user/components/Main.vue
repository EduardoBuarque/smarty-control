<template>
    <div class="row">
        <div class="col-md-12">
            <list-users></list-users>
            <!--<app-pagination></app-pagination>-->
            <!--<pre>{{  }}</pre>-->
        </div>
    </div>
</template>

<script>
    import ListUsers from './ListUsers.vue';
    import http from '../../../http'
//    import AppPagination from '../../../components/pagination.vue'

    export default {
        components: {
            ListUsers,
//            AppPagination
        },

        mounted () {
//            http.get('/user')
//                .then(response => response.data)
//                .then(data => {
//                    console.log(data)
//                })
        }
    }
</script>