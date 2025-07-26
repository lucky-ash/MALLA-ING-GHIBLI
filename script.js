/* 
🌿 PASO 1: Lista completa de materias con sus prerrequisitos 
(extraídas de tu malla de Ingeniería Sanitaria y Ambiental)
*/
const materias = [
  // PRIMER SEMESTRE
  { nombre: "Matemáticas Básicas", semestre: 1, prerrequisitos: [] },
  { nombre: "Introducción a la Ingeniería", semestre: 1, prerrequisitos: [] },
  { nombre: "Inserción Vida Universitaria", semestre: 1, prerrequisitos: [] },
  { nombre: "Química Fundamental", semestre: 1, prerrequisitos: [] },
  { nombre: "Deporte y Salud", semestre: 1, prerrequisitos: [] },
  { nombre: "Informática I", semestre: 1, prerrequisitos: [] },
  { nombre: "Electiva Complementaria I", semestre: 1, prerrequisitos: [] },

  // SEGUNDO SEMESTRE
  { nombre: "Cálculo Monovariable", semestre: 2, prerrequisitos: ["Matemáticas Básicas"] },
  { nombre: "Álgebra Lineal", semestre: 2, prerrequisitos: ["Matemáticas Básicas"] },
  { nombre: "Física I + Laboratorio", semestre: 2, prerrequisitos: ["Matemáticas Básicas"] },
  { nombre: "Química Orgánica", semestre: 2, prerrequisitos: ["Química Fundamental"] },
  { nombre: "Seminario Constitución y Ética", semestre: 2, prerrequisitos: [] },
  { nombre: "Fund. Sistemas Socioecológicos", semestre: 2, prerrequisitos: [] },

  // TERCER SEMESTRE
  { nombre: "Cálculo Multivariable", semestre: 3, prerrequisitos: ["Cálculo Monovariable"] },
  { nombre: "Ecuaciones Diferenciales", semestre: 3, prerrequisitos: ["Álgebra Lineal", "Cálculo Monovariable"] },
  { nombre: "Fundamentos de Ecología", semestre: 3, prerrequisitos: ["Fund. Sistemas Socioecológicos"] },
  { nombre: "Fisicoquímica Ambiental", semestre: 3, prerrequisitos: ["Química Fundamental", "Física I + Laboratorio"] },
  { nombre: "Taller I ISA", semestre: 3, prerrequisitos: ["Fund. Sistemas Socioecológicos"] },

  // CUARTO SEMESTRE
  { nombre: "Probabilidad y Estadística", semestre: 4, prerrequisitos: ["Cálculo Multivariable"] },
  { nombre: "Fund. Gestión Ambiental", semestre: 4, prerrequisitos: ["Seminario Constitución y Ética", "Fund. Sistemas Socioecológicos"] },
  { nombre: "Química Ambiental + Lab", semestre: 4, prerrequisitos: ["Fisicoquímica Ambiental", "Química Orgánica"] },
  { nombre: "Taller II ISA", semestre: 4, prerrequisitos: ["Taller I ISA", "Química Ambiental + Lab"] },
  { nombre: "Microbiología Ambiental + Lab", semestre: 4, prerrequisitos: ["Química Orgánica"] },

  // QUINTO SEMESTRE
  { nombre: "Fund. de Fluidos para ISA", semestre: 5, prerrequisitos: ["Física I + Laboratorio", "Ecuaciones Diferenciales"] },
  { nombre: "Gestión Ambiental de Proyectos", semestre: 5, prerrequisitos: ["Fund. Gestión Ambiental"] },
  { nombre: "Cartografía y SIG", semestre: 5, prerrequisitos: ["Probabilidad y Estadística"] },
  { nombre: "Procesos Ambientales I", semestre: 5, prerrequisitos: ["Química Ambiental + Lab"] },
  { nombre: "Taller III ISA", semestre: 5, prerrequisitos: ["Taller II ISA"] },
  { nombre: "Fund. Procesos Sociales", semestre: 5, prerrequisitos: ["Fund. Sistemas Socioecológicos"] },

  // SEXTO SEMESTRE
  { nombre: "Hidráulica Aplicada para ISA", semestre: 6, prerrequisitos: ["Fund. de Fluidos para ISA"] },
  { nombre: "Hidrología", semestre: 6, prerrequisitos: ["Probabilidad y Estadística", "Cartografía y SIG"] },
  { nombre: "Procesos Ambientales II + Lab", semestre: 6, prerrequisitos: ["Procesos Ambientales I"] },
  { nombre: "Fundamentos de Suelos", semestre: 6, prerrequisitos: ["Química Ambiental + Lab"] },
  { nombre: "Epidemiología y Salud Ambiental", semestre: 6, prerrequisitos: ["Probabilidad y Estadística", "Microbiología Ambiental + Lab"] },

  // SÉPTIMO SEMESTRE
  { nombre: "Saneamiento Rural y Periurbano", semestre: 7, prerrequisitos: ["Epidemiología y Salud Ambiental", "Hidráulica Aplicada para ISA"] },
  { nombre: "Evaluación Económica Proyectos", semestre: 7, prerrequisitos: ["Gestión Ambiental de Proyectos"] },
  { nombre: "Sistemas de Abastecimiento de Agua", semestre: 7, prerrequisitos: ["Hidráulica Aplicada para ISA", "Hidrología"] },
  { nombre: "Procesos Ambientales III + Lab", semestre: 7, prerrequisitos: ["Procesos Ambientales II + Lab"] },
  { nombre: "Taller IV ISA", semestre: 7, prerrequisitos: ["Taller III ISA"] },
  { nombre: "Gestión Integral de Residuos", semestre: 7, prerrequisitos: ["Procesos Ambientales III + Lab", "Fundamentos de Suelos"] },

  // OCTAVO SEMESTRE
  { nombre: "Seminario de Trabajo de Grado", semestre: 8, prerrequisitos: [] },
  { nombre: "Diseño de PTAP", semestre: 8, prerrequisitos: ["Procesos Ambientales II + Lab"] },
  { nombre: "Gestión Calidad del Aire", semestre: 8, prerrequisitos: ["Fund. Gestión Ambiental", "Epidemiología y Salud Ambiental"] },
  { nombre: "Taller V ISA", semestre: 8, prerrequisitos: ["Taller IV ISA"] },

  // NOVENO SEMESTRE
  { nombre: "Trabajo de Grado I", semestre: 9, prerrequisitos: ["Seminario de Trabajo de Grado"] },
  { nombre: "Diseño de PTAR", semestre: 9, prerrequisitos: ["Procesos Ambientales III + Lab"] },
  { nombre: "Sistemas de Alcantarillado", semestre: 9, prerrequisitos: ["Diseño de PTAP"] },
  { nombre: "Instalaciones Hidrosanitarias", semestre: 9, prerrequisitos: [] },
  { nombre: "Taller VI ISA", semestre: 9, prerrequisitos: ["Taller V ISA"] },

  // DÉCIMO SEMESTRE
  { nombre: "Trabajo de Grado II", semestre: 10, prerrequisitos: ["Trabajo de Grado I"] },
];

/*
🌟 PASO 2: Mostrar materias como tarjetas interactivas estilo Ghibli
*/
const contenedor = document.querySelector(".malla");

materias.forEach(m => {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerHTML = `
    <h3>${m.nombre}</h3>
    <p><strong>Semestre:</strong> ${m.semestre}</p>
    ${
      m.prerrequisitos.length
        ? `<p><strong>Prerrequisitos:</strong> ${m.prerrequisitos.join(", ")}</p>`
        : "<p><em>Sin prerrequisitos</em></p>"
    }
  `;
  contenedor.appendChild(div);
});

/*
🎵 PASO 3: Botón para activar/desactivar música de fondo
*/
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  audio.muted = !audio.muted;
}

/*
📜 PASO 4: Mostrar un modal con más información al hacer clic en una materia
*/
document.addEventListener("click", (e) => {
  if (e.target.closest(".materia")) {
    const nombre = e.target.closest(".materia").querySelector("h3").textContent;
    document.getElementById("modal-info").innerHTML = `
      <h2>${nombre}</h2>
      <p>Esta asignatura forma parte del plan de estudios de ISA. Puedes consultar más en la malla curricular oficial.</p>
    `;
    document.getElementById("modal").style.display = "flex";
  }

  if (e.target.classList.contains("close")) {
    document.getElementById("modal").style.display = "none";
  }
});

/*
🌌 PASO 5: Efecto parallax suave del fondo al mover el mouse
*/
document.addEventListener("mousemove", function(e) {
  const x = (e.clientX / window.innerWidth) * 10;
  const y = (e.clientY / window.innerHeight) * 10;
  document.body.style.backgroundPosition = `${50 - x}% ${50 - y}%`;
});
