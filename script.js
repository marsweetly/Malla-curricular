const ramos = {
  "Semestre 1": [
    { nombre: "Jurisdicción" },
    { nombre: "Sistema Jurídico" },
    { nombre: "Historia del Derecho" },
    { nombre: "Teoría Constitucional" },
    { nombre: "Educación Física y Salud" },
    { nombre: "Comunicación Oral y Escrita" }
  ],
  "Semestre 2": [
    { nombre: "Razonamiento Jurídico", prereq: ["Sistema Jurídico"] },
    { nombre: "Historia del Derecho Chileno" },
    { nombre: "Conceptos Fundamentales del Derecho Privado" },
    { nombre: "Introducción a la Profesión Jurídica" },
    { nombre: "Derecho Constitucional Orgánico", prereq: ["Teoría Constitucional"] }
  ],
  "Semestre 3": [
    { nombre: "Teoría de la Justicia" },
    { nombre: "Acto Jurídico", prereq: ["Conceptos Fundamentales del Derecho Privado"] },
    { nombre: "Análisis Jurisprudencional", prereq: ["Razonamiento Jurídico", "Comunicación Oral y Escrita"] },
    { nombre: "Economía" },
    { nombre: "Derechos Fundamentales", prereq: ["Teoría Constitucional"] },
    { nombre: "Proceso Civil Ordinario" }
  ],
  "Semestre 4": [
    { nombre: "Bienes", prereq: ["Acto Jurídico"] },
    { nombre: "Taller de Resolución de Casos Prácticos", prereq: ["Acto Jurídico"] },
    { nombre: "Derecho Internacional de los Derechos Humanos", prereq: ["Derechos Fundamentales"] },
    { nombre: "Derecho Económico", prereq: ["Economía"] },
    { nombre: "Derecho Procesal Constitucional", prereq: ["Jurisdicción"] },
    { nombre: "Derecho Probatorio" },
    { nombre: "Optativo de Formación General", optativo: true }
  ],
  // Continúa agregando los siguientes semestres igual que arriba...
  // Para ahorrar espacio puedes pedirme que te complete del Semestre 5 al 10 si te parece bien hasta aquí
};

const container = document.querySelector(".container");
const tooltip = document.getElementById("tooltip");

for (const [semestre, cursos] of Object.entries(ramos)) {
  const title = document.createElement("div");
  title.className = "semestre-title";
  title.textContent = semestre;
  container.appendChild(title);

  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.className = "card";
    if (curso.optativo) card.classList.add("optativo");
    card.textContent = curso.nombre;

    if (curso.prereq) {
      card.dataset.tooltip = "Prerrequisitos: " + curso.prereq.join(", ");
    }

    card.addEventListener("mouseenter", e => {
      if (card.dataset.tooltip) {
        tooltip.style.display = "block";
        tooltip.textContent = card.dataset.tooltip;
      }
    });

    card.addEventListener("mousemove", e => {
      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
    });

    card.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    container.appendChild(card);
  });
}
