chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "grabProblemName") {
    for (const a of document.body.querySelectorAll("a")) {
      if (a.textContent.includes(document.title.split(" - ")[0])) {
        return chrome.runtime.sendMessage({
          data: a.textContent
            .replace(".", "")
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join("")
            .concat(".py"),
          type: "problemName",
        });
      }
    }
  } else if (request.action === "grabProblemSkeleton") {
    return chrome.runtime.sendMessage({
      data: `"""\n${
        document
          .querySelector("[data-track-load='description_content']")
          .innerHTML.replaceAll("<sup>", "^")
          .replaceAll("</sup>", "")
          .replace(/<.*?>/g, "")
          .replaceAll("&nbsp;", " ")
          .replaceAll("&lt;", "<")
          .replaceAll("&gt;", ">")
          .replaceAll("\n\n", "\n")
          .split("\n \nFollow up")[0]
      }\n"""\n\n${document
        .getElementsByClassName("view-lines")[0]
        .innerText.replace(/[^\x00-\x7F]/g, " ")}`,
      type: "problemSkeleton",
    });
  }
});
