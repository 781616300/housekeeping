import { serviceType } from '../../../../enum/service-type'
import { behavior } from '../behavior'

Component({

    behaviors: [behavior],

    data: {
        serviceTypeEnum: serviceType
    },

    methods: {
        handleOrder () {
            this.triggerEvent('order')
        },

        handleChat () {
            this.triggerEvent('chat')
        }
    }
})
