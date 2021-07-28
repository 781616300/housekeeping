import { cache } from '../../enum/cache'
import { setTabBarBadge } from '../../utils/util'
import { Token } from '../../models/token'
import { User } from '../../models/user'

Page({

    data: {
        userInfo: {
            avatar: '../../images/logo.png',
            nickname: '点击授权登录'
        }
    },

    onLoad: function (options) {

    },

    async onShow () {
        const unreadCount = wx.getStorageSync(cache.UNREAD_COUNT)
        await setTabBarBadge(unreadCount)

        const verifyToken = await Token.verifyToken()
        if (verifyToken.valid) {
            const userInfo = User.getUserInfoByLocal()
            this.setData({
                userInfo
            })
        }
    },

    handleToLogin () {
        wx.navigateTo({
            url: `/pages/login/login`,
            events: {
                listener: (res) => {
                    console.log(res)
                }
            }
        })
    },

})