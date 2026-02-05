import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const despedirse = () => {
    Alert.alert("MENSAJE","Adiositooo");
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
        <ThemedText type="title">BRAYAN NARVÁEZ</ThemedText>
        <Button
          title="HOLA"
          //funcion que no recibe parámentros y no retorna nada
          onPress={()=>{
            Alert.alert("MENSAJE","Hola desde el botón");
          }}
        />
        <Button
          title="ADIOS"
          onPress={() => {
            despedirse();
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
});
