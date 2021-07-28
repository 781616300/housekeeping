import { getEventParam } from '../../utils/util'

Component({

    options: {
        multipleSlots: true
    },

    properties: {
        rowNum: {
            type: Number,
            value: 3
        },
        title: String,
        extend: String,
        extendCell: Object
    },

    data: {},

    relations: {
        '../grid-item/index': {
            type: 'child'
        }
    },

    lifetimes: {
        ready () {
            this.getGridItems()
        }
    },

    methods: {
        getGridItems () {
            const items = this.getRelationNodes('../grid-item/index')
            const gridItems = items.map((item, index) => index)
            this.setData({ gridItems })
        },

        handleSelect (event) {
            const cell = getEventParam(event, 'cell')
            this.triggerEvent('itemtap', { cell })
        },

        handleExtend (e) {
            this.triggerEvent('extendtap', { cell: this.data.extendCell })
        }
    }
})
