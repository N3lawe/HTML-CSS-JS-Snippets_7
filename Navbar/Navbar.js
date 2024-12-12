const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (e) {
  e.stopPropagation(); // منع إغلاق القائمة فورًا عند النقر على الزر
  links.classList.toggle("show-links"); // تبديل الفئة لفتح أو إغلاق القائمة
});

// إغلاق القائمة عند النقر خارج الزر أو القائمة
document.addEventListener("click", function (e) {
  if (!navToggle.contains(e.target) && !links.contains(e.target)) {
    links.classList.remove("show-links"); 
  }
});
