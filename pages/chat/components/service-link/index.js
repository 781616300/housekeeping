Component({

    properties: {
        flow: String,
        service: String
    },

    lifetimes: {
        attached () {
            this.setData({
                _service: JSON.parse(this.data.service)
            })
        }
    },

    data: {
        _service: null
    },

    methods: {}
})
