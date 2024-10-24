// Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');  // Match the class used in CSS
        const darkModeEnabled = document.body.classList.contains('dark-mode');  // Check for 'dark-mode' class
        localStorage.setItem('darkMode', darkModeEnabled);
    });
}

// Check Local Storage for Dark Mode Preference
window.onload = function() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');  // Match the CSS class here too
        if (darkModeToggle) { // Check if the element exists before accessing it
            darkModeToggle.checked = true;
        }
    }
};

let lastScrollTop = 0; // Keeps track of the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }

    lastScrollTop = scrollTop; // Update last scroll position
});

// Show the navbar on mouse enter
navbar.addEventListener('mouseenter', () => {
    navbar.classList.remove('hidden');
    navbar.classList.add('visible');
});

// Optionally, hide the navbar when the mouse leaves (if desired)
navbar.addEventListener('mouseleave', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Check scroll position

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    }
});
