class StyleStorage {
    _hideHomeTab = "hideHomeTab"
    _hideShortsTab = "hideShortsTab"
    _hideSubscriptionsTab = "hideSubscriptionsTab"
    _hideYouTab = "hideYouTab"
    _hideYouTubeMusicTab = "hideYouTubeMusicTab"

    getItem(name) {
        return localStorage.getItem(name) ? localStorage.getItem(name) : false
    }

    getHideHomeTab() { return this.getItem(this._hideHomeTab) }
    setHideHomeTab(val) { localStorage.setItem(this._hideHomeTab, val) }

    getHideShortsTab() { return this.getItem(this._hideShortsTab) }
    setHideShortsTab(val) { localStorage.setItem(this._hideShortsTab, val) }

    getHideSubscriptionsTab() { return this.getItem(this._hideSubscriptionsTab) }
    setHideSubscriptionsTab(val) { localStorage.setItem(this._hideSubscriptionsTab, val) }

    getHideYouTab() { return this.getItem(this._hideYouTab) }
    setHideYouTab(val) { localStorage.setItem(this._hideYouTab, val) }

    getHideYouTubeMusicTab() { return this.getItem(this._hideYouTubeMusicTab) }
    setHideYouTubeMusicTab(val) { localStorage.setItem(this._hideYouTubeMusicTab, val) }
}

styleStorage = new StyleStorage()

class StyleSheetInject {
    styleElement = document.createElement("style")

    constructor() {
        document.head.appendChild(this.styleElement)
        this.reload()
    }

    _hideHomeTab = styleStorage.getHideHomeTab()
    setHideHomeTab(value) { this._hideHomeTab = value; this.reload(); styleStorage.setHideHomeTab(value) }

    _hideShortsTab = styleStorage.getHideShortsTab()
    setHideShortsTab(value) { this._hideShortsTab = value; this.reload(); styleStorage.setHideShortsTab(value) }

    _hideSubscriptionsTab = styleStorage.getHideSubscriptionsTab()
    setHideSubscriptionsTab(value) { this._hideSubscriptionsTab = value; this.reload(); styleStorage.setHideSubscriptionsTab(value) }

    _hideYouTubeMusicTab = styleStorage.getHideYouTubeMusicTab()
    setHideYouTubeMusicTab(value) { this._hideYouTubeMusicTab = value; this.reload(); styleStorage.setHideYouTubeMusicTab(value) }

    _hideYouTab = styleStorage.getHideYouTab()
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

style = new StyleSheetInject()
