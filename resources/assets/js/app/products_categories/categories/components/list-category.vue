<template>
    <div class="panel panel-default" id="casa">
        <div class="panel-heading">Categorias
            <slot name="panel-heading"></slot>
        </div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>N° Itens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories">
                        <td>
                            <router-link :to="'categories/'+category.id">{{ category.name }}</router-link>
                        </td>
                        <td class="text-right">
                            {{ category.products | count }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                categories: 'getCategories'
            })
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