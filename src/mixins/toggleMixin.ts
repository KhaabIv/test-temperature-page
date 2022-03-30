export  default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        isPage: false
    },
    methods: {
        hideModal() {
            /* eslint-disable */
            // @ts-ignore
            if (!this.isPage) {
                /* eslint-disable */
                // @ts-ignore
                this.$emit('update:show', false)
                /* eslint-disable */
                // @ts-ignore
                this.$emit('clearChangeMeasurement')
            }
        }
    }
}