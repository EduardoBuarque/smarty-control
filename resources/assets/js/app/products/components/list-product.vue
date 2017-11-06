<template>
    <div>
        <div class="panel panel-default" v-for="category in categories">
            <div class="panel-heading">{{ category.name }}
                <router-link to="products/new/category.name" class="btn btn-primary btn-xs">Novo</router-link>
            </div>

            <div class="panel-body">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Custo</th>
                            <th>Venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in category.products">
                            <td>
                                <router-link :to="'products/'+product.id">{{ product.name }}</router-link>
                            </td>
                            <td class="text-right">{{ product.cost }}</td>
                            <td class="text-right">{{ product.value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['lista'],
        data: function () {
            return {
            }
        },
        created() {
//            this.getProducts()
        },
        computed: {
            categories: function (val) {
                return this.lista
            }
        },
        methods: {
//            getProducts (page) {
//                let url = '/products'
//                if (page)
//                    url+= '?page='+page
//
//                this.$http.get(url).then(response => {
//                    this.products = this.ordenarAgrupar(response.data)
//                });
//            },
//            ordenarAgrupar (dados) {
//                const categoriesIds = dados.reduce((prev, curr) => {
//                    if (! prev.includes(curr.category.id))
//                        prev.push(curr.category.id)
//                    return prev;
//                }, [])
//                const result = categoriesIds.map(v => {
//                    return dados.filter(a => a.category.id == v)
//                })
//                return result;
//            }
        }
    }
</script>

<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>