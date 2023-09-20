/* Cor Fone */
function imgSlider(e) {
    document.querySelector('#phone').src = e;
}

/* Cor Fundo */
function fundoCor(color) {
    const fundo = document.querySelector('.col-dir');
    fundo.style.background = color;
}