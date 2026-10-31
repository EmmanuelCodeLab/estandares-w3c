const botonConsejo = document.querySelector("#btnConsejo");
if (botonConsejo) {
  botonConsejo.addEventListener("click", () => {
    const consejo = document.querySelector("#consejo");
    const expandido = botonConsejo.getAttribute("aria-expanded") === "true";
    botonConsejo.setAttribute("aria-expanded", String(!expandido));
    consejo.hidden = expandido;
    botonConsejo.textContent = expandido ? "Mostrar consejo ecológico" : "Ocultar consejo ecológico";
  });
}

const formulario = document.querySelector("#formContacto");
if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("#nombre").value.trim();
    const resultado = document.querySelector("#resultado");
    resultado.textContent = `Gracias, ${nombre}. Tu consulta fue validada en esta demostración.`;
    formulario.reset();
  });
}
