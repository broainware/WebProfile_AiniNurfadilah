// 3D CARD ANIMATION
const card = document.getElementById("profileCard");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (rect.width / 2 - (e.clientX - rect.left)) / 10;
    const y = (rect.height / 2 - (e.clientY - rect.top)) / 10;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
});

// PROJECT SLIDER LOGIC
const track = document.querySelector('.project-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < 1) { 
        index++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

function updateSlider() {
    const width = document.querySelector('.slider-container').offsetWidth + 20;
    track.style.transform = `translateX(-${index * width}px)`;
}

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot langsung mengikuti kursor (instan)
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline mengikuti dengan efek halus (GSAP style tanpa library)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 250, fill: "forwards" });
});

// Perbaikan Hover: Agar saat membesar tetap center
const interactables = document.querySelectorAll("a, button, .skill-box, .project-card, .slide-btn");
interactables.forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursorOutline.style.width = "70px";
        cursorOutline.style.height = "70px";
        cursorOutline.style.margin = "0"; // Memastikan tidak ada offset tambahan
        cursorOutline.style.backgroundColor = "rgba(196, 59, 59, 0.15)";
        cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)"; // Dot mengecil biar elegan
    });
    el.addEventListener("mouseleave", () => {
        cursorOutline.style.width = "30px";
        cursorOutline.style.height = "30px";
        cursorOutline.style.backgroundColor = "transparent";
        cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// ANIMASI TEKS MUNCUL (TEXT SPLIT)
document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".hero-text h1, .hero-text p");
    texts.forEach(text => {
        const content = text.innerHTML;
        text.innerHTML = `<span class="reveal-text">${content}</span>`;
    });
});