<template>
    <div>
        <div class="row">
            <div class="col-md-7">
                <list-product :lista="categories"></list-product>
            </div>
            <div class="col-md-5">
                <div id="myAffix">
                    <new-order></new-order>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListProduct from './list-product'
    import NewOrder from './new-order.vue'

    export default {
        data () {
            return {
                categories: []
            }
        },
        components: { ListProduct, NewOrder },
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