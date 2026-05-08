/* =========================================================
   RESERVAS PREMIUM $10K - URBAN GRILL
   ========================================================= */
"use client";

import { useEffect, useState, useRef } from 'react';
import GlobalNav from '@/components/GlobalNav';
import Preloader from '@/components/Preloader';
import '../../styles/reservas-premium.css';

export default function ReservasPage() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);
  
  // Calendar State
  const [viewDate, setViewDate] = useState(new Date());
  
  const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  
  const generateCalendarDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null, empty: true });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, empty: false });
    }
    return days;
  };

  const changeMonth = (delta) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setViewDate(newDate);
  };

  const handleDateSelect = (day) => {
    const dateStr = `${viewDate.getFullYear()}-${(viewDate.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDate(dateStr);
    setShowDatePicker(false);
  };

  const [tempHour, setTempHour] = useState('01');
  const [tempMinute, setTempMinute] = useState('00');
  const [tempAmpm, setTempAmpm] = useState('AM');

  const hoursList = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutesList = ['00', '15', '30', '45'];
  const ampmList = ['AM', 'PM'];

  const confirmTime = () => {
    setSelectedTime(`${tempHour}:${tempMinute} ${tempAmpm}`);
    setShowTimePicker(false);
  };

  useEffect(() => {
    if (showTimePicker) {
      // Sync scroll positions when modal opens
      setTimeout(() => {
        if (hourRef.current) hourRef.current.scrollTo({ top: hoursList.indexOf(tempHour) * 60, behavior: 'auto' });
        if (minuteRef.current) minuteRef.current.scrollTo({ top: minutesList.indexOf(tempMinute) * 60, behavior: 'auto' });
        if (ampmRef.current) ampmRef.current.scrollTo({ top: ampmList.indexOf(tempAmpm) * 60, behavior: 'auto' });
      }, 50);
    }
  }, [showTimePicker]);
  useEffect(() => {
    // Load GSAP dynamically to ensure compatibility with Next.js SSR
    const initAnimations = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      window.scrollTo(0, 0);
      const tl = gsap.timeline();

      tl.to('.res-hero-bg', { scale: 1, duration: 2, ease: "power2.out" })
        .fromTo('.gsap-hero-title', 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, 
          "-=1.5")
        .fromTo('.gsap-hero-subtitle', 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1, ease: "power4.out" }, 
          "-=0.7")
        .fromTo('.gsap-reveal', 
          { y: 100, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, 
          "-=0.5");

      // Parallax suave en Hero
      gsap.to('.res-hero-bg', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".res-hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      // Initialize global UI logic if needed
      if (window.initSmartMenu) window.initSmartMenu();
    };

    initAnimations();

    // --- LOGICA DEL SELECTOR DE PERSONAS ---
    const chips = document.querySelectorAll('.person-chip');
    const hiddenInputPersonas = document.getElementById('resPersonas');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        if (hiddenInputPersonas) {
          hiddenInputPersonas.value = chip.getAttribute('data-value');
        }
      });
    });

    // --- LOGICA DEL CARRUSEL DE OCASIÓN ---
    const oCards = document.querySelectorAll('.occasion-card');
    const hiddenInputOcasion = document.getElementById('resOcasion');

    oCards.forEach(card => {
      card.addEventListener('click', () => {
        oCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        if (hiddenInputOcasion) {
          hiddenInputOcasion.value = card.getAttribute('data-value');
        }
        
        // Desplazamiento suave al centro al seleccionar
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
    });

    // --- INTEGRACIÓN WHATSAPP PROFESIONAL ---
    const form = document.getElementById('formReserva');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById("resNombre").value;
        const fecha = document.getElementById("resFecha").value;
        const hora = document.getElementById("resHora").value;
        const personas = document.getElementById("resPersonas").value;
        const ocasion = document.getElementById("resOcasion").value;

        if (!fecha || !hora) {
          if (!fecha) setShowDatePicker(true);
          else if (!hora) setShowTimePicker(true);
          return;
        }

        let textoWP = `🌟 *NUEVA SOLICITUD DE RESERVA* 🌟\n`;
        textoWP += `------------------------------------------\n`;
        textoWP += `🏛️ *Restaurante:* Urban Grill\n\n`;
        textoWP += `👤 *Anfitrión:* ${nombre}\n`;
        textoWP += `📅 *Fecha:* ${fecha}\n`;
        textoWP += `⏰ *Hora:* ${hora}\n`;
        textoWP += `👥 *Comensales:* ${personas}\n`;
        textoWP += `🥂 *Ocasión:* ${ocasion}\n`;
        textoWP += `------------------------------------------\n`;
        textoWP += `✨ _Solicito amablemente confirmar disponibilidad para esta velada. Quedo atento a su respuesta._`;

        const num = (window.RESTAURANT_CONFIG?.telefonoWP) ? window.RESTAURANT_CONFIG.telefonoWP : "573153368179";
        const link = `https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent(textoWP)}`;
        window.open(link, '_blank');
      });
    }
  }, []);

  return (
    <div className="page-reservas">
      <Preloader />
      
      {/* Global Navigation */}
      <GlobalNav activeLink="reservas" />

      {/* Hero Section Cinematográfica */}
      <header className="res-hero">
        <div className="res-hero-bg"></div>
        <div className="res-hero-content">
          <h1 className="gsap-hero-title">La Mesa de Urban Grill</h1>
          <p className="gsap-hero-subtitle">Una experiencia gastronómica exclusiva</p>
        </div>
      </header>

      {/* Booking Section */}
      <main className="res-booking-section">
        <div className="glass-booking-container gsap-reveal">
          <div className="booking-grid">
            <div className="booking-info">
              <h2>Tu Velada Ideal</h2>
              <p>Déjanos el honor de prepararte una mesa perfecta. En Urban Grill, cada reserva es una promesa de calidad, cortes premium y el auténtico sabor de la brasa urbana.</p>
              
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--res-gold)', fontSize: '1.1rem', fontWeight: 800 }}>[I]</span>
                  <span>Ambiente exclusivo y privado</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--res-gold)', fontSize: '1.1rem', fontWeight: 800 }}>[II]</span>
                  <span>Cortes de autor y braseado perfecto</span>
                </div>
              </div>
            </div>

            <div className="booking-form-container">
              <form className="premium-form" id="formReserva">
                <div className="form-group">
                  <label className="input-label">Nombre del Anfitrión</label>
                  <input type="text" id="resNombre" className="input-reserva" placeholder="¿A nombre de quién?" required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="input-label">Fecha</label>
                    <input 
                      type="text" 
                      id="resFecha" 
                      className="input-reserva" 
                      value={selectedDate} 
                      placeholder="Seleccionar Fecha"
                      onClick={() => setShowDatePicker(true)}
                      readOnly 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="input-label">Hora</label>
                    <input 
                      type="text" 
                      id="resHora" 
                      className="input-reserva" 
                      value={selectedTime} 
                      placeholder="Seleccionar Hora"
                      onClick={() => setShowTimePicker(true)}
                      readOnly 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="input-label">Número de Comensales</label>
                  <div className="people-selector" id="peopleSelector">
                    <div className="person-chip" data-value="1-2">1-2</div>
                    <div className="person-chip active" data-value="3-4">3-4</div>
                    <div className="person-chip" data-value="5-8">5-8</div>
                    <div className="person-chip" data-value="Mesa Grande">8+</div>
                  </div>
                  <input type="hidden" id="resPersonas" defaultValue="3-4" />
                </div>

                {/* Carrusel Especial de Ocasión */}
                <div className="form-group">
                  <label className="input-label">Tipo de Ocasión</label>
                  <div className="occasion-carousel" id="occasionCarousel">
                    <div className="occasion-card active" data-value="Cena Casual">
                      <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop" alt="Casual" />
                      <div className="oc-overlay"><span>Cena Casual</span></div>
                    </div>
                    <div className="occasion-card" data-value="Cumpleaños">
                      <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&auto=format&fit=crop" alt="Cumple" />
                      <div className="oc-overlay"><span>Cumpleaños</span></div>
                    </div>
                    <div className="occasion-card" data-value="Aniversario">
                      <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop" alt="Aniversario" />
                      <div className="oc-overlay"><span>Aniversario</span></div>
                    </div>
                    <div className="occasion-card" data-value="Negocios">
                      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" alt="Negocios" />
                      <div className="oc-overlay"><span>Negocios</span></div>
                    </div>
                    <div className="occasion-card" data-value="Otra">
                      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&auto=format&fit=crop" alt="Otra" />
                      <div className="oc-overlay"><span>Otra</span></div>
                    </div>
                  </div>
                  <input type="hidden" id="resOcasion" defaultValue="Cena Casual" />
                </div>

                <button type="submit" className="res-btn-submit">Confirmar Reserva</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Premium Centered */}
      <footer className="footer-premium footer-reservas">
        <div className="footer-content" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
          <div className="footer-logo">
            <img src="/img/logo.jpg" alt="Logo" className="footer-logo-img" style={{ margin: '0 auto' }} />
          </div>
          <p style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '1.5rem', margin: '2rem 0', color: 'var(--res-gold)' }}>
            "El sabor de la brasa en su estado más puro."
          </p>
          <div className="footer-tech" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <p>Digital Experience Crafted by:</p>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'white' }}>Samuel Portilla</span>
          </div>
          <div style={{ marginTop: '3rem', opacity: 0.3 }}>
            &copy; 2026 URBAN GRILL.<br />
            Arquitectura Digital Premium por Samuel Andres Portilla Ardila.
          </div>
        </div>
      </footer>
      {/* Custom Date Picker Modal */}
      <div className={`res-modal-overlay ${showDatePicker ? 'active' : ''}`} onClick={() => setShowDatePicker(false)}>
        <div className="res-modal-window" onClick={e => e.stopPropagation()}>
          <div className="res-modal-header">
            <h3>Seleccionar Fecha</h3>
            <button className="close-res-modal" onClick={() => setShowDatePicker(false)}>&times;</button>
          </div>
          
          <div className="calendar-controls">
            <button className="btn-cal" onClick={() => changeMonth(-1)}><i className="fas fa-chevron-left"></i></button>
            <span className="calendar-month-year">{months[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
            <button className="btn-cal" onClick={() => changeMonth(1)}><i className="fas fa-chevron-right"></i></button>
          </div>
          
          <div className="calendar-grid">
            {['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'].map(d => (
              <div key={d} className="cal-day-name">{d}</div>
            ))}
            {generateCalendarDays().map((d, i) => (
              <div 
                key={i} 
                className={`cal-day ${d.empty ? 'empty' : ''} ${!d.empty && selectedDate === `${viewDate.getFullYear()}-${(viewDate.getMonth() + 1).toString().padStart(2, '0')}-${d.day.toString().padStart(2, '0')}` ? 'active' : ''}`}
                onClick={() => !d.empty && handleDateSelect(d.day)}
              >
                {d.day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Professional Time Picker Modal */}
      <div className={`res-modal-overlay ${showTimePicker ? 'active' : ''}`} onClick={() => setShowTimePicker(false)}>
        <div className="res-modal-window" onClick={e => e.stopPropagation()}>
          <div className="res-modal-header">
            <h3>Seleccionar Hora</h3>
            <button className="close-res-modal" onClick={() => setShowTimePicker(false)}>&times;</button>
          </div>
          
          <div className="time-picker-ui">
            <div className="time-picker-selection-lens"></div>
            
            {/* Hours Scroller */}
            <div className="time-scroller-col" ref={hourRef} onScroll={(e) => {
              const idx = Math.round(e.target.scrollTop / 60);
              if (hoursList[idx]) setTempHour(hoursList[idx]);
            }}>
              {hoursList.map(h => (
                <div key={h} className={`time-unit-item ${tempHour === h ? 'active' : ''}`} onClick={(e) => e.target.parentElement.scrollTo({top: hoursList.indexOf(h) * 60, behavior: 'smooth'})}>
                  {h}
                </div>
              ))}
            </div>

            <div style={{fontSize: '2rem', fontWeight: 800, color: 'var(--res-gold)', opacity: 0.5}}>:</div>

            {/* Minutes Scroller */}
            <div className="time-scroller-col" ref={minuteRef} onScroll={(e) => {
              const idx = Math.round(e.target.scrollTop / 60);
              if (minutesList[idx]) setTempMinute(minutesList[idx]);
            }}>
              {minutesList.map(m => (
                <div key={m} className={`time-unit-item ${tempMinute === m ? 'active' : ''}`} onClick={(e) => e.target.parentElement.scrollTo({top: minutesList.indexOf(m) * 60, behavior: 'smooth'})}>
                  {m}
                </div>
              ))}
            </div>

            {/* AM/PM Scroller */}
            <div className="time-scroller-col" ref={ampmRef} onScroll={(e) => {
              const idx = Math.round(e.target.scrollTop / 60);
              if (ampmList[idx]) setTempAmpm(ampmList[idx]);
            }}>
              {ampmList.map(ap => (
                <div key={ap} className={`time-unit-item ${tempAmpm === ap ? 'active' : ''}`} onClick={(e) => e.target.parentElement.scrollTo({top: ampmList.indexOf(ap) * 60, behavior: 'smooth'})}>
                  {ap}
                </div>
              ))}
            </div>
          </div>

          <button className="time-picker-confirm-btn" onClick={confirmTime}>
            Confirmar Hora
          </button>
        </div>
      </div>
    </div>
  );
}
