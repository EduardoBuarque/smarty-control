<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h1>Clientes</h1>
                <list-customer>
                <span slot="panel-heading">
                    <router-link to="/customers/new" class="btn btn-primary btn-xs">Novo</router-link>
                </span>
                </list-customer>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import ListCustomer from './list-customer';

    export default {
        components: { ListCustomer }
    }
</script>