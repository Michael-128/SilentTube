class StyleInjector {
    styleElement = document.createElement("style")

    constructor() {
        this._init()
    }

    async _init() {
        this._hideHomeTab = await styleStorage.getHideHomeTab()
        this._hideShortsTab = await styleStorage.getHideShortsTab()
        this._hideSubscriptionsTab = await styleStorage.getHideSubscriptionsTab()
        this._hideYouTubeMusicTab = await styleStorage.getHideYouTubeMusicTab()
        this._hideYouTab = await styleStorage.getHideYouTab()

        document.head.appendChild(this.styleElement)
        this.reload()
    }

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

    _home = ['a[title="Home"]', 'ytd-browse[page-subtype="home"]']
    _shorts = ['a[title="Shorts"]', 'ytd-shorts']
    _subscriptions = ['a[title="Subscriptions"]', 'ytd-browse[page-subtype="subscriptions"]']
    _youTubeMusic = ['a[title="YouTube Music"]']
    _you = ['a[title="You"]']

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
    }
}

styleInjector = new StyleInjector()
console.log(styleInjector._hideHomeTab)