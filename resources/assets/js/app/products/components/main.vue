<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active">
                        <a role="tab" data-toggle="tab" v-on:click="active = 'products'">Produtos</a>
                    </li>
                    <li role="presentation">
                        <a role="tab" data-toggle="tab" v-on:click="active = 'categories'">Categorias</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <br>
                    <list-product v-if="active == 'products'" :lista="categories"></list-product>
                    <list-category v-if="active == 'categories'" :lista="categories"></list-category>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ListProduct from './list-product'
    import ListCategory from './list-category'

    export default {
        data () {
            return {
                active: 'products',
                categories: []
            }
        },
        components: { ListProduct, ListCategory },
        created() {
            this.getCategories();
        },
        methods: {
            getCategories () {
                this.$http.get('/categories')
                    .then(response => this.categories = response.data);
            },
        }
    }
</script>