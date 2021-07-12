import { Service } from '../../models/service'
import { Category } from '../../models/category'
import { throttle } from '../../utils/util'

const service = new Service()

Page({

    data: {
        tabs: ['全部服务', '在提供', '正在找'],
        categoryList: [],
        tabIndex: 0,
        categoryId: 0,
        loading: true
    },

    async onLoad () {
        const userInfo = wx.getStorageSync('userInfo')
        if (userInfo) {
            this.setData({
                showUpload: true
            })
        }
        await this._getCategoryList()
        await this._getServiceList()

        this.setData({ loading: false })
    },

    async _getCategoryList () {
        const categoryList = await Category.getCategoryListWithAll()

        this.setData({ categoryList })
    },

    async _getServiceList () {
        const serviceList = await service.reset().getServiceList(this.data.categoryId, this.data.tabIndex)
        this.setData({ serviceList })
    },

    handleCategoryChange: throttle(function (e) {
        if (this.data.categoryId === e.currentTarget.dataset.id) {
            return
        }
        this.data.categoryId = e.currentTarget.dataset.id
        this._getServiceList()
    }),

    handleTabChange (e) {
        this.data.tabIndex = e.detail.index
        this._getServiceList()
    },

    handleSelectService (e) {
        const service = e.currentTarget.dataset.service

        wx.navigateTo({
            url: `/pages/service-detail/service-detail?serviceId=${service.id}`
        })
    },

    async onPullDownRefresh () {
        this._getServiceList()
        wx.stopPullDownRefresh()
    },

    async onReachBottom () {
        if (!service.hasMoreData) {
            return
        }
        const serviceList = await service.getServiceList(this.data.categoryId, this.data.tabIndex)
        this.setData({ serviceList })
    },

})