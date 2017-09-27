<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <ul class="nav nav-tabs" role="tablist">
                    <router-link to="products" tag="li" exact>
                        <a>Produtos</a>
                    </router-link>
                    <router-link to="categories" tag="li" exact>
                        <a>Categorias</a>
                    </router-link>
                </ul>
                <div class="tab-content">
                    <br>
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return { openModal: false }
        },
        methods: { }
    }
</script>