

 document.body.addEventListener('mouseup',async function(event) {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim().split(" ");    // array of words
    const word = selectedText[0];                                   //final word to be searched
    
    console.log(word);

    if (word !== '') {
        await chrome.storage.local.set({ name: "David", color: "green" });   
        // chrome.storage.local.set({word})                            // save in local env of ext
        console.log("saved in local");
                                                                    //fetch somewhere and do api call
    }
});











// document.body.addEventListener(onmouseup,(async () => {
//     // console.log("hi");

//     const word = window.getSelection();
//     console.log(word);

//     await chrome.storage.local.set({ word });
// })())
