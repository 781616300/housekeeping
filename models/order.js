import { Http } from '../utils/http'

class Order {
    static createOrder (serviceId, address) {
        return Http.request({
            url: `v1/order`,
            data: {
                address,
                service_id: serviceId
            },
            method: 'POST'
        })
    }
}

export { Order }