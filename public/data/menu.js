// Archivo estructurado para configuración (Este será el que edite el dueño o será reemplazado por la lectura de Google Sheets)

const RESTAURANT_CONFIG = {
    // === DATOS DEL RESTAURANTE ===
    id: "urbangrill", // ID Único para sincronizar con Google Sheets (SaaS)
    nombre: "URBAN GRILL",
    slogan: "El auténtico sabor de la parrilla urbana.",
    logo: "img/logo.jpg", 
    googleSheetUrl: "", 
    telefonoWP: "573153368179",
    mensajeWP: "¡Hola Urban Grill! Quiero hacer el siguiente pedido:\n",
    moneda: "$",
    horarios: {
        apertura: "12:00",
        cierre: "23:00"
    },

    // === COLORES DE LA MARCA ===
    colores: {
        principal: "#FFB700",
        secundario: "#121212",
        fondo: "#ffffff"
    },

    // === BANNERS PROMOCIONALES ===
    promociones: [
        {
            titulo: "Martes de Hamburguesas",
            descripcion: "Disfruta de un 2x1 en nuestras Hamburguesas del Barrio todos los martes.",
            fondo: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop"
        },
        {
            titulo: "Urban Combo Night",
            descripcion: "Sube de nivel con nuestro Combo Matador y recibe papas extra de cortesía.",
            fondo: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop"
        },
        {
            titulo: "Chinchurria Fest",
            descripcion: "La mejor chinchurria de San Luis con un 15% de descuento este fin de semana.",
            fondo: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
        }
    ],

    // === CATEGORÍAS DEL MENÚ ===
    categorias: ["Hamburguesas", "Salchipapas y Perros", "Chinchurrias", "Bebidas"],

    // === PRODUCTOS ===
    productos: [
        // HAMBURGUESAS
        {
            id: 101,
            categoria: "Hamburguesas",
            nombre: "Hamburguesa la del Barrio",
            descripcion: "Hamburguesa de carne en pan brioche con queso doble crema, tomate, cebolla, lechuga fresca y salsa de la casa, acompañada de papas a la francesa.",
            precioOriginal: 22000,
            precio: 19000,
            imagen: "/img/Hamburguesa la del Barrio.webp", 
            disponible: true,
            modificadores: [
                { nombre: "Extra Queso", precio: 3000 },
                { nombre: "Tocineta", precio: 4000 },
                { nombre: "Sin Cebolla", precio: 0 }
            ],
            etiqueta: "MÁS VENDIDO"
        },
        {
            id: 102,
            categoria: "Hamburguesas",
            nombre: "Hamburguesa la Matadora",
            descripcion: "Hamburguesa doble carne en pan brioche con queso asado, mermelada de tocineta y salsa de la casa, acompañada de papas a la francesa.",
            precio: 30000,
            imagen: "/img/Hamburguesa la Matadora.webp", 
            disponible: true,
            modificadores: [
                { nombre: "Extra Queso Asado", precio: 4000 },
                { nombre: "Doble Tocineta", precio: 6000 }
            ],
            etiqueta: "FAVORITO"
        },
        {
            id: 103,
            categoria: "Hamburguesas",
            nombre: "Combo Hamburguesa la del Barrio",
            descripcion: "Hamburguesa de carne jugosa en pan Hamburguesa doble carne en pan brioche con queso asado, mermelada de tocineta y salsa de la casa. Incluye gaseosa PET 400 ml.",
            precio: 24000,
            imagen: "/img/Combo Hamburguesa la del Barrio.webp", 
            disponible: true
        },

        // SALCHIPAPAS
        {
            id: 201,
            categoria: "Salchipapas y Perros",
            nombre: "Salchipapa Urban Chicken",
            descripcion: "Salchipapa con pollo en salsa tártara, salchicha, vegetales frescos, huevo de codorniz y queso costeño.",
            precio: 22000,
            imagen: "/img/Salchipapa Urban Chicken.webp",
            disponible: true,
            modificadores: [
                { nombre: "Extra Pollo", precio: 5000 },
                { nombre: "Extra Queso Costeño", precio: 3000 }
            ]
        },

        // PERROS CALIENTES
        {
            id: 301,
            categoria: "Salchipapas y Perros",
            nombre: "Perro el Callejero",
            descripcion: "Perro caliente con salchicha americana, papita ripio, cebolla, queso y salsa de la casa acompañado de papas a la francesa.",
            precioOriginal: 15000,
            precio: 13000,
            imagen: "/img/Perro el Callejero.webp",
            disponible: true
        },

        // CHINCHURRIAS
        {
            id: 401,
            categoria: "Chinchurrias",
            nombre: "Chinchurria Criolla",
            descripcion: "Chinchurria crocante con papa criolla dorada y chimichurri al estilo casero.",
            precio: 15000,
            imagen: "/img/Chinchurria Criolla.webp",
            disponible: true
        },
        {
            id: 402,
            categoria: "Chinchurrias",
            nombre: "Chinchurria la Parcera",
            descripcion: "Chinchurria crocante acompañada de arepa de queso dorada con sabor típico colombiano.",
            precio: 15000,
            imagen: "/img/Chinchurria la Parcera.webp",
            disponible: true
        },
        {
            id: 403,
            categoria: "Chinchurrias",
            nombre: "Chinchurria la Indomable",
            descripcion: "Chinchurria crocante con maduro, queso derretido, salsa de aguacate y chimichurri.",
            precio: 18000,
            imagen: "/img/Chinchurria la Indomable.webp",
            disponible: true,
            modificadores: [
                { nombre: "Extra Chimichurri", precio: 2000 },
                { nombre: "Extra Queso", precio: 3000 }
            ]
        },

        // BEBIDAS
        {
            id: 501,
            categoria: "Bebidas",
            nombre: "Limonada Natural",
            descripcion: "Refrescante limonada natural preparada al instante.",
            precio: 6000,
            imagen: "/img/Bebidas/LIMONADA NATURAL.avif",
            disponible: true
        },
        {
            id: 502,
            categoria: "Bebidas",
            nombre: "Coca-Cola Lata 300ml",
            descripcion: "Gaseosa Coca-Cola clásica bien fría.",
            precio: 5000,
            imagen: "/img/Bebidas/Coca-Cola Lata 300ml.avif",
            disponible: true
        },
        {
            id: 503,
            categoria: "Bebidas",
            nombre: "Cerveza Poker Lata 300ml",
            descripcion: "Cerveza nacional Poker en lata.",
            precio: 5000,
            imagen: "/img/Bebidas/Cerveza POKER LATA 300ML.webp",
            disponible: true
        },
        {
            id: 504,
            categoria: "Bebidas",
            nombre: "Jugo de Mango",
            descripcion: "Jugo natural de mango en agua o leche.",
            precio: 7000,
            imagen: "/img/Bebidas/Jugo de Mango.jpg",
            disponible: true
        },
        {
            id: 505,
            categoria: "Bebidas",
            nombre: "Te Helado",
            descripcion: "Te helado refrescante sabor a limón o durazno.",
            precio: 6000,
            imagen: "/img/Bebidas/Te Helado.jpg",
            disponible: true
        }
    ]
};
