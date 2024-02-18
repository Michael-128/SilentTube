browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Tabs
    if(request.toggle === "hideHomeTab") styleInjector.setHideHomeTab(request.state)
    if(request.toggle === "hideShortsTab") styleInjector.setHideShortsTab(request.state)
    if(request.toggle === "hideSubscriptionsTab") styleInjector.setHideSubscriptionsTab(request.state)
    if(request.toggle === "hideYouTab") styleInjector.setHideYouTab(request.state)
    if(request.toggle === "hideYouTubeMusicTab") styleInjector.setHideYouTubeMusicTab(request.state)

    // Menus
    if(request.toggle === "hideLibraryMenu") { styleInjector.setHideLibraryMenu(request.state) }
    if(request.toggle === "hideSubscriptionsMenu") { styleInjector.setHideSubscriptionsMenu(request.state }
    if(request.toggle === "hideExploreMenu") { styleInjector.setHideExploreMenu(request.state) }
    if(request.toggle === "hideMoreMenu") { styleInjector.setHideMoreMenu(request.state) }
    if(request.toggle === "hideSettingsMenu") { styleInjector.setHideSettingsMenu(request.state) }

    // Other
    if(request.toggle === "hideFooter") { styleInjector.setHideFooter(request.state) }
    if(request.toggle === "redirectSubscriptionsTab") styleInjector.setRedirectSubscriptionsTab(request.state)
});