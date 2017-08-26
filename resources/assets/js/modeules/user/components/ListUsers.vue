<template>
    <div class="panel panel-default">
        <div class="panel-heading">Usuários</div>

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
                    <tr v-for="user in users">
                        <td>
                            <router-link to="/bar">{{ user.name }}</router-link>
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
                            <a v-else class="btn btn-default btn-danger btn-xs">
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