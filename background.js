var selectedWord = '';
var selectedMode = '';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if ((message.type) === "sendText") {
    selectedWord = message.text;
  }
  else if ((message.type) === "sendMode") {
  	selectedMode = message.mode;
  }
});

// chrome.tabs.onUpdated.addListener( funtion (tabId, changeInfo, tab) {
// 	if (changeInfo.status == 'complete') {

// 	}
// });
