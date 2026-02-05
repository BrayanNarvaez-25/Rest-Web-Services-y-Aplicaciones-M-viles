/*recupertarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente
}*/

//ARROW FUNCTIONS

recuperarTexto = (idComponente) => {
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente
}

recuperarInt = (idComponente) => {
    let valorTexto = recuperarTexto(idComponente);
    let valorInt = parseInt(valorTexto);
    return valorInt;
}

recuperarFloat = (idComponente) => {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}