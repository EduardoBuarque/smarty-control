<template>
    <div class="capsula">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span>Categorias</span>
                <router-link to="categories" class="btn btn-primary btn-xs">Nova</router-link>
            </div>

            <div class="panel-body">
                <table class="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories">
                        <td>
                            <router-link :to="'categories/'+category.id">{{ category.name }}</router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        props: ['lista'],
        data: function () {
            return {
            }
        },
        computed: {
            categories: function (val) {
                return this.lista
            }
        },
//        created() {
//            this.getCategories();
//        },
//        methods: {
//            getCategories (page) {
//                let url = '/categories'
//                if (page)
//                    url+= '?page='+page
//
//                this.$http.get(url).then(response => this.categories = response.data);
//            },
//        }
    }
</script>

<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>