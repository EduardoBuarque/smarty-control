<template>
    <div>
        <div class="panel panel-default" v-for="order in orders">
            <div class="panel-heading">{{ order.customer.name }}</div>

            <div class="panel-body">
                <div class="row" v-if="order.customer.name">
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
                            <th>Quant</th>
                            <th>Valor Unit</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in order.products">
                            <td>
                                <router-link :to="'products/'+product.id">{{ product.name }}</router-link>
                            </td>
                            <td class="text-right">{{ product.pivot.quant }}</td>
                            <td class="text-right">{{ product.value }}</td>
                            <td class="text-right">{{ product.value * product.pivot.quant }}</td>
                        </tr>
                        <tr>
                            <th colspan="3">Total</th>
                            <td class="text-right">{{ total(order.products) }}</td>
                        </tr>
                        <tr>
                            <th colspan="3">Taxa</th>
                            <td class="text-right">
                                {{ order.customer.city.taxa }}
                            </td>
                        </tr>
                        <tr>
                            <th colspan="3">Total + Taxa</th>
                            <td class="text-right">
                                {{ total(order.products) + order.customer.city.taxa * 1 }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['lista'],
        data() {
            return {
                orders: []
            }
        },
        created() {
            this.getOrder()
        },
        methods: {
            ...mapActions(['addProductToOrder']),
            total(products) {
                return products.reduce((prev, curr) => prev += curr.value * curr.pivot.quant, 0)
            },
            getOrder (page) {
                this.$http.get('/orders').then(response => {
                    this.orders = response.data
                });
            }
        }
    }
</script>

<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>