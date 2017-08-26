<template>
    <div class="panel panel-default">
        <div class="panel-heading">Usuários</div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users">
                    <td>
                        <router-link to="/bar" v-if="user.account_status">{{ user.name }}</router-link>
                        <template v-else="user.account_status">{{ user.name }}</template>
                    </td>
                    <td>
                        {{ user.email }}
                    </td>
                    <td class="text-right">
                        <a href="" class="btn btn-default btn-success btn-xs" v-if="user.account_status">
                            <i class="glyphicon glyphicon-ok"></i>
                        </a>
                        <a href="" class="btn btn-default btn-danger btn-xs" v-else>
                            <i class="glyphicon glyphicon-ban-circle"></i>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                users: []
            }
        },
        created() {
            this.$http.get('/user').then(response => {

                this.users = response.data.data;

            }, response => {

                console.log(response);

            });
        }
    }
</script>