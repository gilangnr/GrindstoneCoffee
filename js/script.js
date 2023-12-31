// toggle class active hamburger
const navbarNav = document.querySelector(".navbar-nav");
// when hamburger menu on click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toogle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// toogle clas active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click outside
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// modal box
const detailCoffeBeans = document.querySelector("#modal-item-detail");
const btnCoffeBenas = document.querySelector(".detail-coffe-beans");
btnCoffeBenas.onclick = (e) => {
  detailCoffeBeans.style.display = "flex";
  e.preventDefault();
};

// close button
document.querySelector(".modal .close-icon").onclick = (e) => {
  detailCoffeBeans.style.display = "none";
  e.preventDefault();
};
const modal = document.querySelector("#modal-item-detail");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
// notification
document.querySelector("#cari").onclick = (e) => {
  swal("Sorry :(", "Feature not working now", "error");
  e.preventDefault();
};

document.querySelector("#add").onclick = (e) => {
  swal("Success!", "Successfully added to cart", "success");
  e.preventDefault();
};
document.querySelector("#cart").onclick = (e) => {
  swal("Success!", "Successfully added to cart", "success");
  e.preventDefault();
};
document.querySelector(".btn").onclick = (e) => {
  swal("Sent!", "Your message has been sent", "success");
  e.preventDefault();
};
