// all other  code


// get active tab object
(async ()=>{
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const tabId = tab.id;
    console.log("before content script" , tabId);

    // await chrome.scripting.executeScript({
    //     target: { tabId },
    //     files: ['/scripts/contentScript.js']
    // })
    console.log("after content script");

    const user = { name: "vivek", color: "red" };
    await chrome.storage.local.set({ user });
    
    const { name } = await chrome.storage.local.get("name")
    console.log(name);

})()
console.log("outside bg file");
