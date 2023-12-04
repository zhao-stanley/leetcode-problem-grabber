function changeIcon() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].url.includes("leetcode.com/problems/")) {
      chrome.action.setIcon({ path: "img/icon128.png" });
    } else {
      chrome.action.setIcon({ path: "img/inactive.png" });
    }
  });
}

chrome.action.disable();

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(() => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: chrome.runtime.getManifest().host_permissions.map((h) => {
          const [, sub, host] = h.match(/:\/\/(\*\.)?([^/]+)/);
          return new chrome.declarativeContent.PageStateMatcher({
            pageUrl: sub ? { hostSuffix: "." + host } : { hostEquals: host },
          });
        }),
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ]);
  });
});

chrome.tabs.onActivated.addListener(changeIcon);
chrome.tabs.onUpdated.addListener(changeIcon);
