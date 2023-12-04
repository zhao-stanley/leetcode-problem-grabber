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

async function validateVersion() {
  const response = await fetch(
    "https://raw.githubusercontent.com/zhao-stanley/leetcode-problem-grabber/main/manifest.json"
  );
  const json = await response.json();
  let officialVersion = json.version;
  let localVersion = chrome.runtime.getManifest().version;
  if (officialVersion !== localVersion) {
    let a = document.createElement("a");
    a.href =
      "https://github.com/zhao-stanley/leetcode-problem-grabber/archive/refs/heads/main.zip";
    a.target = "_blank";
    a.innerText = `v${localVersion} (Update Available)`;
    a.className = "text-red-500";
    return document.getElementById("version").appendChild(a);
  }
  return (document.getElementById("version").innerText = `v${localVersion}`);
}

validateVersion();
// document.getElementById("version").innerText = `v${
//   // chrome.runtime.getManifest().version

// }`;
