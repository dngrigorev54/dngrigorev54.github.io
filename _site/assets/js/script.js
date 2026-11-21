/* ============================================================
   ПОРТФОЛИО ДМИТРИЯ ГРИГОРЬЕВА — ЕДИНЫЙ ФАЙЛ СКРИПТОВ
   Покрывает: главную, блог (список + статья), 404
   Все функции обёрнуты в защитные проверки if (element),
   поэтому файл можно безопасно подключать на любой странице.
   ============================================================ */
(function () {
    'use strict';

    /* ==========================================================
       1. НАВИГАЦИЯ ПРИ СКРОЛЛЕ (закрепление фона)
       ========================================================== */
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    /* ==========================================================
       2. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
       (пропускает ссылки внутри dotted-scrollspy — у них свой обработчик)
       ========================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        if (anchor.closest('.dotted-scrollspy')) return;

        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const navCollapse = document.getElementById('navContent');
            if (navCollapse && navCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }

            const offset = 80;
            let targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (targetTop > maxScroll) targetTop = maxScroll;
            if (targetTop < 0) targetTop = 0;

            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        });
    });

    /* ==========================================================
       3. DOTTED-SCROLLSPY
       ========================================================== */
    const scrollspyLinks = document.querySelectorAll('.dotted-scrollspy a');
    const sections = [];

    if (scrollspyLinks.length > 0) {
        scrollspyLinks.forEach(function (link) {
            const sectionId = link.getAttribute('data-section');
            const sectionEl = sectionId ? document.getElementById(sectionId) : null;
            if (sectionEl) sections.push({ el: sectionEl, link: link, id: sectionId });

            // Свой обработчик клика (перехватывает раньше глобального)
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const target = sectionId ? document.getElementById(sectionId) : null;
                if (!target) return;

                const offset = 80;
                let targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                if (targetTop > maxScroll) targetTop = maxScroll;
                if (targetTop < 0) targetTop = 0;

                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            });
        });

        // Обновление активной точки
        window.updateScrollspy = function () {
            if (sections.length === 0) return;

            const scrollPos = window.scrollY + 100;
            const scrollBottom = window.scrollY + window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            let activeSection = sections[0];

            // Если докрутили до самого низа — активна последняя
            if (scrollBottom >= docHeight - 3) {
                activeSection = sections[sections.length - 1];
            } else {
                for (let i = 0; i < sections.length; i++) {
                    const top = sections[i].el.getBoundingClientRect().top + window.scrollY;
                    if (top <= scrollPos) {
                        activeSection = sections[i];
                    } else {
                        break;
                    }
                }
            }

            scrollspyLinks.forEach(function (l) { l.classList.remove('active'); });
            if (activeSection) activeSection.link.classList.add('active');
        };

        // Throttle через requestAnimationFrame
        let scrollspyTicking = false;
        window.addEventListener('scroll', function () {
            if (!scrollspyTicking) {
                window.requestAnimationFrame(function () {
                    window.updateScrollspy();
                    scrollspyTicking = false;
                });
                scrollspyTicking = true;
            }
        }, { passive: true });

        window.updateScrollspy();
    }

    /* ==========================================================
       4. ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ (IntersectionObserver)
       ========================================================== */
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animateElements.forEach(function (el) { observer.observe(el); });
    } else {
        // Fallback: если IO не поддерживается — сразу показываем
        animateElements.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ==========================================================
       5. АНИМИРОВАННЫЕ СЧЁТЧИКИ ([data-count])
       ========================================================== */
    const statNumbers = document.querySelectorAll('[data-count]');

    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        if (isNaN(target)) return;

        const startTime = performance.now();
        const duration = 1600;
        const originalText = target + suffix;

        function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            if (progress >= 1) {
                el.textContent = originalText;
                el.classList.add('pop');
                setTimeout(function () { el.classList.remove('pop'); }, 600);
                return;
            }

            el.textContent = Math.floor(target * eased) + suffix;
            requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    if (statNumbers.length > 0) {
        if ('IntersectionObserver' in window) {
            const numObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting && entry.target.dataset.animating !== 'true') {
                        entry.target.dataset.animating = 'true';
                        animateCounter(entry.target);
                        setTimeout(function () {
                            entry.target.dataset.animating = 'false';
                        }, 2500);
                    }
                });
            }, { threshold: 0.4 });

            statNumbers.forEach(function (num) {
                num.textContent = '0' + (num.getAttribute('data-suffix') || '');
                numObserver.observe(num);
            });
        } else {
            // Fallback: сразу финальные значения
            statNumbers.forEach(function (num) {
                num.textContent = num.getAttribute('data-count') + (num.getAttribute('data-suffix') || '');
            });
        }
    }

    /* ==========================================================
       6. ПЛЕЙСХОЛДЕРЫ ДЛЯ БИТЫХ КАРТИНОК
       (кейсы и сертификаты)
       ========================================================== */
    document.querySelectorAll('.case-preview img, .cert-item img').forEach(function (img) {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            const parent = this.closest('.case-preview, .cert-item');
            if (!parent || parent.querySelector('.cert-placeholder, .project-placeholder')) return;

            const isCert = parent.classList.contains('cert-item');
            const altText = this.getAttribute('alt') || 'Документ';
            const iconClass = this.getAttribute('data-icon') || (isCert ? 'fa-file-alt' : 'fa-globe');

            const placeholder = document.createElement('div');
            placeholder.className = isCert ? 'cert-placeholder' : 'project-placeholder';
            placeholder.innerHTML = '<i class="fas ' + iconClass + '"></i><span>' + altText + '</span>';
            parent.prepend(placeholder);
        });
    });

    /* ==========================================================
       7. ЛАЙТБОКС (сертификаты и благодарности)
       ========================================================== */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImg) {
        function openLightbox(src, caption) {
            lightboxImg.src = src;
            if (lightboxCaption) lightboxCaption.textContent = caption || '';
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(function () { lightboxImg.src = ''; }, 300);
        }

        document.querySelectorAll('.cert-item').forEach(function (item) {
            item.addEventListener('click', function () {
                const src = this.getAttribute('data-img') || this.querySelector('img').src;
                openLightbox(src, this.getAttribute('data-caption') || '');
            });
        });

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    /* ==========================================================
       8. SPEED DIAL (FAB с раскрывающимися контактами)
       ========================================================== */
    const speedDial = document.getElementById('speedDial');
    const speedToggle = document.getElementById('speedToggle');

    if (speedDial && speedToggle) {
        function toggleSpeedDial(e) {
            e.stopPropagation();
            const isOpen = speedDial.classList.toggle('open');
            speedToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            speedToggle.setAttribute('aria-label', isOpen ? 'Закрыть контакты' : 'Открыть контакты');
        }

        function closeSpeedDial() {
            speedDial.classList.remove('open');
            speedToggle.setAttribute('aria-expanded', 'false');
            speedToggle.setAttribute('aria-label', 'Открыть контакты');
        }

        speedToggle.addEventListener('click', toggleSpeedDial);

        document.addEventListener('click', function (e) {
            if (speedDial.classList.contains('open') && !speedDial.contains(e.target)) {
                closeSpeedDial();
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && speedDial.classList.contains('open')) {
                closeSpeedDial();
            }
        });
    }

    /* ==========================================================
       9. ПОКАЗ ЕЩЁ 6 КЕЙСОВ (главная)
       ========================================================== */
    const loadMoreCasesBtn = document.getElementById('loadMoreCasesBtn');
    const loadMoreCasesDone = document.getElementById('loadMoreCasesDone');
    const hiddenCases = document.querySelectorAll('.case-hidden');

    if (loadMoreCasesBtn && hiddenCases.length > 0) {
        loadMoreCasesBtn.addEventListener('click', function () {
            loadMoreCasesBtn.disabled = true;
            loadMoreCasesBtn.classList.add('loading');

            const iconEl = loadMoreCasesBtn.querySelector('i');
            const textEl = loadMoreCasesBtn.querySelector('span');
            if (iconEl) iconEl.className = 'fas fa-spinner';
            if (textEl) textEl.textContent = 'Загружаем кейсы...';

            setTimeout(function () {
                hiddenCases.forEach(function (caseEl, index) {
                    setTimeout(function () {
                        caseEl.classList.add('revealed');
                    }, index * 80);
                });

                setTimeout(function () {
                    loadMoreCasesBtn.style.display = 'none';
                    if (loadMoreCasesDone) loadMoreCasesDone.classList.add('show');
                    // Пересчитываем scrollspy — высота секции изменилась
                    if (typeof window.updateScrollspy === 'function') {
                        window.updateScrollspy();
                    }
                }, hiddenCases.length * 80 + 300);
            }, 400);
        });
    }

    /* ==========================================================
       10. БЛОГ: ПОДГРУЗКА СТАТЕЙ (blog.html)
       ========================================================== */
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreDone = document.getElementById('loadMoreDone');
    const postsContainer = document.getElementById('posts-container');

    if (loadMoreBtn && postsContainer) {
        const morePosts = [
            {
                category: 'WordPress',
                image: 'https://via.placeholder.com/800x400/ff7a1a/0a0a0a?text=WordPress+ACF',
                title: 'ACF + Elementor: как сделать удобное управление контентом для клиента',
                excerpt: 'Клиент хочет сам менять тексты и картинки, но боится сломать вёрстку. Показываю, как с помощью ACF и кастомных полей сделать безопасное редактирование без риска.',
                date: '28 февраля 2026',
                readTime: '5 мин',
                views: '632',
                tags: ['WordPress', 'ACF', 'Elementor']
            },
            {
                category: '1C-Bitrix',
                image: 'https://via.placeholder.com/800x400/ff7a1a/0a0a0a?text=Bitrix+ошибки',
                title: 'Типичные ошибки при доработке 1C-Bitrix и как их избежать',
                excerpt: 'За 4 года в холдинге я набил шишки на Bitrix. Делюсь чек-листом: что проверять перед обновлением, как не сломать компоненты и где искать логи.',
                date: '22 февраля 2026',
                readTime: '9 мин',
                views: '1 021',
                tags: ['1C-Bitrix', 'Компоненты', 'Модули']
            },
            {
                category: 'ИИ в работе',
                image: 'https://via.placeholder.com/800x400/ff7a1a/0a0a0a?text=ChatGPT+в+коде',
                title: 'ChatGPT для рефакторинга кода: 5 промптов, которые реально работают',
                excerpt: 'Не «напиши мне сайт», а конкретные задачи: переписать функцию, найти баг, написать тест. Показываю 5 промптов, которые экономят мне часы работы.',
                date: '18 февраля 2026',
                readTime: '6 мин',
                views: '3 412',
                tags: ['ИИ-агенты', 'ChatGPT', 'Рефакторинг']
            }
        ];

        let currentIndex = 0;

        loadMoreBtn.addEventListener('click', function () {
            if (currentIndex >= morePosts.length) return;

            loadMoreBtn.classList.add('loading');
            loadMoreBtn.disabled = true;
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner"></i> Загружаем...';

            setTimeout(function () {
                const post = morePosts[currentIndex];
                const article = document.createElement('article');
                article.className = 'post-card animate-on-scroll';

                const tagsHtml = post.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');

                article.innerHTML =
                    '<div class="post-card-image">' +
                    '<span class="post-card-category">' + post.category + '</span>' +
                    '<img src="' + post.image + '" alt="' + post.title + '">' +
                    '</div>' +
                    '<div class="post-card-body">' +
                    '<div class="post-card-meta">' +
                    '<span><i class="far fa-calendar"></i> ' + post.date + '</span>' +
                    '<span><i class="far fa-clock"></i> ' + post.readTime + ' чтения</span>' +
                    '<span><i class="far fa-eye"></i> ' + post.views + '</span>' +
                    '</div>' +
                    '<h2 class="post-card-title">' + post.title + '</h2>' +
                    '<p class="post-card-excerpt">' + post.excerpt + '</p>' +
                    '<div class="post-card-footer">' +
                    '<div class="post-card-tags">' + tagsHtml + '</div>' +
                    '<a href="blog-post.html" class="post-card-link">Читать <i class="fas fa-arrow-right"></i></a>' +
                    '</div>' +
                    '</div>';

                postsContainer.appendChild(article);

                // Триггерим появление
                setTimeout(function () { article.classList.add('visible'); }, 50);

                currentIndex++;

                loadMoreBtn.classList.remove('loading');
                loadMoreBtn.disabled = false;

                if (currentIndex >= morePosts.length) {
                    loadMoreBtn.style.display = 'none';
                    if (loadMoreDone) loadMoreDone.classList.add('show');
                } else {
                    loadMoreBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Показать ещё статьи';
                }
            }, 700);
        });
    }

})();