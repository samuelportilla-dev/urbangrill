export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between text-left gap-8">
        {/* Brand */}
        <div className="flex-1 min-w-[300px]">
          <img src="/img/logo.jpg" alt="Logo" className="footer-logo-img ml-0" />
          <p
            className="footer-slogan mb-4"
            style={{ fontFamily: 'var(--fuente-titulos)', fontSize: '1.8rem' }}
          >
            El auténtico sabor de la parrilla urbana.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex-1 min-w-[250px]">
          <h3
            className="mb-6"
            style={{ color: 'var(--color-dorado)', fontFamily: 'var(--fuente-titulos)' }}
          >
            Contacto Directo
          </h3>
          <p className="mb-2 text-lg">📍 Av 2 calle 12 barrio San Luis</p>
          <p className="mb-2 text-lg">📞 Pedidos: +57 315 336 8179</p>
          <p className="mb-2 text-lg">✉️ gerencia@urbangrill.com</p>
        </div>

        {/* Horario */}
        <div className="flex-1 min-w-[250px]">
          <h3
            className="mb-6"
            style={{ color: 'var(--color-dorado)', fontFamily: 'var(--fuente-titulos)' }}
          >
            Horario de Fuego
          </h3>
          <p className="mb-2 text-lg">
            Lunes a Domingo: <span className="font-bold">12:00pm - 11:00pm</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-white/10 pt-8 text-white/40 text-center">
        <p>
          &copy; 2026 URBAN GRILL.<br />
          Arquitectura Digital Premium por Samuel Andres Portilla Ardila.
        </p>
      </div>
    </footer>
  );
}
