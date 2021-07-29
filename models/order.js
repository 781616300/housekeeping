import { Http } from '../utils/http'
import { Base } from './base'

class Order extends Base{
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

    static getOrderStatus (role) {
        return Http.request({
            url: `v1/order/count?role=${role}`
        })
    }

    async getMyOrderList (role, status) {
        if (!this.hasMoreData) {
            return this.data
        }
        const orderList = await Http.request({
            url: `v1/order/my`,
            data: {
                role,
                status,
                page: this.page,
                count: this.count,
            }
        })
        this.data = this.data.concat(orderList)
        this.hasMoreData = this.page !== orderList.last_page
        this.page++
        return this.data
    }
}

export { Order }