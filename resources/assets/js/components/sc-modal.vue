<template>

    <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">{{ title || 'Titulo do Modal' }}</h4>
                </div>

                <div class="modal-body">
                    <slot name="md-body"></slot>
                </div>

                <div class="modal-footer">
                    <slot  name="md-footer"></slot>
                    <slot>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
                    </slot>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['toggle', 'title'],
        mounted () {
//            $('.modal').on('shown.bs.modal', (e) => this.$emit('is-shown', true))
            $('.modal').on('hidden.bs.modal', (e) => this.$emit('is-shown', false))
        },
        watch: {
            toggle: function (val) {
                if (val)
                    this.toggleModal(val)
            },
        },
        methods: {
            toggleModal(val) {
                $('.modal').modal('toggle')
            }
        }
    }
</script>