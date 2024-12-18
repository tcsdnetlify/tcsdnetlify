    document.addEventListener('DOMContentLoaded', function() {
        const fadeInElements = document.querySelectorAll('.fade-in');

        function checkVisibility() {
            fadeInElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    el.classList.add('visible');
                }
            });
        }

        // Marcar header como "scrolled" ao rolar
        const header = document.querySelector('header');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            checkVisibility();
        });

        checkVisibility();
    });

