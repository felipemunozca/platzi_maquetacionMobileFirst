const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');
const tablaDivisas = document.querySelector('.main-currency-table');
const tablaComisiones = document.querySelector('.main-commission-table');

arrowRight.addEventListener('click', mostrarComisiones);
arrowLeft.addEventListener('click', mostrarDivisas);

function mostrarComisiones() {
    tablaDivisas.classList.add("d--none");
    tablaComisiones.classList.remove("d--none");
}

function mostrarDivisas() {
    tablaDivisas.classList.remove("d--none");
    tablaComisiones.classList.add("d--none");
}
