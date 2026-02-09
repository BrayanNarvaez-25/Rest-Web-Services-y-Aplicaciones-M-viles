import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert } from 'react-native';
import { Button, Icon,Input } from '@rneui/base'
import { useState } from 'react';


export default function App() {

  const [name,setName]= useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='INGRESE SU NOMBRE'
        label= "Nombre"
      />
      <Text>{name}</Text>
      <Button
        title="OK"
        icon={{
          name: 'reddit-alien',
          type: 'font-awesome',
          size: 20,
          color: 'white'
        }}
        onPress={()=>{
          Alert.alert("INFO","Su nombre es: " + name)
        }}
      />
      <Button
        title="cancel"
        icon={<Icon
          name= 'aliwangwang'
          type= 'antdesign'
          color= 'white'
        />}
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
});
