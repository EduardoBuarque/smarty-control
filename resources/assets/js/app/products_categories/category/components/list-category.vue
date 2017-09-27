<template>
    <div class="panel panel-default">
        <div class="panel-heading">Categorias
            <slot name="panel-heading"></slot>
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
</template>

<script>

    export default {
        data: function () {
            return {
                categories: [],
            }
        },
        created() {
            this.getCategories();
        },
        methods: {
            getCategories (page) {
                let url = '/categories'
                if (page)
                    url+= '?page='+page

                this.$http.get(url).then(response => this.categories = response.data);
            },
        }
    }
</script>