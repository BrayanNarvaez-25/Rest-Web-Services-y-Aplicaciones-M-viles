import { Image } from 'expo-image';
import { Platform, StyleSheet,Button, Alert } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const iniciar = () => {
    Alert.alert("MENSAJE","SU SESIÓN HA INICIADO");
  }

  const finalizar = () => {
    Alert.alert("MENSAJE","SU SESIÓN HA FINALIZADO");
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
        <ThemedText type="title">RETO 20 - BOTONES</ThemedText>
      </ThemedView>
      <Button
        title='INICIAR'
        onPress={() => {
          iniciar();
        }}
      />
      <Button
        title='FINALIZAR'
        onPress={() => {
          finalizar();
        }}
      />
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
