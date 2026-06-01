// =============================
// MIISA ENTERPRISES
// SCRIPT.JS
// =============================

// Current Year Auto Update

document.addEventListener("DOMContentLoaded", () => {

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(el => {
el.textContent = new Date().getFullYear();
});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior: 'smooth'
});

});

});

// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 5px 25px rgba(0,0,0,.1)";

}else{

header.style.boxShadow =
"0 2px 20px rgba(0,0,0,.05)";

}

});

// Fade In Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

document.querySelectorAll(
".service-card,.testimonial,.faq-item"
).forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "all .6s ease";

observer.observe(el);

});