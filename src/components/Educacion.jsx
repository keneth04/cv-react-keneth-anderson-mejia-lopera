export default function Educacion() {
    const items = [
    {institucion: "Institución Técnica Ejemplo", nombre: "Técnico en Soporte", año: "2020"},
    {institucion: "Plataforma Cursos Online", nombre: "Curso React Básico", año: "2023"},
    {institucion: "Bootcamp Front-End", nombre: "Desarrollo Web Moderno", año: "2024"},
    ];

    return (
        <section style={{marginTop:12}}>
        <h3>Educación</h3>
        <ul>
            {items.map((it, idx) => (
            <li key={idx} className="edu-item">
                <strong>{it.nombre}</strong>
                <div>{it.institucion} — {it.año}</div>
            </li>
            ))}
        </ul>
        </section>
    );
    }
