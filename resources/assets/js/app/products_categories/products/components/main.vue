<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <list-product>
                    <span slot="panel-heading">
                        <router-link to="products/new" class="btn btn-primary btn-xs">Novo</router-link>
                    </span>
                </list-product>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import ListProduct from './list-product.vue'

    export default {
        name: 'Products',
        components: { ListProduct }
    }
</script>