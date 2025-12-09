export default function Perfil({ resumen, habilidades }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{resumen}</p>

      <h4 style={{ marginTop: 12 }}>Habilidades</h4>
      <ul>
        {habilidades.map((hab, index) => (
          <li key={index}>{hab}</li>
        ))}
      </ul>
    </section>
  );
}