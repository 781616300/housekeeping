import { Service } from '../../models/service'
import { getEventParam } from '../../utils/util'

Page({

    data: {
        formData: {
            type: null,
            title: '',
            category_id: null,
            cover_image: null,
            description: '',
            designated_place: false,
            begin_date: '',
            end_date: '',
            price: ''
        }
    },

    onLoad: function (options) {

    },

    async handleSubmit (event) {
        const res = await wx.showModal({
            title: '提示',
            content: '是否确认申请发布该服务？',
            showCancel: true
        })
        if (res.cancel) {
            return
        }

        wx.showLoading({
            title: '正在发布...',
            mask: true
        })

        const formData = getEventParam(event, 'fromData')

        try {
            await Service.publishService(formData)
            this._resetForm()
            wx.navigateTo({
                url: `/pages/publisher-success/publisher-success?type=${formData.type}`
            })
        } catch (e) {
            console.error(e)
        }

        wx.hideLoading()

    },

    _resetForm () {
        const formData = {
            type: null,
            title: '',
            category_id: null,
            cover_image: null,
            description: '',
            designated_place: false,
            begin_date: '',
            end_date: '',
            price: ''
        }
        this.setData({ formData })
    }

})