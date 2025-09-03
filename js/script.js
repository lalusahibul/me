document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const hamburgerLines = document.querySelectorAll('#hamburger span');

    let isMenuOpen = false;

    menuToggle.addEventListener('click', function () {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            // Show menu
            navigationMenu.classList.remove('hidden');

            hamburgerLines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            hamburgerLines[1].style.opacity = '0';
            hamburgerLines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            // Hide menu
            navigationMenu.classList.add('hidden');

            hamburgerLines[0].style.transform = 'rotate(0) translate(0, 0)';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });

    document.addEventListener('click', function (event) {
        if (isMenuOpen && !menuToggle.contains(event.target) && !navigationMenu.contains(event.target)) {
            isMenuOpen = false;
            navigationMenu.classList.add('hidden');

            hamburgerLines[0].style.transform = 'rotate(0) translate(0, 0)';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });

    // Close menu when window is resized to desktop view
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            isMenuOpen = false;
            navigationMenu.classList.add('hidden');

            hamburgerLines[0].style.transform = 'rotate(0) translate(0, 0)';
            hamburgerLines[1].style.opacity = '1';
            hamburgerLines[2].style.transform = 'rotate(0) translate(0, 0)';
        }
    });
});