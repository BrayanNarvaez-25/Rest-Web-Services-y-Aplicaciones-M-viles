ejecutarSumar = () =>{
    let valor1 = recuperarInt("txtValor1");
    let valor2 = recuperarInt("txtValor2");
    let resultadoSuma = sumar(valor1,valor2)
    console.log(resultadoSuma);
}

ejecutarResta = () => {
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultadoResta = restar(valor1,valor2);
    console.log(resultadoResta);
}

sumar = (num1,num2) =>{
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

restar = (num1,num2) => {
    let resultado;
    resultado = num1 - num2;
    return resultado;
}