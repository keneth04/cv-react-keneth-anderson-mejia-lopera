import CabeceraCV from "./components/CabeceraCv.jsx";
import Perfil from "./components/perfil.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Educacion from "./components/Educacion.jsx";

export default function App() {
  return (
    <div className="app-container">
      <CabeceraCV />
      <main className="main-grid">
        <section className="left-column">
          <Perfil />
        </section>
        <section className="right-column">
          <Experiencia />
          <Educacion />
        </section>
      </main>
    </div>
  );
}
