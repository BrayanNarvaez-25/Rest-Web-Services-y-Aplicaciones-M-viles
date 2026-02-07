import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, TextInput, } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { use, useState } from 'react'

export default function HomeScreen() {
  const [num1, setNum1] = useState("Ingrese el primer número");
  const [num2, setNum2] = useState("Ingrese el segundo número")
  const [resultado, setResultado] = useState(0);

  const sumar = () =>{
    let suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  }

  const restar = () =>{
    let resta = parseFloat(num1) - parseFloat(num2);
    setResultado(resta)
  }

  const multiplicar = () =>{
    let mmultiplicacion = parseFloat(num1) * parseFloat(num2);
    setResultado(mmultiplicacion);
  }

  const dividir = () => {
    let division = parseFloat(num1) / parseFloat(num2);
    setResultado(division);
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calculadora - Reto 22</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput
          style={styles.cajaTexto}
          value={num1} 
          keyboardType='numeric'
          onChangeText={(txt) => {
            setNum1(txt)
          }}
        />
        <TextInput
          value={num2}
          style={styles.cajaTexto}
          keyboardType='numeric'
          onChangeText={(txt) => {
            setNum2(txt)
          }}
        />
        <Button
          title='SUMAR'
          onPress={sumar}
        />
        <Button
          title='RESTAR'
          onPress={restar}
        />
        <Button
          title='MULTIPLICAR'
          onPress={multiplicar}
        />
        <Button
          title='DIVIDIR'
          onPress={dividir}
        />
        <ThemedText>Resultado: {resultado}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cajaTexto: {
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10
  }
});
