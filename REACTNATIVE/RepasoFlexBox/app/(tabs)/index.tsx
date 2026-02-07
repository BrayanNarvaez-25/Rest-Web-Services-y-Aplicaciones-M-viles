import { Image } from 'expo-image';
import { Platform, StyleSheet,View,Button} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Button title='X' color="black" />
        <Button title='Y' color="black"/>
        <Button title='Z' color="black"/>
      </View>
      <View style={styles.container3}>
        <View style={styles.container5}>
          <View style={styles.container7}>
            <Button title='Boton 1' color="black" />
            <Button title='Boton 2' color="black"/>
          </View>
          <View style={styles.container8}>
            <Button title='OPERACION 1' color="black" />
            <Button title='OPERACION 2' color="black"/>
            <Button title='OPERACION 3' color="black"/>
          </View>
        </View>
        <View style={styles.container6}>
            <Button title='ACCIÓN 1' color="black" />
            <Button title='ACCIÓN 2' color="black"/>
        </View>
      </View>
      <View style={styles.container4}>
        <Button title='BOTÓN FINAL' color="black"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "gray"
  },
  container2: {
    flex: 1,
    backgroundColor: "aqua",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  container3: {
    flex: 6,
    backgroundColor: "lime"
  },
  container4: {
    flex: 1,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  container5: {
    flex: 4,
    backgroundColor: "hotpink",
    flexDirection:"row"
  },
  container6: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  container7: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems: "stretch"
  },
  container8: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "flex-start"
  },
});
