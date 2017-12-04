<template>
    <div class="panel panel-default">
        <div class="panel-heading">Clientes
            <slot name="panel-heading"></slot>
        </div>

        <div class="panel-body">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Taxa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="city in cities">
                        <td><router-link :to="'customers/'+city.id+'/edit'">{{ city.name }}</router-link></td>
                        <td class="text-right">{{ city.taxa }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        data: function () {
            return {
                cities: []
            }
        },
        created() {
            this.getCities();
        },
        methods: {
//            ...mapActions(['addCustomerToOrder']),
            getCities (page) {
                const url = '/cities'
                this.$http.get(url).then(response => this.cities = response.data);
            }
        }
    }
</script>
<style scoped>
    .panel-heading {
        display: flex;
        justify-content: space-between;
    }
</style>