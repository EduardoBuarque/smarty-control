<template>
    <div>
        <div class="panel panel-default" v-for="category in products">
            <div class="panel-heading">{{ category[1].category.name }}
                <slot name="panel-heading"></slot>
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
                        <tr v-for="product in category">
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
        data: function () {
            return {
                products: [],
            }
        },
        created() {
            this.getProducts()
        },
        computed: {
            productsOrder: function (val) {
                return this.products.sort(this.ordenar)
            }
        },
        methods: {
            getProducts (page) {
                let url = '/products'
                if (page)
                    url+= '?page='+page

                this.$http.get(url).then(response => {
                    this.products = this.ordenarAgrupar(response.data)
                });
            },
            ordenarAgrupar (dados) {
                const categoriesIds = dados.reduce((prev, curr) => {
                    if (! prev.includes(curr.category.id))
                        prev.push(curr.category.id)
                    return prev;
                }, [])
                const result = categoriesIds.map(v => {
                    return dados.filter(a => a.category.id == v)
                })
                return result;
            }
        }
    }
</script>