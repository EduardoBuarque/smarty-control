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
        <button @click="changeUserDb({ name: 'Alecio' })">Mudar nome</button>
    </div>
</template>

<script>
    import UserList from './user-list'
    import { mapActions } from 'vuex'

    export default {
        data () {
            return { openModal: false }
        },
        components: { UserList },
        methods: {
            ...mapActions(['changeUserDb']),
        }
    }
</script>