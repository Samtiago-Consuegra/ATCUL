document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtonPrograma = document.getElementById("dropdown-button-programa");
    const dropdownListPrograma = document.getElementById("myDropdownPrograma");
    const dropdownButtonPeriodo = document.getElementById("dropdown-button-periodo");
    const dropdownListPeriodo = document.getElementById("myDropdownPeriodo");

    dropdownButtonPrograma.addEventListener("click", function () {
        dropdownListPrograma.classList.toggle("slide-down");
    });

    dropdownButtonPeriodo.addEventListener("click", function () {
        dropdownListPeriodo.classList.toggle("slide-down");
    });

    document.addEventListener("click", function (event) {
        if (!event.target.matches('.dropdown-button')) {
            dropdownListPrograma.classList.remove("slide-down");
            dropdownListPeriodo.classList.remove("slide-down");
        }
    });
});