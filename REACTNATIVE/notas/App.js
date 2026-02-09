import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GradeForm} from './app/screens/GradeForm';
import {ListGrade} from './app/screens/ListGrade';

const StackGrades = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrade}/>
        <StackGrades.Screen name='GradeFormNav' component={GradeForm}/>
        
      </StackGrades.Navigator>
    </NavigationContainer>
  );
};

