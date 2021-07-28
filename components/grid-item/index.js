Component({

    properties: {
        icon: String,
        iconSize: {
            type: String,
            value: '50'
        },
        text: String,
        showBadge: Boolean,
        badgeCount: Number,
        cell: Object
    },

    data: {},

    relations: {
        '../grid/index': {
            type: 'parent',
        }
    },

    methods: {
        handleSelect () {
            this.triggerEvent('select', { cell: this.data.cell }, { bubbles: true, composed: true })
        }
    }
})
