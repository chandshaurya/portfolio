document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLLING FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const closeBtn = document.querySelector('.close-btn');

    // Check if the necessary elements exist to avoid errors on the main page
    if (lightbox && lightboxImg && galleryImages.length > 0 && closeBtn) {
        
        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = image.src;
            });
        });

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        closeBtn.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});