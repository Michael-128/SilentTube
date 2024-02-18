const checkBoxes = document.querySelectorAll("input[type='checkbox']")

checkBoxes.forEach(async checkBox => {
    // Set up initial value
    checkBox.checked = await styleStorage.getItem(checkBox.id)

    // Set up event
    checkBox.addEventListener("change", (e) => {
        browser.tabs.query({active: true}, function(tabs) {
            browser.tabs.sendMessage(tabs[0].id, {toggle: e.target.id, state: e.target.checked})
        });
    })
})