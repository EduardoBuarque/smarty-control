<template>
    <div class="panel panel-default">
        <div class="panel-heading">Usuários
            <slot name="panel-heading"></slot>
        </div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th class="text-right">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in pagination.data">
                        <td>
                            <router-link :to="'users/'+user.id">{{ user.name }}</router-link>
                        </td>
                        <td>
                            {{ user.email }}
                        </td>
                        <td>
                            {{ user.profile.name }}
                        </td>
                        <td class="text-right">

                            <a v-if="user.account_status" class="btn btn-default btn-success btn-xs">
                                <i class="glyphicon glyphicon-ok"></i>
                            </a>
                            <a v-else="" class="btn btn-default btn-danger btn-xs">
                                <i class="glyphicon glyphicon-ban-circle"></i>
                            </a>

                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <sc-pagination :source="pagination" @navigate="navigate"></sc-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import ScPagination from '../../../components/sc-pagination'
    import ScModal from '../../../components/sc-modal'

    export default {
        data: function () {
            return {
                pagination: [],
            }
        },
        components: {
            ScPagination,
            ScModal
        },
        created() {
            this.getUsers();
        },
        methods: {
            navigate (page) {
                this.getUsers(page)
            },
            getUsers (page) {
                let url = '/users'
                if (page)
                    url+= '?page='+page

                this.$http.get(url).then(response =>
                    this.pagination = response.data);
            },
        }
    }
</script>
<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>