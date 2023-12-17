//Smooth Scrolling
document.addEventListener('DOMContentLoaded', function () {
    // Get all the anchor links in the navbar
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Add click event listeners to each link
    navbarLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target element's id from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll smoothly to the target element
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
