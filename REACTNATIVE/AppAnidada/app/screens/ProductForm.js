import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { saveGrade, updateGrade } from "../services/ProductService";

export default function ProductForm({ navigation, route }) {
  //---------- Detectar si es nuevo ----------
  let isNew = true;
  let subjetR;
  let gradeR;

  if (route.params.notita != null) {
    isNew = false;
  }

  if (!isNew) {
    subjetR = route.params.notita.subjet;
    gradeR = route.params.notita.grade.toString();;
  }

  //---------- UseState ----------
  const [subjet, setSubjet] = useState(subjetR);
  const [grade, setGrade] = useState(gradeR);
  const [errorSubjet, setErrorSubetj] = useState();
  const [errorGrade, setErrorGrade] = useState();
  let hasError = false;


  //---------- Guardar el objeto ----------
  const save = () => {
    setErrorGrade(null);
    setErrorSubetj(null);
    validate();

    if (!hasError) {
      if (isNew) {
        saveGrade({ subjet: subjet, grade: grade });
      } else {
        updateGrade({ subjet: subjet, grade: grade })
      }
      navigation.goBack();
      route.params.fnRefresh();
    };
  };

  //---------- Validaciones -----------
  const validate = () => {
    if (subjet == null || subjet == "") {
      setErrorSubetj("Debe ingresar una materia");
      hasError = true;
    };
    let gradeFloat = parseFloat(grade);
    if (grade == null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
      setErrorGrade("Debe ingresar una nota entre 0 y 10");
      hasError = true;
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa una Materia y su Nota</Text>
      <Input
        value={subjet}
        onChangeText={setSubjet}
        placeholder='Ejemplo: Matemáticas'
        placeholderTextColor="green"
        label="Materia"
        labelStyle={{color:"green"}}
        inputContainerStyle={{borderBottomColor:"green"}}
        inputStyle={{ color: "green" }} 
        errorMessage={errorSubjet}
        disabled={!isNew}
      />
      <Input
        value={grade}
        onChangeText={setGrade}
        placeholder='0 - 10'
        placeholderTextColor="green"
        label="Nota"
        labelStyle={{color:"green"}}
        inputContainerStyle={{borderBottomColor:"green"}}
        inputStyle={{ color: "green" }} 
        errorMessage={errorGrade}
        keyboardType='numeric'
      />
      <Button
        title="Guardar"
        titleStyle={{color: "black", fontWeight: "bold"}}
        icon={<Entypo name="save" size={16} color="black" marginRight={5} />}
        buttonStyle={styles.loginButton}
        onPress={save}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 5,
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
