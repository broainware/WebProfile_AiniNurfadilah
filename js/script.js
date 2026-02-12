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