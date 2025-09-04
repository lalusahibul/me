document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navigationMenu = document.getElementById('navigation-menu');
    const hamburgerLines = document.querySelectorAll('#hamburger span');
    const navbar = document.getElementById('navbar');
    const logo_click1 = document.getElementById('logo1');
    const logo_click2 = document.getElementById('logo2');

    let isMenuOpen = false;
    let lastScrollTop = 0;
    let scrollTimeout;

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

    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Remove all navbar classes
        navbar.classList.remove('navbar-visible', 'navbar-hidden', 'navbar-top');

        if (currentScrollTop === 0) {
            navbar.classList.add('navbar-top');
        } else if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.add('navbar-visible');
        }

        scrollTimeout = setTimeout(function () {
            if (currentScrollTop > 0) {
                navbar.classList.remove('navbar-hidden');
                navbar.classList.add('navbar-visible');
            }
        }, 15000);

        lastScrollTop = currentScrollTop;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    logo_click1.addEventListener('click', function () {
        window.open('https://instagram.com/lalusahibul_', 'blank')
    });
    logo_click2.addEventListener('click', function () {
        window.open('https://instagram.com/lalusahibul_', 'blank')
    });

    document.getElementById("my-name").innerText = "Lalu Sahibul Purwa";
});