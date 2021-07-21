import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { timStore } from '../../../../store/tim'
import { getEventParam } from '../../../../utils/util'
import TIM from 'tim-wx-sdk-ws'

Component({

    properties: {
        targetUserId: String,
        service: Object
    },

    data: {
        text: ''
    },

    behaviors: [storeBindingsBehavior],

    storeBindings: {
        store: timStore,
        fields: ['messageList'],
        actions: ['getMessageList', 'setTargetUserId']
    },

    lifetimes: {
        attached () {
            this.setTargetUserId(this.data.targetUserId)
            this.getMessageList()
        }
    },

    methods: {
        handleSendList (event) {
            const service = getEventParam(event, 'service')
            this.triggerEvent('sendmessage', {
                type: TIM.TYPES.MSG_CUSTOM,
                content: service
            })
        },

        handleSelect () {
            const service = getEventParam(event, 'service')
            wx.navigateTo({
                url: `/pages/service-detail/service-detail?service_id=${service.id}`
            })
        },

        async handleSendImage () {
            const res = await wx.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera']
            })

            this.triggerEvent('sendmessage', {
                type: TIM.TYPES.MSG_IMAGE,
                content: res
            })
        },

        handleInput (event) {
            this.data.text = getEventParam(event, 'value')
        },

        handleSend () {
            const text = this.data.text.trim()
            if (text === '') {
                return
            }

            this.triggerEvent('sendmessage', {
                type: TIM.TYPES.MSG_TEXT,
                content: text
            })

            this.setData({
                text: ''
            })
        },

        async setScrollHeight () {
            const systemInfo = await wx.getSystemInfo()
            const scrollHeight = systemInfo.windowHeight - (systemInfo.safeArea.bottom) - 95
            this.setData({ scrollHeight })
        }
    }
})
