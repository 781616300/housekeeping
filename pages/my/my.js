import { cache } from '../../enum/cache'
import { setTabBarBadge } from '../../utils/util'
import { Token } from '../../models/token'
import { User } from '../../models/user'
import { appointWithMeGrid, myAppointGrid, myProvideGird, mySeekGrid } from '../../config/grid'
import { Order } from '../../models/order'
import { roleType } from '../../enum/role-type'
import { Service } from '../../models/service'
import { serviceType } from '../../enum/service-type'

Page({
    data: {
        userInfo: {
            avatar: '../../images/logo.png',
            nickname: '点击授权登录'
        },
        appointWithMeStatus: null,
        myAppointStatus: null,
        provideServiceStatus: null,
        seekServiceStatus: null,

        // 宫格配置
        // 预约我的宫格
        appointWithMeGrid: appointWithMeGrid,
        // 我的预约宫格
        myAppointGrid: myAppointGrid,
        // 我在提供宫格
        myProvideGird: myProvideGird,
        // 正在找宫格
        mySeekGrid: mySeekGrid
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

    async handleToLogin () {
        await this.pageRouter.navigateTo({
            url: `/pages/login/login`
        })
    },

    async getOrderStatus () {
        const appointWithMeStatus = Order.getOrderStatus(roleType.PUBLISHER)
        const myAppointStatus = Order.getOrderStatus(roleType.CONSUMER)
        this.setData({
            appointWithMeStatus: await appointWithMeStatus,
            myAppointStatus: await myAppointStatus
        })
    },

    async getServiceStatus () {
        const provideServiceStatus = Service.getServiceStatus(serviceType.PROVIDE)
        const seekServiceStatus = Service.getServiceStatus(serviceType.SEEK)
        this.setData({
            provideServiceStatus: await provideServiceStatus,
            seekServiceStatus: await seekServiceStatus
        })
    },
})