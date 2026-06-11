// =========================================
// Shamli Physiotherapy Osteo Chiro Clinic
// Main JavaScript File
// =========================================

document.addEventListener('DOMContentLoaded', function () {

    // =====================================
    // Dynamic Copyright Year
    // =====================================
    document.querySelectorAll('.copyright-year').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });

    // =====================================
    // Mobile Menu Toggle
    // =====================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isOpen);

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // =====================================
    // Sticky Header on Scroll (hide on scroll down, show on scroll up)
    // =====================================
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Minimum scroll distance to trigger

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 20px rgba(44, 107, 95, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(44, 107, 95, 0.08)';
        }

        // Hide header on scroll down, show on scroll up
        if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                // Scrolling DOWN and past hero — hide header
                header.classList.add('header-hidden');
            } else {
                // Scrolling UP — show header but hide top-bar
                header.classList.remove('header-hidden');
                if (scrollTop > 100) {
                    header.classList.add('top-bar-hidden');
                }
            }
            lastScrollTop = scrollTop;
        }

        // Show top-bar again only when at the very top of the page
        if (scrollTop <= 100) {
            header.classList.remove('top-bar-hidden');
        }
    });

    // =====================================
    // FAQ Accordion
    // =====================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items and reset aria-expanded
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const btn = item.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // =====================================
    // Smooth Scroll for Anchor Links
    // =====================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =====================================
    // =====================================
    // 2-Step Appointment Form
    // =====================================
    const appointmentForm = document.getElementById('appointmentForm');
    const formMessage     = document.getElementById('formMessage');
    const step1           = document.getElementById('formStep1');
    const step2           = document.getElementById('formStep2');
    const toStep2Btn      = document.getElementById('toStep2');
    const toStep1Btn      = document.getElementById('toStep1');
    const stepDot1        = document.getElementById('stepDot1');
    const stepDot2        = document.getElementById('stepDot2');
    const stepDot3        = document.getElementById('stepDot3');
    const connectors      = document.querySelectorAll('.step-connector');

    // ── Shared helpers ──────────────────────────────────────
    function clearErrors(scope) {
        scope.querySelectorAll('.field-error, .field-valid').forEach(el => {
            el.classList.remove('field-error', 'field-valid');
            el.removeAttribute('aria-invalid');
        });
        scope.querySelectorAll('.field-error-msg').forEach(el => el.remove());
        // Clear text inside any <span class="field-error"> error containers
        scope.querySelectorAll('span.field-error').forEach(el => { el.textContent = ''; });
    }

    function markError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;
        field.classList.add('field-error');
        field.setAttribute('aria-invalid', 'true');

        // Populate the aria-describedby error span if it exists
        var errorSpan = document.getElementById(fieldId + '-error');
        if (errorSpan) {
            errorSpan.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + message;
        } else {
            // Fallback: create an inline error message
            var msg = document.createElement('span');
            msg.className = 'field-error-msg';
            msg.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + message;
            field.parentNode.appendChild(msg);
        }
    }

    function markValid(fieldId) {
        var el = document.getElementById(fieldId);
        if (!el) return;
        el.classList.add('field-valid');
        el.setAttribute('aria-invalid', 'false');
        // Clear any associated error span
        var errorSpan = document.getElementById(fieldId + '-error');
        if (errorSpan) errorSpan.textContent = '';
    }

    function showFormMessage(message, type) {
        if (!formMessage) return;
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if (type === 'success') {
            setTimeout(() => { formMessage.style.display = 'none'; }, 10000);
        }
    }

    // ── Step indicator helpers ───────────────────────────────
    function setStepActive(stepNum) {
        [stepDot1, stepDot2, stepDot3].forEach((dot, i) => {
            if (!dot) return;
            dot.classList.remove('active', 'completed');
            if (i + 1 < stepNum)  dot.classList.add('completed');
            if (i + 1 === stepNum) dot.classList.add('active');
        });
        // Fill the connector between step 1 and 2 when on step 2+
        if (connectors[0]) connectors[0].classList.toggle('completed', stepNum > 1);
        if (connectors[1]) connectors[1].classList.toggle('completed', stepNum > 2);
    }

    // ── Step 1 validation ────────────────────────────────────
    function validateStep1() {
        clearErrors(step1);
        let ok = true;

        const name  = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name) {
            markError('fullName', 'Full name is required'); ok = false;
        } else { markValid('fullName'); }

        if (!phone) {
            markError('phone', 'Phone number is required'); ok = false;
        } else if (!/^[0-9+\s\-]{10,15}$/.test(phone)) {
            markError('phone', 'Enter a valid phone number'); ok = false;
        } else { markValid('phone'); }

        if (!email) {
            markError('email', 'Email address is required'); ok = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            markError('email', 'Enter a valid email address'); ok = false;
        } else { markValid('email'); }

        return ok;
    }

    // ── Step 2 validation ────────────────────────────────────
    function validateStep2() {
        clearErrors(step2);
        let ok = true;

        const date      = document.getElementById('preferredDate').value;
        const time      = document.getElementById('preferred-time').value;
        const condition = document.getElementById('condition').value;

        if (!date) {
            markError('preferredDate', 'Please select a date'); ok = false;
        } else {
            const sel   = new Date(date);
            const today = new Date(); today.setHours(0, 0, 0, 0);
            if (sel < today) {
                markError('preferredDate', 'Please select a future date'); ok = false;
            } else { markValid('preferredDate'); }
        }

        if (!time) {
            markError('preferred-time', 'Please select a preferred time slot'); ok = false;
        } else { markValid('preferred-time'); }

        if (!condition) {
            markError('condition', 'Please select your condition'); ok = false;
        } else { markValid('condition'); }

        return ok;
    }

    // ── Next button (Step 1 → 2) ─────────────────────────────
    if (toStep2Btn) {
        toStep2Btn.addEventListener('click', function () {
            if (!validateStep1()) return;

            step1.classList.add('form-step-hidden');
            step2.classList.remove('form-step-hidden');
            step2.classList.remove('slide-reverse');
            // Trigger reflow so animation re-runs
            void step2.offsetWidth;
            step2.classList.add('form-step');

            setStepActive(2);
            // Scroll to top of form smoothly
            document.getElementById('stepIndicator').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // ── Back button (Step 2 → 1) ─────────────────────────────
    if (toStep1Btn) {
        toStep1Btn.addEventListener('click', function () {
            step2.classList.add('form-step-hidden');
            step1.classList.remove('form-step-hidden');
            step1.classList.add('slide-reverse');
            void step1.offsetWidth;

            setStepActive(1);
            document.getElementById('stepIndicator').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

    // ── Form submit (Netlify Forms) ────────────────────────────
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!validateStep2()) return;

            const submitBtn  = appointmentForm.querySelector('.btn-submit');
            const origLabel  = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled  = true;

            fetch(window.location.pathname, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(new FormData(appointmentForm)).toString()
            })
            .then(response => {
                if (response.ok) {
                    appointmentForm.reset();
                    window.location.href = '/thankyou';
                } else {
                    showFormMessage('Submission failed. Please try calling us directly.', 'error');
                    if (typeof showToast === 'function') showToast('Something went wrong. Please try again.', 'error');
                }
            })
            .catch(() => {
                showFormMessage('An error occurred. Please try calling us at +91 6399130973', 'error');
                if (typeof showToast === 'function') showToast('Connection error. Please call us directly.', 'error');
            })
            .finally(() => {
                submitBtn.innerHTML = origLabel;
                submitBtn.disabled  = false;
            });
        });
    }

    // =====================================
    // Date Input Minimum Date
    // =====================================
    const dateInput = document.getElementById('preferredDate');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        dateInput.setAttribute('min', minDate);
    }

    // =====================================
    // Google Reviews Integration
    // =====================================
    // Placeholder code removed — no #google-reviews-container exists on any page.
    // When ready, implement using Google Places API or a third-party widget
    // with proper CSS classes instead of inline styles.

    // =====================================
    // Scroll-Triggered Stagger Animations
    // =====================================
    const scrollObserverOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
                scrollObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, scrollObserverOptions);

    // Elements to animate on scroll with stagger
    const animateSelectors = [
        '.benefit-card', '.service-card', '.testimonial-card',
        '.value-card', '.condition-card', '.philosophy-item',
        '.contact-card', '.social-btn', '.choose-item',
        '.section-header', '.service-header-content',
        '.service-nav-btn', '.mv-card', '.cert-placeholder',
        '.when-to-consult', '.service-benefits', '.service-cta',
        '.faq-item', '.doctor-profile', '.youtube-embed',
        '.youtube-embed-doctors', '.intro-content',
        '.award-img-card', '.cert-img-card'
    ];

    // Group elements by their parent for staggered delay
    const allAnimElements = document.querySelectorAll(animateSelectors.join(', '));
    const parentGroups = new Map();

    allAnimElements.forEach(el => {
        el.classList.add('anim-ready');

        // Group by parent for stagger
        const parent = el.parentElement;
        if (!parentGroups.has(parent)) {
            parentGroups.set(parent, []);
        }
        const siblings = parentGroups.get(parent);
        const delayIndex = Math.min(siblings.length, 4);
        if (delayIndex > 0) {
            el.classList.add(`anim-visible-delay-${delayIndex}`);
        }
        siblings.push(el);

        scrollObserver.observe(el);
    });

    // =====================================
    // Sticky Services Nav — Shadow on Stick
    // =====================================
    var servicesNav = document.querySelector('.services-nav');
    if (servicesNav) {
        // Create a sentinel element above the nav to detect when sticky kicks in
        var sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        sentinel.style.width = '100%';
        sentinel.style.position = 'relative';
        sentinel.style.visibility = 'hidden';
        servicesNav.parentNode.insertBefore(sentinel, servicesNav);

        var stickyObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                servicesNav.classList.toggle('is-stuck', !entry.isIntersecting);
            });
        }, { threshold: 0, rootMargin: '-90px 0px 0px 0px' });
        stickyObserver.observe(sentinel);
    }

    // =====================================
    // Counter Animation for Stats
    // =====================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;

        statNumbers.forEach(stat => {
            const target = stat.textContent.trim();
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            // Extract the numeric part and everything after it
            const match = target.match(/^(\d+)\s*(.*)/);
            if (!match) return;
            const numericValue = parseInt(match[1]);
            const suffix = match[2]; // e.g. "Lakh+", "+", "%"

            if (!isNaN(numericValue)) {
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (suffix ? ' ' + suffix : '');
                }, 30);
            }
        });

        hasAnimated = true;
    }

    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // =====================================
    // Service Navigation Smooth Scroll
    // =====================================
    const serviceNavButtons = document.querySelectorAll('.service-nav-btn');
    serviceNavButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            serviceNavButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight active service nav button on scroll
    const serviceSections = document.querySelectorAll('.service-section');
    if (serviceSections.length && serviceNavButtons.length) {
        const sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    serviceNavButtons.forEach(function (btn) {
                        btn.classList.toggle('active',
                            btn.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px' });

        serviceSections.forEach(function (section) {
            sectionObserver.observe(section);
        });
    }

    // =====================================
    // Loading State for External Resources
    // =====================================
    window.addEventListener('load', function () {
        // Hide any loading spinners
        const loaders = document.querySelectorAll('.loader, .loading');
        loaders.forEach(loader => {
            loader.style.display = 'none';
        });
    });

    // =====================================
    // Print Functionality
    // =====================================
    const printButtons = document.querySelectorAll('.print-btn');
    printButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            window.print();
        });
    });

    // =====================================
    // Back to Top Button (Optional)
    // =====================================
    // =====================================
    // Back to Top Button
    // =====================================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    // Appearance is fully controlled by .back-to-top in style.css.
    // Only opacity/visibility are set here because the scroll listener
    // toggles them dynamically — they cannot live in a static CSS rule.
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';

    document.body.appendChild(backToTopButton);

    // Show/hide based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(44, 107, 95, 0.4)';
    });

    backToTopButton.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(44, 107, 95, 0.3)';
    });
    // =====================================
    // YouTube: Video ID is hardcoded in HTML data-video-id attribute.
    // To change the video, update data-video-id and img src in index.html.
    // =====================================

    // =====================================
    // 3D Card Tilt Effect (Cursor-Following)
    // =====================================
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
        const tiltCards = document.querySelectorAll(
            '.benefit-card, .service-card, .condition-card, .testimonial-card, .mv-card'
        );

        tiltCards.forEach(card => {
            card.classList.add('tilt-card');

            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Subtle rotation — max ±4 degrees
                const rotateY = ((x - centerX) / centerX) * 4;
                const rotateX = ((centerY - y) / centerY) * 4;

                this.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // =====================================
    // Magnetic Button Effect
    // =====================================
    if (!isMobile) {
        const magneticBtns = document.querySelectorAll('.btn, .btn-appointment, .service-nav-btn');

        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // Subtle magnetic pull — max ±6px
                const moveX = x * 0.15;
                const moveY = y * 0.15;

                this.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            btn.addEventListener('mouseleave', function () {
                this.style.transform = 'translate(0px, 0px)';
                this.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                setTimeout(() => {
                    this.style.transition = '';
                }, 400);
            });
        });
    }

    // =====================================
    // Button Click Ripple Effect
    // =====================================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // =====================================
    // 3D Page Transition System
    // =====================================
    // Intercept internal link clicks for smooth 3D page transitions
    const internalLinks = document.querySelectorAll(
        'a[href^="/about"], a[href^="/services"], a[href^="/doctors"], a[href^="/contact"], a[href^="/privacy"], a[href="/"]'
    );

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it has a hash fragment on the same page, or opens in new tab
            if (!href || href.startsWith('#') || this.target === '_blank') return;
            // Skip if it's the current page
            if (href === window.location.pathname) return;
            // Skip hash links to sections on same page
            if (href.includes('#') && href.split('#')[0] === window.location.pathname) return;

            e.preventDefault();

            // Apply exit animation
            document.body.classList.add('page-exit');

            // Navigate after the exit animation completes
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });

    // =====================================
    // Console Message
    // =====================================
    console.log('%c Shamli Physiotherapy Osteo Chiro Clinic ', 'background: #2C6B5F; color: white; font-size: 16px; padding: 10px;');
    console.log('Website loaded successfully! For support, contact: physiotherapyshamli@gmail.com');
    // =====================================
    // Hero Cursor-Following Dots
    // =====================================
    const heroSection = document.getElementById('heroSection');
    const canvas = document.getElementById('dotsCanvas');

    // Only run on non-touch devices AND respect prefers-reduced-motion
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (heroSection && canvas && !isTouch && !prefersReducedMotion) {
        const ctx = canvas.getContext('2d');
        const DOT_COUNT = 12;
        let mouseX = null;
        let mouseY = null;
        let animationFrameId = null;

        // Each dot stores its current position and velocity
        const dots = Array.from({ length: DOT_COUNT }, (_, i) => ({
            x: 0,
            y: 0,
            size: Math.max(3, 13 - i),
            alpha: Math.max(0.07, 0.5 - i * 0.04),
            lag: 0.1 - i * 0.006   // each dot lags more than the previous
        }));

        function resizeCanvas() {
            const rect = heroSection.getBoundingClientRect();
            const width = Math.round(rect.width);
            const height = Math.round(rect.height);
            
            // Only set canvas dimensions if they've actually changed to avoid layout recalculation / flicker
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        }

        function drawDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Cascade: dot 0 chases mouse, each next dot chases the one before
            let targetX = mouseX ?? canvas.width / 2;
            let targetY = mouseY ?? canvas.height / 2;

            dots.forEach((dot, i) => {
                dot.x += (targetX - dot.x) * dot.lag;
                dot.y += (targetY - dot.y) * dot.lag;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
                ctx.fill();

                // Next dot targets current dot's position
                targetX = dot.x;
                targetY = dot.y;
            });

            animationFrameId = requestAnimationFrame(drawDots);
        }

        function startAnimation() {
            if (!animationFrameId) {
                drawDots();
            }
        }

        heroSection.addEventListener('mousemove', function (e) {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            startAnimation();
        });

        heroSection.addEventListener('mouseleave', function () {
            mouseX = null;
            mouseY = null;
        });

        // Initialize ResizeObserver to catch any size changes (async CSS load, resize, layout shift)
        if (window.ResizeObserver) {
            const resizeObserver = new ResizeObserver(() => {
                resizeCanvas();
            });
            resizeObserver.observe(heroSection);
        } else {
            window.addEventListener('resize', resizeCanvas);
        }

        // Additional fail-safes for loading and back-forward navigation
        window.addEventListener('load', resizeCanvas);
        
        window.addEventListener('pageshow', function (e) {
            resizeCanvas();
            mouseX = null;
            mouseY = null;
            
            // Re-initialize animation loop to ensure it's active
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            startAnimation();
        });

        resizeCanvas();
        startAnimation();
    }

    // =====================================
    // Clinic Image Slideshow System
    // =====================================
    function initSlideshow(container) {
        if (!container) return;
        const track = container.querySelector('.slideshow-track');
        const slides = container.querySelectorAll('.slideshow-slide');
        const dotsContainer = container.querySelector('.slideshow-dots');
        const prevBtn = container.querySelector('.slideshow-arrow.prev');
        const nextBtn = container.querySelector('.slideshow-arrow.next');
        if (!track || slides.length === 0) return;

        let currentIndex = 0;
        let startX = 0;
        let isDragging = false;
        let dragOffset = 0;

        // Build dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slideshow-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        });

        function goTo(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentIndex = index;
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            // Update dots
            dotsContainer.querySelectorAll('.slideshow-dot').forEach((d, i) => {
                d.classList.toggle('active', i === currentIndex);
            });
        }

        function next() { goTo(currentIndex + 1); }
        function prev() { goTo(currentIndex - 1); }

        if (prevBtn) prevBtn.addEventListener('click', prev);
        if (nextBtn) nextBtn.addEventListener('click', next);

        // Touch/swipe support
        let startY = 0;
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            dragOffset = 0; // Reset offset for every new touch sequence
            track.classList.add('dragging');
        }, { passive: false });

        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            dragOffset = currentX - startX;
            const dragY = currentY - startY;

            // If the swipe is horizontal, lock vertical scrolling to ensure smooth transition
            if (Math.abs(dragOffset) > Math.abs(dragY)) {
                if (e.cancelable) e.preventDefault();
            }

            const baseTranslate = -(currentIndex * 100);
            const dragPercent = (dragOffset / container.offsetWidth) * 100;
            track.style.transform = 'translateX(' + (baseTranslate + dragPercent) + '%)';
        }, { passive: false });

        track.addEventListener('touchend', () => {
            track.classList.remove('dragging');
            isDragging = false;
            if (Math.abs(dragOffset) > 50) {
                if (dragOffset < 0) next();
                else prev();
            } else {
                goTo(currentIndex);
            }
            dragOffset = 0;
        });

        track.addEventListener('touchcancel', () => {
            track.classList.remove('dragging');
            isDragging = false;
            goTo(currentIndex);
            dragOffset = 0;
        });

        // Click on slideshow image opens lightbox
        slides.forEach((slide) => {
            const img = slide.querySelector('img');
            if (img) {
                img.addEventListener('click', () => {
                    const allImages = Array.from(slides).map(s => s.querySelector('img'));
                    openLightboxFromArray(allImages, currentIndex);
                });
            }
        });
    }

    // Initialize all slideshows on page (manual only, autoplay removed)
    initSlideshow(document.getElementById('heroSlideshow'));
    initSlideshow(document.getElementById('aboutSlideshow'));

    // =====================================
    // Lightbox Popup System
    // =====================================
    // Create lightbox DOM
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox"><i class="fas fa-times"></i></button>
            <button class="lightbox-nav prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
            <img src="" alt="Enlarged view">
            <button class="lightbox-nav next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
            <div class="lightbox-counter"></div>
        </div>
    `;
    document.body.appendChild(lightboxOverlay);

    let lightboxImages = [];
    let lightboxIndex = 0;

    const lbImg = lightboxOverlay.querySelector('.lightbox-content img');
    const lbCounter = lightboxOverlay.querySelector('.lightbox-counter');
    const lbClose = lightboxOverlay.querySelector('.lightbox-close');
    const lbPrev = lightboxOverlay.querySelector('.lightbox-nav.prev');
    const lbNext = lightboxOverlay.querySelector('.lightbox-nav.next');

    function showLightboxImage() {
        if (lightboxImages.length === 0) return;
        const imgEl = lightboxImages[lightboxIndex];
        lbImg.src = imgEl.src;
        lbImg.alt = imgEl.alt || 'Enlarged view';
        lbCounter.textContent = (lightboxIndex + 1) + ' / ' + lightboxImages.length;
        // Show/hide nav if only 1 image
        lbPrev.style.display = lightboxImages.length > 1 ? '' : 'none';
        lbNext.style.display = lightboxImages.length > 1 ? '' : 'none';
    }

    window.openLightboxFromArray = function(imgArray, startIndex) {
        lightboxImages = imgArray;
        lightboxIndex = startIndex || 0;
        showLightboxImage();
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Global openLightbox function for onclick handlers
    window.openLightbox = function(cardEl) {
        const img = cardEl.querySelector('img');
        if (!img) return;
        // Find sibling images in the same gallery container
        const gallery = cardEl.parentElement;
        const cards = gallery.querySelectorAll('.award-img-card, .cert-img-card');
        const imgs = Array.from(cards).map(c => c.querySelector('img')).filter(Boolean);
        const idx = imgs.indexOf(img);
        openLightboxFromArray(imgs, idx >= 0 ? idx : 0);
    };

    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    lbClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) closeLightbox();
    });
    lbPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
        showLightboxImage();
    });
    lbNext.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
        showLightboxImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightboxOverlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') {
            lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
            showLightboxImage();
        }
        if (e.key === 'ArrowRight') {
            lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
            showLightboxImage();
        }
    });
});

// =====================================
// YouTube Facade — Click to Load
// =====================================
document.querySelectorAll('.youtube-facade').forEach(function (el) {
    function loadVideo() {
        const videoId = el.dataset.videoId;
        if (!videoId) return;
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        iframe.width = '100%';
        iframe.height = el.offsetHeight || 315;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.title = el.getAttribute('aria-label') || 'YouTube video';
        el.innerHTML = '';
        el.appendChild(iframe);
        el.classList.remove('youtube-facade');
        el.removeAttribute('role');
        el.removeAttribute('tabindex');
        el.style.cursor = 'default';
    }
    el.addEventListener('click', loadVideo);
    el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadVideo(); }
    });
});

// =====================================
// Lazy-Load Google Maps (IntersectionObserver)
// =====================================
document.querySelectorAll('iframe[data-src]').forEach(function (iframe) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                iframe.src = iframe.dataset.src;
                observer.unobserve(iframe);
            }
        });
    }, { rootMargin: '200px' });
    observer.observe(iframe);
});

// =====================================
// Utility Functions
// =====================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
    if (match) {
        return '+' + match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phone;
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================
// Keyboard Accessibility — Lightbox Cards
// Allows keyboard users to open certificate/award lightboxes
// using Enter or Space, matching the mouse click behaviour.
// =====================================
document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target;
    if (target.getAttribute('role') === 'button' && typeof openLightbox === 'function') {
        e.preventDefault(); // prevent Space from scrolling the page
        openLightbox(target);
    }
});

// =====================================
// Button Ripple Effect
// =====================================
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    // Remove any existing ripple
    const existing = btn.querySelector('.ripple');
    if (existing) existing.remove();

    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    btn.appendChild(ripple);

    // Clean up after animation
    ripple.addEventListener('animationend', function () {
        ripple.remove();
    });
});

// =====================================
// Toast Notification System
// =====================================
(function () {
    // Create toast container
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);

    /**
     * Show a toast notification.
     * @param {string} message  - The message text
     * @param {string} type     - 'success', 'error', or 'info'
     * @param {number} duration - Auto-dismiss in ms (default 5000)
     */
    window.showToast = function (message, type, duration) {
        type = type || 'info';
        duration = duration || 5000;

        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };

        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.innerHTML =
            '<i class="fas ' + (icons[type] || icons.info) + '"></i>' +
            '<span>' + message + '</span>' +
            '<button class="toast-close" aria-label="Close">&times;</button>';

        container.appendChild(toast);

        // Close on click
        toast.querySelector('.toast-close').addEventListener('click', function () {
            dismissToast(toast);
        });

        // Auto-dismiss
        if (duration > 0) {
            setTimeout(function () { dismissToast(toast); }, duration);
        }
    };

    function dismissToast(toast) {
        if (toast.classList.contains('toast-exit')) return;
        toast.classList.add('toast-exit');
        toast.addEventListener('animationend', function () {
            toast.remove();
        });
    }
})();

// =====================================
// Textarea Character Counter
// =====================================
(function () {
    var textarea = document.getElementById('message');
    if (!textarea) return;

    var maxLen = 500;
    textarea.setAttribute('maxlength', maxLen);

    var counter = document.createElement('span');
    counter.className = 'char-counter';
    counter.textContent = '0 / ' + maxLen;
    textarea.parentNode.appendChild(counter);

    textarea.addEventListener('input', function () {
        var len = textarea.value.length;
        counter.textContent = len + ' / ' + maxLen;

        counter.classList.remove('near-limit', 'at-limit');
        if (len >= maxLen) {
            counter.classList.add('at-limit');
        } else if (len >= maxLen * 0.8) {
            counter.classList.add('near-limit');
        }
    });
})();

/* ===================
   Hero Stats Count-Up Animation
   =================== */
(function () {
    var stats = document.querySelectorAll('.stat-number[data-target]');
    if (!stats.length) return;

    var animated = false;

    function animateCountUp(el) {
        var target = parseInt(el.dataset.target);
        var suffix = el.dataset.suffix || '';
        var format = el.dataset.format || '';
        var duration = 1500;
        var start = 0;
        var startTime = null;

        function easeOutQuart(t) {
            return 1 - Math.pow(1 - t, 4);
        }

        function formatNumber(num) {
            if (format === 'lakh') {
                if (num >= 100000) return '1 Lakh';
                if (num >= 1000) return Math.floor(num / 1000) + 'K';
                return num.toString();
            }
            return num.toString();
        }

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easedProgress = easeOutQuart(progress);
            var current = Math.floor(easedProgress * target);
            el.textContent = formatNumber(current) + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = formatNumber(target) + suffix;
            }
        }

        requestAnimationFrame(step);
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !animated) {
                animated = true;
                stats.forEach(function (el) {
                    animateCountUp(el);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(stats[0].closest('.hero-stats') || stats[0]);
})();

/* ===================
   Testimonial Auto-Scroll Slider
   =================== */
(function () {
    var slider = document.getElementById('testimonialsSlider');
    if (!slider) return;

    // Respect user's motion preference — don't auto-scroll if they prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Clone all cards for seamless infinite loop
    var originalCards = slider.querySelectorAll('.testimonial-card');
    originalCards.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        slider.appendChild(clone);
    });

    var scrollSpeed = 1.5; // pixels per frame (increased for visibility)
    var autoScrollId = null;
    var isPaused = false;

    // Pause button toggle
    var pauseBtn = document.getElementById('testimonialsPauseBtn');
    if (pauseBtn) {
        pauseBtn.addEventListener('click', function () {
            isPaused = !isPaused;
            pauseBtn.setAttribute('aria-pressed', isPaused ? 'true' : 'false');
            pauseBtn.setAttribute('aria-label', isPaused ? 'Resume testimonials scroll' : 'Pause testimonials scroll');
        });
    }

    function autoScroll() {
        if (isPaused) {
            autoScrollId = requestAnimationFrame(autoScroll);
            return;
        }
        slider.scrollLeft += scrollSpeed;
        // Seamless loop: cloned cards fill the second half; reset once past originals
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
        }
        autoScrollId = requestAnimationFrame(autoScroll);
    }

    // Pause on hover/touch
    slider.addEventListener('mouseenter', function () { isPaused = true; });
    slider.addEventListener('mouseleave', function () { if (pauseBtn && pauseBtn.getAttribute('aria-pressed') === 'true') return; isPaused = false; });
    slider.addEventListener('touchstart', function () { isPaused = true; }, { passive: true });
    slider.addEventListener('touchend', function () {
        setTimeout(function () { if (pauseBtn && pauseBtn.getAttribute('aria-pressed') === 'true') return; isPaused = false; }, 2000);
    });

    // Start auto-scrolling when visible
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            autoScrollId = requestAnimationFrame(autoScroll);
        } else if (autoScrollId) {
            cancelAnimationFrame(autoScrollId);
            autoScrollId = null;
        }
    }, { threshold: 0.1 });

    observer.observe(slider);
})();

/* ===================
   Carousel Arrow Navigation (Awards & Certificates) — Infinite Loop
   =================== */
(function () {
    var wrappers = document.querySelectorAll('.carousel-wrapper');
    wrappers.forEach(function (wrapper) {
        var track = wrapper.querySelector('.awards-gallery, .cert-gallery');
        var prevBtn = wrapper.querySelector('.carousel-arrow.prev');
        var nextBtn = wrapper.querySelector('.carousel-arrow.next');
        if (!track || !prevBtn || !nextBtn) return;

        var cards = track.children;
        if (!cards.length) return;

        // Clone first and last few cards for seamless loop
        var cardWidth = function () {
            return cards[0].offsetWidth + parseFloat(getComputedStyle(track).gap || 20);
        };

        // Scroll by the visible width of the track (one "page")
        var scrollAmount = function () {
            return track.clientWidth * 0.75;
        };

        prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (track.scrollLeft <= 10) {
                // Jump to end for infinite loop
                track.style.scrollBehavior = 'auto';
                track.scrollLeft = track.scrollWidth - track.clientWidth;
                track.style.scrollBehavior = 'smooth';
            } else {
                track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
            }
        });

        nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
            if (atEnd) {
                // Jump to start for infinite loop
                track.style.scrollBehavior = 'auto';
                track.scrollLeft = 0;
                track.style.scrollBehavior = 'smooth';
            } else {
                track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
            }
        });

        // Keep arrows always active (no fading since it's infinite)
        prevBtn.style.opacity = '0.9';
        nextBtn.style.opacity = '0.9';
    });
})();
