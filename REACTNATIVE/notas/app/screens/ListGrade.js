import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { getGrades } from '../services/GradeServices'
import { FAB, ListItem, Avatar, } from '@rneui/base';
import { useState, useEffect } from 'react';

export const ListGrade = ({ navigation }) => {
  /*const [grades, setGrades] = useState(getGrades());

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Actualizar la lista cada vez que la pantalla recibe el foco
      setGrades([...getGrades()]);
    });

    return unsubscribe;
  }, [navigation]);*/

  const [time, setTime] = useState();

  const refreshList = () => {
    setTime(new Date().getTime());
  }

  const ItemGrade = ({ nota }) => {
    return (
      <TouchableHighlight onPress={() => {
        navigation.navigate("GradeFormNav", { notita: nota, fnRefresh:refreshList });
      }}>
        <ListItem bottomDivider>
          <Avatar
            title={nota.subjet.substring(0, 1)}
            containerStyle={{ backgroundColor: "black" }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title> {nota.subjet} </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
            <ListItem.Title> {nota.grade} </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron>

          </ListItem.Chevron>
        </ListItem>
      </TouchableHighlight>
    )
  }

  return <View style={styles.container}>
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
      placement='right'
      onPress={() => { navigation.navigate("GradeFormNav", { notita: null,fnRefresh:refreshList }) }}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});