<<<<<<< HEAD
# Portfolio - Estructura Organizada

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Sidebar.jsx      # Barra lateral con WHO I AM
│   ├── Experience.jsx   # Sección de experiencia
│   ├── Projects.jsx     # Sección de proyectos
│   ├── Education.jsx    # Sección de educación + carousel
│   └── Contact.jsx      # Sección de contacto
├── data/                # Datos e información
│   ├── portfolio.js     # Datos del portfolio (name, skills, projects, etc)
│   └── translations.js  # Traducciones EN/ES
├── hooks/               # React Hooks personalizados
│   └── useActiveSection.js  # Hook para detectar sección activa
├── utils/               # Utilidades y constantes
│   └── constants.js     # NAV_ITEMS, colores, etc
└── App.jsx              # Componente principal
```

## 🎨 Ventajas de esta estructura

✅ **Escalable** - Fácil agregar nuevas secciones  
✅ **Mantenible** - Cambios isolados en cada archivo  
✅ **Limpia** - Cada archivo tiene una responsabilidad  
✅ **Reutilizable** - Componentes independientes  

## 📝 Cómo usar

1. Modificar datos → edita `src/data/portfolio.js`
2. Agregar traducciones → edita `src/data/translations.js`
3. Cambiar colores → edita `src/utils/constants.js`
4. Modificar componentes → edita archivos en `src/components/`
5. Cambiar estilos → busca el CSS en `src/App.jsx`

## 🚀 Para agregar una nueva sección

1. Crear componente en `src/components/MiSeccion.jsx`
2. Importar en `src/App.jsx`
3. Agregar contenedor div en el JSX
4. Agregar label en `src/data/translations.js`

¡Listo para modificar!
=======
# JanoM2.github.io
>>>>>>> b8662dcb776b745ae8ff7f76a5c60149ac789670
