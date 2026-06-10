        // ===== Background video: play once, freeze on last frame =====
        // No scroll linkage. The video plays through normally and holds its
        // final frame when it ends.
        const video = document.querySelector('.page-bg video');

        // Hold the last frame: 'loop' is off, and when it ends we pin currentTime.
        video.loop = false;
        video.addEventListener('ended', function() {
            // Park just before the very end so the last frame stays painted
            // (some browsers blank the frame exactly at duration).
            if (video.duration) {
                video.currentTime = Math.max(0, video.duration - 0.05);
            }
        });

        // Fade out the "Guido Tomasella" name 3s before the video ends —
        // the video itself ends on the name, so it would be redundant.
        let nameFadeArmed = true;
        video.addEventListener('timeupdate', function() {
            if (!nameFadeArmed || !video.duration) return;
            if (video.currentTime >= video.duration - 3) {
                nameFadeArmed = false;
                document.body.classList.add('hide-hero-name');
            }
        });

        function startPlayback() {
            document.body.classList.add('hero-reveal');   // Hero entrance animations
            try { video.currentTime = 0; } catch (e) {}
            const p = video.play();
            if (p && typeof p.catch === 'function') {
                p.catch(function() { /* autoplay blocked — Hero is already revealed */ });
            }
        }

        if (video.readyState >= 2) {
            startPlayback();
        } else {
            video.addEventListener('canplay', startPlayback, { once: true });
            // Fallback: reveal Hero even if the video is slow to load.
            setTimeout(function() {
                if (!document.body.classList.contains('hero-reveal')) {
                    document.body.classList.add('hero-reveal');
                }
            }, 2500);
        }

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-title, .pillar, .experience-card, .project-card, .metric, .education-item, .contact-email, .contact-links, .footer-text').forEach(el => {
            observer.observe(el);
        });

        // Stagger animations for grid items
        document.querySelectorAll('.pillars-grid, .experience-grid, .projects-grid, .metrics-grid').forEach(grid => {
            const items = Array.from(grid.children);
            items.forEach((item, i) => {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        setTimeout(() => item.classList.add('reveal'), i * 150);
                        observer.unobserve(item);
                    }
                }, observerOptions);
                observer.observe(item);
            });
        });

        // Counter animation for metrics
        document.querySelectorAll('[data-target]').forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !el.dataset.animated) {
                    el.dataset.animated = 'true';
                    const target = parseInt(el.dataset.target, 10);
                    let current = 0;
                    const duration = 1500;
                    const increment = target / (duration / 16);
                    const counter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            el.textContent = target.toLocaleString();
                            clearInterval(counter);
                        } else {
                            el.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 16);
                    observer.unobserve(el);
                }
            }, observerOptions);
            observer.observe(el);
        });
