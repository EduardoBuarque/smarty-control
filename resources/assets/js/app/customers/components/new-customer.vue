<template>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="novo-user" class="form-horizontal"  v-on:submit.prevent="onSubmit">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Novo Cliente</h4>
                    </div>

                    <div class="modal-body">
                            <div class="row">
                                <div class="col col-md-12">
                                    <div class="form-group">
                                        <label for="name" class="col-sm-2 control-label">Nome</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" id="name" v-model="customer.name" placeholder="Fulano da Silva" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="phone" class="col-sm-2 control-label">Telefone</label>
                                        <div class="col-sm-9">
                                            <input type="tel" class="form-control" id="phone" v-model="customer.phone" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="address" class="col-sm-2 control-label">Endereço</label>
                                        <div class="col-sm-9">
                                            <input type="tel" class="form-control" id="address" v-model="customer.address" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="city_id" class="col-sm-2 control-label">Cidade</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" name="city_id" id="city_id" v-model="customer.city_id" required>
                                                <option v-for="city in cities" :value="city.id">{{ city.name }}</option>
                                            </select>
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
                customer: { name: '', phone: '', city_id: '', address: ''},
                cities: []
            }
        },
        mounted () {
            this.getCities()
            $('.modal')
                .modal('toggle')
                .on('hidden.bs.modal', e => this.$router.go(-1))
        },
        methods: {
            getCities () {
                this.$http.get('/cities')
                    .then(resolve => resolve.data)
                    .then(data => this.cities = data)
            },
            onSubmit() {
                const _token = document.getElementsByName('csrf-token')[0].content
                this.$http.post('/customers', this.customer, {headers: {'X-CSRF-Token': _token}})
                    .then(resolve => {
                        if (resolve.ok) {

                            this.$notify({
                                title:'Sucesso',
                                text: `Cliente "${this.customer.name}" adicionado com sucesso!`,
                                type: 'success'
                            })

                            $('.modal').modal('toggle')
                        }
                    })
                    .catch(error => {
                        this.$notify({
                            title:'Error',
                            text: 'Algo de errado não está certo!',
                            type: 'error'
                        })

                        $('.modal').modal('toggle')
                    })
            }
        }
    }
</script>