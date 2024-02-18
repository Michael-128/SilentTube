class StyleStorage {
    _hideHomeTab = "hideHomeTab"
    _hideShortsTab = "hideShortsTab"
    _hideSubscriptionsTab = "hideSubscriptionsTab"
    _hideYouTab = "hideYouTab"
    _hideYouTubeMusicTab = "hideYouTubeMusicTab"

    async getItem(key) {
        const item = await browser.storage.sync.get([key])
        return item[key] ? item[key] : false
    }

    async setItem(key, val) {
        const obj = {}
        obj[key] = val
        return browser.storage.sync.set(obj)
    }

    async getHideHomeTab() { return await this.getItem(this._hideHomeTab) }
    setHideHomeTab(val) { this.setItem(this._hideHomeTab, val) }

    async getHideShortsTab() { return await this.getItem(this._hideShortsTab) }
    setHideShortsTab(val) { this.setItem(this._hideShortsTab, val) }

    async getHideSubscriptionsTab() { return await this.getItem(this._hideSubscriptionsTab) }
    setHideSubscriptionsTab(val) { this.setItem(this._hideSubscriptionsTab, val) }

    async getHideYouTab() { return await this.getItem(this._hideYouTab) }
    setHideYouTab(val) { this.setItem(this._hideYouTab, val) }

    async getHideYouTubeMusicTab() { return await this.getItem(this._hideYouTubeMusicTab) }
    setHideYouTubeMusicTab(val) { this.setItem(this._hideYouTubeMusicTab, val) }
}

styleStorage = new StyleStorage()