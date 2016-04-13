var selectedText = function() {
  return window.getSelection().toString();
};

// var getOnload = function() {
//   return window.omload()
// }

var sendSelectedText = function() {
  chrome.runtime.sendMessage({"type": "sendText", "text": selectedText()});
  // chrome.runtime.sendMessage({"type": "onload", "changeInfo": getOnload()});
};


var bodies = document.getElementsByTagName("body");
if (bodies) {
  bodies[0].onmouseup = sendSelectedText;
}
