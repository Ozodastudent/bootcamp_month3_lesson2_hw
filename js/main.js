var siteHeaderbtnEl = document.querySelector(".site-header_menu-btn");
var headerEl = document.querySelector(".header");

siteHeaderbtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("site-header-open");
});
