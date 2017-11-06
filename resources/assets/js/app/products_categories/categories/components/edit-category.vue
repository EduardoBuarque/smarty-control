<template>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="novo-user" class="form-horizontal"  v-on:submit.prevent="onSubmit">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Editar Categoria</h4>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col col-md-12">
                                <div class="form-group has-feedback" :class="{ 'has-error': existCategory }">
                                    <label for="name" class="col-sm-2 control-label">Nome</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Pizzas" autocomplete="off" required>
                                        <span class="glyphicon form-control-feedback" :class="{ 'glyphicon-remove': existCategory }"></span>
                                        <span v-if="existCategory" class="help-block">Essa categoria já existe!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        data () {
            return {
                id: '',
                name: '',
                existCategory: false
            }
        },
        mounted () {
            const id_param = this.$route.params['id']

            const { id, name } = this.categories.find(i => i.id == id_param)

            this.id = id
            this.name = name

            $('.modal')
                .modal('toggle')
                .on('hidden.bs.modal', e => console.log(this.$router.go(-1)))
        },
        computed: {
            ...mapGetters({ categories: 'getCategories' }),
        },
        watch: {
            name: function (val) {

                const names = i => i.name
                const different = i => i.id !== this.id

                this.existCategory = this.categories.filter(different).map(names).includes(val)
            }
        },
        methods: {
            ...mapActions(['editCategory']),
            onSubmit() {
                if (!this.existCategory) {

                    const _token = document.getElementsByName('csrf-token')[0].content

                    const [id, name] = [this.id, this.name]

                    this.$http.put('/categories/'+id, { id, name }, {headers: {'X-CSRF-Token': _token}})
                        .then(resolve => {
                            if (resolve.ok) {
                                this.editCategory({ id, name })

                                this.$notify({
                                    title:'Sucesso',
                                    text: `Categoria "${this.name}" alterada com sucesso!`,
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
            },
        }
    }
</script>