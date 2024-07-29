document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => {
        observer.observe(target);
    });

    const targets1 = document.querySelectorAll('.section-header');
    targets1.forEach(target => {
        observer.observe(target);
    });
});