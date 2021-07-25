import { timStore } from '../../store/tim'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { getDataSet, setTabBarBadge } from '../../utils/util'
import { cache } from '../../enum/cache'

Page({

    data: {
        getConversationList: [],
        updateConversationList: false
    },

    onLoad: function (options) {
        this.storeBindings = createStoreBindings(this, {
            store: timStore,
            fields: ['sdkReady', 'conversationList'],
            actions: ['getConversationList']
        })
    },

    handleSelect (event) {
        this.data.updateConversationList = true
        const item = getDataSet(event, 'item')
        wx.navigateTo({
            url: `/pages/chat/chat?targetUserId=${item.userProfile.userID}&service=''`,
            event: {
                sendMessage: () => {
                    this.data.updateConversationList = false
                }
            }
        })
    },

    handleToLogin () {
        wx.navigateTo({
            url: `/pages/login/login`
        })
    },

    async onShow () {
        if (this.data.updateConversationList) {
            this.getConversationList()
            this.data.updateConversationList = false
        }
        const unreadCount = wx.getStorageSync(cache.UNREAD_COUNT)
        await setTabBarBadge(unreadCount)
    },

    onUnload () {
        this.storeBindings.destroyStoreBindings()
    }

})