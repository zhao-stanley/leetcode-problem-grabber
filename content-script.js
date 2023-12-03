chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "grabProblemName") {
    for (const a of document.body.querySelectorAll("a")) {
      if (a.textContent.includes(document.title.split(" - ")[0])) {
        return chrome.runtime.sendMessage({
          data: a.textContent.replace(/[.\s]/g, "").concat(".py"),
          type: "problemName",
        });
      }
    }
  } else if (request.action === "grabProblemSkeleton") {
    return chrome.runtime.sendMessage({
      data: `"""\n${
        document
          .querySelector("[data-track-load='description_content']")
          .innerText.replaceAll("\n\n", "\n")
          .split("\n\n \n\nFollow up")[0]
      }\n"""\n\n${document
        .getElementsByClassName("view-lines")[0]
        .innerText.replace(/[^\x00-\x7F]/g, " ")}`,
      type: "problemSkeleton",
    });
  }
});
