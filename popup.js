const problemName = document.getElementById("problemNameButton");
const problemSkeleton = document.getElementById("problemSkeletonButton");

problemName.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "grabProblemName" });
  });
});
problemSkeleton.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "grabProblemSkeleton" });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.data) {
    const data = request.data;
    document.body.focus();
    navigator.clipboard.writeText(data).then(() => {
      let element =
        request.type === "problemName"
          ? problemName
          : request.type === "problemSkeleton"
          ? problemSkeleton
          : null;
      if (!element) return;
      const originalText = element.textContent;
      element.textContent = "Copied!";
      setTimeout(() => {
        element.textContent = originalText;
      }, 2500);
    });
  }
});

document.getElementById("version").innerText = `v${
  chrome.runtime.getManifest().version
}`;
