ejecutarOperacion = (operar) => {
    let valor1 = recuperarInt("txtValor1");
    let valor2 = recuperarInt("txtValor2");
    let resultado = operar(valor1,valor2);
    console.log(resultado);
}

sumar = (num1, num2) => {
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

restar = (num1, num2) => {
    let resultado;
    resultado = num1 - num2;
    return resultado;
}

ejecutar = (fn) => {
    console.log("estoy ejecutando funciones...");
    fn();
}

imprimir = () => {
    console.log("estoy imprimiendo");
}

saludar = () => {
    alert("APRENDIENDO PROGRAMACION FUNCIONAL");
}

testEjecutar = () => {
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(() => {
        alert("SOY UNA FUNCION SIN NOMBRE");
    });
}

