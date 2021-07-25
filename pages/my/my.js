import { cache } from '../../enum/cache'
import { setTabBarBadge } from '../../utils/util'

Page({

    data: {

    },

    onLoad: function (options) {

    },

    async onShow () {
        const unreadCount = wx.getStorageSync(cache.UNREAD_COUNT)
        await setTabBarBadge(unreadCount)
    },

})