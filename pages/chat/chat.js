import { Tim } from '../../models/tim'
import TIM from 'tim-wx-sdk-ws'

Page({

    data: {},

    onLoad: function (options) {
        const userId = 25000000
        Tim.getInstance().login()
        Tim.getInstance().getSDK().on(TIM.EVENT.SDK_READY, async () => {
            const res = await Tim.getInstance().getMessageList(userId)
            console.log(res)
        })
    },

})