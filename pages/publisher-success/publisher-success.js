import { serviceStatus } from '../../enum/service-status'

Page({
    data: {
        type: null,
        serviceStatus
    },
    onLoad: function (options) {
        this.data.type = options.type
    },

    handleCheckService: function () {
        wx.redirectTo({ url: `/pages/my-service/index?type=${this.data.type}&status=${ServiceStatus.PENDING}` })
    },

    handleNavToHome: function (event) {
        wx.switchTab({
            url: '/pages/plaza/index'
        })
    }
})
