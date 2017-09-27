<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <list-category>
                    <span slot="panel-heading">
                        <router-link to="categories/new" class="btn btn-primary btn-xs">Nova</router-link>
                    </span>
                </list-category>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import ListCategory from './list-category'

    export default {
        components: { ListCategory },
    }
</script>