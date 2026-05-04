/**
 * FX TRANSITIONS — Cinematic Page Transitions

 * La Nonna Rústica — Fase 1 Premium
 */
(function () {
    'use strict';


    // --- Build overlay DOM ---
    const overlay = document.createElement('div');
    overlay.id = 'pt-overlay';
    overlay.innerHTML = `
        <div class="pt-curtain-top"></div>
        <div class="pt-curtain-bottom"></div>
        <div class="pt-logo-wrap">
            <img src="img/logo.png" alt="La Nonna">
            <span>LA NONNA RÚSTICA</span>
        </div>
    `;
    document.body.appendChild(overlay);

    /* ---- PAGE IN (current page reveals) ---- */
    function pageIn() {
        overlay.classList.add('pt-leaving');
        setTimeout(() => {
            overlay.classList.remove('pt-leaving');
        }, 900);
    }

    /* ---- PAGE OUT (navigate away) ---- */
    function pageOut(href) {
        overlay.classList.add('pt-entering');
        overlay.style.pointerEvents = 'all';
        setTimeout(() => {
            window.location.href = href;
        }, 680);
    }

    /* ---- Intercept internal links ---- */
    function bindLinks() {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');

            // Skip: external, anchor-only, tel, mailto, blank
            if (!href || href.startsWith('#') || href.startsWith('tel:') ||
                href.startsWith('mailto:') || href.startsWith('http') ||
                href.startsWith('wa.me') || link.target === '_blank') return;

            link.addEventListener('click', function (e) {
                e.preventDefault();
                pageOut(href);
            });
        });
    }


    /* ---- Init on DOM ready ---- */
    document.addEventListener('DOMContentLoaded', () => {
        bindLinks();

        // Small delay so browser has painted the page
        requestAnimationFrame(() => {
            requestAnimationFrame(pageIn);
        });
    });

    // Expose for SPA-like dynamic link additions
    window.FxTransitions = { pageIn, pageOut, bindLinks };
})();
