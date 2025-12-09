// Datos iniciales del CV (no dinámicos)

export const datosPersonales = {
    nombre: "Keneth Anderson Mejia Lopera",
    cargo: "Desarrollador Front-End Jr.",
    telefono: "+57 323 300 7066",
    correo: "kenethmejia.email@example.com",
    ciudad: "Medellín, Colombia",
};

export const resumenPerfil =
    "Desarrollador Front-End en formación con conocimientos en React y Vite. Experiencia en creación de interfaces modulares y responsive. Interés en buenas prácticas, control de versiones y accesibilidad.";

export const habilidades = [
    "React (componentes funcionales, hooks)",
    "JavaScript moderno (ES6+)",
    "HTML5, CSS3 (Responsive)",
    "Git & GitHub (control de versiones)",
    "Comunicación y trabajo en equipo",
];

export const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack", empresa: "Navisoft Gaming", periodo: "2022-2024" },
    { id: 2, puesto: "Instructor TIC", empresa: "SENA", periodo: "2020-2022" },
];

export const educacion = [
    { id: 1, titulo: "Técnico en Programación de Software", universidad: "SENA", periodo: "2021" },
    { id: 2, titulo: "Tecnología en Análisis y Desarrollo de Software", universidad: "SENA", periodo: "En curso" },
    ];

// Datos iniciales del stack (estos sí serán manejados como estado)
export const tecnologiasIniciales = [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "Node.js", tipo: "backend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
];