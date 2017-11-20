<template>
    <div>
        <div class="row">
            <div class="col-md-7">
                <list-product :lista="categories"></list-product>
            </div>
            <div class="col-md-5">
                <div id="myAffix">
                    <list-order></list-order>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListProduct from './list-product'
    import ListOrder from './list-order.vue'

    export default {
        data () {
            return {
                categories: []
            }
        },
        components: { ListProduct, ListOrder },
        created() {
            this.getCategories();
        },
        mounted () {
//            $('#myAffix').affix()
        },
        methods: {
            getCategories () {
                this.$http.get('/categories')
                    .then(response => this.categories = response.data);
            },
        }
    }
</script>