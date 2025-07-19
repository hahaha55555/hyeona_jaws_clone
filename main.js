const header = document.querySelector("#header");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const logo = document.querySelector(".c_logo");
const wlogo = document.querySelector(".w_logo");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    logo.classList.add("block");
    wlogo.classList.add("hide");
  } else {
    logo.classList.remove("block");
    wlogo.classList.remove("hide");
  }
});

// $(".gnb>li").on("mouseenter", function () {
//   $(this).children(".submenu").stop(true, true).slideDown();
// });
// $(".gnb>li").on("mouseleave", function () {
//   $(this).children(".submenu").stop(true, true).slideUp();
// });

/*
const logo1 = document.getElementsByClassName("w_logo");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    logo1.classList.add("block");
  } else {
    logo1.classList.remove("block");
  }
})*/
/*
const gnb = document.querySelectorAll("#gnbscroll");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    gnb.classList.add("gnbs");
  } else {
    gnb.classList.remove("gnbs");
  }
});*/
$("ul.neofore").hover(function () {
  $("li.list").fadeToggle();
  $("li.list").fadeToggle("slow");
  $("li.list").fadeToggle(3000);
});
