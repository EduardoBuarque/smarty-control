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
    import { mapActions } from 'vuex'

    export default {
        name: 'PorductsCategories',
        created() {
            const self = this
            this.getCategories().then(response => {
                self.setCategories(response.data)
            });
        },
        methods: {
            ...mapActions(['setCategories']),
//            setCategoriesStore (categories) {
//                this.$store.dispatch('setCategoriesState', { categories })
////                this.$store.commit('CHANGE_USER', {name})
//            },
            getCategories () {
                const url = '/categories'
                return this.$http.get(url);
            },
        }
    }
</script>