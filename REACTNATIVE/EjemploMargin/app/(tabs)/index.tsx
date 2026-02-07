import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View, TextInput, Text } from 'react-native';
import { useState } from 'react'


export default function HomeScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  return (
    <View style={styles.container1}>
      <Text style={styles.titulo}> EJEMPLLO MARGIN</Text>
      <TextInput
        style={styles.caja}
        value={nombre}
        onChangeText={setNombre}
        placeholder='Ingrese su nombre'
      />

      <TextInput
        style={styles.caja}
        value={apellido}
        onChangeText={setApellido}
        placeholder='Ingrese su apellido'
      />

      <Button
        title='OK'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column", //eje principal (vertical)
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 10
  },
  caja: {
    borderColor: "green",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 150,
    fontWeight: "bold",
  }
});
