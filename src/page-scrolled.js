document.addEventListener("scroll", function () {
  const nav = document.getElementsByClassName("navbar")[0];
  const addScrolled = document.documentElement.scrollTop > 20;
  if (nav) {
    if (addScrolled) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
});
