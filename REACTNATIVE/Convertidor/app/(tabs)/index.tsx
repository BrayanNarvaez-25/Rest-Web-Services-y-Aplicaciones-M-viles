import { Image } from 'expo-image';
import { Platform, StyleSheet,Button,TextInput } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {useState} from 'react'

export default function HomeScreen() {
  const [dolar,setDolar] = useState("Ingrese los dólares a convertir");
  const [resultado,setResultado] = useState(0);

  const pesosMx = () =>{
    let pesosMx = parseFloat(dolar) * 17.5;
    setResultado(pesosMx);
  }
  const pesosCol = () =>{
    let pesosCol = parseFloat(dolar) * 3644.91;
    setResultado(pesosCol);
  }
  const euros = () => {
    let euros = parseFloat(dolar) * 0.85;
    setResultado(euros);
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
        <ThemedText type="title">Convertidor - Reto 23</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput
        style={styles.cajaTexto}
        value={dolar}
        onChangeText={(txt) =>{
          setDolar(txt);
        }}
        />
        <Button
          title='PESOS MEXICANOS'
          onPress={pesosMx}
        />
        <Button
          title='PESOS COLOMBIANOS'
          onPress={pesosCol}
        />
        <Button
          title='EUROS'
          onPress={euros}
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
  },
});
