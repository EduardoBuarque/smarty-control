<template>

    <div class="modal fade" tabindex="-1" role="dialog" data-backdrop="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <slot name="header"></slot>
                <slot name="body"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
//        props: ['toggle', 'title'],
        mounted () {
            $('.modal').on('shown.bs.modal', (e) => console.log('aberto'))
            $('.modal').on('hidden.bs.modal', (e) => console.log('fexado'))
            this.toggleModal()
        },
        watch: {
//            toggle: function (val) {
//                if (val)
//                    this.toggleModal(val)
//            },
        },
        methods: {
            toggleModal(val) {
                $('.modal').modal('toggle')
            }
        }
    }
</script>
<style>
    .modal-backdrop {
        /* bug fix - no overlay */
        display: none;
    }
    .modal-backdrop {
        z-index: 0 !important;
    }
</style>