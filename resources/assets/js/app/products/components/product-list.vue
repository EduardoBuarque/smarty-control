<template>
    <div class="panel panel-default">
        <div class="panel-heading">Produtos
            <slot name="panel-heading"></slot>
        </div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Custo</th>
                        <th>Venda</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in pagination.data">
                        <td>
                            <router-link to="casa">{{ product.name }}</router-link>
                        </td>
                        <td class="text-right">{{ product.cost }}</td>
                        <td class="text-right">{{ product.value }}</td>
                        <td>{{ product.category.name }}</td>
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
    import ScModal from '../../../components/sc-modal'

    export default {
        data: function () {
            return {
                pagination: [],
            }
        },
        components: {
            ScPagination,
            ScModal
        },
        created() {
            this.getUsers();
        },
        methods: {
            navigate (page) {
                this.getUsers(page)
            },
            getUsers (page) {
                let url = '/products'
                if (page)
                    url+= '?page='+page

                this.$http.get(url).then(response => this.pagination = response.data);
            },
        }
    }
</script>