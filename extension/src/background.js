chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var shortcut = {};
    shortcut[command] = true;
    chrome.tabs.sendMessage(tabs[0].id, shortcut);
  });
});

