import { throttle } from '../../utils/util'

Component({
    // fly 启用多个插槽配置
    options: { multipleSlots: true },

    properties: {
        tabs: Array
    },

    data: {
        currentTabIndex: 0
    },

    methods: {
        handleTabChange: throttle(function (e) {

            const index = e.currentTarget.dataset.index

            if (index === this.data.currentTabIndex) {
                return
            }

            this.setData({
                currentTabIndex: index
            })

            this.triggerEvent('change', { index })
        }),

        handleTouchMove (e) {
            const direction = e.direction
            const currentTabIndex = this.data.currentTabIndex
            const targetTabIndex = currentTabIndex + direction

            if (targetTabIndex < 0 || targetTabIndex > this.data.tabs.length - 1) {
                return
            }

            const customEvent = {
                currentTarget: {
                    dataset: {
                        index: targetTabIndex
                    }
                }
            }

            this.handleTabChange(customEvent)
        },
    }
})
