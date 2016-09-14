
function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.sendLike) {
			var likeButton = document.querySelector('[title="Send a Like"]');
			// Simulate mouse click sequence: 
			// https://stackoverflow.com/questions/24025165/simulating-a-mousedown-click-mouseup-sequence-in-tampermonkey
			triggerMouseEvent (targetNode, "mousedown");
			triggerMouseEvent (targetNode, "mouseup");
		}
	}
);