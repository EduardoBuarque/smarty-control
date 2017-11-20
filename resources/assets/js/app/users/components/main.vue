<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <user-list>
                    <span slot="panel-heading">
                        <router-link to="/users/new" class="btn btn-primary btn-xs">Novo</router-link>
                    </span>
                </user-list>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import UserList from './user-list'

    export default {
        data () {
            return { openModal: false }
        },
        components: { UserList }
    }
</script>