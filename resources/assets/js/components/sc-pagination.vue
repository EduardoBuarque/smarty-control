<template>
    <nav aria-label="Page navigation">
        <ul class="pagination pagination-sm">
            <li :class="{ disabled: source.current_page == 1 }">
                <a href="#" @click="navigate($event, source.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="x in source.last_page" :class="{ active: source.current_page == x }">
                <a href="#" @click="navigate($event, x)">{{ x }}</a>
            </li>
            <li :class="{ disabled: source.current_page == source.last_page }">
                <a href="#" @click="navigate($event, source.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['source'],
        methods: {
            navigate (event, page) {
                event.preventDefault()

                if (page == 0 || page == this.source.last_page + 1) return

                this.$emit('navigate', page)
            }
        }
    }
</script>