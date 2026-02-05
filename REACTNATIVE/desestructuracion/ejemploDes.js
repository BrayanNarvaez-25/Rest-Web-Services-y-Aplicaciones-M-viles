recuperar = () => {
    let frutas = ["banana", "manzana", "sandia"];
    frutas.push("mandarina");
    return frutas
}

testRecuperar = () => {
    let misFrtuas = recuperar();
    let fruta1 = misFrtuas[0];
    let fruta2 = misFrtuas[1];

    console.log("1: " + fruta1);
    console.log("2: " + fruta2);
}

testRecuperarDes = () => {
    let [fruta1,fruta2,fruta3] = recuperar();
    console.log("1: " + fruta1);
    console.log("2: " + fruta2);
    console.log("3: " + fruta3);
}