
/* JAIN ENGINEERS - JAVASCRIPT */

console.log("Jain Engineers website loaded successfully!");

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigation clicked:", link.textContent);
    });
});

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

console.log("Form found:", !!contactForm);
console.log("Status element found:", !!formStatus);

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent =
                "Please fill in all required fields.";
            formStatus.style.cssText =
                "display:block; color:#b91c1c; background:#fff1f2; padding:12px; border-radius:5px;";
            return;
        }

        formStatus.textContent =
            "Thank you, " + name + "! Your demo form is working.";

        formStatus.style.cssText =
            "display:block; visibility:visible; opacity:1; color:#166534; background:#f0fdf4; padding:12px; border-radius:5px; margin-bottom:10px;";

        console.log("Demo form submitted:", {
            name: name,
            email: email,
            message: message
        });

        // Message dikhne ke baad form reset karo
        contactForm.reset();

        // Message ko turant clear mat karo
    });
}
