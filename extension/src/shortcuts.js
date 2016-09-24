function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

function handleShortcut(shortcut) {
	let selector;
	if (shortcut.sendLike) {
		selector = document.querySelector('[title="Send a Like"]');
		// Simulate mouse click sequence: 
		// https://stackoverflow.com/questions/24025165/simulating-a-mousedown-click-mouseup-sequence-in-tampermonkey
		triggerMouseEvent (selector, "mousedown");
		triggerMouseEvent (selector, "mouseup");
	}
	else if (shortcut.search) {
		selector = document.querySelector('[placeholder="Search for people and groups"]');
		// http://stackoverflow.com/a/24450735/2989693
		selector.focus();
	}
	else if (shortcut.newMessage) {
		selector = document.querySelector('[title="New Message"]');
		selector.click();
	}
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		handleShortcut(request);
	}
);