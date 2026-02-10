import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { getGrades } from "../services/ProductService";
import { ListItem, Avatar, FAB } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default function ProductList({ navigation }) {
  //Traer los productos
  const grades = getGrades();

  //Refrescar la Pantalla para ver los cambios
  const [time, setTime] = useState();

  const refreshList = () => {
    setTime(new Date().getTime());
  }

  //PROPS
  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight onPress={() => {
        navigation.navigate("ProductForm", { notita: nota, fnRefresh: refreshList });
      }}>
        <ListItem bottomDivider
          containerStyle={{backgroundColor:"black", borderBottomColor: "green", borderBottomWidth: 1}}
          
        >
          <Avatar
            title={nota.subjet.substring(0, 1)}
            titleStyle={{color:"black"}}
            containerStyle={{ backgroundColor: "green" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title style={{color:"green"}}> {nota.subjet} </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title style={{color:"green"}}> {nota.grade} </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color="green"/>
        </ListItem>
      </TouchableHighlight>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notas</Text>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => {
          return (
            <ItemGrade nota={item} />
          )
        }}
        keyExtractor={(item) => { return item.subjet }}
      />
      <FAB
        title="+"
        //Posicion:
        titleStyle={{color:"black"}}
        placement="right"
        color="green"
        onPress={() => {
          navigation.navigate("ProductForm", { notita: null,fnRefresh:refreshList });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    color:"green"
  },
});
