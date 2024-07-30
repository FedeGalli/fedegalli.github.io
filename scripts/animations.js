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

    const targets = document.querySelectorAll('.resume-item');
    targets.forEach(target => {
        observer.observe(target);
    });

    const targets2 = document.querySelectorAll('.education-item');
    targets2.forEach(target => {
        observer.observe(target);
    });

    const targets1 = document.querySelectorAll('.section-header-resume');
    targets1.forEach(target => {
        observer.observe(target);
    });

    const targets3 = document.querySelectorAll('.section-header-education');
    targets3.forEach(target => {
        observer.observe(target);
    });

    const targets4 = document.querySelectorAll('.section-header-projects');
    targets4.forEach(target => {
        observer.observe(target);
    });

    const targets5 = document.querySelectorAll('.image-tile');
    targets5.forEach(target => {
        observer.observe(target);
    });


});