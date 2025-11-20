import CabeceraCV from "./components/CabeceraCv.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";

function App() {
  // Datos que se van a enviar como props
  const datosPersonales = {
    nombre: "Camilo Casas Loaiza",
    cargo: "Desarrollador Front-End Jr.",
    telefono: "+57 300 532 6844",
    correo: "camilocasas.email@example.com",
    ciudad: "Medellín, Colombia",
  };

  const resumenPerfil =
    "Desarrollador Front-End en formación con conocimientos en React y Vite. Experiencia en creación de interfaces modulares y responsive. Interés en buenas prácticas, control de versiones y accesibilidad.";

  const habilidades = [
    "React (componentes funcionales, hooks)",
    "JavaScript moderno (ES6+)",
    "HTML5, CSS3 (Responsive)",
    "Git & GitHub (control de versiones)",
    "Comunicación y trabajo en equipo",
  ];

  const experiencia = [
    { id: 1, puesto: "Desarrollador Full Stack", empresa: "Navisoft Gaming", periodo: "2022-2024" },
    { id: 2, puesto: "Instructor TIC", empresa: "SENA", periodo: "2020-2022" },
  ];

  const educacion = [
    { id: 1, titulo: "Técnico en Programación de Software", universidad: "SENA", periodo: "2021" },
    { id: 2, titulo: "Tecnología en Análisis y Desarrollo de Software", universidad: "SENA", periodo: "En curso" }
  ];

  return (
    <div>
      <CabeceraCV {...datosPersonales} />

      <Perfil
        resumen={resumenPerfil}
        habilidades={habilidades}
      />

      <Educacion estudios={educacion} />

      <Experiencia listaExperiencia={experiencia} />

      <StackTecnologias />
    </div>
  );
}

export default App;
