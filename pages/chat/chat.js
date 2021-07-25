import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { timStore } from '../../store/tim'
import { Tim } from '../../models/tim'

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
            actions: ['pushMessage', 'resetMessage']
        })
        this.setData({
            targetUserId: options.targetUserId,
            service: options.service ? JSON.parse(options.service) : null
        })
    },

    async handleSendMessage (event) {
        const { type, content } = event.detail
        const message = Tim.getInstance().createMessage(type, content, this.data.targetUserId)
        this.pushMessage(message)
        await Tim.getInstance().sendMessage(message)
        this.getOpenerEventChannel().emit('sendMessage')
    },

    handleLogin () {
        wx.navigateTo({
            url: `/pages/login/login`
        })
    },

    onUnload () {
        this.resetMessage()
        this.storeBindings.destroyStoreBindings()
    }
})