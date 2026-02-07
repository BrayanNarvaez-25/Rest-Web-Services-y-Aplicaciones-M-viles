import { Image } from 'expo-image';
import { Platform, StyleSheet,Button,View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}></View>
      <View style={styles.container3}>
        <View style={styles.container4}></View>
        <View style={styles.container5}>
          <View style={styles.container6}></View>
          <View style={styles.container7}>
            <Button title='BTN 1'/>
            <Button title='BTN 2'/>
            <Button title='BTN 3'/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'gray',
      flexDirection: 'column'
    },
    container2: {
      flex:1,
      backgroundColor: 'aqua',
    },
    container3: {
      flex:3,
      backgroundColor: 'lime',
    },
    container4: {
      flex:1,
      backgroundColor: 'yellow',
    },
    container5: {
      flex:1,
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    container6: {
      flex:1,
      backgroundColor: 'gray',
    },
    container7: {
      flex:2,
      backgroundColor: 'blue',
      flexDirection: 'row', //eje principal
      justifyContent: 'space-around', //centrado (eje principal)
      alignItems: 'flex-end' //ocupa todo (eje secundario)
    }
});
