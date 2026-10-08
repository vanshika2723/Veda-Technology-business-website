const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}


/* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* ==============================
   STEP 7 - FINAL POLISH
================================ */

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Scroll Reveal */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}

/* Hero Animation */
.hero-content {
    animation: heroContent 0.9s ease forwards;
}

.hero-visual {
    animation: heroVisual 1s ease forwards;
}

@keyframes heroContent {
    from {
        opacity: 0;
        transform: translateX(-40px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes heroVisual {
    from {
        opacity: 0;
        transform: translateX(40px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Floating Animation */
.floating-card {
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

/* Button Hover */
.primary-btn,
.secondary-btn,
.submit-btn {
    transition: all 0.3s ease;
}

.primary-btn:hover,
.submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(249, 115, 22, 0.25);
}

.secondary-btn:hover {
    transform: translateY(-3px);
}

/* Card Hover Polish */
.program-card,
.service-card,
.about-card {
    transition: all 0.35s ease;
}

.program-card:hover,
.service-card:hover,
.about-card:hover {
    transform: translateY(-8px);
}

/* Navbar Link Animation */
.nav-links a {
    position: relative;
}

.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: #F97316;
    transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.active::after {
    width: 100%;
}

/* Loading Screen */
.page-loader {
    position: fixed;
    inset: 0;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease, visibility 0.5s ease;
}

.page-loader.hide {
    opacity: 0;
    visibility: hidden;
}

.loader-logo {
    font-size: 32px;
    font-weight: 800;
    color: #F97316;
    animation: loaderPulse 1.2s infinite;
}

@keyframes loaderPulse {
    0%,
    100% {
        opacity: 0.5;
        transform: scale(0.95);
    }

    50% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Mobile Menu Improvement */
@media (max-width: 768px) {

    .nav-links a {
        display: block;
        padding: 12px 0;
    }

    .nav-links a::after {
        display: none;
    }

    .floating-card {
        animation: none;
    }
}