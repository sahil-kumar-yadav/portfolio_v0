// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.querySelector(".navbar-links");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navbarLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('.navbar-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for the navbar height
            behavior: 'smooth'
        });
    });
});

// Home Section (Animation)
document.addEventListener("DOMContentLoaded", () => {
    const homeContent = document.querySelector(".home-content");
    homeContent.style.animation = "fadeIn 2s forwards"; // Trigger animation directly
});

// Scroll Animation for Sections (Refactored for DRY principle)
const animateSectionOnScroll = (section, targetClass, offset = 3) => {
    const sectionElement = document.querySelector(section);
    const contentElements = document.querySelectorAll(targetClass);

    window.addEventListener("scroll", () => {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const windowScroll = window.scrollY + window.innerHeight;

        if (windowScroll >= sectionTop + sectionHeight / offset) {
            contentElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add("visible");
                }, index * 300); // Stagger animation
            });
        }
    });
};

// Apply scroll animation to About and Projects sections
animateSectionOnScroll("#about", ".about-content", 3);
animateSectionOnScroll("#projects", ".project-card", 3);

// Contact Form Submit Handler
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual form submission

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    // Simulating a form submission
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Reset the form after submission
    contactForm.reset();
});
