class StyleSheetInject {
    styleElement = document.createElement("style")

    constructor() {
        document.head.appendChild(this.styleElement)
        this.reload()
    }

    _hideHomeTab = true
    setHideHomeTab(value) { this._hideHomeTab = value; this.reload() }

    _hideShortsTab = false
    setHideShortsTab(value) { this._hideShortsTab = value; this.reload() }

    _hideSubscriptionsTab = false
    setHideSubscriptionsTab(value) { this._hideSubscriptionsTab = value; this.reload() }

    _hideYouTubeMusicTab = false
    setHideYouTubeMusicTab(value) { this._hideSubscriptionsTab = value; this.reload() }

    _hideYouTab = false
    setHideYouTab(value) { this._hideYouTab = value; this.reload() }

    _home = 'a[title="Home"] ytd-browse[page-subtype="home"]'
    _shorts = 'a[title="Shorts"] ytd-shorts'
    _subscriptions = 'a[title="Subscriptions"] ytd-browse[page-subtype="subscriptions"]'
    _youTubeMusic = 'a[title="YouTube Music"]'
    _you = 'a[title="You"]'

    _resetInnerHTML () {
        this.styleElement.innerHTML = ""
    }

    _addElementToHide(selector) {
        this.styleElement.innerHTML = selector + " " + this.styleElement.innerHTML
    }

    _buildStyleSheet() {
        this._resetInnerHTML()

        if (this._hideHomeTab) { this._addElementToHide(this._home) }
        if (this._hideShortsTab) { this._addElementToHide(this._shorts) }
        if (this._hideSubscriptionsTab) { this._addElementToHide(this._subscriptions) }
        if (this._hideYouTubeMusicTab) { this._addElementToHide(this._youTubeMusic) }
        if (this._hideYouTab) { this._addElementToHide(this._you) }

        if ( this.styleElement.innerHTML.length > 0 ) { this.styleElement.innerHTML += " { display: none !important; }" }
    }

    reload() {
        this._buildStyleSheet()
    }
}