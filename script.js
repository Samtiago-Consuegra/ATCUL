document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtonPrograma = document.getElementById("dropdown-button-programa");
    const dropdownListPrograma = document.getElementById("myDropdownPrograma");
    const dropdownButtonPeriodo = document.getElementById("dropdown-button-periodo");
    const dropdownListPeriodo = document.getElementById("myDropdownPeriodo");
    const mensajeVacio = document.getElementById("mensaje-vacio");

    dropdownButtonPrograma.addEventListener("click", function () {
        dropdownListPrograma.classList.toggle("slide-down");
        mensajeVacio.style.display = "none"; // Oculta el mensaje al mostrar las opciones
    });

    dropdownButtonPeriodo.addEventListener("click", function () {
        dropdownListPeriodo.classList.toggle("slide-down");
        mensajeVacio.style.display = "none"; // Oculta el mensaje al mostrar las opciones
    });

    document.addEventListener("click", function (event) {
        if (!event.target.matches('.dropdown-button')) {
            dropdownListPrograma.classList.remove("slide-down");
            dropdownListPeriodo.classList.remove("slide-down");

            // Muestra el mensaje si no se selecciona ninguna opción
            if (!dropdownButtonPrograma.innerText.includes("Seleccionar") && !dropdownButtonPeriodo.innerText.includes("Seleccionar")) {
                mensajeVacio.style.display = "none";
            } else {
                mensajeVacio.style.display = "block";
            }
        }
    });
});
