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
// GANTI bagian SCROLL REVEAL kamu dengan ini:
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150; // Jarak muncul (makin kecil makin cepet muncul)

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

// Jalankan fungsi setiap kali layar di-scroll
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const revealPoint = 150; 

        // KONDISI 1: Elemen masuk ke area layar (Muncul)
        if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
            el.classList.add('active');
        } 
        // KONDISI 2: Elemen keluar dari area layar (Hilang lagi)
        else {
            el.classList.remove('active');
        }
    });
}

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

// ANIMASI TEKS SENSITIF KURSOR (HERO & ABOUT)
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50; // Angka 50 = tingkat sensitivitas
    const y = (window.innerHeight / 2 - e.clientY) / 50;

    // Gerakkan Judul Hero & Deskripsi (Arah berlawanan biar efek depth)
    const heroTitle = document.querySelector(".hero-text h1");
    const heroDesc = document.querySelector(".hero-text p");
    
    if(heroTitle) heroTitle.style.transform = `translate(${x}px, ${y}px)`;
    if(heroDesc) heroDesc.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;

    // Gerakkan Teks di About (Efeknya lebih tipis biar elegan)
    const aboutTitle = document.querySelector(".about-box h2");
    const aboutDesc = document.querySelector(".about-box p");
    
    if(aboutTitle) aboutTitle.style.transform = `translate(${x * -0.3}px, ${y * -0.3}px)`;
    if(aboutDesc) aboutDesc.style.transform = `translate(${x * -0.2}px, ${y * -0.2}px)`;
});
