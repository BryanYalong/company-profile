// Interactive quote trigger button
const quoteBtn = document.getElementById('quoteBtn');
if (quoteBtn) {
    quoteBtn.addEventListener('click', function() {
        alert('Thank you for your interest in Vikings Global Graphics and Printing! Please email us directly at info@vikingsglobalgraphics.com to start your project inquiry.');
    });
}

// Scroll Spy: Highlight navigation links based on current scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if the page has scrolled past the top of the section (minus a 150px offset for the header)
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});