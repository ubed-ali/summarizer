function getCurrentState(state) {
    switch (state) {
        case 1: return "Normal";
        case 2: return "Focused";
        case 3: return "Summary";
        case 4: return "Transcript";
    }
}
document.getElementById("transcript").onclick = function (event) {
    document.getElementById("currentMode").innerHTML = window.open("http://127.0.0.1:5000/transcript")
    chrome.storage.local.set({ youtube_state: 4 });
    }
document.getElementById("summary").onclick = function (event) {
    document.getElementById("currentMode").innerHTML = window.open("http://127.0.0.1:5000/summary")
    chrome.storage.local.set({ youtube_state: 3 });
    }
document.getElementById("focused").onclick = function (event) {
    document.getElementById("currentMode").innerHTML = getCurrentState(2);
    chrome.storage.local.set({ youtube_state: 2 });
}
document.getElementById("normal").onclick = function (event) {
    document.getElementById("currentMode").innerHTML = getCurrentState(1);
    chrome.storage.local.set({ youtube_state: 1 });
}

chrome.storage.local.get(['youtube_state'], function (result) {
    const state = result.youtube_state;
    const currentMode = document.getElementById("currentMode");
    currentMode.innerHTML = getCurrentState(state);
    currentMode.style.color = "red";
});