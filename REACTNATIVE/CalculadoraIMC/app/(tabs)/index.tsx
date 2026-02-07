
import {StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { useState } from 'react'

export default function HomeScreen() {
  const [estatura,setEstatura] = useState("");
  const [peso,setPeso] = useState("");
  const [imc,setImc] = useState("");
  const [estado,setEstado] = useState("");

  const calcularImc = () =>{
    let estaturaF = parseFloat(estatura)/100;
    let pesoF = parseFloat(peso);
    let imc = pesoF / (estaturaF*estaturaF);
    setImc(imc.toFixed(2).toString());

    if(imc < 18.5){
      setEstado("inferior a lo normal");
    }else if(imc >= 18.5 && imc < 25.0){
      setEstado("normal");
    }else if(imc >= 25.0 && imc < 30){
      setEstado("superior a lo normal");
    }else if(imc > 30){
      setEstado("obesidad");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC - Reto 25</Text>
      
      <TextInput 
        style={styles.caja}
        value={estatura}
        placeholder='Ingrese su estatura'
        placeholderTextColor="green"
        keyboardType='numeric'
        onChangeText={setEstatura}
        cursorColor="green"
      />

      <TextInput
        style={styles.caja}
        value={peso}
        placeholder='Ingrese su peso en kilogramos'
        placeholderTextColor="green"
        keyboardType='numeric'
        onChangeText={setPeso}
      />

      <Button
        title='CALCULAR IMC'
        onPress={calcularImc}
        color="green"
      />

      <Text style={styles.resultado}>Su IMC es: {imc}</Text>
      <Text style={styles.resultado}>Su estado de salud es: {estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 10
  },
  caja: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color:"green"
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 125,
    fontWeight: "bold",
    color:"green"
  },
  resultado: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color:"green"
  }
});
