"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import GlobalNav from '@/components/GlobalNav';
import Footer from '@/components/Footer';
import '../styles/home.css';
import '../styles/menu.css';
import '../styles/home-premium.css';

export default function Home() {
  useEffect(() => {
    // Intersection Observer for Brutal animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe reveals
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Global UI Init
    if (window.initSmartMenu) window.initSmartMenu();

    // Clip-path extreme reveal trick
    const clipObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.4 });
    
    const clipContainer = document.getElementById('clipSection');
    if(clipContainer) clipObserver.observe(clipContainer);

    return () => {
      observer.disconnect();
      clipObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Preloader />
      <GlobalNav />

      {/* Hero Section Brutal */}
      <header className="hero-10k">
        <div className="hero-10k-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop')" }}></div>
        <div className="hero-10k-content reveal">
          <h1>La Parrilla Urbana</h1>
          <p className="hero-desc">Carnes premium asadas al carbón, hamburguesas de autor y el sabor auténtico de San Luis en cada bocado.</p>
          <div className="hero-actions">
            <Link href="/menu" className="hero-cta">Explorar Menú</Link>
            <Link href="/reservas" className="hero-cta btn-reservar-hero">Reservar</Link>
          </div>
        </div>
      </header>

      {/* Marquee Infinito de Alto Impacto */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="filled">Carne Premium</span> <span>•</span> <span>Brasas al Carbón</span> <span>•</span> <span className="filled">Pan Artesanal</span> <span>•</span> <span>Sabor Criollo</span> <span>•</span>
          <span className="filled">Carne Premium</span> <span>•</span> <span>Brasas al Carbón</span> <span>•</span> <span className="filled">Pan Artesanal</span> <span>•</span> <span>Sabor Criollo</span> <span>•</span>
        </div>
      </div>

      {/* Overlapping Structure 1 */}
      <section className="overlap-section reveal" style={{ marginTop: '5rem' }}>
        <div className="overlap-img">
          <img src="img/carbon-roble.png" alt="Parrilla profesional con carbón de roble" />
        </div>
        <div className="overlap-text">
          <span className="subtitle">La Maestría de la Brasa</span>
          <h2>Nuestro Carbón de Roble</h2>
          <p>En Urban Grill, el fuego no es solo una herramienta, es nuestro ingrediente secreto. Seleccionamos cuidadosamente carbón de roble que arde a temperaturas extremas para sellar los jugos naturales de nuestras carnes, otorgándoles un aroma ahumado irresistible y una textura perfecta.</p>
          <p>No usamos parrillas eléctricas. Creemos en la conexión primitiva entre el fuego y la comida, respetando los tiempos de cocción para que cada hamburguesa y chinchurria sea una obra de arte culinaria.</p>
          <Link href="/nosotros" style={{ color: 'var(--color-principal)', fontWeight: 800, textDecoration: 'none', fontSize: '1.1rem', borderBottom: '2px solid' }}>Descubre nuestra historia &rarr;</Link>
        </div>
      </section>

      {/* STICKY SCROLL: La Perfección Italiana */}
      <section className="sticky-super-container">
        <div className="sticky-left">
          <span className="big-number">01</span>
          <span className="subtitle" style={{ fontWeight: 700, color: 'var(--color-principal)', textTransform: 'uppercase', letterSpacing: '2px' }}>Nuestros Pilares</span>
          <h2 className="reveal">El Sabor en su <br />Estado Más Puro</h2>
          <p className="reveal" style={{ fontSize: '1.2rem', color: 'var(--color-texto-claro)', lineHeight: 1.8, marginBottom: '2rem' }}>No preparamos comida rápida, cocinamos con alma. Cada plato que sale de nuestra cocina ha sido mimado por la brasa para garantizar una experiencia explosiva. Descubre nuestros imperdibles a la derecha.</p>
          <Link href="/menu" className="btn-nav-reserva reveal" style={{ display: 'inline-block' }}>Ver menú completo</Link>
        </div>
        <div className="sticky-right">
          <div className="sticky-card reveal">
            <img src="img/Hamburguesa la Matadora.webp" alt="Matadora" />
            <h3>Hamburguesa la Matadora</h3>
            <p>Doble carne premium en pan brioche con queso asado y mermelada de tocineta. Una explosión de sabores urbanos.</p>
          </div>
          <div className="sticky-card reveal">
            <img src="img/Salchipapa Urban Chicken.webp" alt="Urban Chicken" />
            <h3>Urban Chicken Special</h3>
            <p>Nuestra versión premium de la salchipapa: pollo en salsa tártara, queso costeño y huevo de codorniz.</p>
          </div>
          <div className="sticky-card reveal">
            <img src="img/Chinchurria Criolla.webp" alt="Chinchurria" />
            <h3>Chinchurria Criolla</h3>
            <p>Crocante, dorada y servida con nuestra papa criolla insignia. El alma de San Luis en un solo plato.</p>
          </div>
        </div>
      </section>

      {/* CLIP PATH REVEAL: Impresión Visual */}
      <section className="clip-reveal-container reveal" id="clipSection">
        <img src="img/interior-moody.png" alt="Interior premium de Urban Grill" className="clip-reveal-bg" />
        <div className="clip-content">
          <h2>Siente el fuego</h2>
          <p style={{ fontSize: '1.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}>Ven a perderte en el sabor auténtico de la brasa urbana.</p>
        </div>
      </section>

      {/* THEME ULTRA-PREMIUM: Filosofía Inquebrantable */}
      <section className="philosophy-ultra-premium">
        <div className="philosophy-header">
          <span className="subtitle">Sin atajos</span>
          <h2 className="philosophy-title reveal">Filosofía <br />Inquebrantable</h2>
        </div>
        
        <div className="philosophy-grid">
          {/* Card 1 */}
          <div className="philosophy-card reveal">
            <div className="philosophy-icon-wrapper">
              <i className="fas fa-cow" style={{ fontSize: '2rem', color: 'var(--color-dorado)' }}></i>
            </div>
            <h3>Carne 100% Certificada</h3>
            <p>Solo usamos cortes de primera calidad. Nuestra carne nunca es congelada, garantizando jugosidad y frescura en cada hamburguesa.</p>
          </div>

          {/* Card 2 */}
          <div className="philosophy-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="philosophy-icon-wrapper">
              <i className="fas fa-hand-holding-heart" style={{ fontSize: '2rem', color: 'var(--color-dorado)' }}></i>
            </div>
            <h3>Paciencia en la Brasa</h3>
            <p>El fuego lento es nuestro dogma. No aceleramos los procesos; dejamos que el calor del carbón haga su magia de forma natural.</p>
          </div>

          {/* Card 3 */}
          <div className="philosophy-card reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="philosophy-icon-wrapper">
              <i className="fas fa-fire" style={{ fontSize: '2rem', color: 'var(--color-dorado)' }}></i>
            </div>
            <h3>Brasas con Alma</h3>
            <p>Cada plato en Urban Grill pasa por el juicio del fuego. El resultado es un sabor ahumado que cuenta la historia de nuestro barrio.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
