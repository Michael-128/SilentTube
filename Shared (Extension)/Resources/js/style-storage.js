class StyleStorage {
    // Tabs
    _hideHomeTab = "hideHomeTab"
    _hideShortsTab = "hideShortsTab"
    _hideSubscriptionsTab = "hideSubscriptionsTab"
    _hideYouTab = "hideYouTab"
    _hideYouTubeMusicTab = "hideYouTubeMusicTab"

    // Menus
    _hideLibraryMenu = "hideLibraryMenu"
    _hideSubscriptionsMenu = "hideSubscriptionsMenu"
    _hideExploreMenu = "hideExploreMenu"
    _hideMoreMenu = "hideMoreMenu"
    _hideSettingsMenu = "hideSettingsMenu"

    // Other
    _hideFooter = "hideFooter"
    _redirectSubscriptionsTab = "redirectSubscriptionsTab"

    async getItem(key) {
        const item = await browser.storage.sync.get([key])
        return item[key] ? item[key] : false
    }

    async setItem(key, val) {
        const obj = {}
        obj[key] = val
        return browser.storage.sync.set(obj)
    }


    // Tabs
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

    // Menus
    async getHideLibraryMenu() { return await this.getItem(this._hideLibraryMenu) }
    setHideLibraryMenu(val) { this.setItem(this._hideLibraryMenu, val) }

    async getHideSubscriptionsMenu() { return await this.getItem(this._hideSubscriptionsMenu) }
    setHideSubscriptionsMenu(val) { this.setItem(this._hideLibraryMenu, val) }

    async getHideExploreMenu() { return await this.getItem(this._hideExploreMenu) }
    setHideExploreMenu(val) { this.setItem(this._hideExploreMenu, val) }

    async getHideMoreMenu() { return await this.getItem(this._hideMoreMenu) }
    setHideMoreMenu(val) { this.setItem(this._hideMoreMenu, val) }

    async getHideSettingsMenu() { return await this.getItem(this._hideSettingsMenu) }
    setHideSettingsMenu(val) { this.setItem(this._hideSettingsMenu, val) }

    // Other
    async getHideFooter() { return await this.getItem(this._hideFooter) }
    setHideFooter(val) { this.setItem(this._hideFooter, val) }

    // Other
    async getRedirectSubscriptionsTab() { return await this.getItem(this._redirectSubscriptionsTab) }
    setRedirectSubscriptionsTab(val) { this.setItem(this._redirectSubscriptionsTab, val) }
}

styleStorage = new StyleStorage()