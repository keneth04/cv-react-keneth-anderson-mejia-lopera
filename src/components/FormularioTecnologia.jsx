import { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("frontend");

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    if (nombre.trim() === "") return;

    onAgregar({ nombre, tipo });

    setNombre("");
  };

  return (
    <form onSubmit={manejarSubmit} style={{ marginTop: 20 }}>
      <h3>Agregar Tecnología</h3>

      <input
        type="text"
        placeholder="Nombre de la tecnología"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="base de datos">Base de Datos</option>
      </select>

      <button type="submit">Agregar</button>
    </form>
  );
}