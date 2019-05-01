const previewVideo = document.querySelector(".preview-video > iframe");
const mainContent = document.querySelector(".main-content");
const mainContentMaxWidth = Number(getComputedStyle(mainContent).maxWidth.replace("px", ""));

const widescreenRatio = (9 / 16);

window.addEventListener("resize", () => {
  updatePreviewVideoHeight()
});

function updatePreviewVideoHeight() {
  const deviceWidth = screen.width;
  let height = deviceWidth * widescreenRatio;

  if (deviceWidth >= mainContentMaxWidth) {
    height = mainContentMaxWidth * widescreenRatio;
  }
  previewVideo.setAttribute("height", height);
}

updatePreviewVideoHeight();
