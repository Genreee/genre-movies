window.addEventListener("scroll", function () {
  var button = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

document
  .getElementById("back-to-top-btn")
  .addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
