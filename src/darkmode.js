const dark = document.getElementById("darkmode");
const originalSrc = "lightmode.png";
const newSrc = "darkmode.png";
let isOriginal = true;

dark.addEventListener("click", () => {
  if (isOriginal) {
    dark.src = newSrc;
    console.log("background changed to lightmode");
    document.body.style.backgroundColor = "#0e1424";
  } else {
    dark.src = originalSrc;
    console.log("background changed to darkmode");
     document.body.style.backgroundColor = "#000000";
  }

  isOriginal = !isOriginal;
});
