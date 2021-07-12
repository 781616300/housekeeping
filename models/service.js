import { Http } from '../utils/http'
import { Base } from './base'

class Service extends Base {

    /**
     * 分页获取服务列表
     * @param page  页码
     * @param count 每页数量
     * @param category_id   分类id
     * @param type  服务类型
     */
    async getServiceList (category_id = null, type = null, page, count,) {
        if (!this.hasMoreData) {
            return this.data
        }
        const serviceList = await Http.request({
            url: `v1/service/list`,
            data: {
                category_id: category_id || '',
                type: type || '',
                page: this.page,
                count: this.count
            }
        })

        this.data = this.data.concat(serviceList.data)
        this.hasMoreData = !(this.page === serviceList.last_page)
        this.page++
        return this.data
    }

    static getServiceById (serviceId) {
        return Http.request({
            url: `v1/service/${serviceId}`
        })
    }

    static updateServiceStatus (serviceId, action) {
        return Http.request({
            url: `v1/service/${serviceId}`,
            data: {
                action
            },
            method: 'POST'
        })
    }

    static publishService (formData) {
        return Http.request({
            url: `v1/service`,
            data: formData,
            method: 'POST'
        })
    }

    static editService (serviceId, formData) {
        return Http.request({
            url: `v1/service/${serviceId}`,
            data: formData,
            method: 'PUT'
        })
    }

}

export {
    Service
}