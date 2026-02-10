import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';
import ProductList from '../screens/ProductList';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle:{backgroundColor: "black",borderTopColor:"green"},
      tabBarActiveTintColor:"green", tabBarInactiveTintColor:"gray"
    }}>
      <Tab.Screen
        name="Lista de Notas"
        component={ProductList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="product" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="eye" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
