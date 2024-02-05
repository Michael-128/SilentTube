// Initialize extension when page is fully loaded

let lastMutation = setTimeout(init, 500)

const observer = new MutationObserver(() => {
    clearTimeout(lastMutation)
    lastMutation = setTimeout(init, 200)
})

observer.observe(document, {
  childList: true,
  subtree: true
})

if(window.location.pathname === "/") {
    window.location.replace("https://www.youtube.com/feed/subscriptions")
}

function init() {
    
    
    hideTabs("Home")
    hideTabs("Shorts")
    hideTabs("YouTube Music")
    
    hidePages("home")
    
    hideShorts()
}


// General controls

function hideElement(element) {
    element.style.display = "None"
}

function showElement(element) {
    element.style.display = ""
}

function toggleElement(element) {
    element.style.display = element.style.display === "None" ? showElement(element) : hideElement(element)
}


// Controls for sidebar tabs

function findTabs(name) {
    return document.querySelectorAll(`a[title="${name}"]`)
}

function hideTabs(name) {
    findTabs(name).forEach(tab => hideElement(tab))
}

function showTabs(name) {
    findTabs(name).forEach(tab => showElement(tab))
}


// Controls for main page

function findPages(name) {
    return document.querySelectorAll(`ytd-browse[page-subtype="${name}"]`)
}

function hidePages(name) {
    findPages(name).forEach(page => hideElement(page))
}

function showPages(name) {
    findPages(name).forEach(page => showElement(page))
}


// Controls for shorts

function getShorts() {
    return document.querySelectorAll(`ytd-shorts`)
}

function hideShorts() {
    getShorts().forEach(shorts => hideElement(shorts))
}

function showShorts() {
    getShorts().forEach(shorts => showElement(shorts))
}
