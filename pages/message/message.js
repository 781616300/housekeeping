import { timStore } from '../../store/tim'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { getDataSet } from '../../utils/util'

Page({

    data: {
        getConversationList: []
    },

    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this, {
            store: timStore,
            fields: ['sdkReady', 'conversationList'],
            actions: ['getConversationList']
        })
    },

    handleSelect (event) {
        const item = getDataSet(event, 'item')
        wx.navigateTo({
            url: `/pages/chat/chat?targetUserId=${item.userProfile.userID}&service=''`
        })
    },

    handleToLogin () {
        wx.navigateTo({
            url: `/pages/login/login`
        })
    },

    onUnload () {
        this.storeBindings.destroyStoreBindings()
    }

})