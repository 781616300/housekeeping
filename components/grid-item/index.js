Component({

    properties: {
        icon: String,
        iconSize: {
            type: String,
            value: '50'
        },
        text: String,
        showBadge: Boolean,
        badgeCount: Number
    },

    data: {},

    relations: {
        '../grid/index': {
            type: 'parent',
        }
    },

    methods: {}
})
