class StyleInjector {
    styleElement = document.createElement("style")

    constructor() {
        this._init()
    }

    async _init() {
        // Tabs
        this._hideHomeTab = await styleStorage.getHideHomeTab()
        this._hideShortsTab = await styleStorage.getHideShortsTab()
        this._hideSubscriptionsTab = await styleStorage.getHideSubscriptionsTab()
        this._hideYouTubeMusicTab = await styleStorage.getHideYouTubeMusicTab()
        this._hideYouTab = await styleStorage.getHideYouTab()

        // Menus
        this._hideLibraryMenu = await styleStorage.getHideLibraryMenu()
        this._hideSubscriptionsMenu = await styleStorage.getHideSubscriptionsMenu()
        this._hideExploreMenu = await styleStorage.getHideExploreMenu()
        this._hideMoreMenu = await styleStorage.getHideMoreMenu()
        this._hideSettingsMenu = await styleStorage.getHideSettingsMenu()

        // Other
        this._hideFooter = await styleStorage.getHideFooter()
        this._redirectSubscriptionsTab = await styleStorage.getRedirectSubscriptionsTab()

        document.head.appendChild(this.styleElement)
        this.reload()
    }

    // Tabs
    _hideHomeTab = false
    setHideHomeTab(value) { this._hideHomeTab = value; this.reload(); styleStorage.setHideHomeTab(value) }

    _hideShortsTab = false
    setHideShortsTab(value) { this._hideShortsTab = value; this.reload(); styleStorage.setHideShortsTab(value) }

    _hideSubscriptionsTab = false
    setHideSubscriptionsTab(value) { this._hideSubscriptionsTab = value; this.reload(); styleStorage.setHideSubscriptionsTab(value) }

    _hideYouTubeMusicTab = false
    setHideYouTubeMusicTab(value) { this._hideYouTubeMusicTab = value; this.reload(); styleStorage.setHideYouTubeMusicTab(value) }

    _hideYouTab = false
    setHideYouTab(value) { this._hideYouTab = value; this.reload(); styleStorage.setHideYouTab(value) }

    // Menus
    _hideLibraryMenu = false
    setHideLibraryMenu() { this._hideLibraryMenu = value; this.reload(); styleStorage.setHideLibraryMenu() }

    _hideSubscriptionsMenu = false
    setHideSubscriptionsMenu() { this._hideSubscriptionsMenu = value; this.reload(); styleStorage.setHideSubscriptionsMenu() }

    _hideExploreMenu = false
    setHideExploreMenu() { this._hideExploreMenu = value; this.reload(); styleStorage.setHideExploreMenu() }

    _hideMoreMenu = false
    setHideMoreMenu() { this._hideMoreMenu = value; this.reload(); styleStorage.setHideMoreMenu() }

    _hideSettingsMenu = false
    setHideSettingsMenu() { this._hideSettingsMenu = value; this.reload(); styleStorage.setHideSettingsMenu() }


    // Other
    _hideFooter = false
    setHideFooter() { this._hideFooter = value; this.reload(); styleStorage.setHideFooter() }

    _redirectSubscriptionsTab = false
    setRedirectSubscriptionsTab(value) { this._redirectSubscriptionsTab = value; this.reload(); styleStorage.setRedirectSubscriptionsTab(value) }

    _home = ['a[title="Home"]', 'ytd-browse[page-subtype="home"]', 'ytm-pivot-bar-item-renderer:has(> div.pivot-w2w)']
    _shorts = ['a[title="Shorts"]', 'ytd-shorts', 'ytm-pivot-bar-item-renderer:has(> div.pivot-shorts)']
    _subscriptions = ['a[title="Subscriptions"]', 'ytd-browse[page-subtype="subscriptions"]', 'ytm-pivot-bar-item-renderer:has(> div.pivot-subs)']
    _youTubeMusic = ['a[title="YouTube Music"]']
    _you = ['a[title="You"]', 'ytm-pivot-bar-item-renderer:has(> div.pivot-library)']

    _resetInnerHTML () {
        this.styleElement.innerHTML = ""
    }

    elementsToHide = []

    _resetElementsToHide() {
        this.elementsToHide = []
    }

    _addElementToHide(selectors) {
        this.elementsToHide = this.elementsToHide.concat(selectors)
    }

    _removeLastComma(text) {
        text = text.split(",").pop()
        text.join(",")
        console.log(text)
        return text
    }

    _buildStyleSheet() {
        this._resetInnerHTML()
        this._resetElementsToHide()

        if (this._hideHomeTab) { this._addElementToHide(this._home) }
        if (this._hideShortsTab) { this._addElementToHide(this._shorts) }
        if (this._hideSubscriptionsTab) { this._addElementToHide(this._subscriptions) }
        if (this._hideYouTubeMusicTab) { this._addElementToHide(this._youTubeMusic) }
        if (this._hideYouTab) { this._addElementToHide(this._you) }
        
        this.styleElement.innerHTML = this.elementsToHide.join(", ")

        if ( this.styleElement.innerHTML.length > 0 ) {
            this.styleElement.innerHTML += " { display: none !important; }"
        }
    }

    reload() {
        this._buildStyleSheet()

        console.log(window.location.pathname === "/", window.location.origin)

        if(this._redirectSubscriptionsTab && window.location.pathname === "/") {
            console.log("x")
            window.location.replace(window.location.origin+"/feed/subscriptions")
        }
    }
}

styleInjector = new StyleInjector()
console.log(styleInjector._hideHomeTab)