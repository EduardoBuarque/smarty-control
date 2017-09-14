<template>
    <div>
        <h1>Produtos</h1>
        <div class="row">
            <div class="col-md-12">
                <product-list>
                    <span slot="panel-heading">
                        <router-link to="/user/new" class="btn btn-primary btn-xs">Novo</router-link>
                    </span>
                </product-list>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import ProductList from './product-list'

    export default {
        data () {
            return { openModal: false }
        },
        components: { ProductList },
        methods: { }
    }
</script>