const formularioDatos = document.querySelector(".formulario-datos");

formularioDatos.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const paginaDestino = formularioDatos.dataset.destino;
    window.location.href = paginaDestino;
});
