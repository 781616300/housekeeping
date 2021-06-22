import APIConfig from '../config/api'
import exceptionMessage from '../config/exception-message'
import { promisic } from './util'
import { cache } from '../enum/cache'
import { User } from '../models/user'

class Http {
    static async request ({ url, data, method = 'GET', refetch = true }) {
        let res
        try {
            res = await promisic(wx.request)({
                url: APIConfig.baseUrl + url,
                data,
                method,
                header: {
                    token: wx.getStorageSync(cache.Token)
                }
            })
        } catch (e) {
            Http._showError(-1)
            throw new Error(e.errMsg)
        }

        if (res.statusCode < 400) {
            return res.data.data
        }

        if (res.statusCode === 401) {
            //令牌异常
            if (res.data.error_code === 10001) {
                wx.navigateTo({
                    url: `/pages/login/login`
                })
                throw Error('请求未携带令牌')
            }
            if (refetch) {
                return await Http._refetch({ url, data, method, refetch })
            }

        }

        Http._showError(res.data.error_code, res.data.message)
        const error = Http._generateMessage(res.data.message)
        throw Error(error)
    }

    static async _refetch (data) {
        await User.login()
        data.refetch = false
        return await Http.request(data)
    }

    static _showError (errorCode, message) {
        let title = ''
        const errorMessage = exceptionMessage[errorCode]
        title = errorMessage || message || '未知异常'

        title = Http._generateMessage(title)

        wx.showToast({
            title,
            icon: 'none',
            duration: 3000
        })
    }

    static _generateMessage (message) {
        return typeof message === 'object' ? Object.values(message).join(';') : message
    }
}

export { Http }