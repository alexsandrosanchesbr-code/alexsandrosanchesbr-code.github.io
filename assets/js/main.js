/* -----------------------------
   Mobile Menu
-------------------------------- */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");

menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

/* -----------------------------
   Hero Slider
-------------------------------- */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

/* Auto-slide every 5 seconds */
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
/* Auto Email Popup After 10 Seconds */
setTimeout(() => {
    const popup = document.getElementById("emailPopup");
    if (popup) popup.style.display = "block";
}, 10000);

/* Close Popup */
document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("popupClose");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            document.getElementById("emailPopup").style.display = "none";
        });
    }
});
