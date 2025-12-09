import { useState } from "react";
import CabeceraCV from "./components/CabeceraCv.jsx";
import Perfil from "./components/perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";

// Datos iniciales
import {
  datosPersonales,
  resumenPerfil,
  habilidades,
  experiencia,
  educacion,
  tecnologiasIniciales
} from "./Data/cvData.js";

function App() {
  // -----------------------------
  // Estados dinámicos
  // -----------------------------

  // Estado para tecnologías (dinámico)
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Estado para mostrar/ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  // Función para agregar una nueva tecnología
  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        nombre: nueva.nombre,
        tipo: nueva.tipo
      }
    ]);
  };

  return (
    <div>
      {/* Cabecera */}
      <CabeceraCV {...datosPersonales} />

      {/* Botón para mostrar/ocultar habilidades */}
      <ToggleHabilidades
        visible={mostrarHabilidades}
        setVisible={setMostrarHabilidades}
      />

      {/* Renderizado condicional */}
      {mostrarHabilidades && (
        <Perfil resumen={resumenPerfil} habilidades={habilidades} />
      )}

      <Educacion estudios={educacion} />

      <Experiencia listaExperiencia={experiencia} />

      {/* Tecnologías dinámicas */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* Formulario para agregar tecnologías */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />
    </div>
  );
}

export default App;