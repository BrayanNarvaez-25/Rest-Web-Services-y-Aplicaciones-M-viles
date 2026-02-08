import { StyleSheet, Button, View, TextInput, Text, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';

interface Persona {
  nombre: string;
  apellido: string;
  cedula: string;
};

interface ItemPersonaProps {
  persona: Persona;
  indice: number;
};

let esNuevo = true;
let indiceSelecionado = -1;

export default function HomeScreen() {

  const [listaPersonas, setListaPeronas] = useState([
    { nombre: "Thor", apellido: "Thillas", cedula: "1732674589" },
    { nombre: "Amber", apellido: "Flores", cedula: "1793839483" },
    { nombre: "Peter", apellido: "Parker", cedula: "1734950294" },
  ]);
  const [txtCedula, setTxtCedula] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtApellido, setTxtApellido] = useState("");
  const [numElementos, setNumElementos] = useState(listaPersonas.length);

  useEffect(() => {
    setNumElementos(listaPersonas.length);
  }, [listaPersonas]);


  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert("INFO", "Ya existe una persona con la cédula " + txtCedula)
      } else {
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
        setListaPeronas([...listaPersonas, persona]);
      }

    } else (
      listaPersonas[indiceSelecionado].nombre = txtNombre,
      listaPersonas[indiceSelecionado].apellido = txtApellido
    )
    limpiar();
    setNumElementos(listaPersonas.length)
  }

  let limpiar = () => {
    setTxtCedula("");
    setTxtNombre("");
    setTxtApellido("");
    esNuevo = true;
  }

  let existePersona = () => {
    for (let i = 0; i < listaPersonas.length; i++) {
      if (listaPersonas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  }

  let ItemPersona = (props: ItemPersonaProps) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.containerIdx}>
          <Text style={styles.textoPrincipal}> {props.indice}</Text>
        </View>
        <View style={styles.containerData}>
          <Text style={styles.textoPrincipal}> {props.persona.nombre} {props.persona.apellido} </Text>
          <Text style={styles.textoSecunario}> {props.persona.cedula}</Text>
        </View>
        <View style={styles.containerBotones}>
          <Button
            title=' E '
            color="green"
            onPress={() => {
              setTxtCedula(props.persona.cedula);
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido);
              esNuevo = false;
              indiceSelecionado = props.indice
            }}
          />
          <Button
            title=' X '
            color="red"
            onPress={() => {
              indiceSelecionado = props.indice;
              listaPersonas.splice(indiceSelecionado, 1);
              console.log("Arreglo personas: " + listaPersonas)
              setNumElementos(listaPersonas.length)
            }}
          />
        </View>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cédula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='GUARDAR'
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      <View style={styles.containerContenido}>
        <FlatList
          style={styles.lista}
          data={listaPersonas}
          renderItem={(elemento) => {
            return <ItemPersona indice={elemento.index}
              persona={elemento.item}
            />
          }}
          keyExtractor={(item) => {
            return item.cedula
          }}
        />
      </View>
      <View style={styles.containerPie}>
        <Text>Autor: Brayan Narváez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  lista: {
    //backgroundColor: "mediumseagreen",
  },
  itemPersona: {
    backgroundColor: "lemonchiffon",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row"
  },
  textoPrincipal: {
    fontSize: 20
  },
  textoSecunario: {
    fontStyle: "italic",
    fontSize: 16
  },
  containerTitulo: {
    flex: 4,
    //backgroundColor: "pink",
    justifyContent: "center",
    alignContent: "center"
  },
  containerContenido: {
    flex: 6,
    //backgroundColor: "silver",
  },
  containerPie: {
    flex: 1,
    //backgroundColor: "violet",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5
  },
  containerIdx: {
    flex: 3,
    //backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  containerData: {
    flex: 8,
    //backgroundColor: "skyblue",
    padding: 5
  },
  containerBotones: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "skyblue",
    padding: 5
  },
  txt: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 5,
    marginBottom: 10
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
});
