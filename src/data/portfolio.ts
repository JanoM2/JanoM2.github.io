import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  name: "Jano Martino",
  role: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  email: "martinojano0@gmail.com",
  github: "https://github.com/JanoM2",
  linkedin: "https://www.linkedin.com/in/janomartino/",
  cv: "https://janom2.github.io/assets/Jano%20Martino%20-%20FrontEnd%20Dev%20en.pdf",
  profile_image: "/assets/images/profile.jpg",
  skills: [
    "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Chakra UI", "React", "Next.js", "Vue.js",
    "Vuex", "Redux Toolkit", "React Router", "Vue Router", "Vite",
    "Node.js", "NestJS", "REST APIs", "Supabase", "PostgreSQL",
    "SQL", "Firebase", "WordPress", "WooCommerce", "Git", "GitHub",
  ],

  experience: [
    {
      name: "Cerquetech Solutions",
      role: "Frontend Developer",
      period: "2023 - Presente",
      url_name: "Finanzas Argy",
      url: "https://www.finanzasargy.com/",
      description:
        "Implementé gráficos interactivos para visualizar la evolución histórica de las cotizaciones de distintas monedas utilizando TradingView Lightweight Charts, optimicé y amplié la sección de criptomonedas, desarrollé una sección de inversiones que muestra las tasas nominales anuales (TNA) ofrecidas por distintas entidades financieras y contribuí al desarrollo de nuevas funcionalidades y mejoras continuas de la plataforma.",
      descriptionEn:
        "I implemented interactive charts to visualize the historical exchange rate evolution of multiple currencies using TradingView Lightweight Charts, enhanced and optimized the cryptocurrency section, developed an investments section that displays the annual nominal rates (TNA) offered by different financial institutions, and contributed to the development of new features and continuous improvements across the platform.",
      tech: [
        "TypeScript",
        "React",
        "Next.js",
        "Chakra UI",
        "Redux Toolkit",
        "TradingView",
        "REST APIs",
        "Node.js",
        "NestJS",
        "Git",
        "GitHub",
      ]
    },
    {
      name: "MB Barbería",
      role: "Fullstack Developer - Freelance",
      period: "2026 - 2027",
      url_name: "MB Barbería - Organizador de Caja",
      url: "https://control-caja-barberia.vercel.app/",
      description:
        "Desarrollé desde 0 un sistema de gestión de caja para una barbería utilizando React, TypeScript y Supabase, participando en todo el ciclo de desarrollo, desde el análisis de requerimientos hasta el despliegue en producción. Implementé autenticación y autorización basada en roles (administrador y barbero), restringiendo el acceso a funcionalidades según los permisos de cada usuario. También desarrollé la gestión de ingresos y egresos, el cálculo automático del total diario de caja, filtros por rango de fechas y un panel con métricas financieras. Además, integré Row Level Security (RLS) para proteger la información, desarrollé soporte para funcionamiento offline/online mediante DexieDB y LocalStorage para garantizar la continuidad del trabajo sin conexión y desplegué la aplicación en Vercel.",
      descriptionEn:
        "I developed a cash management system for a barbershop from scratch using React, TypeScript, and Supabase, handling the entire development lifecycle from requirements analysis to production deployment. I implemented authentication and role-based authorization (administrator and barber), restricting access to features based on each user's permissions. I also developed income and expense management, automatic daily cash balance calculations, date range filtering, and a dashboard with financial metrics. Additionally, I integrated Row Level Security (RLS) to secure the data, implemented offline/online support using DexieDB and LocalStorage to ensure uninterrupted operation without an internet connection, and deployed the application on Vercel.",
      tech: [
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Row Level Security",
        "DexieDB",
        "LocalStorage",
        "Offline-First",
        "Git",
        "GitHub",
        "Vercel",
      ],
    },
    {
      name: "Cuchillos Camet",
      role: "Fullstack Developer - Freelance",
      period: "2025 - 2026",
      url_name: "Cuchillos Camet - Ecommerce",
      url: "https://cuchilloscamet.com.ar/",
      description:
        "Desarrollé un e-commerce de productos de campo utilizando WordPress y WooCommerce, participando en la configuración, personalización y puesta en producción de la tienda. Partí de una plantilla de Astra y realicé modificaciones de diseño y funcionalidades para adaptarla a los requerimientos del cliente. Implementé la gestión de productos, categorías, métodos de pago mediante Mercado Pago e integración de envíos con Correo Argentino. Además, desarrollé personalizaciones utilizando HTML, CSS, JavaScript y PHP mediante Code Snippets para extender las funcionalidades de WooCommerce y mejorar la experiencia de compra.",
      descriptionEn:
        "I developed an e-commerce platform for rural products using WordPress and WooCommerce, handling the store configuration, customization, and production deployment. I started from an Astra template and made design and functionality modifications to meet the client's requirements. I implemented product and category management, payment methods integration through Mercado Pago, and shipping integration with Correo Argentino. Additionally, I developed customizations using HTML, CSS, JavaScript, and PHP through Code Snippets to extend WooCommerce functionality and improve the shopping experience.",
      tech: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Code Snippets",
        "Mercado Pago",
        "Astra",
        "Gutenberg",
        "Correo Argentino",
      ],
    },
    {
      name: "MB Barberia",
      role: "Fullstack Developer - Freelance",
      period: "2026 - 2027",
      url_name: "MB Barbería - Plataforma Educativa",
      url: "https://darkgray-flamingo-319830.hostingersite.com/",
      description:
        "Desarrollé una plataforma educativa para la venta de cursos de barbería y colorimetría utilizando WordPress, WooCommerce y Tutor LMS. Implementé la venta de productos digitales, gestión de usuarios y acceso personalizado a los cursos, permitiendo que cada alumno acceda al contenido adquirido desde su perfil. Además, personalicé la experiencia de usuario, adapté la plataforma a los requerimientos del negocio e implementé soluciones mediante HTML, CSS, JavaScript y PHP. Integré métodos de pago mediante Nave para completar el proceso de compra.",
      descriptionEn:
        "I developed an educational platform for selling barbering and hair coloring courses using WordPress, WooCommerce, and Tutor LMS. I implemented digital product sales, user management, and personalized course access, allowing each student to access their purchased content through their profile. Additionally, I customized the user experience, adapted the platform to business requirements, and implemented custom solutions using HTML, CSS, JavaScript, and PHP. I integrated payment methods through Nave to complete the purchasing process.",
      tech: [
        "WordPress",
        "WooCommerce",
        "Tutor LMS",
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Code Snippets",
        "Mercado Pago",
        "Nave",
        "Astra",
        "Gutenberg",
      ],
    }
  ],

  projects: [
    {
      name: "Who's That Pokémon?",
      description:
        "Juego interactivo inspirado en el clásico 'Who's That Pokémon?'. El usuario debe identificar un Pokémon a partir de su silueta, consumiendo datos desde PokéAPI en tiempo real. Implementa manejo de respuestas, manipulación del DOM, actualización dinámica de la interfaz y una tabla de puntuaciones.",
      descriptionEn:
        "Interactive game inspired by the classic 'Who's That Pokémon?'. Users must identify a Pokémon from its silhouette by consuming data from PokéAPI in real time. Implements game logic, answer handling, DOM manipulation, dynamic interface updates, and a score leaderboard to track players' progress.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST API",
        "PokéAPI",
        "DOM Manipulation",
      ],
      url: "https://game-whos-that-pokemon.netlify.app/",
      code: null,
      emoji: "🎮",
    },
    {
      name: "Journal App",
      description:
        "Aplicación de diario personal desarrollada con Vue.js. Permite crear y administrar notas privadas mediante autenticación de usuarios, almacenamiento en Firebase y manejo del estado global con Vuex.",
      descriptionEn:
        "Personal journal application developed with Vue.js. Allows users to create and manage private notes through user authentication, Firebase storage, and global state management with Vuex.",
      tech: [
        "Vue.js",
        "Vuex",
        "Firebase",
        "Firebase Authentication",
        "Bootstrap",
        "Sass",
        "JavaScript",
      ],
      url: "https://vue-journal-app-jm.netlify.app/",
      code: null,
      emoji: "📓",
    },
    {
      name: "Mapbox Demo",
      description:
        "Aplicación de geolocalización desarrollada con Mapbox GL JS. Permite buscar ubicaciones, trabajar con coordenadas y visualizar información geográfica mediante mapas interactivos.",
      descriptionEn:
        "Geolocation application developed with Mapbox GL JS. Allows users to search locations, work with coordinates, and visualize geographic information through interactive maps.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Mapbox GL JS",
        "Geolocation API",
      ],
      url: "https://jano-maps.netlify.app/",
      code: null,
      emoji: "🗺️",
    },
    {
      name: "Socks App",
      description:
        "Demo de e-commerce de indumentaria desarrollada con Vue.js. Incluye catálogo de productos, carrito de compras, filtros dinámicos y manejo del estado de la aplicación.",
      descriptionEn:
        "Clothing e-commerce demo developed with Vue.js. Includes product catalog, shopping cart, dynamic filters, and application state management.",
      tech: [
        "Vue.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vue Router",
        "State Management",
      ],
      url: "https://socks-app.netlify.app/",
      code: null,
      emoji: "🧦",
    },
    {
      name: "DOM Exercises",
      description:
        "Colección de ejercicios prácticos para profundizar JavaScript vanilla mediante manipulación del DOM, manejo de eventos, interacción con elementos HTML y creación de componentes dinámicos sin frameworks.",
      descriptionEn:
        "Collection of practical exercises to improve vanilla JavaScript skills through DOM manipulation, event handling, HTML element interaction, and dynamic components without frameworks.",
      tech: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "DOM Manipulation",
        "Events",
      ],
      url: "https://dom-exercises.netlify.app/",
      code: null,
      emoji: "🧩",
    },
  ],

  education: [
    { name: "TypeScript", org: "Fernando Herrera / DevTalles", img: "/assets/images/certificates/certified-10.png", cert: "https://cursos.devtalles.com/certificates/5w8vut3xgm" },
    { name: "Nest", org: "Fernando Herrera / DevTalles", img: "/assets/images/certificates/certified-8.png", cert: "https://cursos.devtalles.com/certificates/brqcrwexcv" },
    { name: "PostgreSQL", org: "Fernando Herrera / DevTalles", img: "/assets/images/certificates/certified-9.png", cert: "https://cursos.devtalles.com/certificates/gcylouyoc7" },
    { name: "JavaScript Algorithms & Data Structures", org: "freeCodeCamp", img: "/assets/images/certificates/certified-1.png", cert: "https://www.freecodecamp.org/certification/jano_martino/javascript-algorithms-and-data-structures" },
    { name: "Inglés C1 (EF SET)", org: "EF Standard English Test", img: "/assets/images/certificates/certified-5.png", cert: "https://www.efset.org/cert/aG7wp5" },
    { name: "Basic English 1: Elementary", org: "King's College London", img: "/assets/images/certificates/certified-6.png", cert: "https://www.futurelearn.com/certificates/gj5n72d" },
    { name: "Basic English 2: Pre-Intermediate", org: "King's College London", img: "/assets/images/certificates/certified-7.png", cert: "https://www.futurelearn.com/certificates/kmqgugg" },
  ],
};
