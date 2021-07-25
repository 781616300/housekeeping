import { Token } from './models/token'
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { timStore } from './store/tim'
import { cache } from './enum/cache'

App({
    async onLaunch () {
        const res = wx.getStorageSync(cache.TOKEN)
        if (res.valid) {
            this.storeBindings = createStoreBindings(this, {
                store: timStore,
                actions: ['login']
            })
            await this.login()
            this.storeBindings.destroyStoreBindings()
        }
    },
    globalData: {}
})
