"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import GlobalNav from '@/components/GlobalNav';
import Preloader from '@/components/Preloader';
import Footer from '@/components/Footer';
import '../../styles/nosotros.css';
import '../../styles/nosotros-mobile.css';

export default function NosotrosPage() {
  useEffect(() => {
    const isMobile = window.innerWidth < 900;

    const revealOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, revealOptions);

    document.querySelectorAll('.reveal, .mobile-reveal').forEach(el => revealObserver.observe(el));

    if (!isMobile) {
      const nodes = document.querySelectorAll('.history-node');
      const images = document.querySelectorAll('.history-img-wrapper');

      const nodeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nodes.forEach(n => n.classList.remove('focus'));
            entry.target.classList.add('focus');
            const targetId = entry.target.getAttribute('data-target');
            images.forEach(img => {
              img.classList.remove('active-img');
              if (img.id === targetId) img.classList.add('active-img');
            });
          }
        });
      }, { threshold: 0.2, rootMargin: '-20% 0px -40% 0px' });

      nodes.forEach(node => nodeObserver.observe(node));
      if (nodes[0]) nodes[0].classList.add('focus');
      if (images[0]) images[0].classList.add('active-img');
    } else {
      document.querySelectorAll('.history-node').forEach(n => n.classList.add('focus'));
    }

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <style>{`@media (max-width: 900px) { .nav-cart-wrapper { display: none !important; } }`}</style>
      <GlobalNav activeLink="nosotros" />

      {/* 10x Editorial Hero */}
      <header className="hero-editorial">
        <img
          src="img/nosotros-hero.png"
          className="hero-editorial-img"
          alt="Hamburguesa premium Urban Grill"
        />
        <div className="hero-editorial-content reveal">
          <span className="editorial-subtitle">Auténtico &amp; Urbano</span>
          <h1 className="editorial-title">Fuego.<br />Carne.<br />Barrio.</h1>
          <p className="hero-editorial-p">En Urban Grill, el sabor se forja en la brasa. Nacimos con la misión de elevar la comida callejera a una experiencia premium.</p>
        </div>
      </header>

      {/* Métricas Heroicas */}
      <section className="heritage-stats">
        <div className="stat-item reveal"><h3>100%</h3><p>Carne Premium Certificada</p></div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.1s' }}><h3>Braseado</h3><p>Carbón de Roble Seleccionado</p></div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.2s' }}><h3>Barrio</h3><p>Sabor Auténtico de San Luis</p></div>
        <div className="stat-item reveal" style={{ transitionDelay: '0.3s' }}><h3>Local</h3><p>Ingredientes Siempre Frescos</p></div>
      </section>

      {/* History Timeline */}
      <section className="history-stack-container">
        {/* Desktop Sticky Image Column */}
        <div className="history-img-col">
          <div className="history-img-wrapper active-img" id="img-1924">
            <img src="img/historia-2018.png" alt="2018 - El Primer Fuego" />
          </div>
          <div className="history-img-wrapper" id="img-1960">
            <img src="img/historia-2020.png" alt="2020 - La Parrilla se Enciende" />
          </div>
          <div className="history-img-wrapper" id="img-2003">
            <img src="img/historia-2023.png" alt="2023 - Consolidación Urbana" />
          </div>
          <div className="history-img-wrapper" id="img-hoy">
            <img src="img/historia-hoy.png" alt="Hoy - La Experiencia Grill" />
          </div>
        </div>

        <div className="history-text-col">
          <div className="history-node" data-target="img-1924">
            <span className="history-year mobile-reveal">2018</span>
            <h2 className="mobile-reveal">El Primer Fuego</h2>
            <div className="mobile-img-container mobile-reveal">
              <img src="img/historia-2018.png" alt="2018" />
            </div>
            <p className="mobile-reveal">Todo comenzó en un garaje de San Luis. Nuestra pasión por la parrilla nos llevó a experimentar con diferentes tipos de carbón y cortes de carne, buscando ese sabor ahumado que recordábamos de las reuniones familiares.</p>
          </div>

          <div className="history-node" data-target="img-1960">
            <span className="history-year mobile-reveal">2020</span>
            <h2 className="mobile-reveal">La Parrilla se Enciende</h2>
            <div className="mobile-img-container mobile-reveal">
              <img src="img/historia-2020.png" alt="2020" />
            </div>
            <p className="mobile-reveal">En medio de los desafíos, decidimos abrir nuestro primer local oficial. La respuesta del barrio fue inmediata: la gente buscaba algo más que comida rápida, buscaba sabor real hecho con respeto.</p>
          </div>

          <div className="history-node" data-target="img-2003">
            <span className="history-year mobile-reveal">2023</span>
            <h2 className="mobile-reveal">Consolidación Urbana</h2>
            <div className="mobile-img-container mobile-reveal">
              <img src="img/historia-2023.png" alt="2023" />
            </div>
            <p className="mobile-reveal">Urban Grill se convirtió en un referente. Incorporamos nuestras famosas salchipapas premium y las chinchurrias criollas que hoy son leyenda, manteniendo siempre el carbón como el corazón de nuestra cocina.</p>
          </div>

          <div className="history-node" data-target="img-hoy">
            <span className="history-year mobile-reveal">Hoy</span>
            <h2 className="mobile-reveal">La Experiencia Grill</h2>
            <div className="mobile-img-container mobile-reveal">
              <img src="img/historia-hoy.png" alt="Hoy" />
            </div>
            <p className="mobile-reveal">Seguimos aquí, en Av 2 calle 12, honrando nuestras raíces urbanas. Sin atajos, sin carne congelada, solo fuego y pasión por lo que hacemos.</p>
          </div>
        </div>
      </section>

      {/* Filosofía Banner */}
      <div className="philosophy-banner reveal">
        <div className="philosophy-overlay">
          <svg className="philosophy-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F77F00" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <h2 className="philosophy-quote">"El secreto de una gran parrillada no es solo el fuego, es el alma que le pones al carbón."</h2>
          <Link href="/menu" className="btn-nav-reserva philosophy-btn">Conoce Nuestro Arte</Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
