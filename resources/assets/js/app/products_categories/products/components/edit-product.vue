<template>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form id="novo-user" class="form-horizontal"  v-on:submit.prevent="onSubmit">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Novo Produto "{{ category.name }}"</h4>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col col-md-12">
                                <div class="form-group has-feedback" :class="{ 'has-error': existProduct }">
                                    <label for="name" class="col-sm-2 control-label">Nome</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control" id="name" v-on:input="oninput" v-model="product.name" placeholder="Pizzas" autocomplete="off" required>
                                        <span class="glyphicon form-control-feedback" :class="{ 'glyphicon-remove': existProduct }"></span>
                                        <span v-if="existProduct" class="help-block">Essa produto já existe em "{{ category.name }}"!</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="cost" class="col-sm-2 control-label">Custo</label>
                                    <div class="col-sm-9">
                                        <input type="number" step="any" min="0" class="form-control" id="cost" v-model="product.cost" placeholder="3.50">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="value" class="col-sm-2 control-label">Value</label>
                                    <div class="col-sm-9">
                                        <input type="number" step="any" min="0" class="form-control" id="value" v-model="product.value" placeholder="3.50">
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
                product: { id: '', name: '', cost: '', value: ''},
                category: {},
                existProduct: false
            }
        },
        mounted () {
            const id_cat = this.$route.params['id_cat']
            const id_pro = this.$route.params['id']

            const selectCat = i => i.id == id_cat
            const selectPro = i => i.id == id_pro

            this.category = this.categories.find(selectCat)
            this.product = this.category.products.find(selectPro)

            $('.modal')
                .modal('toggle')
                .on('hidden.bs.modal', e => this.$router.go(-1))
        },
        computed: {
            ...mapGetters({ categories: 'getCategories' }),
        },
        methods: {
            ...mapActions(['editProduct']),
            oninput(event) {
                const value = event.target.value

                const names = i => i.name
                const different = i => i.id !== this.product.id

                this.existProduct = this.category.products.filter(different).map(names).includes(value)
            },
            onSubmit() {
                if (this.existProduct) return

                const _token = document.getElementsByName('csrf-token')[0].content

                const { id } = this.product

                this.$http.put('/products/'+ id, this.product, {headers: {'X-CSRF-Token': _token}})
                    .then(resolve => {
                        if (resolve.ok) {
//                            Object.assign(this.product, resolve.data)
                            this.editProduct(resolve.data)

                            this.$notify({
                                title:'Sucesso',
                                text: `Produto "${this.product.name}" alterada com sucesso!`,
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
            },
        }
    }
</script>