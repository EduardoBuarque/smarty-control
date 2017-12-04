<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h1>Configurações</h1>
                <list-cities>
                    <span slot="panel-heading">
                        <router-link to="/customers/new" class="btn btn-primary btn-xs">Novo</router-link>
                    </span>
                </list-cities>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import ListCities from './list-cities';

    export default {
        components: { ListCities }
    }
</script>