<template>
    <div class="panel panel-default">
        <div class="panel-heading">Clientes</div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in pagination.data">
                        <td><router-link to="/bar">{{ customer.name }}</router-link></td>
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