import { cache } from '../enum/cache'

const formatTime = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}

/**
 * promise封装
 * @param func
 * @returns {function(*=): Promise<unknown>}
 */
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res)
                },
                fail: (error) => {
                    reject(error)
                }
            })
            func(args)
        })
    }
}

/**
 * 节流函数
 * @param {Function} callback 需要被节流的函数
 * @param {Number} duration 距离上次执行超过多少毫秒才会执行被节流的函数
 * @returns
 */
const throttle = function (callback, duration = 500) {
    // 最后执行函数时的时间戳
    let lastTime = 0
    return function () {
        // 获取当前时间戳
        const now = new Date().getTime()
        // 判断当前时间距离上一次执行函数的时间是否超过了duration设定的毫秒数
        if (now - lastTime >= duration) { // 超过了
            // 因为我们需要在 page 中做 this.setData()，所以需要借助 call()
            // 利用 call()方法，实现保留原函数的 this 指向，利用JavaScript的arguments对象实现动态接收参数
            callback.call(this, ...arguments)
            // callback(...arguments)
            // 更新最后执行函数时的时间戳
            lastTime = now
        }
        // 没超过，啥也不干
    }
}

/**
 * @desc 防抖函数
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
const debounce = function (func, wait, immediate = true) {
    let timeout

    return function () {
        let context = this
        let args = arguments

        if (timeout) clearTimeout(timeout)
        if (immediate) {
            const callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
}

/**
 * 获取事件回调参数的自定义属性
 * @param {Object} event
 * @param {String} target
 */
const getDataSet = function (event, target) {
    return event.currentTarget.dataset[target]
}

/**
 * 获取自定义组件事件参数
 * @param {Object} event
 * @param {string} target
 */
const getEventParam = function (event, target) {
    return event.detail[target]
}

/**
 * wx.showToast封装
 * @param {string} title
 * @param {string} duration
 * @param {string} icon
 */
const prompt = function (title, duration = '800', icon = 'none') {
    wx.showToast({ title, duration, icon })
}

const setTabBarBadge = async function (unreadCount) {
    try {
        if (unreadCount > 0) {
            await wx.setTabBarBadge({
                index: 2,
                text: String(unreadCount)
            })
        } else {
            await wx.removeTabBarBadge({ index: 2 })
        }
        wx.setStorageSync(cache.UNREAD_COUNT, 0)
    } catch (e) {
        wx.setStorageSync(cache.UNREAD_COUNT, unreadCount)
        console.log(e)
    }

}

module.exports = {
    formatTime,
    promisic,
    prompt,
    throttle,
    debounce,
    getDataSet,
    getEventParam,
    setTabBarBadge
}
