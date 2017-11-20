<template>
    <div>
        <div class="panel panel-default" v-for="category in categories">
            <div class="panel-heading">{{ category.name }}</div>

            <div class="panel-body">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in category.products">
                            <td>
                                <router-link :to="'products/'+product.id">{{ product.name }}</router-link>
                            </td>
                            <td class="text-right">{{ product.value }}</td>
                            <td class="text-right">
                                <button class="btn btn-primary btn-xs" v-on:click="addProductToOrder(product)"><i class="glyphicon glyphicon-plus-sign"></i></button>
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
        data: function () {
            return {
            }
        },
        created() {
//            this.getProducts()
        },
        computed: {
            categories: function (val) { return this.lista }
        },
        methods: {
            ...mapActions(['addProductToOrder']),
//            addCart(product) {
//                this.$emit('add-cart', product)
//                console.log(product)
//            }
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