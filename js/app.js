// Good support
// https://caniuse.com/?search=IntersectionObserver

// Get all images
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, imageObserver) => {

  entries.forEach(entry => {

    // Not on the screen
    if (!entry.isIntersecting) {
        return;
    }

    // On the screen
    if (entry.isIntersecting) {
        const image = entry.target;

        // Url updated / Very specific case for lazy-loading
        image.src = image.src.replace('w=10&', 'w=800&');

        // Stop observing
        imageObserver.unobserve(entry.target);
    }

  });

}, {});

images.forEach(image => imageObserver.observe(image));