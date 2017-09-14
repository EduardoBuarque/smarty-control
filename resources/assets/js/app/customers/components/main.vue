<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Clientes</h1>
            <customer-list></customer-list>
        </div>
    </div>
</template>

<script>
    import CustomerList from './customer-list';

    export default {
        components: { CustomerList }
    }
</script>