/* Set the width of the side navigation to 250px */
const div_nav = document.getElementById("mySidenav");
const nav_bar = document.querySelector("#nav_bar");
function openNav() {
  div_nav.style.width = "250px";
  nav_bar.classList.add(HIDDEN_CLASSNAME);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  div_nav.style.width = "0";
  nav_bar.classList.remove(HIDDEN_CLASSNAME);
}
