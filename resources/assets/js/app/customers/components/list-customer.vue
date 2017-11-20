<template>
    <div class="panel panel-default">
        <div class="panel-heading">Clientes
            <slot name="panel-heading"></slot>
        </div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in pagination.data">
                        <td>
                            <button v-on:click="toOrder(customer)" class="btn btn-xs btn-link">
                                <i class="glyphicon glyphicon-shopping-cart"></i>
                            </button>
                        </td>
                        <td><router-link :to="'customers/'+customer.id+'/edit'">{{ customer.name }}</router-link></td>
                        <td>{{ customer.phone }}</td>
                        <td>{{ customer.city.name }}</td>
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

    import { mapActions } from 'vuex'
    import ScPagination from '../../../components/sc-pagination'

    export default {
        data: function () {
            return {
                pagination: []
            }
        },
        components: { ScPagination },
        created() {
            this.getCustomers();
        },
        methods: {
            ...mapActions(['addCustomerToOrder']),
            toOrder (custumer) {
                this.addCustomerToOrder(custumer)
                this.$router.push('/orders')
            },
            navigate (page) {
                this.getCustomers(page)
            },
            getCustomers (page) {
                let url = '/customers'
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