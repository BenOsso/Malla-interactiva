
const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function verificarRequisitos(ramo, aprobados) {
  return ramo.requisitos.every(req => aprobados.includes(req));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  const aprobados = Object.keys(estadoRamos).filter(r => estadoRamos[r]);

  for (const [semestre, ramos] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";

      const puedeTomarse = verificarRequisitos(ramo, aprobados);
      if (!puedeTomarse && !estadoRamos[ramo.nombre]) {
        divRamo.classList.add("locked");
      }

      const check = document.createElement("input");
      check.type = "checkbox";
      check.disabled = !puedeTomarse && !estadoRamos[ramo.nombre];
      check.checked = estadoRamos[ramo.nombre] || false;

      check.addEventListener("change", () => {
        estadoRamos[ramo.nombre] = check.checked;
        guardarEstado();
        renderMalla();
      });

      const nombre = document.createElement("span");
      nombre.textContent = ramo.nombre;

      divRamo.appendChild(check);
      divRamo.appendChild(nombre);
      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
