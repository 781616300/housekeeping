import { formatTime } from '../../../../utils/date'
import { TIM } from 'tim-wx-sdk-ws'
import { getDataSet, getEventParam } from '../../../../utils/util'

Component({

    properties: {
        message: Object
    },

    observers: {
        message: (message) => {
            message.time = formatTime(message.time)
            this.setData({
                _message: message
            })
        }
    },

    data: {
        TIM: TIM,
        flowEnum: {
            IN: 'in',
            OUT: 'out'
        }
    },

    methods: {
        handleSend (event) {
            const service = getEventParam(event, 'service')
            this.triggerEvent('send', { service })
        },

        handleSelect (event) {
            const service = getEventParam(event, 'service')
            this.triggerEvent('send', { service })
        },

        async handlePreview (event) {
            const url = getDataSet(event, 'image')
            await wx.previewImage({
                current: url,
                urls: [url]
            })
        }
    }
})
