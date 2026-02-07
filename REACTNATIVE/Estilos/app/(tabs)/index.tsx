import { Image } from 'expo-image';
import { Platform, StyleSheet,Button,View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { green } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button title='COMP 1' color="red"/>
      <Button title='COMP 2' color="green"/>
      <Button title='COMP 3'/>
    </View>
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
  container: {
    flex: 1,
    backgroundColor: '#131212',
    flexDirection:"row",
    alignItems:"flex-end", //secundario
    justifyContent:"space-around" //principal
  }
});
