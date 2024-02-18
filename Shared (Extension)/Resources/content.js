browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.toggle === "hideHomeTab") styleInjector.setHideHomeTab(request.state)
    if(request.toggle === "hideShortsTab") styleInjector.setHideShortsTab(request.state)
    if(request.toggle === "hideSubscriptionsTab") styleInjector.setHideSubscriptionsTab(request.state)
    if(request.toggle === "hideYouTab") styleInjector.setHideYouTab(request.state)
    if(request.toggle === "hideYouTubeMusicTab") styleInjector.setHideYouTubeMusicTab(request.state)
});