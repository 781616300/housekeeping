import { formatTime } from '../../../../utils/date'
import { TIM } from 'tim-wx-sdk-ws'

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

    methods: {}
})
