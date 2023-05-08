document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-container");
  const menuOpen = document.querySelector(".fa-bars");
  const menuList = document.querySelector('.show-menu')
  const body = document.querySelector("body");
  menuOpen.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuList.classList.add('active')
    body.classList.add("body-overlay");
  });

  const menuCloseIcon = document.querySelector(".close");
  menuCloseIcon.addEventListener("click", () => {
    if (menuList.classList.contains("active")) {
      menuList.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      body.classList.remove("body-overlay");
    }
  });
});
