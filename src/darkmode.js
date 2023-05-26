const dark = document.getElementById("darkmode");
const originalSrc = "lightmode.png";
const newSrc = "darkmode.png";
let isOriginal = true;

dark.addEventListener("click", () => {
  if (isOriginal) {
    dark.src = newSrc;
    console.log("background changed to lightmode");
    document.body.style.setProperty("background-color", "var(--clr-light)");
    document.body.style.setProperty("color", "var(--clr-dark)");
    setStylesForAnchors("color", "var(--clr-dark)");
    document.documentElement.style.setProperty("--clr-semi-dark", "lightgray");
   setStylesForElements(".timer", "background-color", "var(--clr-light");


  } else {
    dark.src = originalSrc;
    console.log("background changed to darkmode");
    document.body.style.setProperty("background-color", "var(--clr-dark)");
    document.body.style.setProperty("color", "var(--clr-light)");
    setStylesForAnchors("color", "var(--clr-light)");
    document.documentElement.style.setProperty("--clr-semi-dark", "#0e1424");
      setStylesForElements(".timer", "background-color", "var(--clr-dark)");
  }

  isOriginal = !isOriginal;
});

function setStylesForAnchors(property, value) {
  const anchors = document.getElementsByTagName("a");

  for (let i = 0; i < anchors.length; i++) {
    anchors[i].style.setProperty(property, value);
  }
}


function setStylesForElements(selector, property, value) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    element.style.setProperty(property, value);
  });
}