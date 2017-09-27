<template>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="novo-user" class="form-horizontal"  v-on:submit.prevent="onSubmit">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Novo Usuário</h4>
                </div>

                    <div class="modal-body">
                            <div class="row">
                                <div class="col col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="col-sm-2 control-label">Nome</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Fulano da Silva" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="col-sm-2 control-label">E-mail</label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" id="email" v-model="user.email" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="profile_id" class="col-sm-2 control-label">Perfil</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" name="profile_id" id="profile_id" v-model="user.profile_id">
                                                <option v-for="profile in profiles" :value="profile.id">{{ profile.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="account_status" class="col-sm-2 control-label">Status</label>
                                        <div class="col-sm-9">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" id="account_status" checked v-model="user.account_status">Ativo
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</template>

<script>

    export default {
        data () {
            return {
                user: {name: '', email: '', profile_id: 2, account_status: true},
                profiles: []
            }
        },
        mounted () {
            this.getProfiles()
            $('.modal')
                .modal('toggle')
                .on('hidden.bs.modal', e => console.log(this.$router.go(-1)))
        },
        methods: {
            getProfiles () {
                this.$http.get('/profiles')
                    .then(resolve => resolve.data)
                    .then(data => this.profiles = data)
            },
            onSubmit() {
                const _token = document.getElementsByName('csrf-token')[0].content
                this.$http.post('/customers', this.user, {headers: {'X-CSRF-Token': _token}}).then(resolve => console.log(resolve))
            },
            checkEmail () {
                //
            }
        }
    }
</script>