import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { saveProduct, updateProduct } from "../services/GradesServices";

export default function ProductForm({ navigation, route }) {
  //---------- Refresh List ----------
  const refreshList = route.params.refreshList;
  //---------- Detectar si es nuevo ----------
  let isNew = true;
  let idR, nameR, categoryR, priceR;

  if (route.params.product != null) {
    isNew = false;
    idR = route.params.product.id.toString();
    nameR = route.params.product.name;
    categoryR = route.params.product.category;
    priceR = route.params.product.price.toString();
  }

  //---------- UseState ----------
  const [id, setid] = useState(idR || "");
  const [name, setname] = useState(nameR || "");
  const [category, setcategory] = useState(categoryR || "");
  const [price, setprice] = useState(priceR || "");

  //Errores
  const [errorId, seterrorId] = useState("");
  const [errorName, seterrorName] = useState("");
  const [errorCategory, seterrorCategory] = useState("");
  const [errorPrice, seterrorPrice] = useState("");
  let hasError = false;

  //---------- Guardar el objeto ----------
  const save = () => {
    // Limpiar errores
    seterrorId(null);
    seterrorName(null);
    seterrorCategory(null);
    seterrorPrice(null);
    validate();

    if (!hasError) {
      const product = {
        id: parseInt(id),
        name,
        category,
        price: parseFloat(price),
      };

      if (isNew) {
        saveProduct(product);
      } else {
        updateProduct(product);
      }

      // Refrescar la lista y volver
      refreshList?.();
      navigation.goBack();
    }
  };

  //---------- Validaciones -----------
  const validate = () => {
    if (id == null || id == "" || isNaN(id)) {
      seterrorId("Debe ingresar un ID numerico");
      hasError = true;
    }
    if (name == null || name == "") {
      seterrorName("Debe ingresar un nombre");
      hasError = true;
    }
    if (category == null || category == "") {
      seterrorCategory("Debe ingresar una categoria");
      hasError = true;
    }
    if (price == null || price == "" || isNaN(price) || price < 0) {
      seterrorPrice("Debe ingresar un precio numerico y valido");
      hasError = true;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa un Producto</Text>
      <Input
        value={id}
        placeholder="Ingrese un numero"
        label="ID:"
        keyboardType="numeric"
        onChangeText={setid}
        errorMessage={errorId}
        disabled={!isNew}
      />
      <Input
        placeholder="Ejemplo: Pepsi"
        label="Nombre:"
        value={name}
        onChangeText={setname}
        errorMessage={errorName}
      />
      <Input
        placeholder="Ejemplo: Bebida"
        label="Categoria:"
        value={category}
        onChangeText={setcategory}
        errorMessage={errorCategory}
      />
      <Input
        placeholder="Ingrese un numero"
        label="Precio:"
        keyboardType="numeric"
        value={price}
        onChangeText={setprice}
        errorMessage={errorPrice}
      />
      <Button
        title="Guardar"
        icon={<Entypo name="save" size={16} color="#fff" marginRight={5} />}
        buttonStyle={styles.loginButton}
        onPress={save}
      />
      <Text style={styles.title}>
        {name} {category}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#00a680",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
});