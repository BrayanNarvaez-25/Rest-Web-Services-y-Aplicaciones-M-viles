import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App de Productos</Text>
      <Button
        title="Iniciar Sesion"
        icon={<Entypo name="login" size={16} color="#fff" marginRight={5} />}
        buttonStyle={styles.loginButton}
        onPress={() => navigation.replace("Drawer")} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#00a680',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});
