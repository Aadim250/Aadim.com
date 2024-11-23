// Smooth Scroll for On-Page Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth Page Transition
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // If link is external, skip transition
        if (href.startsWith('http') || href.startsWith('#')) return;

        e.preventDefault();

        // Add fade-out effect
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Duration of fade-out effect
    });
});

// Parallax Scrolling Effect
window.addEventListener('scroll', function () {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        const speed = section.getAttribute('data-speed') || 0.5;
        const offset = window.pageYOffset * speed;
        section.style.backgroundPositionY = `${offset}px`;
    });
});

// Dynamic Greeting Based on Time of Day
window.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        const hours = new Date().getHours();
        let greeting = 'Hello!';
        if (hours < 12) greeting = 'Good Morning!';
        else if (hours < 18) greeting = 'Good Afternoon!';
        else greeting = 'Good Evening!';
        greetingElement.textContent = greeting;
    }
});
