const formularioLogin = document.querySelector("#formulario-login");

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    window.location.href = "dashboard.html";
});
