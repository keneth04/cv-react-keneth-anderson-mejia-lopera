export default function ToggleHabilidades({ visible, setVisible }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>
    </div>
  );
}