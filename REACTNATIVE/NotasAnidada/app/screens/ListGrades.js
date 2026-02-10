import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { getProducts } from "../services/GradesServices";
import { ListItem, Avatar, FAB } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default function ProductList({ navigation }) {
  //Traer los productos
  const products = getProducts();

  //Refrescar la Pantalla para ver los cambios
  const [refreshTime, setRefreshTime] = useState();

  const refresh = () => setRefreshTime(new Date().getTime());

  //PROPS
  const ItemProduct = ({ product }) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate("ProductForm", { product, refreshList: refresh })}>
        <ListItem bottomDivider>
          <Avatar
            size={32}
            rounded
            title={product.id}
            containerStyle={{ backgroundColor: "#00a680" }}
          />
          <ListItem.Content>
            <ListItem.Title>{product.name}</ListItem.Title>
            <ListItem.Subtitle>{product.category}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Subtitle>$ {product.price}</ListItem.Subtitle>
          </ListItem.Content>
          <Entypo name="chevron-right" size={20} color="#999" />
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <ItemProduct product={item} />;
        }}
        keyExtractor={(item) => item.id}
        extraData={refreshTime}
      />
      <FAB
        title="+"
        //Posicion:
        placement="right"
        color="#00a680"
        onPress={() => {
          navigation.navigate("ProductForm", { refreshList: refresh });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
});
