import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';

export default function HomeScreen() {
  const [contadorEstado, setContadorEstado] = useState(0);
  const [vidas, setVidas] = useState(5);

  useEffect(() => {
    if (vidas == 0) {
      Alert.alert("ADVERTENCIA", "GAME OVER");
    }
  }, [vidas]);

  const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
  }

  const decrementar = () => {
    setContadorEstado(contadorEstado - 1)
  }

  const perderVidas = () => {
    if (vidas > 0) {
      setVidas(vidas - 1);
    } else {
      Alert.alert("ADVERTENCIA", "YA NO PUEDES PERDER MÁS VIDAS")
    }
    console.log("PERDIENDO VIDAS: " + vidas);
  }

  const premiar = () => {
    setVidas(vidas + 3);
    console.log("GANANDO VIDAS: " + vidas);
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
        <ThemedText type="title">Variables de Estado</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText> CONTADOR ESTADO: {contadorEstado} </ThemedText>
        <ThemedText> VIDAS: {vidas} </ThemedText>
        <Button
          title='INCREMENTAR'
          onPress={incrementar}
        />
        <Button
          title='DECREMENTAR'
          onPress={decrementar}
        />
        <Button
          title='PERDER VIDA'
          onPress={perderVidas}
        />
        <Button
          title='PREMIAR'
          onPress={premiar}
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
});
