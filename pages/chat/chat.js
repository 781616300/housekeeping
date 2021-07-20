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

    handleLogin () {
        wx.navigateTo({
            url: `/pages/login/login`
        })
    },

    onUnload () {
        this.storeBindings.destroyStoreBindings()
    }
})

