const temas = [
    "Arte",
    "Ciencia",
    "Tecnología",   
    "Desarrollo web.",
    "Otro tema",
    "Juegos",
    "Poesia",
    "paises"
];

let temaActual = 0;

function cambiarTema() {
    //const parrafos = document.querySelectorAll('p');
    const elParrafo = document.querySelector('.otro-parrafo');
    temaActual = (temaActual + 1) % temas.length;
    elParrafo.innerHTML = temas[temaActual];
}
