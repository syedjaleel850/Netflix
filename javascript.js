// FAQ Toggle Functionality
document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        let icon = faq.querySelector("svg");
        let isOpen = faq.classList.contains("active");
        icon.style.transform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
    });
});

// Email Validation
document.querySelector(".hero-buttons button").addEventListener("click", () => {
    let emailInput = document.querySelector(".hero-buttons input");
    let emailValue = emailInput.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        emailInput.style.borderColor = "red";
    } else {
        alert("Email submitted successfully!");
        emailInput.style.borderColor = "green";
    }
});

// Play video when section is in view
let videoElements = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

videoElements.forEach((video) => {
    observer.observe(video);
});
