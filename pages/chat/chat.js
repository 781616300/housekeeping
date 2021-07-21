import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { timStore } from '../../store/tim'

Page({
    data: {
        someData: '...',
        targetUserId: null,
        service: null
    },
    onLoad (options) {
        this.storeBindings = createStoreBindings(this, {
            store: timStore,
            fields: ['sdkReady'],
        })
        this.setData({
            targetUserId: options.targetUserId,
            service: options.service
        })
    },

    handleSendMessage (event) {
        const { type, content } = event.detail
        const message = Tim.getInstance().createMessage(type, content, this.data.targetUserId)
        Tim.getInstance().sendMessage(message)
    },

    handleLogin () {
        wx.navigateTo({
            url: `/pages/login/login`
        })
    },

    onUnload () {
        this.storeBindings.destroyStoreBindings()
    }
})

