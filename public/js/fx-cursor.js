/**

 * FX CURSOR — Fire Trail
 * La Nonna Rústica — Fase 1 Premium
 */
(function () {
    'use strict';
    if ('ontouchstart' in window || window.innerWidth < 769) return;

    // --- DOM Elements ---
    const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    const canvas = document.createElement('canvas'); canvas.id = 'fire-cursor-canvas';
    document.body.append(dot, ring, canvas);
    document.body.style.cursor = 'none';

    const ctx = canvas.getContext('2d');
    let mouse = { x: -200, y: -200 };
    let ringPos = { x: -200, y: -200 };
    let particles = [];

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    // --- Track mouse ---
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        dot.style.left = mouse.x + 'px';
        dot.style.top  = mouse.y + 'px';
        for (let i = 0; i < 3; i++) particles.push(mkParticle(mouse.x, mouse.y));
    });

    // --- Hover detection ---
    const hoverSelectors = 'a, button, [role="button"], .card-producto, .sticky-card, input, select, label';
    document.querySelectorAll(hoverSelectors).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // --- Particle factory ---
    function mkParticle(x, y) {
        return {
            x: x + (Math.random() - 0.5) * 10,
            y,
            size: Math.random() * 9 + 3,
            life: 1,
            decay: Math.random() * 0.04 + 0.022,
            vx: (Math.random() - 0.5) * 1.8,
            vy: -(Math.random() * 2.8 + 0.8),
            hue: Math.random() < 0.4 ? 15 : 35,
        };
    }

    function drawParticle(p) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0,   `hsla(55,  100%, 90%, ${p.life})`);
        g.addColorStop(0.35,`hsla(${p.hue + 20}, 100%, 65%, ${p.life * 0.75})`);
        g.addColorStop(0.75,`hsla(${p.hue},      100%, 50%, ${p.life * 0.3})`);
        g.addColorStop(1,   `hsla(${p.hue - 10}, 100%, 40%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
    }

    // --- Ring lerp ---
    function lerpRing() {
        ringPos.x += (mouse.x - ringPos.x) * 0.11;
        ringPos.y += (mouse.y - ringPos.y) * 0.11;
        ring.style.left = ringPos.x + 'px';
        ring.style.top  = ringPos.y + 'px';
    }

    // --- Main loop ---
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = particles.filter(p => p.life > 0 && p.size > 0.4);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            p.vx *= 0.97; p.vy *= 0.98;
            p.size *= 0.94; p.life -= p.decay;
            drawParticle(p);
        });
        lerpRing();
        requestAnimationFrame(loop);
    }
    loop();
})();
