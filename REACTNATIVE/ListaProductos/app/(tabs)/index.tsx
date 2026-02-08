import { StyleSheet, Button, View, TextInput, Text, FlatList, Alert, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useState, useEffect } from 'react';
import { useRef } from 'react';



interface Porductos {
  nombre: string,
  categoria: string,
  precioCompra: string,
  precioVenta: string,
  id: string
};

interface itemProductoProps {
  producto: Porductos,
  index: number
}

export default function HomeScreen() {

  const [listaProductos, setListaProductos] = useState([
    { nombre: "Papitas", categoria: "Snacks", precioCompra: "0.30", precioVenta: "0.55", id: "0" },
    { nombre: "Galletas", categoria: "Snacks", precioCompra: "0.40", precioVenta: " 0.45", id: "1" },
  ]);

  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precioCompra, setprecioCompra] = useState("");
  const [precioVenta, setprecioVenta] = useState("");
  const [numElementos, setNumElementos] = useState(listaProductos.length);
  const [esNuevo, setEsNuevo] = useState(true);
  const [indiceSelecionado, setIndiceSelecionado] = useState<number | null>(null);
  const scrollRef = useRef<ScrollView>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [indiceAEliminar, setIndiceAEliminar] = useState<number | null>(null);



  useEffect(() => {
    setNumElementos(listaProductos.length);
  }, [listaProductos]);

  useEffect(() => {
    if (precioCompra === "") {
      setprecioVenta("");
      return;
    }

    const compra = parseFloat(precioCompra);

    if (isNaN(compra)) {
      setprecioVenta("");
      return;
    }

    const venta = compra * 1.20;
    setprecioVenta(venta.toFixed(2));
  }, [precioCompra]);


  let guardarProducto = () => {
    if (esNuevo) {
      if (codigo === "" || nombre === "" || categoria === "" || precioCompra === "") {
        Alert.alert("INFO", "Debe llenar todos los campos obligatorios");
        return;
      }

      if (existeProducto()) {
        Alert.alert("INFO", "Ya existe un producto con el código " + codigo);
        return;
      }

      let producto = {
        nombre: nombre,
        categoria: categoria,
        precioCompra: precioCompra,
        precioVenta: precioVenta,
        id: codigo
      };

      setListaProductos([...listaProductos, producto]);

    } else {
      if (indiceSelecionado === null) return;

      const nuevaLista = [...listaProductos];

      nuevaLista[indiceSelecionado] = {
        ...nuevaLista[indiceSelecionado],
        nombre: nombre,
        categoria: categoria,
        precioCompra: precioCompra,
        precioVenta: precioVenta
      };

      setListaProductos(nuevaLista);
    };
  }
  let limpiar = () => {
    setCodigo("");
    setNombre("");
    setCategoria("");
    setprecioCompra("");
    setprecioVenta("");
    setEsNuevo(true)
  };

  let existeProducto = () => {
    for (let i = 0; i < listaProductos.length; i++) {
      if (listaProductos[i].id == codigo) {
        return true;
      }
    }
    return false;
  };

  let ItemProducto = ({ index, producto }: itemProductoProps) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.containerIdx}>
          <Text style={styles.textoPrincipal}> {index}</Text>
        </View>
        <View style={styles.containerData}>
          <Text style={styles.textoPrincipal}> {producto.nombre} </Text>
          <Text style={styles.textoSecunario}> {producto.categoria}</Text>
        </View>
        <View style={styles.containerPrecio}>
          <Text style={styles.textoPrincipal}> {producto.precioVenta}</Text>
        </View>
        <View style={styles.containerBotones}>
          <TouchableOpacity style={styles.buttonE}
            onPress={() => {
              setCodigo(producto.id);
              setNombre(producto.nombre);
              setCategoria(producto.categoria);
              setprecioCompra(producto.precioCompra)
              setEsNuevo(false)
              let indice = parseInt(producto.id)
              setIndiceSelecionado(indice);
            }}
          >
            <Text style={styles.buttonLetra}> E </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonX}
            onPress={() => {
              setIndiceAEliminar(index)
              setModalVisible(true)
            }}
          >
            <Text style={styles.buttonLetra}> X </Text>
          </TouchableOpacity >
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.textoPrincipal}>PRODUCTOS</Text>
      </View>
      <ScrollView
        ref={scrollRef}
        style={styles.containerTituloo}
        contentContainerStyle={styles.formScroll}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={!esNuevo}
      >
        <View style={styles.containerCajas}>
          <TextInput
            style={[styles.txt,
            !esNuevo && styles.txtDisabled]
            }
            value={codigo}
            placeholder='CÓDIGO'
            placeholderTextColor="green"
            onChangeText={setCodigo}
            keyboardType='numeric'
            editable={esNuevo}
          />
          <TextInput
            style={styles.txt}
            value={nombre}
            placeholder='NOMBRE'
            placeholderTextColor="green"
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.txt}
            value={categoria}
            placeholder='CATEGORIA'
            placeholderTextColor="green"
            onChangeText={setCategoria}
          />
          <TextInput
            style={styles.txt}
            value={precioCompra}
            placeholder='PRECIO COMPRA'
            placeholderTextColor="green"
            keyboardType='numeric'
            onChangeText={setprecioCompra}
          />
          <TextInput
            style={[styles.txt,
            !esNuevo && styles.txtDisabled]
            }
            value={precioVenta}
            placeholder='PRECIO VENTA'
            placeholderTextColor="green"
            keyboardType='numeric'
            editable={false}
            onChangeText={setprecioVenta}
          />
          <View style={styles.areaBotones}>

            <Button
              title='Nuevo'
              onPress={() => {
                limpiar();
              }}
              color="green"
            />
            <Button
              title='GUARDAR'
              onPress={() => {
                guardarProducto();
              }}
              color="green"
            />
            <Text style={styles.textoSecunario}>Productos: {numElementos}</Text>
          </View>
        </View>
      </ScrollView>
      {/* OVERLAY (bloquea la lista cuando se edita) */}
      {!esNuevo && <View style={styles.overlay} />}
      <View style={styles.containerContenido}>
        <FlatList
          style={styles.lista}
          data={listaProductos}
          renderItem={({ item, index }) => {
            return <ItemProducto index={index} producto={item} />
          }}

          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.containerPie}>
        <Text style={styles.textoSecunario}>Autor: Brayan Narváez</Text>
      </View>
      <Modal
        transparent animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            <Text style={styles.modalText}>
              ¿Está seguro que quiere eliminar?
            </Text>

            <View style={styles.modalButtons}>
              <Button
                title="Cancelar"
                color="red"
                onPress={() => {
                  setModalVisible(false);
                  setIndiceAEliminar(null);
                }}
              />
              <Button
                title="Aceptar"
                color="green"
                onPress={() => {
                  if (indiceAEliminar !== null) {
                    setListaProductos(
                      listaProductos.filter((_, i) => i !== indiceAEliminar)
                    );
                  }
                  setModalVisible(false);
                  setIndiceAEliminar(null);
                }}
              />
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: 10,
  },
  lista: {
    //backgroundColor: "mediumseagreen",
  },
  itemPersona: {
    backgroundColor: "lightgreen",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "green",
    borderRadius: 10
  },
  textoPrincipal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green"
  },
  textoSecunario: {
    fontStyle: "italic",
    fontSize: 16,
    color: "green"
  },
  containerTitulo: {
    flex: 1,
    //backgroundColor: "pink",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20
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
    borderWidth: 2,
    borderColor: "green",
    paddingHorizontal: 5,
    marginBottom: 10,
    color: "green",
    borderRadius: 10
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50
  },
  containerPrecio: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  containerCajas: {
    flex: 4,
    //backgroundColor: "pink",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10
  },
  txtDisabled: {
    backgroundColor: "#44ef86",
    color: "#248e4d",
    borderColor: "#248e4d"
  },
  containerTituloo: {
    maxHeight: 320
  },
  formScroll: {
    paddingBottom: 20
  },
  overlay: {
    position: "absolute",
    top: 360,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 10,
  },
  buttonE: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  buttonX: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
  buttonLetra: {
    color: "white"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },

  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "green",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },


});
