import { Http } from '../utils/http'
import APIConfig from '../config/api'
import { User } from './user'
import {cache} from "../enum/cache";

class Token {
    static tokenUrl = 'v1/token'

    static async getToken () {
        const res = await Http.request({
            url: `${this.tokenUrl}`,
            data: {
                i_code: APIConfig.iCode,
                order_no: APIConfig.orderNo
            },
            method: 'POST'
        })

        return res.token
    }

    static async verifyToken () {
        const token = this.getTokenByLocal()
        return Http.request({
            url: `${Token.tokenUrl}/verify`,
            data: { token },
            method: 'POST'
        })
    }

    static async getAuthUserInfoStatus () {
        const setting = await wx.getSetting({})
        const userInfoSetting = await setting.authSetting['scope.userInfo']
        if (userInfoSetting === undefined) {
            return authUserinfo.NOT_AUTH
        }
        if (userInfoSetting === false) {
            return authUserinfo.DENY
        }
        if (userInfoSetting === true) {
            return authUserinfo.AUTHORIZED
        }
    }

    static getTokenByLocal () {
        return wx.getStorageSync(cache.TOKEN)
    }

}

export { Token }
