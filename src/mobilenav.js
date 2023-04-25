const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", function () {
  this.classList.toggle("active");
});




export { navbarToggle };