import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react'

export default function HomeScreen() {
  const [nombre, setNombre] = useState("Ingrese su nombre");
  const [apellido, setApellido] = useState("Ingrese su apellido");
  const [nombreCompleto, setNombreCompleto] = useState("");
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
        <ThemedText type="title">Ejemplo Text Input</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText> Hola {nombreCompleto }</ThemedText>
        <TextInput
          value={nombre}
          style={styles.cajaTexto}
          onChangeText={(txt) => {
            setNombre(txt);
          }}
        />
        <TextInput
          style={styles.cajaTexto}
          value={apellido}
          onChangeText={(txt) => {
            setApellido(txt);
          }}
        />
        <Button
          title='SALUDAR'
          onPress={() => { 
            let completo = nombre + " " + apellido;
            setNombreCompleto(completo);
        }}
        />
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
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    color: "white"
  }
});
