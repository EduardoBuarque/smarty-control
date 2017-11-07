<template>
    <div>
        <!--{{ categories || json }}-->
        <div class="panel panel-default" v-for="category in getCategories">
            <div class="panel-heading">{{ category.name }}
                <router-link :to="'products/new/'+category.id" class="btn btn-primary btn-xs">Novo</router-link>
            </div>

            <div v-if="count(category.products)" class="panel-body">
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

    import { mapGetters } from 'vuex'

    export default {
        data: function () {
            return {
//                categories: [],
            }
        },
        created() {

//            this.categories = this.getCategories;
        },
        computed: {
//            getCategories() {
//                return this.$store.state.products_categories.getCategories();
//            }
            ...mapGetters([
                'getCategories'
            ]),
//            ...mapState({
//                categories: state => state.products_categories.categories
//            })
        },
        methods: {
            count: (val) => Array.isArray(val) ? val.length : 0
        },
        filters: {
            count: (val) => Array.isArray(val) ? val.length : 0
        }
    }
</script>

<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>