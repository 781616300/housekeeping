import { Http } from '../utils/http'
import APIConfig from '../config/api'

class Token {
    static async getToken () {
        const res = await Http.request({
            url: `v1/token`,
            data: {
                i_code: APIConfig.iCode,
                order_no: APIConfig.orderNo
            },
            method: 'POST'
        })

        return res.token
    }

    static async verifyToken () {
        const token = User.getUserInfoByLocal()
        return Http.request({
            url: `v1/token/verify`,
            data: { token },
            method: 'POST'
        })
    }

}

export { Token }