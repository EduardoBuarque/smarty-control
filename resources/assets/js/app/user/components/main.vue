<template>
    <div class="row">
        <div class="col-md-12">
            <user-list>
                <span slot="panel-heading">
                    <button type="button" class="btn btn-primary btn-xs" @click="openModal = !openModal">Novo</button>
                </span>
            </user-list>
            <new-user :toggle="openModal" @is-shown="mdIsShown"></new-user>
        </div>
    </div>
</template>

<script>
    import UserList from './user-list'
    import NewUser from './new-user'

    export default {
        data () {
            return { openModal: false }
        },
        components: { UserList, NewUser },
        methods: {
            mdIsShown (isShown) {
                this.openModal = isShown;
            }
        }
    }
</script>