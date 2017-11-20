<template>
    <div class="capsula">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span>Pedido</span>
            </div>

            <div class="panel-body">
                <div class="row" v-if="order.customer.id">
                    <div class="col-md-12">
                        <dl class="dl-horizontal">
                            <dt>Nome</dt>
                            <dd>{{ order.customer.name }}</dd>
                            <dt>Telefone</dt>
                            <dd>{{ order.customer.phone }}</dd>
                            <dt>Endereço</dt>
                            <dd>{{ order.customer.address }}</dd>
                            <dt>Cidade</dt>
                            <dd>{{ order.customer.city.name }}</dd>
                        </dl>
                    </div>
                </div>
                <table class="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quant.</th>
                        <th>Val. Unit</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in order.products">
                            <td>{{ product.name }}</td>
                            <td class="text-right">{{ product.quant }}</td>
                            <td class="text-right">{{ product.value }}</td>
                            <td class="text-right">{{ product.value * product.quant  }}</td>
                            <td class="text-right">
                                <button class="btn btn-xs btn-danger" v-on:click="removeProductToOrder(product)">
                                    <i class="glyphicon glyphicon-minus-sign"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="3">Total</th>
                            <td class="text-right">{{ total }}</td>
                            <td class="text-right">
                                <button class="btn btn-xs btn-danger" v-on:click="removeProductsToOrder">
                                    <i class="glyphicon glyphicon-remove-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="3">Taxa</th>
                            <td class="text-right">
                                <template v-if="order.customer.id">
                                    {{ order.customer.city.taxa }}
                                </template>
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <th colspan="3">Total + Taxa</th>
                            <td class="text-right">
                                <template v-if="order.customer.id">
                                    {{ total + order.customer.city.taxa * 1 }}
                                </template>
                                <template v-else="order.customer.id">
                                    {{ total }}
                                </template>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="panel-footer text-right">
                <button class="btn btn-default btn-xs" v-if="order.customer.id" v-on:click="cancelOrder">Cancelar</button>
                <button class="btn btn-primary btn-xs" v-else="" v-on:click="cancelOrder">Cliente</button>

                <button class="btn btn-success btn-xs"
                        :disabled="order.customer.id && order.products ? false : true"
                        v-on:click="finalizar">
                    Finalizar
                </button>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form class="form-horizontal"  v-on:submit.prevent="toOrder">

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
                                            <input type="text" class="form-control" id="name" placeholder="Fulano da Silva" required>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="reset" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-primary">Adicionar</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'

    export default {
        mounted() {
            $('.modal').modal('toggle')
        },
        computed: {
            ...mapGetters({ order: 'getOrder' }),
            total: function (val) {
                return this.order.products.reduce((prev, curr) => prev += curr.value * curr.quant, 0)
            }
        },
        methods: {
            ...mapActions([
                'removeProductsToOrder',
                'removeProductToOrder',
                'cancelOrder',
                'addCustomerToOrder'
            ]),
            toOrder (custumer) {
                const name = custumer.target.name.value
                console.log(name)
                this.addCustomerToOrder({
                    name,
                    address: "",
                    city:{id: 2, name: "Kautzerhaven", taxa: "4.27"},
                    city_id:2,
                    created_at:"2017-11-15 19:58:26",
                    id:1,
                    phone: "1-844-998-0703"
                })
            },
            finalizar() {
                const _token = document.getElementsByName('csrf-token')[0].content
                this.$http.post('/orders', this.order, {headers: {'X-CSRF-Token': _token}})
                    .then(resolve => {
                        /// finalixar metodo
                    })
            },
        }
    }
</script>

<style scoped>
    #modal-input {
        margin-bottom: 0;
    }
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>