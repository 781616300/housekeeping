Component({

    properties: {
        rating: Object
    },

    data: {},

    methods: {
        handlePreview (e) {
            const index = e.currentTarget.dataset.index
            wx.previewImage({
                urls: this.properties.rating.illustration,
                current: this.properties.rating.illustration[index]
            })
        }
    }
})
